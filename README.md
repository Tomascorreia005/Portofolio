# Tomás Correia — Portfolio

## Abrir no VS Code

1. Extrai o ZIP.
2. No VS Code, escolhe File > Open Folder e abre esta pasta.
3. Abre index.html.
4. Para veres o site, abre index.html no browser. Também podes usar a extensão Live Server do VS Code e escolher Open with Live Server.

Não precisas de instalar Node.js, npm ou outras dependências. O HTML, CSS e JavaScript estão incluídos em index.html. As fontes Google precisam de ligação à Internet; sem ligação são usadas as fontes alternativas.

## Onde editar

- Textos, experiência e projetos: procura as frases em inglês no index.html com Ctrl+F.
- Cores: procura :root. A variável --red define a cor de destaque.
- Aspeto visual: os blocos <style> contêm o CSS.
- Menu, capítulos e animações: os blocos <script> no fim contêm o JavaScript.
- Painéis que abrem com o scroll: procura const data=.
- Carro animado: procura Continuous scroll-controlled race car e const frames=.
- Contactos: procura CONTACT DETAILS & CV COMING SOON e substitui esse conteúdo pelos teus links.

Algum conteúdo é criado por JavaScript, por isso também encontras textos dentro dos blocos <script>.

## Fotografias

Coloca os ficheiros na pasta images. Por exemplo, para usares images/chassis.jpg:

```html
<img src="images/chassis.jpg" alt="PHISEC Racing chassis" style="width:100%;height:100%;object-fit:cover">
```

Podes substituir o SVG dentro de uma .projectvisual por uma imagem. Mantém pelo menos um SVG nessa classe enquanto o código do capítulo técnico usar document.querySelector('.projectvisual svg').

## CV e contactos

Coloca o teu CV nesta pasta, com o nome CV_Tomas_Correia.pdf. Exemplo de links:

```html
<a href="CV_Tomas_Correia.pdf" download>Download CV</a>
<a href="mailto:O_TEU_EMAIL">Email me</a>
<a href="O_TEU_LINK_LINKEDIN" target="_blank" rel="noopener noreferrer">LinkedIn</a>
```

Substitui os valores de exemplo pelos teus dados reais.

## Notas

O site adapta-se a telemóvel e respeita a preferência do sistema para reduzir animações. Os carros e diagramas são ilustrações esquemáticas, não CAD do PHI5e. Revê os conteúdos antes de publicares. A sintaxe JavaScript foi verificada, mas a animação ainda precisa de revisão visual no browser.
