/* One Map · menú del sitio, idioma y modo noche para las páginas nuevas (Planes). */
(function () {
  var NAV = {
    es: ['Mapa One', 'Conectores', 'Planes'],
    en: ['One Map', 'Connectors', 'Plans'],
    de: ['One-Karte', 'Konnektoren', 'Pläne'],
    pt: ['Mapa One', 'Conectores', 'Planos'],
    'pt-br': ['Mapa One', 'Conectores', 'Planos'],
    fr: ['Carte One', 'Connecteurs', 'Offres'],
    it: ['Mappa One', 'Connettori', 'Piani'],
    pl: ['Mapa One', 'Konektory', 'Plany']
  };
  var PAGES = ['', 'connectors/', 'plans/'];
  var NAMES = { es: 'Español', en: 'English', de: 'Deutsch', pt: 'Português (Portugal)', 'pt-br': 'Português (Brasil)', fr: 'Français', it: 'Italiano', pl: 'Polski' };
  var qs = new URLSearchParams(location.search);
  function store(k, v) { try { if (v === undefined) return localStorage.getItem(k); localStorage.setItem(k, v); } catch (e) { return null; } }
  var lang = qs.get('lang');
  if (!NAV[lang]) lang = store('onemap-lang');
  if (!NAV[lang]) lang = 'es';
  var partner = qs.get('for') === 'partner';

  function query(l) { var q = new URLSearchParams(); if (l !== 'es') q.set('lang', l); if (partner) q.set('for', 'partner'); var s = q.toString(); return s ? '?' + s : ''; }

  window.SITE = {
    lang: lang, partner: partner, names: NAMES,
    /* menú arriba de todo; `current` es la carpeta de la página, p. ej. 'plans/' */
    bar: function (current) {
      var nav = document.createElement('nav');
      nav.className = 'sitebar'; nav.id = 'sitebar'; nav.setAttribute('aria-label', 'Factorial One');
      PAGES.forEach(function (p, i) {
        var a = document.createElement('a');
        a.href = '../' + p + 'index.html' + query(lang);
        a.textContent = NAV[lang][i];
        if (p === current) a.setAttribute('aria-current', 'page');
        nav.appendChild(a);
      });
      document.body.insertBefore(nav, document.body.firstChild);
    },
    /* selector de idioma: recarga la página con ?lang= */
    langSelect: function (sel, only) {
      Object.keys(NAMES).forEach(function (k) {
        if (only && only.indexOf(k) < 0) return;
        var o = document.createElement('option'); o.value = k; o.textContent = NAMES[k]; sel.appendChild(o);
      });
      sel.value = lang;
      sel.addEventListener('change', function () {
        store('onemap-lang', sel.value);
        var u = new URL(location.href);
        if (sel.value === 'es') u.searchParams.delete('lang'); else u.searchParams.set('lang', sel.value);
        location.href = u.toString();
      });
    },
    theme: function (btn) {
      var root = document.documentElement;
      function sync() { btn.setAttribute('aria-pressed', String(root.getAttribute('data-theme') === 'dark')); }
      btn.addEventListener('click', function () {
        var dark = root.getAttribute('data-theme') !== 'dark';
        if (dark) root.setAttribute('data-theme', 'dark'); else root.removeAttribute('data-theme');
        store('onemap-theme', dark ? 'dark' : 'light'); sync();
      });
      sync();
    },
    mapLink: function (hash) { return '../index.html' + query(lang) + (hash ? '#' + hash : ''); }
  };
})();
