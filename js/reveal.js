// Vstup sekcií: každý prvok [data-reveal] sa objaví raz. Bez JS a pri reduced motion je všetko viditeľné hneď.
// Žiadne čítanie layoutu (getBoundingClientRect): prvý pohľad (hero) data-reveal nemá, zvyšok rieši IntersectionObserver.
const els = document.querySelectorAll('[data-reveal]');
const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (!reduce && 'IntersectionObserver' in window && els.length) {
  // stagger v gridoch: poradie medzi súrodencami s data-reveal
  for (const el of els) {
    const sibs = [...el.parentElement.children].filter((c) => c.hasAttribute('data-reveal'));
    if (sibs.length > 1) el.style.setProperty('--i', String(sibs.indexOf(el)));
  }
  const io = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (!e.isIntersecting) continue;
        e.target.classList.add('is-in');
        io.unobserve(e.target);
      }
    },
    { rootMargin: '0px 0px -8% 0px' },
  );
  for (const el of els) io.observe(el);
  document.documentElement.classList.add('js');
}
