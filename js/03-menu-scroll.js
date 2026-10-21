/* MENU, PAINÉIS, PROGRESSO E REVELAÇÃO DAS SECÇÕES */

(()=>{
  const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
  const nav=document.querySelector('nav');
  const toggle=document.createElement('button');
  toggle.className='menu-toggle';
  toggle.textContent='MENU +';
  toggle.setAttribute('aria-expanded','false');
  toggle.setAttribute('aria-controls','chapter-menu');
  nav.append(toggle);
  const overlay=document.createElement('div');
  overlay.id='chapter-menu';
  overlay.className='menu-overlay';
  overlay.setAttribute('inert','');
  overlay.innerHTML=window.PORTFOLIO_CONTENT.menuHtml;
  document.body.append(overlay);
  function menu(open){
    overlay.classList.toggle('open',open);
    overlay.inert=!open;
    toggle.setAttribute('aria-expanded',String(open));
    toggle.textContent=open?'CLOSE ×':'MENU +';
    document.body.classList.toggle('menu-open',open);
    if(open)overlay.querySelector('a').focus();
    else toggle.focus();
  }
  toggle.addEventListener('click',()=>menu(toggle.getAttribute('aria-expanded')!=='true'));
  overlay.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>menu(false)));
  document.addEventListener('keydown',e=>{
    if(toggle.getAttribute('aria-expanded')!=='true')return;
    if(e.key==='Escape')menu(false);
    if(e.key==='Tab'){
      const list=[toggle,...overlay.querySelectorAll('a')],i=list.indexOf(document.activeElement);
      if(e.shiftKey&&i===0){
        e.preventDefault();
        list.at(-1).focus();
      }
      else if(!e.shiftKey&&i===list.length-1){
        e.preventDefault();
        toggle.focus();
      }
    }
  }
  );
  const progress=document.createElement('div');
  progress.className='scroll-progress';
  progress.setAttribute('aria-hidden','true');
  document.body.append(progress);
  const machine=document.createElement('div');
  machine.className='hero-machine';
  machine.setAttribute('aria-hidden','true');
  machine.innerHTML=window.PORTFOLIO_CONTENT.carSvg;
  document.querySelector('.hero').append(machine);
  const cue=document.createElement('a');
  cue.className='scroll-cue';
  cue.href='#manifesto';
  cue.textContent='SCROLL TO LEAVE THE GRID';
  document.querySelector('.hero').append(cue);
  const statement=document.createElement('section');
  statement.id='manifesto';
  statement.className='intro-statement';
  statement.innerHTML=window.PORTFOLIO_CONTENT.manifestoHtml;
  document.querySelector('.hero').after(statement);
  const story=document.createElement('section');
  story.id='journey';
  story.className='work-story';
  story.innerHTML=window.PORTFOLIO_CONTENT.journeyHtml;
  statement.after(story);
  story.querySelector('.stage-art').append(document.querySelector('.hero-machine svg').cloneNode(true));
  const data=window.PORTFOLIO_CONTENT.panels.map(p=>[p.title,p.subtitle,p.description,p.tags,p.link]);
  data.forEach((d,i)=>{
    const panel=document.createElement('div');
    panel.className='work-panel';
    panel.innerHTML='<button aria-expanded="false" aria-controls="chapter-panel-'+i+'"><span><small>0'+(i+1)+'</small>'+d[0]+'</span><b>+</b></button><div id="chapter-panel-'+i+'" class="panel-content"><div class="panel-inner"><p><strong>'+d[1]+'</strong></p><p>'+d[2]+'</p><div class="tags">'+d[3].map(x=>'<span>'+x+'</span>').join('')+'</div><a href="'+d[4]+'">EXPLORE FURTHER ↗</a></div></div>';
    story.querySelector('.work-panels').append(panel);
    panel.querySelector('button').addEventListener('click',()=>{
      manual=true;
      activate(i);
    }
    );
  }
  );
  const panels=[...story.querySelectorAll('.work-panel')];
  let current=-1,manual=false;
  function activate(index){
    if(current===index)return;
    current=index;
    panels.forEach((p,i)=>{
      const active=i===index;
      p.classList.toggle('active',active);
      p.querySelector('button').setAttribute('aria-expanded',String(active));
      p.querySelector('b').textContent=active?'−':'+';
      p.querySelector('.panel-content').inert=!active&&!reduced;
    }
    );
    story.querySelector('.stage-number').textContent='0'+(index+1)+' / '+String(panels.length).padStart(2,'0');
    story.querySelector('.stage-art svg').style.transform='rotate('+(index-1)*5+'deg) scale('+(1+index*.04)+')';
  }
  activate(0);
  const chapters=['top','journey','work','about','experience','contact'];
  const dots=document.createElement('nav');
  dots.className='chapter-nav';
  dots.setAttribute('aria-label','Page chapters');
  chapters.forEach((id,i)=>{
    const a=document.createElement('a');
    a.href='#'+id;
    a.setAttribute('aria-label',['Starting grid','Engineering in motion','Selected projects','About me','Experience','Next challenge'][i]);
    dots.append(a);
  }
  );
  document.body.append(dots);
  document.querySelectorAll('#work .sectiontop,.project,.aboutgrid>div,.experience>div,.timelineitem,.contact>*').forEach(el=>el.classList.add('reveal'));
  const observer=new IntersectionObserver(entries=>entries.forEach(e=>{
    if(e.isIntersecting){
      e.target.classList.add('in-view');
      observer.unobserve(e.target);
    }
  }
  ),{
    threshold:.1}
    );
    document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
    let queued=false,lastStep=-1;
    function update(){
      queued=false;
      const y=scrollY,h=innerHeight,max=document.documentElement.scrollHeight-h;
      progress.style.transform='scaleX('+(max?y/max:0)+')';
      if(!reduced)document.querySelector('.hero').style.setProperty('--hero-shift',Math.min(y*.3,h*.3)+'px');
      const r=story.getBoundingClientRect(),travel=story.offsetHeight-h;
      const step=Math.max(0,Math.min(panels.length-1,Math.floor((-r.top/Math.max(travel,1))*panels.length)));
      if(step!==lastStep){
        manual=false;
        lastStep=step;
      }
      if(!manual && innerWidth > 760)activate(step);
      let selected=0;
      chapters.forEach((id,i)=>{
        if((id==='top'?document.querySelector('.hero'):document.getElementById(id)).getBoundingClientRect().top<h*.5)selected=i;
      }
      );
      [...dots.children].forEach((a,i)=>{
        a.classList.toggle('active',i===selected);
        if(i===selected)a.setAttribute('aria-current','location');
        else a.removeAttribute('aria-current');
      }
      );
    }
    addEventListener('scroll',()=>{
      if(!queued){
        queued=true;
        requestAnimationFrame(update);
      }
    }
    ,{
      passive:true}
      );
      addEventListener('resize',update);
      update();
    }
    )();
