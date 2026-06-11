# [NombreEmpresa] — Style Reference
> Rounded midnight marketplace — un portfolio de software y automatización construido sobre tiles negros mate en fondo blanco, donde los grandes bordes redondeados y una única tipografía hacen todo el trabajo expresivo. Adaptado para proyectos de software, dashboards y automatizaciones.

**Tema:** light

La empresa opera sobre un canvas blanco y casi-negro con máximo redondeo — cards de 36px y contenedores en forma de píldora dominan cada superficie, creando una tensión suave y accesible contra los fills muy oscuros #09090b usados para acciones primarias. La escala de neutros es densa y graduada (gray-50 hasta gray-950), pero solo 3-4 pasos aparecen en cualquier vista, manteniendo el contraste alto sin complejidad. La única tipografía personalizada, Cosmica, abarca todo el sistema desde etiquetas de 10px hasta titulares de 64px — su rango de pesos (300–700) hace todo el trabajo tonal que el color no hace. El color de acento está casi completamente ausente de la capa UI: el naranja vívido (#ff5a00) aparece solo en etiquetas de badge de tecnología/stack, y el rosa vívido (#fe45e2) es un único wash decorativo de card — la contención del sistema hace que estos momentos impacten más.

**Diferencias clave respecto al diseño original de Awesomic:**
- Las secciones de portfolio muestran capturas de apps, dashboards y herramientas reales, no arte gráfico.
- Se agrega una sección de Servicios/Tech Stack explícita con descripción de capacidades técnicas.
- Los casos de éxito incluyen métricas concretas de impacto (horas ahorradas, procesos automatizados, etc.).
- La sección de "problemas que resolvemos" está orientada a pain points de negocios digitales.
- Los stat blocks priorizan KPIs de impacto técnico: tiempo ahorrado, integraciones activas, proyectos entregados.

---

## Tokens — Colores

| Nombre | Valor | Token | Rol |
|--------|-------|-------|-----|
| Obsidian | `#09090b` | `--color-obsidian` | Fondos de botón principal relleno, texto de encabezado display en superficies blancas — el ancla oscura del sistema, casi negro puro |
| Ink | `#18181b` | `--color-ink` | Texto de cuerpo, texto de nav, texto de badge en superficies claras — un tono más claro que Obsidian, usado para texto de lectura |
| Graphite | `#3f3f46` | `--color-graphite` | Bordes de botón, fondos de badge (variante oscura), trazos de borde en componentes — el tono de borde UI dominante |
| Slate | `#52525b` | `--color-slate` | Fondos de card medio-oscuro en secciones oscuras, rellenos de ícono sutil |
| Steel | `#71717a` | `--color-steel` | Texto de cuerpo atenuado, etiquetas de ayuda como captions de estadísticas |
| Ash | `#a1a1aa` | `--color-ash` | Variantes de encabezado subdued, texto placeholder, trazos de regla decorativa |
| Pebble | `#d4d4d8` | `--color-pebble` | Divisores finos, fondos de link inactivos, borde visible más claro en cards blancas |
| Fog | `#ececee` | `--color-fog` | Fondos de card (variante media), bordes de badge, divisores de sección |
| Mist | `#f4f4f5` | `--color-mist` | Canvas de página, fondos de card claro, superficie de hover de tag/link |
| Snow | `#ffffff` | `--color-snow` | Superficies de card blancas, fondos de input, relleno de botón para variante outlined |
| Ember | `#ff5a00` | `--color-ember` | Badges de tecnología clave (stack técnico) — el naranja vívido señala lenguajes, frameworks o herramientas destacadas. Uso exclusivo en badges de tech/stack. |
| Orchid Flash | `#fe45e2` | `--color-orchid-flash` | Wash decorativo de card — uso único como fondo de card vívido para marcar una pieza especial del portfolio. |
| Cream | `#f5f5f3` | `--color-cream` | Fondo general del Hero y secciones alternativas — neutro cálido más suave que Mist |
| Warm Gray | `#eeecea` | `--color-warm-gray` | Fondo del panel dashboard animado en la columna derecha del Hero |
| Silver | `#e0e0e0` | `--color-silver` | Borde inferior del nav (0.5px) y bordes de dashboard cards |

---

## Tokens — Tipografía

### Cosmica — La única tipografía en todo el sistema.
Cada badge, botón, enlace de nav, encabezado y cuerpo de texto usa Cosmica. Su amplio rango de pesos hace todo el trabajo de jerarquía que el color no hace. A 56–64px los pesos light a medium se sienten asertivos sin gritar; a 10–14px los pesos medium a semibold mantienen las etiquetas pequeñas legibles en densidad compacta. · `--font-cosmica`

- **Sustituto:** DM Sans, Plus Jakarta Sans
- **Pesos:** 300, 400, 500, 600, 700
- **Tamaños:** 10px, 12px, 13px, 14px, 15px, 16px, 18px, 20px, 32px, 40px, 56px, 64px
- **Line height:** 1.0–1.8 (más ajustado en display ~1.0–1.12, más suelto en cuerpo ~1.45–1.68)
- **Letter spacing:** normal en todos los tamaños. hero-heading (46px) es la única excepción con letter-spacing -0.02em.

### Escala tipográfica

| Rol | Tamaño | Line Height | Token |
|-----|--------|-------------|-------|
| caption | 10px | 1.8 | `--text-caption` |
| body | 14px | 1.56 | `--text-body` |
| body-lg | 16px | 1.5 | `--text-body-lg` |
| subheading | 18px | 1.45 | `--text-subheading` |
| heading-sm | 20px | 1.35 | `--text-heading-sm` |
| heading | 32px | 1.28 | `--text-heading` |
| heading-lg | 40px | 1.25 | `--text-heading-lg` |
| display-sm | 56px | 1.12 | `--text-display-sm` |
| display | 64px | 1 | `--text-display` |
| hero-heading | 46px | 1.15 | `--text-hero-heading` |

---

## Tokens — Espaciado y Formas

**Unidad base:** 4px

**Densidad:** compacta

### Escala de espaciado

| Nombre | Valor | Token |
|--------|-------|-------|
| 4 | 4px | `--spacing-4` |
| 8 | 8px | `--spacing-8` |
| 12 | 12px | `--spacing-12` |
| 16 | 16px | `--spacing-16` |
| 20 | 20px | `--spacing-20` |
| 24 | 24px | `--spacing-24` |
| 28 | 28px | `--spacing-28` |
| 32 | 32px | `--spacing-32` |
| 36 | 36px | `--spacing-36` |
| 40 | 40px | `--spacing-40` |
| 48 | 48px | `--spacing-48` |
| 64 | 64px | `--spacing-64` |
| 68 | 68px | `--spacing-68` |
| 80 | 80px | `--spacing-80` |
| 120 | 120px | `--spacing-120` |

### Border Radius

| Elemento | Valor |
|----------|-------|
| hero | 48px |
| pill | 10000px |
| cards | 36px (primario) o 28px (compacto) |
| icons | 40px |
| badges | 12px |
| inputs | 14px |
| buttons | 36px (pill) o 14–16px (rect redondeado) |
| dashboard-cards | 12px |

### Sombras

| Nombre | Valor | Token |
|--------|-------|-------|
| subtle | `rgba(255,255,255,0.5) 0px 0.5px 0px 0px inset, rgba(117,123,133,0.4) 0px 9px 14px -5px inset, rgb(44,46,52) 0px 0px 0px 1.5px, rgba(0,0,0,0.14) 0px 4px 6px 0px` | `--shadow-subtle` |
| subtle-2 | `rgb(228,228,231) 0px 1px 0px 0px inset` | `--shadow-subtle-2` |
| subtle-3 | `rgb(255,255,255) 0px 0.5px 0px 0px inset` | `--shadow-subtle-3` |
| subtle-4 | `rgb(255,255,255) 0px -0.5px 0px 0px` | `--shadow-subtle-4` |
| subtle-5 | `rgb(228,228,231) 0px -1px 0px 0px` | `--shadow-subtle-5` |
| md | `rgba(0,0,0,0.04) 0px 4px 12px 0px` | `--shadow-md` |

### Layout

- **Max-width de página:** 1200px
- **Gap entre secciones:** 80px
- **Padding de cards:** 24–28px
- **Gap entre elementos:** 8px

---

## Componentes

### Hero CTA Primary
**Rol:** Botón de acción principal dentro del Hero

Fondo #09090b, texto blanco, border-radius 999px, padding 12px 24px, flat (sin sombras ni rings). Cosmica 15px weight 500.

### Hero CTA Secondary
**Rol:** Acción secundaria dentro del Hero

Sin fondo (transparente), text-decoration underline, color #111, Cosmica 14px weight 500.

### Botón Pill Primario
**Rol:** CTA principal — Contactanos, Ver proyectos, Solicitar propuesta

Fondo #09090b, texto blanco, Cosmica 14–16px peso 500, border-radius 36px, padding 12px 16px, ring de 1.5px en rgb(44,46,52) con highlight inset en capas y soft drop shadow. La sombra multi-capa da al pill negro una cualidad táctil de vidrio presionado.

### Botón Outlined Blanco
**Rol:** Acciones secundarias, controles adyacentes al nav

Fondo #ffffff, texto #3f3f46, borde 1px solid #3f3f46, border-radius 36px, padding 20px. Misma silueta pill que el primario pero invertida.

### Botón Oscuro Redondeado
**Rol:** Acciones en contexto dentro de panels de card oscuro

Fondo #09090b, texto blanco, borde 1px solid rgba(255,255,255,0.2), border-radius 14–16px, padding 12–14px 16–18px. El radio más suave (no pill) distingue las acciones embebidas en panel de los CTAs a nivel de página.

### Card de Superficie Clara
**Rol:** Bloques de stat, secciones de features, testimoniales sobre canvas blanco

Fondo #ffffff, border-radius 36px, padding 28px horizontal y vertical, sin box-shadow (flat).

### Card de Superficie Atenuada
**Rol:** Bloques de contenido secundario y filas de prueba social

Fondo #ececee, border-radius 28px, padding 24px todos lados, sin sombra.

### Panel Oscuro de Problema
**Rol:** Sección de contraste listando pain points (ej: 'Los bottlenecks que resolvemos')

Fondo #09090b o #222222, border-radius 28–36px, texto blanco y #a1a1aa. Las frases clave usan Cosmica peso 600–700 mientras las palabras de introducción usan peso 300–400, creando contraste de peso inline dentro de líneas únicas.

### Tile de Proyecto (Portfolio)
**Rol:** Grid de trabajos — imagen full-bleed de una app, dashboard o herramienta con badges de categoría superpuestos

El fondo es la captura full-bleed del proyecto (screenshot de app, UI de dashboard, flujo de automatización) o un fill de acento vívido (#fe45e2 para tiles decorativos). Border-radius 36px recortando la imagen. Las etiquetas de badge flotan sobre la imagen en la esquina inferior izquierda usando la variante de badge oscuro transparente.

**Nota importante:** Las imágenes deben ser capturas reales o mockups del trabajo — screenshots de apps, dashboards, flujos de n8n/Make, interfaces de herramientas, etc. No arte gráfico ni lifestyle photography.

### Badge de Overlay Oscuro
**Rol:** Tags de categoría/skill en fondos oscuros o de imagen

Fondo transparente, texto #ffffff, borde 1px solid rgba(255,255,255,0.3–0.5), border-radius 12px, padding 4px 8px, Cosmica 12px peso 500.

### Badge Relleno Oscuro
**Rol:** Tags de skill/servicio en fondos claros

Fondo #3f3f46, texto #fafafa, border-radius 12px, padding 4px 8px, Cosmica 12px peso 500.

### Category Badge (Hero)
**Rol:** Badge de categorías en el Hero

Borde 0.5px solid #a1a1aa, border-radius 999px (pill), texto 11px uppercase, tracking-wider, color #52525b.

### Badge de Tecnología (Tech Stack Marker)
**Rol:** Identificador de lenguaje, framework o herramienta en cards de proyecto y secciones de servicios

Fondo #ff5a00, texto #ffffff, border-radius 12px, padding 4px 8px, Cosmica 12px peso 600. Su uso es exclusivo para etiquetas de tecnología — nunca reutilizar para estados genéricos de UI.

**Ejemplos de uso:** React, Node.js, Python, n8n, Make, Supabase, Next.js, FastAPI.

### Dashboard Demo Panel
**Rol:** Panel animado tipo "product demo" en la columna derecha del Hero

Fondo #eeecea, border-left 0.5px solid #ddd. Ocupa toda la altura del Hero.

Contiene:
- **Métricas con count-up:** Tarjetas blancas, border 0.5px #ddd, border-radius 12px, padding 12-16px. Aparecen con fade-in escalonado (staggered). El número cuenta hacia arriba al cargar y se resetea en loop infinito (~10s ciclo).
- **Workflow animado:** Cajas conectadas con flechas (→) que se completan paso a paso con highlight y checkmark, en secuencia infinita.
- **Play button:** Botón circular negro (w-12 h-12, bg #111, texto blanco) con ícono play ▶, centrado abajo. Texto "Ver cómo funciona" debajo en 11px #888.

Solo CSS animations + JS count-up. Sin videos reales.

### Input de Email + Fila CTA
**Rol:** Formulario de captura en el hero

Input: fondo #ffffff, texto #333333, borde transparente, border-radius 14px, padding 12px 12px 12px 16px, Cosmica 14px peso 400, placeholder en #a1a1aa. Emparejado inline con un Botón Pill Primario (Contactanos) en una fila flex.

### Banner de Anuncio
**Rol:** Tira de notificación full-width sobre el nav

Fondo #222222 o near-black, forma pill redondeada border-radius 48px, texto blanco Cosmica 14px, con un link CTA ghost inline a la derecha. Usa backdrop-filter blur para un tratamiento oscuro escarcha.

### Bloque de Número Stat
**Rol:** Highlights de métricas clave

Numeral grande a 40–56px Cosmica peso 700 en #09090b o #18181b. Etiqueta descriptora debajo a 12–14px peso 400 en #71717a. Sin borde de card — se asienta directamente sobre el fondo de sección para énfasis tipográfico puro.

**Métricas recomendadas para empresa de software:** proyectos entregados, horas de proceso automatizadas, integraciones activas, clientes satisfechos, años de experiencia.

### Card de Servicio
**Rol:** Sección de servicios — descripción concisa de cada capacidad técnica

Fondo #ffffff, border-radius 36px, padding 28px, sin sombra (flat). Contiene: ícono de servicio en contenedor circular #3f3f46 (40px), nombre del servicio en Cosmica 20px peso 600 #09090b, descripción de 2–3 líneas en Cosmica 14px peso 400 #71717a, y opcionalmente 2–3 tech badges debajo. El ícono comunica la categoría del servicio de forma inmediata.

**Servicios de ejemplo:** Desarrollo Web & Apps, Automatización de Procesos, Integraciones (APIs / n8n / Make), Inteligencia Artificial.

### Card de Caso de Éxito
**Rol:** Prueba social con impacto medible

Fondo #ececee, border-radius 28px, padding 24px. Contiene: nombre del cliente en Cosmica 16px peso 600 #09090b, descripción del problema resuelto en Cosmica 14px peso 400 #71717a (2–3 líneas), y un stat de impacto en Cosmica 32px peso 700 #09090b con su label en #71717a (ej: "80% menos tiempo en reportes"). El stat de impacto es el elemento visual dominante.

---

## Secciones de Página

### 1. Hero
**Objetivo:** Comunicar propuesta de valor en 5 segundos

Layout de 2 columnas sobre fondo Cream (#f5f5f3), border-radius 16px, overflow hidden, con margen horizontal respecto al nav.

**Nav (sobre el Hero):** Fondo blanco, border-bottom 0.5px #e0e0e0. Links existentes + CTA (bg #09090b, texto blanco, border-radius 999px).

**Columna izquierda** (padding 48px):
- Category Badge: borde 0.5px gris (#a1a1aa), border-radius 999px, texto 11px uppercase.
- H1: font-size 46px, font-weight 700, letter-spacing -0.02em, color #111. Solo la palabra/verbo cíclante en color #aaa (mismo tamaño y peso).
- Hero CTA Primary: fondo #111, texto blanco, border-radius 999px, flat (sin sombras).
- Hero CTA Secondary: sin fondo, text-decoration underline.

**Columna derecha** (Dashboard Demo Panel):
- Fondo Warm Gray (#eeecea), border-left 0.5px #ddd.
- Dashboard animado: tarjetas de métricas con fade-in escalonado, workflow paso a paso animado con checkmarks, count-up numbers en loop infinito.
- Botón circular negro con play ▶ y texto "Ver cómo funciona" debajo.
- Sin videos reales — solo CSS animations + JS.

**Estilo general:** Flat, sin sombras ni gradientes. Fuente sans-serif del sistema. Limpio y minimalista.

### 2. Logo Strip — Empresas que confían
Scroll horizontal de logos de clientes a full bleed. Si aún no hay clientes con logo público, mostrar los nombres en texto Cosmica 16px peso 500 #a1a1aa sobre fondo blanco en la misma estructura de strip continuo.

### 3. Servicios
Grid 2–3 columnas de Cards de Servicio sobre canvas Mist (#f4f4f5). Cada card explica *qué problema resuelve* el servicio, no solo el nombre técnico. Los tech badges en cada card dan contexto de herramientas sin requerir que el visitante sepa de antemano qué son.

### 4. Panel Oscuro — Los problemas que resolvemos
Fondo #09090b, border-radius 36px. Lista de pain points con inline weight contrast. Cada ítem empieza con una frase lead-in en peso 300–400 #a1a1aa y termina con el problema clave en peso 600–700 #ffffff.

**Ejemplos:**
- "Pierden tiempo en" → "tareas manuales y repetitivas"
- "Sus sistemas no se hablan" → "ni comparten datos entre sí"
- "Cada integración nueva requiere" → "semanas de desarrollo personalizado"

### 5. Portfolio de Proyectos
Scroll horizontal de Tiles de Proyecto de 36px border-radius. Cada tile muestra: captura real del proyecto, nombre del proyecto en Cosmica 20px peso 600 blanco, y 2–3 tech badges. Un tile puede usar #fe45e2 como wash decorativo. Incluir un CTA "Ver todos los proyectos" en botón pill secundario al final del strip.

### 6. Casos de Éxito / Resultados
Grid 2 columnas de Cards de Caso de Éxito sobre canvas blanco. Alternar con un bloque de Stat Numbers para reforzar el impacto cuantitativo. Los números grandes son el gancho visual; el texto describe el contexto.

### 7. Stat Numbers
4 métricas en fila sobre Mist (#f4f4f5) sin bordes de card. Numerales grandes a 40–56px peso 700. Priorizar métricas de impacto real sobre números de vanidad.

### 8. Acerca de la Empresa
Sección split: texto a la izquierda (quiénes son, por qué lo hacen, qué los diferencia) y foto del equipo o workspace a la derecha dentro de un contenedor 36px border-radius. Mantener el tono humano y directo. No es necesario un equipo grande — la autenticidad importa más que el tamaño.

### 9. Contacto / CTA Final
Panel oscuro #09090b con headline display y botón pill blanco o formulario de contacto simple. El CTA final debe ser específico: "Contanos qué necesitás" o "Agendá una llamada de 30 min" es mejor que "Contactanos".

---

## Imágenes y Capturas de Proyectos

Para la sección de portfolio, las imágenes son el contenido central. Usar siempre:

- **Screenshots reales** de apps o herramientas desarrolladas, recortadas a los componentes más interesantes (no la pantalla entera).
- **Capturas de flujos** de automatización (n8n, Make, Zapier) que muestren la complejidad y el trabajo real.
- **Mockups de UI** bien realizados cuando no sea posible mostrar el producto real por confidencialidad.
- **Dashboards** con datos anonimizados que muestren visualizaciones y métricas reales.

Los tiles se recortan a contenedores de 36px border-radius, dándole a las capturas de pantalla sin procesar una sensación contenida y curada. Los íconos en todo el UI son mínimos, monocromáticos, de trazo único o relleno plano a ~20px, nunca decorativos.

El sistema es dependiente de imágenes para la sección de portfolio pero dominante en tipografía para todas las secciones informativas y de conversión — aproximadamente 60% texto, 40% imágenes en toda la página.

---

## Do's y Don'ts

### Do
- Usar border-radius 36px para todas las cards primarias y tiles de portfolio — este redondeo extremo es el rasgo de superficie más reconocible del sistema.
- Aplicar la sombra multi-capa del botón (rgba(255,255,255,0.5) inset + rgba(117,123,133,0.4) inset + rgb(44,46,52) ring 1.5px + rgba(0,0,0,0.14) drop) solo en el botón pill primario #09090b.
- Reservar Ember (#ff5a00) exclusivamente para badges de tecnología/stack y Orchid Flash (#fe45e2) exclusivamente para un único wash decorativo de card.
- Usar Cosmica peso 300–400 para palabras de introducción y peso 600–700 para el sustantivo/verbo clave en la misma línea.
- Mantener una pila de 4 superficies neutras (Mist → Snow → Fog → Obsidian) por página.
- Usar border-radius 12px para todos los badges y tags.
- Aplicar backdrop-filter blur (5–17px) en panels superpuestos y el banner de anuncio.
- Describir cada servicio en términos de *problema que resuelve*, no solo nombre técnico.
- Incluir métricas reales de impacto en los casos de éxito.
- Mostrar capturas reales del trabajo — el portfolio de software gana con autenticidad.

### Don't
- No usar ningún color que no sea #09090b/#222222 para fondos de botón relleno.
- No reducir el border-radius de cards por debajo de 28px.
- No introducir nuevas tipografías.
- No aplicar drop shadows a las cards — la profundidad se expresa con pasos de color de fondo.
- No usar #ff5a00 o #fe45e2 para estados de UI, efectos hover o elementos de interfaz repetidos.
- No usar letter-spacing override en titulares.
- No colocar texto directamente sobre el fondo Orchid Flash (#fe45e2) a tamaño cuerpo.
- No poner imágenes genéricas de stock o lifestyle photography — el portfolio es el trabajo real.
- No listar tecnologías sin explicar para qué sirven en el contexto del cliente.
- No usar copy vago en el hero ("soluciones tecnológicas innovadoras") — ser específico sobre qué se hace y para quién.

---

## Superficies

| Nivel | Nombre | Valor | Propósito |
|-------|--------|-------|-----------|
| 1 | Canvas | `#f4f4f5` | Fondo de página y relleno de sección por defecto |
| 2 | Card White | `#ffffff` | Superficie de card primaria sobre el canvas |
| 3 | Card Muted | `#ececee` | Card secundaria o superficie de tag, sensación de ligera elevación contra el blanco |
| 4 | Dark Surface | `#09090b` | Secciones de card oscura, fondos de botón relleno, paneles de problema |

---

## Elevación

- **Botón de acción primaria:** `rgba(255,255,255,0.5) 0px 0.5px 0px 0px inset, rgba(117,123,133,0.4) 0px 9px 14px -5px inset, rgb(44,46,52) 0px 0px 0px 1.5px, rgba(0,0,0,0.14) 0px 4px 6px 0px`
- **Card (inset bottom border):** `rgb(228,228,231) 0px 1px 0px 0px inset`
- **Card (soft drop shadow):** `rgba(0,0,0,0.04) 0px 4px 12px 0px`

---

## Layout

Max-width aproximadamente 1500px, centrado sobre el canvas (#f4f4f5). El hero es un contenedor con fondo Cream (#f5f5f3), border-radius 16px, overflow hidden, de 2 columnas. Columna izquierda (padding 48px): titular hero-heading 46px peso 700 con última línea en #aaa, Category Badge, Hero CTA Primary + Secondary. Columna derecha: Dashboard Demo Panel con fondo Warm Gray (#eeecea) y border-left 0.5px #ddd. Debajo del hero, un strip horizontal de logos de clientes a full bleed. Las secciones siguientes alternan: layouts de texto+card sobre canvas blanco, luego un panel oscuro full-width (#09090b) para copy de problemas, de vuelta a canvas claro para portfolio y stats. El grid de portfolio es una fila de scroll horizontal de tiles altos y redondeados. Las cards de features/servicios usan un grid de 2–3 columnas con cards de 36px-radius sobre canvas Mist. Los gaps verticales entre secciones son 80px; padding interno de card 24–28px. La navegación es una barra sticky de 56px de altura con links de texto inline, un botón pill negro 'Hablemos' en el borde derecho y border-bottom 0.5px #e0e0e0.

---

## Filosofía de Motion

El sistema usa animación de forma expresiva pero intencionada. Tres loops de scroll nombrados (reverseloop, scroll-text, scroll-text-cta) impulsan el ticker de logos horizontal y los strips de scroll de portfolio a duración lenta de 8–50s lineal — el movimiento continuo implica una producción siempre activa y de alto volumen. Las micro-interacciones de UI (estados hover, expand de acordeón) usan transiciones de 0.2–0.35s ease solo en transform y opacity. El único easing expresivo (cubic-bezier 0.175, 0.885, 0.32, 1.275 — un spring suave con leve overshooting) está reservado para animaciones de entrada. Nunca animar color o background-color — solo transforms posicionales y opacidad.

**Dashboard loop animations:** El Dashboard Demo Panel del Hero usa CSS keyframes con delays escalonados para fade-in de tarjetas, highlight secuencial de pasos de workflow y count-up de métricas con JS. El ciclo completo dura ~10s en loop infinito. Solo se animan transform y opacity.

---

## Referencia Rápida de Colores

- texto (primario): #09090b / #18181b
- texto (atenuado): #71717a
- fondo (canvas): #f4f4f5
- superficie de card: #ffffff
- borde / divisor: #ececee / #3f3f46
- acento (solo badge): #ff5a00 (tech/stack), #fe45e2 (card decorativa)
- acción primaria: #09090b (filled action)

---

## CSS Custom Properties

```css
:root {
  /* Colors */
  --color-obsidian: #09090b;
  --color-ink: #18181b;
  --color-graphite: #3f3f46;
  --color-slate: #52525b;
  --color-steel: #71717a;
  --color-ash: #a1a1aa;
  --color-pebble: #d4d4d8;
  --color-fog: #ececee;
  --color-mist: #f4f4f5;
  --color-snow: #ffffff;
  --color-ember: #ff5a00;
  --color-orchid-flash: #fe45e2;
  --color-cream: #f5f5f3;
  --color-warm-gray: #eeecea;
  --color-silver: #e0e0e0;

  /* Typography */
  --font-cosmica: 'Cosmica', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;

  /* Typography — Scale */
  --text-caption: 10px;
  --leading-caption: 1.8;
  --text-body: 14px;
  --leading-body: 1.56;
  --text-body-lg: 16px;
  --leading-body-lg: 1.5;
  --text-subheading: 18px;
  --leading-subheading: 1.45;
  --text-heading-sm: 20px;
  --leading-heading-sm: 1.35;
  --text-heading: 32px;
  --leading-heading: 1.28;
  --text-heading-lg: 40px;
  --leading-heading-lg: 1.25;
  --text-display-sm: 56px;
  --leading-display-sm: 1.12;
  --text-display: 64px;
  --leading-display: 1;
  --text-hero-heading: 46px;
  --leading-hero-heading: 1.15;
  --letter-spacing-hero-heading: -0.02em;

  /* Typography — Weights */
  --font-weight-light: 300;
  --font-weight-regular: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;

  /* Spacing */
  --spacing-unit: 4px;
  --spacing-4: 4px;
  --spacing-8: 8px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-28: 28px;
  --spacing-32: 32px;
  --spacing-36: 36px;
  --spacing-40: 40px;
  --spacing-48: 48px;
  --spacing-64: 64px;
  --spacing-68: 68px;
  --spacing-80: 80px;
  --spacing-120: 120px;

  /* Layout */
  --page-max-width: 1200px;
  --section-gap: 80px;
  --card-padding: 24px;
  --element-gap: 8px;

  /* Border Radius */
  --radius-md: 6px;
  --radius-xl: 12px;
  --radius-2xl: 16px;
  --radius-2xl-2: 20px;
  --radius-3xl: 24px;
  --radius-3xl-2: 28px;
  --radius-3xl-3: 36px;
  --radius-3xl-4: 40px;
  --radius-full: 48px;
  --radius-full-2: 56px;
  --radius-full-3: 64px;
  --radius-full-4: 80px;
  --radius-full-5: 1000px;
  --radius-full-6: 10000px;

  /* Named Radii */
  --radius-hero: 48px;
  --radius-pill: 10000px;
  --radius-cards: 36px;
  --radius-cards-compact: 28px;
  --radius-icons: 40px;
  --radius-badges: 12px;
  --radius-inputs: 14px;
  --radius-buttons-pill: 36px;
  --radius-buttons-rect: 14px;

  /* Shadows */
  --shadow-subtle: rgba(255,255,255,0.5) 0px 0.5px 0px 0px inset, rgba(117,123,133,0.4) 0px 9px 14px -5px inset, rgb(44,46,52) 0px 0px 0px 1.5px, rgba(0,0,0,0.14) 0px 4px 6px 0px;
  --shadow-subtle-2: rgb(228,228,231) 0px 1px 0px 0px inset;
  --shadow-subtle-3: rgb(255,255,255) 0px 0.5px 0px 0px inset;
  --shadow-subtle-4: rgb(255,255,255) 0px -0.5px 0px 0px;
  --shadow-subtle-5: rgb(228,228,231) 0px -1px 0px 0px;
  --shadow-md: rgba(0,0,0,0.04) 0px 4px 12px 0px;

  /* Surfaces */
  --surface-canvas: #f4f4f5;
  --surface-card-white: #ffffff;
  --surface-card-muted: #ececee;
  --surface-dark-surface: #09090b;
}
```

### Tailwind v4

```css
@theme {
  /* Colors */
  --color-obsidian: #09090b;
  --color-ink: #18181b;
  --color-graphite: #3f3f46;
  --color-slate: #52525b;
  --color-steel: #71717a;
  --color-ash: #a1a1aa;
  --color-pebble: #d4d4d8;
  --color-fog: #ececee;
  --color-mist: #f4f4f5;
  --color-snow: #ffffff;
  --color-ember: #ff5a00;
  --color-orchid-flash: #fe45e2;
  --color-cream: #f5f5f3;
  --color-warm-gray: #eeecea;
  --color-silver: #e0e0e0;

  /* Typography */
  --font-cosmica: 'Cosmica', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;

  /* Typography — Scale */
  --text-caption: 10px;
  --leading-caption: 1.8;
  --text-body: 14px;
  --leading-body: 1.56;
  --text-body-lg: 16px;
  --leading-body-lg: 1.5;
  --text-subheading: 18px;
  --leading-subheading: 1.45;
  --text-heading-sm: 20px;
  --leading-heading-sm: 1.35;
  --text-heading: 32px;
  --leading-heading: 1.28;
  --text-heading-lg: 40px;
  --leading-heading-lg: 1.25;
  --text-display-sm: 56px;
  --leading-display-sm: 1.12;
  --text-display: 64px;
  --leading-display: 1;
  --text-hero-heading: 46px;
  --leading-hero-heading: 1.15;

  /* Spacing */
  --spacing-4: 4px;
  --spacing-8: 8px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-28: 28px;
  --spacing-32: 32px;
  --spacing-36: 36px;
  --spacing-40: 40px;
  --spacing-48: 48px;
  --spacing-64: 64px;
  --spacing-68: 68px;
  --spacing-80: 80px;
  --spacing-120: 120px;

  /* Border Radius */
  --radius-md: 6px;
  --radius-xl: 12px;
  --radius-2xl: 16px;
  --radius-2xl-2: 20px;
  --radius-3xl: 24px;
  --radius-3xl-2: 28px;
  --radius-3xl-3: 36px;
  --radius-3xl-4: 40px;
  --radius-full: 48px;
  --radius-full-2: 56px;
  --radius-full-3: 64px;
  --radius-full-4: 80px;
  --radius-full-5: 1000px;
  --radius-full-6: 10000px;

  /* Shadows */
  --shadow-subtle: rgba(255,255,255,0.5) 0px 0.5px 0px 0px inset, rgba(117,123,133,0.4) 0px 9px 14px -5px inset, rgb(44,46,52) 0px 0px 0px 1.5px, rgba(0,0,0,0.14) 0px 4px 6px 0px;
  --shadow-subtle-2: rgb(228,228,231) 0px 1px 0px 0px inset;
  --shadow-subtle-3: rgb(255,255,255) 0px 0.5px 0px 0px inset;
  --shadow-subtle-4: rgb(255,255,255) 0px -0.5px 0px 0px;
  --shadow-subtle-5: rgb(228,228,231) 0px -1px 0px 0px;
  --shadow-md: rgba(0,0,0,0.04) 0px 4px 12px 0px;
}
```

---

## Ejemplos de Prompts por Componente

1. **Sección Hero:** Hero container con fondo Cream (#f5f5f3), border-radius 16px, overflow hidden. Nav arriba con fondo blanco y border-bottom 0.5px #e0e0e0; CTA nav en bg #09090b, texto blanco, border-radius 999px. Layout 2 columnas: izquierda con padding 48px, derecha con Dashboard Demo Panel (fondo #eeecea, border-left 0.5px #ddd). Columna izquierda: Category Badge (borde 0.5px #a1a1aa, border-radius 999px, 11px uppercase), H1 hero-heading 46px weight 700 tracking -0.02em color #111, última línea en #aaa. Botón primario flat (fondo #09090b, texto blanco, border-radius 999px, sin sombras). Botón secundario (transparente, underline). Columna derecha: dashboard animado con tarjetas blancas (border 0.5px #ddd, border-radius 12px), count-up numbers, workflow animado, botón circular negro con play y texto "Ver cómo funciona" debajo. Sin videos — solo CSS + JS animations en loop infinito.

2. **Tile de Proyecto:** Contenedor 36px border-radius recortando screenshot full-bleed de app o dashboard. Overlay en esquina inferior izquierda: nombre del proyecto en Cosmica 20px peso 600 blanco; tech badges debajo (fondo transparente, texto blanco, borde rgba(255,255,255,0.3), radio 12px, padding 4px 8px, Cosmica 12px peso 500). Un tile por fila puede usar #fe45e2 como fondo sólido de card en lugar de imagen.

3. **Panel Oscuro de Problema:** Fondo #09090b, border-radius 36px, padding 28px. Filas de bullet en Cosmica 18px, line-height 1.45: palabra lead-in (ej: 'Pierden tiempo en') en #a1a1aa peso 400, seguida de la frase clave en #ffffff peso 600. Cada fila precedida por un ícono de círculo en #3f3f46.

4. **Fila de Stat Numbers:** Sobre fondo Mist (#f4f4f5), sin borde de card. Numeral stat a 40px Cosmica peso 700 color #09090b. Etiqueta descriptora a 13px Cosmica peso 400 color #71717a, line-height 1.56, colocada directamente debajo del numeral con gap de 4px.

5. **Badge de Tecnología:** Fondo #ff5a00, texto #ffffff, border-radius 12px, padding 4px 8px, Cosmica 12px peso 600. Para badges de categoría en fondos oscuros: fondo transparente, borde rgba(255,255,255,0.3), mismo radio y padding.

6. **Card de Servicio:** Fondo #ffffff, border-radius 36px, padding 28px, sin sombra. Ícono de servicio en contenedor circular 40px fondo #3f3f46, color de ícono #ffffff. Nombre del servicio en Cosmica 20px peso 600 #09090b. Descripción de 2–3 líneas en Cosmica 14px peso 400 #71717a. Stack de tech badges al pie de la card.

7. **Card de Caso de Éxito:** Fondo #ececee, border-radius 28px, padding 24px. Nombre del cliente en Cosmica 16px peso 600 #09090b. Descripción del problema en Cosmica 14px peso 400 #71717a. Stat de impacto en Cosmica 32px peso 700 #09090b con label en #71717a debajo.
