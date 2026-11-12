/* Vídeos de casos de uso de One (serie «Day 01–10» de Bernat, Tella).
 * Fuente: skills/bernat-one-videos/SKILL.md. Cada vídeo se enlaza a los módulos del mapa que enseña
 * y se abre en el idioma del mapa (pt-br usa pt; pl y los que faltan usan en y se marcan). No inventes URLs. */
(function () {
  const V = 'https://www.tella.tv/video/';
  const VIDEOS = [
    { d: '01', mods: ['analiticas'], url: { en: 'day-01-branded-deck-from-your-data-en-2ndxbzay', es: 'day-01-branded-deck-from-your-data-es-ei5w2rkz', fr: 'day-01-branded-deck-from-your-data-fr-24yu43wy', it: 'day-01-branded-deck-from-your-data-it-1zw53z2x', pt: 'day-01-branded-deck-from-your-data-pt-h0ygdtcx', de: 'day-01-branded-deck-from-your-data-de-0pr41nt5' },
      t: { en: 'Branded deck from your data', es: 'Una presentación con tu marca a partir de tus datos', de: 'Präsentation im eigenen Branding aus Ihren Daten', fr: 'Une présentation à vos couleurs à partir de vos données', it: 'Una presentazione brandizzata dai tuoi dati', pt: 'Uma apresentação com a sua marca a partir dos seus dados', 'pt-br': 'Uma apresentação com a sua marca a partir dos seus dados', pl: 'Prezentacja w barwach firmy z Twoich danych' } },
    { d: '02', mods: ['control', 'firma'], url: { en: 'day-02-late-arrivals-to-signed-warnings-en-bfckboyw', es: 'day-02-late-arrivals-to-signed-warnings-es-33br3dsx', fr: 'day-02-late-arrivals-to-signed-warnings-fr-6tufe4vm', it: 'day-02-late-arrivals-to-signed-warnings-it-12zk5umu', pt: 'day-02-late-arrivals-to-signed-warnings-pt-9fra32b7', de: 'day-02-late-arrivals-to-signed-warnings-de-da7vc443' },
      t: { en: 'Late arrivals to signed warnings', es: 'De los retrasos a la amonestación firmada', de: 'Von Verspätungen zur unterschriebenen Abmahnung', fr: 'Des retards à l’avertissement signé', it: 'Dai ritardi al richiamo firmato', pt: 'Dos atrasos à advertência assinada', 'pt-br': 'Dos atrasos à advertência assinada', pl: 'Od spóźnień do podpisanego upomnienia' } },
    { d: '03', mods: ['compensacion', 'analiticas'], url: { en: 'vid_cmwdmqacf02jh02ns4fwu9in8', es: 'vid_cmwdmqxpr00gy02nzbkuicnci', fr: 'vid_cmwdmrlq3033w02ns40epa2ev', it: 'vid_cmwdmsc2q02c402l86pt11c8s', pt: 'vid_cmwdmt0zn03hd02nsgisnef5n', de: 'vid_cmwdmpog3029s02ns3k5vc0h1' },
      t: { en: 'Gender pay gap by role', es: 'Brecha salarial de género por puesto', de: 'Gender Pay Gap nach Rolle', fr: 'Écart salarial femmes-hommes par poste', it: 'Divario retributivo di genere per ruolo', pt: 'Disparidade salarial de género por função', 'pt-br': 'Disparidade salarial de gênero por cargo', pl: 'Luka płacowa ze względu na płeć według stanowiska' } },
    { d: '04', mods: ['compensacion', 'documentos'], url: { en: 'vid_cmwdmqj2u014h02mibmiu2cje', es: 'vid_cmwdmr95o01rs02nx7vqy33rh', fr: 'vid_cmwdmrtym036k02ns4gks40z1', it: 'vid_cmwdmsrji03fn02nsdtskagdy', pt: 'vid_cmwdmtahp01x402nx1lb8gyfr', de: 'vid_cmwdmq0rl02gb02nsh3c98k6m' },
      t: { en: 'Your payslip explained', es: 'Tu nómina, explicada', de: 'Ihre Gehaltsabrechnung erklärt', fr: 'Votre fiche de paie expliquée', it: 'La tua busta paga spiegata', pt: 'O seu recibo de vencimento explicado', 'pt-br': 'Seu holerite explicado', pl: 'Twój pasek wypłaty wyjaśniony' } },
    { d: '05', mods: [], url: { en: 'day-05-find-a-free-meeting-room-en-514sd70u', es: 'day-05-find-a-free-meeting-room-es-61y8cskj', fr: 'day-05-find-a-free-meeting-room-fr-au4a07uq', it: 'day-05-find-a-free-meeting-room-it-ba4iesxy', pt: 'day-05-find-a-free-meeting-room-pt-95rzf87g', de: 'day-05-find-a-free-meeting-room-de-1ng49sj5' },
      t: { en: 'Find a free meeting room', es: 'Encuentra una sala de reuniones libre', de: 'Einen freien Besprechungsraum finden', fr: 'Trouver une salle de réunion libre', it: 'Trova una sala riunioni libera', pt: 'Encontrar uma sala de reuniões livre', 'pt-br': 'Encontre uma sala de reunião livre', pl: 'Znajdź wolną salę konferencyjną' } },
    { d: '06', mods: ['formacion', 'onoff'], url: { en: 'day-06-onboarding-course-from-a-deck-en-dbcxcd8z', es: 'day-06-onboarding-course-from-a-deck-es-4gw1c8v0', fr: 'day-06-onboarding-course-from-a-deck-fr-3dj40tba', it: 'day-06-onboarding-course-from-a-deck-it-6ifs06ik', pt: 'day-06-onboarding-course-from-a-deck-pt-9r287ar1', de: 'day-06-onboarding-course-from-a-deck-de-6vuq486h' },
      t: { en: 'Onboarding course from a deck', es: 'Un curso de onboarding a partir de una presentación', de: 'Onboarding-Kurs aus einer Präsentation', fr: 'Un cours d’onboarding à partir d’une présentation', it: 'Un corso di onboarding da una presentazione', pt: 'Um curso de onboarding a partir de uma apresentação', 'pt-br': 'Um curso de onboarding a partir de uma apresentação', pl: 'Kurs onboardingowy z prezentacji' } },
    { d: '07', mods: ['turnos'], url: { en: 'day-07-shift-changes-from-a-whiteboard-photo-en-f0g5f6s5', es: 'day-07-shift-changes-from-a-whiteboard-photo-es-7dfzammq', fr: 'day-07-shift-changes-from-a-whiteboard-photo-fr-1ojc99wr', it: 'day-07-shift-changes-from-a-whiteboard-photo-it-35mg29je', pt: 'day-07-shift-changes-from-a-whiteboard-photo-pt-36s7hm9k', de: 'day-07-shift-changes-from-a-whiteboard-photo-de-7zhf148r' },
      t: { en: 'Shift changes from a whiteboard photo', es: 'Cambios de turno desde la foto de una pizarra', de: 'Schichtänderungen aus einem Whiteboard-Foto', fr: 'Changements de planning depuis la photo d’un tableau', it: 'Cambi turno dalla foto di una lavagna', pt: 'Mudanças de turno a partir da foto de um quadro', 'pt-br': 'Mudanças de turno a partir da foto de um quadro', pl: 'Zmiany grafiku ze zdjęcia tablicy' } },
    { d: '08', mods: ['compras'], url: { en: 'day-08-purchase-request-from-a-supplier-quote-en-huzdh7dm', es: 'day-08-purchase-request-from-a-supplier-quote-es-032q7251', fr: 'day-08-purchase-request-from-a-supplier-quote-fr-d4q6c7eu', it: 'day-08-purchase-request-from-a-supplier-quote-it-cjaablqe', pt: 'day-08-purchase-request-from-a-supplier-quote-pt-ec5chx7z', de: 'day-08-purchase-request-from-a-supplier-quote-de-40et3nuz' },
      t: { en: 'Purchase request from a supplier quote', es: 'Una solicitud de compra a partir de un presupuesto', de: 'Bestellanforderung aus einem Lieferantenangebot', fr: 'Une demande d’achat à partir d’un devis', it: 'Una richiesta d’acquisto da un preventivo', pt: 'Um pedido de compra a partir de um orçamento', 'pt-br': 'Uma solicitação de compra a partir de um orçamento', pl: 'Wniosek zakupowy z oferty dostawcy' } },
    { d: '09', mods: ['desempeno', 'revision', 'politicas'], url: { en: 'day-09-promotion-request-and-promotion-policy-change-en-1diedsr1', es: 'day-09-promotion-request-and-promotion-policy-change-es-g8y8b9uj', fr: 'day-09-promotion-request-and-promotion-policy-change-fr-5xurfme5', it: 'day-09-promotion-request-and-promotion-policy-change-it-64ybeb5b', pt: 'day-09-promotion-request-and-promotion-policy-change-pt-21db1mwz', de: 'day-09-promotion-request-and-promotion-policy-change-de-5m9l2ol9' },
      t: { en: 'Promotion request and policy change', es: 'Solicitud de promoción y cambio de la política', de: 'Beförderungsantrag und Änderung der Richtlinie', fr: 'Demande de promotion et changement de politique', it: 'Richiesta di promozione e modifica della policy', pt: 'Pedido de promoção e alteração da política', 'pt-br': 'Solicitação de promoção e mudança da política', pl: 'Wniosek o awans i zmiana polityki awansów' } },
    { d: '10', mods: ['ausencias'], url: { en: 'day-10-next-years-holidays-for-every-workplace-en-e2088r2c', es: 'day-10-next-years-holidays-for-every-workplace-es-59n7fneg', fr: 'day-10-next-years-holidays-for-every-workplace-fr-cdf18rcl', it: 'day-10-next-years-holidays-for-every-workplace-it-0wl65tlh', pt: 'day-10-next-years-holidays-for-every-workplace-pt-dgx0fagy', de: 'day-10-next-years-holidays-for-every-workplace-de-55jqgflq' },
      t: { en: 'Next year’s holidays for every workplace', es: 'Los festivos del año que viene en cada centro', de: 'Feiertage des nächsten Jahres für jeden Standort', fr: 'Les jours fériés de l’an prochain pour chaque site', it: 'Le festività del prossimo anno per ogni sede', pt: 'Os feriados do próximo ano em cada local de trabalho', 'pt-br': 'Os feriados do próximo ano em cada unidade', pl: 'Święta na przyszły rok dla każdej lokalizacji' } }
  ];
  const PL = 'https://www.tella.tv/playlist/';
  const PLAYLISTS = { en: 'pl_cmwbxvbps003u08jkfoc51icg', es: 'pl_cmwbxvc7b004208jkew2v0n94', fr: 'pl_cmwbxvcpt004408jk3u4a8o84', it: 'pl_cmwbxvdgb006a08l46412fos7', pt: 'pl_cmwbxvdut006b08l49ti19his', de: 'pl_cmwbxvd2y006908l4bttf4e25' };
  const TX = {
    es: { h: 'Mira a One hacerlo', all: 'Los 10 casos de uso', fb: 'En inglés', day: 'Día' },
    en: { h: 'Watch One do it', all: 'All 10 use cases', fb: '', day: 'Day' },
    de: { h: 'One in Aktion ansehen', all: 'Alle 10 Use Cases', fb: 'Auf Englisch', day: 'Tag' },
    fr: { h: 'Voir One en action', all: 'Les 10 cas d’usage', fb: 'En anglais', day: 'Jour' },
    it: { h: 'Guarda One in azione', all: 'Tutti i 10 casi d’uso', fb: 'In inglese', day: 'Giorno' },
    pt: { h: 'Veja o One em ação', all: 'Os 10 casos de uso', fb: 'Em inglês', day: 'Dia' },
    'pt-br': { h: 'Veja o One em ação', all: 'Os 10 casos de uso', fb: 'Em inglês', day: 'Dia' },
    pl: { h: 'Zobacz One w akcji', all: 'Wszystkie 10 przypadków użycia', fb: 'Po angielsku', day: 'Dzień' }
  };
  const vlang = l => (l === 'pt-br' ? 'pt' : l);
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const play = '<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 5.5v13a1 1 0 0 0 1.5.86l10.5-6.5a1 1 0 0 0 0-1.72L9.5 4.64A1 1 0 0 0 8 5.5z"/></svg>';

  function card(v, lang) {
    const x = TX[lang] || TX.en, vl = vlang(lang), slug = v.url[vl], fallback = !slug;
    const href = V + (slug || v.url.en);
    return `<a class="ov" href="${href}" target="_blank" rel="noopener"><span class="ov-p">${play}</span><span class="ov-t"><span class="ov-d">${esc(x.day)} ${v.d}${fallback && x.fb ? ` · <span class="ov-fb">${esc(x.fb)}</span>` : ''}</span><span class="ov-n">${esc(v.t[lang] || v.t.en)}</span></span><span class="ov-a" aria-hidden="true">↗</span></a>`;
  }
  function playlist(lang) {
    const x = TX[lang] || TX.en, id = PLAYLISTS[vlang(lang)] || PLAYLISTS.en;
    return `<a class="ov-all" href="${PL + id}/public" target="_blank" rel="noopener">${esc(x.all)} →</a>`;
  }
  /* Sección para el panel de un módulo; vacía si el módulo no tiene vídeo. */
  window.oneVideosHTML = function (mod, lang) {
    const list = VIDEOS.filter(v => v.mods.includes(mod));
    if (!list.length) return '';
    const x = TX[lang] || TX.en;
    return `<div class="p-sec p-ov"><h3>${esc(x.h)}</h3><div class="ovs">${list.map(v => card(v, lang)).join('')}</div>${playlist(lang)}</div>`;
  };
  /* Vídeos incrustados (reproductor de Tella) para la sección «Míralo en acción» del módulo, con la playlist debajo. */
  window.oneVideosEmbedHTML = function (mod, lang) {
    const list = VIDEOS.filter(v => v.mods.includes(mod));
    if (!list.length) return '';
    const x = TX[lang] || TX.en, vl = vlang(lang);
    return list.map(v => { const slug = v.url[vl], fb = !slug && x.fb, name = v.t[lang] || v.t.en;
      return `<figure class="ovx"><figcaption>${esc(x.day)} ${v.d} · ${esc(name)}${fb ? ` <span class="ov-fb">(${esc(x.fb)})</span>` : ''}</figcaption><iframe class="pvideo ovf" src="${V + (slug || v.url.en)}/embed" title="${esc(name)}" loading="lazy" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe></figure>`; }).join('') + playlist(lang);
  };
  /* Los 10 vídeos, para el panel de One. */
  window.oneVideosAllHTML = function (lang) {
    const x = TX[lang] || TX.en;
    return `<div class="p-sec p-ov"><h3>${esc(x.h)}</h3><div class="ovs">${VIDEOS.map(v => card(v, lang)).join('')}</div>${playlist(lang)}</div>`;
  };
  window.ONE_VIDEOS = VIDEOS;
})();
