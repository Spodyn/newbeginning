(()=>{'use strict';
  const header=document.querySelector('.site-header');
  const mobile=document.querySelector('.mobile-nav');
  const toggle=document.querySelector('.menu-toggle');
  const topButton=document.querySelector('.floating-top');
  const progress=document.querySelector('.cursor-progress');
  function onScroll(){
    const y=window.scrollY;
    header?.classList.toggle('is-scrolled',y>12);
    topButton?.classList.toggle('shown',y>560);
    const range=document.documentElement.scrollHeight-window.innerHeight;
    if(progress)progress.style.width=(range>0?(y/range)*100:0)+'%';
  }
  window.addEventListener('scroll',onScroll,{passive:true});onScroll();
  function closeMenu(){toggle?.setAttribute('aria-expanded','false');toggle?.setAttribute('aria-label','Otwórz menu');mobile?.classList.remove('open');document.body.classList.remove('menu-open')}
  toggle?.addEventListener('click',()=>{const isOpen=toggle.getAttribute('aria-expanded')==='true';if(isOpen){closeMenu()}else{toggle.setAttribute('aria-expanded','true');toggle.setAttribute('aria-label','Zamknij menu');mobile.classList.add('open');document.body.classList.add('menu-open')}});
  mobile?.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));
  document.addEventListener('keydown',e=>{if(e.key==='Escape')closeMenu()});
  window.addEventListener('resize',()=>{if(window.innerWidth>980)closeMenu()});
  topButton?.addEventListener('click',()=>window.scrollTo({top:0,behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'}));
  const revealElements=document.querySelectorAll('.reveal');
  if('IntersectionObserver'in window&&!window.matchMedia('(prefers-reduced-motion:reduce)').matches){const observer=new IntersectionObserver((entries)=>{entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');observer.unobserve(e.target)}})},{threshold:.09,rootMargin:'0px 0px -35px 0px'});revealElements.forEach(el=>observer.observe(el))}else{revealElements.forEach(el=>el.classList.add('visible'))}
  // This static demo does not operate a backend. A user-initiated form submission
  // opens their configured email application; no website server receives the data.
  const form=document.getElementById('contact-form');
  if(form)form.addEventListener('submit',e=>{
    e.preventDefault();const status=document.getElementById('form-status');
    if(!form.reportValidity())return;
    const d=new FormData(form);if(!d.get('consent')){if(status)status.textContent='Zaznacz zgodę przed przygotowaniem wiadomości.';return}
    const fields=['Imię: '+d.get('firstName'),'Nazwisko: '+d.get('lastName'),'E-mail: '+d.get('email'),'Telefon: '+(d.get('phone')||'Nie podano'),'Temat: '+d.get('topic'),'','Wiadomość:',d.get('message')];
    const subject='New Beginning — zapytanie: '+d.get('topic');
    const href='mailto:dom@dom.com?subject='+encodeURIComponent(subject)+'&body='+encodeURIComponent(fields.join('\n'));
    if(status)status.textContent='Otwieram Twoją aplikację pocztową. Wyślij przygotowaną wiadomość, aby się z nami skontaktować.';
    window.location.href=href;
  });
})();
