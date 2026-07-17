# MotoSolution — Informe de Marca y Requerimientos para Landing Page

Este documento es el **brief oficial del proyecto** para el desarrollador encargado de construir la landing page de MotoSolution. Contiene toda la información de negocio, branding e identidad visual extraída del material proporcionado por el cliente (carpeta `imagenes/`), además de los lineamientos de estilo, efectos y forma de trabajo esperados.

---

## 1. Contexto del proyecto

- Se construirá una **landing page** (una sola página, scroll largo) para el negocio **MotoSolution**.
- El desarrollo parte de **una plantilla base en HTML** que ya fue entregada junto con un **prompt inicial** para adaptarla al negocio.
- El desarrollador va a **iterar sobre esa plantilla usando Claude Code**, dándole instrucciones directamente a Claude para ir ajustando diseño, contenido y funcionalidad.
- Este README es el **complemento de contexto/negocio** de ese prompt inicial: reúne la información real del cliente (marca, colores, productos, contacto) que Claude y el desarrollador necesitan para que el resultado sea fiel al negocio real, no genérico.

## 2. Cómo trabajar en este proyecto (instrucciones para el desarrollador)

- **Puedes iterar libremente con Claude** cuantas veces sea necesario hasta lograr el resultado deseado. No es un prompt único de "una sola pasada": dale instrucciones, revisa el resultado, corrige, vuelve a pedir ajustes, así hasta llegar al resultado final esperado.
- **La estructura de secciones de la landing es la que ya trae la plantilla base** — este documento no propone ni cambia el orden ni la cantidad de secciones, solo aporta el contenido de negocio y la identidad de marca para llenar esa estructura existente.
- Usa este documento como fuente de verdad para todo el contenido de negocio (nombre, teléfono, productos, servicios, marcas que se manejan).
- Usa la sección de **Branding** y **Paleta de colores** como fuente de verdad para la identidad visual.
- Cualquier dato que no esté claro o parezca ambiguo (ver notas marcadas como ⚠️ en este documento) debe confirmarse con el cliente antes de darlo por definitivo en el sitio.

## 3. Información del negocio

| Campo | Dato |
|---|---|
| **Nombre del negocio** | MotoSolution |
| **Giro** | Venta y maquila (fabricación bajo marca propia) de aceites para motocicleta |
| **Teléfono / WhatsApp** | 443 534 2127 |
| **Tienda física** | No tiene. Operación 100% remota/mayorista |
| **Cobertura** | Entrega a **todo el país** (México) |
| **Redes sociales** | No cuenta con ninguna actualmente. No incluir íconos/enlaces de redes sociales "de relleno" |
| **Certificación visible en producto** | NOM 116-SCFI-2018 (norma oficial mexicana para lubricantes, visible en la etiqueta de HB Power Oil — se puede usar como sello de confianza/calidad en el sitio) |

Como no hay redes sociales ni tienda física, el sitio debe apoyarse fuerte en **WhatsApp/teléfono como el canal de contacto principal** y en mensajes de confianza (marcas reconocidas, cobertura nacional, transparencia del producto) en lugar de prueba social tipo redes.

## 4. Productos y servicios

MotoSolution tiene **dos líneas de negocio** que deben quedar claramente diferenciadas en el sitio:

### 4.1 Venta de aceites de marcas reconocidas
Comercializan aceite para motocicleta de las siguientes marcas (confirmado en las fotos del cliente):

- Motul
- Yamaha (Yamalube)
- Repsol
- Castrol
- Mobil
- Zehn (Zehn Moto)
- Nexoil
- Akron
- Wape Mex

> ⚠️ En las imágenes también aparecen bujías NGK (`buias.jpeg`). El cliente no lo mencionó explícitamente en su mensaje como línea de producto — **confirmar con el cliente** si las bujías/refacciones también se deben incluir como producto en el sitio o si esa foto es solo referencia interna.

### 4.2 Maquila de aceite / marca propia (servicio clave a destacar)
Este es el diferenciador más fuerte del negocio y debería tener **su propia sección destacada** en la landing:

- MotoSolution **maquila aceite con la marca del cliente** (private label): el negocio del cliente pone su logo y etiqueta sobre el envase.
- Precio: **desde $55 MXN**, unidad de referencia mencionada por el cliente: *"por tarima de 1000 lts"*.
  > ⚠️ Esta unidad es ambigua tal cual la dio el cliente (¿precio por litro dentro de un pedido mínimo de 1000L? ¿precio por tarima completa?). **No publicar como precio cerrado sin confirmar la unidad exacta con el cliente.**
- El aceite que ellos maquilan internamente se llama **HB Power Oil** ("La mejor decisión en lubricación") — es su marca propia de base que usan como referencia/ejemplo de calidad del servicio de maquila.
- Ventaja competitiva a comunicar: el envase es **transparente**, y la etiqueta con el logo del cliente se coloca sobre él. Esto le da al comprador final la ventaja de **ver el aceite que está comprando** (color, transparencia, consistencia), algo que no se puede hacer con aceites económicos en envases opacos. Es un argumento de **confianza y calidad** muy fuerte para el mensaje de marketing.
- Público objetivo de este servicio: negocios (talleres, refaccionarias, distribuidores, marcas emergentes) que quieren vender aceite con su propia marca sin tener que fabricarlo ellos mismos.

## 5. Identidad visual / Branding

**MotoSolution no tiene logo propio.** El isotipo que aparece en `imagenes/HB power oil.jpeg`, `fgd.jpeg` y `sdf.jpeg` (velocímetro rojo + letras "HB", eslogan "La mejor decisión en lubricación") **no es el logo del negocio** — es solo la etiqueta/empaque de **HB Power Oil**, uno de los productos que MotoSolution maquila (ver sección 4.2). No debe usarse como logo del sitio ni tratarse como la identidad de marca de MotoSolution.

Dado que no hay un logo real disponible:

- La identidad visual del sitio debe construirse con un **wordmark tipográfico** (el nombre "MotoSolution" trabajado con una tipografía fuerte/distintiva), apoyado en la paleta de colores de la sección 6, en lugar de un isotipo/ícono.
- Ese wordmark es el que debe usarse en header, favicon, pantalla de carga y footer.
- Si más adelante el cliente entrega un logo real, se reemplaza el wordmark por ese logo sin que esto afecte la estructura del sitio.

## 6. Paleta de colores sugerida

Inspirada en la etiqueta de HB Power Oil (uno de los productos que maquilan) y en el color real del producto (aceite ámbar/dorado), pensada para un estilo **premium, corporativo y high-tech**:

| Uso | Color | Hex |
|---|---|---|
| Base / fondo principal (modo oscuro, look premium) | Negro corporativo | `#0A0A0B` |
| Superficie / secciones secundarias | Gris grafito | `#18181B` |
| Texto sobre fondo oscuro | Blanco hueso | `#F5F5F3` |
| Color de marca / acentos, CTA, íconos | Rojo racing (de la etiqueta de HB Power Oil) | `#E11B22` |
| Acento premium / detalles, hover, líneas divisorias | Dorado / ámbar (color del aceite) | `#D4A017` |
| Texto secundario / bordes sutiles | Gris medio | `#8A8A8E` |

Combinación **negro + blanco + rojo + dorado** da el efecto "high-tech / racing / enterprise" buscado, y el dorado conecta visualmente con el producto real (el color del aceite). Esta paleta es una propuesta de partida — el desarrollador puede ajustar tonos exactos mientras itera con Claude, siempre respetando esta lógica de marca.

## 7. Inventario de imágenes disponibles (`imagenes/`)

⚠️ **Importante:** varias de estas imágenes son **capturas de pantalla tomadas del celular** (se ve la barra de estado, la barra de navegación de Android, o incluso un pop-up de "Compartir pantalla con Live"). **No son aptas para publicarse tal cual** en un sitio de estilo premium/enterprise — deben recortarse al producto únicamente, reemplazarse por imágenes oficiales de cada marca, o usarse solo como referencia visual para el desarrollador/diseñador.

| Archivo | Contenido | Marca | ¿Lista para producción? |
|---|---|---|---|
| `HB power oil.jpeg` | Etiqueta/isotipo de HB Power Oil, primer plano | HB Power Oil (marca de producto maquilado, **no es el logo de MotoSolution**) | Solo como referencia visual en la sección de maquila |
| `fgd.jpeg` | Envase de aceite HB Power Oil, foto real, frontal | HB Power Oil | Sí, buena foto de producto |
| `sdf.jpeg` | Envase de aceite HB Power Oil, foto real, etiqueta trasera (incluye teléfono y NOM) | HB Power Oil | Sí, útil para mostrar transparencia del envase y datos oficiales |
| `1.jpeg` | Lata Wape Mex Sintético 20W-50 4T, foto real | Wape Mex | Sí, foto propia de buena calidad |
| `h.jpeg` | Lata Nexoil Racing 20W-50, foto real | Nexoil | Sí, foto propia de buena calidad |
| `buias.jpeg` | Cajas de bujías NGK apiladas, foto real | NGK | Confirmar con cliente si aplica como producto |
| `4.jpeg` | Captura de búsqueda de Google, botella Nexoil STX | Nexoil | No — reemplazar por imagen oficial |
| `67.jpeg` | Captura de búsqueda de Google, botella Akron | Akron | No — reemplazar por imagen oficial |
| `dfghj.jpeg` | Captura de pantalla (incluye popups de la app), botella Repsol Moto Town Plus | Repsol | No — reemplazar por imagen oficial |
| `ert.jpeg` | Captura de pantalla, botella Castrol Actevo | Castrol | No — reemplazar por imagen oficial |
| `hgj.jpeg` | Captura de pantalla, botella Mobil Super Moto | Mobil | No — reemplazar por imagen oficial |
| `hj.jpeg` | Captura de pantalla, botella Zehn Moto 3000RLD | Zehn | No — reemplazar por imagen oficial |
| `WhatsApp Image 2026-07-16 at 5.35.27 PM.jpeg` | Captura de pantalla, botella Motul 5000 4T | Motul | No — reemplazar por imagen oficial |
| `WhatsApp Image 2026-07-16 at 5.35.28 PM.jpeg` | Captura de pantalla, botella Yamalube | Yamaha/Yamalube | No — reemplazar por imagen oficial |

**Recomendación:** para la sección de "marcas que manejamos" (Motul, Yamaha, Repsol, Castrol, Mobil, Zehn, Nexoil, Akron), lo ideal es usar los **logotipos oficiales de cada marca** (limpios, sobre fondo transparente) en vez de fotos de producto, ya que se ven en la mayoría de estas capturas y dan una imagen más corporativa/premium que fotos de bajo estilo. Las fotos de producto reales (HB Power Oil, Wape Mex, Nexoil) sí sirven para mostrar el producto propio y el servicio de maquila.

## 8. Estilo visual y experiencia (UI/UX) requerida

El sitio debe transmitir una imagen **premium, enterprise y corporativa**, con un enfoque **high-tech y minimalista**. Referencias de tono: sitios corporativos de tecnología o marcas automotrices/racing de alta gama — nada "cargado" ni con exceso de elementos, mucho espacio en blanco/negro, tipografía fuerte, jerarquía visual clara.

Lineamientos:
- Diseño limpio, minimalista, con espacios generosos (whitespace).
- Tipografía moderna, geométrica y de peso fuerte en títulos; legible y sobria en texto de cuerpo.
- Uso predominante de la paleta negro/blanco/rojo/dorado definida en la sección 6.
- Totalmente responsivo (mobile-first, ya que gran parte del tráfico probablemente llega desde WhatsApp/celular).
- Nada de elementos genéricos de plantilla que no correspondan al negocio real (sin redes sociales inventadas, sin dirección física, sin testimonios falsos).

## 9. Efectos y animaciones específicas solicitadas

Estos elementos son **requisitos explícitos** del cliente y deben implementarse:

1. **Pantalla de carga (loading screen)**: al entrar al sitio, mostrar una pantalla de carga con un **spinner** y el **wordmark "MotoSolution"** (ver sección 5 — no usar el logo/etiqueta de HB Power Oil) en el centro, antes de mostrar el contenido.
2. **Animaciones de scroll**: los elementos de cada sección deben animarse al entrar en el viewport (fade-in, slide-up, etc.) conforme el usuario hace scroll por la página. Debe sentirse fluido y "premium", no exagerado.
3. **Efecto de máquina de escribir (typewriter)** en el título principal del Hero: el texto debe escribirse letra por letra como si se tipeara en tiempo real.
4. **Efecto de cambio de color en las letras del título del Hero**: las letras del título deben tener una animación de cambio de color (por ejemplo, un gradiente animado o transición de color progresiva sobre el texto), reforzando la sensación high-tech.
5. Se pueden combinar ambos efectos del Hero (typewriter + cambio de color) o aplicarse a distintas partes del título — queda a criterio del desarrollador/Claude iterar hasta que se vea bien, pero **ambos efectos deben estar presentes**.

> Nota técnica: respetar `prefers-reduced-motion` para no forzar animaciones a usuarios que las tengan desactivadas por accesibilidad, sin perder el efecto para el resto.

## 10. Público objetivo y tono

- **Talleres mecánicos, refaccionarias y distribuidores** que buscan surtirse de aceite de marcas reconocidas.
- **Negocios y emprendedores** interesados en vender aceite con su propia marca (servicio de maquila).
- Tono: profesional, confiable, de negocio a negocio (B2B), pero accesible. El estilo premium/enterprise/high-tech ayuda a transmitir seriedad y escala, algo importante dado que no hay tienda física y la confianza se construye completamente a través del sitio.

## 11. Contacto / CTA

- **Teléfono / WhatsApp:** 443 534 2127
- Se recomienda usar como CTA principal un botón directo a WhatsApp (`https://wa.me/524435342127`) con mensaje predefinido (ej. "Hola, quiero información sobre sus aceites / servicio de maquila"), y como CTA secundario un enlace `tel:+524435342127` para llamar directo.
- No incluir formularios de contacto genéricos innecesarios ni íconos de redes sociales, ya que el negocio no las tiene.

## 12. Checklist antes de entregar

- [ ] Wordmark tipográfico "MotoSolution" implementado en header, loading screen y favicon (no usar el logo/etiqueta de HB Power Oil).
- [ ] Pantalla de carga con spinner + wordmark funcionando.
- [ ] Animaciones de scroll en todas las secciones principales.
- [ ] Efecto typewriter en el título del Hero.
- [ ] Efecto de cambio de color en las letras del título del Hero.
- [ ] Paleta de colores negro/blanco/rojo/dorado aplicada de forma consistente.
- [ ] Capturas de pantalla reemplazadas por imágenes limpias de producto/marca (sección 7).
- [ ] Botones de WhatsApp y llamada funcionando con el número correcto.
- [ ] Sitio responsivo y probado en mobile.
- [ ] Sin referencias a redes sociales o tienda física (el negocio no cuenta con ninguna).
- [ ] Confirmado con el cliente: unidad exacta del precio de maquila ("$55 por tarima de 1000 lts") y si las bujías NGK son parte de la oferta.
