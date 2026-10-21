/* ANIMAÇÃO DO CARRO — procura const frames para editar posições, escala e rotação */

(()=>{
  if(matchMedia('(prefers-reduced-motion: reduce)').matches)return;
  const source=document.querySelector('.hero-machine svg');
  if(!source)return;
  const car=document.createElement('div');
  car.className='scroll-car';
  car.setAttribute('aria-hidden','true');
  car.append(source.cloneNode(true));
  const svg=car.querySelector('svg');
  svg.querySelector('linearGradient').id='scroll-bodypaint';
  svg.querySelectorAll('path').forEach(p=>{
    if((p.getAttribute('fill')||'').includes('bodypaint')){
      p.setAttribute('fill','url(#scroll-bodypaint)');
      p.classList.add('car-shell');
    }
    if(p.getAttribute('fill')==='#d6dccb')p.classList.add('car-shell');
  }
  );
  const ns='http://www.w3.org/2000/svg';
  function add(tag,attrs,parent=svg){
    const el=document.createElementNS(ns,tag);
    Object.entries(attrs).forEach(([k,v])=>el.setAttribute(k,v));
    parent.append(el);
    return el;
  }
  const wires=add('g',{
    class:'car-wire',fill:'none',stroke:'#b3d6a0','stroke-width':'1.4'}
    );
    add('path',{
      d:'M168 90 192 90 201 283 233 354 247 538 208 635 152 635 113 538 127 354 159 283Z M159 283 233 354 127 354 201 283 M127 354 247 538 113 538 233 354 M113 538 208 635 152 635 247 538 M127 354 208 635 M233 354 152 635 M168 90 201 283 M192 90 159 283'}
      ,wires);
      add('path',{
        d:'M168 90 159 283 127 354 113 538 152 635 208 635 247 538 233 354 201 283 192 90Z',class:'car-trace'}
        );
        add('path',{
          d:'M20 155V60h95M245 60h95v95M340 585v115h-95M115 700H20V585',class:'car-corner'}
          );
          const wheelRects=[...svg.querySelectorAll('rect')];
          wheelRects.forEach(rect=>{
            rect.parentNode.classList.add('car-wheel');
            const x=Number(rect.getAttribute('x')),y=Number(rect.getAttribute('y')),w=Number(rect.getAttribute('width')),h=Number(rect.getAttribute('height'));
            for(let n=1;
            n<4;
            n++)add('line',{
              x1:x+9,y1:y+n*h/4,x2:x+w-9,y2:y+n*h/4}
              ,rect.parentNode);
            }
            );
            const speed=add('g',{
              class:'speed-line'}
              );
              [8,28,332,352].forEach((x,i)=>add('path',{
                d:'M'+x+' '+(180+i*40)+'v130m0 30v55'}
                ,speed));
                // FOTO DO CARRO — muda apenas o caminho se trocares a imagem.
const fotoCarro = document.createElement("img");

fotoCarro.src = "images/carro_phisec_2.png";
fotoCarro.alt = "";
fotoCarro.style.cssText = `
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

// Substitui o desenho pela fotografia.
svg.style.display = "none";
car.append(fotoCarro);
                document.body.append(car);
                const readout=document.createElement('div');
                readout.className='car-readout';
                readout.innerHTML='<b>01</b><span>ON THE GRID</span>';
                document.body.append(readout);
                const hero=document.querySelector('.hero'),statement=document.getElementById('manifesto'),story=document.getElementById('journey');
                const clamp=n=>Math.max(0,Math.min(1,n));
                const mix=(a,b,t)=>a+(b-a)*t;
                const smooth=t=>t*t*(3-2*t);
                let pending=false;
                function draw(){
                  pending=false;
                  const w=innerWidth,h=innerHeight,y=scrollY,mobile=w<761;
                  // On phones, give the car its own space rather than covering text.
                  if (mobile) {
                    if (car.parentNode !== hero) hero.insertBefore(car, hero.querySelector('.ticker'));
                    car.style.removeProperty('transform');
                    car.style.removeProperty('opacity');
                    readout.style.display = 'none';
                    return;
                  }
                  if (car.parentNode !== document.body) document.body.append(car);
                  readout.style.removeProperty('display');

                  const a=statement.offsetTop,b=story.offsetTop,c=b+story.offsetHeight-h;
                  // TAMANHO DO CARRO — aumenta estes valores para ficar maior.
const base = mobile
  ? Math.min(280, w * 0.70)  // Telemóvel
  : Math.min(550, w * 0.45); // Computador
                  const ratio=740/360;
                  car.style.width=base+'px';
                  car.style.height=base*ratio+'px';
                  const center=(x,yy,s,r)=>({
                    x:x*w-base/2,y:yy*h-base*ratio/2,s,r}
                    );
                    const frames=[{
                      at:0,...center(mobile?.77:.76,.50,mobile?1.1:1.05,-18),wire:0,opacity:mobile?.45:.9,label:'ON THE GRID'}
                      , {
                        at:a,...center(mobile?.85:.82,.56,.78,0),wire:.4,opacity:mobile?.18:.32,label:'QUESTION THE DESIGN'}
                        , {
                          at:b,...center(mobile?.80:.29,mobile?.27:.68,mobile?.65:.75,0),wire:1,opacity:mobile?.18:.95,label:'STRUCTURAL ANALYSIS'}
                          , {
                            at:b+(c-b)*.45,...center(mobile?.80:.29,mobile?.27:.68,mobile?.65:.81,18),wire:.75,opacity:mobile?.18:.95,label:'MECHANICAL DEVELOPMENT'}
                            , {
                              at:c,...center(mobile?.80:.29,mobile?.27:.68,mobile?.65:.76,-12),wire:.2,opacity:mobile?.18:.95,label:'THE COMPLETE SYSTEM'}
                              , {
                                at:c+h*.85,...center(.94,.83,mobile?.24:.30,0),wire:0,opacity:.55,label:'KEEP MOVING FORWARD'}
                                , {
                                  at:document.documentElement.scrollHeight,...center(.94,.83,mobile?.24:.30,0),wire:0,opacity:.55,label:'THE NEXT CHALLENGE'}
                                  ];
                                  let i=0;
                                  while(i<frames.length-2&&y>frames[i+1].at)i++;
                                  const f=frames[i],g=frames[i+1],t=smooth(clamp((y-f.at)/Math.max(1,g.at-f.at)));
                                  car.style.transform='translate3d('+mix(f.x,g.x,t)+'px,'+mix(f.y,g.y,t)+'px,0) rotate('+mix(f.r,g.r,t)+'deg) scale('+mix(f.s,g.s,t)+')';
                                  car.style.opacity=mix(f.opacity,g.opacity,t);
                                  const wire=mix(f.wire,g.wire,t);
                                  car.style.setProperty('--wire',wire);
                                  car.style.setProperty('--shell',1-wire*.88);
                                  car.style.setProperty('--trace',Math.round(wire*1800));
                                  car.style.setProperty('--speed',y<a?clamp(y/Math.max(1,a))*.8:0);
                                  readout.querySelector('b').textContent=String(Math.min(i+1,6)).padStart(2,'0');
                                  readout.querySelector('span').textContent=t<.5?f.label:g.label;
                                  readout.style.opacity=y>h*.15?'1':'0';
                                }
                                function request(){
                                  if(!pending){
                                    pending=true;
                                    requestAnimationFrame(draw);
                                  }
                                }
                                addEventListener('scroll',request,{
                                  passive:true}
                                  );
                                  addEventListener('resize',request);
                                  document.fonts.ready.then(request);
                                  draw();
                                }
                                )();
