/* MOCK · versión corta del mapa (solo para ver cómo quedaría) */
/* idiomas: ES y EN viven aquí; DE, FR, IT, PT, PT-BR y PL vienen de mock-i18n.js (MOCK_TX). Si falta uno, sale en inglés. */
const MX = (window.MOCK_TX || {})[lang] || null;
(function () {
  const es = lang === 'es';
  const L = es ? {
    sub: 'Un solo sistema para RR. HH., Finanzas e IT, con un agente de IA que ya conoce tu empresa.',
    proof: ['Un solo dato, de principio a fin', 'IA con tus permisos, nada nuevo expuesto', 'Datos en la UE, RGPD y AI Act'],
    hint: 'Toca un módulo para ver qué hace One con él.',
    more: 'Más detalles', why: 'Por qué One y no una IA genérica',
    cards: [['Ya tiene el contexto', 'Conectado a tus datos de Factorial desde el primer mensaje. No hay que pegar nada.'], ['Ve lo que tu rol permite', 'Mismos permisos que en Factorial. Nada nuevo expuesto.'], ['Actúa, no solo responde', 'Prepara, aprueba y automatiza. Tú decides las excepciones.']],
    explore: 'Sigue explorando', links: [['Planes', 'Compara qué incluye cada bundle', 'plans/index.html'], ['Conectores', 'Las apps que One ya conecta', 'connectors/index.html']]
  } : {
    sub: 'One system for HR, Finance and IT, with an AI agent that already knows your company.',
    proof: ['One source of data, end to end', 'AI with your permissions, nothing new exposed', 'Data in the EU, GDPR and AI Act'],
    hint: 'Tap a module to see what One does with it.',
    more: 'More details', why: 'Why One, not a generic AI',
    cards: [['It already has the context', 'Connected to your Factorial data from the first message. Nothing to paste.'], ['It sees what your role allows', 'Same permissions as in Factorial. Nothing new exposed.'], ['It acts, not just answers', 'Prepares, approves and automates. You decide the exceptions.']],
    explore: 'Keep exploring', links: [['Plans', 'Compare what each bundle includes', 'plans/index.html'], ['Connectors', 'The apps One already connects to', 'connectors/index.html']]
  };
  if (MX) { const u = MX.ui; Object.assign(L, { sub: u.sub, proof: u.proof, hint: u.hint, more: u.more, why: u.why, cards: u.cards, explore: u.explore,
    links: u.links.map(([a, b], i) => [a, b, L.links[i][2]]) }); }
  document.body.classList.add('mock');
  // hero: una frase + 3 pruebas
  const sub = document.querySelector('.sub'); sub.textContent = L.sub;
  const hint = document.querySelector('.hint');
  hint.outerHTML = `<div class="proof">${L.proof.map(p => `<span>${p}</span>`).join('')}</div><p class="hint">${L.hint}</p>`;
  // panel: descripción, vídeo, One y conexiones; el resto en «Más detalles»
  const orig = render;
  const T2 = es ? { why: 'Por qué Factorial', works: 'Funciona con', next: 'Lo que viene', soonTag: 'Pronto', watch: 'Míralo en acción' }
                : MX ? { why: MX.ui.whyF, works: MX.ui.works, next: MX.ui.next, soonTag: MX.ui.soonTag, watch: MX.ui.watch }
                : { why: 'Why Factorial', works: 'Works with', next: "What's next", soonTag: 'Soon', watch: 'See it in action' };
  render = function (key) {
    orig(key);
    if (key === 'one' || key.startsWith('hub:')) { legacy(); if (key === 'one' && window.oneVideosAllHTML) panelIn.insertAdjacentHTML('beforeend', oneVideosAllHTML(lang)); return; }
    // panel de módulo: 1 propuesta de valor + cifra · 2 vídeo · 3 con One · 4 por qué Factorial · 5 lo que viene · más detalles
    const m = tm(key), mx = (MODX[lang] || {})[key] || {};
    const head = panelIn.querySelector('.p-head').outerHTML;
    const st = m.stats || (m.stat ? [m.stat] : null);
    let h = head + `<p class="lead vp">${m.lead}</p>`;
    if (st) h += `<div class="stats vp-stats">${st.map(s => `<div class="stat"><b>${s.n}</b><span>${s.t}</span></div>`).join('')}</div>`;
    // «Más detalles» justo debajo de la propuesta de valor, antes del vídeo y de One
    const vals = [...m.value, ...(mx.extra || [])];
    h += `<details class="more"><summary>${L.more}</summary><h3>${U('brings')}</h3><ul class="vals">${vals.map(v => `<li>${v}</li>`).join('')}</ul>${m.oneNote && m.one ? `<p class="note" style="margin-top:12px">${m.oneNote}</p>` : ''}${m.one && m.one.length > 1 ? chatHTML(m.one.slice(1)) : ''}${m.special === 'analytics' ? analyticsExtra() : ''}</details>`;
    // Vídeos (one-videos.js): en español, «Míralo en acción» son los casos de uso de One de Bernat, incrustados
    // (si el módulo no tiene, queda el vídeo del producto). En el resto de idiomas, el vídeo del producto y,
    // aparte, tarjetas con los casos de uso en su idioma.
    const vid = videoHTML(key);
    const ovEs = lang === 'es' && window.oneVideosEmbedHTML ? oneVideosEmbedHTML(key, lang) : '';
    if (ovEs) h += `<div class="p-sec p-vid"><h3>${T2.watch}</h3>${ovEs}</div>`;
    else if (vid) h += `<div class="p-sec p-vid"><h3>${T2.watch}</h3>${vid.replace(/^<h3>.*?<\/h3>/, '')}</div>`;
    if (lang !== 'es' && window.oneVideosHTML) h += oneVideosHTML(key, lang);
    const one = (m.one ? chatHTML(m.one.slice(0, 1)) : '') + (m.oneNote && !m.one ? `<p class="note">${m.oneNote}</p>` : '') + (mx.try ? tryHTML(mx.try) : '');
    if (one) h += `<div class="p-sec"><h3>${U('withOne')}</h3>${one}</div>`;
    h += `<div class="p-why"><span class="eb">${T2.why}</span><p>${m.why}</p>` +
         (m.links && m.links.filter(shown).length ? `<span class="wk">${T2.works}</span>${chipsHTML(m.links)}` : '') + `</div>`;
    if (m.soon && m.soon.length) h += `<div class="p-sec p-next"><h3>${T2.next}</h3><ul>${m.soon.map(s => `<li><span>${T2.soonTag}</span>${s.replace(/\s*\((próximamente|coming soon|demnächst|em breve|bientôt|prossimamente|wkrótce)\)\.?/i, '')}</li>`).join('')}</ul><p class="disc-note">${U('soonNote')}</p></div>`;
    panelIn.innerHTML = h; panelIn.scrollTop = 0;
    panelIn.querySelector('#closeBtn').addEventListener('click', closePanel);
    panelIn.querySelectorAll('[data-go]').forEach(b => b.addEventListener('click', () => select(b.dataset.go)));
  };
  function legacy() {
    const keepTitles = [U('withOne'), U('video'), U('modules')];
    const kids = [...panelIn.children]; const keep = new Set(); let mode = 'keep';
    const lead = panelIn.querySelector('.lead'); if (lead) lead.classList.add('vp');
    const st = [...panelIn.children].find(n => n.classList.contains('stats'));
    if (lead && st) { st.classList.add('vp-stats'); lead.after(st); }
    kids.forEach(n => {
      if (n.classList.contains('p-head') || n.classList.contains('lead') || n.classList.contains('ptag') || n.classList.contains('vp-stats')) { keep.add(n); return; }
      if (n.tagName === 'H3') mode = keepTitles.includes(n.textContent) ? 'keep' : 'drop';
      if (mode === 'keep' && !n.classList.contains('why') && !n.classList.contains('try')) keep.add(n);
    });
    const extra = kids.filter(n => !keep.has(n));
    if (extra.length) { const d = document.createElement('details'); d.className = 'more'; d.innerHTML = `<summary>${L.more}</summary>`; extra.forEach(n => d.appendChild(n));
      // también arriba en áreas y One: tras la frase principal (y su cifra o etiqueta, si las hay)
      const anchor = panelIn.querySelector('.vp-stats') || panelIn.querySelector('.lead') || panelIn.querySelector('.ptag') || panelIn.querySelector('.p-head');
      anchor.after(d); }
  }
  // historias en una línea
  // por qué One: 3 tarjetas en vez de tabla
  const why = document.getElementById('porque');
  why.innerHTML = `<h2 class="st">${L.why}</h2><div class="whyc">${L.cards.map(([a, b]) => `<div><b>${a}</b><p>${b}</p></div>`).join('')}</div>`;
  ['conectores', 'planes', 'facts', 'viene'].forEach(id => { const s = document.getElementById(id); if (s) s.remove(); });
  why.insertAdjacentHTML('afterend', `<section id="explora"><h2 class="st">${L.explore}</h2><div class="expl">${L.links.map(([a, b, h]) => `<a href="${h}"><b>${a} →</b><span>${b}</span></a>`).join('')}</div></section>`);
  document.querySelectorAll('#secnav a').forEach(a => { if (!document.getElementById(a.dataset.sec)) a.remove(); });
  if (current) { render(current); }
})();



/* MOCK · «Tu empresa, conectada»: el valor de Factorial para cada perfil.
 * Cada paso es un problema de ese perfil, resuelto con productos de varias áreas a la vez.
 * Paso: { m: [módulos], es: [problema, cómo lo resuelve], en: [...], one: true si One hace el trabajo } */
(function () {
  const es = lang === 'es';
  const ROLES = [
   { es: {"n": "CFO", "v": "Todo el gasto de la empresa bajo tu control, y el cierre de mes en un solo lugar.", "o": [], "q": "¿Qué nos falta para cerrar octubre?", "a": "Revisa la nómina, los gastos pendientes de aprobar y las facturas de proveedores sin conciliar, y te dice qué falta y quién tiene que actuar."},
     en: {"n": "CFO", "v": "All company spend under your control, and month-end close in one place.", "o": [], "q": "What's still missing to close October?", "a": "Reviews payroll, expenses waiting for approval and unreconciled supplier invoices, and tells you what's missing and who needs to act."},
     story: {"who": ["Marta, CFO", "Marta, CFO"], "s": ["De planificar 2027 a cerrar el mes, sin una sola hoja de cálculo.", "From planning 2027 to closing the month, without a single spreadsheet."], "ch": [["Planifica", "Compra", "Gasta", "Cierra", "Decide"], ["Plan", "Buy", "Spend", "Close", "Decide"]]},
     steps: [
      {"m": ["plantilla", "fpa", "revision", "ats"], "c": 0, "w": ["Noviembre", "November"], "es": ["Su plan 2027, sin hoja en blanco", "One lo monta con los datos de la empresa: posiciones, bandas y coste. Cada posición aprobada se abre en el ATS."], "en": ["Her 2027 plan, no blank page", "One builds it from company data: roles, bands and cost. Every approved role opens in the ATS."], "p": ["Créame el plan de plantilla 2027", "Build my 2027 headcount plan"], "one": true},
      {"m": ["compras", "inventario", "software", "marketplace"], "c": 1, "w": ["Llegan las contrataciones", "The hires arrive"], "es": ["Sus portátiles: del PDF a compra aprobada", "El proveedor manda el presupuesto. One lo lee, crea la petición y la envía a aprobar."], "en": ["Their laptops: from PDF to approved purchase", "The supplier sends a quote. One reads it, creates the request and routes it for approval."], "one": true},
      {"m": ["gastos"], "c": 2, "w": ["Durante el mes", "During the month"], "es": ["El equipo sube los tickets. One hace el resto", "Los lee, revisa la política y aprueba. A Marta solo le llegan las excepciones."], "en": ["The team drops receipts. One does the rest", "It reads them, checks policy and approves. Only exceptions reach Marta."], "one": true},
      {"m": ["compensacion", "gastos", "compras", "marketplace"], "c": 3, "w": ["Día 30", "Day 30"], "es": ["El cierre, sin perseguir a nadie", "Esas nóminas, esos gastos y esas compras ya están juntos. One le dice qué falta y quién tiene que actuar."], "en": ["Month-end close, no chasing", "That payroll, those expenses and purchases are already together. One tells her what's missing and who acts."], "p": ["¿Qué me falta para cerrar octubre?", "What's missing to close October?"], "one": true},
      {"m": ["fpa", "compensacion", "gastos", "compras", "anticipo", "analiticas"], "c": 3, "w": ["Día 31", "Day 31"], "es": ["Con el mes cerrado, la caja prevista día a día", "One proyecta saldos bancarios, nóminas, gastos y facturas en una sola previsión."], "en": ["Month closed, cash forecast day by day", "One projects bank balances, payroll, expenses and invoices into one forecast."], "p": ["¿Llego bien de caja a fin de mes?", "Will cash last to month-end?"], "one": true},
      {"m": ["integraciones"], "c": 4, "w": ["Consejo de dirección", "Board meeting"], "es": ["Todos sus números, en una conversación", "Con los conectores, One suma Abacum, Stripe o Ramp a lo que ya sabe de Factorial."], "en": ["All her numbers, in one conversation", "With connectors, One adds Abacum, Stripe or Ramp to what it already knows from Factorial."], "one": true, "apps": ["Abacum", "Stripe", "Ramp"]} ] },
   { es: {"n": "RR. HH.", "v": "Del primer «sí» a la nómina, el recorrido de cada persona en un solo sitio.", "o": [], "q": "Llama a todos los candidatos que lleguen a la fase de cribado.", "a": "Una llamada en su idioma, avisada, con consentimiento y grabada. Te devuelve la transcripción, un informe y el siguiente paso sugerido. Decide una persona."},
     en: {"n": "HR", "v": "From the first “yes” to payroll, every person's journey in one place.", "o": [], "q": "Call every candidate who reaches the screening stage.", "a": "A call in their language, announced, with consent and recorded. Returns the transcript, a report and the suggested next step. A person decides."},
     story: {"who": ["Elena, RR. HH.", "Elena, HR"], "s": ["Un año contratando y cuidando a Laura, su nueva incorporación.", "A year hiring and looking after Laura, her new hire."], "ch": [["Contrata", "Incorpora", "Día a día", "Crece", "Paga"], ["Hire", "Onboard", "Day to day", "Grow", "Pay"]]},
     steps: [
      {"m": ["ats"], "c": 0, "w": ["Lunes", "Monday"], "es": ["One llama a cada candidato por ella", "En su idioma y con consentimiento, con transcripción, informe y semáforo. Elena solo habla con los mejores. Laura es una."], "en": ["One calls every candidate for her", "In their language, with consent, with transcript, report and traffic light. Elena only meets the best. Laura is one."], "one": true, "tag": true},
      {"m": ["firma", "documentos"], "c": 0, "w": ["Jueves", "Thursday"], "es": ["Laura firma desde el móvil", "Y el contrato se archiva solo en su perfil."], "en": ["Laura signs from her phone", "And the contract files itself in her profile."]},
      {"m": ["onoff"], "c": 1, "w": ["Antes del primer día", "Before day one"], "es": ["Una foto del proceso. One monta su onboarding", "Del diagrama a tareas para RR. HH., IT y su manager."], "en": ["A photo of the process. One builds her onboarding", "From the diagram to tasks for HR, IT and her manager."], "one": true},
      {"m": ["politicas", "tickets"], "c": 1, "w": ["Semana 1", "Week 1"], "es": ["Las dudas de Laura, respondidas", "One responde con la política, en su idioma. Lo que no sabe, va a ticket: la resolución automática te hace ir más rápido."], "en": ["Laura's questions, answered", "One answers from the policy, in her language. What it can't, becomes a ticket: automated ticketing resolution helps you work faster."], "one": true},
      {"m": ["formacion"], "c": 1, "w": ["Semana 2", "Week 2"], "es": ["Su primer curso, creado en un minuto", "One lo escribe, lo ilustra y le añade juegos."], "en": ["Her first course, built in a minute", "One writes it, illustrates it and adds games."], "p": ["Crea un curso de prevención de riesgos", "Create a workplace safety course"], "one": true},
      {"m": ["control"], "c": 2, "w": ["Cada día", "Every day"], "es": ["Laura ficha. Las horas extra se ven a tiempo", "One avisa de los riesgos de cumplimiento y aprueba los fichajes del mes de una vez."], "en": ["Laura clocks in. Overtime is caught early", "One flags compliance risks and approves the month's timesheets in one go."], "one": true},
      {"m": ["ausencias", "turnos"], "c": 2, "w": ["Mes 3", "Month 3"], "es": ["Laura se pone mala. Su turno, cubierto", "One valida la baja y rehace el turno según la demanda."], "en": ["Laura is off sick. Her shift is covered", "One validates the leave and rebuilds the shift from demand."], "one": true},
      {"m": ["engagement"], "c": 2, "w": ["Mes 4", "Month 4"], "es": ["La encuesta de clima, lista para dirección", "One resume todas las respuestas, también la de Laura, y las convierte en slides."], "en": ["The climate survey, ready for leadership", "One summarises every answer, Laura's included, and turns them into slides."], "one": true},
      {"m": ["desempeno"], "c": 3, "w": ["Mes 6", "Month 6"], "es": ["Su evaluación se convierte en objetivos", "One la resume, propone acciones y la sitúa en el nine-box."], "en": ["Her review turns into goals", "One summarises it, proposes actions and places her on the nine-box."], "one": true},
      {"m": ["desempeno", "revision", "compensacion"], "c": 3, "w": ["Mes 12", "Month 12"], "es": ["Su subida y su bonus, justificados", "One lee la política, confirma que es elegible y propone la subida dentro de banda y presupuesto."], "en": ["Her raise and bonus, justified", "One reads the policy, confirms she's eligible and proposes the raise within band and budget."], "one": true},
      {"m": ["compensacion"], "c": 4, "w": ["Cada mes", "Every month"], "es": ["Su nómina, sin teclear nada", "Sus horas, la baja, el cambio de turno y el bonus llegan validados."], "en": ["Her payroll, nothing retyped", "Her hours, the leave, the shift change and the bonus arrive validated."]},
      {"m": ["analiticas"], "c": 4, "w": ["Y cuando quiera", "And any time"], "es": ["Todo el año de Laura, medido", "Brecha salarial, rotación o time-to-fill: One crea el informe y explica la tendencia."], "en": ["Laura's whole year, measured", "Pay gap, turnover or time-to-fill: One builds the report and explains the trend."], "p": ["¿Cuál es nuestra brecha salarial de género?", "What's our gender pay gap?"], "one": true} ] },
   { es: {"n": "CEO", "v": "Toda tu empresa, a una pregunta de distancia.", "o": ["Sin pedir informes a nadie", "One crea y envía los informes", "Decisiones con datos vivos"], "q": "Créame un informe de rotación y engagement por departamento y envíamelo cada lunes.", "a": "Hecho: el informe cruza Core y Engagement, queda guardado y te llega cada lunes con la tendencia explicada.", "chart": true},
     en: {"n": "CEO", "v": "Your whole company, one question away.", "o": ["No more asking anyone for reports", "One builds and sends the reports", "Decisions on live data"], "q": "Build me a turnover and engagement report by department and send it every Monday.", "a": "Done: the report crosses Core and Engagement, it's saved and reaches you every Monday with the trend explained.", "chart": true},
     story: {"who": ["Carlos, CEO", "Carlos, CEO"], "s": ["Una semana dirigiendo la empresa sin pedir un solo informe.", "A week running the company without asking for a single report."], "ch": [["Pregunta", "Planifica", "Retiene", "Controla"], ["Ask", "Plan", "Keep", "Control"]]},
     steps: [
      {"m": ["analiticas"], "c": 0, "w": ["Lunes, 8:00", "Monday, 8:00"], "es": ["Toda su empresa, a una pregunta", "Plantilla, coste, rotación o gasto, sin pedírselo a nadie y con sus permisos."], "en": ["His whole company, one question away", "Headcount, cost, turnover or spend, without asking anyone, within his permissions."], "p": ["¿Cuánto nos cuesta cada departamento?", "What does each department cost us?"], "one": true, "all": true},
      {"m": ["analiticas"], "c": 0, "w": ["Lunes, 8:05", "Monday, 8:05"], "es": ["Y ese informe ya no lo vuelve a pedir", "One lo guarda como dashboard y se lo envía cada lunes, con la tendencia explicada."], "en": ["And he never asks for it again", "One saves it as a dashboard and sends it every Monday, trend explained."], "one": true, "all": true},
      {"m": ["plantilla", "fpa", "ats"], "c": 1, "w": ["Martes", "Tuesday"], "es": ["2027, planificado antes de la reunión", "One prepara el plan. RR. HH. y Finanzas lo aprueban sobre los mismos números."], "en": ["2027, planned before the meeting", "One drafts the plan. HR and Finance approve it on the same numbers."], "one": true},
      {"m": ["desempeno", "engagement", "analiticas"], "c": 2, "w": ["Miércoles", "Wednesday"], "es": ["El plan muestra un riesgo: a quién puede perder", "One cruza desempeño, pulso y rotación y le dice dónde está."], "en": ["The plan shows a risk: who he might lose", "One crosses performance, pulse and turnover and shows him where."], "one": true},
      {"m": ["fpa", "compensacion", "gastos", "compras"], "c": 3, "w": ["Jueves", "Thursday"], "es": ["Antes de firmar, la caja prevista al día", "Nóminas, gastos y facturas en una sola previsión."], "en": ["Before signing off, cash forecast to the day", "Payroll, expenses and invoices in one forecast."], "one": true},
      {"m": ["politicas", "canal", "control"], "c": 3, "w": ["Viernes", "Friday"], "es": ["Y duerme tranquilo: cumple en cada país", "Registro de jornada, canal de denuncias y políticas, iguales en toda la empresa."], "en": ["And sleeps well: compliant in every country", "Time records, whistleblowing channel and policies, the same everywhere."]} ] },
   { es: {"n": "IT", "v": "De la primera llegada a la última salida, cada equipo, app y acceso siguen a la persona.", "o": ["Listo y seguro desde el primer día", "Ni cuentas huérfanas ni licencias de más", "Auditorías con los datos que ya tienes"], "q": "Hola One, se me ha roto el portátil. Necesito uno nuevo.", "a": "Crea el ticket, ve que no hay stock, encuentra uno que cumple la política y prepara la compra para aprobar."},
     en: {"n": "IT", "v": "From the first arrival to the last exit, every device, app and access follows the person.", "o": ["Ready and secure from day one", "No orphan accounts, no extra licences", "Audits with the data you already have"], "q": "Hey One, my laptop just broke. I need a new one.", "a": "Creates the ticket, sees there's no stock, finds one that meets the policy and prepares the purchase to approve."},
     story: {"who": ["Iván, IT", "Ivan, IT"], "s": ["El portátil de Laura, del primer día al último.", "Laura's laptop, from her first day to her last."], "ch": [["Antes", "Día 1", "Día a día", "Salida", "Auditoría"], ["Before", "Day 1", "Day to day", "Exit", "Audit"]]},
     steps: [
      {"m": ["plantilla", "inventario"], "c": 0, "w": ["Posición aprobada", "Position approved"], "es": ["Su portátil, presupuestado con la posición", "La contratación aprobada ya lleva su presupuesto de equipo y avisa a IT."], "en": ["Her laptop, budgeted with the position", "The approved hire already carries a device budget and tells IT."]},
      {"m": ["onoff", "inventario", "marketplace", "compras"], "c": 0, "w": ["2 semanas antes", "2 weeks before"], "es": ["El kit de su rol, del stock o del marketplace", "Si no hay stock, se compra o se alquila con la aprobación de siempre."], "en": ["Her role's kit, from stock or the marketplace", "If there's none in stock, it's bought or rented through the usual approval."]},
      {"m": ["mdm", "seguridad"], "c": 1, "w": ["Día 1", "Day 1"], "es": ["Abre la caja: ya está protegido", "Zero-touch, con cifrado y antivirus aplicados desde el primer encendido."], "en": ["She opens the box: it's already secure", "Zero-touch, with encryption and antivirus applied from first boot."]},
      {"m": ["software", "formacion"], "c": 1, "w": ["Día 1", "Day 1"], "es": ["Sus apps por rol, y la formación de seguridad", "Los accesos se conceden solos y el curso de concienciación ya está asignado."], "en": ["Her apps by role, and security training", "Access is granted automatically and the awareness course is already assigned."]},
      {"m": ["tickets"], "c": 2, "w": ["Cada mañana", "Every morning"], "es": ["Tickets priorizados antes de que Iván llegue", "Una rutina de One fija la prioridad por impacto y asigna a quien toca."], "en": ["Tickets triaged before Ivan logs in", "A One routine sets priority by impact and assigns the right person."], "p": ["Cada día a las 8:00, prioriza los tickets nuevos", "Every day at 8:00, triage the new tickets"], "one": true},
      {"m": ["tickets", "seguridad", "mdm", "cumplimiento"], "c": 2, "w": ["Laura pierde el portátil", "Laura loses her laptop"], "es": ["Datos protegidos en minutos", "One registra el incidente; con una aprobación se revisa la actividad, se bloquea y se borra. Queda documentado."], "en": ["Data protected in minutes", "One logs the incident; one approval checks activity, locks and wipes it. It's all documented."], "p": ["Me he dejado el portátil en el tren", "I left my laptop on the train"], "one": true},
      {"m": ["software", "gastos", "compras"], "c": 2, "w": ["Renovación", "Renewal"], "es": ["Licencias sin uso y shadow IT, al descubierto", "One cruza licencias, personas activas y el SaaS pagado con tarjetas de empleado, y recupera asientos en un clic."], "en": ["Idle licences and shadow IT, in the open", "One crosses licences, active people and SaaS paid on employee cards, and reclaims seats in one click."], "one": true},
      {"m": ["onoff", "software", "mdm", "inventario"], "c": 3, "w": ["Si Laura se va", "If Laura leaves"], "es": ["Una sola aprobación lo cierra todo", "Con la fecha de baja, One prepara la salida: accesos retirados a su hora y equipo bloqueado y recogido."], "en": ["One approval closes everything", "Once the end date is set, One prepares the exit: access removed on time, device locked and collected."], "one": true},
      {"m": ["fpa", "cumplimiento"], "c": 3, "w": ["El mes siguiente", "The month after"], "es": ["Ni una licencia de más, y la prueba guardada", "Sus licencias salen de la previsión y queda registrado que el acceso se retiró a tiempo."], "en": ["No seat left paid for, and the proof kept", "Her licences drop out of the forecast, and the on-time access removal is logged."]},
      {"m": ["cumplimiento", "politicas", "firma", "formacion"], "c": 4, "w": ["Llega la auditoría", "Audit time"], "es": ["ISO 27001 con los datos que ya tiene", "One reúne políticas firmadas, formación, cifrado, accesos e incidentes en el paquete para el auditor."], "en": ["ISO 27001 with the data he already has", "One gathers signed policies, training, encryption, access and incidents into the auditor's pack."], "p": ["Prepara las pruebas para la auditoría ISO 27001", "Prepare the evidence for the ISO 27001 audit"], "one": true} ] },
   { es: {"n": "Manager", "v": "De pedir una posición a defender su subida, todo tu equipo en un sitio.", "o": [], "q": "Prepara mi 1:1 de mañana con Laura.", "a": "Reúne sus objetivos, su última evaluación, el pulso reciente y lo que hablasteis en los 1:1 anteriores."},
     en: {"n": "Manager", "v": "From requesting a position to defending a raise, your whole team in one place.", "o": [], "q": "Prepare tomorrow's 1:1 with Laura.", "a": "Gathers her goals, latest review, recent pulse and what you discussed in previous 1:1s."},
     story: {"who": ["Javi, manager de Laura", "Javi, Laura's manager"], "s": ["De pedir la posición a defender la subida de Laura.", "From requesting the role to backing Laura's raise."], "ch": [["Contrata", "Dirige", "Hace crecer"], ["Hire", "Lead", "Grow"]]},
     steps: [
      {"m": ["plantilla"], "c": 0, "w": ["Enero", "January"], "es": ["Pide la contratación que necesita", "Con banda y fecha, directa a RR. HH. y Finanzas."], "en": ["He requests the hire he needs", "With band and date, straight to HR and Finance."]},
      {"m": ["ats"], "c": 0, "w": ["Entrevistas", "Interviews"], "es": ["One resume todas las entrevistas. Laura destaca", "Lee las transcripciones de todos los candidatos y le dice quién encaja."], "en": ["One summarises every interview. Laura stands out", "It reads every candidate's transcript and tells him who fits."], "p": ["¿Quién comunicó mejor en las entrevistas?", "Who communicated best in the interviews?"], "one": true},
      {"m": ["onoff"], "c": 0, "w": ["Día 1 de Laura", "Laura's day 1"], "es": ["Sin escribir un solo email", "Todo listo para Laura."], "en": ["Without writing a single email", "Everything ready for Laura."]},
      {"m": ["ausencias", "turnos"], "c": 1, "w": ["Laura se pone mala", "Laura is off sick"], "es": ["Su equipo, siempre cubierto", "Aprueba con el calendario delante y One rehace los turnos."], "en": ["His team, always covered", "He approves with the calendar in view and One rebuilds the shifts."], "one": true},
      {"m": ["gastos"], "c": 1, "w": ["Fin de mes", "Month-end"], "es": ["Aprueba solo las excepciones", "One revisa el resto contra la política."], "en": ["He approves only the exceptions", "One checks the rest against policy."], "one": true},
      {"m": ["engagement", "desempeno"], "c": 2, "w": ["Mañana, 9:00", "Tomorrow, 9:00"], "es": ["Su 1:1 con Laura, en segundos", "Objetivos, feedback y pulso, en una sola vista."], "en": ["His 1:1 with Laura, in seconds", "Goals, feedback and pulse, in one view."], "p": ["Prepara mi 1:1 de mañana con Laura", "Prepare tomorrow's 1:1 with Laura"], "one": true},
      {"m": ["revision"], "c": 2, "w": ["Revisión salarial", "Salary review"], "es": ["La subida de Laura, respaldada por la política", "One la propone y la revisa contra el presupuesto."], "en": ["Laura's raise, backed by policy", "One proposes it and checks it against the budget."], "one": true},
      {"m": ["analiticas"], "c": 2, "w": ["Cada lunes", "Every Monday"], "es": ["Y sabe cómo va su equipo", "Ausencias, horas, objetivos y pulso. Lo hace One."], "en": ["And he knows how his team is doing", "Time off, hours, goals and pulse. One builds it."], "one": true} ] },
   { es: {"n": "Empleado", "v": "Una app para todo, del primer día al último.", "o": [], "q": "¿Cuántos días de vacaciones me quedan?", "a": "Responde con su saldo y la política que le aplica. Cada persona solo ve lo suyo."},
     en: {"n": "Employee", "v": "One app for everything, from the first day to the last.", "o": [], "q": "How many vacation days do I have left?", "a": "Answers with their balance and the policy that applies. Everyone only sees their own."},
     story: {"who": ["Laura, nueva incorporación", "Laura, new hire"], "s": ["Su primer año en la empresa, desde una sola app.", "Her first year at the company, from one app."], "ch": [["Llega", "Aprende", "Día a día", "Crece"], ["Arrive", "Learn", "Day to day", "Grow"]]},
     steps: [
      {"m": ["firma", "onoff", "documentos"], "c": 0, "w": ["Antes del día 1", "Before day 1"], "es": ["Firma desde el sofá y llega con todo listo", "Oferta, documentos y equipo preparados."], "en": ["She signs from the sofa and arrives ready", "Offer, documents and equipment ready."]},
      {"m": ["formacion"], "c": 1, "w": ["Semana 1", "Week 1"], "es": ["Su formación parece un juego", "Visual, interactiva y en el móvil."], "en": ["Her training feels like a game", "Visual, interactive and on her phone."]},
      {"m": ["portal", "politicas", "tickets", "comunicaciones"], "c": 1, "w": ["Semana 2", "Week 2"], "es": ["Pregunta lo que sea, incluso por WhatsApp", "One responde con la política. Si no puede, abre el ticket: la resolución automática lo resuelve más rápido."], "en": ["She asks anything, even on WhatsApp", "One answers from the policy. If it can't, it opens the ticket: automated ticketing resolution solves it faster."], "p": ["¿Cuántos días de vacaciones me quedan?", "How many vacation days do I have left?"], "one": true},
      {"m": ["control", "ausencias"], "c": 2, "w": ["Cada día", "Every day"], "es": ["Fichar o pedir vacaciones: dos toques", "Con su saldo siempre a la vista."], "en": ["Clock in or book leave: two taps", "With her balance always in view."]},
      {"m": ["gastos"], "c": 2, "w": ["Cena con un cliente", "Client dinner"], "es": ["Foto al ticket. Hecho", "One lo rellena y lo envía."], "en": ["Snap the receipt. Done", "One fills it in and submits it."], "one": true},
      {"m": ["tickets", "inventario"], "c": 2, "w": ["Mes 5", "Month 5"], "es": ["Se le rompe el portátil. Se lo dice a One", "Abre el ticket, mira el stock y prepara el cambio."], "en": ["Her laptop breaks. She tells One", "It opens the ticket, checks stock and prepares the replacement."], "one": true},
      {"m": ["desempeno", "engagement"], "c": 3, "w": ["Mes 6", "Month 6"], "es": ["Su primer kudos, compartido en LinkedIn", "Objetivos claros, feedback todo el año y reconocimiento que se ve."], "en": ["Her first kudos, shared on LinkedIn", "Clear goals, feedback all year and recognition people can see."]},
      {"m": ["compensacion", "documentos"], "c": 3, "w": ["Día de cobro", "Payday"], "es": ["Cobra bien, a la primera", "La nómina llega validada a la app."], "en": ["Paid right, first time", "The payslip arrives validated in the app."]} ] }
  ];
  // en DE/FR/IT/PT/PT-BR/PL, los huecos 'en' de cada perfil y paso se rellenan con ese idioma
  if (MX) ROLES.forEach((r, i) => { const x = MX.roles[i];
    r.en = { ...r.en, n: x.n, v: x.v, o: x.o, q: x.q, a: x.a };
    r.story.who[1] = x.who; r.story.s[1] = x.s; r.story.ch[1] = x.ch;
    r.steps.forEach((s, k) => { const y = x.steps[k]; s.w[1] = y.w; s.en = [y.t, y.d]; if (s.p) s.p[1] = y.p; }); });
  const fill = (t, o) => t.replace(/\{(\w)\}/g, (_, k) => o[k]);
  const L = es ? { title: 'Tu empresa, conectada', sub: '¿Qué gana cada persona de tu empresa con Factorial? Elige un perfil: cada problema se resuelve con productos de varias áreas, trabajando juntos.', journey: 'Sus problemas, resueltos', ask: 'Pregúntale a One', play: 'Ver en el mapa', step: (i, n) => `${i} de ${n}`, areas: n => `${n} áreas conectadas`, follow: 'Una historia en Factorial' }
                 : { title: 'Your company, connected', sub: 'What does each person in your company get from Factorial? Pick a profile: every problem is solved by products from several areas, working together.', journey: 'Their problems, solved', ask: 'Ask One', play: 'See it on the map', step: (i, n) => `${i} of ${n}`, areas: n => `${n} areas connected`, follow: 'A story in Factorial' };
  const X = es ? { seeSteps: n => `Ver los ${n} pasos`, aiTag: 'Llamadas con IA', every: 'Todos los productos', sample: 'Ejemplo con datos ficticios', seeAs: 'Míralo como', pause: 'Pausa', play: 'Reproducir', next: 'Siguiente' }
    : { seeSteps: n => `See the ${n} steps`, aiTag: 'AI calls', every: 'Every product', sample: 'Example with fictional data', seeAs: 'See it as', pause: 'Pause', play: 'Play', next: 'Next' };
  if (MX) { const u = MX.ui;
    Object.assign(L, { title: u.title, sub: u.csub, journey: u.journey, ask: u.ask, play: u.play, step: (i, n) => fill(u.stepOf, { i, n }), areas: n => fill(u.areas, { n }), follow: u.follow });
    Object.assign(X, { seeSteps: n => fill(u.seeSteps, { n }), aiTag: u.aiTag, every: u.every, sample: u.sample, seeAs: u.seeAs, pause: u.pause, play: u.playBtn, next: u.nextBtn }); }
  const tx = r => es ? r.es : r.en;
  const so = r => ({ who: r.story.who[es ? 0 : 1], s: r.story.s[es ? 0 : 1], ch: r.story.ch[es ? 0 : 1] });
  const stepsOf = r => r.steps.map(s => ({ ...s, m: s.all ? Object.keys(M).filter(shown) : s.m.filter(shown) })).filter(s => s.m.length);

  const sec = document.getElementById('mas');
  sec.innerHTML = `<h2 class="st">${L.title}</h2><p class="sl" style="display:block">${L.sub}</p>
    <div class="roles" role="tablist">${ROLES.map((r, i) => `<button type="button" role="tab" data-r="${i}" aria-selected="${i === 0}">${tx(r).n}</button>`).join('')}</div>
    <div class="rview" id="rview"></div>`;
  const view = document.getElementById('rview');
  let cur = 0;
  function show(i) {
    cur = i; const r = ROLES[i], t = tx(r), st = stepsOf(r);
    const hubs = new Set(st.flatMap(s => s.m.map(id => M[id].hub)));
    sec.querySelectorAll('.roles button').forEach(b => b.setAttribute('aria-selected', String(+b.dataset.r === i)));
    view.innerHTML = `<div class="rv-l"><p class="rv-n">${so(r).who} · ${L.areas(hubs.size)}</p><h3>${t.v}</h3><p class="rv-story">${so(r).s}</p><ul class="rv-o">${t.o.map(x => `<li>${x}</li>`).join('')}</ul>
      <button class="rv-play big" type="button">▶ ${L.play}</button><details class="rv-steps"><summary>${X.seeSteps(st.length)}</summary><ol class="rv-p">${st.map((s, x) => { const [q, a] = es ? s.es : s.en; return `${x === 0 || st[x - 1].c !== s.c ? `<li class="chh">${so(r).ch[s.c]}</li>` : ''}<li><i class="sc-w">${s.w[es ? 0 : 1]}</i><b>${q}${s.tag ? ` <span class="aitag">${X.aiTag}</span>` : ''}</b>${s.p ? `<i class="sp">“${es ? s.p[0] : s.p[1]}”</i>` : ''}<span>${a}</span><div class="rv-m">${s.all ? `<span class="allchip">${X.every} · ${Object.keys(M).filter(shown).length}</span>` : s.m.map(id => `<button type="button" data-go="${id}"><em>${th(M[id].hub).name}</em>${tm(id).name}</button>`).join('')}${(s.apps || []).map(n => `<a class="app" href="connectors/index.html${location.search}"><em>MCP</em>${n}</a>`).join('')}</div></li>`; }).join('')}</ol></details></div>
      <div class="rv-r"><div class="rv-chat"><p class="rv-lbl">${L.ask}</p><div class="msg u">${t.q}</div><div class="msg o"><div class="who">One</div>${t.a}${t.chart ? (() => { const x = LONG[lang].ax.c1; return `<div class="rv-chart"><p class="ct">${x[0]}</p>${bars([14,9,6,11,4], x[2], [12,31,40,22,46])}<p class="sample">${X.sample}</p></div>`; })() : ''}</div></div>
      </div>`;
  }
  show(0);
  sec.querySelector('.roles').addEventListener('click', e => { const b = e.target.closest('button'); if (b) show(+b.dataset.r); });
  view.addEventListener('click', e => { const g = e.target.closest('[data-go]'); if (g) select(g.dataset.go); if (e.target.closest('.rv-play')) play(cur); });

  // recorrido sobre el mapa: en cada paso se encienden juntos los productos que lo resuelven
  let lit = null, timer = null;
  const cap = document.createElement('div'); cap.className = 'storycap'; cap.hidden = true; stage.appendChild(cap);
  const origDraw = drawWires;
  drawWires = function () {
    origDraw(); if (!lit) return;
    let d = ''; const hs = new Set();
    lit.forEach(id => { const h = M[id].hub, a = pillAnchor(id); const hb = rel(stage.querySelector(`[data-hub-btn="${h}"]`)); const left = HUBS[h].side === 'left'; hs.add(h); d += `<path class="flow" d="${curve(a.x, a.y, left ? hb.l : hb.r, hb.cy)}"/>`; });
    const one = rel($('#oneBtn')); const R = rel($('#oneBtn .disc')).w / 2;
    hs.forEach(h => { const hb = rel(stage.querySelector(`[data-hub-btn="${h}"]`)); const left = HUBS[h].side === 'left'; const ex = left ? hb.r : hb.l, ang = Math.atan2(hb.cy - one.cy, ex - one.cx); d += `<path class="flow" d="${curve(ex, hb.cy, one.cx + Math.cos(ang) * R, one.cy + Math.sin(ang) * R)}"/>`; });
    wires.innerHTML += d;
  };
  function clear() { stage.querySelectorAll('.pill.active,.pill.linked,[data-hub-btn].linked,[data-hub-btn].active').forEach(n => n.classList.remove('active', 'linked')); }
  let paused = false, go = null, k = 0;
  function stop() { clearTimeout(timer); lit = null; go = null; paused = false; cap.hidden = true; clear(); mark(null); drawWires(); document.querySelectorAll('.heroroles button.on').forEach(b => b.classList.remove('on')); }
  function play(i, stay) {
    if (current) closePanel(); stop();
    const r = ROLES[i], t = tx(r), st = stepsOf(r), y = so(r);
    if (!stay) hero.scrollIntoView({ behavior: 'smooth' }); stage.classList.add('focus');
    k = -1; const seen = new Set();
    const ctrls = () => `<span class="sc-ctl"><button type="button" data-c="pause" aria-label="${paused ? X.play : X.pause}">${paused ? '▶' : '❚❚'}</button><button type="button" data-c="next" aria-label="${X.next}">⏭</button></span>`;
    const dots = () => `<span class="sc-dots">${st.map((_, x) => `<i class="${x < k ? 'd' : x === k ? 'n' : ''}"></i>`).join('')}</span>`;
    const crumbs = c => `<span class="sc-ch">${y.ch.map((n, x) => `<em class="${x < c ? 'd' : x === c ? 'n' : ''}">${x < c ? '✓ ' : ''}${n}</em>`).join('<u>›</u>')}</span>`;
    const light = (cur) => { clear(); seen.forEach(id => stage.querySelector(`.pill[data-id="${id}"]`)?.classList.add('linked'));
      cur.forEach(id => stage.querySelector(`.pill[data-id="${id}"]`)?.classList.add('active'));
      new Set([...seen, ...cur].map(id => M[id].hub)).forEach(h => stage.querySelector(`[data-hub-btn="${h}"]`)?.classList.add('linked')); };
    const next = () => {
      clearTimeout(timer);
      if (k === -1) { // portada: quién es y qué historia vamos a ver
        cap.hidden = false; cap.innerHTML = `<small>${L.follow}</small><b>${y.who}</b><span>${y.s}</span>${crumbs(-1)}`; k = 0; timer = setTimeout(next, 2200); return; }
      if (k >= st.length) { lit = [...seen]; light([]); cap.innerHTML = `<small>${y.who}</small><b>${t.v}</b>${crumbs(y.ch.length)}`; drawWires(); timer = setTimeout(stop, 3600); go = null; return; }
      const s = st[k], [q, a] = es ? s.es : s.en, w = s.w[es ? 0 : 1], pq = s.p ? s.p[es ? 0 : 1] : '';
      lit = s.m; light(s.m); s.m.forEach(id => seen.add(id));
      cap.innerHTML = `<div class="sc-top"><small>${y.who}</small>${ctrls()}</div>${crumbs(s.c)}<i class="sc-w">${w}</i>${pq ? `<i class="sp">“${pq}”</i>` : ''}<b>${q}</b><span>${a}</span>${dots()}`;
      drawWires(); k++; if (!paused) timer = setTimeout(next, 3000);
    };
    go = next;
    setTimeout(next, 400);
  }
  cap.addEventListener('click', e => { const b = e.target.closest('[data-c]'); if (!b || !go) return;
    if (b.dataset.c === 'next') { paused = false; go(); }
    else { paused = !paused; if (paused) { clearTimeout(timer); b.textContent = '▶'; } else go(); } });
  document.addEventListener('click', e => { if (lit && !e.target.closest('.rv-play') && !e.target.closest('.heroroles') && !e.target.closest('.storycap')) stop(); }, true);
  const hr = document.createElement('div'); hr.className = 'heroroles';
  hr.innerHTML = `<span>${X.seeAs}</span>` + ROLES.map((r, i) => `<button type="button" data-hr="${i}">▶ ${tx(r).n}</button>`).join('');
  document.querySelector('.proof').after(hr);
  hr.addEventListener('click', e => { const b = e.target.closest('button'); if (!b) return; show(+b.dataset.hr); play(+b.dataset.hr, true); hr.querySelectorAll('button').forEach(x => x.classList.toggle('on', x === b)); });
})();

/* MOCK · banner: Factorial entero, no solo One; más corto y más pequeño */
(function () {
  const es = lang === 'es';
  const B = es ? { e: 'Factorial · RR. HH., Finanzas e IT', h: 'Toda tu empresa, en un solo sistema', s: 'RR. HH., Finanzas e IT sobre el mismo dato, con One, el agente de IA que trabaja en todos ellos.', p: ['Un solo dato, de principio a fin', 'IA con tus permisos', 'Datos en la UE'] }
               : { e: 'Factorial · HR, Finance and IT', h: 'Your whole company, in one system', s: 'HR, Finance and IT on the same data, with One, the AI agent that works across all of them.', p: ['One source of data, end to end', 'AI with your permissions', 'Data in the EU'] };
  if (MX) Object.assign(B, { e: MX.ui.bannerE, h: MX.ui.bannerH, s: MX.ui.bannerS, p: MX.ui.bannerP });
  const apply = () => {
    document.querySelector('[data-i18n="allin"]').textContent = B.e;
    document.querySelector('h1').textContent = B.h;
    document.querySelector('.sub').textContent = B.s;
    const pr = document.querySelector('.proof'); if (pr) pr.innerHTML = B.p.map(x => `<span>${x}</span>`).join('');
  };
  apply();
})();
