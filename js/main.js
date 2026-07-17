/* ============================================================
   MOTOSOLUTION — main.js
   Loader, navbar, hero canvas + typewriter, scroll reveals,
   parallax backgrounds, ambient particles.
   ============================================================ */
(function(){
  'use strict';

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const $  = (sel, ctx) => (ctx || document).querySelector(sel);
  const $$ = (sel, ctx) => Array.from((ctx || document).querySelectorAll(sel));

  /* ----------------------------------------------------------
     LOADER
  ---------------------------------------------------------- */
  function initLoader(){
    const loader = $('#loader');
    if(!loader){ return; }
    const fill = $('.loader-bar-fill', loader);

    document.body.classList.add('no-scroll');

    if(reduceMotion){
      loader.style.transition = 'opacity .3s ease';
      loader.style.clipPath = 'none';
      window.setTimeout(() => {
        loader.style.opacity = '0';
        window.setTimeout(finishLoad, 250);
      }, 200);
      return;
    }

    requestAnimationFrame(() => { if(fill) fill.style.width = '78%'; });

    const minDisplay = new Promise(res => setTimeout(res, 2200));
    const pageLoad = new Promise(res => {
      if(document.readyState === 'complete'){ res(); }
      else{ window.addEventListener('load', res, { once:true }); }
    });

    Promise.all([minDisplay, pageLoad]).then(() => {
      if(fill) fill.style.width = '100%';
      setTimeout(() => {
        loader.classList.add('loader-hide');
        loader.addEventListener('transitionend', finishLoad, { once:true });
      }, 250);
    });
  }

  function finishLoad(){
    const loader = $('#loader');
    if(loader) loader.style.display = 'none';
    document.body.classList.remove('no-scroll');
    playHeroIntro();
  }

  /* ----------------------------------------------------------
     HERO INTRO — badge / typewriter / subtitle / ctas / trust
  ---------------------------------------------------------- */
  function playHeroIntro(){
    const badge = $('#hero-badge');
    const sub   = $('#hero-sub');
    const ctas  = $('#hero-ctas');
    const trust = $('#hero-trust');

    if(badge) badge.classList.add('show');
    runTypewriter();

    setTimeout(() => sub && sub.classList.add('show'), reduceMotion ? 0 : 120);
    setTimeout(() => ctas && ctas.classList.add('show'), reduceMotion ? 0 : 260);
    setTimeout(() => trust && trust.classList.add('show'), reduceMotion ? 0 : 380);
  }

  function runTypewriter(){
    const lines = $$('#hero-heading .line > span');
    if(!lines.length) return;

    if(reduceMotion){
      return;
    }

    const cursor = document.createElement('span');
    cursor.className = 'tw-cursor';
    cursor.style.height = '.85em';
    cursor.setAttribute('aria-hidden', 'true');

    const originals = lines.map(el => el.textContent);
    lines.forEach(el => { el.textContent = ''; });

    let lineIndex = 0;
    let charIndex = 0;
    const speed = 42;

    function typeStep(){
      const currentLine = lines[lineIndex];
      const text = originals[lineIndex];

      if(charIndex === 0){ currentLine.appendChild(cursor); }

      if(charIndex < text.length){
        currentLine.insertBefore(document.createTextNode(text[charIndex]), cursor);
        charIndex++;
        setTimeout(typeStep, speed + Math.random() * 30);
      } else {
        cursor.remove();
        lineIndex++;
        charIndex = 0;
        if(lineIndex < lines.length){
          setTimeout(typeStep, 160);
        } else {
          currentLine.appendChild(cursor);
        }
      }
    }
    setTimeout(typeStep, 200);
  }

  /* ----------------------------------------------------------
     NAVBAR — scrolled state + mobile menu
  ---------------------------------------------------------- */
  function initNavbar(){
    const nav = $('#navbar');
    const hamburger = $('#hamburger');
    const mobMenu = $('#mob-menu');
    if(!nav) return;

    const onScroll = () => {
      nav.classList.toggle('scrolled', window.scrollY > 40);
    };
    window.addEventListener('scroll', onScroll, { passive:true });
    onScroll();

    if(hamburger && mobMenu){
      hamburger.addEventListener('click', () => {
        const open = mobMenu.classList.toggle('open');
        hamburger.setAttribute('aria-expanded', open ? 'true' : 'false');
        document.body.classList.toggle('no-scroll', open);
      });
      $$('a', mobMenu).forEach(a => a.addEventListener('click', () => {
        mobMenu.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
        document.body.classList.remove('no-scroll');
      }));
    }
  }

  /* ----------------------------------------------------------
     SCROLL REVEALS
  ---------------------------------------------------------- */
  function initReveals(){
    const items = $$('.reveal');
    if(!items.length) return;

    if(reduceMotion || !('IntersectionObserver' in window)){
      items.forEach(el => el.classList.add('in-view'));
      return;
    }

    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if(entry.isIntersecting){
          entry.target.classList.add('in-view');
          io.unobserve(entry.target);
        }
      });
    }, { threshold:0.15, rootMargin:'0px 0px -60px 0px' });

    items.forEach(el => io.observe(el));
  }

  /* ----------------------------------------------------------
     PARALLAX BACKGROUNDS (hero-bg + .section-bg)
  ---------------------------------------------------------- */
  function initParallax(){
    if(reduceMotion) return;

    const layers = $$('.hero-bg, .section-bg').map(el => ({
      el,
      speed: parseFloat(el.dataset.speed || '0.18')
    }));
    if(!layers.length) return;

    let ticking = false;
    function update(){
      const vh = window.innerHeight;
      layers.forEach(layer => {
        const rect = layer.el.parentElement.getBoundingClientRect();
        if(rect.bottom < -200 || rect.top > vh + 200) return;
        const center = rect.top + rect.height / 2 - vh / 2;
        const offset = center * layer.speed * -1;
        layer.el.style.transform = `translateY(${offset.toFixed(1)}px) scale(1.08)`;
      });
      ticking = false;
    }
    window.addEventListener('scroll', () => {
      if(!ticking){ requestAnimationFrame(update); ticking = true; }
    }, { passive:true });
    window.addEventListener('resize', update);
    update();
  }

  /* ----------------------------------------------------------
     PARTICLE FIELDS (canvas)
  ---------------------------------------------------------- */
  function makeParticleField(canvas, opts){
    const ctx = canvas.getContext('2d');
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const colors = opts.colors || ['225,27,34', '212,160,23'];
    const connect = !!opts.connect;
    let particles = [];
    let running = false;
    let w = 0, h = 0;

    function count(){
      const base = opts.density || 0.00009;
      return Math.round(Math.min(w * h * base, opts.max || 70));
    }

    function resize(){
      w = canvas.parentElement.clientWidth;
      h = canvas.parentElement.clientHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = w + 'px';
      canvas.style.height = h + 'px';
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      spawn();
      if(reduceMotion && !running) step_static();
    }

    function spawn(){
      const n = count();
      particles = new Array(n).fill(0).map(() => ({
        x: Math.random() * w,
        y: Math.random() * h,
        r: Math.random() * 1.6 + 0.6,
        vx: (Math.random() - 0.5) * (opts.speed || 0.12),
        vy: (Math.random() - 0.5) * (opts.speed || 0.12),
        c: colors[Math.floor(Math.random() * colors.length)],
        a: Math.random() * 0.5 + 0.25
      }));
    }

    function step(){
      ctx.clearRect(0, 0, w, h);
      particles.forEach(p => {
        p.x += p.vx; p.y += p.vy;
        if(p.x < 0 || p.x > w) p.vx *= -1;
        if(p.y < 0 || p.y > h) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.c},${p.a})`;
        ctx.fill();
      });
      if(connect){
        for(let i = 0; i < particles.length; i++){
          for(let j = i + 1; j < particles.length; j++){
            const a = particles[i], b = particles[j];
            const dx = a.x - b.x, dy = a.y - b.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if(dist < 120){
              ctx.beginPath();
              ctx.moveTo(a.x, a.y);
              ctx.lineTo(b.x, b.y);
              ctx.strokeStyle = `rgba(212,160,23,${0.12 * (1 - dist / 120)})`;
              ctx.lineWidth = 1;
              ctx.stroke();
            }
          }
        }
      }
      if(running) requestAnimationFrame(step);
    }

    function start(){ if(!running){ running = true; requestAnimationFrame(step); } }
    function stop(){ running = false; }

    resize();
    window.addEventListener('resize', resize);

    if(reduceMotion){
      // resize() already drew a static frame — never start the animation loop.
      return;
    }

    if('IntersectionObserver' in window){
      const io = new IntersectionObserver(entries => {
        entries.forEach(entry => entry.isIntersecting ? start() : stop());
      }, { threshold: 0.05 });
      io.observe(canvas.parentElement);
    } else {
      start();
    }

    function step_static(){
      ctx.clearRect(0, 0, w, h);
      particles.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.c},${p.a})`;
        ctx.fill();
      });
    }
  }

  function initParticleFields(){
    const hero = $('#hero-canvas');
    if(hero){
      makeParticleField(hero, { density:0.00012, max:90, connect:true, speed:0.15, colors:['225,27,34','212,160,23','245,245,243'] });
    }
    $$('canvas[data-particles]').forEach(c => {
      makeParticleField(c, { density:0.00006, max:36, connect:false, speed:0.1, colors:['212,160,23','225,27,34'] });
    });
  }

  /* ----------------------------------------------------------
     MISC
  ---------------------------------------------------------- */
  function initYear(){
    const y = $('#year');
    if(y) y.textContent = new Date().getFullYear();
  }

  /* ----------------------------------------------------------
     INIT
  ---------------------------------------------------------- */
  document.addEventListener('DOMContentLoaded', () => {
    initNavbar();
    initReveals();
    initParallax();
    initParticleFields();
    initYear();
    initLoader();
  });
})();
