# Como personalizar o teu portefólio

Abre esta pasta no VS Code em File → Open Folder. Abre index.html com Live Server ou diretamente no browser. Não precisas de npm nem de instalar dependências.

## 1. Textos e secções — index.html

O ficheiro está dividido por comentários numerados:

| Bloco | O que alteras |
| --- | --- |
| 01 | Nome no cabeçalho |
| 02 | Frase principal, apresentação e botão |
| 03 | Projetos, descrições, imagens, competências e detalhes |
| 04 | Sobre mim e resultados |
| 05 | Ferramentas, experiência e educação |
| 06 | Contactos e currículo |
| 07 | Rodapé |
| 08 | Ligações aos scripts — mantém a ordem |

Usa Ctrl+F para procurar BLOCO 03, por exemplo. Mantém os IDs e as classes; muda os textos entre as tags.

## 2. Textos interativos — js/01-conteudo.js

Aqui editas o menu, a mensagem intermédia e os painéis que abrem com o scroll. Cada painel tem campos separados:

```js
{
  "title": "Structural analysis",
  "subtitle": "Understanding what the structure is telling us.",
  "description": "A descrição do teu trabalho, em inglês.",
  "tags": ["FEA", "SolidWorks", "Chassis"],
  "link": "#work"
}
```

Podes duplicar um objeto para acrescentar painéis. Se mudares o número de painéis, o contador e a abertura automática adaptam-se; a trajetória do carro continua com as suas etapas independentes.

## 3. Cores e aspeto — pasta css

- 01-base.css: cores, fontes, projetos, sobre mim, experiência e contactos.
- 02-scroll-menu.css: menu e secções animadas; também ajusta o aspeto final da abertura.
- 03-carro.css: aspeto do carro, transparência e vista técnica.

Para mudar a cor de destaque, procura --red em 01-base.css. Existem cores específicas do carro no SVG do ficheiro 01-conteudo.js. Quando houver regras para o mesmo elemento, os ficheiros CSS seguintes têm prioridade.

## 4. Fotografias — pasta images

Coloca uma fotografia nesta pasta, por exemplo chassis.jpg. Em index.html, dentro do projeto pretendido, substitui apenas o bloco <svg>...</svg> por:

```html
<img
  src="images/chassis.jpg"
  alt="Chassis da PHISEC Racing"
  style="width:100%;height:100%;object-fit:cover"
>
```

Os nomes dos ficheiros têm de coincidir exatamente, incluindo maiúsculas e minúsculas, quando publicares no GitHub Pages.

## 5. CV e contactos

Coloca CV_Tomas_Correia.pdf ao lado de index.html. No BLOCO 06, substitui o aviso de contactos pelos teus links:

```html
<div class="tags">
  <a class="button" href="CV_Tomas_Correia.pdf" download>Download CV</a>
  <a class="button" href="mailto:O_TEU_EMAIL">Email</a>
  <a class="button" href="O_TEU_LINK_LINKEDIN" target="_blank" rel="noopener noreferrer">LinkedIn</a>
</div>
```

Substitui os valores de exemplo pelos teus dados reais.

## 6. Animações — não precisas de mexer para editar os conteúdos

- 02-projetos.js: abrir e fechar detalhes dos projetos.
- 03-menu-scroll.js: navegação, painéis e transições.
- 04-carro-scroll.js: deslocação do carro. Procura const frames para ver as etapas.

Em cada etapa do carro: center(x, y, escala, rotação) usa x e y como frações do ecrã; wire controla a vista técnica de 0 a 1; opacity controla a transparência de 0 a 1; label é a legenda. As variantes mobile adaptam o efeito ao telemóvel.

## 7. Publicar no GitHub

Envia index.html e as pastas css, js e images para a raiz do repositório, mantendo esta estrutura. Envia também o PDF do CV se o adicionares. Como agora os ficheiros estão separados, enviar apenas index.html não chega.

## Verificações

Foi usada a versão HTML que enviaste. A sintaxe dos scripts e os caminhos dos ficheiros foram verificados. A revisão visual no browser continua pendente. Os desenhos são ilustrações, não CAD real do carro da equipa.
