/* =====================================================
 * CONTEÚDO EDITÁVEL — TEXTO DOS BLOCOS INTERATIVOS
 * Não mudes os nomes das propriedades nem os IDs do HTML.
 * Os textos das secções normais estão no index.html.
 * ===================================================== */
window.PORTFOLIO_CONTENT = {
  // BLOCO A — Links do menu de ecrã inteiro.
  menuHtml: `
<a href="#top">
<small>00</small>The starting grid</a>
<a href="#journey">
<small>01</small>Engineering in motion</a>
<a href="#work">
<small>02</small>Selected projects</a>
<a href="#about">
<small>03</small>Behind the work</a>
<a href="#experience">
<small>04</small>The journey so far</a>
<a href="#contact">
<small>05</small>The next challenge</a>
<p>TOMÁS CORREIA / MECHANICAL ENGINEERING / PORTUGAL</p>
`,

  // BLOCO B — Mensagem entre a abertura e os projetos.
  manifestoHtml: `
<div class="eyebrow">Curiosity is the starting point</div>
<h2 class="reveal">Understand the forces.<br>Question the design.<br>
<span>Build something better.</span>
</h2>
<div class="statement-bottom">
<span>FROM MECHANICAL PRINCIPLES TO THE TRACK.</span>
<span>DESIGN / ANALYSE / BUILD / LEARN</span>
</div>
`,

  // BLOCO C — Cabeçalho da secção com painéis de scroll.
  journeyHtml: `
<div class="work-stage">
<div class="stage-intro">
<div class="eyebrow">01 / Engineering in motion</div>
<h2>EVERY DETAIL.<br>ONE PURPOSE.</h2>
<div class="stage-art">
</div>
<p class="stage-caption">CHASSIS CONCEPT / ILLUSTRATIVE GEOMETRY</p>
</div>
<div class="work-panels">
</div>
<div class="stage-footer">
<span class="stage-number">01 / 03</span>
<span>KEEP SCROLLING TO EXPLORE ↓</span>
</div>
</div>
`,

  // BLOCO D — Painéis. Duplica um objeto para acrescentar outro painel.
  panels: [
  {
    "title": "Structural analysis",
    "subtitle": "Understanding what the structure is telling us.",
    "description": "Torsional stiffness, frontal and side-impact load cases, and the modelling decisions behind a meaningful finite element analysis.",
    "tags": [
      "FEA",
      "SolidWorks Simulation",
      "Chassis"
    ],
    "link": "#work"
  },
  {
    "title": "Mechanical development",
    "subtitle": "From a requirement to a physical solution.",
    "description": "Working through geometry, structural requirements and manufacturing considerations. When hand calculations exposed yielding in a structural segment, we redesigned it.",
    "tags": [
      "Mechanical design",
      "CAD",
      "Manufacturing"
    ],
    "link": "#work"
  },
  {
    "title": "Technical leadership",
    "subtitle": "Making the complete system work.",
    "description": "Mechanical Director at PHISEC Racing since September 2025. Connecting individual design decisions with the wider needs of a Formula Student project.",
    "tags": [
      "PHISEC Racing",
      "Teamwork",
      "Formula Student"
    ],
    "link": "#experience"
  }
],

  // BLOCO E — Desenho SVG do carro. Normalmente não precisas de editar.
  carSvg: `
<svg viewBox="0 0 360 740" fill="none">
<defs>
<linearGradient id="bodypaint" x1="0" x2="1">
<stop stop-color="#951e19"/>
<stop offset=".5" stop-color="#ff493b"/>
<stop offset="1" stop-color="#991c17"/>
</linearGradient>
</defs>
<g stroke="#6c7d6c" stroke-width="1">
<path d="M180 20v700M25 680h310M30 195h300" stroke-dasharray="5 9"/>
</g>
<g fill="#121613" stroke="#596357" stroke-width="2">
<rect x="40" y="168" width="58" height="110" rx="17"/>
<rect x="262" y="168" width="58" height="110" rx="17"/>
<rect x="28" y="530" width="70" height="125" rx="19"/>
<rect x="262" y="530" width="70" height="125" rx="19"/>
</g>
<g stroke="#a0a69a" stroke-width="4">
<path d="m95 195 67 90-65-30m168-60-67 90 65-30M95 555l63-53-62 95m169-42-63-53 62 95"/>
</g>
<path d="m168 90-9 193-32 71-14 184 39 97h56l39-97-14-184-32-71-9-193Z" fill="url(#bodypaint)" stroke="#fa8874"/>
<path d="m159 316-12 61 8 89h50l8-89-12-61Z" fill="#111612" stroke="#a4afa0" stroke-width="2"/>
<ellipse cx="180" cy="385" rx="22" ry="34" fill="#333e33"/>
<path d="M144 333q36-29 72 0l-10 95h-52Z" stroke="#a0ac97" stroke-width="7"/>
<path d="M75 91h210v28H75Zm-20 25h250v18H55ZM70 638h220v39H70Z" fill="#242b24" stroke="#9da793"/>
<path d="m167 140 26 0-4 150h-18Z" fill="#d6dccb"/>
<path d="M145 480h70M135 510h90" stroke="#111713" stroke-width="5"/>
<text x="180" y="552" text-anchor="middle" font-family="sans-serif" font-size="32" font-weight="bold" fill="#fff">TC</text>
</svg>
`
};
