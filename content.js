/* One Map · contenido (todos los idiomas).
 * Lo usan la página del mapa (index.html) y el creador de pitch (deck/).
 * Para cambiar un texto, edítalo aquí; la lógica de la página está en index.html. */

const HUBS = {
  talento: { name: "Talento", side: "left", lead: "Del puesto que planificas a la subida que defiendes. Cada decisión de talento parte de la anterior, no de cero.", one: "Cuantos más productos de talento tienes, más contexto tiene One: lee evaluaciones, candidaturas, cursos y encuestas a la vez." },
  tiempo: { name: "Tiempo", side: "left", lead: "Fichajes, turnos y ausencias sobre el mismo calendario, y cada hora lista para nómina y proyectos.", one: "One cubre turnos, responde saldos y vigila incidencias de fichaje mientras aún son pequeñas." },
  finanzas: { name: "Finanzas", side: "left", lead: "RR. HH. y Finanzas trabajan con los mismos números: plantilla, gastos, compras, proyectos y presupuesto.", one: "One aprueba lo que cumple la política y te deja solo las excepciones." },
  core: { name: "Core HR", side: "right", lead: "La base de todo: personas, documentos, políticas y la app de cada empleado. Lo que se captura aquí lo usan todos los módulos.", one: "One conoce tus políticas, responde con la fuente y resuelve solicitudes antes de que lleguen a una persona." },
  it: { name: "IT", side: "right", lead: "Dispositivos, software e inventario ligados a la persona que los usa, desde el primer día hasta el último.", one: "One investiga el ticket, comprueba el stock y prepara la compra para que una persona solo tenga que aprobar." },
  nomina: { name: "Nómina", side: "right", lead: "Cada cambio que afecta al sueldo llega a nómina validado, desde el fichaje hasta la subida salarial.", one: "One detecta variables pendientes y lo que no cuadra antes de que se calcule la nómina." }
};

const ORDER = {
  talento: ["desempeno", "formacion", "engagement", "comunidades", "ats", "canal"],
  tiempo: ["control", "turnos", "ausencias"],
  finanzas: ["plantilla", "proyectos", "fpa", "gastos", "compras", "revision"],
  core: ["politicas", "portal", "comunicaciones", "onoff", "documentos", "firma", "analiticas", "tickets"],
  it: ["mdm", "seguridad", "inventario", "software", "marketplace", "cumplimiento"],
  nomina: ["beneficios", "compensacion", "integraciones", "anticipo"]
};

const M = {
  desempeno: {
    name: "Desempeño", hub: "talento",
    lead: "Evaluaciones, objetivos y feedback durante todo el año, no solo en la revisión anual.",
    value: [
      "Evaluaciones 180° y 360° con ciclos, recordatorios y acuerdos descargables automatizados.",
      "Objetivos y OKRs individuales y de equipo, con feedback continuo para llegar a la evaluación con datos.",
      "9-box y analíticas de talento para ver quién tiene más potencial y quién necesita apoyo.",
      "Planes de incentivos: define normas de pago ligadas a objetivos y resultados; Factorial calcula cada bonus y lo paga automáticamente en nómina."
    ],
    one: [{ q: "¿Quién de mi equipo muestra señales de riesgo?", a: "Analiza autoevaluaciones y feedback, resume cada caso y explica por qué lo marca." }],
    why: "Cada resultado alimenta la formación que asignas y la subida que propones. Selección usa la última evaluación para medir qué fuentes traen a la gente que se queda y rinde.",
    links: ["compensacion", "formacion", "revision", "engagement", "ats", "analiticas"],
    soon: ["Objetivos conectados vía MCP: Factorial actualiza los objetivos con datos de tus otras herramientas."]
  },
  formacion: {
    name: "Formación y LMS", hub: "talento",
    lead: "Formaciones registradas y cursos interactivos dentro de Factorial, ligados al desempeño.",
    value: [
      "Catálogo, sesiones y asistencia; formación obligatoria con trazabilidad lista para auditoría.",
      "LMS: cursos con vídeos, cuestionarios y tests, progreso automático y certificados al terminar.",
      "Coste salarial de cada formación calculado automáticamente."
    ],
    one: [{ q: "Crea un curso de onboarding para el equipo de tienda.", a: "Un curso estructurado con módulos y cuestionarios, en minutos. Tú lo revisas y lo publicas." }],
    why: "Desde la evaluación, en un clic: asignas la formación que cierra cada carencia de competencias y mides su impacto en el siguiente ciclo.",
    links: ["desempeno", "onoff", "compensacion", "analiticas"],
    stat: { n: "94%", t: "de las personas se quedaría más tiempo en una empresa que invierte en su desarrollo (LinkedIn Workplace Learning Report, 2023)" }
  },
  engagement: {
    name: "Engagement", hub: "talento",
    lead: "Escucha a tu equipo sin enviar otro formulario: pulso diario, encuestas, eNPS y 1:1 con IA.",
    value: [
      "Pulso de equipo al fichar: check-ins sin fatiga de encuestas y alertas al manager adecuado.",
      "Encuestas y eNPS automatizados en el onboarding, en las salidas y en cada hito.",
      "Reuniones 1:1 con IA: One prepara cada 1:1 con objetivos, desempeño y estado de ánimo."
    ],
    one: [{ q: "Prepárame el 1:1 con Laura de mañana.", a: "Reúne sus objetivos, la última evaluación, el pulso reciente y lo hablado en 1:1 anteriores." }],
    why: "Un buen desempeño no siempre significa compromiso. Con el pulso ligado al fichaje y el contexto de desempeño, One ve el cuadro completo de cada persona.",
    links: ["control", "desempeno", "onoff", "analiticas"],
    stat: { n: "40–60%", t: "menos administración manual con evaluaciones, 1:1 y encuestas automatizadas" }
  },
  comunidades: {
    name: "Comunidades", hub: "talento",
    lead: "Espacios donde tu gente se encuentra, comparte y se reconoce, más allá del organigrama.",
    value: [
      "Comunidades por interés, centro, proyecto o equipo, abiertas o por invitación.",
      "Publicaciones, reconocimientos y celebraciones de hitos desde la app.",
      "Une a quien trabaja en oficina, en remoto o en tienda en un mismo espacio."
    ],
    one: [{ q: "¿Qué comunidades me recomiendas ahora que me he incorporado?", a: "Te sugiere las de tu equipo, tu centro y tus intereses, según tu perfil." }],
    why: "Las comunidades se crean sobre los mismos datos de equipos, centros y personas, así que cada nueva incorporación encuentra su sitio desde el primer día.",
    links: ["engagement", "comunicaciones", "portal", "onoff"],
    check: true
  },
  comunicaciones: {
    name: "Comunicaciones", hub: "core",
    lead: "Comunicados para toda la empresa o para equipos concretos, donde tu gente ya trabaja cada día.",
    value: [
      "Publica para toda la empresa o para equipos y centros concretos.",
      "Llega desde la app a todo el equipo, también a quien no se sienta frente a un ordenador.",
      "Los comunicados conviven con las políticas y documentos a los que hacen referencia."
    ],
    one: [{ q: "Redacta el comunicado del nuevo horario de verano en español e inglés.", a: "Lo redacta a partir de tu política de horario y lo traduce, listo para revisar." }],
    why: "La segmentación sale de los mismos datos de equipos, centros y roles que usa el resto de Factorial.",
    links: ["portal", "politicas", "engagement", "comunidades"],
    check: true
  },
  ats: {
    name: "ATS y selección", hub: "talento",
    lead: "Un ATS que planifica, criba y decide contigo, desde la posición aprobada hasta la oferta firmada.",
    value: [
      "Hiring Plan: cada posición aprobada en la planificación de plantilla llega como vacante con responsable, plazo y estado.",
      "Informe de IA por candidato y llamadas de IA en su idioma, con transcripción y resultado verde, ámbar o rojo.",
      "Jobs ilimitados, permisos por fase, entrevistas por vídeo con One y analíticas de permanencia a un año."
    ],
    one: [
      { q: "Llama a cada candidato que llegue a la fase de screening.", a: "Llamada en su idioma, comunicada, con consentimiento y grabada. Devuelve transcripción, informe y siguiente paso sugerido. Una persona decide." },
      { q: "Crea la oferta para un Senior Product Designer en Barcelona.", a: "Redacta el anuncio desde la conversación y lo publica en tu página de empleo y en más de 250 portales." }
    ],
    why: "La vacante nace aprobada y con presupuesto; quien firma entra con todos sus datos, sin volver a teclear nada; y la analítica cruza la fuente de contratación con la evaluación de desempeño.",
    links: ["plantilla", "onoff", "firma", "desempeno", "analiticas"],
    stats: [{ n: "70%", t: "menos time-to-hire con una primera criba con IA" }, { n: "+25%", t: "de crecimiento de plantilla con el mismo equipo de selección" }],
    soon: ["Candidatos sugeridos del talent pool (próximamente).", "WhatsApp en Recruitment y Company Pages por sociedad (próximamente).", "Cultural assessment (próximamente)."]
  },
  canal: {
    name: "Canal seguro", hub: "talento",
    lead: "Un canal para que cualquiera pueda informar de una irregularidad de forma confidencial, también anónima.",
    value: [
      "Comunicaciones confidenciales, con opción de anonimato.",
      "Seguimiento de cada caso con acceso restringido a quien lo gestiona.",
      "Ayuda a cumplir la normativa de protección del informante."
    ],
    oneNote: "One sigue exactamente los permisos de Factorial: los casos solo los ven las personas que los gestionan, nadie más.",
    why: "Vive en la misma app que el resto de herramientas del empleado, así que nadie tiene que buscar dónde informar.",
    links: ["politicas", "documentos", "portal"],
    check: true
  },
  control: {
    name: "Control horario", hub: "tiempo",
    lead: "Fichajes desde el móvil o el ordenador, con el registro de jornada al día.",
    value: [
      "Fichaje desde la app o la web, con horas extra y saldos calculados.",
      "Incidencias visibles para el manager antes de que lleguen a nómina.",
      "Las horas imputadas a proyectos alimentan el coste real de cada proyecto."
    ],
    one: [{ q: "Envíame de lunes a viernes a las 18:00 quién tiene menos de 4 fichajes hoy.", a: "Crea una rutina que revisa los fichajes cada día y te lo manda por email." }],
    why: "El mismo fichaje sirve para nómina, para el coste de proyectos y para recoger el pulso del equipo, sin capturarlo dos veces.",
    links: ["turnos", "ausencias", "proyectos", "compensacion", "engagement"],
    soon: ["Inconsistencias de fichaje: soluciona todas las incidencias de golpe, sin ir una por una."]
  },
  turnos: {
    name: "Turnos", hub: "tiempo",
    lead: "Cuadrantes que respetan tus reglas y huecos que se cubren sin una lista de llamadas.",
    value: [
      "Planificación automática con reglas propias: descansos, horarios, centros, puestos y habilidades se respetan solos.",
      "Guardias planificadas y registradas junto al resto de turnos.",
      "Conectado al contrato de cada persona en el Portal de empleado: horas, jornada y condiciones se tienen en cuenta al planificar.",
      "Los turnos reales llegan a nómina, sin turnos desactualizados en el cálculo."
    ],
    one: [{ q: "Encuentra a alguien para cubrir el turno de María de hoy.", a: "Revisa descansos, puestos, habilidades, horario y centro, llama a los candidatos uno a uno y avisa al responsable cuando el turno queda cubierto." }],
    why: "Una ausencia abre el hueco, One lo cubre y el turno nuevo llega a fichajes y variables de nómina. Todas las reglas respetadas y todas las llamadas registradas.",
    links: ["ausencias", "control", "compensacion", "portal", "analiticas"]
  },
  ausencias: {
    name: "Ausencias", hub: "tiempo",
    lead: "Vacaciones, bajas y permisos con saldos al día y aprobación en dos clics.",
    value: [
      "Políticas de ausencia por equipo, centro o convenio.",
      "Calendario compartido para ver quién está antes de aprobar.",
      "Ausencias e ITs sincronizadas con nómina (con a3innuva, en España)."
    ],
    one: [{ q: "¿Cuántos días de vacaciones me quedan?", a: "Responde con el saldo de esa persona y la política que aplica. Cada uno ve solo lo suyo." }],
    why: "Una baja no se queda en el calendario: abre un hueco en Turnos, ajusta el fichaje y llega a nómina como variable.",
    links: ["turnos", "control", "compensacion", "politicas", "analiticas"]
  },
  plantilla: {
    name: "Planificación de plantilla", hub: "finanzas",
    lead: "RR. HH. y Finanzas ven los mismos números desde el primer día. Se acabaron las cinco versiones del Excel.",
    value: [
      "Los managers proponen posiciones con rol, nivel, banda salarial y fecha, ligadas al catálogo de puestos.",
      "RR. HH. y Finanzas revisan una única versión, con registro de quién decidió qué y cuándo.",
      "Las posiciones aprobadas se abren solas en Selección: el plan y la ejecución siempre coinciden."
    ],
    one: [{ q: "Prepara nuestro plan de plantilla 2027 con nuestras directrices.", a: "Propone roles, niveles y costes para que los revises." }],
    why: "La posición que apruebas es la vacante que publicas, y cada subida salarial finalizada actualiza la previsión de coste del siguiente plan.",
    links: ["ats", "revision", "fpa", "compensacion", "analiticas"],
    soon: ["Flujos de aprobación estructurados y vínculo con presupuesto.", "Comparativa de contrataciones previstas frente a reales."]
  },
  proyectos: {
    name: "Gestión de proyectos", hub: "finanzas",
    lead: "Sabe si cada proyecto es rentable mientras está en marcha, no al cerrarlo.",
    value: [
      "Horas imputadas desde el widget de fichaje, sin hojas paralelas.",
      "Coste laboral, costes fijos y gastos frente a presupuesto, en tiempo real.",
      "Del presupuesto al proyecto y del proyecto a la factura, con los datos del cliente ya cargados."
    ],
    one: [{ q: "¿Qué proyectos van por encima de presupuesto este mes?", a: "Cruza horas imputadas, coste laboral y gastos, y te explica dónde se desvía cada uno." }],
    why: "El coste de una hora sale del salario real de la persona y la hora sale del fichaje: nadie copia datos entre herramientas.",
    links: ["control", "gastos", "compensacion", "fpa", "analiticas"]
  },
  fpa: {
    name: "Planificación financiera", hub: "finanzas",
    lead: "Presupuestos y previsiones con los costes reales que ya viven en Factorial.",
    value: [
      "Presupuestos por departamento o centro de coste.",
      "Real frente a previsto con datos de plantilla, nómina, gastos, compras y proyectos.",
      "Una sola fuente de verdad para RR. HH., Finanzas y dirección."
    ],
    one: [{ q: "¿Cómo vamos frente al presupuesto de personal este trimestre?", a: "Compara el coste real de nómina con lo previsto en el plan y señala las desviaciones." }],
    why: "El presupuesto se alimenta solo: cada contratación, subida, gasto o compra ya está registrada en su módulo.",
    links: ["plantilla", "compensacion", "gastos", "compras", "proyectos", "analiticas"],
    check: true
  },
  gastos: {
    name: "Gastos", hub: "finanzas",
    lead: "De un montón de recibos a las cuentas cerradas, con un solo mensaje.",
    value: [
      "Sube los tickets y los campos se rellenan solos.",
      "Cada gasto se comprueba con la política: los que cumplen se aprueban al momento.",
      "Conciliación con la tarjeta y datos limpios para el cierre de mes."
    ],
    one: [{ q: "Aquí tienes los recibos de mi viaje de trabajo. (sube 5 de golpe)", a: "Lee cada recibo, prepara los gastos, concilia la tarjeta y comprueba política y permisos. Solo las excepciones esperan a una persona." }],
    why: "El gasto aprobado llega a nómina si hay que reembolsarlo y al proyecto si es imputable.",
    links: ["politicas", "compensacion", "proyectos", "fpa", "analiticas"]
  },
  compras: {
    name: "Compras", hub: "finanzas",
    lead: "Solicitudes de compra, aprobaciones y proveedores en un mismo flujo.",
    value: [
      "Solicitudes con aprobación según importe y equipo.",
      "Cada compra ligada a su presupuesto y a quien la pidió.",
      "Conectado con inventario y software para saber qué se compra y para quién."
    ],
    one: [{ q: "Se me ha estropeado el portátil. Necesito uno nuevo.", a: "Abre el ticket, comprueba que no hay stock, encuentra uno en el marketplace y lo compra cuando una persona lo aprueba." }],
    why: "La compra empieza en un ticket, pasa por el presupuesto y termina en el inventario de la persona.",
    links: ["tickets", "inventario", "marketplace", "software", "fpa"],
    check: true
  },
  revision: {
    name: "Revisión salarial", hub: "finanzas",
    lead: "Cada subida, justificada, presupuestada y defendible.",
    value: [
      "Directrices una sola vez: elegibilidad, rangos y aprobadores. Cada propuesta se contrasta sola.",
      "Cada manager ve solo su equipo, con lo que está fuera de política ya señalado, y el presupuesto se reparte en tiempo real.",
      "La subida aprobada pasa al contrato y a la previsión de plantilla, sin teclear nada."
    ],
    one: [{ q: "Propón subidas para mi equipo según nuestra política.", a: "Cifras y justificación, ya contrastadas con el presupuesto. Tú apruebas." }],
    why: "Tú decides cuántos ciclos de evaluación cuentan para la elegibilidad: la subida refleja una tendencia, no una nota puntual. Y llega a nómina como variable validada.",
    links: ["desempeno", "compensacion", "plantilla", "documentos", "analiticas"]
  },
  politicas: {
    name: "Políticas", hub: "core",
    lead: "Tus normas, escritas una vez y aplicadas en cada módulo.",
    value: [
      "Políticas de ausencias, gastos, horario y más, aplicadas por los módulos que las usan.",
      "Handbook: las personas preguntan y One responde con la fuente.",
      "Si One no lo sabe, lo dice."
    ],
    one: [{ q: "¿Puedo trabajar dos semanas en remoto desde otro país?", a: "Responde a partir de tu política, muestra la fuente y solo enseña lo que esa persona puede ver." }],
    why: "Las preguntas rutinarias nunca llegan a la bandeja del responsable, y los mismos criterios aprueban gastos o ausencias.",
    links: ["ausencias", "gastos", "control", "portal", "tickets"]
  },
  portal: {
    name: "Portal de empleado", hub: "core",
    lead: "La app donde cada persona ve lo suyo y pide lo que necesita.",
    value: [
      "Datos personales, nóminas, documentos y saldos en una sola app.",
      "Ausencias, gastos y tickets desde el móvil.",
      "One integrado para preguntar, pedir y seguir cada solicitud."
    ],
    oneNote: "One está incluido para toda la plantilla, sin necesidad de formación. Cada persona pregunta lo que necesita y ve solo lo que su rol le permite.",
    why: "Todo lo que el empleado hace aquí entra directamente en el módulo correspondiente, sin formularios ni correos intermedios.",
    links: ["ausencias", "gastos", "tickets", "documentos", "beneficios", "comunicaciones"]
  },
  onoff: {
    name: "On/Offboarding", hub: "core",
    lead: "Incorporaciones y salidas como un flujo, con tareas para RR. HH., IT y el manager.",
    value: [
      "La persona contratada llega desde Selección con todos sus datos.",
      "Documentos, firma, dispositivo, accesos y formación de bienvenida en el mismo flujo.",
      "En la salida, accesos y equipos se recuperan sin depender de la memoria de nadie."
    ],
    one: [{ q: "Prepara la incorporación de Marta para el lunes.", a: "Lanza las tareas, prepara los documentos para firma, pide su portátil y le asigna el curso de bienvenida." }],
    why: "Es el punto donde más módulos se tocan: si el dato está centralizado, el primer día funciona solo.",
    links: ["ats", "documentos", "firma", "inventario", "mdm", "software", "formacion"]
  },
  documentos: {
    name: "Gestión de documentos", hub: "core",
    lead: "Contratos, nóminas y certificados de cada persona, con permisos y plantillas.",
    value: [
      "Carpetas por persona y por empresa, con permisos por rol.",
      "Plantillas que se rellenan con los datos del empleado.",
      "One lee cualquier archivo y extrae lo que importa."
    ],
    one: [{ q: "¿Qué contratos temporales vencen este trimestre?", a: "Lo cruza con los datos contractuales y te devuelve la lista con fechas y responsables." }],
    why: "Un cambio salarial aprobado actualiza el contrato; una contratación genera sus documentos. Nadie los vuelve a montar.",
    links: ["firma", "onoff", "revision", "compensacion", "canal"]
  },
  firma: {
    name: "Firma electrónica", hub: "core",
    lead: "Envía a firmar sin salir de Factorial y guarda el resultado donde toca.",
    value: [
      "Firma de contratos, anexos y políticas desde cualquier dispositivo.",
      "Ofertas de Selección firmadas desde cualquier sitio, y sabes al momento cuándo se firman.",
      "El documento firmado queda en el perfil de la persona."
    ],
    oneNote: "One prepara los documentos a partir de tus plantillas para que solo tengas que revisarlos y enviarlos a firmar.",
    why: "Cero datos que volver a teclear cuando alguien firma: el estado llega al proceso que lo pidió.",
    links: ["documentos", "ats", "onoff", "revision"]
  },
  analiticas: {
    name: "Analíticas", hub: "core", special: "analytics",
    lead: "Todos los datos de Factorial en un mismo sitio, y One para preguntarlos en lenguaje natural.",
    value: [
      "Informes que cruzan módulos sobre el mismo dato: personas, tiempo, talento, nómina y finanzas.",
      "Pídele a One que cree un informe, añada widgets, filtre o te explique una tendencia, y guárdalo.",
      "Cada persona ve solo lo que sus permisos le dejan ver."
    ],
    one: [{ q: "Envíame la rotación por departamento cada lunes.", a: "Crea el informe, lo programa como rutina y te explica la tendencia en cada envío." }],
    why: "Todos los módulos llegan aquí. Como todo el dato vive en Factorial, un informe no se construye: se pregunta. Sin exportar, sin cruzar Excels y sin esperar a Finanzas.",
    links: ["desempeno", "engagement", "ats", "control", "ausencias", "turnos", "plantilla", "compensacion", "revision", "gastos", "proyectos"]
  },
  tickets: {
    name: "Tickets", hub: "core",
    lead: "Solicitudes que llegan medio resueltas antes de que las toque una persona.",
    value: [
      "Se abren chateando con One y se siguen en Factorial.",
      "Se encaminan solos al equipo correcto: IT, RR. HH., Finanzas.",
      "One investiga y traduce cada mensaje en los dos sentidos."
    ],
    one: [{ q: "Oye One, se me acaba de estropear el portátil. Necesito uno nuevo.", a: "Crea el ticket, lo encamina a IT, lee el contexto, ve que no hay portátil en stock, encuentra uno en el marketplace y redacta el plan. Una persona aprueba, se compra e IT lo entrega." }],
    why: "One investiga entre contratos, activos de IT y perfiles de empleado: la resolución se redacta con tus políticas y quien resuelve solo aprueba.",
    links: ["inventario", "marketplace", "compras", "politicas", "portal"]
  },
  mdm: {
    name: "Gestión de dispositivos móviles", hub: "it",
    lead: "Configura y protege los dispositivos de la empresa desde el mismo sitio donde gestionas a las personas.",
    value: [
      "Cada dispositivo ligado a la persona que lo usa.",
      "Alta y baja de dispositivos dentro del onboarding y el offboarding.",
      "Estado de seguridad de la flota visible para IT."
    ],
    oneNote: "One te mantiene en cumplimiento: comprueba con las políticas, corrige incoherencias y hace seguimiento de accesos y riesgos.",
    why: "Cuando alguien entra o sale, IT no depende de un correo de RR. HH.: el cambio ya está en Factorial.",
    links: ["inventario", "onoff", "software", "seguridad", "cumplimiento"],
    check: true
  },
  inventario: {
    name: "Inventario", hub: "it",
    lead: "Qué equipo tiene cada persona, con su histórico.",
    value: [
      "Asignación y devolución de equipos por persona.",
      "Integrado en el onboarding y el offboarding.",
      "Stock visible antes de comprar."
    ],
    oneNote: "Cuando llega un ticket, One comprueba el inventario antes de proponer una compra.",
    why: "El inventario sabe quién es quién porque comparte el dato de personas con Core HR.",
    links: ["tickets", "compras", "marketplace", "mdm", "onoff", "plantilla"]
  },
  software: {
    name: "Gestión de software", hub: "it",
    lead: "Qué herramientas usa la empresa, quién tiene acceso y cuánto cuestan.",
    value: [
      "Inventario de aplicaciones y licencias.",
      "Accesos que se dan y se retiran con la entrada y salida de personas.",
      "Gasto en licencias visible para Finanzas."
    ],
    oneNote: "One cruza licencias y personas activas para detectar accesos que ya no deberían existir.",
    why: "Licencias, personas y presupuesto en el mismo sitio: nadie paga por una cuenta de alguien que ya se fue.",
    links: ["onoff", "compras", "fpa", "mdm", "gastos", "cumplimiento"],
    check: true
  },
  marketplace: {
    name: "Marketplace", hub: "it",
    lead: "Un catálogo para pedir dispositivos y equipos sin buscar proveedor.",
    value: [
      "Catálogo de dispositivos listo para pedir.",
      "Compras con aprobación y entrega a quien lo necesita.",
      "Conectado a tickets e inventario."
    ],
    oneNote: "Si no hay stock, One encuentra el dispositivo en el marketplace y deja la compra preparada para aprobar.",
    why: "Del ticket a la entrega sin cambiar de herramienta.",
    links: ["tickets", "compras", "inventario", "fpa"],
    check: true
  },
  seguridad: { name: "Seguridad (EDR)",
      hub: "it",
      tag: "Add-on",
      lead: "Antivirus y detección de amenazas en cada dispositivo, gestionados desde Factorial.",
      value: ["Protección de endpoints con detección y respuesta (EDR/MDR) de SentinelOne.", "Funciona sobre el MDM: la protección se aplica, no solo se comprueba.", "Si se pierde un equipo, revisa la actividad sospechosa antes de borrarlo."],
      oneNote: "One avisa de los equipos sin protección y prepara la respuesta para que IT solo tenga que aprobar.",
      why: "Protege los mismos dispositivos y personas que gestiona el MDM: cuando alguien entra o sale, la protección le sigue.",
      links: ["mdm", "cumplimiento", "tickets", "software"] },
  cumplimiento: { name: "Cumplimiento",
      hub: "it",
      tag: "Add-on",
      lead: "ISO 27001, NIS2 y ENS con las pruebas que tu empresa ya tiene en Factorial.",
      value: ["Plantilla, roles y contratos con cláusula de confidencialidad, desde Core HR.", "Políticas de seguridad firmadas y formación de concienciación completada.", "Cifrado, revisiones de accesos, registro de activos e incidentes, desde los productos de IT."],
      oneNote: "One reúne las pruebas y prepara el paquete para el auditor.",
      why: "Lee pruebas de casi todos los módulos de Factorial, algo que una herramienta de cumplimiento aislada no puede hacer.",
      links: ["onoff", "politicas", "firma", "formacion", "mdm", "seguridad", "software", "inventario", "tickets", "canal"] },
  beneficios: {
    name: "Beneficios", hub: "nomina",
    lead: "Retribución flexible que tu equipo usa con una tarjeta y RR. HH. gestiona sin papeleo.",
    value: [
      "Comida, transporte, guardería, seguro de salud, formación y Wellhub.",
      "Tarjeta Visa en el wallet del móvil, con saldo y movimientos en la app.",
      "Presupuestos por categoría, cumplimiento fiscal y exportación directa a nómina."
    ],
    one: [{ q: "¿Cuánto me queda de saldo de comida este mes?", a: "Responde con el saldo de esa persona, dentro de sus permisos." }, { q: "¿Cuántos impuestos me he ahorrado hasta ahora en 2026?", a: "Calcula el ahorro fiscal de su retribución flexible en lo que va de año, con el detalle por categoría." }],
    why: "Lo que cada persona usa llega a nómina como concepto, sin que nadie lo recopile a mano.",
    links: ["compensacion", "portal", "integraciones"]
  },
  compensacion: {
    name: "Compensación", hub: "nomina",
    lead: "Cada cambio llega a nómina ya validado.",
    value: [
      "Cubre todo el ciclo de nómina: pre-nómina (preparación y actualizaciones de cada persona), post-nómina (resultados calculados por tu software de nómina) y más allá, con Planificación financiera, distribución de nóminas en Gestión de documentos y pagos SEPA con Tesorería.",
      "Actualizaciones de cada persona listas para nómina: altas, bajas, cambios de contrato y salario, ausencias y bonus, visibles al instante.",
      "Alertas antes del cálculo: variables pendientes, bonus sin aprobar o turnos desactualizados.",
      "Cada nómina comparada con variables y contratos aprobados, y coste real frente a previsto.",
      "Planes de incentivos conectados con Desempeño: normas de pago, cálculo automático de cada bonus y pago directo en nómina."
    ],
    one: [{ q: "¿Qué falta antes de cerrar la nómina de este mes?", a: "Revisa variables pendientes y lo que no cuadra, y te dice quién tiene que actuar." }],
    why: "Aquí desemboca todo: fichajes, turnos, ausencias, gastos, beneficios y subidas. Si nacen conectados, llegan validados.",
    links: ["desempeno", "revision", "control", "turnos", "ausencias", "gastos", "beneficios", "integraciones", "documentos", "fpa"],
    stat: { n: "40 h", t: "al mes que puedes ahorrar sincronizando altas, bajas, cambios salariales, ausencias y variables con tu proveedor de nómina (integración a3innuva, España)" }
  },
  integraciones: {
    name: "Integraciones", hub: "nomina",
    lead: "Factorial conectado con tu proveedor de nómina y con el resto de tus herramientas.",
    value: [
      "a3innuva (España): altas, bajas, cambios contractuales y salariales, ausencias, ITs y variables.",
      "Compatible con otros software de nómina y con Factorial Professionals para asesorías.",
      "API para conectar con tu ERP."
    ],
    oneNote: "Si el dato vive en Factorial o en algo que conectas, puedes preguntar, delegar o automatizar con One.",
    why: "Integrar no es copiar: el cambio se registra una vez y se sincroniza.",
    links: ["compensacion", "beneficios", "ausencias", "proyectos"]
  },
  anticipo: {
    name: "Anticipo de nómina", hub: "nomina",
    lead: "Tu equipo puede pedir parte del salario ya generado antes de fin de mes.",
    value: [
      "Solicitud desde la app, sin papeleo.",
      "Reglas y límites que defines tú.",
      "El anticipo se refleja en la nómina sin ajustes a mano."
    ],
    oneNote: "Las personas preguntan a One cuánto pueden pedir y cómo funciona, según tu política.",
    why: "Como el salario y los días trabajados ya están en Factorial, el importe disponible no se calcula a mano.",
    links: ["compensacion", "portal", "integraciones"],
    check: true
  }
};

/* Todo llega a Analíticas: cada módulo enlaza con Analíticas y Analíticas con todos */
M.analiticas.links = Object.keys(M).filter(k => k !== 'analiticas');
for (const k of M.analiticas.links) if (!M[k].links.includes('analiticas')) M[k].links.push('analiticas');


const STORIES = [
  { t: "Una nueva incorporación", d: "La posición se aprueba una vez y el resto se encadena solo.", steps: [
    ["plantilla","Se aprueba la posición con su banda salarial."],["ats","Se abre sola como vacante; One criba y llama."],["firma","La oferta se firma desde el móvil."],["onoff","Entra con todos sus datos, sin volver a teclear."],["inventario","Su portátil ya está asignado."],["formacion","Recibe el curso de bienvenida."],["compensacion","Su alta llega validada a nómina."]] },
  { t: "Una baja de última hora", d: "Del aviso a la nómina sin que nadie copie un dato.", steps: [
    ["ausencias","Alguien avisa de que está enfermo."],["turnos","One encuentra quién puede cubrir y le llama."],["control","El nuevo turno se ficha como cualquier otro."],["compensacion","La baja y el cambio de turno llegan como variables."],["analiticas","El absentismo por centro se actualiza solo."]] },
  { t: "Un ciclo de revisión", d: "La subida sale de la evaluación y vuelve al plan.", steps: [
    ["desempeno","La evaluación marca resultados y carencias."],["formacion","La formación se asigna en un clic."],["revision","One propone la subida dentro de política."],["compensacion","La subida llega validada a nómina."],["plantilla","La previsión de coste se actualiza para el próximo plan."]] },
  { t: "Un portátil roto", d: "Un mensaje a One y una aprobación.", steps: [
    ["tickets","Se lo cuentas a One y abre el ticket."],["inventario","One comprueba que no hay stock."],["marketplace","Encuentra uno que cumple la política."],["compras","Una persona aprueba, se compra e IT lo entrega."]] }
];

/* ---------- ENGLISH ---------- */
const EN = {
  HUBS: {
    talento: { name: "Talent", lead: "From the role you plan to the raise you defend. Every talent decision builds on the last one, not from scratch.", one: "The more talent products you have, the more context One has: it reads reviews, applications, courses and surveys at once." },
    tiempo: { name: "Time", lead: "Clock-ins, shifts and absences on the same calendar, with every hour ready for payroll and projects.", one: "One covers shifts, answers balance questions and catches clock-in issues while they're still small." },
    finanzas: { name: "Finance", lead: "HR and Finance work with the same numbers: headcount, expenses, purchases, projects and budget.", one: "One approves what meets the policy and leaves you only the exceptions." },
    core: { name: "Core HR", lead: "The foundation: people, documents, policies and every employee's app. What's captured here is used by every module.", one: "One knows your policies, answers with the source and resolves requests before they reach a person." },
    it: { name: "IT", lead: "Devices, software and inventory tied to the person who uses them, from their first day to their last.", one: "One investigates the ticket, checks stock and prepares the purchase so a person only has to approve." },
    nomina: { name: "Payroll", lead: "Every change that affects pay reaches payroll validated, from clock-in to salary raise.", one: "One spots pending variables and anything that doesn't add up before payroll is calculated." }
  },
  M: {
    desempeno: { name: "Performance",
      lead: "Reviews, goals and feedback all year round, not just at the annual review.",
      value: ["180° and 360° reviews with automated cycles, reminders and downloadable agreements.", "Individual and team goals and OKRs, with continuous feedback so you reach the review with data.", "9-box and talent analytics to see who has the most potential and who needs support.", "Incentive plans: set payout rules tied to goals and results; Factorial calculates every bonus and pays it automatically through payroll."],
      one: [{ q: "Who on my team is showing risk signals?", a: "Analyzes self-reviews and feedback, summarizes each case and explains why it flags it." }],
      why: "Every result feeds the training you assign and the raise you propose. Recruitment uses the latest review to measure which sources bring people who stay and perform.",
      soon: ["Goals connected via MCP: Factorial updates goals with data from your other tools."] },
    formacion: { name: "Training & LMS",
      lead: "Recorded trainings and interactive courses inside Factorial, tied to performance.",
      value: ["Catalog, sessions and attendance; mandatory training with audit-ready traceability.", "LMS: courses with videos, quizzes and tests, automatic progress and certificates on completion.", "Salary cost of each training calculated automatically."],
      one: [{ q: "Create an onboarding course for the store team.", a: "A structured course with modules and quizzes, in minutes. You review it and publish it." }],
      why: "From the review, in one click: assign the training that closes each skills gap and measure its impact in the next cycle.",
      stat: { n: "94%", t: "of employees would stay longer at a company that invests in their development (LinkedIn Workplace Learning Report, 2023)" } },
    engagement: { name: "Engagement",
      lead: "Listen to your team without sending another form: daily pulse, surveys, eNPS and AI 1:1s.",
      value: ["Team pulse at clock-in: check-ins without survey fatigue and alerts to the right manager.", "Automated surveys and eNPS at onboarding, at exit and at every milestone.", "AI 1:1 meetings: One prepares each 1:1 with goals, performance and mood."],
      one: [{ q: "Prepare tomorrow's 1:1 with Laura.", a: "Gathers her goals, latest review, recent pulse and what was discussed in previous 1:1s." }],
      why: "Good performance doesn't always mean engagement. With pulse tied to clock-ins and performance context, One sees the full picture of each person.",
      stat: { n: "40–60%", t: "less manual admin with automated reviews, 1:1s and surveys" } },
    comunidades: { name: "Communities",
      lead: "Spaces where your people meet, share and recognize each other, beyond the org chart.",
      value: ["Communities by interest, location, project or team, open or invite-only.", "Posts, recognition and milestone celebrations from the app.", "Brings office, remote and in-store people together in one space."],
      one: [{ q: "Which communities do you recommend now that I've joined?", a: "Suggests the ones for your team, your location and your interests, based on your profile." }],
      why: "Communities are built on the same team, location and people data, so every new hire finds their place from day one." },
    comunicaciones: { name: "Communications",
      lead: "Announcements for the whole company or specific teams, where your people already work every day.",
      value: ["Publish to the whole company or to specific teams and locations.", "Reaches everyone through the app, including people who don't sit at a computer.", "Announcements live next to the policies and documents they refer to."],
      one: [{ q: "Draft the announcement for the new summer schedule in Spanish and English.", a: "Drafts it from your schedule policy and translates it, ready to review." }],
      why: "Targeting comes from the same team, location and role data the rest of Factorial uses." },
    ats: { name: "ATS & hiring",
      lead: "An ATS that plans, screens and decides with you, from the approved position to the signed offer.",
      value: ["Hiring Plan: every position approved in headcount planning arrives as a job with an owner, deadline and status.", "AI report per candidate and AI calls in their language, with transcript and a green, amber or red outcome.", "Unlimited jobs, per-stage permissions, video interviews with One and one-year retention analytics."],
      one: [
        { q: "Call every candidate who reaches the screening stage.", a: "A call in their language, announced, with consent and recorded. Returns transcript, report and suggested next step. A person decides." },
        { q: "Create the job post for a Senior Product Designer in Barcelona.", a: "Drafts the post from the conversation and publishes it on your careers page and 250+ job boards." }
      ],
      why: "The job is born approved and budgeted; whoever signs joins with all their data, without retyping anything; and analytics cross hiring source with performance review.",
      stats: [{ n: "70%", t: "less time-to-hire with AI first-round screening" }, { n: "+25%", t: "headcount growth with the same recruiting team" }],
      soon: ["Suggested candidates from the talent pool (coming soon).", "WhatsApp in Recruitment and Company Pages per entity (coming soon).", "Cultural assessment (coming soon)."] },
    canal: { name: "Trust channel",
      lead: "A channel for anyone to report wrongdoing confidentially, anonymously too.",
      value: ["Confidential reports, with the option to stay anonymous.", "Case tracking with access restricted to whoever handles it.", "Helps you comply with whistleblower protection rules."],
      oneNote: "One follows Factorial's permissions exactly: cases are only visible to the people who handle them, no one else.",
      why: "It lives in the same app as the rest of the employee's tools, so nobody has to look for where to report." },
    control: { name: "Time tracking",
      lead: "Clock in from phone or computer, with the working-time record always up to date.",
      value: ["Clock in from the app or the web, with overtime and balances calculated.", "Issues visible to the manager before they reach payroll.", "Hours logged to projects feed the real cost of each project."],
      one: [{ q: "Every weekday at 6 pm, send me who has fewer than 4 clock-ins today.", a: "Creates a routine that checks clock-ins daily and emails it to you." }],
      why: "The same clock-in serves payroll, project costing and the team pulse, without capturing it twice.",
      soon: ["Clock-in inconsistencies: fix every issue at once, without going one by one."] },
    turnos: { name: "Shifts",
      lead: "Rotas that respect your rules, and gaps filled without a call list.",
      value: ["Automatic planning with custom rules: rest days, schedules, locations, roles and skills are respected on their own.", "On-call duty planned and tracked alongside the rest of the shifts.", "Connected to each person's contract in the Employee portal: hours, working time and conditions are taken into account when planning.", "Actual shifts reach payroll, with no outdated shifts in the calculation."],
      one: [{ q: "Find someone to cover María's shift today.", a: "Checks rest days, roles, skills, schedule and location, calls candidates one by one and tells the manager once the shift is covered." }],
      why: "An absence opens the gap, One fills it and the new shift reaches clock-ins and payroll variables. Every rule respected and every call logged." },
    ausencias: { name: "Time off",
      lead: "Vacation, sick leave and permits with up-to-date balances and two-click approval.",
      value: ["Time-off policies by team, location or collective agreement.", "Shared calendar to see who's out before approving.", "Absences and sick leave synced with payroll (with a3innuva, in Spain)."],
      one: [{ q: "How many vacation days do I have left?", a: "Answers with that person's balance and the policy that applies. Everyone only sees their own." }],
      why: "A sick leave doesn't stay on the calendar: it opens a gap in Shifts, adjusts clock-ins and reaches payroll as a variable." },
    plantilla: { name: "Headcount planning",
      lead: "HR and Finance see the same numbers from day one. No more five versions of the spreadsheet.",
      value: ["Managers propose positions with role, level, pay band and date, tied to the job catalog.", "HR and Finance review a single version, with a record of who decided what and when.", "Approved positions open automatically in Recruitment: plan and execution always match."],
      one: [{ q: "Prepare our 2027 headcount plan with our guidelines.", a: "Proposes roles, levels and costs for you to review." }],
      why: "The position you approve is the job you post, and every finalized raise updates the cost forecast for the next plan.",
      soon: ["Structured approval flows and link to budget.", "Planned vs. actual hires comparison."] },
    proyectos: { name: "Project management",
      lead: "Know whether each project is profitable while it's running, not when it closes.",
      value: ["Hours logged from the clock-in widget, no parallel timesheets.", "Labor cost, fixed costs and expenses vs. budget, in real time.", "From quote to project and from project to invoice, with client data already loaded."],
      one: [{ q: "Which projects are over budget this month?", a: "Crosses logged hours, labor cost and expenses, and explains where each one deviates." }],
      why: "The cost of an hour comes from the person's real salary and the hour comes from the clock-in: nobody copies data between tools." },
    fpa: { name: "Financial Planning",
      lead: "Budgets and forecasts with the real costs that already live in Factorial.",
      value: ["Budgets by department or cost center.", "Actual vs. planned with headcount, payroll, expense, purchase and project data.", "A single source of truth for HR, Finance and leadership."],
      one: [{ q: "How are we doing against the people budget this quarter?", a: "Compares actual payroll cost with the plan and flags deviations." }],
      why: "The budget feeds itself: every hire, raise, expense or purchase is already recorded in its module." },
    gastos: { name: "Expenses",
      lead: "From a pile of receipts to closed books, with a single message.",
      value: ["Upload receipts and the fields fill themselves.", "Every expense is checked against the policy: compliant ones are approved instantly.", "Card reconciliation and clean data for month-end close."],
      one: [{ q: "Here are the receipts from my business trip. (uploads 5 at once)", a: "Reads each receipt, prepares the expenses, reconciles the card and checks policy and permissions. Only exceptions wait for a person." }],
      why: "The approved expense reaches payroll if it needs reimbursing and the project if it's billable." },
    compras: { name: "Procurement",
      lead: "Purchase requests, approvals and suppliers in a single flow.",
      value: ["Requests with approval by amount and team.", "Every purchase tied to its budget and to whoever requested it.", "Connected to inventory and software to know what's bought and for whom."],
      one: [{ q: "My laptop just broke. I need a new one.", a: "Opens the ticket, checks there's no stock, finds one in the marketplace and buys it once a person approves." }],
      why: "The purchase starts in a ticket, goes through the budget and ends up in the person's inventory." },
    revision: { name: "Salary review",
      lead: "Every raise justified, budgeted and defensible.",
      value: ["Guidelines set once: eligibility, ranges and approvers. Every proposal is checked automatically.", "Each manager sees only their team, with out-of-policy items already flagged, and the budget is allocated in real time.", "The approved raise flows into the contract and the headcount forecast, without retyping."],
      one: [{ q: "Propose raises for my team based on our policy.", a: "Figures and justification, already checked against the budget. You approve." }],
      why: "You decide how many review cycles count toward eligibility: the raise reflects a trend, not a one-off score. And it reaches payroll as a validated variable." },
    politicas: { name: "Policies",
      lead: "Your rules, written once and applied in every module.",
      value: ["Time-off, expense, schedule and other policies, applied by the modules that use them.", "Handbook: people ask and One answers with the source.", "If One doesn't know, it says so."],
      one: [{ q: "Can I work remotely from another country for two weeks?", a: "Answers from your policy, shows the source and only reveals what that person can see." }],
      why: "Routine questions never reach the manager's inbox, and the same criteria approve expenses or time off." },
    portal: { name: "Employee portal",
      lead: "The app where everyone sees their own information and asks for what they need.",
      value: ["Personal data, payslips, documents and balances in one app.", "Time off, expenses and tickets from the phone.", "One built in to ask, request and track every request."],
      oneNote: "One is included for the whole workforce, no training needed. Everyone asks what they need and only sees what their role allows.",
      why: "Everything the employee does here goes straight into the right module, with no forms or emails in between." },
    onoff: { name: "On/Offboarding",
      lead: "Joiners and leavers as one flow, with tasks for HR, IT and the manager.",
      value: ["The new hire arrives from Recruitment with all their data.", "Documents, signature, device, access and welcome training in the same flow.", "On exit, access and equipment are recovered without relying on anyone's memory."],
      one: [{ q: "Prepare Marta's onboarding for Monday.", a: "Launches the tasks, prepares documents for signature, requests her laptop and assigns the welcome course." }],
      why: "It's where the most modules meet: if the data is centralized, day one runs itself." },
    documentos: { name: "Document management",
      lead: "Each person's contracts, payslips and certificates, with permissions and templates.",
      value: ["Folders per person and per company, with role-based permissions.", "Templates that fill in with the employee's data.", "One reads any file and extracts what matters."],
      one: [{ q: "Which temporary contracts expire this quarter?", a: "Crosses it with contract data and returns the list with dates and owners." }],
      why: "An approved salary change updates the contract; a hire generates its documents. Nobody rebuilds them." },
    firma: { name: "E-signature",
      lead: "Send for signature without leaving Factorial and keep the result where it belongs.",
      value: ["Sign contracts, annexes and policies from any device.", "Recruitment offers signed from anywhere, and you know instantly when they're signed.", "The signed document stays in the person's profile."],
      oneNote: "One prepares documents from your templates so you only have to review and send them for signature.",
      why: "Zero data to retype when someone signs: the status reaches the process that requested it." },
    analiticas: { name: "Analytics",
      lead: "All of Factorial's data in one place, and One to query it in natural language.",
      value: ["Reports that cross modules on the same data: people, time, talent, payroll and finance.", "Ask One to create a report, add widgets, filter or explain a trend, and save it.", "Everyone only sees what their permissions allow."],
      one: [{ q: "Send me turnover by department every Monday.", a: "Creates the report, schedules it as a routine and explains the trend in every send." }],
      why: "Every module flows here. Because all the data lives in Factorial, a report isn't built: it's asked for. No exporting, no merging spreadsheets and no waiting for Finance." },
    tickets: { name: "Tickets",
      lead: "Requests that arrive half-solved before a person touches them.",
      value: ["Opened by chatting with One and tracked in Factorial.", "Routed automatically to the right team: IT, HR, Finance.", "One investigates and translates every message both ways."],
      one: [{ q: "Hey One, my laptop just broke. I need a new one.", a: "Creates the ticket, routes it to IT, reads the context, sees there's no laptop in stock, finds one in the marketplace and drafts the plan. A person approves, it's bought and IT delivers it." }],
      why: "One investigates across contracts, IT assets and employee profiles: the resolution is drafted with your policies and whoever resolves it just approves." },
    mdm: { name: "Mobile device management",
      lead: "Configure and secure company devices from the same place you manage people.",
      value: ["Every device tied to the person who uses it.", "Device enrollment and removal within onboarding and offboarding.", "Fleet security status visible to IT."],
      oneNote: "One keeps you compliant: checks against policies, fixes inconsistencies and tracks access and risks.",
      why: "When someone joins or leaves, IT doesn't depend on an email from HR: the change is already in Factorial." },
    inventario: { name: "Inventory",
      lead: "What equipment each person has, with its history.",
      value: ["Equipment assignment and return per person.", "Built into onboarding and offboarding.", "Stock visible before buying."],
      oneNote: "When a ticket comes in, One checks inventory before proposing a purchase.",
      why: "Inventory knows who's who because it shares people data with Core HR." },
    software: { name: "Software management",
      lead: "Which tools the company uses, who has access and what they cost.",
      value: ["Inventory of apps and licenses.", "Access granted and revoked as people join and leave.", "License spend visible to Finance."],
      oneNote: "One crosses licenses with active people to spot access that should no longer exist.",
      why: "Licenses, people and budget in one place: nobody pays for an account of someone who already left." },
    marketplace: { name: "Marketplace",
      lead: "A catalog to order devices and equipment without hunting for suppliers.",
      value: ["Device catalog ready to order.", "Purchases with approval and delivery to whoever needs it.", "Connected to tickets and inventory."],
      oneNote: "If there's no stock, One finds the device in the marketplace and leaves the purchase ready to approve.",
      why: "From ticket to delivery without switching tools." },
    seguridad: { name: "Security (EDR)",
      tag: "Add-on",
      lead: "Antivirus and threat detection on every device, managed from Factorial.",
      value: ["Endpoint protection with SentinelOne detection and response (EDR/MDR).", "Runs on top of MDM: protection is applied, not only checked.", "If a device is lost, it checks for suspicious activity before the wipe."],
      oneNote: "One flags unprotected devices and prepares the response so IT only has to approve.",
      why: "It protects the same devices and people MDM manages: when someone joins or leaves, protection follows them." },
    cumplimiento: { name: "Compliance",
      tag: "Add-on",
      lead: "ISO 27001, NIS2 and ENS with the evidence your company already has in Factorial.",
      value: ["Staff list, roles and contracts with confidentiality clauses, from Core HR.", "Security policies signed and awareness training completed.", "Encryption, access reviews, asset register and incident log, from the IT products."],
      oneNote: "One gathers the evidence and prepares the pack for the auditor.",
      why: "It reads evidence from almost every Factorial module, which a standalone compliance tool can't do." },
    beneficios: { name: "Benefits",
      lead: "Flexible compensation your team uses with a card and HR manages without paperwork.",
      value: ["Meals, transport, childcare, health insurance, training and Wellhub.", "Visa card in the phone wallet, with balance and transactions in the app.", "Budgets by category, tax compliance and direct export to payroll."],
      one: [{ q: "How much meal allowance do I have left this month?", a: "Answers with that person's balance, within their permissions." }, { q: "How much tax have I saved so far in 2026?", a: "Calculates that person's tax savings from flexible benefits so far this year, broken down by category." }],
      why: "What each person uses reaches payroll as a pay item, without anyone compiling it by hand." },
    compensacion: { name: "Compensation",
      lead: "Every change reaches payroll already validated.",
      value: ["Covers the whole payroll cycle: pre-payroll (preparation and employee updates), post-payroll (results calculated by your payroll software) and beyond, with Financial Planning, payslip distribution in Document management and SEPA payments with Treasury.", "Employee updates ready for payroll: hires, exits, contract and salary changes, absences and bonuses, visible instantly.", "Alerts before calculation: pending variables, unapproved bonuses or outdated shifts.", "Every payroll compared with approved variables and contracts, and actual vs. planned cost.", "Incentive plans connected to Performance: payout rules, automatic calculation of every bonus and direct payment through payroll."],
      one: [{ q: "What's missing before we close this month's payroll?", a: "Reviews pending variables and anything that doesn't add up, and tells you who needs to act." }],
      why: "Everything flows here: clock-ins, shifts, time off, expenses and raises. If they're born connected, they arrive validated.",
      stat: { n: "40 h", t: "a month you can save by syncing hires, exits, salary changes, absences and variables with your payroll provider (a3innuva integration, Spain)" } },
    integraciones: { name: "Integrations",
      lead: "Factorial connected to your payroll provider and the rest of your tools.",
      value: ["a3innuva (Spain): hires, exits, contract and salary changes, absences, sick leave and variables.", "Compatible with other payroll software and with Factorial Professionals for advisory firms.", "API to connect with your ERP."],
      oneNote: "If the data lives in Factorial or in something you connect, you can ask, delegate or automate with One.",
      why: "Integrating isn't copying: the change is recorded once and synced." },
    anticipo: { name: "Salary advance",
      lead: "Your team can request part of the salary already earned before the end of the month.",
      value: ["Request from the app, no paperwork.", "Rules and limits you define.", "The advance is reflected in payroll without manual adjustments."],
      oneNote: "People ask One how much they can request and how it works, according to your policy.",
      why: "Because salary and days worked are already in Factorial, the available amount isn't calculated by hand." }
  },
  STORIES: [
    { t: "A new hire", d: "The position is approved once and the rest follows on its own.", steps: ["The position is approved with its pay band.", "It opens as a job automatically; One screens and calls.", "The offer is signed from a phone.", "They join with all their data, no retyping.", "Their laptop is already assigned.", "They get the welcome course.", "Their hire reaches payroll validated."] },
    { t: "A last-minute sick leave", d: "From the heads-up to payroll without anyone copying data.", steps: ["Someone says they're sick.", "One finds who can cover and calls them.", "The new shift is clocked like any other.", "The leave and the shift change arrive as variables.", "Absenteeism by location updates itself."] },
    { t: "A review cycle", d: "The raise comes out of the review and feeds back into the plan.", steps: ["The review flags results and gaps.", "Training is assigned in one click.", "One proposes the raise within policy.", "The raise reaches payroll validated.", "The cost forecast updates for the next plan."] },
    { t: "A broken laptop", d: "One message to One and one approval.", steps: ["You tell One and it opens the ticket.", "One checks there's no stock.", "It finds one that meets the policy.", "A person approves, it's bought and IT delivers it."] }
  ],
  UI: {
    sbMap: "One Map",
    sbConn: "Connectors",
    sbPlans: "Plans",
    sbDeck: "Pitch deck",
    sbLegal: "Legal & compliance",
    video: "See it in action",
    navConn: "Connectors",
    connE: "One · Connectors",
    connT: "Your company doesn’t live in one tool. Neither does One.",
    connD: "Connect the apps your team already uses, like Slack, HubSpot, Notion or Jira. One combines them with your Factorial data, always within each person’s permissions.",
    connBtn: "See the connector catalog",
    connNote: "",
    themeAria: "Night mode",
    partnerQ: "Want to see it with your own data? Ask your Factorial partner.",
    panelConn: "Connect One to your tools",
    navMap: "Map", navStories: "Stories", navWhy: "AI for Business", navPlans: "One plans", navFacts: "Key figures", navNext: "What’s next", navAria: "Sections",
    allin: "All in One",
    solves: "What it solves", tryOne: "Try One",
    center: "The core", area: "Area", modules: "Modules", brings: "What it brings", withOne: "With One", connected: "Connected with",
    soon: "What's next", soonNote: "Scope and dates may change.", close: "Close",
    title: "Factorial · Everything connected with One",
    h1: "One already knows your company",
    sub: "Every Factorial module shares the same data. One works on top of all of them, with your permissions and your policies.",
    hint: "Tap any bubble to see what it brings, what One does with it and what it connects to.",
    cue: "Keep scrolling", cueAria: "Keep scrolling", oneAria: "See what One is", panelAria: "Module details",
    s1t: "The same data, end to end",
    s1d: "When every module lives in a different tool, every decision starts from scratch. In Factorial, what's captured once is used by the next step. Tap any step to open it on the map.",
    s2t: "Your teams already use AI. Make it yours.",
    s2d: "What changes isn't the technology, it's the context. And with people data, trust is non-negotiable.",
    cmpHead: `<tr><th></th><th>Generic AI</th><th>One</th></tr>`,
    cmpBody: `<tr><td>Context</td><td>Starts blank every time. You paste the context.</td><td>Connected to your Factorial data and the tools you connect, from the first message.</td></tr>
      <tr><td>Permissions</td><td>Doesn't know who should see what.</td><td>Each person only sees what their role allows. Same roles, nothing new exposed.</td></tr>
      <tr><td>Compliance</td><td>No guarantees in the EU.</td><td>Compliant with GDPR and the EU AI Act, hosted in the EU.</td></tr>
      <tr><td>Reliability</td><td>Makes up answers without warning.</td><td>Answers with your data and shows the source. If it doesn't know, it says so.</td></tr>
      <tr><td>Control</td><td>Opaque cost and actions.</td><td>You decide which agents run and see every action and what it cost.</td></tr>`,
    s4e: "One · Personal capacity",
    s4t: "Give everyone AI without giving up control",
    s4d: "Every person gets their own daily AI usage, inside the permissions you already trust. Choose a mix of personal plans based on the type of profile.",
    tiers: `<div class="tier"><div class="tn"><b>Free</b></div><p class="usage"><b>Included in every bundle.</b></p><h4>Recommended for</h4><div class="who"><i>Everyone</i></div><h4>What they do with One</h4><ul><li>Ask about policies, balances, payslips and documents, with the source.</li><li>Request time off, expenses and tickets by chatting.</li><li>Track every request from the app.</li></ul></div>
    <div class="tier"><div class="tn"><b>Basic</b></div><p class="usage"><b>x2 usage vs Free</b><br>For regular use.</p><h4>Recommended for</h4><div class="who"><i>Everyone</i><i>Team leaders</i></div><h4>What they do with One</h4><ul><li>Everything in Free, with twice the daily usage.</li><li>For people who use One every day in their work.</li></ul></div>
    <div class="tier"><div class="tn"><b>Plus</b></div><p class="usage"><b>x10 usage vs Basic</b><br>For demanding workflows.</p><h4>Recommended for</h4><div class="who"><i>Team leaders</i><i>Managers</i><i>Admins</i></div><h4>What they do with One</h4><ul><li>Prepare 1:1s and check their team's analytics.</li><li>Approve time off, expenses and shifts with the context already gathered.</li></ul></div>
    <div class="tier"><div class="tn"><b>Max</b></div><p class="usage"><b>x35 usage vs Basic</b><br>For power users.</p><h4>Recommended for</h4><div class="who"><i>Managers</i><i>Admins</i><i>Training Manager</i><i>Finance Manager</i></div><h4>What they do with One</h4><ul><li>Build full courses, process batches of expenses and create reports and routines.</li><li>Designed for intensive use of One in their area.</li></ul></div>`,
    p1: "<b>Your data stays in control</b><p>Everyone only sees what they already could. One follows your exact Factorial permissions: same roles, same access, nothing new exposed.</p>",
    p2: "<b>Nobody can overspend</b><p>Everyone gets a daily allowance based on their personal plan. Reach it, and One simply pauses until tomorrow. No top-ups, no runaway costs.</p>",
    flex: "<b>You choose which personal plan fits each person.</b> Example with 100 people: 5 Max + 15 Plus + 30 Basic + 50 Free.",
    s3t: "What's next",
    s3d: "Every product is becoming an AI product. Scope and dates may change; we'll keep you posted.",
    road: `<div><span>Coming soon</span><b>AI 1:1s</b><p>One prepares and guides every 1:1 with the person's full history.</p></div>
    <div><span>Coming soon</span><b>Gamified courses</b><p>Game mechanics inside LMS courses.</p></div>
    <div><span>Coming soon</span><b>Goals via MCP</b><p>Factorial connects to your tools and updates goals with their data.</p></div>
    <div><span>Coming soon</span><b>Headcount: approvals and budget</b><p>Structured approval flows and planned vs. actual comparison.</p></div>
    <div><span>Coming soon</span><b>Suggested talent pool</b><p>Before publishing, see who in your candidate pool already fits.</p></div>
    <div><span>Coming soon</span><b>WhatsApp in Recruitment</b><p>Messages, a heads-up before the AI call and documents via WhatsApp.</p></div>
    <div><span>Coming soon</span><b>Clock-in inconsistencies</b><p>Fix every clock-in issue at once, without going one by one.</p></div>
    <div class="more"><span>Coming soon</span><b>And much more</b><p>New AI features reach every Factorial product every month.</p></div>`,
    ctaT: "Shall we walk through your full cycle with your own data?",
    ctaD: "We map your headcount, your hiring process and your pay policy, and show you the same flow inside Factorial, with One working at every step.",
    ctaQ: "Not in touch with anyone at Factorial yet?",
    ctaBtn: "Book a demo",
    footer: "Report and conversation examples are illustrative and use fictional data. Some features depend on your plan and One credits. Factorial · October 2026."
  }
};
const UI_ES = {
  video: "Míralo en acción",
    themeAria: "Modo noche",
    partnerQ: "¿Quieres verlo con tus propios datos? Pídeselo a tu partner de Factorial.",
    panelConn: "Conecta One con tus herramientas",
  solves: "Lo que resuelve", tryOne: "Prueba con One",
  center: "El centro", area: "Área", modules: "Módulos", brings: "Lo que aporta", withOne: "Con One", connected: "Conectado con",
  soon: "Lo que viene", soonNote: "El alcance y las fechas pueden cambiar.", close: "Cerrar",
  title: "Factorial · Todo conectado con One"
};

/* Contenido largo de los paneles de One y Analíticas, por idioma */
const LONG = {
  es: {
    one: () => `<p class="lead">Tu agente de IA personal en el trabajo. Conoce tu contexto, actúa en todo Factorial y te ayuda a decidir, sin exponer tus datos.</p>
    <h3>Tres formas de usarlo</h3>
    <ul class="vals"><li><b>Pregunta.</b> Cualquier persona pregunta lo que necesita: políticas, saldos, datos del equipo. One responde con la fuente y solo con lo que su rol permite.</li>
    <li><b>Delega.</b> Dentro de cada producto, One hace el trabajo: redacta la oferta, llama al candidato, prepara la propuesta de subida.</li>
    <li><b>Automatiza.</b> Configuras una rutina una vez y One detecta, decide y actúa. Tú apruebas las excepciones.</li></ul>
    <h3>Cómo trabaja</h3>
    <p class="note">Detecta los desencadenantes en tus datos en tiempo real, los compara con tus políticas e historial, elige la acción o escala a una persona, hace el trabajo dentro de Factorial y registra lo que ha hecho. Cada paso queda visible y revisable.</p>
    <h3>Por qué el dato centralizado lo cambia todo</h3>
    <p class="why" style="color:var(--ink)">Cuantos más módulos conectas, más contexto tiene One. Una IA genérica empieza en blanco; One ya sabe quién es quién, qué dice tu política y qué pasó en el último ciclo.</p>
    <div class="stats"><div class="stat"><b>RGPD</b><span>y Reglamento de IA de la UE, alojado en la UE</span></div><div class="stat"><b>Tus permisos</b><span>mismos roles de Factorial, nada nuevo expuesto</span></div></div>
    <h3>Rutinas: One te trae la respuesta cuando toca</h3>
    ${chatHTML([{ q: "Cada día 25, avísame de las variables de nómina pendientes.", a: "Crea la rutina, revisa lo que falta antes del cierre y te lo envía con quién tiene que actuar." }])}`,
    routines: `<h3>Rutinas con información siempre al día</h3>
  <ul class="rt">
    <li><span class="when">Lunes, 9:00</span><span>Rotación por departamento, con la tendencia explicada<span class="src">Core HR · Analíticas</span></span></li>
    <li><span class="when">Laborables, 18:00</span><span>Personas con menos de 4 fichajes hoy<span class="src">Control horario</span></span></li>
    <li><span class="when">Día 25</span><span>Variables de nómina pendientes antes del cierre<span class="src">Compensación · Turnos · Gastos</span></span></li>
    <li><span class="when">Primer día del mes</span><span>Formaciones obligatorias pendientes por centro<span class="src">Formación y LMS</span></span></li>
    <li><span class="when">Viernes, 12:00</span><span>Candidatos en screening sin feedback del hiring team<span class="src">ATS y selección</span></span></li>
  </ul>
  <p class="disc-note">Cualquier informe de Analíticas se puede programar como rutina desde el chat de One. Las rutinas consumen créditos de One.</p>`,
    ax: { t: "Ejemplos de informes ya conectados",
      c1: ["Rotación y compromiso por departamento", "Core HR + Engagement · rotación (barras) y eNPS (línea)", ["Tiendas","Ops","Ventas","Soporte","Tech"]],
      c2: ["Calidad de contratación por fuente", "Selección + Desempeño · permanencia a 1 año", ["Referidos","LinkedIn","Web empleo","Portales"]],
      c3: ["Coste de plantilla: real frente a previsto", "Plantilla + Revisión salarial + Compensación", ["E","F","M","A","M","J"], "Real", "Previsto"],
      c4: ["Absentismo y horas extra por centro", "Ausencias + Control horario + Turnos", ["Madrid","Barcelona","Valencia","Sevilla"], "Absentismo %", "Horas extra"],
      note: "Datos ficticios, solo para ilustrar qué se puede cruzar.",
      tasksT: "Tareas que One ya hace solo",
      tasks: ["Aprueba los gastos que cumplen la política y te deja solo las excepciones.", "Cubre turnos llamando a quien puede hacerlos según tus reglas.", "Llama a los candidatos que llegan a screening y te deja el informe.", "Resuelve tickets a medias para que quien los gestiona solo apruebe."] }
  },
  en: {
    one: () => `<p class="lead">Your personal AI agent at work. It knows your context, acts across all of Factorial and helps you decide, without exposing your data.</p>
    <h3>Three ways to use it</h3>
    <ul class="vals"><li><b>Ask.</b> Anyone asks what they need: policies, balances, team data. One answers with the source and only with what their role allows.</li>
    <li><b>Delegate.</b> Inside each product, One does the work: drafts the job post, calls the candidate, prepares the raise proposal.</li>
    <li><b>Automate.</b> Set up a routine once and One detects, decides and acts. You approve the exceptions.</li></ul>
    <h3>How it works</h3>
    <p class="note">It detects triggers in your data in real time, compares them with your policies and history, picks the action or escalates to a person, does the work inside Factorial and logs what it did. Every step stays visible and reviewable.</p>
    <h3>Why centralized data changes everything</h3>
    <p class="why" style="color:var(--ink)">The more modules you connect, the more context One has. A generic AI starts blank; One already knows who's who, what your policy says and what happened in the last cycle.</p>
    <div class="stats"><div class="stat"><b>GDPR</b><span>and the EU AI Act, hosted in the EU</span></div><div class="stat"><b>Your permissions</b><span>same Factorial roles, nothing new exposed</span></div></div>
    <h3>Routines: One brings you the answer when it's due</h3>
    ${chatHTML([{ q: "Every 25th, alert me about pending payroll variables.", a: "Creates the routine, reviews what's missing before close and sends it to you with who needs to act." }])}`,
    routines: `<h3>Routines with always up-to-date information</h3>
  <ul class="rt">
    <li><span class="when">Monday, 9:00</span><span>Turnover by department, with the trend explained<span class="src">Core HR · Analytics</span></span></li>
    <li><span class="when">Weekdays, 18:00</span><span>People with fewer than 4 clock-ins today<span class="src">Time tracking</span></span></li>
    <li><span class="when">The 25th</span><span>Pending payroll variables before close<span class="src">Compensation · Shifts · Expenses</span></span></li>
    <li><span class="when">First day of the month</span><span>Pending mandatory training by location<span class="src">Training & LMS</span></span></li>
    <li><span class="when">Friday, 12:00</span><span>Candidates in screening without hiring-team feedback<span class="src">ATS & hiring</span></span></li>
  </ul>
  <p class="disc-note">Any Analytics report can be scheduled as a routine from the One chat. Routines use One credits.</p>`,
    ax: { t: "Examples of reports already connected",
      c1: ["Turnover and engagement by department", "Core HR + Engagement · turnover (bars) and eNPS (line)", ["Stores","Ops","Sales","Support","Tech"]],
      c2: ["Quality of hire by source", "Recruitment + Performance · 1-year retention", ["Referrals","LinkedIn","Careers site","Job boards"]],
      c3: ["Headcount cost: actual vs. planned", "Headcount + Salary review + Compensation", ["J","F","M","A","M","J"], "Actual", "Planned"],
      c4: ["Absenteeism and overtime by location", "Time off + Time tracking + Shifts", ["Madrid","Barcelona","Valencia","Seville"], "Absenteeism %", "Overtime"],
      note: "Fictional data, only to illustrate what can be crossed.",
      tasksT: "Tasks One already does on its own",
      tasks: ["Approves expenses that meet the policy and leaves you only the exceptions.", "Covers shifts by calling whoever can take them, following your rules.", "Calls candidates who reach screening and leaves you the report.", "Half-solves tickets so whoever handles them only approves."] }
  }
};

/* ---------- ALEMÁN ---------- */
const DE = {
  HUBS: {
    talento: { name: "Talent", lead: "Von der geplanten Stelle bis zur Gehaltserhöhung, die Sie vertreten können. Jede Talententscheidung baut auf der vorherigen auf, nicht bei null.", one: "Je mehr Talent-Produkte Sie nutzen, desto mehr Kontext hat One: Es liest Beurteilungen, Bewerbungen, Kurse und Umfragen gleichzeitig." },
    tiempo: { name: "Zeit", lead: "Zeiterfassung, Schichten und Abwesenheiten im selben Kalender, jede Stunde bereit für Lohnabrechnung und Projekte.", one: "One deckt Schichten ab, beantwortet Fragen zu Salden und erkennt Stempelprobleme, solange sie noch klein sind." },
    finanzas: { name: "Finanzen", lead: "HR und Finanzen arbeiten mit denselben Zahlen: Personalbestand, Ausgaben, Beschaffung, Projekte und Budget.", one: "One genehmigt, was der Richtlinie entspricht, und überlässt Ihnen nur die Ausnahmen." },
    core: { name: "Core", lead: "Das Fundament: Mitarbeitende, Dokumente, Richtlinien und die App jedes Einzelnen. Was hier erfasst wird, nutzt jedes Modul.", one: "One kennt Ihre Richtlinien, antwortet mit Quellenangabe und erledigt Anfragen, bevor sie bei einer Person landen." },
    it: { name: "IT", lead: "Geräte, Software und Inventar, verknüpft mit der Person, die sie nutzt, vom ersten bis zum letzten Tag.", one: "One untersucht das Ticket, prüft den Bestand und bereitet den Einkauf vor, sodass nur noch eine Person freigeben muss." },
    nomina: { name: "Lohn & Gehalt", lead: "Jede Änderung, die das Gehalt betrifft, erreicht die Lohnabrechnung geprüft, von der Zeiterfassung bis zur Gehaltserhöhung.", one: "One erkennt offene Variablen und alles, was nicht stimmt, bevor die Abrechnung berechnet wird." }
  },
  M: {
    desempeno: { name: "Performance & Ziele",
      lead: "Beurteilungen, Ziele und Feedback das ganze Jahr über, nicht nur im Jahresgespräch.",
      value: ["180°- und 360°-Beurteilungen mit automatisierten Zyklen, Erinnerungen und herunterladbaren Vereinbarungen.", "Individuelle und Teamziele sowie OKRs, mit kontinuierlichem Feedback, damit Sie mit Daten ins Gespräch gehen.", "9-Box und Talentanalysen, um zu sehen, wer das meiste Potenzial hat und wer Unterstützung braucht.", "Bonuspläne: Legen Sie Auszahlungsregeln fest, die an Ziele und Ergebnisse gekoppelt sind. Factorial berechnet jeden Bonus und zahlt ihn automatisch über die Lohnabrechnung aus."],
      one: [{ q: "Wer in meinem Team zeigt Warnsignale?", a: "Analysiert Selbstbeurteilungen und Feedback, fasst jeden Fall zusammen und erklärt, warum er auffällt." }],
      why: "Jedes Ergebnis fließt in die Schulungen ein, die Sie zuweisen, und in die Gehaltserhöhung, die Sie vorschlagen. Recruiting nutzt die letzte Beurteilung, um zu messen, welche Quellen Leute bringen, die bleiben und gute Leistung zeigen.",
      soon: ["Ziele über MCP verbunden: Factorial aktualisiert Ziele mit Daten aus Ihren anderen Tools."] },
    formacion: { name: "Schulungen & LMS",
      lead: "Aufgezeichnete Schulungen und interaktive Kurse direkt in Factorial, verknüpft mit der Performance.",
      value: ["Katalog, Termine und Teilnahme; Pflichtschulungen mit auditfester Nachverfolgbarkeit.", "LMS: Kurse mit Videos, Quizzen und Tests, automatischem Fortschritt und Zertifikaten zum Abschluss.", "Lohnkosten jeder Schulung werden automatisch berechnet."],
      one: [{ q: "Erstelle einen Onboarding-Kurs für das Store-Team.", a: "Ein strukturierter Kurs mit Modulen und Quizzen, in Minuten. Sie prüfen ihn und veröffentlichen ihn." }],
      why: "Direkt aus der Beurteilung, mit einem Klick: Weisen Sie die Schulung zu, die jede Kompetenzlücke schließt, und messen Sie ihre Wirkung im nächsten Zyklus.",
      stat: { n: "94%", t: "der Mitarbeitenden würden länger in einem Unternehmen bleiben, das in ihre Entwicklung investiert (LinkedIn Workplace Learning Report, 2023)" } },
    engagement: { name: "Engagement",
      lead: "Hören Sie Ihrem Team zu, ohne ein weiteres Formular zu verschicken: tägliches Stimmungsbild, Umfragen, eNPS und KI-1:1s.",
      value: ["Team-Puls beim Einstempeln: Check-ins ohne Umfragemüdigkeit und Hinweise an die richtige Führungskraft.", "Automatisierte Umfragen und eNPS beim Onboarding, beim Austritt und bei jedem Meilenstein.", "KI-1:1-Gespräche: One bereitet jedes 1:1 mit Zielen, Performance und Stimmung vor."],
      one: [{ q: "Bereite das 1:1 mit Laura für morgen vor.", a: "Sammelt ihre Ziele, die letzte Beurteilung, den aktuellen Puls und was in früheren 1:1s besprochen wurde." }],
      why: "Gute Leistung heißt nicht immer Engagement. Mit dem Puls, verknüpft mit Zeiterfassung und Performance-Kontext, sieht One das Gesamtbild jeder Person.",
      stat: { n: "40–60%", t: "weniger manueller Verwaltungsaufwand mit automatisierten Beurteilungen, 1:1s und Umfragen" } },
    comunidades: { name: "Communities",
      lead: "Räume, in denen sich Ihre Mitarbeitenden treffen, austauschen und einander anerkennen, jenseits des Organigramms.",
      value: ["Communities nach Interesse, Standort, Projekt oder Team, offen oder nur auf Einladung.", "Beiträge, Anerkennung und Feiern von Meilensteinen direkt in der App.", "Bringt Büro-, Remote- und Filialmitarbeitende in einem Raum zusammen."],
      one: [{ q: "Welche Communities empfiehlst du mir, jetzt wo ich neu dabei bin?", a: "Schlägt passende Communities für Team, Standort und Interessen der Person vor, basierend auf ihrem Profil." }],
      why: "Communities basieren auf denselben Team-, Standort- und Personendaten, sodass jede neue Person vom ersten Tag an ihren Platz findet." },
    comunicaciones: { name: "Kommunikation",
      lead: "Ankündigungen für das ganze Unternehmen oder bestimmte Teams, dort, wo Ihre Mitarbeitenden ohnehin jeden Tag arbeiten.",
      value: ["Veröffentlichen Sie für das ganze Unternehmen oder für bestimmte Teams und Standorte.", "Erreicht alle über die App, auch Menschen, die nicht am Computer sitzen.", "Ankündigungen stehen direkt neben den Richtlinien und Dokumenten, auf die sie sich beziehen."],
      one: [{ q: "Entwirf die Ankündigung zur neuen Sommerarbeitszeit auf Deutsch und Englisch.", a: "Entwirft sie auf Basis Ihrer Arbeitszeitrichtlinie und übersetzt sie, bereit zur Prüfung." }],
      why: "Die Zielgruppen kommen aus denselben Team-, Standort- und Rollendaten, die der Rest von Factorial nutzt." },
    ats: { name: "Recruiting & ATS",
      lead: "Ein ATS, das mit Ihnen plant, vorauswählt und entscheidet, von der genehmigten Stelle bis zum unterschriebenen Angebot.",
      value: ["Einstellungsplan: Jede in der Personalplanung genehmigte Stelle kommt als offene Position mit Verantwortlichen, Frist und Status an.", "KI-Bericht pro Bewerbung und KI-Anrufe in der Sprache der Bewerbenden, mit Transkript und grünem, gelbem oder rotem Ergebnis.", "Unbegrenzt viele Stellen, Berechtigungen pro Phase, Videointerviews mit One und Analysen mit einem Jahr Retention."],
      one: [
        { q: "Ruf alle Bewerbenden an, die die Screening-Phase erreichen.", a: "Ein Anruf in ihrer Sprache, angekündigt, mit Einwilligung und aufgezeichnet. Liefert Transkript, Bericht und empfohlenen nächsten Schritt. Eine Person entscheidet." },
        { q: "Erstelle die Stellenanzeige für einen Senior Product Designer in München.", a: "Entwirft die Anzeige aus dem Gespräch und veröffentlicht sie auf Ihrer Karriereseite und über 250 Jobbörsen." }
      ],
      why: "Die Stelle entsteht genehmigt und budgetiert; wer unterschreibt, startet mit allen Daten, ohne etwas neu einzutippen; und die Analysen verknüpfen die Recruiting-Quelle mit der Leistungsbeurteilung.",
      stats: [{ n: "70%", t: "weniger Time-to-Hire mit KI-Erstscreening" }, { n: "+25%", t: "Personalwachstum mit demselben Recruiting-Team" }],
      soon: ["Vorgeschlagene Bewerbende aus dem Talentpool (demnächst).", "WhatsApp im Recruiting und Karriereseiten pro Gesellschaft (demnächst).", "Kulturelles Assessment (demnächst)."] },
    canal: { name: "Sichere Meldestelle",
      lead: "Ein Kanal, über den jeder Missstände vertraulich melden kann, auch anonym.",
      value: ["Vertrauliche Meldungen, auf Wunsch anonym.", "Fallverfolgung mit Zugriff nur für die zuständigen Personen.", "Hilft Ihnen, die Vorgaben zum Hinweisgeberschutz einzuhalten."],
      oneNote: "One folgt exakt den Berechtigungen von Factorial: Fälle sind nur für die Personen sichtbar, die sie bearbeiten, für niemanden sonst.",
      why: "Sie lebt in derselben App wie die übrigen Werkzeuge der Mitarbeitenden, sodass niemand suchen muss, wo man meldet." },
    control: { name: "Zeiterfassung",
      lead: "Stempeln per Smartphone oder Computer, mit stets aktueller Arbeitszeitaufzeichnung.",
      value: ["Stempeln über App oder Web, mit berechneten Überstunden und Salden.", "Unstimmigkeiten sind für die Führungskraft sichtbar, bevor sie die Lohnabrechnung erreichen.", "Auf Projekte gebuchte Stunden fließen in die tatsächlichen Kosten jedes Projekts ein."],
      one: [{ q: "Schick mir jeden Werktag um 18 Uhr, wer heute weniger als 4 Stempelungen hat.", a: "Erstellt eine Routine, die täglich die Stempelungen prüft und sie Ihnen per E-Mail schickt." }],
      why: "Dieselbe Stempelung dient der Lohnabrechnung, der Projektkalkulation und dem Team-Puls, ohne sie doppelt zu erfassen.",
      soon: ["Unstimmigkeiten bei der Zeiterfassung: alle auf einmal beheben, statt einzeln."] },
    turnos: { name: "Schichten",
      lead: "Dienstpläne, die Ihre Regeln einhalten, und Lücken, die ohne Telefonliste gefüllt werden.",
      value: ["Automatische Planung mit eigenen Regeln: Ruhetage, Arbeitszeiten, Standorte, Rollen und Skills werden von selbst berücksichtigt.", "Bereitschaftsdienste werden zusammen mit allen anderen Schichten geplant und erfasst.", "Verbunden mit dem Vertrag jeder Person im Mitarbeiterprofil: Stunden, Arbeitszeit und Bedingungen fließen in die Planung ein.", "Tatsächliche Schichten erreichen die Lohnabrechnung, ohne veraltete Schichten in der Berechnung."],
      one: [{ q: "Finde jemanden, der heute Marías Schicht übernimmt.", a: "Prüft Ruhetage, Rollen, Qualifikationen, Arbeitszeit und Standort, ruft passende Personen nacheinander an und informiert die Führungskraft, sobald die Schicht besetzt ist." }],
      why: "Eine Abwesenheit öffnet die Lücke, One füllt sie, und die neue Schicht erreicht Zeiterfassung und Lohnvariablen. Jede Regel eingehalten und jeder Anruf protokolliert." },
    ausencias: { name: "Abwesenheiten",
      lead: "Urlaub, Krankheit und Freistellungen mit aktuellen Salden und Genehmigung in zwei Klicks.",
      value: ["Abwesenheitsrichtlinien nach Team, Standort oder Tarifvertrag.", "Gemeinsamer Kalender, um vor der Genehmigung zu sehen, wer fehlt.", "Abwesenheiten und Krankmeldungen mit der Lohnabrechnung synchronisiert."],
      one: [{ q: "Wie viele Urlaubstage habe ich noch?", a: "Antwortet mit dem Saldo dieser Person und der geltenden Richtlinie. Jeder sieht nur seine eigenen Daten." }],
      why: "Eine Krankmeldung bleibt nicht im Kalender hängen: Sie öffnet eine Lücke in den Schichten, passt die Stempelungen an und erreicht die Lohnabrechnung als Variable." },
    plantilla: { name: "Personalplanung",
      lead: "HR und Finanzen sehen vom ersten Tag an dieselben Zahlen. Schluss mit fünf Versionen derselben Tabelle.",
      value: ["Führungskräfte schlagen Stellen mit Rolle, Level, Gehaltsband und Datum vor, verknüpft mit dem Jobkatalog.", "HR und Finanzen prüfen eine einzige Version, mit Protokoll, wer wann was entschieden hat.", "Genehmigte Stellen werden automatisch im Recruiting eröffnet: Plan und Umsetzung stimmen immer überein."],
      one: [{ q: "Erstelle unseren Personalplan 2027 nach unseren Vorgaben.", a: "Schlägt Rollen, Level und Kosten zur Prüfung vor." }],
      why: "Die Stelle, die Sie genehmigen, ist die Stelle, die Sie ausschreiben, und jede abgeschlossene Gehaltserhöhung aktualisiert die Kostenprognose für den nächsten Plan.",
      soon: ["Strukturierte Genehmigungsabläufe und Verknüpfung mit dem Budget.", "Vergleich von geplanten und tatsächlichen Einstellungen."] },
    proyectos: { name: "Projektmanagement",
      lead: "Sie wissen, ob jedes Projekt profitabel ist, während es läuft, nicht erst beim Abschluss.",
      value: ["Stunden direkt über das Stempel-Widget gebucht, keine parallelen Stundenzettel.", "Personalkosten, Fixkosten und Ausgaben im Vergleich zum Budget, in Echtzeit.", "Vom Angebot zum Projekt und vom Projekt zur Rechnung, mit bereits geladenen Kundendaten."],
      one: [{ q: "Welche Projekte liegen diesen Monat über dem Budget?", a: "Verknüpft gebuchte Stunden, Personalkosten und Ausgaben und erklärt, wo jedes Projekt abweicht." }],
      why: "Die Kosten einer Stunde stammen vom tatsächlichen Gehalt der Person, und die Stunde kommt aus der Zeiterfassung: Niemand kopiert Daten zwischen Tools." },
    fpa: { name: "Financial Planning",
      lead: "Budgets und Prognosen mit den realen Kosten, die bereits in Factorial liegen.",
      value: ["Budgets nach Abteilung oder Kostenstelle.", "Ist vs. Plan mit Daten zu Personalbestand, Lohnabrechnung, Ausgaben, Beschaffung und Projekten.", "Eine einzige Datenbasis für HR, Finanzen und Geschäftsleitung."],
      one: [{ q: "Wie stehen wir in diesem Quartal zum Personalbudget?", a: "Vergleicht die tatsächlichen Lohnkosten mit dem Plan und markiert Abweichungen." }],
      why: "Das Budget füllt sich von selbst: Jede Einstellung, Gehaltserhöhung, Ausgabe oder Bestellung ist bereits in ihrem Modul erfasst." },
    gastos: { name: "Ausgaben",
      lead: "Vom Belegstapel zum abgeschlossenen Monat, mit einer einzigen Nachricht.",
      value: ["Belege hochladen, und die Felder füllen sich von selbst.", "Jede Ausgabe wird gegen die Richtlinie geprüft: Konforme Ausgaben werden sofort genehmigt.", "Kartenabgleich und saubere Daten für den Monatsabschluss."],
      one: [{ q: "Hier sind die Belege von meiner Geschäftsreise. (lädt 5 auf einmal hoch)", a: "Liest jeden Beleg, bereitet die Ausgaben vor, gleicht die Karte ab und prüft Richtlinie und Berechtigungen. Nur Ausnahmen warten auf eine Person." }],
      why: "Die genehmigte Ausgabe erreicht die Lohnabrechnung, wenn sie erstattet werden muss, und das Projekt, wenn sie abrechenbar ist." },
    compras: { name: "Beschaffung",
      lead: "Bestellanfragen, Genehmigungen und Lieferanten in einem einzigen Ablauf.",
      value: ["Anfragen mit Genehmigung nach Betrag und Team.", "Jeder Einkauf ist mit seinem Budget und der anfragenden Person verknüpft.", "Verbunden mit Inventar und Software, damit Sie wissen, was für wen gekauft wird."],
      one: [{ q: "Mein Laptop ist gerade kaputtgegangen. Ich brauche einen neuen.", a: "Öffnet das Ticket, prüft, dass nichts auf Lager ist, findet einen im Marketplace und kauft ihn, sobald eine Person freigibt." }],
      why: "Der Einkauf beginnt in einem Ticket, läuft über das Budget und landet im Inventar der Person." },
    revision: { name: "Gehaltsrunde",
      lead: "Jede Gehaltserhöhung begründet, budgetiert und vertretbar.",
      value: ["Richtlinien einmal festgelegt: Berechtigung, Spannen und Genehmigende. Jeder Vorschlag wird automatisch geprüft.", "Jede Führungskraft sieht nur ihr Team, mit bereits markierten Abweichungen von der Richtlinie, und das Budget wird in Echtzeit verteilt.", "Die genehmigte Erhöhung fließt in den Vertrag und die Personalprognose, ohne Neueingabe."],
      one: [{ q: "Schlage Gehaltserhöhungen für mein Team nach unserer Richtlinie vor.", a: "Zahlen und Begründung, bereits gegen das Budget geprüft. Sie genehmigen." }],
      why: "Sie entscheiden, wie viele Beurteilungszyklen für die Berechtigung zählen: Die Erhöhung spiegelt einen Trend wider, keinen Einzelwert. Und sie erreicht die Lohnabrechnung als geprüfte Variable." },
    politicas: { name: "Richtlinien",
      lead: "Ihre Regeln, einmal formuliert und in jedem Modul angewendet.",
      value: ["Richtlinien zu Abwesenheiten, Ausgaben, Arbeitszeiten und mehr, angewendet von den Modulen, die sie nutzen.", "Handbuch: Die Mitarbeitenden fragen, und One antwortet mit Quellenangabe.", "Wenn One etwas nicht weiß, sagt es das."],
      one: [{ q: "Kann ich zwei Wochen aus einem anderen Land remote arbeiten?", a: "Antwortet auf Basis Ihrer Richtlinie, zeigt die Quelle und legt nur offen, was diese Person sehen darf." }],
      why: "Routinefragen landen nie im Postfach der Führungskraft, und dieselben Kriterien genehmigen Ausgaben oder Abwesenheiten." },
    portal: { name: "Startseite",
      lead: "Die App, in der jeder seine eigenen Informationen sieht und anfragt, was er braucht.",
      value: ["Persönliche Daten, Gehaltsabrechnungen, Dokumente und Salden in einer App.", "Abwesenheiten, Ausgaben und Tickets vom Smartphone.", "One ist integriert, um zu fragen, zu beantragen und jeden Antrag zu verfolgen."],
      oneNote: "One ist für die gesamte Belegschaft enthalten, ohne Schulung. Jeder fragt, was er braucht, und sieht nur, was seine Rolle erlaubt.",
      why: "Alles, was Mitarbeitende hier tun, geht direkt ins richtige Modul, ohne Formulare oder E-Mails dazwischen." },
    onoff: { name: "On-/Offboarding",
      lead: "Eintritte und Austritte als ein Ablauf, mit Aufgaben für HR, IT und die Führungskraft.",
      value: ["Die neue Person kommt mit allen Daten aus dem Recruiting.", "Dokumente, Unterschrift, Gerät, Zugänge und Willkommensschulung im selben Ablauf.", "Beim Austritt werden Zugänge und Geräte zurückgeholt, ohne dass es am Gedächtnis von jemandem hängt."],
      one: [{ q: "Bereite Martas Onboarding für Montag vor.", a: "Startet die Aufgaben, bereitet Dokumente zur Unterschrift vor, bestellt ihren Laptop und weist den Willkommenskurs zu." }],
      why: "Hier treffen die meisten Module aufeinander: Sind die Daten zentral, läuft der erste Tag von allein." },
    documentos: { name: "Dokumentenmanagement",
      lead: "Verträge, Gehaltsabrechnungen und Bescheinigungen jeder Person, mit Berechtigungen und Vorlagen.",
      value: ["Ordner pro Person und pro Unternehmen, mit rollenbasierten Berechtigungen.", "Vorlagen, die sich mit den Daten der Mitarbeitenden füllen.", "One liest jede Datei und extrahiert, was wichtig ist."],
      one: [{ q: "Welche befristeten Verträge laufen in diesem Quartal aus?", a: "Gleicht mit den Vertragsdaten ab und liefert die Liste mit Terminen und Verantwortlichen." }],
      why: "Eine genehmigte Gehaltsänderung aktualisiert den Vertrag; eine Einstellung erzeugt ihre Dokumente. Niemand erstellt sie neu." },
    firma: { name: "e-Unterschrift",
      lead: "Zur Unterschrift senden, ohne Factorial zu verlassen, und das Ergebnis dort ablegen, wo es hingehört.",
      value: ["Verträge, Anhänge und Richtlinien von jedem Gerät aus unterschreiben.", "Angebote an Bewerbende von überall unterschrieben, und Sie wissen sofort, wann sie unterzeichnet sind.", "Das unterschriebene Dokument bleibt im Profil der Person."],
      oneNote: "One bereitet Dokumente aus Ihren Vorlagen vor, sodass Sie sie nur prüfen und zur Unterschrift senden müssen.",
      why: "Keine Daten neu eintippen, wenn jemand unterschreibt: Der Status erreicht den Prozess, der ihn angefordert hat." },
    analiticas: { name: "Analysen & Berichte",
      lead: "Alle Daten von Factorial an einem Ort, und One, um sie in natürlicher Sprache abzufragen.",
      value: ["Berichte, die Module auf denselben Daten verknüpfen: Personal, Zeit, Talent, Lohnabrechnung und Finanzen.", "Bitten Sie One, einen Bericht zu erstellen, Widgets hinzuzufügen, zu filtern oder einen Trend zu erklären, und speichern Sie ihn.", "Jeder sieht nur, was seine Berechtigungen erlauben."],
      one: [{ q: "Schick mir jeden Montag die Fluktuation nach Abteilung.", a: "Erstellt den Bericht, plant ihn als Routine und erklärt bei jedem Versand den Trend." }],
      why: "Jedes Modul fließt hier zusammen. Weil alle Daten in Factorial liegen, wird ein Bericht nicht gebaut, sondern angefragt. Kein Export, kein Zusammenführen von Tabellen und kein Warten auf die Finanzabteilung." },
    tickets: { name: "Tickets",
      lead: "Anfragen, die halb gelöst ankommen, bevor eine Person sie anfasst.",
      value: ["Im Chat mit One eröffnet und in Factorial verfolgt.", "Automatisch an das richtige Team geleitet: IT, HR, Finanzen.", "One recherchiert und übersetzt jede Nachricht in beide Richtungen."],
      one: [{ q: "Hey One, mein Laptop ist gerade kaputtgegangen. Ich brauche einen neuen.", a: "Erstellt das Ticket, leitet es an die IT, liest den Kontext, sieht, dass kein Laptop auf Lager ist, findet einen im Marketplace und entwirft den Plan. Eine Person gibt frei, er wird gekauft und die IT liefert ihn aus." }],
      why: "One recherchiert über Verträge, IT-Assets und Mitarbeiterprofile hinweg: Die Lösung wird mit Ihren Richtlinien entworfen, und wer sie umsetzt, muss nur noch freigeben." },
    mdm: { name: "Mobilgeräteverwaltung",
      lead: "Konfigurieren und schützen Sie Firmengeräte an derselben Stelle, an der Sie Mitarbeitende verwalten.",
      value: ["Jedes Gerät ist mit der Person verknüpft, die es nutzt.", "Geräteanmeldung und -entfernung im Rahmen von Onboarding und Offboarding.", "Sicherheitsstatus der Geräteflotte für die IT sichtbar."],
      oneNote: "One hält Sie compliant: Es prüft gegen Richtlinien, behebt Unstimmigkeiten und verfolgt Zugriffe und Risiken.",
      why: "Wenn jemand eintritt oder geht, ist die IT nicht auf eine E-Mail der HR angewiesen: Die Änderung steht bereits in Factorial." },
    inventario: { name: "Inventar",
      lead: "Welche Ausstattung jede Person hat, mit Historie.",
      value: ["Ausgabe und Rückgabe von Geräten pro Person.", "In Onboarding und Offboarding integriert.", "Bestand vor dem Kauf sichtbar."],
      oneNote: "Wenn ein Ticket eingeht, prüft One das Inventar, bevor es einen Kauf vorschlägt.",
      why: "Das Inventar weiß, wer wer ist, weil es die Personendaten mit Core teilt." },
    software: { name: "SaaS-Management",
      lead: "Welche Tools das Unternehmen nutzt, wer Zugriff hat und was sie kosten.",
      value: ["Inventar von Apps und Lizenzen.", "Zugänge werden beim Ein- und Austritt von Personen vergeben und entzogen.", "Lizenzkosten für die Finanzabteilung sichtbar."],
      oneNote: "One gleicht Lizenzen mit aktiven Personen ab, um Zugänge zu finden, die es nicht mehr geben sollte.",
      why: "Lizenzen, Personen und Budget an einem Ort: Niemand zahlt für den Account von jemandem, der längst gegangen ist." },
    marketplace: { name: "Marketplace",
      lead: "Ein Katalog, um Geräte und Ausstattung zu bestellen, ohne Lieferanten zu suchen.",
      value: ["Gerätekatalog, sofort bestellbar.", "Einkäufe mit Genehmigung und Lieferung an alle, die es brauchen.", "Verbunden mit Tickets und Inventar."],
      oneNote: "Ist nichts auf Lager, findet One das Gerät im Marketplace und hält den Einkauf zur Freigabe bereit.",
      why: "Vom Ticket bis zur Lieferung, ohne das Tool zu wechseln." },
    seguridad: { name: "Sicherheit (EDR)",
      tag: "Add-on",
      lead: "Virenschutz und Bedrohungserkennung auf jedem Gerät, verwaltet in Factorial.",
      value: ["Endpoint-Schutz mit Erkennung und Reaktion (EDR/MDR) von SentinelOne.", "Läuft auf dem MDM: Schutz wird angewendet, nicht nur geprüft.", "Geht ein Gerät verloren, prüft es vor dem Löschen auf verdächtige Aktivität."],
      oneNote: "One meldet ungeschützte Geräte und bereitet die Reaktion vor, sodass die IT nur noch freigibt.",
      why: "Schützt dieselben Geräte und Personen, die das MDM verwaltet: Bei jedem Eintritt und Austritt zieht der Schutz mit." },
    cumplimiento: { name: "Compliance",
      tag: "Add-on",
      lead: "ISO 27001, NIS2 und ENS mit den Nachweisen, die bereits in Factorial liegen.",
      value: ["Belegschaft, Rollen und Verträge mit Vertraulichkeitsklausel aus Core HR.", "Unterschriebene Sicherheitsrichtlinien und abgeschlossene Awareness-Schulungen.", "Verschlüsselung, Zugriffsprüfungen, Asset-Register und Vorfälle aus den IT-Produkten."],
      oneNote: "One sammelt die Nachweise und bereitet das Paket für den Auditor vor.",
      why: "Liest Nachweise aus fast allen Factorial-Modulen, was ein isoliertes Compliance-Tool nicht kann." },
    beneficios: { name: "Benefits",
      lead: "Flexible Vergütung, die Ihr Team mit einer Karte nutzt und die HR ohne Papierkram verwaltet.",
      value: ["Essen, Verkehr, Kinderbetreuung, Krankenversicherung, Weiterbildung und Wellhub.", "Visa-Karte im Wallet des Smartphones, mit Saldo und Transaktionen in der App.", "Budgets nach Kategorie, Steuerkonformität und direkter Export in die Lohnabrechnung."],
      one: [{ q: "Wie viel Essenszuschuss habe ich diesen Monat noch?", a: "Antwortet mit dem Saldo dieser Person, im Rahmen ihrer Berechtigungen." }, { q: "Wie viel Steuern habe ich 2026 bisher gespart?", a: "Berechnet die bisherige Steuerersparnis dieser Person durch flexible Benefits in diesem Jahr, aufgeschlüsselt nach Kategorie." }],
      why: "Was jede Person nutzt, erreicht die Lohnabrechnung als Gehaltsbestandteil, ohne dass es jemand von Hand zusammenstellt." },
    compensacion: { name: "Vergütung",
      lead: "Jede Änderung erreicht die Lohnabrechnung bereits geprüft.",
      value: ["Deckt den gesamten Abrechnungszyklus ab: Vorbereitung (inklusive Mitarbeiter-Updates), Nachbereitung (Ergebnisse aus Ihrer Lohnsoftware) und darüber hinaus, mit Financial Planning, Verteilung der Gehaltsabrechnungen über das Dokumentenmanagement und SEPA-Zahlungen mit Treasury.", "Mitarbeiter-Updates bereit für die Abrechnung: Ein- und Austritte, Vertrags- und Gehaltsänderungen, Abwesenheiten und Boni, sofort sichtbar.", "Warnungen vor der Berechnung: offene Variablen, nicht genehmigte Boni oder veraltete Schichten.", "Jede Abrechnung verglichen mit genehmigten Variablen und Verträgen, plus Ist- vs. Plankosten.", "Bonuspläne, verbunden mit Performance: Auszahlungsregeln, automatische Berechnung jedes Bonus und direkte Auszahlung über die Lohnabrechnung."],
      one: [{ q: "Was fehlt noch, bevor wir die Lohnabrechnung dieses Monats abschließen?", a: "Prüft offene Variablen und alles, was nicht stimmt, und sagt Ihnen, wer handeln muss." }],
      why: "Hier fließt alles zusammen: Stempelungen, Schichten, Abwesenheiten, Ausgaben und Gehaltserhöhungen. Wenn sie verbunden entstehen, kommen sie geprüft an.",
      stat: { n: "40 h", t: "pro Monat sparen Sie, wenn Sie Einstellungen, Austritte, Gehaltsänderungen, Abwesenheiten und Variablen mit Ihrem Lohnabrechnungsanbieter synchronisieren" } },
    integraciones: { name: "Integrationen",
      lead: "Factorial verbunden mit Ihrem Lohnabrechnungsanbieter und dem Rest Ihrer Tools.",
      value: ["Kompatibel mit Ihrer Lohnsoftware und mit Factorial Professionals für Steuerberatungs- und Lohnbüros.", "API zur Anbindung an Ihr ERP."],
      oneNote: "Wenn die Daten in Factorial liegen oder in einem Tool, das Sie anbinden, können Sie mit One fragen, delegieren oder automatisieren.",
      why: "Integrieren heißt nicht kopieren: Die Änderung wird einmal erfasst und synchronisiert." },
    anticipo: { name: "Gehaltsvorschuss",
      lead: "Ihr Team kann einen Teil des bereits verdienten Gehalts schon vor Monatsende anfordern.",
      value: ["Anfrage aus der App, ohne Papierkram.", "Regeln und Limits, die Sie festlegen.", "Der Vorschuss wird in der Lohnabrechnung ohne manuelle Anpassungen berücksichtigt."],
      oneNote: "Die Mitarbeitenden fragen One, wie viel sie anfordern können und wie es funktioniert, gemäß Ihrer Richtlinie.",
      why: "Weil Gehalt und geleistete Tage bereits in Factorial liegen, wird der verfügbare Betrag nicht von Hand berechnet." }
  },
  STORIES: [
    { t: "Eine Neueinstellung", d: "Die Stelle wird einmal genehmigt, der Rest folgt von allein.", steps: ["Die Stelle wird mit ihrem Gehaltsband genehmigt.", "Sie wird automatisch als offene Position eröffnet; One wählt vor und ruft an.", "Das Angebot wird vom Smartphone aus unterschrieben.", "Die Person startet mit allen Daten, ohne Neueingabe.", "Der Laptop ist bereits zugewiesen.", "Sie erhält den Willkommenskurs.", "Die Einstellung erreicht die Lohnabrechnung geprüft."] },
    { t: "Eine kurzfristige Krankmeldung", d: "Von der Meldung bis zur Lohnabrechnung, ohne dass jemand Daten kopiert.", steps: ["Jemand meldet sich krank.", "One findet, wer einspringen kann, und ruft an.", "Die neue Schicht wird wie jede andere gestempelt.", "Die Abwesenheit und die Schichtänderung kommen als Variablen an.", "Die Fehlzeiten pro Standort aktualisieren sich von selbst."] },
    { t: "Ein Beurteilungszyklus", d: "Die Gehaltserhöhung ergibt sich aus der Beurteilung und fließt zurück in den Plan.", steps: ["Die Beurteilung zeigt Ergebnisse und Lücken.", "Schulungen werden mit einem Klick zugewiesen.", "One schlägt die Gehaltserhöhung im Rahmen der Richtlinie vor.", "Die Gehaltserhöhung erreicht die Lohnabrechnung geprüft.", "Die Kostenprognose für den nächsten Plan wird aktualisiert."] },
    { t: "Ein kaputter Laptop", d: "Eine Nachricht an One und eine Freigabe.", steps: ["Sie sagen es One, und es öffnet das Ticket.", "One prüft, dass nichts auf Lager ist.", "Es findet ein Gerät, das der Richtlinie entspricht.", "Eine Person gibt frei, es wird gekauft und die IT liefert es aus."] }
  ],
  UI: {
    sbMap: "One-Karte",
    sbConn: "Konnektoren",
    sbPlans: "Pläne",
    sbDeck: "Pitch Deck",
    sbLegal: "Recht & Compliance",
    video: "So sieht es aus",
    navConn: "Konnektoren",
    connE: "One · Konnektoren",
    connT: "Ihr Unternehmen arbeitet nicht mit nur einem Tool. One auch nicht.",
    connD: "Verbinden Sie die Apps, die Ihr Team bereits nutzt, wie Slack, HubSpot, Notion oder Jira. One kombiniert sie mit Ihren Factorial-Daten, immer im Rahmen der Berechtigungen jeder Person.",
    connBtn: "Zum Konnektoren-Katalog",
    connNote: "Katalog auf Englisch",
    themeAria: "Nachtmodus",
    partnerQ: "Möchten Sie es mit Ihren eigenen Daten sehen? Sprechen Sie Ihren Factorial-Partner an.",
    panelConn: "One mit Ihren Tools verbinden",
    navMap: "Karte", navStories: "Beispiele", navWhy: "KI für Unternehmen", navPlans: "One-Pläne", navFacts: "Zahlen", navNext: "Was kommt", navAria: "Abschnitte",
    allin: "All in One",
    solves: "Was es löst", tryOne: "One ausprobieren",
    center: "Der Kern", area: "Bereich", modules: "Module", brings: "Was es bringt", withOne: "Mit One", connected: "Verbunden mit",
    soon: "Was als Nächstes kommt", soonNote: "Umfang und Termine können sich ändern.", close: "Schließen",
    title: "Factorial · Alles verbunden mit One",
    h1: "One kennt Ihr Unternehmen bereits",
    sub: "Jedes Factorial-Modul teilt dieselben Daten. One arbeitet auf allen von ihnen, mit Ihren Berechtigungen und Ihren Richtlinien.",
    hint: "Tippen Sie auf eine Bubble, um zu sehen, was sie bringt, was One damit macht und womit sie verbunden ist.",
    cue: "Weiter scrollen", cueAria: "Weiter scrollen", oneAria: "Sehen Sie, was One ist", panelAria: "Modul-Details",
    s1t: "Dieselben Daten, durchgängig",
    s1d: "Wenn jedes Modul in einem anderen Tool liegt, beginnt jede Entscheidung bei null. In Factorial nutzt der nächste Schritt, was einmal erfasst wurde. Tippen Sie auf einen Schritt, um ihn auf der Map zu öffnen.",
    s2t: "Ihre Teams nutzen bereits KI. Machen Sie sie zu Ihrer.",
    s2d: "Nicht die Technologie ändert sich, sondern der Kontext. Und bei Personendaten ist Vertrauen unverhandelbar.",
    cmpHead: `<tr><th></th><th>Generische KI</th><th>One</th></tr>`,
    cmpBody: `<tr><td>Kontext</td><td>Startet jedes Mal leer. Sie fügen den Kontext selbst ein.</td><td>Verbunden mit Ihren Factorial-Daten und den Tools, die Sie anbinden, ab der ersten Nachricht.</td></tr>
      <tr><td>Berechtigungen</td><td>Weiß nicht, wer was sehen darf.</td><td>Jeder sieht nur, was seine Rolle erlaubt. Dieselben Rollen, nichts Neues wird offengelegt.</td></tr>
      <tr><td>Compliance</td><td>Keine Garantien in der EU.</td><td>Konform mit DSGVO und EU AI Act, gehostet in der EU.</td></tr>
      <tr><td>Verlässlichkeit</td><td>Erfindet Antworten, ohne zu warnen.</td><td>Antwortet mit Ihren Daten und zeigt die Quelle. Wenn es etwas nicht weiß, sagt es das.</td></tr>
      <tr><td>Kontrolle</td><td>Intransparente Kosten und Aktionen.</td><td>Sie entscheiden, welche Agenten laufen, und sehen jede Aktion und was sie gekostet hat.</td></tr>`,
    s4e: "One · Persönliche Kapazität",
    s4t: "KI für alle, ohne die Kontrolle abzugeben",
    s4d: "Jede Person bekommt ihre eigene tägliche KI-Nutzung, innerhalb der Berechtigungen, denen Sie schon vertrauen. Wählen Sie eine Mischung persönlicher Pläne je nach Profil.",
    tiers: `<div class="tier"><div class="tn"><b>Free</b></div><p class="usage"><b>In jedem Paket enthalten.</b></p><h4>Empfohlen für</h4><div class="who"><i>Das ganze Team</i></div><h4>Was sie mit One machen</h4><ul><li>Fragen zu Richtlinien, Salden, Gehaltsabrechnungen und Dokumenten stellen, mit Quelle.</li><li>Abwesenheiten, Ausgaben und Tickets per Chat beantragen.</li><li>Jede Anfrage in der App verfolgen.</li></ul></div>
    <div class="tier"><div class="tn"><b>Basic</b></div><p class="usage"><b>x2 Nutzung vs. Free</b><br>Für die regelmäßige Nutzung.</p><h4>Empfohlen für</h4><div class="who"><i>Das ganze Team</i><i>Teamleads</i></div><h4>Was sie mit One machen</h4><ul><li>Alles aus Free, mit doppelter Tagesnutzung.</li><li>Für alle, die One täglich in ihrer Arbeit nutzen.</li></ul></div>
    <div class="tier"><div class="tn"><b>Plus</b></div><p class="usage"><b>x10 Nutzung vs. Basic</b><br>Für anspruchsvolle Workflows.</p><h4>Empfohlen für</h4><div class="who"><i>Teamleads</i><i>Führungskräfte</i><i>Admins</i></div><h4>Was sie mit One machen</h4><ul><li>1:1s vorbereiten und die Analysen des eigenen Teams einsehen.</li><li>Abwesenheiten, Ausgaben und Schichten mit bereits gesammeltem Kontext genehmigen.</li></ul></div>
    <div class="tier"><div class="tn"><b>Max</b></div><p class="usage"><b>x35 Nutzung vs. Basic</b><br>Für Power-User.</p><h4>Empfohlen für</h4><div class="who"><i>Führungskräfte</i><i>Admins</i><i>Training Manager</i><i>Finance Manager</i></div><h4>Was sie mit One machen</h4><ul><li>Komplette Kurse erstellen, Ausgaben gesammelt verarbeiten sowie Berichte und Routinen aufbauen.</li><li>Für die intensive Nutzung von One im eigenen Bereich.</li></ul></div>`,
    p1: "<b>Ihre Daten bleiben unter Kontrolle</b><p>Jede Person sieht nur, was sie schon sehen durfte. One folgt exakt Ihren Factorial-Berechtigungen: gleiche Rollen, gleicher Zugriff, nichts Neues offengelegt.</p>",
    p2: "<b>Niemand überzieht das Budget</b><p>Jede Person hat ein tägliches Kontingent je nach persönlichem Plan. Ist es erreicht, pausiert One bis morgen. Keine Aufladungen, keine ausufernden Kosten.</p>",
    flex: "<b>Sie entscheiden, welcher persönliche Plan zu wem passt.</b> Beispiel mit 100 Personen: 5 Max + 15 Plus + 30 Basic + 50 Free.",
    s3t: "Was als Nächstes kommt",
    s3d: "Jedes Produkt wird zum KI-Produkt. Umfang und Termine können sich ändern; wir halten Sie auf dem Laufenden.",
    road: `<div><span>Demnächst</span><b>KI-1:1s</b><p>One bereitet jedes 1:1 mit der gesamten Historie der Person vor und begleitet es.</p></div>
    <div><span>Demnächst</span><b>Gamifizierte Kurse</b><p>Spielmechaniken in LMS-Kursen.</p></div>
    <div><span>Demnächst</span><b>Ziele über MCP</b><p>Factorial verbindet sich mit Ihren Tools und aktualisiert Ziele mit deren Daten.</p></div>
    <div><span>Demnächst</span><b>Personalplanung: Genehmigungen und Budget</b><p>Strukturierte Genehmigungsabläufe und Vergleich von Plan und Ist.</p></div>
    <div><span>Demnächst</span><b>Vorgeschlagener Talentpool</b><p>Sehen Sie vor der Veröffentlichung, wer in Ihrem Talentpool bereits passt.</p></div>
    <div><span>Demnächst</span><b>WhatsApp im Recruiting</b><p>Nachrichten, Vorankündigung des KI-Anrufs und Dokumente über WhatsApp.</p></div>
    <div><span>Demnächst</span><b>Unstimmigkeiten bei der Zeiterfassung</b><p>Beheben Sie alle Unstimmigkeiten bei der Zeiterfassung auf einmal, statt einzeln.</p></div>
    <div class="more"><span>Demnächst</span><b>Und noch viel mehr</b><p>Jeden Monat kommen neue KI-Funktionen in jedes Factorial-Produkt.</p></div>`,
    ctaT: "Sollen wir Ihren gesamten Zyklus gemeinsam mit Ihren eigenen Daten durchgehen?",
    ctaD: "Wir bilden Ihre Personalplanung, Ihren Recruiting-Prozess und Ihre Vergütungsrichtlinie ab und zeigen Ihnen denselben Ablauf in Factorial, mit One bei jedem Schritt.",
    ctaQ: "Noch keinen Kontakt zu jemandem von Factorial?",
    ctaBtn: "Demo vereinbaren",
    footer: "Berichte und Gesprächsbeispiele sind illustrativ und verwenden fiktive Daten. Einige Funktionen hängen von Ihrem Plan und von One-Credits ab. Factorial · Oktober 2026."
  }
};

LONG.de = {
    one: () => `<p class="lead">Ihr persönlicher KI-Agent bei der Arbeit. Er kennt Ihren Kontext, handelt in ganz Factorial und hilft Ihnen beim Entscheiden, ohne Ihre Daten offenzulegen.</p>
    <h3>Drei Arten, One zu nutzen</h3>
    <ul class="vals"><li><b>Fragen.</b> Jeder fragt, was er braucht: Richtlinien, Salden, Teamdaten. One antwortet mit Quelle und nur mit dem, was seine Rolle erlaubt.</li>
    <li><b>Delegieren.</b> In jedem Produkt erledigt One die Arbeit: entwirft die Stellenanzeige, ruft Bewerbende an, bereitet den Vorschlag zur Gehaltserhöhung vor.</li>
    <li><b>Automatisieren.</b> Richten Sie eine Routine einmal ein, und One erkennt, entscheidet und handelt. Sie genehmigen die Ausnahmen.</li></ul>
    <h3>So funktioniert es</h3>
    <p class="note">One erkennt Auslöser in Ihren Daten in Echtzeit, gleicht sie mit Ihren Richtlinien und Ihrer Historie ab, wählt die Aktion oder eskaliert an eine Person, erledigt die Arbeit in Factorial und protokolliert, was es getan hat. Jeder Schritt bleibt sichtbar und nachprüfbar.</p>
    <h3>Warum zentrale Daten alles verändern</h3>
    <p class="why" style="color:var(--ink)">Je mehr Module Sie verbinden, desto mehr Kontext hat One. Eine generische KI startet leer; One weiß bereits, wer wer ist, was Ihre Richtlinie sagt und was im letzten Zyklus passiert ist.</p>
    <div class="stats"><div class="stat"><b>DSGVO</b><span>und EU AI Act, gehostet in der EU</span></div><div class="stat"><b>Ihre Berechtigungen</b><span>dieselben Factorial-Rollen, nichts Neues wird offengelegt</span></div></div>
    <h3>Routinen: Einmal einrichten. One erledigt es nach Plan.</h3>
    ${chatHTML([{ q: "Erinnere mich jeden 25. an offene Lohnvariablen.", a: "Erstellt die Routine, prüft vor dem Abschluss, was fehlt, und schickt es Ihnen mit den Personen, die handeln müssen." }])}`,
    routines: `<h3>Routinen mit stets aktuellen Informationen</h3>
  <ul class="rt">
    <li><span class="when">Montag, 9:00</span><span>Fluktuation nach Abteilung, mit erklärtem Trend<span class="src">Core · Analysen & Berichte</span></span></li>
    <li><span class="when">Werktags, 18:00</span><span>Personen mit weniger als 4 Stempelungen heute<span class="src">Zeiterfassung</span></span></li>
    <li><span class="when">Der 25.</span><span>Offene Lohnvariablen vor dem Abschluss<span class="src">Vergütung · Schichten · Ausgaben</span></span></li>
    <li><span class="when">Erster Tag des Monats</span><span>Offene Pflichtschulungen nach Standort<span class="src">Schulungen & LMS</span></span></li>
    <li><span class="when">Freitag, 12:00</span><span>Bewerbende im Screening ohne Feedback des Einstellungsteams<span class="src">Recruiting & ATS</span></span></li>
  </ul>
  <p class="disc-note">Jeder Bericht aus Analysen & Berichte kann im One-Chat als Routine geplant werden. Routinen verbrauchen One-Credits.</p>`,
    ax: { t: "Beispiele für bereits verbundene Berichte",
      c1: ["Fluktuation und Engagement nach Abteilung", "Core + Engagement · Fluktuation (Balken) und eNPS (Linie)", ["Stores","Betrieb","Vertrieb","Support","Tech"]],
      c2: ["Einstellungsqualität nach Quelle", "Recruiting & ATS + Performance & Ziele · Retention nach 1 Jahr", ["Empfehlungen","LinkedIn","Karriereseite","Jobbörsen"]],
      c3: ["Personalkosten: Ist vs. Plan", "Personalplanung + Gehaltsrunde + Vergütung", ["J","F","M","A","M","J"], "Ist", "Plan"],
      c4: ["Fehlzeiten und Überstunden nach Standort", "Abwesenheiten + Zeiterfassung + Schichten", ["München","Berlin","Hamburg","Köln"], "Fehlzeiten %", "Überstunden"],
      note: "Fiktive Daten, nur zur Veranschaulichung, was sich verknüpfen lässt.",
      tasksT: "Aufgaben, die One bereits selbstständig erledigt",
      tasks: ["Genehmigt Ausgaben, die der Richtlinie entsprechen, und überlässt Ihnen nur die Ausnahmen.", "Deckt Schichten ab, indem es anruft, wer sie übernehmen kann, nach Ihren Regeln.", "Ruft Bewerbende an, die das Screening erreichen, und liefert Ihnen den Bericht.", "Löst Tickets zur Hälfte, sodass die zuständige Person nur noch freigibt."] }
};

/* ---------- PORTUGUÉS (PORTUGAL) ---------- */
const PT = {
  HUBS: {
    talento: { name: "Talento", lead: "Do cargo planeado ao aumento proposto, cada decisão de talento assenta na anterior, em vez de começar do zero.", one: "Quantos mais módulos de talento estiverem ativos, mais contexto tem o One: analisa avaliações, candidaturas, formações e inquéritos em simultâneo." },
    tiempo: { name: "Tempo", lead: "Registos de ponto, turnos e ausências no mesmo calendário, com cada hora pronta para o processamento salarial e os projetos.", one: "O One cobre turnos, responde a dúvidas sobre saldos e apanha falhas no ponto enquanto ainda são pequenas." },
    finanzas: { name: "Finanças", lead: "RH e Finanças trabalham com os mesmos números: efetivos, despesas, compras, projetos e orçamento.", one: "O One aprova o que cumpre a política e deixa-lhe só as exceções." },
    core: { name: "Core HR", lead: "A base: pessoas, documentos, políticas e a app de cada colaborador. O que se regista aqui é usado por todos os módulos.", one: "O One conhece as suas políticas, responde com a fonte e resolve pedidos antes de chegarem a uma pessoa." },
    it: { name: "IT", lead: "Dispositivos, software e inventário associados a quem os usa, do primeiro ao último dia.", one: "O One investiga o ticket, verifica o stock e prepara a compra para que só falte aprovar." },
    nomina: { name: "Salários", lead: "Cada alteração que afeta a remuneração chega validada ao processamento salarial, do registo de ponto ao aumento.", one: "O One deteta variáveis pendentes e tudo o que não bate certo antes de o processamento ser calculado." }
  },
  M: {
    desempeno: { name: "Desempenho",
      lead: "Avaliações, objetivos e feedback ao longo de todo o ano, não só na avaliação anual.",
      value: ["Avaliações de 180° e 360° com ciclos automáticos, lembretes e acordos descarregáveis.", "Objetivos e OKRs individuais e de equipa, com feedback contínuo para chegar à avaliação com dados.", "9-box e analítica de talento para ver quem tem mais potencial e quem precisa de apoio.", "Planos de incentivos: defina regras de pagamento ligadas a objetivos e resultados; a Factorial calcula cada bónus e paga-o automaticamente no processamento salarial."],
      one: [{ q: "Quem da minha equipa está a mostrar sinais de risco?", a: "Analisa autoavaliações e feedback, resume cada caso e explica porque o assinala." }],
      why: "Cada avaliação de desempenho fundamenta as decisões de formação e de revisão salarial. O recrutamento recorre à avaliação mais recente para identificar as fontes que trazem colaboradores com maior retenção e desempenho.",
      soon: ["Objetivos ligados via MCP: a Factorial atualiza objetivos com dados das suas outras ferramentas."] },
    formacion: { name: "Formação & LMS",
      lead: "Formações gravadas e cursos interativos dentro da Factorial, ligados ao desempenho.",
      value: ["Catálogo, sessões e assiduidade; formação obrigatória com rastreabilidade pronta para auditoria.", "LMS: cursos com vídeos, questionários e testes, progresso automático e certificados à conclusão.", "Custo salarial de cada formação calculado automaticamente."],
      one: [{ q: "Cria um curso de onboarding para a equipa das lojas.", a: "Um curso estruturado com módulos e questionários, em minutos. Só tem de rever e publicar." }],
      why: "A partir da avaliação, num clique: atribui a formação que fecha cada lacuna de competências e mede o impacto no ciclo seguinte.",
      stat: { n: "94%", t: "dos colaboradores ficariam mais tempo numa empresa que investe no seu desenvolvimento (LinkedIn Workplace Learning Report, 2023)" } },
    engagement: { name: "Engagement",
      lead: "Ouça a sua equipa sem enviar mais um formulário: pulso diário, inquéritos, eNPS e 1:1 com IA.",
      value: ["Pulso da equipa no registo de ponto: check-ins sem fadiga de inquéritos e alertas para o gestor correto.", "Inquéritos e eNPS automáticos no onboarding, na saída e em cada marco.", "Reuniões 1:1 com IA: o One prepara cada 1:1 com objetivos, desempenho e estado de espírito."],
      one: [{ q: "Prepara o 1:1 de amanhã com a Laura.", a: "Reúne os objetivos dela, a última avaliação, o pulso recente e o que foi falado nos 1:1 anteriores." }],
      why: "Bom desempenho nem sempre significa envolvimento. Com o pulso ligado ao ponto e ao contexto de desempenho, o One vê o quadro completo de cada pessoa.",
      stat: { n: "40–60%", t: "menos administração manual com avaliações, 1:1 e inquéritos automáticos" } },
    comunidades: { name: "Comunidades",
      lead: "Espaços onde as pessoas se encontram, partilham e se reconhecem, para além do organograma.",
      value: ["Comunidades por interesse, localização, projeto ou equipa, abertas ou por convite.", "Publicações, reconhecimentos e celebração de marcos a partir da app.", "Une pessoas do escritório, em remoto e nas lojas num único espaço."],
      one: [{ q: "Que comunidades me recomendas, agora que entrei?", a: "Sugere as da sua equipa, da sua localização e dos seus interesses, com base no seu perfil." }],
      why: "As comunidades assentam nos mesmos dados de equipa, localização e pessoas, por isso cada nova pessoa encontra o seu lugar desde o primeiro dia." },
    comunicaciones: { name: "Comunicações",
      lead: "Comunicados para toda a empresa ou para equipas específicas, onde as suas pessoas já trabalham todos os dias.",
      value: ["Publique para toda a empresa ou para equipas e localizações específicas.", "Chega a todos pela app, incluindo quem não trabalha num computador.", "Os comunicados ficam junto das políticas e dos documentos a que se referem."],
      one: [{ q: "Redige o comunicado do novo horário de verão em espanhol e inglês.", a: "Redige-o a partir da sua política de horários e traduz, pronto a rever." }],
      why: "A segmentação vem dos mesmos dados de equipa, localização e função que o resto da Factorial usa." },
    ats: { name: "ATS & recrutamento",
      lead: "Um ATS que planeia, filtra e decide consigo, da posição aprovada à proposta assinada.",
      value: ["Plano de contratação: cada posição aprovada no planeamento de efetivos chega como vaga com responsável, prazo e estado.", "Relatório de IA por candidato e chamadas de IA no idioma dele, com transcrição e resultado verde, âmbar ou vermelho.", "Vagas ilimitadas, permissões por fase, entrevistas em vídeo com o One e analítica de retenção a um ano."],
      one: [
        { q: "Liga a todos os candidatos que chegarem à fase de triagem.", a: "Uma chamada no idioma deles, anunciada, com consentimento e gravada. Devolve transcrição, relatório e próximo passo sugerido. Quem decide é uma pessoa." },
        { q: "Cria a oferta de emprego para um Senior Product Designer em Barcelona.", a: "Redige a oferta a partir da conversa e publica-a na sua página de carreiras e em mais de 250 portais de emprego." }
      ],
      why: "A vaga nasce aprovada e orçamentada; quem assina entra com todos os dados, sem voltar a escrever nada; e a analítica cruza a fonte de recrutamento com a avaliação de desempenho.",
      stats: [{ n: "70%", t: "menos tempo de contratação com triagem de primeira ronda por IA" }, { n: "+25%", t: "de crescimento de efetivos com a mesma equipa de recrutamento" }],
      soon: ["Candidatos sugeridos a partir do banco de talento (brevemente).", "WhatsApp no Recrutamento e Páginas de Empresa por entidade (brevemente).", "Avaliação cultural (brevemente)."] },
    canal: { name: "Canal de confiança",
      lead: "Um canal para qualquer pessoa denunciar irregularidades de forma confidencial, e também anónima.",
      value: ["Denúncias confidenciais, com opção de anonimato.", "Acompanhamento de casos com acesso restrito a quem os gere.", "Ajuda a cumprir as regras de proteção de denunciantes."],
      oneNote: "O One respeita exatamente as permissões da Factorial: os casos só são visíveis a quem os gere.",
      why: "Vive na mesma app que o resto das ferramentas do colaborador, por isso ninguém tem de procurar onde denunciar." },
    control: { name: "Registo de ponto",
      lead: "Registe o ponto no telemóvel ou no computador, com o registo do tempo de trabalho sempre atualizado.",
      value: ["Registe o ponto na app ou na web, com horas extra e saldos calculados.", "Incidências visíveis para o gestor antes de chegarem ao processamento salarial.", "As horas imputadas a projetos alimentam o custo real de cada projeto."],
      one: [{ q: "Todos os dias úteis às 18h, envia-me quem tem menos de 4 registos de ponto hoje.", a: "Cria uma rotina que verifica os registos de ponto todos os dias e envia-lha por email." }],
      why: "O mesmo registo de ponto serve o processamento salarial, o custo dos projetos e o pulso da equipa, sem o capturar duas vezes.",
      soon: ["Inconsistências de ponto: resolva todas as incidências de uma só vez, sem ir uma a uma."] },
    turnos: { name: "Turnos",
      lead: "Escalas que respeitam as suas regras e vagas preenchidas sem listas de chamadas.",
      value: ["Planeamento automático com regras próprias: descansos, horários, locais, funções e competências são respeitados automaticamente.", "Turnos de prevenção planeados e registados junto com os restantes turnos.", "Ligado ao contrato de cada pessoa no Portal do colaborador: horas, horário e condições são tidos em conta no planeamento.", "Os turnos reais chegam ao processamento salarial, sem turnos desatualizados no cálculo."],
      one: [{ q: "Encontra alguém para cobrir o turno da María hoje.", a: "Verifica dias de descanso, funções, competências, horário e localização, liga aos candidatos um a um e avisa o gestor quando o turno estiver coberto." }],
      why: "Uma ausência abre a vaga, o One preenche-a e o novo turno chega aos registos de ponto e às variáveis salariais. Todas as regras respeitadas e cada chamada registada." },
    ausencias: { name: "Ausências",
      lead: "Férias, baixas e licenças com saldos atualizados e aprovação em dois cliques.",
      value: ["Políticas de ausências por equipa, localização ou convenção coletiva.", "Calendário partilhado para ver quem está ausente antes de aprovar.", "Ausências e baixas sincronizadas com o processamento salarial."],
      one: [{ q: "Quantos dias de férias me restam?", a: "Responde com o saldo dessa pessoa e a política aplicável. Cada pessoa só vê o seu." }],
      why: "Uma baixa não fica só no calendário: abre uma vaga nos Turnos, ajusta os registos de ponto e chega ao processamento salarial como variável." },
    plantilla: { name: "Planeamento de efetivos",
      lead: "RH e Finanças veem os mesmos números desde o primeiro dia.",
      value: ["Os gestores propõem posições com função, nível, banda salarial e data, ligadas ao catálogo de funções.", "RH e Finanças reveem uma única versão, com registo de quem decidiu o quê e quando.", "As posições aprovadas abrem automaticamente no Recrutamento: plano e execução sempre alinhados."],
      one: [{ q: "Prepara o nosso plano de efetivos para 2027 com as nossas diretrizes.", a: "Propõe funções, níveis e custos para a sua revisão." }],
      why: "A posição que aprova é a vaga que publica, e cada aumento finalizado atualiza a previsão de custos do plano seguinte.",
      soon: ["Fluxos de aprovação estruturados e ligação ao orçamento.", "Comparação entre contratações planeadas e reais."] },
    proyectos: { name: "Gestão de projetos",
      lead: "Saiba se cada projeto é rentável enquanto decorre, não quando termina.",
      value: ["Horas imputadas a partir do widget de ponto, sem folhas de horas paralelas.", "Custo laboral, custos fixos e despesas vs. orçamento, em tempo real.", "Do orçamento ao projeto e do projeto à fatura, com os dados do cliente já carregados."],
      one: [{ q: "Que projetos estão acima do orçamento este mês?", a: "Cruza horas imputadas, custo laboral e despesas, e explica onde cada um se desvia." }],
      why: "O custo de uma hora vem do salário real da pessoa e a hora vem do registo de ponto: ninguém copia dados entre ferramentas." },
    fpa: { name: "Planeamento Financeiro",
      lead: "Orçamentos e previsões com os custos reais que já vivem na Factorial.",
      value: ["Orçamentos por departamento ou centro de custo.", "Real vs. planeado com dados de efetivos, salários, despesas, compras e projetos.", "Uma única fonte de verdade para RH, Finanças e direção."],
      one: [{ q: "Como estamos face ao orçamento de pessoas neste trimestre?", a: "Compara o custo salarial real com o plano e assinala desvios." }],
      why: "O orçamento alimenta-se sozinho: cada contratação, aumento, despesa ou compra já está registada no seu módulo." },
    gastos: { name: "Despesas",
      lead: "De uma pilha de recibos às contas fechadas, com uma só mensagem.",
      value: ["Carregue os recibos e os campos preenchem-se sozinhos.", "Cada despesa é verificada face à política: as conformes são aprovadas de imediato.", "Reconciliação de cartões e dados limpos para o fecho do mês."],
      one: [{ q: "Aqui estão os recibos da minha viagem de trabalho. (carrega 5 de uma vez)", a: "Lê cada recibo, prepara as despesas, reconcilia o cartão e verifica política e permissões. Só as exceções esperam por uma aprovação." }],
      why: "A despesa aprovada chega ao processamento salarial se for para reembolsar e ao projeto se for faturável." },
    compras: { name: "Compras",
      lead: "Pedidos de compra, aprovações e fornecedores num único fluxo.",
      value: ["Pedidos com aprovação por valor e equipa.", "Cada compra associada ao seu orçamento e a quem a pediu.", "Ligado ao inventário e ao software para saber o que se compra e para quem."],
      one: [{ q: "O meu portátil avariou. Preciso de um novo.", a: "Abre o ticket, verifica que não há stock, encontra um no marketplace e compra-o assim que uma pessoa aprovar." }],
      why: "A compra começa num ticket, passa pelo orçamento e acaba no inventário da pessoa." },
    revision: { name: "Revisão salarial",
      lead: "Cada aumento justificado, orçamentado e defensável.",
      value: ["Diretrizes definidas uma só vez: elegibilidade, intervalos e aprovadores. Cada proposta é verificada automaticamente.", "Cada gestor vê apenas a sua equipa, com os casos fora da política já assinalados, e o orçamento é distribuído em tempo real.", "O aumento aprovado flui para o contrato e para a previsão de efetivos, sem voltar a escrever nada."],
      one: [{ q: "Propõe aumentos para a minha equipa com base na nossa política.", a: "Valores e justificação, já verificados face ao orçamento. Só tem de aprovar." }],
      why: "Define-se quantos ciclos de avaliação contam para a elegibilidade, para que o aumento reflita uma tendência e não uma nota isolada. Depois de validado, o aumento é integrado diretamente no processamento salarial." },
    politicas: { name: "Políticas",
      lead: "Regras definidas uma única vez e aplicadas em todos os módulos.",
      value: ["Políticas de ausências, despesas, horários e outras, aplicadas pelos módulos que as usam.", "Manual do colaborador: as pessoas perguntam e o One responde com a fonte.", "Se o One não sabe, diz."],
      one: [{ q: "Posso trabalhar remotamente a partir de outro país durante duas semanas?", a: "Responde com base na sua política, mostra a fonte e só revela o que essa pessoa pode ver." }],
      why: "As dúvidas de rotina nunca chegam à caixa de entrada do gestor, e os mesmos critérios aprovam despesas ou ausências." },
    portal: { name: "Portal do colaborador",
      lead: "A app onde cada colaborador vê a sua informação e pede o que precisa.",
      value: ["Dados pessoais, recibos de vencimento, documentos e saldos numa só app.", "Ausências, despesas e tickets a partir do telemóvel.", "O One integrado para perguntar, pedir e acompanhar cada pedido."],
      oneNote: "O One está incluído para toda a força de trabalho, sem necessidade de formação. Cada pessoa pergunta o que precisa e só vê o que a sua função permite.",
      why: "Tudo o que o colaborador faz aqui vai diretamente para o módulo certo, sem formulários nem emails pelo meio." },
    onoff: { name: "On/Offboarding",
      lead: "Entradas e saídas como um único fluxo, com tarefas para RH, IT e o gestor.",
      value: ["A nova contratação chega do Recrutamento com todos os seus dados.", "Documentos, assinatura, dispositivo, acessos e formação de boas-vindas no mesmo fluxo.", "À saída, acessos e equipamento são recuperados sem depender da memória de ninguém."],
      one: [{ q: "Prepara o onboarding da Marta para segunda-feira.", a: "Lança as tarefas, prepara os documentos para assinatura, pede o portátil dela e atribui o curso de boas-vindas." }],
      why: "É onde mais módulos se encontram: se os dados estiverem centralizados, o primeiro dia corre sozinho." },
    documentos: { name: "Gestão documental",
      lead: "Contratos, recibos de vencimento e certificados de cada pessoa, com permissões e modelos.",
      value: ["Pastas por pessoa e por empresa, com permissões por função.", "Modelos que se preenchem com os dados do colaborador.", "O One lê qualquer ficheiro e extrai o que importa."],
      one: [{ q: "Que contratos a termo caducam neste trimestre?", a: "Cruza com os dados contratuais e devolve a lista com datas e responsáveis." }],
      why: "Uma alteração salarial aprovada atualiza o contrato; uma contratação gera os seus documentos. Ninguém os refaz." },
    firma: { name: "Assinatura eletrónica",
      lead: "Envie para assinatura sem sair da Factorial e guarde o resultado onde deve ficar.",
      value: ["Assine contratos, adendas e políticas a partir de qualquer dispositivo.", "Propostas do Recrutamento assinadas de qualquer lugar, e sabe de imediato quando estão assinadas.", "O documento assinado fica no perfil da pessoa."],
      oneNote: "O One prepara documentos a partir dos seus modelos para que só tenha de os rever e enviar para assinatura.",
      why: "Zero dados para voltar a escrever quando alguém assina: o estado chega ao processo que o pediu." },
    analiticas: { name: "Analítica",
      lead: "Todos os dados da Factorial num só lugar, e o One para os consultar em linguagem natural.",
      value: ["Relatórios que cruzam módulos sobre os mesmos dados: pessoas, tempo, talento, salários e finanças.", "Peça ao One que crie um relatório, adicione widgets, filtre ou explique uma tendência, e guarde-o.", "Cada pessoa só vê o que as suas permissões permitem."],
      one: [{ q: "Envia-me a rotatividade por departamento todas as segundas-feiras.", a: "Cria o relatório, agenda-o como rotina e explica a tendência em cada envio." }],
      why: "Todos os módulos desaguam aqui. Como todos os dados vivem na Factorial, um relatório não se constrói: pede-se. Sem exportar, sem juntar folhas de cálculo e sem esperar pelas Finanças." },
    tickets: { name: "Tickets",
      lead: "Pedidos que chegam meio resolvidos antes de uma pessoa lhes tocar.",
      value: ["Abertos ao conversar com o One e acompanhados na Factorial.", "Encaminhados automaticamente para a equipa certa: IT, RH, Finanças.", "O One investiga e traduz cada mensagem nos dois sentidos."],
      one: [{ q: "Olá One, o meu portátil avariou. Preciso de um novo.", a: "Cria o ticket, encaminha-o para o IT, lê o contexto, vê que não há portáteis em stock, encontra um no marketplace e redige o plano. Uma pessoa aprova, é comprado e o IT entrega-o." }],
      why: "O One investiga contratos, ativos de IT e perfis de colaboradores: a resolução é redigida com as suas políticas e quem a resolve só tem de aprovar." },
    mdm: { name: "Gestão de dispositivos móveis",
      lead: "Configure e proteja os dispositivos da empresa no mesmo sítio onde gere as pessoas.",
      value: ["Cada dispositivo associado a quem o usa.", "Registo e remoção de dispositivos integrados no onboarding e offboarding.", "Estado de segurança da frota visível para o IT."],
      oneNote: "O One mantém a sua empresa em conformidade: verifica políticas, corrige inconsistências e acompanha acessos e riscos.",
      why: "Quando alguém entra ou sai, o IT não depende de um email dos RH: a alteração já está na Factorial." },
    inventario: { name: "Inventário",
      lead: "Que equipamento tem cada pessoa, com o seu histórico.",
      value: ["Atribuição e devolução de equipamento por pessoa.", "Integrado no onboarding e offboarding.", "Stock visível antes de comprar."],
      oneNote: "Quando chega um ticket, o One verifica o inventário antes de propor uma compra.",
      why: "O inventário sabe quem é quem porque partilha os dados de pessoas com o Core HR." },
    software: { name: "Gestão de software",
      lead: "Que ferramentas usa a empresa, quem tem acesso e quanto custam.",
      value: ["Inventário de apps e licenças.", "Acessos concedidos e revogados à medida que as pessoas entram e saem.", "Gasto em licenças visível para as Finanças."],
      oneNote: "O One cruza licenças com pessoas ativas para detetar acessos que já não deviam existir.",
      why: "Licenças, pessoas e orçamento num só lugar: ninguém paga a conta de quem já saiu." },
    marketplace: { name: "Marketplace",
      lead: "Um catálogo para encomendar dispositivos e equipamento sem andar à procura de fornecedores.",
      value: ["Catálogo de dispositivos pronto a encomendar.", "Compras com aprovação e entrega a quem precisa.", "Ligado aos tickets e ao inventário."],
      oneNote: "Se não houver stock, o One encontra o dispositivo no marketplace e deixa a compra pronta a aprovar.",
      why: "Do ticket à entrega sem mudar de ferramenta." },
    seguridad: { name: "Segurança (EDR)",
      tag: "Add-on",
      lead: "Antivírus e deteção de ameaças em cada dispositivo, geridos a partir da Factorial.",
      value: ["Proteção de endpoints com deteção e resposta (EDR/MDR) da SentinelOne.", "Funciona sobre o MDM: a proteção é aplicada, não só verificada.", "Se um equipamento se perder, verifica atividade suspeita antes de o apagar."],
      oneNote: "O One avisa dos equipamentos sem proteção e prepara a resposta para que a IT só tenha de aprovar.",
      why: "Protege os mesmos dispositivos e pessoas que o MDM gere: quando alguém entra ou sai, a proteção acompanha." },
    cumplimiento: { name: "Conformidade",
      tag: "Add-on",
      lead: "ISO 27001, NIS2 e ENS com as provas que a empresa já tem na Factorial.",
      value: ["Quadro de pessoal, funções e contratos com cláusula de confidencialidade, a partir do Core HR.", "Políticas de segurança assinadas e formação de sensibilização concluída.", "Encriptação, revisões de acessos, registo de ativos e incidentes, a partir dos produtos de IT."],
      oneNote: "O One reúne as provas e prepara o pacote para o auditor.",
      why: "Lê provas de quase todos os módulos da Factorial, algo que uma ferramenta de conformidade isolada não consegue." },
    beneficios: { name: "Benefícios",
      lead: "Remuneração flexível que a sua equipa usa com um cartão e que os RH gerem sem papelada.",
      value: ["Refeição, transportes, creche, seguro de saúde, formação e Wellhub.", "Cartão Visa na carteira do telemóvel, com saldo e movimentos na app.", "Orçamentos por categoria, conformidade fiscal e exportação direta para o processamento salarial."],
      one: [{ q: "Quanto subsídio de refeição me resta este mês?", a: "Responde com o saldo dessa pessoa, dentro das suas permissões." }, { q: "Quanto já poupei em impostos em 2026?", a: "Calcula a poupança fiscal dessa pessoa com a remuneração flexível este ano, com o detalhe por categoria." }],
      why: "O que cada pessoa utiliza chega ao processamento salarial como rubrica, sem que ninguém o compile à mão." },
    compensacion: { name: "Remuneração",
      lead: "Cada alteração chega ao processamento salarial já validada.",
      value: ["Cobre todo o ciclo salarial: pré-processamento (preparação e atualizações de cada colaborador), pós-processamento (resultados calculados pelo seu software salarial) e mais além, com Planeamento Financeiro, distribuição de recibos em Gestão documental e pagamentos SEPA com Tesouraria.", "Atualizações dos colaboradores prontas para o processamento: entradas, saídas, alterações de contrato e salário, ausências e bónus, visíveis de imediato.", "Alertas antes do cálculo: variáveis pendentes, prémios por aprovar ou turnos desatualizados.", "Cada processamento comparado com as variáveis e contratos aprovados, e custo real vs. planeado.", "Planos de incentivos ligados ao Desempenho: regras de pagamento, cálculo automático de cada bónus e pagamento direto no processamento salarial."],
      one: [{ q: "O que falta antes de fecharmos o processamento salarial deste mês?", a: "Revê as variáveis pendentes e tudo o que não bate certo, e diz-lhe quem tem de agir." }],
      why: "Tudo desagua aqui: registos de ponto, turnos, ausências, despesas, benefícios e aumentos. Se nascem ligados, chegam validados.",
      stat: { n: "40 h", t: "por mês que pode poupar ao sincronizar contratações, saídas, alterações salariais, ausências e variáveis com o seu fornecedor de processamento salarial" } },
    integraciones: { name: "Integrações",
      lead: "A Factorial ligada ao seu fornecedor de processamento salarial e ao resto das suas ferramentas.",
      value: ["Compatível com outro software de processamento salarial e com a Factorial Professionals para gabinetes de contabilidade.", "API para ligar o seu ERP."],
      oneNote: "Se os dados estão na Factorial ou numa ferramenta integrada, é possível consultá-los, delegar tarefas ou automatizar processos com o One.",
      why: "Integrar não é copiar: a alteração regista-se uma vez e sincroniza-se." },
    anticipo: { name: "Adiantamento salarial",
      lead: "A sua equipa pode pedir parte do salário já ganho antes do fim do mês.",
      value: ["Pedido a partir da app, sem papelada.", "Regras e limites definidos por si.", "O adiantamento reflete-se no processamento salarial sem ajustes manuais."],
      oneNote: "As pessoas perguntam ao One quanto podem pedir e como funciona, de acordo com a política.",
      why: "Como o salário e os dias trabalhados já estão na Factorial, o valor disponível não se calcula à mão." }
  },
  STORIES: [
    { t: "Uma nova contratação", d: "A posição aprova-se uma vez e o resto segue sozinho.", steps: ["A posição é aprovada com a sua banda salarial.", "Abre automaticamente como vaga; o One filtra e liga.", "A proposta é assinada a partir do telemóvel.", "Entra com todos os dados, sem voltar a escrever nada.", "O portátil já está atribuído.", "Recebe o curso de boas-vindas.", "A contratação chega validada ao processamento salarial."] },
    { t: "Uma baixa de última hora", d: "Do aviso ao processamento salarial sem ninguém copiar dados.", steps: ["Alguém avisa que está doente.", "O One encontra quem pode cobrir e liga-lhe.", "O novo turno é registado como qualquer outro.", "A baixa e a alteração de turno chegam como variáveis.", "O absentismo por localização atualiza-se sozinho."] },
    { t: "Um ciclo de avaliação", d: "O aumento sai da avaliação e realimenta o plano.", steps: ["A avaliação assinala resultados e lacunas.", "A formação é atribuída num clique.", "O One propõe o aumento dentro da política.", "O aumento chega validado ao processamento salarial.", "A previsão de custos atualiza-se para o plano seguinte."] },
    { t: "Um portátil avariado", d: "Uma mensagem ao One e uma aprovação.", steps: ["Basta pedir ao One para o ticket ser aberto.", "O One verifica que não há stock.", "Encontra um que cumpre a política.", "Uma pessoa aprova, é comprado e o IT entrega-o."] }
  ],
  UI: {
    sbMap: "Mapa One",
    sbConn: "Conectores",
    sbPlans: "Planos",
    sbDeck: "Pitch deck",
    sbLegal: "Legal e conformidade",
    video: "Veja como funciona",
    navConn: "Conectores",
    connE: "One · Conectores",
    connT: "A sua empresa não vive numa só ferramenta. O One também não.",
    connD: "Ligue as apps que a sua equipa já usa, como Slack, HubSpot, Notion ou Jira. O One combina-as com os seus dados da Factorial, sempre dentro das permissões de cada pessoa.",
    connBtn: "Ver o catálogo de conectores",
    connNote: "Catálogo em inglês",
    themeAria: "Modo noturno",
    partnerQ: "Quer ver com os seus próprios dados? Fale com o seu parceiro Factorial.",
    panelConn: "Ligue o One às suas ferramentas",
    navMap: "Mapa", navStories: "Histórias", navWhy: "IA para empresas", navPlans: "Planos One", navFacts: "Números", navNext: "O que aí vem", navAria: "Secções",
    allin: "Tudo no One",
    center: "O núcleo", area: "Área", modules: "Módulos", brings: "O que traz", withOne: "Com o One", connected: "Ligado a",
    solves: "O que resolve", tryOne: "Experimente com o One",
    soon: "O que aí vem", soonNote: "O âmbito e as datas podem mudar.", close: "Fechar",
    title: "Factorial · Tudo ligado com o One",
    h1: "O One já conhece a sua empresa",
    sub: "Todos os módulos da Factorial partilham os mesmos dados. O One trabalha sobre todos eles, com as suas permissões e as suas políticas.",
    hint: "Clique num módulo e veja que informação contém, como o One a usa e com que áreas comunica.",
    cue: "Continue a deslizar", cueAria: "Continue a deslizar", oneAria: "Ver o que é o One", panelAria: "Detalhes do módulo",
    s1t: "Os mesmos dados, de ponta a ponta",
    s1d: "Quando cada módulo vive numa ferramenta diferente, cada decisão começa do zero. Na Factorial, o que se regista uma vez é usado no passo seguinte. Toque em qualquer passo para o abrir no mapa.",
    s2t: "As suas equipas já usam IA. Torne-a sua.",
    s2d: "O que muda não é a tecnologia, é o contexto. E com dados de pessoas, a confiança não é negociável.",
    cmpHead: `<tr><th></th><th>IA genérica</th><th>One</th></tr>`,
    cmpBody: `<tr><td>Contexto</td><td>Começa em branco de cada vez. Tem de colar o contexto.</td><td>Ligado aos seus dados da Factorial e às ferramentas que integrar, desde a primeira mensagem.</td></tr>
      <tr><td>Permissões</td><td>Não sabe quem deve ver o quê.</td><td>Cada pessoa só vê o que a sua função permite. Os mesmos perfis, nada de novo exposto.</td></tr>
      <tr><td>Conformidade</td><td>Sem garantias na UE.</td><td>Conforme com o RGPD e o Regulamento da IA da UE, alojado na UE.</td></tr>
      <tr><td>Fiabilidade</td><td>Inventa respostas sem avisar.</td><td>Responde com os seus dados e indica a fonte. Quando não sabe, admite-o.</td></tr>
      <tr><td>Controlo</td><td>Custo e ações opacos.</td><td>Decide que agentes estão ativos e vê cada ação e o respetivo custo.</td></tr>`,
    s4e: "One · Capacidade pessoal",
    s4t: "IA para toda a equipa, sem perder o controlo",
    s4d: "Cada pessoa dispõe do seu próprio limite diário de IA, respeitando as permissões já definidas. É possível combinar planos individuais de acordo com o perfil de cada utilizador.",
    tiers: `<div class="tier"><div class="tn"><b>Free</b></div><p class="usage"><b>Incluído em todos os bundles.</b></p><h4>Recomendado para</h4><div class="who"><i>Toda a equipa</i></div><h4>O que fazem com o One</h4><ul><li>Perguntam sobre políticas, saldos, recibos de vencimento e documentos, com a fonte.</li><li>Pedem ausências, despesas e tickets por chat.</li><li>Acompanham cada pedido na app.</li></ul></div>
    <div class="tier"><div class="tn"><b>Basic</b></div><p class="usage"><b>x2 de utilização vs Free</b><br>Para uso regular.</p><h4>Recomendado para</h4><div class="who"><i>Toda a equipa</i><i>Team leaders</i></div><h4>O que fazem com o One</h4><ul><li>Tudo o que o Free inclui, com o dobro da utilização diária.</li><li>Para quem usa o One todos os dias no trabalho.</li></ul></div>
    <div class="tier"><div class="tn"><b>Plus</b></div><p class="usage"><b>x10 de utilização vs Basic</b><br>Para fluxos de trabalho exigentes.</p><h4>Recomendado para</h4><div class="who"><i>Team leaders</i><i>Managers</i><i>Admins</i></div><h4>O que fazem com o One</h4><ul><li>Preparam 1:1 e consultam a análise da sua equipa.</li><li>Aprovam ausências, despesas e turnos com o contexto já reunido.</li></ul></div>
    <div class="tier"><div class="tn"><b>Max</b></div><p class="usage"><b>x35 de utilização vs Basic</b><br>Para power users.</p><h4>Recomendado para</h4><div class="who"><i>Managers</i><i>Admins</i><i>Training Manager</i><i>Finance Manager</i></div><h4>O que fazem com o One</h4><ul><li>Criam cursos completos, processam lotes de despesas e constroem relatórios e rotinas.</li><li>Pensado para um uso intensivo do One na sua área.</li></ul></div>`,
    p1: "<b>Dados sempre sob controlo</b><p>Cada pessoa só vê o que já podia ver. O One segue exatamente as suas permissões da Factorial: mesmas funções, mesmo acesso, nada de novo exposto.</p>",
    p2: "<b>Ninguém gasta a mais</b><p>Cada pessoa tem uma utilização diária de acordo com o seu plano pessoal. Quando a atinge, o One pausa até ao dia seguinte. Sem carregamentos nem custos descontrolados.</p>",
    flex: "<b>Cada pessoa pode ter o plano mais adequado à sua utilização.</b> Por exemplo, para 100 utilizadores: 5 Max, 15 Plus, 30 Basic e 50 Free.",
    s3t: "O que aí vem",
    s3d: "Todos os produtos estão a evoluir para incorporar IA. O âmbito e as datas estão sujeitos a alterações, que serão comunicadas oportunamente.",
    road: `<div><span>Brevemente</span><b>1:1 com IA</b><p>O One prepara e orienta cada 1:1 com o histórico completo da pessoa.</p></div>
    <div><span>Brevemente</span><b>Cursos gamificados</b><p>Mecânicas de jogo dentro dos cursos LMS.</p></div>
    <div><span>Brevemente</span><b>Objetivos via MCP</b><p>A Factorial integra-se com as ferramentas já utilizadas e atualiza automaticamente os objetivos com base nos respetivos dados.</p></div>
    <div><span>Brevemente</span><b>Efetivos: aprovações e orçamento</b><p>Fluxos de aprovação estruturados e comparação entre planeado e real.</p></div>
    <div><span>Brevemente</span><b>Banco de talento sugerido</b><p>Antes de publicar a vaga, é possível identificar os candidatos da base de dados que já correspondem ao perfil.</p></div>
    <div><span>Brevemente</span><b>WhatsApp no Recrutamento</b><p>Mensagens, um aviso antes da chamada de IA e documentos via WhatsApp.</p></div>
    <div><span>Brevemente</span><b>Inconsistências de ponto</b><p>Resolva todas as incidências de ponto de uma só vez, sem ir uma a uma.</p></div>
    <div class="more"><span>Brevemente</span><b>E muito mais</b><p>Todos os meses chegam novas funcionalidades de IA a todos os produtos da Factorial.</p></div>`,
    ctaT: "Veja o ciclo completo com os dados da sua empresa.",
    ctaD: "Mapeamos a estrutura de equipas, o processo de recrutamento e a política salarial da empresa, e demonstramos o mesmo fluxo na Factorial, com o One a intervir em cada etapa.",
    ctaQ: "Fale com a nossa equipa.",
    ctaBtn: "Pedir uma demo",
    footer: "Os exemplos de relatórios e conversas são ilustrativos e usam dados fictícios. Algumas funcionalidades dependem do seu plano e dos créditos One. Factorial · outubro de 2026."
  }
};

LONG.pt = {
    one: () => `<p class="lead">Um agente de IA pessoal para o trabalho. Conhece o contexto de cada pessoa, atua em toda a Factorial e apoia a tomada de decisões, mantendo os dados protegidos.</p>
    <h3>Três formas de usar</h3>
    <ul class="vals"><li><b>Perguntar.</b> Qualquer pessoa pergunta o que precisa: políticas, saldos, dados da equipa. O One responde com a fonte e só com o que a sua função permite.</li>
    <li><b>Delegar.</b> Dentro de cada produto, o One faz o trabalho: redige a oferta de emprego, liga ao candidato, prepara a proposta de aumento.</li>
    <li><b>Automatizar.</b> A rotina é definida uma única vez e o One deteta, decide e atua. Apenas as exceções requerem aprovação.</li></ul>
    <h3>Como funciona</h3>
    <p class="note">Deteta gatilhos nos dados em tempo real, compara-os com as políticas e o histórico da empresa, escolhe a ação adequada ou encaminha para uma pessoa, executa a tarefa dentro da Factorial e regista cada operação. Todos os passos ficam visíveis e auditáveis.</p>
    <h3>Porque é que dados centralizados mudam tudo</h3>
    <p class="why" style="color:var(--ink)">Quantos mais módulos estiverem ligados, mais contexto tem o One. Uma IA genérica começa do zero; o One já conhece a estrutura da equipa, as políticas da empresa e o que aconteceu no último ciclo.</p>
    <div class="stats"><div class="stat"><b>RGPD</b><span>e Regulamento da IA da UE, alojado na UE</span></div><div class="stat"><b>As suas permissões</b><span>os mesmos perfis da Factorial, nada de novo exposto</span></div></div>
    <h3>Rotinas: a resposta certa, no momento certo, sem ter de a pedir.</h3>
    ${chatHTML([{ q: "Todos os dias 25, avisa-me das variáveis salariais pendentes.", a: "Basta criar a rotina: o One verifica o que falta antes do fecho e envia a lista de pendentes com os respetivos responsáveis." }])}`,
    routines: `<h3>Rotinas com informação sempre atualizada</h3>
  <ul class="rt">
    <li><span class="when">Segunda-feira, 9:00</span><span>Rotatividade por departamento, com a tendência explicada<span class="src">Core HR · Analítica</span></span></li>
    <li><span class="when">Dias úteis, 18:00</span><span>Pessoas com menos de 4 registos de ponto hoje<span class="src">Registo de ponto</span></span></li>
    <li><span class="when">Dia 25</span><span>Variáveis salariais pendentes antes do fecho<span class="src">Remuneração · Turnos · Despesas</span></span></li>
    <li><span class="when">Primeiro dia do mês</span><span>Formação obrigatória pendente por localização<span class="src">Formação & LMS</span></span></li>
    <li><span class="when">Sexta-feira, 12:00</span><span>Candidatos em triagem sem feedback da equipa de contratação<span class="src">ATS & recrutamento</span></span></li>
  </ul>
  <p class="disc-note">Qualquer relatório de Analítica pode ser agendado como rotina a partir do chat do One. As rotinas usam créditos One.</p>`,
    ax: { t: "Exemplos de relatórios já ligados",
      c1: ["Rotatividade e engagement por departamento", "Core HR + Engagement · rotatividade (barras) e eNPS (linha)", ["Lojas","Operações","Vendas","Suporte","Tecnologia"]],
      c2: ["Qualidade da contratação por fonte", "Recrutamento + Desempenho · retenção a 1 ano", ["Indicações","LinkedIn","Site de carreiras","Portais de emprego"]],
      c3: ["Custo de efetivos: real vs. planeado", "Efetivos + Revisão salarial + Remuneração", ["J","F","M","A","M","J"], "Real", "Planeado"],
      c4: ["Absentismo e horas extra por localização", "Ausências + Registo de ponto + Turnos", ["Madrid","Barcelona","Valência","Sevilha"], "Absentismo %", "Horas extra"],
      note: "Dados fictícios, apenas para ilustrar o que se pode cruzar.",
      tasksT: "Tarefas que o One já faz sozinho",
      tasks: ["Aprova despesas que cumprem a política e deixa-lhe só as exceções.", "Cobre turnos ligando a quem os pode assumir, seguindo as suas regras.", "Liga a candidatos que chegam à triagem e deixa-lhe o relatório.", "Resolve tickets a meio caminho para que quem os gere só tenha de aprovar."] }
};

/* ---------- PORTUGUÊS (BRASIL) ---------- */
const BR = {
  HUBS: {
    talento: { name: "Talentos", lead: "Do cargo planejado ao aumento proposto, cada decisão de talentos parte da anterior, em vez de começar do zero.", one: "Quanto mais módulos de talentos você tiver, mais contexto o One tem: ele analisa avaliações, candidaturas, treinamentos e pesquisas ao mesmo tempo." },
    tiempo: { name: "Tempo", lead: "Registros de ponto, escalas e ausências no mesmo calendário, com cada hora pronta para a folha de pagamento e para os projetos.", one: "O One cobre escalas, responde dúvidas sobre saldos e identifica falhas no ponto enquanto ainda são pequenas." },
    finanzas: { name: "Finanças", lead: "RH e Finanças trabalham com os mesmos números: quadro de pessoal, despesas, compras, projetos e orçamento.", one: "O One aprova o que está dentro da política e deixa para você só as exceções." },
    core: { name: "Core HR", lead: "A base: pessoas, documentos, políticas e o app de cada colaborador. O que é registrado aqui é usado por todos os módulos.", one: "O One conhece suas políticas, responde com a fonte e resolve solicitações antes de chegarem a uma pessoa." },
    it: { name: "TI", lead: "Dispositivos, softwares e inventário vinculados a quem os usa, do primeiro ao último dia.", one: "O One investiga o chamado, confere o estoque e prepara a compra para que só falte aprovar." },
    nomina: { name: "Folha de pagamento", lead: "Cada mudança que afeta a remuneração chega validada à folha de pagamento, do registro de ponto ao aumento.", one: "O One identifica variáveis pendentes e tudo o que não bate antes de a folha ser calculada." }
  },
  M: {
    desempeno: { name: "Desempenho",
      lead: "Avaliações, metas e feedback durante o ano todo, não só na avaliação anual.",
      value: ["Avaliações 180° e 360° com ciclos automáticos, lembretes e acordos para download.", "Metas e OKRs individuais e de equipe, com feedback contínuo para chegar à avaliação com dados.", "9-box e people analytics para ver quem tem mais potencial e quem precisa de apoio.", "Planos de incentivo: defina regras de pagamento vinculadas a metas e resultados; a Factorial calcula cada bônus e o paga automaticamente na folha de pagamento."],
      one: [{ q: "Quem da minha equipe está mostrando sinais de risco?", a: "Analisa autoavaliações e feedbacks, resume cada caso e explica por que o sinaliza." }],
      why: "Cada avaliação de desempenho embasa as decisões de treinamento e de revisão salarial. O recrutamento usa a avaliação mais recente para identificar as fontes que trazem colaboradores com maior retenção e desempenho.",
      soon: ["Metas conectadas via MCP: a Factorial atualiza as metas com dados das suas outras ferramentas."] },
    formacion: { name: "Treinamento & LMS",
      lead: "Treinamentos gravados e cursos interativos dentro da Factorial, conectados ao desempenho.",
      value: ["Catálogo, turmas e presença; treinamentos obrigatórios com rastreabilidade pronta para auditoria.", "LMS: cursos com vídeos, questionários e provas, progresso automático e certificado ao concluir.", "Custo de folha de cada treinamento calculado automaticamente."],
      one: [{ q: "Crie um curso de onboarding para a equipe das lojas.", a: "Um curso estruturado, com módulos e questionários, em minutos. Você só precisa revisar e publicar." }],
      why: "A partir da avaliação, em um clique: atribui o treinamento que fecha cada lacuna de competências e mede o impacto no ciclo seguinte.",
      stat: { n: "94%", t: "dos colaboradores ficariam mais tempo em uma empresa que investe no seu desenvolvimento (LinkedIn Workplace Learning Report, 2023)" } },
    engagement: { name: "Engajamento",
      lead: "Ouça sua equipe sem mandar mais um formulário: pulso diário, pesquisas, eNPS e 1:1 com IA.",
      value: ["Pulso da equipe no registro de ponto: check-ins sem cansaço de pesquisas e alertas para o gestor certo.", "Pesquisas e eNPS automáticos no onboarding, no desligamento e em cada marco.", "1:1 com IA: o One prepara cada 1:1 com metas, desempenho e humor."],
      one: [{ q: "Prepare o 1:1 de amanhã com a Laura.", a: "Reúne as metas dela, a última avaliação, o pulso recente e o que foi conversado nos 1:1 anteriores." }],
      why: "Bom desempenho nem sempre significa engajamento. Com o pulso conectado ao ponto e ao contexto de desempenho, o One vê o quadro completo de cada pessoa.",
      stat: { n: "40–60%", t: "menos trabalho manual com avaliações, 1:1 e pesquisas automáticas" } },
    comunidades: { name: "Comunidades",
      lead: "Espaços onde as pessoas se encontram, compartilham e se reconhecem, além do organograma.",
      value: ["Comunidades por interesse, localidade, projeto ou equipe, abertas ou por convite.", "Publicações, reconhecimentos e comemoração de marcos pelo app.", "Une quem está no escritório, em home office e nas lojas em um único espaço."],
      one: [{ q: "Quais comunidades você me recomenda, agora que entrei?", a: "Sugere as da sua equipe, da sua localidade e dos seus interesses, com base no seu perfil." }],
      why: "As comunidades usam os mesmos dados de equipe, localidade e pessoas, então cada pessoa nova encontra seu lugar desde o primeiro dia." },
    comunicaciones: { name: "Comunicação",
      lead: "Comunicados para toda a empresa ou para equipes específicas, onde suas pessoas já trabalham todos os dias.",
      value: ["Publique para a empresa toda ou para equipes e localidades específicas.", "Chega a todos pelo app, inclusive a quem não trabalha no computador.", "Os comunicados ficam junto das políticas e dos documentos a que se referem."],
      one: [{ q: "Escreva o comunicado do novo horário de fim de ano em português e espanhol.", a: "Escreve a partir da sua política de horários e traduz, pronto para revisar." }],
      why: "A segmentação vem dos mesmos dados de equipe, localidade e cargo que o resto da Factorial usa." },
    ats: { name: "ATS & recrutamento",
      lead: "Um ATS que planeja, faz a triagem e decide com você, da vaga aprovada à proposta assinada.",
      value: ["Plano de contratação: cada posição aprovada no planejamento de quadro chega como vaga, com responsável, prazo e status.", "Relatório de IA por candidato e ligações de IA no idioma dele, com transcrição e resultado verde, amarelo ou vermelho.", "Vagas ilimitadas, permissões por etapa, entrevistas em vídeo com o One e análise de retenção em um ano."],
      one: [
        { q: "Ligue para todos os candidatos que chegarem à etapa de triagem.", a: "Uma ligação no idioma deles, avisada, com consentimento e gravada. Devolve transcrição, relatório e próximo passo sugerido. Quem decide é uma pessoa." },
        { q: "Crie a vaga de Senior Product Designer em São Paulo.", a: "Escreve a vaga a partir da conversa e a publica na sua página de carreiras e em mais de 250 portais de emprego." }
      ],
      why: "A vaga nasce aprovada e com orçamento; quem assina entra com todos os dados, sem redigitar nada; e a análise cruza a fonte de recrutamento com a avaliação de desempenho.",
      stats: [{ n: "70%", t: "menos tempo de contratação com triagem inicial por IA" }, { n: "+25%", t: "de crescimento do quadro com a mesma equipe de recrutamento" }],
      soon: ["Candidatos sugeridos a partir do banco de talentos (em breve).", "WhatsApp no Recrutamento e Páginas de Empresa por entidade (em breve).", "Avaliação de fit cultural (em breve)."] },
    canal: { name: "Canal de confiança",
      lead: "Um canal para qualquer pessoa relatar irregularidades de forma confidencial, inclusive anônima.",
      value: ["Relatos confidenciais, com opção de anonimato.", "Acompanhamento de casos com acesso restrito a quem os gerencia.", "Ajuda a cumprir as regras de proteção a denunciantes."],
      oneNote: "O One respeita exatamente as permissões da Factorial: os casos só são visíveis para quem os gerencia.",
      why: "Fica no mesmo app que as demais ferramentas do colaborador, então ninguém precisa procurar onde relatar." },
    control: { name: "Registro de ponto",
      lead: "Bata o ponto pelo celular ou pelo computador, com o controle de jornada sempre atualizado.",
      value: ["Registre o ponto no app ou na web, com horas extras e saldos calculados.", "Inconsistências visíveis para o gestor antes de chegarem à folha de pagamento.", "As horas lançadas em projetos alimentam o custo real de cada projeto."],
      one: [{ q: "Todo dia útil às 18h, me envie quem tem menos de 4 registros de ponto hoje.", a: "Cria uma rotina que confere os registros de ponto todos os dias e envia a lista por e-mail." }],
      why: "O mesmo registro de ponto serve à folha de pagamento, ao custo dos projetos e ao pulso da equipe, sem ser lançado duas vezes.",
      soon: ["Inconsistências de ponto: resolva todas de uma vez, sem ir uma por uma."] },
    turnos: { name: "Escalas",
      lead: "Escalas que respeitam as suas regras e turnos cobertos sem ficar ligando para a lista toda.",
      value: ["Planejamento automático com regras próprias: descansos, horários, locais, cargos e competências respeitados automaticamente.", "Plantões e sobreavisos planejados e registrados junto com os demais turnos.", "Conectado ao contrato de cada pessoa no Portal do colaborador: horas, jornada e condições entram no planejamento.", "Os turnos reais chegam à folha de pagamento, sem escalas desatualizadas no cálculo."],
      one: [{ q: "Encontre alguém para cobrir o turno da María hoje.", a: "Confere folgas, cargos, competências, jornada e local, liga para os candidatos um a um e avisa o gestor quando o turno estiver coberto." }],
      why: "Uma ausência abre a vaga, o One a preenche e o novo turno chega ao registro de ponto e às variáveis da folha. Todas as regras respeitadas e cada ligação registrada." },
    ausencias: { name: "Ausências",
      lead: "Férias, afastamentos e licenças com saldos atualizados e aprovação em dois cliques.",
      value: ["Políticas de ausência por equipe, localidade ou convenção coletiva.", "Calendário compartilhado para ver quem está ausente antes de aprovar.", "Ausências e afastamentos sincronizados com a folha de pagamento."],
      one: [{ q: "Quantos dias de férias ainda tenho?", a: "Responde com o saldo dessa pessoa e a política aplicável. Cada pessoa só vê o seu." }],
      why: "Um afastamento não fica só no calendário: abre uma vaga nas Escalas, ajusta o registro de ponto e chega à folha de pagamento como variável." },
    plantilla: { name: "Planejamento de quadro",
      lead: "RH e Finanças olham os mesmos números desde o primeiro dia.",
      value: ["Os gestores propõem posições com cargo, nível, faixa salarial e data, vinculadas ao catálogo de cargos.", "RH e Finanças revisam uma única versão, com registro de quem decidiu o quê e quando.", "As posições aprovadas abrem automaticamente no Recrutamento: plano e execução sempre alinhados."],
      one: [{ q: "Prepare nosso plano de quadro para 2027 com as nossas diretrizes.", a: "Propõe cargos, níveis e custos para sua revisão." }],
      why: "A posição que você aprova é a vaga que você publica, e cada aumento concluído atualiza a previsão de custos do próximo plano.",
      soon: ["Fluxos de aprovação estruturados e vínculo com o orçamento.", "Comparação entre contratações planejadas e reais."] },
    proyectos: { name: "Gestão de projetos",
      lead: "Saiba se cada projeto é rentável enquanto ele acontece, não quando termina.",
      value: ["Horas lançadas a partir do widget de ponto, sem planilhas de horas paralelas.", "Custo de pessoal, custos fixos e despesas vs. orçamento, em tempo real.", "Do orçamento ao projeto e do projeto à fatura, com os dados do cliente já carregados."],
      one: [{ q: "Quais projetos estão acima do orçamento este mês?", a: "Cruza horas lançadas, custo de pessoal e despesas, e explica onde cada um se desvia." }],
      why: "O custo de uma hora vem do salário real da pessoa, e a hora vem do registro de ponto: ninguém copia dados entre ferramentas." },
    fpa: { name: "Financial Planning",
      lead: "Orçamentos e previsões com os custos reais que já estão na Factorial.",
      value: ["Orçamentos por departamento ou centro de custo.", "Realizado vs. planejado com dados de quadro, salários, despesas, compras e projetos.", "Uma única fonte da verdade para RH, Finanças e diretoria."],
      one: [{ q: "Como estamos em relação ao orçamento de pessoal neste trimestre?", a: "Compara o custo de folha real com o plano e sinaliza os desvios." }],
      why: "O orçamento se alimenta sozinho: cada contratação, aumento, despesa ou compra já está registrada no seu módulo." },
    gastos: { name: "Despesas",
      lead: "De uma pilha de recibos às contas fechadas, com uma só mensagem.",
      value: ["Envie os recibos e os campos se preenchem sozinhos.", "Cada despesa é conferida com a política: as que estão de acordo são aprovadas na hora.", "Conciliação de cartões e dados limpos para o fechamento do mês."],
      one: [{ q: "Aqui estão os recibos da minha viagem de trabalho. (envia 5 de uma vez)", a: "Lê cada recibo, prepara as despesas, concilia o cartão e confere política e permissões. Só as exceções esperam aprovação." }],
      why: "A despesa aprovada chega à folha de pagamento se for reembolsável e ao projeto se for faturável." },
    compras: { name: "Compras",
      lead: "Solicitações de compra, aprovações e fornecedores em um único fluxo.",
      value: ["Solicitações com aprovação por valor e por equipe.", "Cada compra vinculada ao seu orçamento e a quem a pediu.", "Conectado ao inventário e aos softwares para saber o que se compra e para quem."],
      one: [{ q: "Meu notebook quebrou. Preciso de um novo.", a: "Abre o chamado, confere que não há estoque, encontra um no marketplace e faz a compra assim que uma pessoa aprovar." }],
      why: "A compra começa em um chamado, passa pelo orçamento e termina no inventário da pessoa." },
    revision: { name: "Revisão salarial",
      lead: "Cada aumento justificado, dentro do orçamento e defensável.",
      value: ["Diretrizes definidas uma única vez: elegibilidade, faixas e aprovadores. Cada proposta é conferida automaticamente.", "Cada gestor vê só a sua equipe, com os casos fora da política já sinalizados, e o orçamento é distribuído em tempo real.", "O aumento aprovado vai para o contrato e para a previsão de quadro, sem redigitar nada."],
      one: [{ q: "Proponha aumentos para a minha equipe com base na nossa política.", a: "Valores e justificativa, já conferidos com o orçamento. Você só precisa aprovar." }],
      why: "Você define quantos ciclos de avaliação contam para a elegibilidade, para que o aumento reflita uma tendência e não uma nota isolada. Depois de validado, o aumento vai direto para a folha de pagamento." },
    politicas: { name: "Políticas",
      lead: "Regras definidas uma única vez e aplicadas em todos os módulos.",
      value: ["Políticas de ausência, despesas, jornada e outras, aplicadas pelos módulos que as usam.", "Manual do colaborador: as pessoas perguntam e o One responde com a fonte.", "Se o One não sabe, ele diz."],
      one: [{ q: "Posso trabalhar remotamente de outro país por duas semanas?", a: "Responde com base na sua política, mostra a fonte e só revela o que essa pessoa pode ver." }],
      why: "As dúvidas do dia a dia nunca chegam à caixa de entrada do gestor, e os mesmos critérios aprovam despesas ou ausências." },
    portal: { name: "Portal do colaborador",
      lead: "O app onde cada colaborador vê suas informações e pede o que precisa.",
      value: ["Dados pessoais, holerites, documentos e saldos em um só app.", "Ausências, despesas e chamados pelo celular.", "O One integrado para perguntar, pedir e acompanhar cada solicitação."],
      oneNote: "O One está incluído para todos os colaboradores, sem necessidade de treinamento. Cada pessoa pergunta o que precisa e só vê o que o seu cargo permite.",
      why: "Tudo o que o colaborador faz aqui vai direto para o módulo certo, sem formulários nem e-mails no meio do caminho." },
    onoff: { name: "On/Offboarding",
      lead: "Admissões e desligamentos como um único fluxo, com tarefas para RH, TI e o gestor.",
      value: ["A nova contratação chega do Recrutamento com todos os seus dados.", "Documentos, assinatura, dispositivo, acessos e treinamento de boas-vindas no mesmo fluxo.", "No desligamento, acessos e equipamentos são recuperados sem depender da memória de ninguém."],
      one: [{ q: "Prepare o onboarding da Marta para segunda-feira.", a: "Dispara as tarefas, prepara os documentos para assinatura, pede o notebook dela e atribui o curso de boas-vindas." }],
      why: "É onde mais módulos se encontram: com os dados centralizados, o primeiro dia acontece sozinho." },
    documentos: { name: "Gestão de documentos",
      lead: "Contratos, holerites e certificados de cada pessoa, com permissões e modelos.",
      value: ["Pastas por pessoa e por empresa, com permissões por cargo.", "Modelos que se preenchem com os dados do colaborador.", "O One lê qualquer arquivo e extrai o que importa."],
      one: [{ q: "Quais contratos por prazo determinado vencem neste trimestre?", a: "Cruza com os dados contratuais e devolve a lista com datas e responsáveis." }],
      why: "Uma alteração salarial aprovada atualiza o contrato; uma contratação gera seus documentos. Ninguém refaz nada." },
    firma: { name: "Assinatura eletrônica",
      lead: "Envie para assinatura sem sair da Factorial e guarde o resultado onde ele deve ficar.",
      value: ["Assine contratos, aditivos e políticas de qualquer dispositivo.", "Propostas do Recrutamento assinadas de qualquer lugar, e você sabe na hora quando foram assinadas.", "O documento assinado fica no perfil da pessoa."],
      oneNote: "O One prepara documentos a partir dos seus modelos para que você só precise revisar e enviar para assinatura.",
      why: "Nenhum dado para redigitar quando alguém assina: o status volta para o processo que pediu a assinatura." },
    analiticas: { name: "People Analytics",
      lead: "Todos os dados da Factorial em um só lugar, e o One para consultá-los em linguagem natural.",
      value: ["Relatórios que cruzam módulos sobre os mesmos dados: pessoas, tempo, talentos, folha e finanças.", "Peça ao One para criar um relatório, adicionar widgets, filtrar ou explicar uma tendência, e salve.", "Cada pessoa só vê o que as suas permissões permitem."],
      one: [{ q: "Me envie o turnover por departamento toda segunda-feira.", a: "Cria o relatório, agenda como rotina e explica a tendência a cada envio." }],
      why: "Todos os módulos desembocam aqui. Como todos os dados estão na Factorial, um relatório não se monta: se pede. Sem exportar, sem juntar planilhas e sem esperar por Finanças." },
    tickets: { name: "Chamados",
      lead: "Solicitações que chegam meio resolvidas antes de uma pessoa colocar a mão.",
      value: ["Abertos conversando com o One e acompanhados na Factorial.", "Encaminhados automaticamente para a equipe certa: TI, RH, Finanças.", "O One investiga e traduz cada mensagem nos dois sentidos."],
      one: [{ q: "Oi, One, meu notebook quebrou. Preciso de um novo.", a: "Cria o chamado, encaminha para a TI, lê o contexto, vê que não há notebooks em estoque, encontra um no marketplace e escreve o plano. Uma pessoa aprova, a compra é feita e a TI entrega." }],
      why: "O One investiga contratos, ativos de TI e perfis de colaboradores: a solução é redigida com as suas políticas e quem resolve só precisa aprovar." },
    mdm: { name: "Gestão de dispositivos móveis",
      lead: "Configure e proteja os dispositivos da empresa no mesmo lugar onde você gerencia as pessoas.",
      value: ["Cada dispositivo vinculado a quem o usa.", "Cadastro e remoção de dispositivos integrados ao onboarding e ao offboarding.", "Status de segurança da frota visível para a TI."],
      oneNote: "O One mantém sua empresa em conformidade: confere políticas, corrige inconsistências e acompanha acessos e riscos.",
      why: "Quando alguém entra ou sai, a TI não depende de um e-mail do RH: a mudança já está na Factorial." },
    inventario: { name: "Inventário",
      lead: "Quais equipamentos cada pessoa tem, com o histórico.",
      value: ["Entrega e devolução de equipamentos por pessoa.", "Integrado ao onboarding e ao offboarding.", "Estoque visível antes de comprar."],
      oneNote: "Quando chega um chamado, o One confere o inventário antes de propor uma compra.",
      why: "O inventário sabe quem é quem porque compartilha os dados de pessoas com o Core HR." },
    software: { name: "Gestão de softwares",
      lead: "Quais ferramentas a empresa usa, quem tem acesso e quanto custam.",
      value: ["Inventário de apps e licenças.", "Acessos concedidos e revogados conforme as pessoas entram e saem.", "Gasto com licenças visível para Finanças."],
      oneNote: "O One cruza licenças com pessoas ativas para identificar acessos que já não deveriam existir.",
      why: "Licenças, pessoas e orçamento em um só lugar: ninguém paga a licença de quem já saiu." },
    marketplace: { name: "Marketplace",
      lead: "Um catálogo para pedir dispositivos e equipamentos sem sair procurando fornecedores.",
      value: ["Catálogo de dispositivos pronto para pedir.", "Compras com aprovação e entrega para quem precisa.", "Conectado aos chamados e ao inventário."],
      oneNote: "Se não houver estoque, o One encontra o dispositivo no marketplace e deixa a compra pronta para aprovar.",
      why: "Do chamado à entrega sem trocar de ferramenta." },
    seguridad: { name: "Segurança (EDR)",
      tag: "Add-on",
      lead: "Antivírus e detecção de ameaças em cada dispositivo, gerenciados pela Factorial.",
      value: ["Proteção de endpoints com detecção e resposta (EDR/MDR) da SentinelOne.", "Funciona sobre o MDM: a proteção é aplicada, não só verificada.", "Se um equipamento for perdido, verifica atividade suspeita antes de apagá-lo."],
      oneNote: "O One avisa sobre equipamentos sem proteção e prepara a resposta para que a TI só precise aprovar.",
      why: "Protege os mesmos dispositivos e pessoas que o MDM gerencia: quando alguém entra ou sai, a proteção acompanha." },
    cumplimiento: { name: "Compliance",
      tag: "Add-on",
      lead: "ISO 27001 e outras normas com as evidências que sua empresa já tem na Factorial.",
      value: ["Quadro de pessoal, cargos e contratos com cláusula de confidencialidade, a partir do Core HR.", "Políticas de segurança assinadas e treinamento de conscientização concluído.", "Criptografia, revisões de acesso, registro de ativos e incidentes, a partir dos produtos de TI."],
      oneNote: "O One reúne as evidências e prepara o pacote para o auditor.",
      why: "Lê evidências de quase todos os módulos da Factorial, algo que uma ferramenta de compliance isolada não consegue." },
    beneficios: { name: "Benefícios",
      lead: "Remuneração flexível que sua equipe usa com um cartão e que o RH gerencia sem papelada.",
      value: ["Refeição, transporte, creche, plano de saúde, educação e Wellhub.", "Cartão Visa na carteira do celular, com saldo e extrato no app.", "Orçamentos por categoria, conformidade fiscal e exportação direta para a folha de pagamento."],
      one: [{ q: "Quanto de vale-refeição ainda tenho este mês?", a: "Responde com o saldo dessa pessoa, dentro das suas permissões." }],
      why: "O que cada pessoa usa chega à folha de pagamento como rubrica, sem ninguém consolidar à mão." },
    compensacion: { name: "Remuneração",
      lead: "Cada mudança chega à folha de pagamento já validada.",
      value: ["Cobre todo o ciclo da folha: pré-folha (preparação e atualizações de cada colaborador), pós-folha (resultados calculados pelo seu sistema de folha) e além, com Financial Planning e distribuição de holerites na Gestão de documentos.", "Atualizações dos colaboradores prontas para a folha: admissões, desligamentos, alterações de contrato e salário, ausências e bônus, visíveis na hora.", "Alertas antes do cálculo: variáveis pendentes, prêmios a aprovar ou escalas desatualizadas.", "Cada folha comparada com as variáveis e os contratos aprovados, e custo real vs. planejado.", "Planos de incentivo conectados ao Desempenho: regras de pagamento, cálculo automático de cada bônus e pagamento direto na folha."],
      one: [{ q: "O que falta antes de fecharmos a folha deste mês?", a: "Revisa as variáveis pendentes e tudo o que não bate, e diz quem precisa agir." }],
      why: "Tudo desemboca aqui: registros de ponto, escalas, ausências, despesas e aumentos. Se nascem conectados, chegam validados.",
      stat: { n: "40 h", t: "por mês que você pode economizar ao sincronizar admissões, desligamentos, alterações salariais, ausências e variáveis com o seu fornecedor de folha" } },
    integraciones: { name: "Integrações",
      lead: "A Factorial conectada ao seu fornecedor de folha de pagamento e às suas demais ferramentas.",
      value: ["Compatível com outros sistemas de folha de pagamento e com a Factorial Professionals para escritórios de contabilidade.", "API para conectar o seu ERP."],
      oneNote: "Se os dados estão na Factorial ou em uma ferramenta integrada, dá para consultar, delegar tarefas ou automatizar processos com o One.",
      why: "Integrar não é copiar: a mudança é registrada uma vez e sincronizada." },
    anticipo: { name: "Antecipação salarial",
      lead: "Sua equipe pode pedir parte do salário já trabalhado antes do fim do mês.",
      value: ["Pedido pelo app, sem papelada.", "Regras e limites definidos por você.", "A antecipação aparece na folha de pagamento sem ajustes manuais."],
      oneNote: "As pessoas perguntam ao One quanto podem pedir e como funciona, de acordo com a política.",
      why: "Como o salário e os dias trabalhados já estão na Factorial, o valor disponível não é calculado à mão." }
  },
  STORIES: [
    { t: "Uma nova contratação", d: "A posição é aprovada uma vez e o resto segue sozinho.", steps: ["A posição é aprovada com sua faixa salarial.", "Abre sozinha como vaga; o One faz a triagem e liga.", "A proposta é assinada pelo celular.", "Entra com todos os dados, sem redigitar nada.", "O notebook já está reservado.", "Recebe o curso de boas-vindas.", "A admissão chega validada à folha de pagamento."] },
    { t: "Uma falta de última hora", d: "Do aviso à folha de pagamento sem ninguém copiar dados.", steps: ["Alguém avisa que está doente.", "O One encontra quem pode cobrir e liga para a pessoa.", "O novo turno é registrado como qualquer outro.", "O afastamento e a troca de turno chegam como variáveis.", "O absenteísmo por local se atualiza sozinho."] },
    { t: "Um ciclo de avaliação", d: "O aumento sai da avaliação e volta para o plano.", steps: ["A avaliação aponta resultados e lacunas.", "O treinamento é atribuído em um clique.", "O One propõe o aumento dentro da política.", "O aumento chega validado à folha de pagamento.", "A previsão de custos se atualiza para o próximo plano."] },
    { t: "Um notebook quebrado", d: "Uma mensagem para o One e uma aprovação.", steps: ["Basta contar ao One para o chamado ser aberto.", "O One confere que não há estoque.", "Encontra um que está dentro da política.", "Uma pessoa aprova, a compra é feita e a TI entrega."] }
  ],
  UI: {
    sbMap: "Mapa One",
    sbConn: "Conectores",
    sbPlans: "Planos",
    sbDeck: "Pitch deck",
    sbLegal: "Jurídico e conformidade",
    video: "Veja na prática",
    navConn: "Conectores",
    connE: "One · Conectores",
    connT: "Sua empresa não vive em uma só ferramenta. O One também não.",
    connD: "Conecte os apps que sua equipe já usa, como Slack, HubSpot, Notion ou Jira. O One combina tudo com os seus dados da Factorial, sempre dentro das permissões de cada pessoa.",
    connBtn: "Ver o catálogo de conectores",
    connNote: "Catálogo em inglês",
    themeAria: "Modo noturno",
    partnerQ: "Quer ver com os seus próprios dados? Fale com o seu parceiro Factorial.",
    panelConn: "Conecte o One às suas ferramentas",
    navMap: "Mapa", navStories: "Histórias", navWhy: "IA para empresas", navPlans: "Planos One", navFacts: "Números", navNext: "O que vem por aí", navAria: "Seções",
    allin: "Tudo no One",
    center: "O centro", area: "Área", modules: "Módulos", brings: "O que entrega", withOne: "Com o One", connected: "Conectado com",
    solves: "O que resolve", tryOne: "Teste com o One",
    soon: "O que vem por aí", soonNote: "O escopo e as datas podem mudar.", close: "Fechar",
    title: "Factorial · Tudo conectado com o One",
    h1: "O One já conhece a sua empresa",
    sub: "Todos os módulos da Factorial compartilham os mesmos dados. O One trabalha sobre todos eles, com as suas permissões e as suas políticas.",
    hint: "Clique em qualquer bolha para ver o que ela entrega, o que o One faz com ela e com o que ela se conecta.",
    cue: "Continue rolando", cueAria: "Continue rolando", oneAria: "Ver o que é o One", panelAria: "Detalhes do módulo",
    s1t: "O mesmo dado, de ponta a ponta",
    s1d: "Quando cada módulo vive em uma ferramenta diferente, cada decisão começa do zero. Na Factorial, o que é registrado uma vez é usado no passo seguinte. Toque em qualquer passo para abri-lo no mapa.",
    s2t: "Suas equipes já usam IA. Que seja a sua.",
    s2d: "O que muda não é a tecnologia, é o contexto. E com dados de pessoas, confiança não se negocia.",
    cmpHead: `<tr><th></th><th>IA genérica</th><th>One</th></tr>`,
    cmpBody: `<tr><td>Contexto</td><td>Começa do zero toda vez. Você precisa colar o contexto.</td><td>Conectado aos seus dados da Factorial e às ferramentas que você integrar, desde a primeira mensagem.</td></tr>
      <tr><td>Permissões</td><td>Não sabe quem deve ver o quê.</td><td>Cada pessoa só vê o que o seu cargo permite. Os mesmos perfis, nada novo exposto.</td></tr>
      <tr><td>Conformidade</td><td>Sem garantias na UE.</td><td>Em conformidade com o GDPR e com o AI Act da UE, hospedado na UE.</td></tr>
      <tr><td>Confiabilidade</td><td>Inventa respostas sem avisar.</td><td>Responde com os seus dados e mostra a fonte. Quando não sabe, diz.</td></tr>
      <tr><td>Controle</td><td>Custo e ações pouco transparentes.</td><td>Você decide quais agentes rodam e vê cada ação e quanto ela custou.</td></tr>`,
    s4e: "One · Capacidade individual",
    s4t: "IA para toda a equipe, sem perder o controle",
    s4d: "Cada pessoa tem o seu próprio uso diário de IA, dentro das permissões em que você já confia. Combine planos individuais de acordo com o perfil de cada pessoa.",
    tiers: `<div class="tier"><div class="tn"><b>Free</b></div><p class="usage"><b>Incluído em todos os bundles.</b></p><h4>Recomendado para</h4><div class="who"><i>Todos os colaboradores</i></div><h4>O que fazem com o One</h4><ul><li>Perguntam sobre políticas, saldos, holerites e documentos, com a fonte.</li><li>Pedem ausências, despesas e chamados pelo chat.</li><li>Acompanham cada solicitação pelo app.</li></ul></div>
    <div class="tier"><div class="tn"><b>Basic</b></div><p class="usage"><b>x2 de uso vs. Free</b><br>Para uso frequente.</p><h4>Recomendado para</h4><div class="who"><i>Todos os colaboradores</i><i>Team leaders</i></div><h4>O que fazem com o One</h4><ul><li>Tudo o que o Free inclui, com o dobro de uso diário.</li><li>Para quem usa o One todos os dias no trabalho.</li></ul></div>
    <div class="tier"><div class="tn"><b>Plus</b></div><p class="usage"><b>x10 de uso vs. Basic</b><br>Para fluxos de trabalho exigentes.</p><h4>Recomendado para</h4><div class="who"><i>Team leaders</i><i>Managers</i><i>Admins</i></div><h4>O que fazem com o One</h4><ul><li>Preparam 1:1 e consultam os indicadores da sua equipe.</li><li>Aprovam ausências, despesas e escalas com o contexto já reunido.</li></ul></div>
    <div class="tier"><div class="tn"><b>Max</b></div><p class="usage"><b>x35 de uso vs. Basic</b><br>Para power users.</p><h4>Recomendado para</h4><div class="who"><i>Managers</i><i>Admins</i><i>Training Manager</i><i>Finance Manager</i></div><h4>O que fazem com o One</h4><ul><li>Criam cursos completos, processam lotes de despesas e montam relatórios e rotinas.</li><li>Pensado para um uso intensivo do One na sua área.</li></ul></div>`,
    p1: "<b>Seus dados, sob controle</b><p>Cada pessoa só vê o que já podia ver. O One segue exatamente as suas permissões da Factorial: mesmos cargos, mesmo acesso, nada novo exposto.</p>",
    p2: "<b>Ninguém gasta além da conta</b><p>Cada pessoa tem um uso diário de acordo com o seu plano individual. Quando chega ao limite, o One pausa até o dia seguinte. Sem recargas nem custos fora de controle.</p>",
    flex: "<b>Você escolhe o plano individual de cada pessoa.</b> Exemplo com 100 pessoas: 5 Max + 15 Plus + 30 Basic + 50 Free.",
    s3t: "O que vem por aí",
    s3d: "Cada produto está virando um produto de IA. O escopo e as datas podem mudar; vamos manter você atualizado.",
    road: `<div><span>Em breve</span><b>1:1 com IA</b><p>O One prepara e conduz cada 1:1 com o histórico completo da pessoa.</p></div>
    <div><span>Em breve</span><b>Cursos gamificados</b><p>Mecânicas de jogo dentro dos cursos do LMS.</p></div>
    <div><span>Em breve</span><b>Metas via MCP</b><p>A Factorial se conecta às suas ferramentas e atualiza as metas com os dados delas.</p></div>
    <div><span>Em breve</span><b>Quadro: aprovações e orçamento</b><p>Fluxos de aprovação estruturados e comparação entre planejado e realizado.</p></div>
    <div><span>Em breve</span><b>Banco de talentos sugerido</b><p>Antes de publicar a vaga, você vê quem da sua base de candidatos já tem o perfil.</p></div>
    <div><span>Em breve</span><b>WhatsApp no Recrutamento</b><p>Mensagens, aviso antes da ligação de IA e documentos pelo WhatsApp.</p></div>
    <div><span>Em breve</span><b>Inconsistências de ponto</b><p>Resolva todas as inconsistências de ponto de uma vez, sem ir uma por uma.</p></div>
    <div class="more"><span>Em breve</span><b>E muito mais</b><p>Todo mês chegam novas funcionalidades de IA a todos os produtos da Factorial.</p></div>`,
    ctaT: "Vamos ver o ciclo completo com os dados da sua empresa?",
    ctaD: "Mapeamos a estrutura das equipes, o processo de recrutamento e a política salarial da empresa e mostramos o mesmo fluxo na Factorial, com o One atuando em cada etapa.",
    ctaQ: "Ainda não fala com ninguém da Factorial?",
    ctaBtn: "Solicitar uma demo",
    footer: "Os exemplos de relatórios e conversas são ilustrativos e usam dados fictícios. Algumas funcionalidades dependem do plano contratado e dos créditos One. Factorial · outubro de 2026."
  }
};

LONG['pt-br'] = {
    one: () => `<p class="lead">Seu agente de IA pessoal no trabalho. Conhece o seu contexto, atua em toda a Factorial e ajuda você a decidir, sem expor os seus dados.</p>
    <h3>Três formas de usar</h3>
    <ul class="vals"><li><b>Pergunte.</b> Qualquer pessoa pergunta o que precisa: políticas, saldos, dados da equipe. O One responde com a fonte e só com o que o cargo dela permite.</li>
    <li><b>Delegue.</b> Dentro de cada produto, o One faz o trabalho: escreve a vaga, liga para o candidato, prepara a proposta de aumento.</li>
    <li><b>Automatize.</b> Você configura uma rotina uma vez e o One identifica, decide e age. Você aprova as exceções.</li></ul>
    <h3>Como funciona</h3>
    <p class="note">Identifica gatilhos nos seus dados em tempo real, compara com as suas políticas e o histórico, escolhe a ação ou encaminha para uma pessoa, faz o trabalho dentro da Factorial e registra o que fez. Cada passo fica visível e pode ser revisado.</p>
    <h3>Por que dados centralizados mudam tudo</h3>
    <p class="why" style="color:var(--ink)">Quanto mais módulos você conecta, mais contexto o One tem. Uma IA genérica começa do zero; o One já sabe quem é quem, o que diz a sua política e o que aconteceu no último ciclo.</p>
    <div class="stats"><div class="stat"><b>GDPR</b><span>e AI Act da UE, hospedado na UE</span></div><div class="stat"><b>Suas permissões</b><span>os mesmos perfis da Factorial, nada novo exposto</span></div></div>
    <h3>Rotinas: o One traz a resposta na hora certa</h3>
    ${chatHTML([{ q: "Todo dia 25, me avise das variáveis de folha pendentes.", a: "Basta criar a rotina: o One confere o que falta antes do fechamento e envia a lista de pendências com os responsáveis." }])}`,
    routines: `<h3>Rotinas com a informação sempre atualizada</h3>
  <ul class="rt">
    <li><span class="when">Segunda-feira, 9h</span><span>Turnover por departamento, com a tendência explicada<span class="src">Core HR · People Analytics</span></span></li>
    <li><span class="when">Dias úteis, 18h</span><span>Pessoas com menos de 4 registros de ponto hoje<span class="src">Registro de ponto</span></span></li>
    <li><span class="when">Dia 25</span><span>Variáveis de folha pendentes antes do fechamento<span class="src">Remuneração · Escalas · Despesas</span></span></li>
    <li><span class="when">Primeiro dia do mês</span><span>Treinamentos obrigatórios pendentes por local<span class="src">Treinamento & LMS</span></span></li>
    <li><span class="when">Sexta-feira, 12h</span><span>Candidatos em triagem sem feedback da equipe de contratação<span class="src">ATS & recrutamento</span></span></li>
  </ul>
  <p class="disc-note">Qualquer relatório de People Analytics pode ser agendado como rotina pelo chat do One. As rotinas usam créditos One.</p>`,
    ax: { t: "Exemplos de relatórios já conectados",
      c1: ["Turnover e engajamento por departamento", "Core HR + Engajamento · turnover (barras) e eNPS (linha)", ["Lojas","Operações","Vendas","Suporte","Tecnologia"]],
      c2: ["Qualidade da contratação por fonte", "Recrutamento + Desempenho · retenção em 1 ano", ["Indicações","LinkedIn","Site de carreiras","Portais de emprego"]],
      c3: ["Custo de quadro: real vs. planejado", "Quadro + Revisão salarial + Remuneração", ["J","F","M","A","M","J"], "Real", "Planejado"],
      c4: ["Absenteísmo e horas extras por local", "Ausências + Registro de ponto + Escalas", ["São Paulo","Rio","Belo Horizonte","Curitiba"], "Absenteísmo %", "Horas extras"],
      note: "Dados fictícios, apenas para ilustrar o que dá para cruzar.",
      tasksT: "Tarefas que o One já faz sozinho",
      tasks: ["Aprova despesas que estão dentro da política e deixa para você só as exceções.", "Cobre turnos ligando para quem pode assumir, seguindo as suas regras.", "Liga para candidatos que chegam à triagem e deixa o relatório para você.", "Deixa chamados meio resolvidos para que quem os gerencia só precise aprovar."] }
};

/* ---------- POLSKI ---------- */
/* Na rynku polskim nie pokazujemy: Benefity, Wypłata zaliczki, Marketplace IT (HIDE.pl) ani połączeń AI w Grafikach. */
const PL = {
  HUBS: {
    talento: { name: "Talenty", lead: "Od planowanego stanowiska po podwyżkę, której potrafisz bronić. Każda decyzja kadrowa opiera się na poprzedniej, a nie zaczyna od zera.", one: "Im więcej modułów talentowych masz, tym więcej kontekstu ma One: czyta jednocześnie oceny, aplikacje, szkolenia i ankiety." },
    tiempo: { name: "Czas", lead: "Rejestracja czasu pracy, grafiki i nieobecności w jednym kalendarzu, a każda godzina gotowa do listy płac i projektów.", one: "One pomaga obsadzać zmiany, odpowiada na pytania o salda i wyłapuje problemy z rejestracją czasu, zanim urosną." },
    finanzas: { name: "Finanse", lead: "HR i Finanse pracują na tych samych liczbach: zatrudnienie, wydatki, zakupy, projekty i budżet.", one: "One zatwierdza to, co zgodne z polityką, a Tobie zostawia tylko wyjątki." },
    core: { name: "Core HR", lead: "Fundament: ludzie, dokumenty, polityki i aplikacja każdego pracownika. To, co zapiszesz tutaj, wykorzystuje każdy moduł.", one: "One zna Twoje polityki, odpowiada ze wskazaniem źródła i załatwia prośby, zanim trafią do człowieka." },
    it: { name: "IT", lead: "Urządzenia, oprogramowanie i wyposażenie przypisane do osoby, która z nich korzysta, od pierwszego do ostatniego dnia.", one: "One analizuje zgłoszenie, sprawdza stan magazynu i przygotowuje zakup, tak że człowiek musi go tylko zatwierdzić." },
    nomina: { name: "Płace", lead: "Każda zmiana wpływająca na wynagrodzenie trafia do listy płac już zweryfikowana, od rejestracji czasu po podwyżkę.", one: "One wykrywa brakujące składniki i wszystko, co się nie zgadza, zanim lista płac zostanie naliczona." }
  },
  M: {
    desempeno: { name: "Ocena pracowników",
      lead: "Oceny, cele i feedback przez cały rok, a nie tylko przy rocznej ocenie.",
      value: ["Oceny 180° i 360° z automatycznymi cyklami, przypomnieniami i porozumieniami do pobrania.", "Cele i OKR-y indywidualne i zespołowe, z ciągłym feedbackiem, dzięki czemu do oceny przychodzisz z danymi.", "9-box i analityka talentów, żeby widzieć, kto ma największy potencjał, a kto potrzebuje wsparcia.", "Plany premiowe: ustal zasady wypłat powiązane z celami i wynikami; Factorial wylicza każdą premię i wypłaca ją automatycznie w liście płac."],
      one: [{ q: "Kto w moim zespole pokazuje sygnały ryzyka?", a: "Analizuje samooceny i feedback, podsumowuje każdy przypadek i wyjaśnia, dlaczego go oznacza." }],
      why: "Każdy wynik zasila szkolenia, które przypisujesz, i podwyżki, które proponujesz. Rekrutacja korzysta z najnowszej oceny, żeby mierzyć, które źródła przyprowadzają ludzi, którzy zostają i osiągają wyniki.",
      soon: ["Cele połączone przez MCP: Factorial aktualizuje cele danymi z Twoich innych narzędzi."] },
    formacion: { name: "Szkolenia i LMS",
      lead: "Nagrane szkolenia i interaktywne kursy w Factorial, powiązane z oceną pracowników.",
      value: ["Katalog, sesje i obecność; szkolenia obowiązkowe z pełną identyfikowalnością na potrzeby audytu.", "LMS: kursy z wideo, quizami i testami, automatycznym postępem i certyfikatem po ukończeniu.", "Koszt wynagrodzeń każdego szkolenia liczony automatycznie."],
      one: [{ q: "Stwórz kurs onboardingowy dla zespołu sklepów.", a: "Uporządkowany kurs z modułami i quizami, w kilka minut. Ty go przeglądasz i publikujesz." }],
      why: "Prosto z oceny, jednym kliknięciem: przypisz szkolenie, które zamyka każdą lukę kompetencyjną, i zmierz jego efekt w kolejnym cyklu.",
      stat: { n: "94%", t: "pracowników zostałoby dłużej w firmie, która inwestuje w ich rozwój (LinkedIn Workplace Learning Report, 2023)" } },
    engagement: { name: "Zaangażowanie",
      lead: "Słuchaj zespołu bez wysyłania kolejnego formularza: codzienny puls, ankiety, eNPS i spotkania 1:1 z AI.",
      value: ["Puls zespołu przy rejestracji czasu: krótkie check-iny bez zmęczenia ankietami i alerty do właściwego menedżera.", "Automatyczne ankiety i eNPS przy onboardingu, przy odejściu i przy każdym kamieniu milowym.", "Spotkania 1:1 z AI: One przygotowuje każde 1:1 na podstawie celów, wyników i nastroju."],
      one: [{ q: "Przygotuj jutrzejsze 1:1 z Laurą.", a: "Zbiera jej cele, ostatnią ocenę, niedawny puls i to, o czym rozmawialiście na poprzednich 1:1." }],
      why: "Dobre wyniki nie zawsze oznaczają zaangażowanie. Gdy puls jest powiązany z rejestracją czasu i kontekstem ocen, One widzi pełny obraz każdej osoby.",
      stat: { n: "40–60%", t: "mniej ręcznej administracji dzięki automatycznym ocenom, 1:1 i ankietom" } },
    comunidades: { name: "Społeczności",
      lead: "Przestrzenie, w których ludzie się spotykają, dzielą i doceniają, ponad strukturą organizacyjną.",
      value: ["Społeczności według zainteresowań, lokalizacji, projektu lub zespołu, otwarte lub na zaproszenie.", "Posty, wyróżnienia i świętowanie ważnych momentów z poziomu aplikacji.", "Łączy osoby z biura, pracujące zdalnie i w sklepach w jednym miejscu."],
      one: [{ q: "Jakie społeczności polecasz mi teraz, gdy dołączyłem?", a: "Proponuje te związane z Twoim zespołem, lokalizacją i zainteresowaniami, na podstawie Twojego profilu." }],
      why: "Społeczności korzystają z tych samych danych o zespołach, lokalizacjach i ludziach, więc każda nowa osoba od pierwszego dnia znajduje swoje miejsce." },
    comunicaciones: { name: "Komunikacja",
      lead: "Ogłoszenia dla całej firmy lub wybranych zespołów, tam, gdzie Twoi ludzie i tak pracują każdego dnia.",
      value: ["Publikuj dla całej firmy albo dla wybranych zespołów i lokalizacji.", "Dociera do wszystkich przez aplikację, także do osób, które nie pracują przy komputerze.", "Ogłoszenia są obok polityk i dokumentów, których dotyczą."],
      one: [{ q: "Napisz ogłoszenie o nowym grafiku letnim po polsku i po angielsku.", a: "Przygotowuje je na podstawie Twojej polityki czasu pracy i tłumaczy, gotowe do sprawdzenia." }],
      why: "Grupy odbiorców wynikają z tych samych danych o zespołach, lokalizacjach i stanowiskach, z których korzysta reszta Factorial." },
    ats: { name: "ATS i rekrutacja",
      lead: "ATS, który planuje, selekcjonuje i decyduje razem z Tobą, od zatwierdzonego stanowiska po podpisaną ofertę.",
      value: ["Plan zatrudnienia: każde stanowisko zatwierdzone w planowaniu zatrudnienia trafia jako rekrutacja z właścicielem, terminem i statusem.", "Raport AI dla każdego kandydata i rozmowy AI w jego języku, z transkrypcją i wynikiem: zielonym, żółtym lub czerwonym.", "Nielimitowane rekrutacje, uprawnienia na każdym etapie, rozmowy wideo z One i analityka retencji po roku."],
      one: [
        { q: "Zadzwoń do każdego kandydata, który dotrze do etapu wstępnej selekcji.", a: "Rozmowa w jego języku, zapowiedziana, za zgodą i nagrywana. Zwraca transkrypcję, raport i proponowany kolejny krok. Decyduje człowiek." },
        { q: "Utwórz ogłoszenie dla Senior Product Designera w Warszawie.", a: "Pisze ogłoszenie na podstawie rozmowy i publikuje je na Twojej stronie kariery i w ponad 250 portalach z ofertami pracy." }
      ],
      why: "Rekrutacja rodzi się zatwierdzona i z budżetem; osoba, która podpisze ofertę, dołącza ze wszystkimi danymi, bez przepisywania; a analityka zestawia źródło rekrutacji z oceną pracownika.",
      stats: [{ n: "70%", t: "krótszy czas zatrudnienia dzięki wstępnej selekcji z AI" }, { n: "+25%", t: "wzrostu zatrudnienia przy tym samym zespole rekrutacji" }],
      soon: ["Kandydaci proponowani z bazy talentów (wkrótce).", "WhatsApp w Rekrutacji i strony firmowe dla każdego podmiotu (wkrótce).", "Ocena dopasowania kulturowego (wkrótce)."] },
    canal: { name: "Kanał zaufania",
      lead: "Kanał, w którym każdy może poufnie, także anonimowo, zgłosić nieprawidłowości.",
      value: ["Poufne zgłoszenia, z możliwością zachowania anonimowości.", "Obsługa spraw z dostępem ograniczonym do osób, które je prowadzą.", "Pomaga spełnić przepisy o ochronie sygnalistów."],
      oneNote: "One dokładnie respektuje uprawnienia w Factorial: sprawy widzą tylko osoby, które je prowadzą, nikt inny.",
      why: "Jest w tej samej aplikacji co pozostałe narzędzia pracownika, więc nikt nie musi szukać, gdzie zgłosić sprawę." },
    control: { name: "Rejestracja czasu pracy",
      lead: "Rejestruj czas pracy z telefonu lub komputera, z ewidencją zawsze aktualną.",
      value: ["Rejestracja czasu w aplikacji lub w przeglądarce, z wyliczonymi nadgodzinami i saldami.", "Problemy widoczne dla menedżera, zanim trafią do listy płac.", "Godziny przypisane do projektów zasilają rzeczywisty koszt każdego projektu."],
      one: [{ q: "W każdy dzień roboczy o 18:00 wyślij mi listę osób, które mają dziś mniej niż 4 wpisy czasu pracy.", a: "Tworzy rutynę, która codziennie sprawdza wpisy i wysyła Ci listę e-mailem." }],
      why: "Ten sam wpis czasu pracy służy liście płac, kosztom projektów i pulsowi zespołu, bez rejestrowania go dwa razy.",
      soon: ["Niespójności w rejestracji czasu: popraw wszystkie naraz, bez przechodzenia po kolei."] },
    turnos: { name: "Grafiki",
      lead: "Grafiki zgodne z Twoimi zasadami i luki obsadzane bez wydzwaniania po liście.",
      value: ["Automatyczne planowanie z własnymi zasadami: odpoczynki, godziny, lokalizacje, stanowiska i kompetencje respektowane automatycznie.", "Dyżury planowane i rozliczane razem z pozostałymi zmianami.", "Powiązanie z umową każdej osoby w Portalu pracownika: godziny, wymiar czasu pracy i warunki są brane pod uwagę przy planowaniu.", "Rzeczywiste zmiany trafiają do listy płac, bez nieaktualnych grafików w wyliczeniach."],
      one: [{ q: "Znajdź kogoś na dzisiejszą zmianę Marii.", a: "Sprawdza dni wolne, stanowiska, kompetencje, grafik i lokalizację, proponuje osoby, które mogą ją przejąć, i informuje menedżera, gdy zmiana jest obsadzona." }],
      why: "Nieobecność otwiera lukę, One pomaga ją obsadzić, a nowa zmiana trafia do rejestracji czasu i składników płacowych. Każda zasada przestrzegana i każdy krok zapisany." },
    ausencias: { name: "Nieobecności",
      lead: "Urlopy, zwolnienia lekarskie i inne nieobecności z aktualnymi saldami i akceptacją w dwa kliknięcia.",
      value: ["Polityki nieobecności według zespołu, lokalizacji lub regulaminu.", "Wspólny kalendarz, żeby przed akceptacją widzieć, kogo nie ma.", "Nieobecności i zwolnienia lekarskie zsynchronizowane z listą płac."],
      one: [{ q: "Ile dni urlopu mi zostało?", a: "Odpowiada saldem tej osoby i polityką, która ją obowiązuje. Każdy widzi tylko swoje." }],
      why: "Zwolnienie lekarskie nie zostaje tylko w kalendarzu: otwiera lukę w Grafikach, koryguje rejestrację czasu i trafia do listy płac jako składnik." },
    plantilla: { name: "Planowanie zatrudnienia",
      lead: "HR i Finanse widzą te same liczby od pierwszego dnia. Koniec z pięcioma wersjami arkusza.",
      value: ["Menedżerowie proponują stanowiska z rolą, poziomem, widełkami płacowymi i datą, powiązane z katalogiem stanowisk.", "HR i Finanse przeglądają jedną wersję, z zapisem, kto co zdecydował i kiedy.", "Zatwierdzone stanowiska otwierają się automatycznie w Rekrutacji: plan i realizacja zawsze się zgadzają."],
      one: [{ q: "Przygotuj nasz plan zatrudnienia na 2027 według naszych wytycznych.", a: "Proponuje role, poziomy i koszty do Twojej akceptacji." }],
      why: "Stanowisko, które zatwierdzasz, to ogłoszenie, które publikujesz, a każda zakończona podwyżka aktualizuje prognozę kosztów na kolejny plan.",
      soon: ["Uporządkowane ścieżki akceptacji i powiązanie z budżetem.", "Porównanie zatrudnień planowanych i rzeczywistych."] },
    proyectos: { name: "Zarządzanie projektami",
      lead: "Wiedz, czy projekt jest rentowny, kiedy trwa, a nie dopiero gdy się kończy.",
      value: ["Godziny rejestrowane z widżetu czasu pracy, bez równoległych arkuszy.", "Koszt pracy, koszty stałe i wydatki w porównaniu z budżetem, w czasie rzeczywistym.", "Od oferty do projektu i od projektu do faktury, z danymi klienta już wczytanymi."],
      one: [{ q: "Które projekty przekraczają w tym miesiącu budżet?", a: "Zestawia zarejestrowane godziny, koszt pracy i wydatki, i wyjaśnia, gdzie każdy z nich odbiega od planu." }],
      why: "Koszt godziny wynika z rzeczywistego wynagrodzenia osoby, a godzina z rejestracji czasu: nikt nie kopiuje danych między narzędziami." },
    fpa: { name: "Financial Planning",
      lead: "Budżety i prognozy oparte na rzeczywistych kosztach, które już są w Factorial.",
      value: ["Budżety według działu lub centrum kosztów.", "Wykonanie vs plan na danych o zatrudnieniu, płacach, wydatkach, zakupach i projektach.", "Jedno źródło prawdy dla HR, Finansów i zarządu."],
      one: [{ q: "Jak wypadamy w tym kwartale względem budżetu na ludzi?", a: "Porównuje rzeczywisty koszt wynagrodzeń z planem i oznacza odchylenia." }],
      why: "Budżet zasila się sam: każde zatrudnienie, podwyżka, wydatek czy zakup jest już zapisany w swoim module." },
    gastos: { name: "Wydatki",
      lead: "Od sterty paragonów do zamkniętych ksiąg, jedną wiadomością.",
      value: ["Wgraj paragony, a pola uzupełnią się same.", "Każdy wydatek jest sprawdzany pod kątem polityki: zgodne są akceptowane od razu.", "Uzgadnianie kart i czyste dane na zamknięcie miesiąca."],
      one: [{ q: "Oto paragony z mojej podróży służbowej. (wgrywa 5 naraz)", a: "Czyta każdy paragon, przygotowuje wydatki, uzgadnia kartę i sprawdza politykę oraz uprawnienia. Na człowieka czekają tylko wyjątki." }],
      why: "Zatwierdzony wydatek trafia do listy płac, jeśli trzeba go zwrócić, i do projektu, jeśli można go refakturować." },
    compras: { name: "Zakupy",
      lead: "Wnioski zakupowe, akceptacje i dostawcy w jednym procesie.",
      value: ["Wnioski z akceptacją zależną od kwoty i zespołu.", "Każdy zakup powiązany z budżetem i z osobą, która go zgłosiła.", "Połączenie z wyposażeniem i oprogramowaniem, żeby wiedzieć, co się kupuje i dla kogo."],
      one: [{ q: "Zepsuł mi się laptop. Potrzebuję nowego.", a: "Otwiera zgłoszenie, sprawdza, że nie ma go na stanie, przygotowuje wniosek zakupowy na model zgodny z polityką i składa zamówienie, gdy człowiek je zatwierdzi." }],
      why: "Zakup zaczyna się od zgłoszenia, przechodzi przez budżet i kończy w wyposażeniu danej osoby." },
    revision: { name: "Przegląd wynagrodzeń",
      lead: "Każda podwyżka uzasadniona, w budżecie i możliwa do obrony.",
      value: ["Wytyczne ustalane raz: uprawnienia do podwyżki, widełki i osoby akceptujące. Każda propozycja jest sprawdzana automatycznie.", "Każdy menedżer widzi tylko swój zespół, z oznaczonymi pozycjami poza polityką, a budżet jest rozdzielany w czasie rzeczywistym.", "Zatwierdzona podwyżka trafia do umowy i do prognozy zatrudnienia, bez przepisywania."],
      one: [{ q: "Zaproponuj podwyżki dla mojego zespołu zgodnie z naszą polityką.", a: "Kwoty i uzasadnienie, już sprawdzone względem budżetu. Ty zatwierdzasz." }],
      why: "Ty decydujesz, ile cykli ocen liczy się do uprawnienia: podwyżka odzwierciedla trend, a nie jednorazowy wynik. I trafia do listy płac jako zweryfikowany składnik." },
    politicas: { name: "Polityki",
      lead: "Twoje zasady, zapisane raz i stosowane w każdym module.",
      value: ["Polityki nieobecności, wydatków, czasu pracy i inne, stosowane przez moduły, które z nich korzystają.", "Regulamin: ludzie pytają, a One odpowiada ze wskazaniem źródła.", "Jeśli One czegoś nie wie, mówi o tym."],
      one: [{ q: "Czy mogę przez dwa tygodnie pracować zdalnie z innego kraju?", a: "Odpowiada na podstawie Twojej polityki, pokazuje źródło i ujawnia tylko to, co ta osoba może zobaczyć." }],
      why: "Rutynowe pytania nigdy nie trafiają do skrzynki menedżera, a te same kryteria akceptują wydatki czy urlopy." },
    portal: { name: "Portal pracownika",
      lead: "Aplikacja, w której każdy widzi swoje informacje i prosi o to, czego potrzebuje.",
      value: ["Dane osobowe, paski płacowe, dokumenty i salda w jednej aplikacji.", "Urlopy, wydatki i zgłoszenia z telefonu.", "Wbudowany One, żeby pytać, składać wnioski i śledzić każdą sprawę."],
      oneNote: "One jest dostępny dla wszystkich pracowników, bez szkolenia. Każdy pyta o to, czego potrzebuje, i widzi tylko to, na co pozwala jego rola.",
      why: "Wszystko, co pracownik robi tutaj, trafia prosto do właściwego modułu, bez formularzy i e-maili po drodze." },
    onoff: { name: "On/Offboarding",
      lead: "Przyjścia i odejścia jako jeden proces, z zadaniami dla HR, IT i menedżera.",
      value: ["Nowa osoba przychodzi z Rekrutacji ze wszystkimi swoimi danymi.", "Dokumenty, podpis, urządzenie, dostępy i szkolenie powitalne w jednym procesie.", "Przy odejściu dostępy i sprzęt są odzyskiwane bez polegania na czyjejś pamięci."],
      one: [{ q: "Przygotuj onboarding Marty na poniedziałek.", a: "Uruchamia zadania, przygotowuje dokumenty do podpisu, zamawia jej laptopa i przypisuje kurs powitalny." }],
      why: "Tu spotyka się najwięcej modułów: jeśli dane są w jednym miejscu, pierwszy dzień organizuje się sam." },
    documentos: { name: "Zarządzanie dokumentami",
      lead: "Umowy, paski płacowe i zaświadczenia każdej osoby, z uprawnieniami i szablonami.",
      value: ["Foldery dla każdej osoby i dla firmy, z uprawnieniami według roli.", "Szablony, które wypełniają się danymi pracownika.", "One czyta każdy plik i wyciąga to, co ważne."],
      one: [{ q: "Które umowy na czas określony kończą się w tym kwartale?", a: "Zestawia je z danymi umów i zwraca listę z datami i osobami odpowiedzialnymi." }],
      why: "Zatwierdzona zmiana wynagrodzenia aktualizuje umowę; nowe zatrudnienie generuje swoje dokumenty. Nikt ich nie tworzy od nowa." },
    firma: { name: "Podpis elektroniczny",
      lead: "Wysyłaj dokumenty do podpisu bez wychodzenia z Factorial i przechowuj wynik tam, gdzie powinien być.",
      value: ["Podpisuj umowy, aneksy i polityki z dowolnego urządzenia.", "Oferty z Rekrutacji podpisywane z dowolnego miejsca, a Ty od razu wiesz, kiedy zostały podpisane.", "Podpisany dokument zostaje w profilu osoby."],
      oneNote: "One przygotowuje dokumenty z Twoich szablonów, więc musisz je tylko sprawdzić i wysłać do podpisu.",
      why: "Zero danych do przepisywania, gdy ktoś podpisze: status wraca do procesu, który o podpis prosił." },
    analiticas: { name: "Analityka",
      lead: "Wszystkie dane Factorial w jednym miejscu i One, który odpowiada na pytania o nie w naturalnym języku.",
      value: ["Raporty łączące moduły na tych samych danych: ludzie, czas, talenty, płace i finanse.", "Poproś One o raport, dodanie widżetów, filtr lub wyjaśnienie trendu, i zapisz go.", "Każdy widzi tylko to, na co pozwalają jego uprawnienia."],
      one: [{ q: "Wysyłaj mi w każdy poniedziałek rotację według działów.", a: "Tworzy raport, ustawia go jako rutynę i przy każdej wysyłce wyjaśnia trend." }],
      why: "Tu spływa każdy moduł. Ponieważ wszystkie dane są w Factorial, raportu się nie buduje, tylko się o niego prosi. Bez eksportów, bez łączenia arkuszy i bez czekania na Finanse." },
    tickets: { name: "Zgłoszenia",
      lead: "Prośby, które docierają w połowie rozwiązane, zanim dotknie ich człowiek.",
      value: ["Otwierane w rozmowie z One i śledzone w Factorial.", "Automatycznie kierowane do właściwego zespołu: IT, HR, Finanse.", "One analizuje sprawę i tłumaczy każdą wiadomość w obie strony."],
      one: [{ q: "Cześć One, zepsuł mi się laptop. Potrzebuję nowego.", a: "Tworzy zgłoszenie, kieruje je do IT, czyta kontekst, widzi, że nie ma laptopów na stanie, i przygotowuje plan zakupu. Człowiek akceptuje, sprzęt jest kupowany, a IT go dostarcza." }],
      why: "One sprawdza umowy, zasoby IT i profile pracowników: rozwiązanie jest przygotowane według Twoich polityk, a osoba, która je obsługuje, tylko je akceptuje." },
    mdm: { name: "Zarządzanie urządzeniami mobilnymi",
      lead: "Konfiguruj i zabezpieczaj firmowe urządzenia w tym samym miejscu, w którym zarządzasz ludźmi.",
      value: ["Każde urządzenie przypisane do osoby, która z niego korzysta.", "Rejestracja i usuwanie urządzeń w ramach onboardingu i offboardingu.", "Stan bezpieczeństwa floty widoczny dla IT."],
      oneNote: "One dba o zgodność: sprawdza polityki, poprawia niespójności i monitoruje dostępy i ryzyka.",
      why: "Gdy ktoś dołącza lub odchodzi, IT nie czeka na e-mail z HR: zmiana jest już w Factorial." },
    inventario: { name: "Wyposażenie",
      lead: "Jaki sprzęt ma każda osoba, wraz z historią.",
      value: ["Wydawanie i zwrot sprzętu dla każdej osoby.", "Wbudowane w onboarding i offboarding.", "Stan magazynu widoczny przed zakupem."],
      oneNote: "Gdy przychodzi zgłoszenie, One sprawdza wyposażenie, zanim zaproponuje zakup.",
      why: "Wyposażenie wie, kto jest kim, bo korzysta z tych samych danych o ludziach co Core HR." },
    software: { name: "Zarządzanie oprogramowaniem",
      lead: "Z jakich narzędzi korzysta firma, kto ma do nich dostęp i ile kosztują.",
      value: ["Spis aplikacji i licencji.", "Dostępy nadawane i odbierane, gdy ludzie dołączają i odchodzą.", "Wydatki na licencje widoczne dla Finansów."],
      oneNote: "One zestawia licencje z aktywnymi osobami, żeby wyłapać dostępy, które nie powinny już istnieć.",
      why: "Licencje, ludzie i budżet w jednym miejscu: nikt nie płaci za konto osoby, która już odeszła." },
    marketplace: { name: "Marketplace",
      lead: "Katalog do zamawiania urządzeń i sprzętu bez szukania dostawców.",
      value: ["Katalog urządzeń gotowych do zamówienia.", "Zakupy z akceptacją i dostawą do osoby, która ich potrzebuje.", "Połączony ze zgłoszeniami i wyposażeniem."],
      oneNote: "Jeśli nie ma sprzętu na stanie, One znajduje urządzenie w marketplace i przygotowuje zakup do akceptacji.",
      why: "Od zgłoszenia do dostawy bez zmiany narzędzia." },
    seguridad: { name: "Bezpieczeństwo (EDR)",
      tag: "Add-on",
      lead: "Antywirus i wykrywanie zagrożeń na każdym urządzeniu, zarządzane w Factorial.",
      value: ["Ochrona punktów końcowych z wykrywaniem i reagowaniem (EDR/MDR) SentinelOne.", "Działa na MDM: ochrona jest stosowana, a nie tylko sprawdzana.", "Gdy urządzenie zginie, sprawdza podejrzaną aktywność przed wyczyszczeniem."],
      oneNote: "One wskazuje niechronione urządzenia i przygotowuje reakcję, tak że IT tylko zatwierdza.",
      why: "Chroni te same urządzenia i osoby, którymi zarządza MDM: przy każdym przyjściu i odejściu ochrona idzie za nimi." },
    cumplimiento: { name: "Zgodność",
      tag: "Add-on",
      lead: "ISO 27001 i NIS2 na podstawie dowodów, które firma ma już w Factorial.",
      value: ["Lista pracowników, role i umowy z klauzulą poufności z Core HR.", "Podpisane polityki bezpieczeństwa i ukończone szkolenia z cyberświadomości.", "Szyfrowanie, przeglądy dostępu, rejestr zasobów i incydentów z produktów IT."],
      oneNote: "One zbiera dowody i przygotowuje pakiet dla audytora.",
      why: "Czyta dowody z niemal wszystkich modułów Factorial, czego nie potrafi osobne narzędzie do zgodności." },
    beneficios: { name: "Benefity",
      lead: "Elastyczne benefity, z których zespół korzysta kartą, a HR zarządza nimi bez papierów.",
      value: ["Posiłki, transport, opieka nad dziećmi, ubezpieczenie zdrowotne, szkolenia i Wellhub.", "Karta Visa w portfelu telefonu, z saldem i historią w aplikacji.", "Budżety według kategorii, zgodność podatkowa i bezpośredni eksport do listy płac."],
      one: [{ q: "Ile zostało mi w tym miesiącu na posiłki?", a: "Odpowiada saldem tej osoby, w ramach jej uprawnień." }],
      why: "To, z czego korzysta każda osoba, trafia do listy płac jako składnik, bez ręcznego zestawiania." },
    compensacion: { name: "Wynagrodzenia",
      lead: "Każda zmiana trafia do listy płac już zweryfikowana.",
      value: ["Obejmuje cały cykl płacowy: przygotowanie (dane i aktualizacje każdego pracownika), wyniki (naliczone przez Twój system płacowy) i dalej, z Financial Planning i dystrybucją pasków płacowych w Zarządzaniu dokumentami.", "Aktualizacje pracowników gotowe do listy płac: zatrudnienia, odejścia, zmiany umów i wynagrodzeń, nieobecności i premie, widoczne od razu.", "Alerty przed naliczeniem: brakujące składniki, niezatwierdzone premie lub nieaktualne grafiki.", "Każda lista płac porównana z zatwierdzonymi składnikami i umowami, oraz koszt rzeczywisty vs planowany.", "Plany premiowe powiązane z Oceną pracowników: zasady wypłat, automatyczne wyliczenie każdej premii i wypłata bezpośrednio w liście płac."],
      one: [{ q: "Czego brakuje, zanim zamkniemy listę płac za ten miesiąc?", a: "Sprawdza brakujące składniki i wszystko, co się nie zgadza, i mówi, kto musi działać." }],
      why: "Tu spływa wszystko: rejestracja czasu, grafiki, nieobecności, wydatki i podwyżki. Jeśli powstają połączone, docierają zweryfikowane.",
      stat: { n: "40 h", t: "miesięcznie, które możesz zaoszczędzić, synchronizując zatrudnienia, odejścia, zmiany wynagrodzeń, nieobecności i składniki z dostawcą usług płacowych" } },
    integraciones: { name: "Integracje",
      lead: "Factorial połączony z Twoim dostawcą usług płacowych i pozostałymi narzędziami.",
      value: ["Współpracuje z innymi systemami płacowymi oraz z Factorial Professionals dla biur rachunkowych.", "API do połączenia z Twoim ERP."],
      oneNote: "Jeśli dane są w Factorial lub w narzędziu, które połączysz, możesz pytać, delegować lub automatyzować z One.",
      why: "Integracja to nie kopiowanie: zmiana zapisuje się raz i synchronizuje." },
    anticipo: { name: "Wypłata zaliczki",
      lead: "Zespół może poprosić o część już zarobionego wynagrodzenia przed końcem miesiąca.",
      value: ["Wniosek z aplikacji, bez papierów.", "Zasady i limity ustalasz Ty.", "Zaliczka uwzględniona w liście płac bez ręcznych korekt."],
      oneNote: "Ludzie pytają One, o ile mogą poprosić i jak to działa, zgodnie z Twoją polityką.",
      why: "Ponieważ wynagrodzenie i przepracowane dni są już w Factorial, dostępnej kwoty nie liczy się ręcznie." }
  },
  STORIES: [
    { t: "Nowe zatrudnienie", d: "Stanowisko zatwierdzasz raz, a reszta dzieje się sama.", steps: ["Stanowisko zostaje zatwierdzone z widełkami płacowymi.", "Rekrutacja otwiera się automatycznie; One selekcjonuje i dzwoni.", "Oferta zostaje podpisana na telefonie.", "Nowa osoba dołącza ze wszystkimi danymi, bez przepisywania.", "Jej laptop jest już przypisany.", "Dostaje kurs powitalny.", "Jej zatrudnienie trafia do listy płac zweryfikowane."] },
    { t: "Nagłe zwolnienie lekarskie", d: "Od informacji do listy płac, bez kopiowania danych.", steps: ["Ktoś zgłasza, że jest chory.", "One znajduje, kto może go zastąpić, i proponuje zastępstwo.", "Nowa zmiana jest rejestrowana jak każda inna.", "Zwolnienie i zmiana grafiku trafiają jako składniki.", "Absencja według lokalizacji aktualizuje się sama."] },
    { t: "Cykl ocen", d: "Podwyżka wynika z oceny i wraca do planu.", steps: ["Ocena wskazuje wyniki i luki.", "Szkolenie przypisujesz jednym kliknięciem.", "One proponuje podwyżkę zgodną z polityką.", "Podwyżka trafia do listy płac zweryfikowana.", "Prognoza kosztów aktualizuje się na kolejny plan."] },
    { t: "Zepsuty laptop", d: "Jedna wiadomość do One i jedna akceptacja.", steps: ["Mówisz o tym One, a One otwiera zgłoszenie.", "One sprawdza, że nie ma go na stanie.", "Wybiera model zgodny z polityką.", "Człowiek akceptuje, sprzęt jest kupowany, a IT go dostarcza."] }
  ],
  UI: {
    sbMap: "Mapa One",
    sbConn: "Konektory",
    sbPlans: "Plany",
    sbDeck: "Pitch deck",
    sbLegal: "Prawo i zgodność",
    video: "Zobacz, jak to działa",
    navConn: "Konektory",
    connE: "One · Konektory",
    connT: "Twoja firma nie działa w jednym narzędziu. One też nie.",
    connD: "Połącz aplikacje, z których Twój zespół już korzysta, takie jak Slack, HubSpot, Notion czy Jira. One łączy je z Twoimi danymi w Factorial, zawsze w ramach uprawnień każdej osoby.",
    connBtn: "Zobacz katalog konektorów",
    connNote: "Katalog po angielsku",
    themeAria: "Tryb nocny",
    partnerQ: "Chcesz zobaczyć to na własnych danych? Zapytaj swojego partnera Factorial.",
    panelConn: "Połącz One ze swoimi narzędziami",
    navMap: "Mapa", navStories: "Przykłady", navWhy: "AI dla firm", navPlans: "Plany One", navFacts: "Liczby", navNext: "Co dalej", navAria: "Sekcje",
    allin: "Wszystko w One",
    solves: "Co rozwiązuje", tryOne: "Wypróbuj z One",
    center: "Centrum", area: "Obszar", modules: "Moduły", brings: "Co daje", withOne: "Z One", connected: "Połączone z",
    soon: "Co dalej", soonNote: "Zakres i terminy mogą się zmienić.", close: "Zamknij",
    title: "Factorial · Wszystko połączone z One",
    h1: "One już zna Twoją firmę",
    sub: "Wszystkie moduły Factorial korzystają z tych samych danych. One działa na nich wszystkich, z Twoimi uprawnieniami i Twoimi politykami.",
    hint: "Kliknij dowolny element, żeby zobaczyć, co daje, co One z nim robi i z czym się łączy.",
    cue: "Przewiń dalej", cueAria: "Przewiń dalej", oneAria: "Zobacz, czym jest One", panelAria: "Szczegóły modułu",
    s1t: "Te same dane od początku do końca",
    s1d: "Gdy każdy moduł działa w innym narzędziu, każda decyzja zaczyna się od zera. W Factorial to, co zapiszesz raz, wykorzystuje kolejny krok. Kliknij dowolny krok, żeby otworzyć go na mapie.",
    s2t: "Twoje zespoły już korzystają z AI. Niech to będzie Twoje AI.",
    s2d: "Zmienia się nie technologia, tylko kontekst. A przy danych o ludziach zaufanie nie podlega negocjacjom.",
    cmpHead: `<tr><th></th><th>Ogólne AI</th><th>One</th></tr>`,
    cmpBody: `<tr><td>Kontekst</td><td>Za każdym razem zaczyna od zera. Kontekst wklejasz Ty.</td><td>Połączone z Twoimi danymi w Factorial i narzędziami, które podłączysz, od pierwszej wiadomości.</td></tr>
      <tr><td>Uprawnienia</td><td>Nie wie, kto powinien widzieć co.</td><td>Każdy widzi tylko to, na co pozwala jego rola. Te same role, nic nowego nie zostaje ujawnione.</td></tr>
      <tr><td>Zgodność</td><td>Brak gwarancji w UE.</td><td>Zgodne z RODO i unijnym AI Act, z danymi w UE.</td></tr>
      <tr><td>Wiarygodność</td><td>Wymyśla odpowiedzi bez ostrzeżenia.</td><td>Odpowiada Twoimi danymi i pokazuje źródło. Jeśli czegoś nie wie, mówi o tym.</td></tr>
      <tr><td>Kontrola</td><td>Nieprzejrzyste koszty i działania.</td><td>Ty decydujesz, którzy agenci działają, i widzisz każdą akcję i jej koszt.</td></tr>`,
    s4e: "One · Limit osobisty",
    s4t: "AI dla całego zespołu, bez utraty kontroli",
    s4d: "Każda osoba ma własny dzienny limit AI, w ramach uprawnień, którym już ufasz. Wybierz zestaw planów osobistych według typu profilu.",
    tiers: `<div class="tier"><div class="tn"><b>Free</b></div><p class="usage"><b>W każdym pakiecie.</b></p><h4>Dla kogo</h4><div class="who"><i>Wszyscy pracownicy</i></div><h4>Co robią z One</h4><ul><li>Pytają o polityki, salda, paski płacowe i dokumenty, ze wskazaniem źródła.</li><li>Składają wnioski o urlop, wydatki i zgłoszenia w czacie.</li><li>Śledzą każdą sprawę w aplikacji.</li></ul></div>
    <div class="tier"><div class="tn"><b>Basic</b></div><p class="usage"><b>x2 limitu vs Free</b><br>Do regularnej pracy.</p><h4>Dla kogo</h4><div class="who"><i>Wszyscy pracownicy</i><i>Team leaderzy</i></div><h4>Co robią z One</h4><ul><li>Wszystko, co w Free, z dwa razy większym dziennym limitem.</li><li>Dla osób, które korzystają z One codziennie w pracy.</li></ul></div>
    <div class="tier"><div class="tn"><b>Plus</b></div><p class="usage"><b>x10 limitu vs Basic</b><br>Do wymagających procesów.</p><h4>Dla kogo</h4><div class="who"><i>Team leaderzy</i><i>Menedżerowie</i><i>Administratorzy</i></div><h4>Co robią z One</h4><ul><li>Przygotowują 1:1 i sprawdzają analitykę swojego zespołu.</li><li>Akceptują urlopy, wydatki i zmiany z już zebranym kontekstem.</li></ul></div>
    <div class="tier"><div class="tn"><b>Max</b></div><p class="usage"><b>x35 limitu vs Basic</b><br>Dla power userów.</p><h4>Dla kogo</h4><div class="who"><i>Menedżerowie</i><i>Administratorzy</i><i>Training Manager</i><i>Finance Manager</i></div><h4>Co robią z One</h4><ul><li>Tworzą całe kursy, przetwarzają pakiety wydatków, budują raporty i rutyny.</li><li>Zaprojektowany do intensywnej pracy z One w swoim obszarze.</li></ul></div>`,
    p1: "<b>Twoje dane pod kontrolą</b><p>Każdy widzi tylko to, co mógł widzieć wcześniej. One dokładnie stosuje Twoje uprawnienia w Factorial: te same role, ten sam dostęp, nic nowego nie zostaje ujawnione.</p>",
    p2: "<b>Nikt nie przekroczy budżetu</b><p>Każdy ma dzienny limit zależny od planu osobistego. Po jego wyczerpaniu One po prostu czeka do jutra. Bez doładowań i niekontrolowanych kosztów.</p>",
    flex: "<b>Ty wybierasz plan osobisty dla każdej osoby.</b> Przykład dla 100 osób: 5 Max + 15 Plus + 30 Basic + 50 Free.",
    s3t: "Co dalej",
    s3d: "Każdy produkt staje się produktem AI. Zakres i terminy mogą się zmienić; będziemy Cię informować.",
    road: `<div><span>Wkrótce</span><b>1:1 z AI</b><p>One przygotowuje i prowadzi każde 1:1 z pełną historią danej osoby.</p></div>
    <div><span>Wkrótce</span><b>Kursy z grywalizacją</b><p>Mechaniki gier w kursach LMS.</p></div>
    <div><span>Wkrótce</span><b>Cele przez MCP</b><p>Factorial łączy się z Twoimi narzędziami i aktualizuje cele ich danymi.</p></div>
    <div><span>Wkrótce</span><b>Zatrudnienie: akceptacje i budżet</b><p>Uporządkowane ścieżki akceptacji i porównanie planu z wykonaniem.</p></div>
    <div><span>Wkrótce</span><b>Proponowana baza talentów</b><p>Zanim opublikujesz ogłoszenie, zobaczysz, kto z Twojej bazy kandydatów już pasuje.</p></div>
    <div><span>Wkrótce</span><b>WhatsApp w Rekrutacji</b><p>Wiadomości, zapowiedź przed rozmową z AI i dokumenty przez WhatsApp.</p></div>
    <div><span>Wkrótce</span><b>Niespójności w rejestracji czasu</b><p>Popraw wszystkie problemy z rejestracją czasu naraz, bez przechodzenia po kolei.</p></div>
    <div class="more"><span>Wkrótce</span><b>I wiele więcej</b><p>Co miesiąc do każdego produktu Factorial trafiają nowe funkcje AI.</p></div>`,
    ctaT: "Przejdziemy przez cały Twój cykl na Twoich danych?",
    ctaD: "Odwzorujemy strukturę zatrudnienia, proces rekrutacji i politykę wynagrodzeń, i pokażemy ten sam proces w Factorial, z One na każdym etapie.",
    ctaQ: "Nie rozmawiasz jeszcze z nikim z Factorial?",
    ctaBtn: "Umów demo",
    footer: "Przykłady raportów i rozmów są poglądowe i oparte na fikcyjnych danych. Niektóre funkcje zależą od planu i kredytów One. Factorial · październik 2026."
  }
};

LONG.pl = {
    one: () => `<p class="lead">Twój osobisty agent AI w pracy. Zna Twój kontekst, działa w całym Factorial i pomaga Ci podejmować decyzje, bez ujawniania Twoich danych.</p>
    <h3>Trzy sposoby korzystania</h3>
    <ul class="vals"><li><b>Pytaj.</b> Każdy pyta o to, czego potrzebuje: polityki, salda, dane zespołu. One odpowiada ze wskazaniem źródła i tylko w zakresie, na który pozwala rola tej osoby.</li>
    <li><b>Deleguj.</b> W każdym produkcie One wykonuje pracę: pisze ogłoszenie, dzwoni do kandydata, przygotowuje propozycję podwyżki.</li>
    <li><b>Automatyzuj.</b> Ustawiasz rutynę raz, a One wykrywa, decyduje i działa. Ty akceptujesz wyjątki.</li></ul>
    <h3>Jak to działa</h3>
    <p class="note">Wykrywa sygnały w Twoich danych w czasie rzeczywistym, porównuje je z Twoimi politykami i historią, wybiera działanie albo przekazuje sprawę człowiekowi, wykonuje pracę w Factorial i zapisuje, co zrobił. Każdy krok jest widoczny i możliwy do sprawdzenia.</p>
    <h3>Dlaczego dane w jednym miejscu zmieniają wszystko</h3>
    <p class="why" style="color:var(--ink)">Im więcej modułów połączysz, tym więcej kontekstu ma One. Ogólne AI zaczyna od zera; One już wie, kto jest kim, co mówi Twoja polityka i co wydarzyło się w ostatnim cyklu.</p>
    <div class="stats"><div class="stat"><b>RODO</b><span>i unijny AI Act, dane w UE</span></div><div class="stat"><b>Twoje uprawnienia</b><span>te same role w Factorial, nic nowego nie zostaje ujawnione</span></div></div>
    <h3>Rutyny: One przynosi odpowiedź, kiedy jest potrzebna</h3>
    ${chatHTML([{ q: "Każdego 25. dnia miesiąca przypominaj mi o brakujących składnikach płacowych.", a: "Tworzy rutynę, sprawdza, czego brakuje przed zamknięciem, i wysyła Ci listę z osobami, które muszą działać." }])}`,
    routines: `<h3>Rutyny z zawsze aktualnymi informacjami</h3>
  <ul class="rt">
    <li><span class="when">Poniedziałek, 9:00</span><span>Rotacja według działów, z wyjaśnionym trendem<span class="src">Core HR · Analityka</span></span></li>
    <li><span class="when">Dni robocze, 18:00</span><span>Osoby z mniej niż 4 wpisami czasu pracy dzisiaj<span class="src">Rejestracja czasu pracy</span></span></li>
    <li><span class="when">25. dzień miesiąca</span><span>Brakujące składniki płacowe przed zamknięciem<span class="src">Wynagrodzenia · Grafiki · Wydatki</span></span></li>
    <li><span class="when">Pierwszy dzień miesiąca</span><span>Zaległe szkolenia obowiązkowe według lokalizacji<span class="src">Szkolenia i LMS</span></span></li>
    <li><span class="when">Piątek, 12:00</span><span>Kandydaci na etapie selekcji bez feedbacku zespołu rekrutacyjnego<span class="src">ATS i rekrutacja</span></span></li>
  </ul>
  <p class="disc-note">Każdy raport z Analityki możesz ustawić jako rutynę z czatu One. Rutyny zużywają kredyty One.</p>`,
    ax: { t: "Przykłady już połączonych raportów",
      c1: ["Rotacja i zaangażowanie według działów", "Core HR + Zaangażowanie · rotacja (słupki) i eNPS (linia)", ["Sklepy","Operacje","Sprzedaż","Wsparcie","Tech"]],
      c2: ["Jakość zatrudnień według źródła", "Rekrutacja + Ocena pracowników · retencja po roku", ["Polecenia","LinkedIn","Strona kariery","Portale pracy"]],
      c3: ["Koszt zatrudnienia: wykonanie vs plan", "Zatrudnienie + Przegląd wynagrodzeń + Wynagrodzenia", ["S","L","M","K","M","C"], "Wykonanie", "Plan"],
      c4: ["Absencja i nadgodziny według lokalizacji", "Nieobecności + Rejestracja czasu + Grafiki", ["Warszawa","Kraków","Wrocław","Gdańsk"], "Absencja %", "Nadgodziny"],
      note: "Fikcyjne dane, tylko po to, by pokazać, co można zestawić.",
      tasksT: "Zadania, które One już wykonuje sam",
      tasks: ["Zatwierdza wydatki zgodne z polityką i zostawia Ci tylko wyjątki.", "Pomaga obsadzać zmiany, proponując osoby zgodnie z Twoimi zasadami.", "Dzwoni do kandydatów, którzy docierają do selekcji, i zostawia Ci raport.", "Przygotowuje zgłoszenia w połowie, tak że osoba, która je obsługuje, tylko je akceptuje."] }
};

/* ---------- FRANCÉS ---------- */
const FR = {
  HUBS: {
    talento: { name: "Talent", lead: "Du poste que vous planifiez à l’augmentation que vous défendez. Chaque décision talent s’appuie sur la précédente, sans repartir de zéro.", one: "Plus vous utilisez de produits talents, plus One a de contexte : il lit en même temps évaluations, candidatures, formations et enquêtes." },
    tiempo: { name: "Temps", lead: "Pointages, plannings et absences sur le même calendrier, avec chaque heure prête pour la paie et les projets.", one: "One couvre les plannings, répond aux questions sur les soldes et repère les anomalies de pointage quand elles sont encore minimes." },
    finanzas: { name: "Finance", lead: "RH et Finance travaillent avec les mêmes chiffres : effectifs, notes de frais, achats, projets et budget.", one: "One valide ce qui respecte la politique et ne vous laisse que les exceptions." },
    core: { name: "Core HR", lead: "Le socle : les personnes, les documents, les politiques et l’appli de chaque collaborateur. Ce qui est saisi ici sert à tous les modules.", one: "One connaît vos politiques, répond en citant la source et traite les demandes avant qu’elles n’arrivent à un humain." },
    it: { name: "IT", lead: "Équipements, logiciels et inventaire rattachés à la personne qui les utilise, de son premier jour à son dernier.", one: "One analyse le ticket, vérifie le stock et prépare l’achat : il ne reste plus qu’à valider." },
    nomina: { name: "Paie", lead: "Chaque changement qui touche la rémunération arrive validé en paie, du pointage à l’augmentation.", one: "One repère les variables en attente et tout ce qui ne colle pas avant le calcul de la paie." }
  },
  M: {
    desempeno: { name: "Performance",
      lead: "Évaluations, objectifs et feedback toute l’année, pas seulement à l’entretien annuel.",
      value: ["Évaluations 180° et 360° avec cycles automatisés, relances et accords téléchargeables.", "Objectifs individuels et d’équipe, OKRs et feedback continu pour arriver à l’entretien avec des données.", "9-box et analyses talents pour identifier ceux qui ont le plus de potentiel et ceux qui ont besoin d’accompagnement.", "Plans d’incentive : définissez des règles de versement liées aux objectifs et aux résultats ; Factorial calcule chaque prime et la verse automatiquement en paie."],
      one: [{ q: "Qui dans mon équipe montre des signaux de risque ?", a: "Analyse les auto-évaluations et les feedbacks, résume chaque cas et explique pourquoi il le signale." }],
      why: "Chaque résultat alimente les formations que vous attribuez et l’augmentation que vous proposez. Le recrutement s’appuie sur la dernière évaluation pour mesurer quelles sources amènent des personnes qui restent et performent.",
      soon: ["Objectifs connectés via MCP : Factorial met à jour les objectifs avec les données de vos autres outils."] },
    formacion: { name: "Formations & LMS",
      lead: "Formations enregistrées et cours interactifs dans Factorial, reliés à la performance.",
      value: ["Catalogue, sessions et présence ; formations obligatoires avec traçabilité prête pour les audits.", "LMS : cours avec vidéos, quiz et tests, suivi automatique de la progression et certificats en fin de parcours.", "Coût salarial de chaque formation calculé automatiquement."],
      one: [{ q: "Crée un parcours d’intégration pour l’équipe magasin.", a: "Un cours structuré avec modules et quiz, en quelques minutes. Vous le relisez et le publiez." }],
      why: "Depuis l’évaluation, en un clic : attribuez la formation qui comble chaque écart de compétences et mesurez son impact au cycle suivant.",
      stat: { n: "94%", t: "des collaborateurs resteraient plus longtemps dans une entreprise qui investit dans leur développement (LinkedIn Workplace Learning Report, 2023)" } },
    engagement: { name: "Engagement",
      lead: "Écoutez vos équipes sans envoyer un formulaire de plus : pulse quotidien, enquêtes, eNPS et 1:1 avec l’IA.",
      value: ["Pulse d’équipe au pointage : des check-ins sans lassitude des enquêtes et des alertes au bon manager.", "Enquêtes automatisées et eNPS à l’intégration, au départ et à chaque étape clé.", "1:1 avec l’IA : One prépare chaque 1:1 avec les objectifs, la performance et le moral."],
      one: [{ q: "Prépare le 1:1 de demain avec Laura.", a: "Rassemble ses objectifs, sa dernière évaluation, son pulse récent et ce qui a été abordé lors des précédents 1:1." }],
      why: "Une bonne performance ne signifie pas toujours de l’engagement. Avec un pulse relié aux pointages et à la performance, One voit le tableau complet de chaque personne.",
      stat: { n: "40–60%", t: "d’administratif manuel en moins grâce aux évaluations, 1:1 et enquêtes automatisés" } },
    comunidades: { name: "Communautés",
      lead: "Des espaces où vos équipes se retrouvent, partagent et se reconnaissent, au-delà de l’organigramme.",
      value: ["Communautés par centre d’intérêt, site, projet ou équipe, ouvertes ou sur invitation.", "Publications, reconnaissance et célébration des étapes clés depuis l’appli.", "Réunit au même endroit les équipes du siège, en télétravail et en magasin."],
      one: [{ q: "Quelles communautés me conseillez-vous maintenant que je suis arrivé ?", a: "Suggère celles de votre équipe, de votre site et de vos centres d’intérêt, d’après votre profil." }],
      why: "Les communautés reposent sur les mêmes données d’équipe, de site et de personnes : chaque recrue trouve sa place dès le premier jour." },
    comunicaciones: { name: "Communications",
      lead: "Des annonces pour toute l’entreprise ou pour certaines équipes, là où vos collaborateurs travaillent déjà au quotidien.",
      value: ["Publiez pour toute l’entreprise ou pour des équipes et sites précis.", "Touche tout le monde via l’appli, y compris les personnes qui ne travaillent pas sur ordinateur.", "Les annonces vivent à côté des politiques et documents auxquels elles renvoient."],
      one: [{ q: "Rédige l’annonce des nouveaux horaires d’été en français et en anglais.", a: "La rédige à partir de votre politique d’horaires et la traduit, prête à relire." }],
      why: "Le ciblage s’appuie sur les mêmes données d’équipe, de site et de poste que le reste de Factorial." },
    ats: { name: "Recrutement & ATS",
      lead: "Un ATS qui planifie, présélectionne et décide avec vous, du poste validé à l’offre signée.",
      value: ["Plan de recrutement : chaque poste validé en planification des effectifs arrive comme une offre avec responsable, échéance et statut.", "Rapport IA par candidat et appels IA dans sa langue, avec transcription et résultat vert, orange ou rouge.", "Offres illimitées, droits par étape, entretiens vidéo avec One et analyses de rétention à un an."],
      one: [
        { q: "Appelle tous les candidats qui arrivent à l’étape de présélection.", a: "Un appel dans leur langue, annoncé, avec consentement et enregistré. Vous recevez transcription, rapport et prochaine étape suggérée. Un humain décide." },
        { q: "Crée l’offre d’emploi de Senior Product Designer à Paris.", a: "Rédige l’annonce à partir de la conversation et la publie sur votre page carrières et plus de 250 job boards." }
      ],
      why: "L’offre naît validée et budgétée ; la personne qui signe arrive avec toutes ses données, sans rien ressaisir ; et les analyses croisent source de recrutement et évaluation de performance.",
      stats: [{ n: "70%", t: "de time-to-hire en moins grâce à la présélection IA au premier tour" }, { n: "+25%", t: "de croissance des effectifs avec la même équipe de recrutement" }],
      soon: ["Candidats suggérés depuis le vivier de talents (bientôt disponible).", "WhatsApp dans le recrutement et pages entreprise par entité (bientôt disponible).", "Évaluation culturelle (bientôt disponible)."] },
    canal: { name: "Espace Confiance",
      lead: "Un canal permettant à chacun de signaler un manquement en toute confidentialité, y compris de façon anonyme.",
      value: ["Signalements confidentiels, avec option d’anonymat.", "Suivi des dossiers avec un accès limité aux personnes qui les traitent.", "Vous aide à respecter les règles de protection des lanceurs d’alerte."],
      oneNote: "One respecte exactement les droits d’accès de Factorial : les dossiers ne sont visibles que des personnes qui les traitent, de personne d’autre.",
      why: "Il vit dans la même appli que les autres outils du collaborateur : personne n’a à chercher où signaler." },
    control: { name: "Suivi du temps",
      lead: "Pointez depuis le téléphone ou l’ordinateur, avec un registre du temps de travail toujours à jour.",
      value: ["Pointage depuis l’appli ou le web, avec heures supplémentaires et soldes calculés.", "Anomalies visibles du manager avant d’arriver en paie.", "Les heures imputées aux projets alimentent le coût réel de chaque projet."],
      one: [{ q: "Chaque jour ouvré à 18 h, envoie-moi qui a moins de 4 pointages aujourd’hui.", a: "Crée une routine qui vérifie les pointages chaque jour et vous l’envoie par e-mail." }],
      why: "Le même pointage sert la paie, le suivi des coûts projet et le pulse d’équipe, sans saisie en double.",
      soon: ["Anomalies de pointage : corrigez-les toutes en une fois, sans les traiter une par une."] },
    turnos: { name: "Plannings",
      lead: "Des plannings qui respectent vos règles et des trous comblés sans liste d’appels.",
      value: ["Planification automatique avec vos propres règles : repos, horaires, sites, postes et compétences sont respectés automatiquement.", "Astreintes planifiées et suivies avec le reste des plannings.", "Connecté au contrat de chaque personne dans le Portail employé : heures, temps de travail et conditions sont pris en compte dans la planification.", "Les plannings réels arrivent en paie, sans planning périmé dans le calcul."],
      one: [{ q: "Trouve quelqu’un pour remplacer María sur son créneau aujourd’hui.", a: "Vérifie jours de repos, postes, compétences, horaires et site, appelle les candidats un par un et prévient le manager une fois le créneau couvert." }],
      why: "Une absence ouvre un trou, One le comble et le nouveau créneau arrive dans les pointages et les variables de paie. Chaque règle respectée et chaque appel tracé." },
    ausencias: { name: "Congés & Absences",
      lead: "Congés, arrêts maladie et autorisations avec soldes à jour et validation en deux clics.",
      value: ["Politiques d’absences par équipe, site ou convention collective.", "Calendrier partagé pour voir qui est absent avant de valider.", "Absences et arrêts maladie synchronisés avec la paie."],
      one: [{ q: "Combien de jours de congés me reste-t-il ?", a: "Répond avec le solde de la personne et la politique applicable. Chacun ne voit que le sien." }],
      why: "Un arrêt maladie ne reste pas dans le calendrier : il ouvre un trou dans les plannings, ajuste les pointages et arrive en paie sous forme de variable." },
    plantilla: { name: "Planification des effectifs",
      lead: "RH et Finance voient les mêmes chiffres dès le premier jour. Fini les cinq versions du tableur.",
      value: ["Les managers proposent des postes avec fonction, niveau, grille salariale et date, reliés au catalogue des postes.", "RH et Finance examinent une seule version, avec la trace de qui a décidé quoi et quand.", "Les postes validés s’ouvrent automatiquement dans le recrutement : plan et exécution toujours alignés."],
      one: [{ q: "Prépare notre plan d’effectifs 2027 selon nos directives.", a: "Propose fonctions, niveaux et coûts à relire." }],
      why: "Le poste que vous validez est l’offre que vous publiez, et chaque augmentation finalisée met à jour la prévision de coûts du prochain plan.",
      soon: ["Circuits de validation structurés et lien avec le budget.", "Comparaison embauches prévues vs réalisées."] },
    proyectos: { name: "Gestion de projets",
      lead: "Sachez si chaque projet est rentable pendant qu’il avance, pas à sa clôture.",
      value: ["Heures imputées depuis le widget de pointage, sans feuilles de temps parallèles.", "Coût du travail, coûts fixes et frais vs budget, en temps réel.", "Du devis au projet et du projet à la facture, avec les données client déjà chargées."],
      one: [{ q: "Quels projets dépassent le budget ce mois-ci ?", a: "Croise heures imputées, coût du travail et frais, et explique où chacun dérive." }],
      why: "Le coût d’une heure vient du salaire réel de la personne et l’heure vient du pointage : personne ne recopie de données d’un outil à l’autre." },
    fpa: { name: "Planification financière",
      lead: "Budgets et prévisions avec les coûts réels qui vivent déjà dans Factorial.",
      value: ["Budgets par département ou centre de coûts.", "Réel vs prévu avec les données d’effectifs, de paie, de notes de frais, d’achats et de projets.", "Une source unique de vérité pour les RH, la Finance et la direction."],
      one: [{ q: "Où en sommes-nous par rapport au budget masse salariale ce trimestre ?", a: "Compare le coût de paie réel au plan et signale les écarts." }],
      why: "Le budget se nourrit tout seul : chaque embauche, augmentation, note de frais ou achat est déjà enregistré dans son module." },
    gastos: { name: "Dépenses",
      lead: "D’un tas de justificatifs à des comptes clos, en un seul message.",
      value: ["Déposez les justificatifs et les champs se remplissent seuls.", "Chaque dépense est vérifiée selon la politique : les conformes sont validées instantanément.", "Rapprochement des cartes et données propres pour la clôture mensuelle."],
      one: [{ q: "Voici les justificatifs de mon déplacement pro. (envoie 5 fichiers d’un coup)", a: "Lit chaque justificatif, prépare les notes de frais, rapproche la carte et vérifie politique et droits. Seules les exceptions attendent un humain." }],
      why: "La note de frais validée arrive en paie si elle doit être remboursée et dans le projet si elle est facturable." },
    compras: { name: "Achats",
      lead: "Demandes d’achat, validations et fournisseurs dans un seul flux.",
      value: ["Demandes avec validation selon le montant et l’équipe.", "Chaque achat rattaché à son budget et à son demandeur.", "Connecté à l’inventaire et aux logiciels pour savoir ce qui est acheté et pour qui."],
      one: [{ q: "Mon ordinateur portable vient de tomber en panne. Il m’en faut un nouveau.", a: "Ouvre le ticket, vérifie qu’il n’y a pas de stock, en trouve un dans le marketplace et l’achète une fois qu’un humain a validé." }],
      why: "L’achat démarre dans un ticket, passe par le budget et finit dans l’inventaire de la personne." },
    revision: { name: "Révision salariale",
      lead: "Chaque augmentation justifiée, budgétée et défendable.",
      value: ["Directives définies une fois : éligibilité, fourchettes et validateurs. Chaque proposition est vérifiée automatiquement.", "Chaque manager ne voit que son équipe, avec les cas hors politique déjà signalés, et le budget est réparti en temps réel.", "L’augmentation validée alimente le contrat et la prévision d’effectifs, sans ressaisie."],
      one: [{ q: "Propose des augmentations pour mon équipe selon notre politique.", a: "Chiffres et justification, déjà vérifiés par rapport au budget. Vous validez." }],
      why: "Vous décidez combien de cycles d’évaluation comptent pour l’éligibilité : l’augmentation reflète une tendance, pas une note ponctuelle. Et elle arrive en paie comme variable validée." },
    politicas: { name: "Politiques",
      lead: "Vos règles, écrites une fois et appliquées dans chaque module.",
      value: ["Politiques d’absences, de notes de frais, d’horaires et autres, appliquées par les modules concernés.", "Handbook : on pose la question et One répond en citant la source.", "Si One ne sait pas, il le dit."],
      one: [{ q: "Puis-je télétravailler depuis un autre pays pendant deux semaines ?", a: "Répond à partir de votre politique, cite la source et ne révèle que ce que cette personne peut voir." }],
      why: "Les questions courantes n’arrivent plus dans la boîte du manager, et les mêmes critères valident notes de frais ou absences." },
    portal: { name: "Portail employé",
      lead: "L’appli où chacun voit ses propres informations et demande ce dont il a besoin.",
      value: ["Données personnelles, bulletins de paie, documents et soldes dans une seule appli.", "Absences, notes de frais et tickets depuis le téléphone.", "One intégré pour demander, solliciter et suivre chaque demande."],
      oneNote: "One est inclus pour tous les collaborateurs, sans formation nécessaire. Chacun demande ce dont il a besoin et ne voit que ce que son rôle autorise.",
      why: "Tout ce que fait le collaborateur ici va directement dans le bon module, sans formulaires ni e-mails entre les deux." },
    onoff: { name: "On/Offboarding",
      lead: "Arrivées et départs dans un seul flux, avec des tâches pour les RH, l’IT et le manager.",
      value: ["La nouvelle recrue arrive depuis le recrutement avec toutes ses données.", "Documents, signature, équipement, accès et formation d’accueil dans le même flux.", "Au départ, accès et matériel sont récupérés sans dépendre de la mémoire de quiconque."],
      one: [{ q: "Prépare l’onboarding de Marta pour lundi.", a: "Lance les tâches, prépare les documents à signer, demande son ordinateur portable et lui attribue la formation d’accueil." }],
      why: "C’est là que se rejoignent le plus de modules : si les données sont centralisées, le premier jour se déroule tout seul." },
    documentos: { name: "Gestion des documents",
      lead: "Contrats, bulletins de paie et attestations de chaque personne, avec droits d’accès et modèles.",
      value: ["Dossiers par personne et par entreprise, avec droits selon le rôle.", "Modèles qui se remplissent avec les données du collaborateur.", "One lit n’importe quel fichier et en extrait l’essentiel."],
      one: [{ q: "Quels CDD arrivent à échéance ce trimestre ?", a: "Croise avec les données de contrat et renvoie la liste avec dates et responsables." }],
      why: "Une modification salariale validée met à jour le contrat ; une embauche génère ses documents. Personne ne les refait." },
    firma: { name: "Signature électronique",
      lead: "Envoyez à la signature sans quitter Factorial et conservez le résultat au bon endroit.",
      value: ["Signez contrats, avenants et politiques depuis n’importe quel appareil.", "Offres de recrutement signées de n’importe où, et vous savez immédiatement quand elles le sont.", "Le document signé reste dans le profil de la personne."],
      oneNote: "One prépare les documents à partir de vos modèles : il ne vous reste qu’à les relire et à les envoyer à la signature.",
      why: "Aucune donnée à ressaisir quand quelqu’un signe : le statut remonte au processus qui l’a demandé." },
    analiticas: { name: "Analyses & Rapports",
      lead: "Toutes les données de Factorial au même endroit, et One pour les interroger en langage naturel.",
      value: ["Des rapports qui croisent les modules sur les mêmes données : personnes, temps, talents, paie et finance.", "Demandez à One de créer un rapport, d’ajouter des widgets, de filtrer ou d’expliquer une tendance, puis enregistrez-le.", "Chacun ne voit que ce que ses droits autorisent."],
      one: [{ q: "Envoie-moi le turnover par département chaque lundi.", a: "Crée le rapport, le programme comme routine et explique la tendance à chaque envoi." }],
      why: "Tous les modules alimentent cet espace. Comme toutes les données vivent dans Factorial, un rapport ne se construit pas : il se demande. Sans export, sans fusion de tableurs et sans attendre la Finance." },
    tickets: { name: "Tickets",
      lead: "Des demandes qui arrivent à moitié résolues avant qu’un humain n’y touche.",
      value: ["Ouverts en discutant avec One et suivis dans Factorial.", "Routés automatiquement vers la bonne équipe : IT, RH, Finance.", "One enquête et traduit chaque message dans les deux sens."],
      one: [{ q: "Salut One, mon ordinateur portable vient de tomber en panne. Il m’en faut un nouveau.", a: "Crée le ticket, le route vers l’IT, lit le contexte, constate qu’il n’y a pas d’ordinateur en stock, en trouve un dans le marketplace et prépare le plan. Un humain valide, il est acheté et l’IT le livre." }],
      why: "One enquête à travers les contrats, les équipements IT et les profils collaborateurs : la résolution est rédigée avec vos politiques et la personne qui la traite n’a plus qu’à valider." },
    mdm: { name: "Gestion des appareils mobiles",
      lead: "Configurez et sécurisez les appareils de l’entreprise depuis le même endroit que la gestion des personnes.",
      value: ["Chaque appareil rattaché à la personne qui l’utilise.", "Enregistrement et retrait des appareils intégrés à l’onboarding et à l’offboarding.", "État de sécurité du parc visible pour l’IT."],
      oneNote: "One vous maintient en conformité : vérifie les politiques, corrige les incohérences et suit les accès et les risques.",
      why: "Quand quelqu’un arrive ou part, l’IT ne dépend pas d’un e-mail des RH : le changement est déjà dans Factorial." },
    inventario: { name: "Inventaire",
      lead: "Quel équipement a chaque personne, avec son historique.",
      value: ["Attribution et restitution du matériel par personne.", "Intégré à l’onboarding et à l’offboarding.", "Stock visible avant d’acheter."],
      oneNote: "Quand un ticket arrive, One vérifie l’inventaire avant de proposer un achat.",
      why: "L’inventaire sait qui est qui car il partage les données des personnes avec Core HR." },
    software: { name: "Gestion de SaaS",
      lead: "Quels outils utilise l’entreprise, qui y a accès et combien ils coûtent.",
      value: ["Inventaire des applications et des licences.", "Accès accordés et retirés au fil des arrivées et des départs.", "Dépenses de licences visibles pour la Finance."],
      oneNote: "One croise les licences avec les personnes actives pour repérer les accès qui ne devraient plus exister.",
      why: "Licences, personnes et budget au même endroit : personne ne paie le compte de quelqu’un qui est déjà parti." },
    marketplace: { name: "Marketplace",
      lead: "Un catalogue pour commander appareils et équipements sans chercher de fournisseurs.",
      value: ["Catalogue d’appareils prêt à commander.", "Achats avec validation et livraison à la personne concernée.", "Connecté aux tickets et à l’inventaire."],
      oneNote: "S’il n’y a pas de stock, One trouve l’appareil dans le marketplace et laisse l’achat prêt à valider.",
      why: "Du ticket à la livraison sans changer d’outil." },
    seguridad: { name: "Sécurité (EDR)",
      tag: "Add-on",
      lead: "Antivirus et détection des menaces sur chaque appareil, gérés depuis Factorial.",
      value: ["Protection des endpoints avec détection et réponse (EDR/MDR) de SentinelOne.", "Fonctionne sur le MDM : la protection est appliquée, pas seulement vérifiée.", "En cas de perte, il vérifie l’activité suspecte avant l’effacement."],
      oneNote: "One signale les appareils non protégés et prépare la réponse : l’IT n’a plus qu’à valider.",
      why: "Il protège les mêmes appareils et personnes que le MDM : à chaque arrivée ou départ, la protection suit." },
    cumplimiento: { name: "Conformité",
      tag: "Add-on",
      lead: "ISO 27001 et NIS2 avec les preuves que votre entreprise a déjà dans Factorial.",
      value: ["Effectifs, rôles et contrats avec clause de confidentialité, depuis le Core HR.", "Politiques de sécurité signées et formation de sensibilisation suivie.", "Chiffrement, revues d’accès, registre des actifs et incidents, depuis les produits IT."],
      oneNote: "One rassemble les preuves et prépare le dossier pour l’auditeur.",
      why: "Il lit des preuves dans presque tous les modules Factorial, ce qu’un outil de conformité isolé ne peut pas faire." },
    beneficios: { name: "Avantages",
      lead: "Une rémunération flexible que vos équipes utilisent avec une carte et que les RH gèrent sans paperasse.",
      value: ["Repas, transport, garde d’enfants, assurance santé, formation et Wellhub.", "Carte Visa dans le wallet du téléphone, avec solde et opérations dans l’appli.", "Budgets par catégorie, conformité fiscale et export direct vers la paie."],
      one: [{ q: "Combien me reste-t-il de titres-restaurant ce mois-ci ?", a: "Répond avec le solde de la personne, dans la limite de ses droits." }, { q: "Combien d’impôts ai-je économisé depuis le début de 2026 ?", a: "Calcule les économies fiscales réalisées grâce aux avantages de cette personne depuis le début de l’année, détaillées par catégorie." }],
      why: "Ce que chacun utilise arrive en paie comme élément de rémunération, sans que personne ne le compile à la main." },
    compensacion: { name: "Compensation",
      lead: "Chaque changement arrive en paie déjà validé.",
      value: ["Couvre tout le cycle de paie : pré-paie (préparation et mises à jour des collaborateurs), post-paie (résultats calculés par votre logiciel de paie) et au-delà, avec Planification financière, la distribution des bulletins dans la Gestion des documents et les paiements SEPA avec Trésorerie.", "Mises à jour des collaborateurs prêtes pour la paie : entrées, sorties, changements de contrat et de salaire, absences et primes, visibles immédiatement.", "Alertes avant le calcul : variables en attente, primes non validées ou plannings périmés.", "Chaque paie comparée aux variables et contrats validés, et coût réel vs prévu.", "Plans d’incentive connectés à Performance : règles de versement, calcul automatique de chaque prime et versement direct en paie."],
      one: [{ q: "Que manque-t-il avant de clôturer la paie de ce mois ?", a: "Passe en revue les variables en attente et tout ce qui ne colle pas, et vous dit qui doit agir." }],
      why: "Tout converge ici : pointages, plannings, absences, notes de frais et augmentations. S’ils naissent connectés, ils arrivent validés.",
      stat: { n: "40 h", t: "par mois à gagner en synchronisant embauches, départs, changements de salaire, absences et variables avec votre prestataire de paie" } },
    integraciones: { name: "Intégrations",
      lead: "Factorial connecté à votre prestataire de paie et au reste de vos outils.",
      value: ["Compatible avec votre logiciel de paie et avec Factorial Professionals pour les cabinets.", "API pour se connecter à votre ERP."],
      oneNote: "Si la donnée vit dans Factorial ou dans un outil que vous connectez, vous pouvez demander, déléguer ou automatiser avec One.",
      why: "Intégrer, ce n’est pas copier : le changement est saisi une seule fois et synchronisé." },
    anticipo: { name: "Acompte sur salaire",
      lead: "Vos équipes peuvent demander une partie du salaire déjà gagné avant la fin du mois.",
      value: ["Demande depuis l’appli, sans paperasse.", "Règles et plafonds que vous définissez.", "L’acompte est déduit de la paie sans ajustement manuel."],
      oneNote: "Les collaborateurs demandent à One combien ils peuvent solliciter et comment ça marche, selon votre politique.",
      why: "Comme le salaire et les jours travaillés sont déjà dans Factorial, le montant disponible n’est pas calculé à la main." }
  },
  STORIES: [
    { t: "Une nouvelle recrue", d: "Le poste est validé une seule fois et le reste suit tout seul.", steps: ["Le poste est validé avec sa grille salariale.", "Il s’ouvre automatiquement comme offre ; One présélectionne et appelle.", "L’offre est signée depuis un téléphone.", "La personne arrive avec toutes ses données, sans ressaisie.", "Son ordinateur portable est déjà attribué.", "Elle reçoit la formation d’accueil.", "Son embauche arrive en paie validée."] },
    { t: "Un arrêt maladie de dernière minute", d: "De l’alerte à la paie sans que personne ne recopie de données.", steps: ["Quelqu’un annonce qu’il est malade.", "One trouve qui peut le remplacer et l’appelle.", "Le nouveau créneau est pointé comme n’importe quel autre.", "L’arrêt et le changement de planning arrivent comme variables.", "L’absentéisme par site se met à jour tout seul."] },
    { t: "Un cycle d’évaluation", d: "L’augmentation découle de l’évaluation et alimente le plan.", steps: ["L’évaluation fait ressortir résultats et écarts.", "La formation est attribuée en un clic.", "One propose l’augmentation dans le respect de la politique.", "L’augmentation arrive en paie validée.", "La prévision de coûts se met à jour pour le prochain plan."] },
    { t: "Un ordinateur portable en panne", d: "Un message à One et une validation.", steps: ["Vous le dites à One et il ouvre le ticket.", "One vérifie qu’il n’y a pas de stock.", "Il en trouve un qui respecte la politique.", "Un humain valide, il est acheté et l’IT le livre."] }
  ],
  UI: {
    sbMap: "Carte One",
    sbConn: "Connecteurs",
    sbPlans: "Offres",
    sbDeck: "Pitch deck",
    sbLegal: "Juridique et conformité",
    video: "Voir en action",
    navConn: "Connecteurs",
    connE: "One · Connecteurs",
    connT: "Votre entreprise ne vit pas dans un seul outil. One non plus.",
    connD: "Connectez les applications que votre équipe utilise déjà, comme Slack, HubSpot, Notion ou Jira. One les combine avec vos données Factorial, toujours dans le respect des droits de chacun.",
    connBtn: "Voir le catalogue des connecteurs",
    connNote: "Catalogue en anglais",
    themeAria: "Mode nuit",
    partnerQ: "Envie de le voir avec vos propres données ? Contactez votre partenaire Factorial.",
    panelConn: "Connectez One à vos outils",
    navMap: "Carte", navStories: "Cas d’usage", navWhy: "IA pour les entreprises", navPlans: "Offres One", navFacts: "Chiffres", navNext: "À venir", navAria: "Sections",
    allin: "All in One",
    solves: "Ce que ça résout", tryOne: "Essayez avec One",
    center: "Le socle", area: "Domaine", modules: "Modules", brings: "Ce que ça apporte", withOne: "Avec One", connected: "Connecté avec",
    soon: "Prochainement", soonNote: "Le périmètre et les dates peuvent évoluer.", close: "Fermer",
    title: "Factorial · Tout connecté avec One",
    h1: "One connaît déjà votre entreprise",
    sub: "Tous les modules Factorial partagent les mêmes données. One travaille par-dessus, avec vos droits d’accès et vos politiques.",
    hint: "Touchez une bulle pour voir ce qu’elle apporte, ce que One en fait et à quoi elle est connectée.",
    cue: "Continuez à faire défiler", cueAria: "Continuez à faire défiler", oneAria: "Découvrir One", panelAria: "Détails du module",
    s1t: "Les mêmes données, de bout en bout",
    s1d: "Quand chaque module vit dans un outil différent, chaque décision repart de zéro. Dans Factorial, ce qui est saisi une fois sert à l’étape suivante. Touchez une étape pour l’ouvrir sur la carte.",
    s2t: "Vos équipes utilisent déjà l’IA. Faites-en la vôtre.",
    s2d: "Ce qui change, ce n’est pas la technologie, c’est le contexte. Et avec des données RH, la confiance n’est pas négociable.",
    cmpHead: `<tr><th></th><th>IA générique</th><th>One</th></tr>`,
    cmpBody: `<tr><td>Contexte</td><td>Repart de zéro à chaque fois. Vous collez le contexte.</td><td>Connecté à vos données Factorial et aux outils que vous branchez, dès le premier message.</td></tr>
      <tr><td>Droits d’accès</td><td>Ne sait pas qui doit voir quoi.</td><td>Chacun ne voit que ce que son rôle autorise. Mêmes rôles, rien de nouveau exposé.</td></tr>
      <tr><td>Conformité</td><td>Aucune garantie dans l’UE.</td><td>Conforme au RGPD et à l’AI Act européen, hébergé dans l’UE.</td></tr>
      <tr><td>Fiabilité</td><td>Invente des réponses sans prévenir.</td><td>Répond avec vos données et cite la source. S’il ne sait pas, il le dit.</td></tr>
      <tr><td>Contrôle</td><td>Coûts et actions opaques.</td><td>Vous décidez quels agents tournent et voyez chaque action et ce qu’elle a coûté.</td></tr>`,
    s4e: "One · Capacité personnelle",
    s4t: "L’IA pour tous, sans perdre le contrôle",
    s4d: "Chaque personne dispose de sa propre utilisation quotidienne de l’IA, dans le respect des autorisations que vous maîtrisez déjà. Choisissez une combinaison de plans personnels selon le type de profil.",
    tiers: `<div class="tier"><div class="tn"><b>Free</b></div><p class="usage"><b>Inclus dans tous les bundles.</b></p><h4>Recommandé pour</h4><div class="who"><i>Toute l’équipe</i></div><h4>Ce qu’ils font avec One</h4><ul><li>Posent leurs questions sur les politiques, soldes, fiches de paie et documents, avec la source.</li><li>Demandent absences, notes de frais et tickets par chat.</li><li>Suivent chaque demande depuis l’app.</li></ul></div>
    <div class="tier"><div class="tn"><b>Basic</b></div><p class="usage"><b>x2 d’utilisation vs Free</b><br>Pour un usage régulier.</p><h4>Recommandé pour</h4><div class="who"><i>Toute l’équipe</i><i>Team leaders</i></div><h4>Ce qu’ils font avec One</h4><ul><li>Tout ce qu’inclut Free, avec deux fois plus d’utilisation quotidienne.</li><li>Pour ceux qui utilisent One chaque jour dans leur travail.</li></ul></div>
    <div class="tier"><div class="tn"><b>Plus</b></div><p class="usage"><b>x10 d’utilisation vs Basic</b><br>Pour les workflows exigeants.</p><h4>Recommandé pour</h4><div class="who"><i>Team leaders</i><i>Managers</i><i>Admins</i></div><h4>Ce qu’ils font avec One</h4><ul><li>Préparent les 1:1 et consultent les analyses de leur équipe.</li><li>Approuvent absences, notes de frais et plannings avec le contexte déjà réuni.</li></ul></div>
    <div class="tier"><div class="tn"><b>Max</b></div><p class="usage"><b>x35 d’utilisation vs Basic</b><br>Pour les power users.</p><h4>Recommandé pour</h4><div class="who"><i>Managers</i><i>Admins</i><i>Training Manager</i><i>Finance Manager</i></div><h4>Ce qu’ils font avec One</h4><ul><li>Créent des formations complètes, traitent les notes de frais par lots et construisent rapports et routines.</li><li>Conçu pour un usage intensif de One dans leur domaine.</li></ul></div>`,
    p1: "<b>Vos données restent sous contrôle</b><p>Chacun ne voit que ce qu’il pouvait déjà voir. One suit exactement vos autorisations Factorial : mêmes rôles, mêmes accès, rien de nouveau exposé.</p>",
    p2: "<b>Personne ne dépasse le budget</b><p>Chacun dispose d’une allocation quotidienne selon son plan personnel. Une fois atteinte, One se met en pause jusqu’au lendemain. Pas de recharges, pas de coûts incontrôlés.</p>",
    flex: "<b>Vous choisissez le plan personnel adapté à chaque personne.</b> Exemple pour 100 personnes : 5 Max + 15 Plus + 30 Basic + 50 Free.",
    s3t: "Prochainement",
    s3d: "Chaque produit devient un produit d’IA. Le périmètre et les dates peuvent évoluer ; nous vous tiendrons informé.",
    road: `<div><span>Bientôt</span><b>1:1 avec l’IA</b><p>One prépare et guide chaque 1:1 avec tout l’historique de la personne.</p></div>
    <div><span>Bientôt</span><b>Cours gamifiés</b><p>Mécaniques de jeu au cœur des cours LMS.</p></div>
    <div><span>Bientôt</span><b>Objectifs via MCP</b><p>Factorial se connecte à vos outils et met à jour les objectifs avec leurs données.</p></div>
    <div><span>Bientôt</span><b>Effectifs : validations et budget</b><p>Circuits de validation structurés et comparaison prévu vs réalisé.</p></div>
    <div><span>Bientôt</span><b>Vivier de talents suggéré</b><p>Avant de publier, voyez qui dans votre vivier de candidats correspond déjà.</p></div>
    <div><span>Bientôt</span><b>WhatsApp dans le recrutement</b><p>Messages, prévenance avant l’appel IA et documents via WhatsApp.</p></div>
    <div><span>Bientôt</span><b>Anomalies de pointage</b><p>Corrigez toutes les anomalies de pointage en une fois, sans les traiter une par une.</p></div>
    <div class="more"><span>Bientôt</span><b>Et bien plus encore</b><p>De nouvelles fonctions IA arrivent chaque mois dans tous les produits Factorial.</p></div>`,
    ctaT: "On parcourt ensemble votre cycle complet avec vos propres données ?",
    ctaD: "Nous cartographions vos effectifs, votre processus de recrutement et votre politique de rémunération, et nous vous montrons le même flux dans Factorial, avec One à l’œuvre à chaque étape.",
    ctaQ: "Vous n’êtes pas encore en contact avec Factorial ?",
    ctaBtn: "Demander une démo",
    footer: "Les exemples de rapports et de conversations sont illustratifs et utilisent des données fictives. Certaines fonctionnalités dépendent de votre formule et des crédits One. Factorial · octobre 2026."
  }
};

LONG.fr = {
    one: () => `<p class="lead">Votre agent IA personnel au travail. Il connaît votre contexte, agit dans tout Factorial et vous aide à décider, sans exposer vos données.</p>
    <h3>Trois façons de l’utiliser</h3>
    <ul class="vals"><li><b>Demandez.</b> Chacun demande ce dont il a besoin : politiques, soldes, données d’équipe. One répond en citant la source et uniquement avec ce que son rôle autorise.</li>
    <li><b>Déléguez.</b> Dans chaque produit, One fait le travail : rédige l’offre d’emploi, appelle le candidat, prépare la proposition d’augmentation.</li>
    <li><b>Automatisez.</b> Configurez une routine une fois et One détecte, décide et agit. Vous validez les exceptions.</li></ul>
    <h3>Comment ça marche</h3>
    <p class="note">Il détecte en temps réel les déclencheurs dans vos données, les compare à vos politiques et à votre historique, choisit l’action ou passe la main à un humain, fait le travail dans Factorial et consigne ce qu’il a fait. Chaque étape reste visible et vérifiable.</p>
    <h3>Pourquoi des données centralisées changent tout</h3>
    <p class="why" style="color:var(--ink)">Plus vous connectez de modules, plus One a de contexte. Une IA générique repart de zéro ; One sait déjà qui est qui, ce que dit votre politique et ce qui s’est passé au dernier cycle.</p>
    <div class="stats"><div class="stat"><b>RGPD</b><span>et AI Act européen, hébergé dans l’UE</span></div><div class="stat"><b>Vos droits d’accès</b><span>mêmes rôles Factorial, rien de nouveau exposé</span></div></div>
    <h3>Routines : One vous apporte la réponse au bon moment</h3>
    ${chatHTML([{ q: "Chaque 25, alerte-moi sur les variables de paie en attente.", a: "Crée la routine, vérifie ce qui manque avant la clôture et vous l’envoie avec les personnes qui doivent agir." }])}`,
    routines: `<h3>Des routines toujours à jour</h3>
  <ul class="rt">
    <li><span class="when">Lundi, 9:00</span><span>Turnover par département, avec la tendance expliquée<span class="src">Core HR · Analyses & Rapports</span></span></li>
    <li><span class="when">Jours ouvrés, 18:00</span><span>Personnes avec moins de 4 pointages aujourd’hui<span class="src">Suivi du temps</span></span></li>
    <li><span class="when">Le 25</span><span>Variables de paie en attente avant la clôture<span class="src">Compensation · Plannings · Dépenses</span></span></li>
    <li><span class="when">Premier jour du mois</span><span>Formations obligatoires en attente par site<span class="src">Formations & LMS</span></span></li>
    <li><span class="when">Vendredi, 12:00</span><span>Candidats en présélection sans retour de l’équipe de recrutement<span class="src">Recrutement & ATS</span></span></li>
  </ul>
  <p class="disc-note">Tout rapport Analyses & Rapports peut être programmé comme routine depuis le chat One. Les routines consomment des crédits One.</p>`,
    ax: { t: "Exemples de rapports déjà connectés",
      c1: ["Turnover et engagement par département", "Core HR + Engagement · turnover (barres) et eNPS (courbe)", ["Magasins","Ops","Ventes","Support","Tech"]],
      c2: ["Qualité du recrutement par source", "Recrutement + Performance · rétention à 1 an", ["Cooptation","LinkedIn","Site carrières","Job boards"]],
      c3: ["Coût des effectifs : réel vs prévu", "Planification des effectifs + Révision salariale + Compensation", ["J","F","M","A","M","J"], "Réel", "Prévu"],
      c4: ["Absentéisme et heures supplémentaires par site", "Congés & Absences + Suivi du temps + Plannings", ["Paris","Lyon","Marseille","Lille"], "Absentéisme %", "Heures sup."],
      note: "Données fictives, uniquement pour illustrer ce qui peut être croisé.",
      tasksT: "Des tâches que One fait déjà seul",
      tasks: ["Valide les notes de frais conformes à la politique et ne vous laisse que les exceptions.", "Couvre les créneaux en appelant ceux qui peuvent les prendre, selon vos règles.", "Appelle les candidats qui arrivent en présélection et vous laisse le rapport.", "Résout à moitié les tickets pour que la personne qui les traite n’ait plus qu’à valider."] }
};

/* ---------- ITALIANO ---------- */
const IT = {
  HUBS: {
    talento: { name: "Talent", lead: "Dal ruolo che pianifichi all’aumento che sostieni. Ogni decisione sul talento parte dalla precedente, non da zero.", one: "Più prodotti di talento usi, più contesto ha One: legge valutazioni, candidature, corsi e sondaggi allo stesso tempo." },
    tiempo: { name: "Tempo", lead: "Timbrature, turni e assenze sullo stesso calendario, con ogni ora pronta per paghe e progetti.", one: "One copre i turni, risponde alle domande sui saldi e intercetta i problemi di timbratura quando sono ancora piccoli." },
    finanzas: { name: "Finanza", lead: "HR e Finanza lavorano con gli stessi numeri: organico, spese, acquisti, progetti e budget.", one: "One approva ciò che rispetta la policy e ti lascia solo le eccezioni." },
    core: { name: "Core HR", lead: "Le fondamenta: persone, documenti, policy e l’app di ogni dipendente. Ciò che inserisci qui lo usa ogni modulo.", one: "One conosce le tue policy, risponde citando la fonte e risolve le richieste prima che arrivino a una persona." },
    it: { name: "IT", lead: "Dispositivi, software e inventario legati alla persona che li usa, dal primo all’ultimo giorno.", one: "One indaga sul ticket, controlla le scorte e prepara l’acquisto: a una persona resta solo da approvare." },
    nomina: { name: "Busta paga", lead: "Ogni modifica che incide sulla retribuzione arriva alle paghe già validata, dalla timbratura all’aumento di stipendio.", one: "One individua le variabili in sospeso e tutto ciò che non torna prima del calcolo del cedolino." }
  },
  M: {
    desempeno: { name: "Performance & Obiettivi",
      lead: "Valutazioni, obiettivi e feedback tutto l’anno, non solo alla valutazione annuale.",
      value: ["Valutazioni a 180° e 360° con cicli automatizzati, promemoria e accordi scaricabili.", "Obiettivi e OKRs individuali e di team, con feedback continuo per arrivare alla valutazione con i dati.", "9-box e analytics sul talento per vedere chi ha più potenziale e chi ha bisogno di supporto.", "Piani di incentivazione: definisci regole di pagamento legate a obiettivi e risultati; Factorial calcola ogni bonus e lo paga automaticamente in busta paga."],
      one: [{ q: "Chi del mio team mostra segnali di rischio?", a: "Analizza autovalutazioni e feedback, riassume ogni caso e spiega perché lo segnala." }],
      why: "Ogni risultato alimenta la formazione che assegni e l’aumento che proponi. Il recruiting usa l’ultima valutazione per misurare quali canali portano persone che restano e rendono.",
      soon: ["Obiettivi connessi via MCP: Factorial aggiorna gli obiettivi con i dati dei tuoi altri strumenti."] },
    formacion: { name: "Formazione & LMS",
      lead: "Formazioni registrate e corsi interattivi dentro Factorial, collegati alla performance.",
      value: ["Catalogo, sessioni e presenze; formazione obbligatoria con tracciabilità pronta per gli audit.", "LMS: corsi con video, quiz e test, avanzamento automatico e certificati al completamento.", "Costo salariale di ogni formazione calcolato in automatico."],
      one: [{ q: "Crea un corso di onboarding per il team del negozio.", a: "Un corso strutturato con moduli e quiz, in pochi minuti. Tu lo rivedi e lo pubblichi." }],
      why: "Dalla valutazione, con un clic: assegni la formazione che colma ogni gap di competenze e ne misuri l’impatto nel ciclo successivo.",
      stat: { n: "94%", t: "dei dipendenti resterebbe più a lungo in un’azienda che investe nel loro sviluppo (LinkedIn Workplace Learning Report, 2023)" } },
    engagement: { name: "Coinvolgimento",
      lead: "Ascolta il tuo team senza inviare un altro modulo: pulse quotidiano, sondaggi, eNPS e 1:1 con l’AI.",
      value: ["Pulse del team alla timbratura: check-in senza stanchezza da sondaggi e alert al manager giusto.", "Sondaggi automatici ed eNPS all’onboarding, all’uscita e a ogni tappa importante.", "Riunioni 1:1 con l’AI: One prepara ogni 1:1 con obiettivi, performance e umore."],
      one: [{ q: "Prepara l’1:1 di domani con Laura.", a: "Raccoglie i suoi obiettivi, l’ultima valutazione, il pulse recente e quanto discusso nei precedenti 1:1." }],
      why: "Una buona performance non significa sempre coinvolgimento. Con il pulse legato a timbrature e performance, One vede il quadro completo di ogni persona.",
      stat: { n: "40–60%", t: "in meno di amministrazione manuale con valutazioni, 1:1 e sondaggi automatizzati" } },
    comunidades: { name: "Community",
      lead: "Spazi in cui le tue persone si incontrano, condividono e si riconoscono, oltre l’organigramma.",
      value: ["Community per interesse, sede, progetto o team, aperte o su invito.", "Post, riconoscimenti e celebrazioni dei traguardi direttamente dall’app.", "Riunisce in un unico spazio chi lavora in ufficio, da remoto e in negozio."],
      one: [{ q: "Quali community mi consigli ora che sono entrato?", a: "Suggerisce quelle per il tuo team, la tua sede e i tuoi interessi, in base al tuo profilo." }],
      why: "Le community si basano sugli stessi dati di team, sede e persone, così ogni nuovo assunto trova il suo posto fin dal primo giorno." },
    comunicaciones: { name: "Comunicazioni",
      lead: "Annunci per tutta l’azienda o per team specifici, dove le tue persone lavorano già ogni giorno.",
      value: ["Pubblica per tutta l’azienda o per team e sedi specifici.", "Raggiunge tutti tramite l’app, anche chi non lavora al computer.", "Gli annunci stanno accanto alle policy e ai documenti a cui si riferiscono."],
      one: [{ q: "Scrivi l’annuncio del nuovo orario estivo in italiano e inglese.", a: "Lo redige a partire dalla tua policy sugli orari e lo traduce, pronto da rivedere." }],
      why: "La segmentazione usa gli stessi dati di team, sede e ruolo del resto di Factorial." },
    ats: { name: "ATS e assunzioni",
      lead: "Un ATS che pianifica, filtra e decide con te, dalla posizione approvata all’offerta firmata.",
      value: ["Hiring Plan: ogni posizione approvata nella pianificazione dell’organico arriva come annuncio con responsabile, scadenza e stato.", "Report AI per ogni candidato e chiamate AI nella sua lingua, con trascrizione ed esito verde, giallo o rosso.", "Annunci illimitati, permessi per fase, videocolloqui con One e analytics di retention a un anno."],
      one: [
        { q: "Chiama tutti i candidati che arrivano alla fase di screening.", a: "Una chiamata nella loro lingua, annunciata, con consenso e registrata. Restituisce trascrizione, report e prossimo passo suggerito. La decisione è di una persona." },
        { q: "Crea l’annuncio per un Senior Product Designer a Milano.", a: "Redige l’annuncio dalla conversazione e lo pubblica sulla tua pagina carriere e su oltre 250 portali di lavoro." }
      ],
      why: "La posizione nasce approvata e con budget; chi firma entra con tutti i suoi dati, senza reinserire nulla; e gli analytics incrociano il canale di selezione con la valutazione della performance.",
      stats: [{ n: "70%", t: "di time-to-hire in meno con lo screening AI del primo colloquio" }, { n: "+25%", t: "di crescita dell’organico con lo stesso team di recruiting" }],
      soon: ["Candidati suggeriti dal talent pool (prossimamente).", "WhatsApp nelle assunzioni e pagine aziendali per entità (prossimamente).", "Valutazione culturale (prossimamente)."] },
    canal: { name: "Spazio sicuro",
      lead: "Un canale per segnalare illeciti in modo riservato, anche in forma anonima.",
      value: ["Segnalazioni riservate, con la possibilità di restare anonimi.", "Gestione dei casi con accesso limitato a chi se ne occupa.", "Ti aiuta a rispettare le norme sulla tutela dei segnalanti."],
      oneNote: "One segue alla lettera i permessi di Factorial: i casi sono visibili solo a chi li gestisce, a nessun altro.",
      why: "Vive nella stessa app degli altri strumenti del dipendente, così nessuno deve cercare dove segnalare." },
    control: { name: "Rilevazione presenze",
      lead: "Timbra da telefono o computer, con il registro dell’orario di lavoro sempre aggiornato.",
      value: ["Timbra dall’app o dal web, con straordinari e saldi calcolati.", "Anomalie visibili al manager prima che arrivino alle paghe.", "Le ore registrate sui progetti alimentano il costo reale di ogni progetto."],
      one: [{ q: "Ogni giorno feriale alle 18, mandami chi oggi ha meno di 4 timbrature.", a: "Crea una routine che controlla le timbrature ogni giorno e te la invia via email." }],
      why: "La stessa timbratura serve per le paghe, il costo dei progetti e il pulse del team, senza inserirla due volte.",
      soon: ["Incongruenze nelle timbrature: risolvile tutte in un colpo solo, senza gestirle una per una."] },
    turnos: { name: "Turni",
      lead: "Turnazioni che rispettano le tue regole e buchi coperti senza elenchi di telefonate.",
      value: ["Pianificazione automatica con regole personalizzate: riposi, orari, sedi, ruoli e competenze vengono rispettati da soli.", "Reperibilità pianificate e registrate insieme agli altri turni.", "Collegato al contratto di ogni persona nel Portale dipendente: ore, orario e condizioni vengono considerati nella pianificazione.", "I turni effettivi arrivano alle paghe, senza turni superati nel calcolo."],
      one: [{ q: "Trova qualcuno che copra il turno di María oggi.", a: "Verifica riposi, ruoli, competenze, orario e sede, chiama i candidati uno a uno e avvisa il manager quando il turno è coperto." }],
      why: "Un’assenza apre il buco, One lo riempie e il nuovo turno arriva a timbrature e variabili di paga. Ogni regola rispettata e ogni chiamata registrata." },
    ausencias: { name: "Assenze",
      lead: "Ferie, malattia e permessi con saldi aggiornati e approvazione in due clic.",
      value: ["Policy di assenza per team, sede o contratto collettivo.", "Calendario condiviso per vedere chi è assente prima di approvare.", "Assenze e malattie sincronizzate con le buste paga."],
      one: [{ q: "Quanti giorni di ferie mi restano?", a: "Risponde con il saldo di quella persona e la policy che si applica. Ognuno vede solo il proprio." }],
      why: "Una malattia non resta sul calendario: apre un buco nei Turni, adegua le timbrature e arriva alle paghe come variabile." },
    plantilla: { name: "Pianificazione dell’organico",
      lead: "HR e Finanza vedono gli stessi numeri fin dal primo giorno. Basta con le cinque versioni del foglio di calcolo.",
      value: ["I manager propongono posizioni con ruolo, livello, fascia retributiva e data, collegate al catalogo dei ruoli.", "HR e Finanza rivedono un’unica versione, con il registro di chi ha deciso cosa e quando.", "Le posizioni approvate si aprono in automatico in ATS e assunzioni: pianificazione ed esecuzione sempre allineate."],
      one: [{ q: "Prepara il nostro piano di organico 2027 secondo le nostre linee guida.", a: "Propone ruoli, livelli e costi da rivedere." }],
      why: "La posizione che approvi è l’annuncio che pubblichi, e ogni aumento finalizzato aggiorna la previsione dei costi per il piano successivo.",
      soon: ["Flussi di approvazione strutturati e collegamento al budget.", "Confronto tra assunzioni pianificate ed effettive."] },
    proyectos: { name: "Progetti",
      lead: "Scopri se ogni progetto è redditizio mentre è in corso, non quando si chiude.",
      value: ["Ore registrate dal widget di timbratura, senza fogli ore paralleli.", "Costo del lavoro, costi fissi e spese rispetto al budget, in tempo reale.", "Dal preventivo al progetto e dal progetto alla fattura, con i dati del cliente già caricati."],
      one: [{ q: "Quali progetti sono fuori budget questo mese?", a: "Incrocia ore registrate, costo del lavoro e spese, e spiega dove ognuno si discosta." }],
      why: "Il costo di un’ora deriva dallo stipendio reale della persona e l’ora deriva dalla timbratura: nessuno copia dati tra strumenti." },
    fpa: { name: "Financial Planning",
      lead: "Budget e previsioni con i costi reali che vivono già in Factorial.",
      value: ["Budget per reparto o centro di costo.", "Consuntivo vs. pianificato con dati di organico, paghe, spese, acquisti e progetti.", "Un’unica fonte di verità per HR, Finanza e direzione."],
      one: [{ q: "Come siamo messi rispetto al budget del personale in questo trimestre?", a: "Confronta il costo reale delle paghe con il piano e segnala gli scostamenti." }],
      why: "Il budget si alimenta da solo: ogni assunzione, aumento, spesa o acquisto è già registrato nel suo modulo." },
    gastos: { name: "Spese",
      lead: "Da una pila di scontrini alla chiusura dei conti, con un solo messaggio.",
      value: ["Carica gli scontrini e i campi si compilano da soli.", "Ogni spesa è verificata rispetto alla policy: quelle conformi vengono approvate all’istante.", "Riconciliazione delle carte e dati puliti per la chiusura di fine mese."],
      one: [{ q: "Ecco gli scontrini della mia trasferta. (ne carica 5 insieme)", a: "Legge ogni scontrino, prepara le spese, riconcilia la carta e verifica policy e permessi. Solo le eccezioni aspettano una persona." }],
      why: "La spesa approvata arriva alle paghe se va rimborsata e al progetto se è fatturabile." },
    compras: { name: "Acquisti",
      lead: "Richieste di acquisto, approvazioni e fornitori in un unico flusso.",
      value: ["Richieste con approvazione per importo e team.", "Ogni acquisto è legato al suo budget e a chi l’ha richiesto.", "Collegato a inventario e software per sapere cosa si compra e per chi."],
      one: [{ q: "Mi si è appena rotto il portatile. Ne ho bisogno di uno nuovo.", a: "Apre il ticket, verifica che non ci siano scorte, ne trova uno nel marketplace e lo acquista appena una persona approva." }],
      why: "L’acquisto parte da un ticket, passa dal budget e finisce nell’inventario della persona." },
    revision: { name: "Revisione salariale",
      lead: "Ogni aumento giustificato, a budget e difendibile.",
      value: ["Linee guida definite una volta: idoneità, fasce e approvatori. Ogni proposta viene verificata in automatico.", "Ogni manager vede solo il proprio team, con le voci fuori policy già segnalate, e il budget si assegna in tempo reale.", "L’aumento approvato confluisce nel contratto e nella previsione dell’organico, senza reinserimenti."],
      one: [{ q: "Proponi gli aumenti per il mio team in base alla nostra policy.", a: "Cifre e motivazioni, già verificate rispetto al budget. Tu approvi." }],
      why: "Decidi quanti cicli di valutazione contano per l’idoneità: l’aumento riflette un andamento, non un punteggio isolato. E arriva alle paghe come variabile validata." },
    politicas: { name: "Politiche",
      lead: "Le tue regole, scritte una volta e applicate in ogni modulo.",
      value: ["Policy su assenze, spese, orari e altro, applicate dai moduli che le usano.", "Handbook: le persone chiedono e One risponde citando la fonte.", "Se One non lo sa, lo dice."],
      one: [{ q: "Posso lavorare da remoto da un altro Paese per due settimane?", a: "Risponde in base alla tua policy, mostra la fonte e rivela solo ciò che quella persona può vedere." }],
      why: "Le domande di routine non arrivano mai nella casella del manager, e gli stessi criteri approvano spese o assenze." },
    portal: { name: "Portale dipendente",
      lead: "L’app in cui ognuno vede le proprie informazioni e chiede ciò che gli serve.",
      value: ["Dati personali, cedolini, documenti e saldi in un’unica app.", "Assenze, spese e ticket dal telefono.", "One integrato per chiedere, richiedere e seguire ogni richiesta."],
      oneNote: "One è incluso per tutta la forza lavoro, senza bisogno di formazione. Ognuno chiede ciò che gli serve e vede solo ciò che il suo ruolo consente.",
      why: "Tutto ciò che il dipendente fa qui va direttamente nel modulo giusto, senza moduli né email di mezzo." },
    onoff: { name: "On/Offboarding",
      lead: "Nuovi ingressi e uscite come un unico flusso, con attività per HR, IT e manager.",
      value: ["Il nuovo assunto arriva da ATS e assunzioni con tutti i suoi dati.", "Documenti, firma, dispositivo, accessi e formazione di benvenuto nello stesso flusso.", "All’uscita, accessi e attrezzature vengono recuperati senza affidarsi alla memoria di qualcuno."],
      one: [{ q: "Prepara l’onboarding di Marta per lunedì.", a: "Avvia le attività, prepara i documenti da firmare, richiede il suo portatile e assegna il corso di benvenuto." }],
      why: "È il punto in cui si incontrano più moduli: se i dati sono centralizzati, il primo giorno si organizza da solo." },
    documentos: { name: "Gestione documentale",
      lead: "Contratti, cedolini e certificati di ogni persona, con permessi e modelli.",
      value: ["Cartelle per persona e per azienda, con permessi basati sul ruolo.", "Modelli che si compilano con i dati del dipendente.", "One legge qualsiasi file ed estrae ciò che conta."],
      one: [{ q: "Quali contratti a termine scadono in questo trimestre?", a: "Lo incrocia con i dati contrattuali e restituisce l’elenco con date e responsabili." }],
      why: "Una modifica salariale approvata aggiorna il contratto; un’assunzione genera i suoi documenti. Nessuno deve rifarli." },
    firma: { name: "Firma elettronica",
      lead: "Invia per la firma senza uscire da Factorial e conserva l’esito dove deve stare.",
      value: ["Firma contratti, allegati e policy da qualsiasi dispositivo.", "Offerte di lavoro firmate da ovunque, e sai subito quando sono firmate.", "Il documento firmato resta nel profilo della persona."],
      oneNote: "One prepara i documenti dai tuoi modelli, così devi solo rivederli e inviarli per la firma.",
      why: "Zero dati da reinserire quando qualcuno firma: lo stato arriva al processo che l’ha richiesto." },
    analiticas: { name: "Analytics & Report",
      lead: "Tutti i dati di Factorial in un unico posto, e One per interrogarli in linguaggio naturale.",
      value: ["Report che incrociano i moduli sugli stessi dati: persone, tempo, talento, paghe e finanza.", "Chiedi a One di creare un report, aggiungere widget, filtrare o spiegare un andamento, e salvalo.", "Ognuno vede solo ciò che i suoi permessi consentono."],
      one: [{ q: "Mandami il turnover per reparto ogni lunedì.", a: "Crea il report, lo pianifica come routine e spiega l’andamento a ogni invio." }],
      why: "Ogni modulo confluisce qui. Poiché tutti i dati vivono in Factorial, un report non si costruisce: si chiede. Senza esportazioni, senza unire fogli di calcolo e senza aspettare la Finanza." },
    tickets: { name: "Ticket",
      lead: "Richieste che arrivano già a metà risolte prima che una persona le tocchi.",
      value: ["Aperti chattando con One e tracciati in Factorial.", "Instradati in automatico al team giusto: IT, HR, Finanza.", "One indaga e traduce ogni messaggio in entrambe le direzioni."],
      one: [{ q: "Ciao One, mi si è appena rotto il portatile. Ne ho bisogno di uno nuovo.", a: "Crea il ticket, lo instrada all’IT, legge il contesto, verifica che non ci siano portatili in magazzino, ne trova uno nel marketplace e prepara il piano. Una persona approva, viene acquistato e l’IT lo consegna." }],
      why: "One indaga tra contratti, asset IT e profili dei dipendenti: la risoluzione viene preparata con le tue policy e chi la gestisce deve solo approvare." },
    mdm: { name: "Gestione dispositivi mobili",
      lead: "Configura e proteggi i dispositivi aziendali dallo stesso posto in cui gestisci le persone.",
      value: ["Ogni dispositivo legato alla persona che lo usa.", "Registrazione e rimozione dei dispositivi all’interno di onboarding e offboarding.", "Stato di sicurezza della flotta visibile all’IT."],
      oneNote: "One ti mantiene conforme: verifica le policy, corregge le incoerenze e monitora accessi e rischi.",
      why: "Quando qualcuno entra o esce, l’IT non dipende da un’email dell’HR: la modifica è già in Factorial." },
    inventario: { name: "Inventario",
      lead: "Quali attrezzature ha ogni persona, con il suo storico.",
      value: ["Assegnazione e restituzione delle attrezzature per persona.", "Integrato in onboarding e offboarding.", "Scorte visibili prima di acquistare."],
      oneNote: "Quando arriva un ticket, One controlla l’inventario prima di proporre un acquisto.",
      why: "L’inventario sa chi è chi perché condivide i dati delle persone con Core HR." },
    software: { name: "Gestione SaaS",
      lead: "Quali strumenti usa l’azienda, chi ha accesso e quanto costano.",
      value: ["Inventario di app e licenze.", "Accessi concessi e revocati quando le persone entrano ed escono.", "Spesa per le licenze visibile alla Finanza."],
      oneNote: "One incrocia le licenze con le persone attive per individuare accessi che non dovrebbero più esistere.",
      why: "Licenze, persone e budget in un unico posto: nessuno paga l’account di chi se n’è già andato." },
    marketplace: { name: "Marketplace",
      lead: "Un catalogo per ordinare dispositivi e attrezzature senza cercare fornitori.",
      value: ["Catalogo di dispositivi pronto da ordinare.", "Acquisti con approvazione e consegna a chi ne ha bisogno.", "Collegato a ticket e inventario."],
      oneNote: "Se non ci sono scorte, One trova il dispositivo nel marketplace e lascia l’acquisto pronto da approvare.",
      why: "Dal ticket alla consegna senza cambiare strumento." },
    seguridad: { name: "Sicurezza (EDR)",
      tag: "Add-on",
      lead: "Antivirus e rilevamento delle minacce su ogni dispositivo, gestiti da Factorial.",
      value: ["Protezione degli endpoint con rilevamento e risposta (EDR/MDR) di SentinelOne.", "Funziona sopra l’MDM: la protezione viene applicata, non solo verificata.", "Se un dispositivo si perde, controlla le attività sospette prima di cancellarlo."],
      oneNote: "One segnala i dispositivi non protetti e prepara la risposta: all’IT resta solo da approvare.",
      why: "Protegge gli stessi dispositivi e le stesse persone gestiti dall’MDM: a ogni ingresso o uscita, la protezione segue." },
    cumplimiento: { name: "Compliance",
      tag: "Add-on",
      lead: "ISO 27001 e NIS2 con le prove che l’azienda ha già in Factorial.",
      value: ["Organico, ruoli e contratti con clausola di riservatezza, dal Core HR.", "Policy di sicurezza firmate e formazione di sensibilizzazione completata.", "Cifratura, revisioni degli accessi, registro degli asset e incidenti, dai prodotti IT."],
      oneNote: "One raccoglie le prove e prepara il pacchetto per l’auditor.",
      why: "Legge prove da quasi tutti i moduli di Factorial, cosa che uno strumento di compliance isolato non può fare." },
    beneficios: { name: "Benefit",
      lead: "Una retribuzione flessibile che il tuo team usa con una carta e che l’HR gestisce senza scartoffie.",
      value: ["Pasti, trasporti, asilo, assicurazione sanitaria, formazione e Wellhub.", "Carta Visa nel wallet del telefono, con saldo e movimenti nell’app.", "Budget per categoria, conformità fiscale ed esportazione diretta alle paghe."],
      one: [{ q: "Quanto buono pasto mi resta questo mese?", a: "Risponde con il saldo di quella persona, nei limiti dei suoi permessi." }, { q: "Quante tasse ho risparmiato finora nel 2026?", a: "Calcola il risparmio fiscale di quella persona grazie ai benefit da inizio anno, con il dettaglio per categoria." }],
      why: "Ciò che ogni persona usa arriva alle paghe come voce di cedolino, senza che nessuno lo compili a mano." },
    compensacion: { name: "Retribuzione",
      lead: "Ogni modifica arriva alle paghe già validata.",
      value: ["Copre tutto il ciclo paghe: pre-elaborazione (preparazione e aggiornamenti dei dipendenti), post-elaborazione (risultati calcolati dal tuo software paghe) e oltre, con Financial Planning, distribuzione dei cedolini in Gestione documentale e pagamenti SEPA con Tesoreria.", "Aggiornamenti dei dipendenti pronti per le paghe: assunzioni, cessazioni, modifiche di contratto e stipendio, assenze e bonus, visibili all’istante.", "Alert prima del calcolo: variabili in sospeso, bonus non approvati o turni non aggiornati.", "Ogni cedolino confrontato con variabili e contratti approvati, e costo reale vs. pianificato.", "Piani di incentivazione collegati alla Performance: regole di pagamento, calcolo automatico di ogni bonus e pagamento diretto in busta paga."],
      one: [{ q: "Cosa manca prima di chiudere le paghe di questo mese?", a: "Controlla le variabili in sospeso e tutto ciò che non torna, e ti dice chi deve intervenire." }],
      why: "Tutto confluisce qui: timbrature, turni, assenze, spese e aumenti. Se nascono connessi, arrivano validati.",
      stat: { n: "40 h", t: "al mese che puoi risparmiare sincronizzando assunzioni, uscite, modifiche salariali, assenze e variabili con il tuo consulente del lavoro o software paghe" } },
    integraciones: { name: "Integrazioni",
      lead: "Factorial connesso al tuo consulente del lavoro, al tuo software paghe e al resto dei tuoi strumenti.",
      value: ["Compatibile con il tuo software paghe e con Factorial Professionals per collaborare con il tuo consulente del lavoro.", "API per connetterti al tuo ERP."],
      oneNote: "Se i dati vivono in Factorial o in qualcosa che colleghi, puoi chiedere, delegare o automatizzare con One.",
      why: "Integrare non significa copiare: la modifica si registra una volta e si sincronizza." },
    anticipo: { name: "Anticipo salariale",
      lead: "Il tuo team può richiedere una parte dello stipendio già maturato prima della fine del mese.",
      value: ["Richiesta dall’app, senza scartoffie.", "Regole e limiti definiti da te.", "L’anticipo si riflette nelle paghe senza rettifiche manuali."],
      oneNote: "Le persone chiedono a One quanto possono richiedere e come funziona, secondo la tua policy.",
      why: "Poiché stipendio e giorni lavorati sono già in Factorial, l’importo disponibile non si calcola a mano." }
  },
  STORIES: [
    { t: "Un nuovo assunto", d: "La posizione si approva una volta e il resto segue da solo.", steps: ["La posizione viene approvata con la sua fascia retributiva.", "Si apre in automatico come annuncio; One filtra e chiama.", "L’offerta si firma da un telefono.", "Entra con tutti i suoi dati, senza reinserire nulla.", "Il suo portatile è già assegnato.", "Riceve il corso di benvenuto.", "La sua assunzione arriva alle paghe validata."] },
    { t: "Una malattia dell’ultimo minuto", d: "Dall’avviso alle paghe senza che nessuno copi dati.", steps: ["Qualcuno comunica di essere malato.", "One trova chi può coprire e lo chiama.", "Il nuovo turno si timbra come tutti gli altri.", "La malattia e il cambio turno arrivano come variabili.", "L’assenteismo per sede si aggiorna da solo."] },
    { t: "Un ciclo di valutazione", d: "L’aumento nasce dalla valutazione e rientra nel piano.", steps: ["La valutazione segnala risultati e gap.", "La formazione si assegna con un clic.", "One propone l’aumento nel rispetto della policy.", "L’aumento arriva alle paghe validato.", "La previsione dei costi si aggiorna per il piano successivo."] },
    { t: "Un portatile rotto", d: "Un messaggio a One e un’approvazione.", steps: ["Lo dici a One e apre il ticket.", "One verifica che non ci siano scorte.", "Ne trova uno conforme alla policy.", "Una persona approva, viene acquistato e l’IT lo consegna."] }
  ],
  UI: {
    sbMap: "Mappa One",
    sbConn: "Connettori",
    sbPlans: "Piani",
    sbDeck: "Pitch deck",
    sbLegal: "Legale e compliance",
    video: "Guardalo in azione",
    navConn: "Connettori",
    connE: "One · Connettori",
    connT: "La tua azienda non vive in un solo strumento. Nemmeno One.",
    connD: "Collega le app che il tuo team usa già, come Slack, HubSpot, Notion o Jira. One le combina con i tuoi dati di Factorial, sempre nel rispetto dei permessi di ogni persona.",
    connBtn: "Vedi il catalogo dei connettori",
    connNote: "Catalogo in inglese",
    themeAria: "Modalità notte",
    partnerQ: "Vuoi vederlo con i tuoi dati? Chiedi al tuo partner Factorial.",
    panelConn: "Collega One ai tuoi strumenti",
    navMap: "Mappa", navStories: "Storie", navWhy: "AI per aziende", navPlans: "Piani One", navFacts: "Numeri", navNext: "In arrivo", navAria: "Sezioni",
    allin: "All in One",
    center: "Il cuore", area: "Area", modules: "Moduli", brings: "Come ti aiuta", solves: "Cosa risolve", tryOne: "Prova con One", withOne: "Con One", connected: "Connesso con",
    soon: "Cosa arriva", soonNote: "Ambito e date possono cambiare.", close: "Chiudi",
    title: "Factorial · Tutto connesso con One",
    h1: "One conosce già la tua azienda",
    sub: "Ogni modulo di Factorial condivide gli stessi dati. One lavora sopra tutti, con i tuoi permessi e le tue policy.",
    hint: "Tocca una bolla qualsiasi per vedere come ti aiuta, cosa fa One con essa e a cosa si collega.",
    cue: "Continua a scorrere", cueAria: "Continua a scorrere", oneAria: "Scopri cos’è One", panelAria: "Dettagli del modulo",
    s1t: "Gli stessi dati, da un capo all’altro",
    s1d: "Quando ogni modulo vive in uno strumento diverso, ogni decisione riparte da zero. In Factorial, ciò che inserisci una volta lo usa il passo successivo. Tocca un passaggio qualsiasi per aprirlo sulla mappa.",
    s2t: "I tuoi team usano già l’AI. Rendila tua.",
    s2d: "Ciò che cambia non è la tecnologia, è il contesto. E con i dati delle persone, la fiducia non è negoziabile.",
    cmpHead: `<tr><th></th><th>AI generica</th><th>One</th></tr>`,
    cmpBody: `<tr><td>Contesto</td><td>Parte da zero ogni volta. Il contesto lo incolli tu.</td><td>Connessa ai tuoi dati Factorial e agli strumenti che colleghi, fin dal primo messaggio.</td></tr>
      <tr><td>Permessi</td><td>Non sa chi dovrebbe vedere cosa.</td><td>Ognuno vede solo ciò che il suo ruolo consente. Stessi ruoli, nulla di nuovo esposto.</td></tr>
      <tr><td>Conformità</td><td>Nessuna garanzia nell’UE.</td><td>Conforme a GDPR e AI Act europeo, ospitata nell’UE.</td></tr>
      <tr><td>Affidabilità</td><td>Inventa risposte senza avvisare.</td><td>Risponde con i tuoi dati e mostra la fonte. Se non lo sa, lo dice.</td></tr>
      <tr><td>Controllo</td><td>Costi e azioni opachi.</td><td>Decidi tu quali agenti funzionano e vedi ogni azione e quanto è costata.</td></tr>`,
    s4e: "One · Capacità personale",
    s4t: "AI per tutti, senza perdere il controllo",
    s4d: "Ogni persona ha il proprio utilizzo giornaliero di AI, all’interno dei permessi di cui già ti fidi. Scegli un mix di piani personali in base al tipo di profilo.",
    tiers: `<div class="tier"><div class="tn"><b>Free</b></div><p class="usage"><b>Incluso in ogni bundle.</b></p><h4>Consigliato per</h4><div class="who"><i>Tutto il team</i></div><h4>Cosa fanno con One</h4><ul><li>Chiedono di policy, saldi, cedolini e documenti, con la fonte.</li><li>Richiedono assenze, spese e ticket in chat.</li><li>Seguono ogni richiesta dall’app.</li></ul></div>
    <div class="tier"><div class="tn"><b>Basic</b></div><p class="usage"><b>x2 di utilizzo vs Free</b><br>Per un uso regolare.</p><h4>Consigliato per</h4><div class="who"><i>Tutto il team</i><i>Team leader</i></div><h4>Cosa fanno con One</h4><ul><li>Tutto ciò che c’è in Free, con il doppio dell’utilizzo giornaliero.</li><li>Per chi usa One ogni giorno nel proprio lavoro.</li></ul></div>
    <div class="tier"><div class="tn"><b>Plus</b></div><p class="usage"><b>x10 di utilizzo vs Basic</b><br>Per flussi di lavoro impegnativi.</p><h4>Consigliato per</h4><div class="who"><i>Team leader</i><i>Manager</i><i>Admin</i></div><h4>Cosa fanno con One</h4><ul><li>Preparano gli 1:1 e consultano gli analytics del proprio team.</li><li>Approvano assenze, spese e turni con il contesto già raccolto.</li></ul></div>
    <div class="tier"><div class="tn"><b>Max</b></div><p class="usage"><b>x35 di utilizzo vs Basic</b><br>Per power user.</p><h4>Consigliato per</h4><div class="who"><i>Manager</i><i>Admin</i><i>Training Manager</i><i>Finance Manager</i></div><h4>Cosa fanno con One</h4><ul><li>Creano corsi completi, elaborano lotti di spese e creano report e routine.</li><li>Pensato per un uso intensivo di One nella propria area.</li></ul></div>`,
    p1: "<b>I tuoi dati restano sotto controllo</b><p>Ogni persona vede solo ciò che poteva già vedere. One segue esattamente i tuoi permessi Factorial: stessi ruoli, stessi accessi, niente di nuovo esposto.</p>",
    p2: "<b>Nessuno sfora il budget</b><p>Ogni persona ha un utilizzo giornaliero in base al proprio piano personale. Raggiunto il limite, One si mette in pausa fino al giorno dopo. Niente ricariche, niente costi fuori controllo.</p>",
    flex: "<b>Scegli tu quale piano personale si adatta a ogni persona.</b> Esempio con 100 persone: 5 Max + 15 Plus + 30 Basic + 50 Free.",
    s3t: "Cosa arriva",
    s3d: "Ogni prodotto sta diventando un prodotto AI. Ambito e date possono cambiare; ti terremo aggiornato.",
    road: `<div><span>Prossimamente</span><b>1:1 con l’AI</b><p>One prepara e guida ogni 1:1 con lo storico completo della persona.</p></div>
    <div><span>Prossimamente</span><b>Corsi gamificati</b><p>Meccaniche di gioco dentro i corsi LMS.</p></div>
    <div><span>Prossimamente</span><b>Obiettivi via MCP</b><p>Factorial si connette ai tuoi strumenti e aggiorna gli obiettivi con i loro dati.</p></div>
    <div><span>Prossimamente</span><b>Organico: approvazioni e budget</b><p>Flussi di approvazione strutturati e confronto tra pianificato ed effettivo.</p></div>
    <div><span>Prossimamente</span><b>Talent pool suggerito</b><p>Prima di pubblicare, vedi chi nel tuo bacino di candidati è già in linea.</p></div>
    <div><span>Prossimamente</span><b>WhatsApp nelle assunzioni</b><p>Messaggi, un avviso prima della chiamata AI e documenti via WhatsApp.</p></div>
    <div><span>Prossimamente</span><b>Incongruenze nelle timbrature</b><p>Risolvi tutte le anomalie di timbratura in un colpo solo, senza gestirle una per una.</p></div>
    <div class="more"><span>Prossimamente</span><b>E molto altro</b><p>Ogni mese arrivano nuove funzioni AI in tutti i prodotti Factorial.</p></div>`,
    ctaT: "Vediamo insieme il tuo ciclo completo con i tuoi dati?",
    ctaD: "Mappiamo il tuo organico, il tuo processo di selezione e la tua politica retributiva, e ti mostriamo lo stesso flusso dentro Factorial, con One al lavoro a ogni passaggio.",
    ctaQ: "Non sei ancora in contatto con nessuno di Factorial?",
    ctaBtn: "Prenota una demo",
    footer: "Gli esempi di report e conversazioni sono illustrativi e usano dati fittizi. Alcune funzioni dipendono dal tuo piano e dai crediti One. Factorial · ottobre 2026."
  }
};

LONG.it = {
    one: () => `<p class="lead">Il tuo agente AI personale al lavoro. Conosce il tuo contesto, agisce su tutto Factorial e ti aiuta a decidere, senza esporre i tuoi dati.</p>
    <h3>Tre modi di usarlo</h3>
    <ul class="vals"><li><b>Chiedi.</b> Chiunque chiede ciò che gli serve: policy, saldi, dati del team. One risponde citando la fonte e solo con ciò che il suo ruolo consente.</li>
    <li><b>Delega.</b> Dentro ogni prodotto, One fa il lavoro: redige l’annuncio, chiama il candidato, prepara la proposta di aumento.</li>
    <li><b>Automatizza.</b> Imposta una routine una volta e One rileva, decide e agisce. Tu approvi le eccezioni.</li></ul>
    <h3>Come funziona</h3>
    <p class="note">Rileva i trigger nei tuoi dati in tempo reale, li confronta con le tue policy e il tuo storico, sceglie l’azione o la passa a una persona, fa il lavoro dentro Factorial e registra ciò che ha fatto. Ogni passaggio resta visibile e verificabile.</p>
    <h3>Perché i dati centralizzati cambiano tutto</h3>
    <p class="why" style="color:var(--ink)">Più moduli colleghi, più contesto ha One. Un’AI generica parte da zero; One sa già chi è chi, cosa dice la tua policy e cosa è successo nell’ultimo ciclo.</p>
    <div class="stats"><div class="stat"><b>GDPR</b><span>e AI Act europeo, ospitata nell’UE</span></div><div class="stat"><b>I tuoi permessi</b><span>stessi ruoli Factorial, nulla di nuovo esposto</span></div></div>
    <h3>Routine: One ti porta la risposta quando serve</h3>
    ${chatHTML([{ q: "Ogni 25 del mese, avvisami delle variabili di paga in sospeso.", a: "Crea la routine, controlla cosa manca prima della chiusura e te lo invia con chi deve intervenire." }])}`,
    routines: `<h3>Routine con informazioni sempre aggiornate</h3>
  <ul class="rt">
    <li><span class="when">Lunedì, 9:00</span><span>Turnover per reparto, con l’andamento spiegato<span class="src">Core HR · Analytics & Report</span></span></li>
    <li><span class="when">Giorni feriali, 18:00</span><span>Persone con meno di 4 timbrature oggi<span class="src">Rilevazione presenze</span></span></li>
    <li><span class="when">Il 25</span><span>Variabili di paga in sospeso prima della chiusura<span class="src">Retribuzione · Turni · Spese</span></span></li>
    <li><span class="when">Primo giorno del mese</span><span>Formazione obbligatoria in sospeso per sede<span class="src">Formazione & LMS</span></span></li>
    <li><span class="when">Venerdì, 12:00</span><span>Candidati in screening senza feedback dal team di selezione<span class="src">ATS e assunzioni</span></span></li>
  </ul>
  <p class="disc-note">Qualsiasi report di Analytics può essere pianificato come routine dalla chat di One. Le routine usano crediti One.</p>`,
    ax: { t: "Esempi di report già connessi",
      c1: ["Turnover e coinvolgimento per reparto", "Core HR + Coinvolgimento · turnover (barre) ed eNPS (linea)", ["Negozi","Ops","Vendite","Supporto","Tech"]],
      c2: ["Qualità dell’assunzione per canale", "ATS e assunzioni + Performance & Obiettivi · retention a 1 anno", ["Segnalazioni","LinkedIn","Sito carriere","Portali di lavoro"]],
      c3: ["Costo dell’organico: effettivo vs. pianificato", "Pianificazione dell’organico + Revisione salariale + Retribuzione", ["G","F","M","A","M","G"], "Effettivo", "Pianificato"],
      c4: ["Assenteismo e straordinari per sede", "Assenze + Rilevazione presenze + Turni", ["Milano","Roma","Torino","Bologna"], "Assenteismo %", "Straordinari"],
      note: "Dati fittizi, solo per illustrare cosa si può incrociare.",
      tasksT: "Attività che One già svolge da solo",
      tasks: ["Approva le spese conformi alla policy e ti lascia solo le eccezioni.", "Copre i turni chiamando chi può farli, seguendo le tue regole.", "Chiama i candidati che arrivano allo screening e ti lascia il report.", "Risolve a metà i ticket così chi li gestisce deve solo approvare."] }
};


const HUBX = {}, MODX = {}, FACTS = {};

HUBX.es = {
  core: { tag: "Toda tu empresa, desde un solo lugar",
    lead: "RR. HH., Finanzas e IT trabajan sobre el mismo dato vivo, y One también. Personas, documentos, políticas, comunicación y analíticas: la base sobre la que funciona todo lo demás.",
    pains: ["Se acabó esperar el informe de otro: lo preguntas y tienes la respuesta, no una petición.", "Las solicitudes ya no se pierden entre emails, mensajes y seguimientos manuales.", "Políticas que la gente lee de verdad, con la confirmación de lectura lista para la auditoría.", "Documentos firmados sin perseguir a nadie, con plena validez legal."],
    stats: [{ n: "+70", t: "integraciones, API abierta y conector MCP" }, { n: "UE", t: "datos alojados en Europa, conforme con el RGPD y el Reglamento de IA" }],
    ask: "Compara ausencias y desempeño entre mis equipos" },
  tiempo: { tag: "Automatiza lo básico",
    lead: "Fichajes, turnos y ausencias en un mismo calendario. Cumple con el registro de jornada, compensa las horas extra y deja cada hora lista para nómina y proyectos.",
    pains: ["Registro de jornada conforme a la ley, sin hojas ni Excel.", "Horas extra compensadas con tiempo libre o en nómina, sin cálculos a mano.", "Olvidos de fichaje y retrasos visibles en el momento, no a fin de mes.", "Cuadrantes sin conflictos, generados a partir de horas de contrato, descansos y cobertura."],
    stats: [{ n: "4", t: "formas de fichar: app, código QR, número de empleado y web" }, { n: "∞", t: "políticas de ausencia, con aprobaciones multinivel" }],
    ask: "Dime cada lunes a las 9:30 quién está ausente esa semana" },
  finanzas: { tag: "Costes bajo control",
    lead: "Gastos, tarjetas y solicitudes de compra en un solo lugar, con el coste de las personas siempre sincronizado. Envía a One una pila de tickets, aprueba desde el chat y pregunta cuánto cuesta cada equipo.",
    pains: ["Controla el gasto antes de que ocurra, de la solicitud de compra a la factura pagada.", "Duplicados y discrepancias detectados sin bloquear a nadie.", "Adiós a los tickets en papel.", "Revisiones salariales que no se salen del presupuesto.", "El coste real de cada persona y cada equipo, claro y al día."],
    stats: [{ n: "1,5 %", t: "de cashback en el gasto con tarjeta (próximamente)" }, { n: "SEPA", t: "reembolsos y pagos a proveedores desde Factorial" }],
    ask: "¿Cuál es nuestro coste de personal por equipo este mes?" },
  talento: { tag: "Crea equipos de alto rendimiento",
    lead: "Contrata, desarrolla y retén a las personas adecuadas mientras One se ocupa de la parte administrativa: convierte CVs en candidatos, analiza las encuestas y deja cada 1:1 transcrito.",
    pains: ["Evaluaciones justas, con resúmenes de IA de autoevaluación, compañeros y manager.", "Planes de formación fuera del Excel, con costes y bonificaciones bajo control.", "Retención: escucha lo que tu equipo dice de verdad, no solo la nota.", "Contratación más rápida: One redacta la oferta, ordena candidatos y hace la primera llamada.", "Canal de denuncias conforme a la normativa, sin riesgo de sanciones."],
    stats: [{ n: "+250", t: "portales de empleo, con LinkedIn, InfoJobs e Indeed" }, { n: "360°", t: "evaluaciones, objetivos en cascada y 9-box" }],
    ask: "¿Qué dice la gente en la encuesta de clima de este trimestre?" },
  it: { tag: "IT sincronizado con RR. HH.",
    lead: "Dispositivos, apps y accesos siguen cada alta, cambio y baja de forma automática. ¿Alguien necesita algo? Se lo pide a One, que abre la solicitud, la envía al equipo correcto y responde primero con tus políticas.",
    pains: ["Cada portátil configurado y protegido desde el primer día.", "Ninguna licencia pagada que nadie abre.", "Shadow IT y herramientas de IA detectadas y ordenadas por riesgo.", "Listo para auditorías de ISO 27001, SOC 2 y RGPD, con documentos de traspaso conformes con el artículo 21 de NIS2."],
    stats: [{ n: "1 clic", t: "para recuperar las licencias que nadie usa" }, { n: "Zero-touch", t: "despliegue de dispositivos, de macOS a ChromeOS" }],
    ask: "Bloquea o borra el portátil que ha perdido Marta" },
  nomina: { tag: "Nóminas sin errores y a la primera",
    lead: "Fichajes, ausencias, gastos y beneficios llegan solos a nómina, así detectas los errores antes del día de pago, no después.",
    pains: ["Un ciclo de nómina guiado y colaborativo, con tu gestoría conectada vía Factorial Professionals.", "Detección automática de errores en conceptos salariales y resultados de nómina.", "Remesas SEPA y distribución automática de nóminas.", "Retribución flexible y anticipos de nómina sin intereses ni comisiones."],
    stats: [{ n: "0 €", t: "de intereses y comisiones en el anticipo de nómina" }, { n: "+70", t: "integraciones con proveedores de nómina, ERP y más" }],
    ask: "¿Cuánto anticipo puedo pedir todavía este mes?" }
};

MODX.es = {
  desempeno: { extra: ["Resúmenes de IA de autoevaluación, compañeros y manager para evaluar con justicia.", "Gráfico de araña de competencias y objetivos en cascada."], try: "Compara a cada persona con la media de su equipo" },
  formacion: { extra: ["Costes y bonificaciones bajo control, con automatización FUNDAE (.XML, encuestas oficiales y certificados).", "Importador SCORM y alertas de caducidad y recertificación."], try: "Crea un curso y un test a partir de este documento" },
  engagement: { extra: ["Videollamadas 1:1 con transcripción de IA y un chat para analizarlas.", "One analiza resultados, tendencias y comentarios libres de cada encuesta."], try: "¿Qué dice la gente en la encuesta de clima de este trimestre?" },
  comunicaciones: { extra: ["El chat de empresa para equipos de primera línea: grupos por equipo, turno o centro, creados desde el organigrama.", "Traducción con IA a cinco idiomas, notas de voz, vídeo y confirmación de lectura en avisos críticos."], try: "Escribe al turno de mañana sobre el cierre del viernes" },
  ats: { extra: ["AI Top Match: One ordena cada candidatura.", "Convierte CVs en candidatos, también los escaneados."], try: "Redacta la oferta y ordena a los candidatos de Diseño" },
  canal: { extra: ["Comunicación bidireccional, gestión de casos y registro de auditoría completo.", "Si alguien plantea una denuncia a One, le lleva al canal en lugar de abrir un ticket."] },
  control: { extra: ["Ficha por app, código QR, número de empleado o web, con geolocalización y alertas de geovalla.", "Pausas fijas, semiflexibles o flexibles, y saldo anual de horas."], try: "Resuelve todas las incidencias de fichaje de esta semana" },
  turnos: { extra: ["Agente de reprogramación que cubre los turnos automáticamente.", "Convierte un Excel o una captura del cuadrante en turnos con One, que te pide confirmar.", "Cambios de turno desde la app, con aprobación del manager."], try: "Crea los turnos de la semana a partir de este Excel" },
  ausencias: { extra: ["Describe tus reglas de devengo a One y Factorial las aplica: fecha de alta, redondeo y antigüedad.", "Aprobaciones multinivel, delegación y periodos bloqueados."], try: "Aprueba las vacaciones pendientes de mi equipo" },
  plantilla: { extra: ["Compara versiones del plan para trabajar escenarios.", "One redacta el plan a partir de las directrices de la empresa, en minutos en lugar de días."] },
  proyectos: { extra: ["Margen por proyecto, tablero Kanban y detección de cuellos de botella.", "Costes multidivisa, trabajo facturable y no facturable, y facturación con Verifactu."], try: "¿Qué proyectos van con retraso y qué margen tienen?" },
  fpa: { extra: ["Valores de contrato, nómina real y otros costes de personal en una sola vista, normalizados por FTE.", "Asignación masiva de centros de coste con One."], try: "¿Cuál es nuestro coste por FTE en Operaciones?" },
  gastos: { extra: ["Tarjetas Factorial virtuales, físicas y en el wallet.", "Reembolso por nómina o SEPA, y certificación AEAT para olvidarte del papel."], try: "Aprueba los gastos pendientes de mi equipo" },
  compras: { extra: ["Lectura de facturas con IA desde el email y conciliación bancaria con IA.", "Alta de proveedores, firma de contratos y pagos SEPA."], try: "Crea la solicitud de compra a partir de este presupuesto" },
  revision: { extra: ["Bolsas de presupuesto con seguimiento del coste en tiempo real.", "Finanzas ve la masa salarial por entidad sin ver salarios individuales."], try: "Propón subidas y promociones para mi equipo" },
  politicas: { extra: ["Publica por entidad, centro, equipo o rol, con confirmación de lectura y recordatorios.", "Convierte tus PDF en políticas y descubre qué preguntas no ha sabido responder One."], try: "¿Qué política de gastos de viaje se aplica a mí?" },
  portal: { extra: ["Fichaje, tareas del día y quién está, desde la pantalla de inicio.", "Una sola bandeja para aprobaciones, solicitudes y documentos por firmar."], try: "¿Qué tengo pendiente hoy?" },
  onoff: { extra: ["Welcome Space: documentos firmados antes del primer día.", "Alertas de fin de periodo de prueba, cumpleaños y documentos que caducan."], try: "Crea una política de onboarding para el equipo de tienda" },
  documentos: { extra: ["Nóminas enviadas automáticamente y distribución masiva.", "Carpetas compartidas y privadas, con permisos hasta el nivel de carpeta."], try: "¿Dónde está el último contrato de Laura?" },
  firma: { extra: ["Firma electrónica cualificada con Signaturit: validez legal, orden de firma y recordatorios masivos."] },
  analiticas: { extra: ["Métricas como la brecha salarial de género, la rotación o las promociones, siempre definidas igual.", "One señala lo relevante y propone el siguiente paso: abrir una vacante, lanzar una encuesta o asignar una formación."], try: "Crea un informe de plantilla del último trimestre" },
  tickets: { extra: ["Auto Resolver: cierra de principio a fin las solicitudes repetitivas, con una persona aprobando.", "Seguimiento de SLA, alertas y analítica de resolución."], try: "Necesito un portátil nuevo" },
  mdm: { extra: ["Cifrado de disco y políticas de contraseñas, actualizaciones y CIS.", "Protección de endpoints con SentinelOne."], try: "Bloquea o borra el portátil que ha perdido Marta" },
  inventario: { extra: ["Alertas con IA de garantías a punto de caducar.", "Kits por rol a partir del catálogo de puestos."], try: "Asigna un portátil nuevo a Marta" },
  software: { extra: ["Shadow IT y herramientas de IA descubiertas y ordenadas por riesgo.", "One detecta las licencias que nadie abre y las recupera en un clic."], try: "¿Qué licencias no ha usado nadie este mes?" },
  marketplace: { extra: ["Compra o alquila dispositivos, con envío y recogida incluidos."] },
  beneficios: { extra: ["Tarjeta digital en Apple Wallet y Google Wallet, con el cumplimiento fiscal integrado.", "Disponible en España y Portugal."], try: "¿Cuánto me queda de saldo de comida?" },
  integraciones: { extra: ["Conector MCP: cualquier asistente compatible usa Factorial con tus mismos permisos.", "+70 integraciones: ATS y portales de empleo, email y calendarios, ERP y herramientas de BI."] },
  anticipo: { extra: ["Sin intereses, sin comisiones y sin préstamo: el límite se calcula automáticamente."], try: "¿Cuánto anticipo puedo pedir este mes?" }
};

FACTS.es = {
  e: "Nosotros",
  t: "Factorial en cifras",
  d: "Factorial nació en Barcelona en 2016 para las empresas medianas de toda Europa. Hoy integramos la IA en el sistema con el que funciona tu empresa, empezando por RR. HH., Finanzas e IT.",
  items: [["+17.000", "clientes de todos los sectores"], ["+1 M", "de personas usan Factorial cada día"], ["4,8/5", "de valoración del onboarding"], ["+450", "personas cuidan de nuestros clientes"], ["+20 M€", "invertidos en producto cada año"], ["+700 M€", "de financiación"]],
  note: "Oficinas en Barcelona, Madrid y Múnich · Soporte por teléfono, ticket y chat en hasta 7 idiomas · Datos alojados en la UE"
};

HUBX.en = {
  core: { tag: "Run the whole company from one place",
    lead: "HR, Finance and IT work from the same live data, and so does One. People, documents, policies, communication and analytics: the foundation everything else runs on.",
    pains: ["No more waiting on someone else's report: ask, and get the answer, not a request.", "Requests no longer get lost across emails, messages and manual follow-ups.", "Policies people actually read, with acknowledgements ready for the audit.", "Documents signed without chasing anyone, fully legally binding."],
    stats: [{ n: "70+", t: "integrations, open API and MCP connector" }, { n: "EU", t: "hosted in Europe, GDPR and EU AI Act compliant" }],
    ask: "Compare absence and performance across my teams" },
  tiempo: { tag: "Automate the basics",
    lead: "Clock-ins, shifts and time off on the same calendar. Comply with working-time rules, compensate overtime and get every hour ready for payroll and projects.",
    pains: ["Working-time records that meet the law, without sheets or spreadsheets.", "Overtime compensated with time off or through payroll, no manual maths.", "Missed clock-ins and late arrivals visible as they happen, not at month end.", "Conflict-free rotas generated from contract hours, rest rules and coverage needs."],
    stats: [{ n: "4", t: "ways to clock in: app, QR code, ID number and web" }, { n: "∞", t: "time-off policies, with multi-level approvals" }],
    ask: "Every Monday at 09:30, tell me who is on leave that week" },
  finanzas: { tag: "Costs, under control",
    lead: "Expenses, cards and purchase requests in one place, with people costs always in sync. Send One a stack of receipts, approve from the chat and ask what each team costs.",
    pains: ["Control spend before it happens, from purchase request to paid invoice.", "Duplicates and discrepancies caught without blocking anyone.", "No more paper receipts.", "Salary reviews that stay on budget.", "The real cost of every person and team, clear and up to date."],
    stats: [{ n: "1.5%", t: "cashback on card spend (coming soon)" }, { n: "SEPA", t: "reimbursements and supplier payments from Factorial" }],
    ask: "What is our employee cost by team this month?" },
  talento: { tag: "Create high-performance teams",
    lead: "Hire, develop and keep the right people while One takes the admin: it turns CVs into candidates, analyses surveys and keeps every 1:1 transcribed.",
    pains: ["Fair reviews, with AI summaries of self, peer and manager input.", "Training plans out of spreadsheets, with costs and subsidies under control.", "Retention: hear what your team really says, not just the score.", "Faster hiring: One drafts the role, ranks candidates and makes the first call.", "A compliant whistleblowing channel, with no risk of penalties."],
    stats: [{ n: "250+", t: "job boards, including LinkedIn, InfoJobs and Indeed" }, { n: "360°", t: "reviews, cascading goals and 9-box" }],
    ask: "What are people saying in this quarter's engagement survey?" },
  it: { tag: "IT operations in sync with HR",
    lead: "Devices, apps and access follow every hire, move and exit automatically. Need something? Tell One: it raises the request, routes it to the right team and answers from your policies first.",
    pains: ["Every laptop set up and secured from day one.", "No more paying for licences nobody opens.", "Shadow IT and AI tools discovered and sorted by risk.", "Ready for ISO 27001, SOC 2 and GDPR audits, with handover documents compliant with NIS2 Article 21."],
    stats: [{ n: "1 click", t: "to reclaim the licences nobody uses" }, { n: "Zero-touch", t: "device deployment, from macOS to ChromeOS" }],
    ask: "Lock or wipe the laptop Marta lost" },
  nomina: { tag: "Payroll, right the first time",
    lead: "Time, absences and expenses flow into payroll automatically, so you catch errors before payday, not after.",
    pains: ["A guided, collaborative payroll cycle, with your payroll provider connected through Factorial Professionals.", "Automatic error detection in salary components and payroll results.", "SEPA payments and automated payslip distribution."],
    stats: [{ n: "70+", t: "integrations with payroll providers, ERPs and more" }],
    ask: "What's missing before we close this month's payroll?" }
};

MODX.en = {
  desempeno: { extra: ["AI summaries of self, peer and manager input, so reviews stay fair.", "Competency spider charts and cascading goals."], try: "Compare each person against their team baseline" },
  formacion: { extra: ["Training costs and subsidies under control, with expiry and recertification alerts.", "SCORM importer, course catalogue and automatic certificates."], try: "Create a course and a quiz from this document" },
  engagement: { extra: ["1:1 video calls with AI transcription, and a chat to analyse them.", "One analyses survey results, trends and free-text comments."], try: "What are people saying in this quarter's engagement survey?" },
  comunicaciones: { extra: ["The company chat for frontline teams: groups by team, shift or site, built from the org chart.", "AI translation into five languages, voice notes, video and read receipts on critical alerts."], try: "Message the morning shift about Friday's closure" },
  ats: { extra: ["AI Top Match: One ranks every application.", "Turn CVs into candidates, including scanned ones."], try: "Draft the job post and rank the Design candidates" },
  canal: { extra: ["Two-way communication, case management and a complete audit log.", "If someone raises a concern with One, it sends them to the channel instead of opening a ticket."] },
  control: { extra: ["Clock in by app, QR code, ID number or web, with geolocation and geofencing alerts.", "Fixed, semi-flexible or flexible breaks, and an annual hours balance."], try: "Fix every clock-in issue from this week" },
  turnos: { extra: ["A rescheduler agent that covers shifts automatically.", "Turn an Excel or a screenshot of your rota into shifts with One, which asks you to confirm.", "Shift swaps in the app, with manager approval."], try: "Create this week's shifts from this Excel" },
  ausencias: { extra: ["Describe your accrual rules to One and Factorial applies them: hire date, rounding and seniority.", "Multi-level approvals, delegation and blocked periods."], try: "Approve my team's pending leave requests" },
  plantilla: { extra: ["Compare plan versions to work through scenarios.", "One drafts the plan from your company directives, in minutes instead of days."] },
  proyectos: { extra: ["Margin per project, Kanban boards and bottleneck detection.", "Multi-currency costs, billable and non-billable work, quotes and invoicing."], try: "Which projects are overdue and what margin do they have?" },
  fpa: { extra: ["Contract values, actual payroll and other people costs in one view, normalised by FTE.", "Bulk cost-centre assignment with One."], try: "What is our cost per FTE in Operations?" },
  gastos: { extra: ["Factorial Cards: virtual, physical and in your wallet.", "Reimbursement through payroll or SEPA, with local compliance: AEAT (ES), URSSAF (FR), Aruba (IT), GoBD and DATEV (DE)."], try: "Approve my team's pending expenses" },
  compras: { extra: ["AI invoice reading straight from email, and AI bank reconciliation.", "Vendor onboarding, contract signing and SEPA payments."], try: "Create the purchase request from this quote" },
  revision: { extra: ["Budget envelopes with live cost tracking.", "Finance sees salary mass by entity, with individual pay hidden."], try: "Suggest raises and promotions for my team" },
  politicas: { extra: ["Publish by entity, site, team or role, with acknowledgement tracking and reminders.", "Turn policy PDFs into policies, and see what One couldn't answer."], try: "Which travel expense policy applies to me?" },
  portal: { extra: ["Clock-in, today's tasks and who's in, right from the home screen.", "A single inbox for approvals, requests and documents to sign."], try: "What's on my plate today?" },
  onoff: { extra: ["Welcome Space: documents signed before day one.", "Alerts for probation end, birthdays and expiring documents."], try: "Create an onboarding policy for the store team" },
  documentos: { extra: ["Payslips sent automatically, with bulk distribution.", "Shared and private folders, with permissions down to the folder."], try: "Where is Laura's latest contract?" },
  firma: { extra: ["Qualified e-signature with Signaturit: legally binding, with signing order and bulk reminders."] },
  analiticas: { extra: ["Metrics like the gender pay gap, attrition and promotions, always defined the same way.", "One flags what stands out and suggests the next step: open a vacancy, send a survey or assign training."], try: "Create a headcount report for last quarter" },
  tickets: { extra: ["Auto Resolver closes repetitive requests end to end, with a person approving.", "SLA monitoring, alerts and resolution analytics."], try: "I need a new laptop" },
  mdm: { extra: ["Disk encryption, plus password, update and CIS policies.", "Endpoint protection with SentinelOne."], try: "Lock or wipe the laptop Marta lost" },
  inventario: { extra: ["AI alerts for warranties about to expire.", "Role-based kits from the job catalogue."], try: "Assign a new laptop to Marta" },
  software: { extra: ["Shadow IT and AI tools discovered and sorted by risk.", "One spots the licences nobody opens and reclaims them in one click."], try: "Which licences has nobody used this month?" },
  marketplace: { extra: ["Order or rent devices, with shipping and collection included."] },
  beneficios: { extra: ["Digital card in Apple Wallet and Google Wallet, with tax compliance built in.", "Available in Spain and Portugal."], try: "How much meal allowance do I have left?" },
  integraciones: { extra: ["MCP connector: any compatible assistant uses Factorial with your same permissions.", "70+ integrations: ATS and job boards, email and calendars, ERPs and BI tools."] },
  anticipo: { extra: ["No interest, no fees and no loan: the limit is calculated automatically."], try: "How much salary advance can I draw this month?" }
};

FACTS.en = {
  e: "About us",
  t: "Factorial in numbers",
  d: "Factorial was founded in Barcelona in 2016 for mid-market companies across Europe. Today we build AI into the system your company runs on, starting with HR, Finance and IT.",
  items: [["17,000+", "clients across every industry"], ["1M+", "people use Factorial every day"], ["4.8/5", "onboarding rating"], ["450+", "people taking care of our customers"], ["€20M+", "invested in product every year"], ["€700M+", "in funding"]],
  note: "Offices in Barcelona, Madrid and Munich · Phone, ticket and chat support in up to 7 languages · Data hosted in the EU"
};

HUBX.fr = {
  core: { tag: "Toute votre entreprise, au même endroit",
    lead: "RH, Finance et IT travaillent sur les mêmes données en temps réel, et One aussi. Personnes, documents, politiques, communication et analyses : le socle sur lequel tout le reste repose.",
    pains: ["Plus besoin d’attendre le rapport de quelqu’un d’autre : vous demandez, vous obtenez la réponse, pas un ticket.", "Les demandes ne se perdent plus entre e-mails, messages et relances manuelles.", "Des politiques réellement lues, avec des accusés de lecture prêts pour l’audit.", "Des documents signés sans relancer personne, avec pleine valeur juridique."],
    stats: [{ n: "70+", t: "intégrations, API ouverte et connecteur MCP" }, { n: "UE", t: "hébergé en Europe, conforme au RGPD et à l’AI Act européen" }],
    ask: "Compare les absences et la performance de mes équipes" },
  tiempo: { tag: "Automatisez l’essentiel",
    lead: "Pointages, plannings et congés sur le même calendrier. Respectez la réglementation du temps de travail, compensez les heures supplémentaires et préparez chaque heure pour la paie et les projets.",
    pains: ["Un enregistrement du temps de travail conforme à la loi, sans feuilles ni tableurs.", "Heures supplémentaires compensées en repos ou en paie, sans calcul manuel.", "Oublis de pointage et retards visibles en temps réel, pas en fin de mois.", "Des plannings sans conflit, générés à partir des heures contractuelles, des règles de repos et des besoins de couverture."],
    stats: [{ n: "4", t: "façons de pointer : appli, QR code, matricule et web" }, { n: "∞", t: "politiques de congés, avec validations à plusieurs niveaux" }],
    ask: "Chaque lundi à 9 h 30, dis-moi qui est en congé cette semaine" },
  finanzas: { tag: "Des coûts sous contrôle",
    lead: "Dépenses, cartes et demandes d’achat au même endroit, avec des coûts de personnel toujours synchronisés. Envoyez à One une pile de justificatifs, validez depuis le chat et demandez ce que coûte chaque équipe.",
    pains: ["Maîtrisez les dépenses avant qu’elles n’arrivent, de la demande d’achat à la facture payée.", "Doublons et écarts détectés sans bloquer personne.", "Fini les justificatifs papier.", "Des révisions salariales qui respectent le budget.", "Le coût réel de chaque personne et de chaque équipe, clair et à jour."],
    stats: [{ n: "1,5 %", t: "de cashback sur les dépenses par carte (bientôt disponible)" }, { n: "SEPA", t: "remboursements et paiements fournisseurs depuis Factorial" }],
    ask: "Quel est notre coût salarial par équipe ce mois-ci ?" },
  talento: { tag: "Des équipes performantes",
    lead: "Recrutez, faites grandir et fidélisez les bonnes personnes pendant que One s’occupe de l’administratif : il transforme les CV en candidats, analyse les enquêtes et transcrit chaque 1:1.",
    pains: ["Des évaluations justes, avec des synthèses IA de l’auto-évaluation, des pairs et du manager.", "Des plans de formation sortis des tableurs, avec coûts et financements sous contrôle.", "Rétention : entendez ce que votre équipe dit vraiment, pas seulement la note.", "Recrutez plus vite : One rédige l’offre, classe les candidats et passe le premier appel.", "Un canal d’alerte conforme, sans risque de sanctions."],
    stats: [{ n: "250+", t: "job boards, dont LinkedIn, Indeed et InfoJobs" }, { n: "360°", t: "évaluations, objectifs en cascade et 9-box" }],
    ask: "Que disent les équipes dans l’enquête d’engagement de ce trimestre ?" },
  it: { tag: "L’IT en phase avec les RH",
    lead: "Appareils, applications et accès suivent automatiquement chaque arrivée, mobilité et départ. Besoin de quelque chose ? Dites-le à One : il crée la demande, l’envoie à la bonne équipe et répond d’abord à partir de vos politiques.",
    pains: ["Chaque ordinateur configuré et sécurisé dès le premier jour.", "Fini les licences payées que personne n’ouvre.", "Shadow IT et outils d’IA détectés et classés par niveau de risque.", "Prêt pour les audits ISO 27001, SOC 2 et RGPD, avec des documents de remise conformes à l’article 21 de NIS2."],
    stats: [{ n: "1 clic", t: "pour récupérer les licences inutilisées" }, { n: "Zero-touch", t: "déploiement des appareils, de macOS à ChromeOS" }],
    ask: "Verrouille ou efface l’ordinateur que Marta a perdu" },
  nomina: { tag: "La paie juste, du premier coup",
    lead: "Temps, absences et dépenses alimentent automatiquement la paie : vous repérez les erreurs avant le jour de paie, pas après.",
    pains: ["Un cycle de paie guidé et collaboratif, avec votre prestataire de paie connecté via Factorial Professionals.", "Détection automatique des erreurs dans les éléments de salaire et les résultats de paie.", "Paiements SEPA et distribution automatique des bulletins de paie.", "Acomptes sur salaire sans intérêts ni frais."],
    stats: [{ n: "0 €", t: "d’intérêts et de frais sur les acomptes sur salaire" }, { n: "70+", t: "intégrations avec prestataires de paie, ERP et plus encore" }],
    ask: "Quel acompte sur salaire puis-je encore demander ce mois-ci ?" }
};

MODX.fr = {
  desempeno: { extra: ["Synthèses IA de l’auto-évaluation, des pairs et du manager, pour des évaluations justes.", "Graphiques radar des compétences et objectifs en cascade."], try: "Compare chaque personne à la moyenne de son équipe" },
  formacion: { extra: ["Coûts et financements de formation sous contrôle, avec alertes d’expiration et de recertification.", "Import SCORM, catalogue de cours et certificats automatiques."], try: "Crée un cours et un quiz à partir de ce document" },
  engagement: { extra: ["1:1 en visio avec transcription IA, et un chat pour les analyser.", "One analyse les résultats d’enquête, les tendances et les commentaires libres."], try: "Que disent les équipes dans l’enquête d’engagement de ce trimestre ?" },
  comunicaciones: { extra: ["La messagerie d’entreprise des équipes terrain : groupes par équipe, planning ou site, créés à partir de l’organigramme.", "Traduction IA en cinq langues, messages vocaux, vidéo et accusés de lecture sur les alertes critiques."], try: "Écris à l’équipe du matin au sujet de la fermeture de vendredi" },
  ats: { extra: ["AI Top Match : One classe chaque candidature.", "Transformez les CV en candidats, y compris les CV scannés."], try: "Rédige l’offre et classe les candidats Design" },
  canal: { extra: ["Communication bidirectionnelle, gestion des dossiers et journal d’audit complet.", "Si quelqu’un signale un problème à One, il l’oriente vers le canal au lieu d’ouvrir un ticket."] },
  control: { extra: ["Pointage par appli, QR code, matricule ou web, avec géolocalisation et alertes de géorepérage.", "Pauses fixes, semi-flexibles ou flexibles, et solde d’heures annuel."], try: "Corrige toutes les anomalies de pointage de cette semaine" },
  turnos: { extra: ["Un agent de replanification qui couvre les créneaux automatiquement.", "Transformez un Excel ou une capture de votre planning en créneaux avec One, qui vous demande de confirmer.", "Échanges de créneaux dans l’appli, avec validation du manager."], try: "Crée les plannings de cette semaine à partir de cet Excel" },
  ausencias: { extra: ["Décrivez vos règles d’acquisition à One et Factorial les applique : date d’embauche, arrondis et ancienneté.", "Validations à plusieurs niveaux, délégation et périodes bloquées."], try: "Valide les demandes de congés en attente de mon équipe" },
  plantilla: { extra: ["Comparez les versions du plan pour étudier différents scénarios.", "One prépare le plan à partir des directives de l’entreprise, en quelques minutes au lieu de plusieurs jours."] },
  proyectos: { extra: ["Marge par projet, tableaux Kanban et détection des goulots d’étranglement.", "Coûts multidevises, temps facturable et non facturable, devis et facturation."], try: "Quels projets sont en retard et quelle est leur marge ?" },
  fpa: { extra: ["Valeurs contractuelles, paie réelle et autres coûts de personnel dans une seule vue, ramenés en ETP.", "Affectation en masse aux centres de coûts avec One."], try: "Quel est notre coût par ETP dans les Opérations ?" },
  gastos: { extra: ["Cartes Factorial : virtuelles, physiques et dans votre wallet.", "Remboursement via la paie ou par virement SEPA, et fini le papier grâce à la certification URSSAF."], try: "Valide les dépenses en attente de mon équipe" },
  compras: { extra: ["Lecture IA des factures directement depuis l’e-mail, et rapprochement bancaire par IA.", "Référencement des fournisseurs, signature des contrats et paiements SEPA."], try: "Crée la demande d’achat à partir de ce devis" },
  revision: { extra: ["Enveloppes budgétaires avec suivi des coûts en temps réel.", "La Finance voit la masse salariale par entité, sans les salaires individuels."], try: "Propose des augmentations et des promotions pour mon équipe" },
  politicas: { extra: ["Publiez par entité, site, équipe ou rôle, avec suivi des accusés de lecture et relances.", "Transformez vos PDF en politiques, et voyez les questions auxquelles One n’a pas su répondre."], try: "Quelle politique de frais de déplacement s’applique à moi ?" },
  portal: { extra: ["Pointage, tâches du jour et présents, dès l’écran d’accueil.", "Une boîte de réception unique pour les validations, les demandes et les documents à signer."], try: "Qu’est-ce que j’ai au programme aujourd’hui ?" },
  onoff: { extra: ["Welcome Space : documents signés avant le premier jour.", "Alertes de fin de période d’essai, anniversaires et documents arrivant à expiration."], try: "Crée une politique d’onboarding pour l’équipe magasin" },
  documentos: { extra: ["Bulletins de paie envoyés automatiquement, avec distribution en masse.", "Dossiers partagés et privés, avec des droits jusqu’au niveau du dossier."], try: "Où est le dernier contrat de Laura ?" },
  firma: { extra: ["Signature électronique qualifiée avec Signaturit : valeur juridique, ordre de signature et relances groupées."] },
  analiticas: { extra: ["Des indicateurs comme l’écart salarial femmes-hommes, le turnover et les promotions, toujours définis de la même façon.", "One signale ce qui ressort et suggère l’étape suivante : ouvrir un poste, envoyer une enquête ou attribuer une formation."], try: "Crée un rapport d’effectifs pour le dernier trimestre" },
  tickets: { extra: ["Auto Resolver traite de bout en bout les demandes répétitives, avec validation par une personne.", "Suivi des SLA, alertes et analyses de résolution."], try: "J’ai besoin d’un nouvel ordinateur portable" },
  mdm: { extra: ["Chiffrement des disques, et politiques de mots de passe, de mises à jour et CIS.", "Protection des terminaux avec SentinelOne."], try: "Verrouille ou efface l’ordinateur que Marta a perdu" },
  inventario: { extra: ["Alertes IA sur les garanties arrivant à expiration.", "Kits par rôle à partir du catalogue des postes."], try: "Attribue un nouvel ordinateur portable à Marta" },
  software: { extra: ["Shadow IT et outils d’IA détectés et classés par niveau de risque.", "One repère les licences que personne n’ouvre et les récupère en un clic."], try: "Quelles licences personne n’a utilisées ce mois-ci ?" },
  marketplace: { extra: ["Achetez ou louez des appareils, livraison et récupération incluses."] },
  beneficios: { extra: ["Carte digitale dans Apple Wallet et Google Wallet, avec conformité fiscale intégrée.", "Disponible en Espagne et au Portugal."], try: "Combien me reste-t-il de titres-restaurant ?" },
  integraciones: { extra: ["Connecteur MCP : tout assistant compatible utilise Factorial avec vos propres droits d’accès.", "70+ intégrations : ATS et job boards, e-mail et agendas, ERP et outils de BI."] },
  anticipo: { extra: ["Sans intérêts, sans frais et sans prêt : le plafond est calculé automatiquement."], try: "Quel acompte sur salaire puis-je demander ce mois-ci ?" }
};

FACTS.fr = {
  e: "Qui sommes-nous",
  t: "Factorial en chiffres",
  d: "Factorial a été fondée à Barcelone en 2016 pour les ETI et PME de toute l’Europe. Aujourd’hui, nous intégrons l’IA au système qui fait tourner votre entreprise, en commençant par les RH, la Finance et l’IT.",
  items: [["17 000+", "clients dans tous les secteurs"], ["1 M+", "de personnes utilisent Factorial chaque jour"], ["4,8/5", "note de l’onboarding"], ["450+", "personnes au service de nos clients"], ["20 M€+", "investis chaque année dans le produit"], ["700 M€+", "de levées de fonds"]],
  note: "Bureaux à Barcelone, Madrid et Munich · Support par téléphone, ticket et chat dans jusqu’à 7 langues · Données hébergées dans l’UE"
};

HUBX.pt = {
  core: { tag: "Toda a gestão da sua empresa num único lugar",
    lead: "RH, Finanças e IT trabalham com os mesmos dados em tempo real, tal como o One. Pessoas, documentos, políticas, comunicação e analítica: a base sobre a qual tudo funciona.",
    pains: ["Sem esperar pelo relatório de outra pessoa: pergunte e receba a resposta, não um pedido.", "Os pedidos deixam de se perder entre emails, mensagens e seguimentos manuais.", "Políticas que as pessoas realmente leem, com confirmações de leitura prontas para a auditoria.", "Documentos assinados sem andar atrás de ninguém, com plena validade legal."],
    stats: [{ n: "+70", t: "integrações, API aberta e conector MCP" }, { n: "UE", t: "alojado na Europa, em conformidade com o RGPD e o Regulamento da IA da UE" }],
    ask: "Compara as ausências e o desempenho das minhas equipas" },
  tiempo: { tag: "Automatize o essencial",
    lead: "Registos de ponto, turnos e ausências no mesmo calendário. Cumpra as regras do tempo de trabalho, compense as horas extra e tenha cada hora pronta para o processamento salarial e os projetos.",
    pains: ["Registo do tempo de trabalho conforme a lei, sem papel nem folhas de cálculo.", "Horas extra compensadas com tempo livre ou no processamento salarial, sem contas manuais.", "Falhas de ponto e atrasos visíveis no momento, não no fim do mês.", "Escalas sem conflitos, geradas a partir das horas de contrato, das regras de descanso e das necessidades de cobertura."],
    stats: [{ n: "4", t: "formas de registar o ponto: app, código QR, número de identificação e web" }, { n: "∞", t: "políticas de ausências, com aprovações em vários níveis" }],
    ask: "Todas as segundas-feiras às 09:30, diz-me quem está ausente nessa semana" },
  finanzas: { tag: "Custos sob controlo",
    lead: "Despesas, cartões e pedidos de compra num só lugar, com os custos de pessoal sempre sincronizados. Envie ao One uma pilha de recibos, aprove a partir do chat e pergunte quanto custa cada equipa.",
    pains: ["Controle o gasto antes de acontecer, do pedido de compra à fatura paga.", "Duplicados e discrepâncias detetados sem bloquear ninguém.", "Adeus aos recibos em papel.", "Revisões salariais que respeitam o orçamento.", "O custo real de cada pessoa e de cada equipa, claro e atualizado."],
    stats: [{ n: "1,5%", t: "de cashback nos gastos com cartão (brevemente)" }, { n: "SEPA", t: "reembolsos e pagamentos a fornecedores a partir da Factorial" }],
    ask: "Qual é o custo de pessoal por equipa este mês?" },
  talento: { tag: "Crie equipas de alto desempenho",
    lead: "Contrate, desenvolva e retenha as pessoas certas enquanto o One trata da parte administrativa: transforma CV em candidatos, analisa inquéritos e transcreve cada 1:1.",
    pains: ["Avaliações justas, com resumos de IA da autoavaliação, dos pares e da chefia.", "Planos de formação fora das folhas de cálculo, com os custos sob controlo.", "Retenção: ouça o que a sua equipa realmente diz, não só a pontuação.", "Contratação mais rápida: o One redige a vaga, ordena os candidatos e faz a primeira chamada.", "Um canal de denúncias em conformidade, sem risco de coimas."],
    stats: [{ n: "+250", t: "portais de emprego, incluindo LinkedIn e Indeed" }, { n: "360°", t: "avaliações, objetivos em cascata e 9-box" }],
    ask: "O que estão as pessoas a dizer no inquérito de engagement deste trimestre?" },
  it: { tag: "Operações de IT em sintonia com os RH",
    lead: "Dispositivos, apps e acessos acompanham automaticamente cada entrada, mudança e saída. Precisa de algo? Diga ao One: ele abre o pedido, encaminha-o para a equipa certa e responde primeiro com base nas suas políticas.",
    pains: ["Cada portátil configurado e protegido desde o primeiro dia.", "Deixe de pagar licenças que ninguém abre.", "Shadow IT e ferramentas de IA identificadas e classificadas por risco.", "Preparado para auditorias ISO 27001, SOC 2 e RGPD, com documentos de passagem conformes com o artigo 21.º da NIS2."],
    stats: [{ n: "1 clique", t: "para recuperar as licenças que ninguém usa" }, { n: "Zero-touch", t: "implementação de dispositivos, do macOS ao ChromeOS" }],
    ask: "Bloqueia ou apaga o portátil que a Marta perdeu" },
  nomina: { tag: "Salários certos à primeira",
    lead: "Registos de ponto, ausências, despesas e benefícios chegam automaticamente ao processamento salarial, para detetar erros antes do dia de pagamento, não depois.",
    pains: ["Um ciclo salarial guiado e colaborativo, com o seu fornecedor de processamento salarial ligado através da Factorial Professionals.", "Deteção automática de erros nas rubricas salariais e nos resultados do processamento.", "Pagamentos SEPA e distribuição automática dos recibos de vencimento.", "Remuneração flexível e adiantamentos salariais sem juros nem comissões."],
    stats: [{ n: "0 €", t: "de juros e comissões nos adiantamentos salariais" }, { n: "+70", t: "integrações com fornecedores de processamento salarial, ERP e muito mais" }],
    ask: "Quanto adiantamento salarial ainda posso pedir este mês?" }
};

MODX.pt = {
  desempeno: { extra: ["Resumos de IA da autoavaliação, dos pares e da chefia, para avaliações justas.", "Gráficos de radar de competências e objetivos em cascata."], try: "Compara cada pessoa com a média da sua equipa" },
  formacion: { extra: ["Custos de formação sob controlo, com alertas de expiração e de recertificação.", "Importador SCORM, catálogo de cursos e certificados automáticos."], try: "Cria um curso e um questionário a partir deste documento" },
  engagement: { extra: ["Videochamadas 1:1 com transcrição por IA e um chat para as analisar.", "O One analisa resultados de inquéritos, tendências e comentários abertos."], try: "O que estão as pessoas a dizer no inquérito de engagement deste trimestre?" },
  comunicaciones: { extra: ["O chat da empresa para as equipas no terreno: grupos por equipa, turno ou local, criados a partir do organograma.", "Tradução por IA em cinco idiomas, notas de voz, vídeo e confirmação de leitura nos alertas críticos."], try: "Envia uma mensagem ao turno da manhã sobre o encerramento de sexta-feira" },
  ats: { extra: ["AI Top Match: o One ordena todas as candidaturas.", "Transforme CV em candidatos, incluindo CV digitalizados."], try: "Redige a oferta de emprego e ordena os candidatos de Design" },
  canal: { extra: ["Comunicação bidirecional, gestão de casos e registo de auditoria completo.", "Se alguém expuser uma preocupação ao One, este encaminha-o para o canal em vez de abrir um ticket."] },
  control: { extra: ["Registo de ponto por app, código QR, número de identificação ou web, com geolocalização e alertas de geofencing.", "Pausas fixas, semiflexíveis ou flexíveis, e saldo anual de horas."], try: "Corrige todas as incidências de ponto desta semana" },
  turnos: { extra: ["Um agente de reprogramação que cobre turnos automaticamente.", "Transforme um Excel ou uma captura de ecrã da sua escala em turnos com o One, que lhe pede confirmação.", "Trocas de turno na app, com aprovação da chefia."], try: "Cria os turnos desta semana a partir deste Excel" },
  ausencias: { extra: ["Descreva as suas regras de acumulação ao One e a Factorial aplica-as: data de admissão, arredondamentos e antiguidade.", "Aprovações em vários níveis, delegação e períodos bloqueados."], try: "Aprova os pedidos de ausência pendentes da minha equipa" },
  plantilla: { extra: ["Compare versões do plano para analisar diferentes cenários.", "O One redige o plano a partir das diretrizes da empresa, em minutos em vez de dias."] },
  proyectos: { extra: ["Margem por projeto, quadros Kanban e deteção de bloqueios.", "Custos em várias moedas, trabalho faturável e não faturável, orçamentos e faturação."], try: "Que projetos estão atrasados e que margem têm?" },
  fpa: { extra: ["Valores contratuais, salários reais e outros custos de pessoal numa só vista, normalizados por FTE.", "Atribuição de centros de custo em massa com o One."], try: "Qual é o nosso custo por FTE em Operações?" },
  gastos: { extra: ["Cartões Factorial: virtuais, físicos e na carteira do telemóvel.", "Recibos digitais e reembolso através do processamento salarial ou por SEPA."], try: "Aprova as despesas pendentes da minha equipa" },
  compras: { extra: ["Leitura de faturas por IA diretamente do email e reconciliação bancária com IA.", "Registo de fornecedores, assinatura de contratos e pagamentos SEPA."], try: "Cria o pedido de compra a partir deste orçamento" },
  revision: { extra: ["Envelopes orçamentais com acompanhamento do custo em tempo real.", "As Finanças veem a massa salarial por entidade, sem acesso aos salários individuais."], try: "Sugere aumentos e promoções para a minha equipa" },
  politicas: { extra: ["Publique por entidade, local, equipa ou função, com acompanhamento das confirmações de leitura e lembretes.", "Transforme PDF de políticas em políticas e veja o que o One não conseguiu responder."], try: "Que política de despesas de viagem se aplica a mim?" },
  portal: { extra: ["Registo de ponto, tarefas do dia e quem está presente, logo no ecrã inicial.", "Uma única caixa de entrada para aprovações, pedidos e documentos por assinar."], try: "O que tenho para hoje?" },
  onoff: { extra: ["Welcome Space: documentos assinados antes do primeiro dia.", "Alertas de fim do período experimental, aniversários e documentos a expirar."], try: "Cria uma política de onboarding para a equipa das lojas" },
  documentos: { extra: ["Recibos de vencimento enviados automaticamente, com distribuição em massa.", "Pastas partilhadas e privadas, com permissões ao nível de cada pasta."], try: "Onde está o último contrato da Laura?" },
  firma: { extra: ["Assinatura eletrónica qualificada com Signaturit: com validade legal, ordem de assinatura e lembretes em massa."] },
  analiticas: { extra: ["Métricas como a disparidade salarial de género, a rotatividade e as promoções, sempre definidas da mesma forma.", "O One assinala o que se destaca e sugere o passo seguinte: abrir uma vaga, enviar um inquérito ou atribuir formação."], try: "Cria um relatório de efetivos do último trimestre" },
  tickets: { extra: ["O Auto Resolver fecha pedidos repetitivos de ponta a ponta, com a aprovação de uma pessoa.", "Monitorização de SLA, alertas e analítica de resolução."], try: "Preciso de um portátil novo" },
  mdm: { extra: ["Encriptação de disco e políticas de palavra-passe, atualizações e CIS.", "Proteção de endpoints com SentinelOne."], try: "Bloqueia ou apaga o portátil que a Marta perdeu" },
  inventario: { extra: ["Alertas de IA para garantias prestes a expirar.", "Kits por função a partir do catálogo de funções."], try: "Atribui um portátil novo à Marta" },
  software: { extra: ["Shadow IT e ferramentas de IA identificadas e classificadas por risco.", "O One deteta as licenças que ninguém abre e recupera-as num clique."], try: "Que licenças ninguém usou este mês?" },
  marketplace: { extra: ["Compre ou alugue dispositivos, com envio e recolha incluídos."] },
  beneficios: { extra: ["Cartão digital no Apple Wallet e no Google Wallet, com conformidade fiscal integrada.", "Disponível em Espanha e Portugal."], try: "Quanto subsídio de refeição me resta?" },
  integraciones: { extra: ["Conector MCP: qualquer assistente compatível usa a Factorial com as mesmas permissões que o utilizador.", "+70 integrações: ATS e portais de emprego, email e calendários, ERP e ferramentas de BI."] },
  anticipo: { extra: ["Sem juros, sem comissões e sem empréstimo: o limite é calculado automaticamente."], try: "Quanto adiantamento salarial posso pedir este mês?" }
};

FACTS.pt = {
  e: "Sobre nós",
  t: "A Factorial em números",
  d: "A Factorial foi fundada em Barcelona em 2016 para empresas de média dimensão em toda a Europa. Hoje integramos a IA no sistema que faz funcionar a sua empresa, começando pelos RH, Finanças e IT.",
  items: [["+17.000", "clientes de todos os setores"], ["+1 M", "de pessoas usam a Factorial todos os dias"], ["4,8/5", "de avaliação do onboarding"], ["+450", "pessoas dedicadas aos nossos clientes"], ["+20 M€", "investidos em produto todos os anos"], ["+700 M€", "de financiamento"]],
  note: "Escritórios em Barcelona, Madrid e Munique · Suporte por telefone, ticket e chat em até 7 idiomas · Dados alojados na UE"
};

HUBX.it = {
  core: { tag: "Gestisci tutta l’azienda da un unico posto",
    lead: "HR, Finance e IT lavorano sugli stessi dati in tempo reale, e lo stesso fa One. Persone, documenti, policy, comunicazione e analytics: le fondamenta su cui si regge tutto il resto.",
    pains: ["Basta aspettare il report di qualcun altro: chiedi e ricevi la risposta, non una richiesta in coda.", "Nessuna richiesta si perde più tra email, messaggi e solleciti manuali.", "Policy che le persone leggono davvero, con le prese visione pronte per ogni controllo.", "Documenti firmati senza rincorrere nessuno, con pieno valore legale."],
    stats: [{ n: "70+", t: "integrazioni, API aperta e connettore MCP" }, { n: "UE", t: "dati ospitati in Europa, conformi a GDPR e AI Act" }],
    ask: "Confronta assenze e performance dei miei team" },
  tiempo: { tag: "Automatizza le attività di base",
    lead: "Timbrature, turni e assenze sullo stesso calendario. Rispetti la normativa sull’orario di lavoro, compensi gli straordinari e ogni ora arriva pronta per buste paga e progetti.",
    pains: ["Registrazione dell’orario conforme alla legge, senza fogli carta o Excel.", "Straordinari compensati con riposi o in busta paga, senza calcoli a mano.", "Timbrature mancanti e ritardi visibili subito, non a fine mese.", "Turni senza conflitti, generati da ore da contratto, regole di riposo e copertura necessaria."],
    stats: [{ n: "4", t: "modi per timbrare: app, codice QR, numero ID e web" }, { n: "∞", t: "policy di assenza, con approvazioni multilivello" }],
    ask: "Ogni lunedì alle 09:30 dimmi chi è assente in settimana" },
  finanzas: { tag: "Costi sotto controllo",
    lead: "Spese, carte e richieste di acquisto in un unico posto, con il costo del personale sempre allineato. Manda a One gli scontrini in blocco, approva direttamente in chat e chiedi quanto costa ogni team.",
    pains: ["Controlla la spesa prima che avvenga, dalla richiesta di acquisto alla fattura pagata.", "Duplicati e discrepanze individuati senza bloccare nessuno.", "Mai più ricevute cartacee.", "Revisioni salariali che restano nel budget.", "Il costo reale di ogni persona e di ogni team, chiaro e sempre aggiornato."],
    stats: [{ n: "1,5%", t: "di cashback sulle spese con carta (presto disponibile)" }, { n: "SEPA", t: "rimborsi e pagamenti ai fornitori direttamente da Factorial" }],
    ask: "Quanto ci costa ogni team questo mese?" },
  talento: { tag: "Più tempo per le persone, meno per le pratiche",
    lead: "Assumi, fai crescere e trattieni le persone giuste. One pensa alla parte amministrativa: crea i profili dai CV, analizza i sondaggi e trascrive ogni 1:1.",
    pains: ["Valutazioni eque, con riepiloghi AI di autovalutazione, feedback dei colleghi e del manager.", "Piani formativi fuori dai fogli di calcolo, con costi e sovvenzioni sotto controllo.", "Retention: ascolta cosa dice davvero il tuo team, non solo il punteggio.", "Assunzioni più rapide: One scrive l’annuncio, ordina le candidature e fa il primo colloquio telefonico.", "Un canale di whistleblowing conforme, senza rischio di sanzioni."],
    stats: [{ n: "250+", t: "portali di lavoro, tra cui LinkedIn, InfoJobs e Indeed" }, { n: "360°", t: "valutazioni, obiettivi a cascata e matrice 9 box" }],
    ask: "Cosa emerge dal sondaggio di engagement di questo trimestre?" },
  it: { tag: "IT e HR sempre allineati",
    lead: "Dispositivi, app e accessi si aggiornano in automatico a ogni assunzione, cambio di ruolo o uscita. Ti serve qualcosa? Chiedilo a One: apre la richiesta, la inoltra al team giusto e, prima ancora, ti risponde in base alle policy aziendali.",
    pains: ["Ogni portatile configurato e protetto dal primo giorno.", "Basta pagare licenze che nessuno apre.", "Shadow IT e strumenti AI individuati e ordinati per rischio.", "Pronto per gli audit ISO 27001, SOC 2 e GDPR, con verbali di consegna conformi all’articolo 21 della direttiva NIS2."],
    stats: [{ n: "1 clic", t: "per recuperare le licenze che nessuno usa" }, { n: "Zero-touch", t: "distribuzione dei dispositivi, da macOS a ChromeOS" }],
    ask: "Blocca o cancella il portatile che Marta ha perso" },
  nomina: { tag: "Buste paga, giuste al primo colpo",
    lead: "Presenze, assenze e spese confluiscono automaticamente nelle buste paga, così gli errori li trovi prima del pagamento, non dopo.",
    pains: ["Un ciclo paghe guidato e condiviso, con il tuo consulente del lavoro collegato tramite Factorial Professionals.", "Rilevamento automatico degli errori nelle voci retributive e nei risultati delle buste paga.", "Pagamenti SEPA e invio automatico delle buste paga."],
    stats: [{ n: "70+", t: "integrazioni con software paghe, ERP e altro" }],
    ask: "Cosa manca prima di chiudere le buste paga di questo mese?" }
};

MODX.it = {
  desempeno: { extra: ["Riepiloghi AI di autovalutazione, feedback dei colleghi e del manager, per valutazioni sempre eque.", "Competenze su grafico a ragno e obiettivi a cascata."], try: "Confronta ogni persona con la media del suo team" },
  formacion: { extra: ["Costi e sovvenzioni della formazione sotto controllo, con avvisi di scadenza e rinnovo dei corsi.", "Importazione SCORM, catalogo corsi e certificati automatici."], try: "Crea un corso e un quiz da questo documento" },
  engagement: { extra: ["Videochiamate 1:1 con trascrizione AI e una chat per analizzarle.", "One analizza risultati dei sondaggi, tendenze e commenti liberi."], try: "Cosa emerge dal sondaggio di engagement di questo trimestre?" },
  comunicaciones: { extra: ["La chat aziendale per i team operativi: gruppi per team, turno o sede, creati dal tuo organigramma.", "Traduzioni AI in cinque lingue, messaggi vocali, video e conferma di lettura sugli avvisi critici."], try: "Scrivi al turno del mattino della chiusura di venerdì" },
  ats: { extra: ["AI Top Match: One classifica ogni candidatura.", "Trasforma i CV in candidature, anche quelli scansionati."], try: "Scrivi l’annuncio e classifica i candidati per Design" },
  canal: { extra: ["Comunicazione bidirezionale, gestione dei casi e registro di audit completo.", "Se qualcuno segnala un problema a One, viene indirizzato allo Spazio sicuro invece di aprire un ticket."] },
  control: { extra: ["Timbratura da app, codice QR, numero ID o web, con geolocalizzazione e avvisi di geofencing.", "Pause fisse, semiflessibili o flessibili, e saldo ore annuale."], try: "Risolvi tutte le anomalie di timbratura di questa settimana" },
  turnos: { extra: ["Un agente di ripianificazione che copre i turni in automatico.", "Da un Excel o uno screenshot dei turni a una bozza con One: lui propone, tu confermi.", "Cambi turno dall’app, con approvazione del manager."], try: "Crea i turni di questa settimana da questo Excel" },
  ausencias: { extra: ["Descrivi a One le tue regole di maturazione e Factorial le applica: data di assunzione, arrotondamenti e anzianità.", "Approvazioni multilivello, delega e periodi bloccati."], try: "Approva le richieste di ferie in sospeso del mio team" },
  plantilla: { extra: ["Confronta le versioni del piano per valutare diversi scenari.", "One prepara la bozza del piano dalle direttive aziendali, in minuti invece che in giorni."] },
  proyectos: { extra: ["Margine per progetto, bacheche Kanban e rilevamento dei colli di bottiglia.", "Costi in più valute, attività fatturabili e non, preventivi e fatturazione."], try: "Quali progetti sono in ritardo e che margine hanno?" },
  fpa: { extra: ["Valori contrattuali, paghe effettive e altri costi del personale in un’unica vista, normalizzati per FTE.", "Assegnazione massiva dei centri di costo con One."], try: "Qual è il nostro costo per FTE in Operations?" },
  gastos: { extra: ["Factorial Cards: virtuali, fisiche e nel wallet.", "Rimborso in busta paga o con bonifico SEPA, e integrazione con Aruba per la conservazione sostitutiva."], try: "Approva le note spese in sospeso del mio team" },
  compras: { extra: ["Lettura AI delle fatture direttamente dalla email e riconciliazione bancaria con l’AI.", "Onboarding dei fornitori, firma dei contratti e pagamenti SEPA."], try: "Crea la richiesta d’acquisto da questo preventivo" },
  revision: { extra: ["Budget dedicati con monitoraggio dei costi in tempo reale.", "Finance vede il monte retributivo per società, senza le retribuzioni individuali."], try: "Suggerisci aumenti e promozioni per il mio team" },
  politicas: { extra: ["Pubblica per entità, sede, team o ruolo, con monitoraggio delle prese visione e promemoria.", "Trasforma i PDF in policy e scopri a quali domande One non ha saputo rispondere."], try: "Quale policy sulle trasferte vale per me?" },
  portal: { extra: ["Timbratura, attività di oggi e chi è presente, direttamente dalla home.", "Un’unica casella per approvazioni, richieste e documenti da firmare."], try: "Cosa ho da fare oggi?" },
  onoff: { extra: ["Welcome Space: documenti firmati prima del primo giorno.", "Avvisi per fine del periodo di prova, compleanni e documenti in scadenza."], try: "Crea una policy di onboarding per il team del negozio" },
  documentos: { extra: ["Buste paga inviate in automatico, con distribuzione massiva.", "Cartelle condivise e private, con permessi per ogni singola cartella."], try: "Dov’è l’ultimo contratto di Laura?" },
  firma: { extra: ["Firma elettronica qualificata con Signaturit: valore legale, ordine di firma e promemoria in blocco."] },
  analiticas: { extra: ["Metriche come gender pay gap, turnover e promozioni, calcolate sempre con gli stessi criteri.", "One mette in evidenza ciò che conta e suggerisce il passo successivo: aprire una posizione, inviare un sondaggio o assegnare una formazione."], try: "Crea un report sull’organico dello scorso trimestre" },
  tickets: { extra: ["Auto Resolver gestisce le richieste ripetitive dall’inizio alla fine, con l’approvazione di una persona.", "Monitoraggio SLA, avvisi e analisi sulla risoluzione."], try: "Mi serve un portatile nuovo" },
  mdm: { extra: ["Crittografia del disco e policy per password, aggiornamenti e standard CIS.", "Protezione endpoint con SentinelOne."], try: "Blocca o cancella il portatile che Marta ha perso" },
  inventario: { extra: ["Avvisi AI per le garanzie in scadenza.", "Kit di attrezzatura per ruolo, dal catalogo dei ruoli."], try: "Assegna un portatile nuovo a Marta" },
  software: { extra: ["Shadow IT e strumenti AI individuati e ordinati per rischio.", "One trova le licenze che nessuno usa e le recupera con un clic."], try: "Quali licenze non ha usato nessuno questo mese?" },
  marketplace: { extra: ["Ordina o noleggia dispositivi, con spedizione e ritiro inclusi."] },
  beneficios: { extra: ["Carta digitale in Apple Wallet e Google Wallet, con la conformità fiscale già inclusa.", "Disponibile in Spagna e Portogallo."], try: "Quanto buono pasto mi resta?" },
  integraciones: { extra: ["Connettore MCP: qualsiasi assistente AI compatibile usa Factorial con i tuoi stessi permessi.", "Oltre 70 integrazioni: ATS e portali di lavoro, email e calendari, ERP e strumenti di BI."] },
  anticipo: { extra: ["Niente interessi, niente commissioni e nessun prestito: il limite si calcola in automatico."], try: "Quanto anticipo sullo stipendio posso chiedere questo mese?" }
};

FACTS.it = {
  e: "Chi siamo",
  t: "Factorial in numeri",
  d: "Factorial è nata a Barcellona nel 2016 per le aziende di medie dimensioni in tutta Europa. Oggi integriamo l’AI nei processi su cui si regge la tua azienda, a partire da HR, Finance e IT.",
  items: [["+17.000", "clienti di ogni settore"], ["+1 M", "di persone usano Factorial ogni giorno"], ["4,8/5", "valutazione dell’onboarding"], ["+450", "persone si occupano dei nostri clienti"], ["+20 M€", "investiti nel prodotto ogni anno"], ["+700 M€", "di finanziamenti"]],
  note: "Uffici a Barcellona, Madrid e Monaco · Assistenza via telefono, ticket e chat in fino a 7 lingue · Dati ospitati nell’UE"
};

HUBX.de = {
  core: { tag: "Das ganze Unternehmen an einem Ort",
    lead: "HR, Finanzen und IT arbeiten mit denselben Live-Daten, und One auch. Mitarbeitende, Dokumente, Richtlinien, Kommunikation und Analysen: das Fundament, auf dem alles andere läuft.",
    pains: ["Kein Warten mehr auf den Bericht von jemand anderem: Sie fragen und bekommen die Antwort, keine weitere Anfrage.", "Anfragen gehen nicht mehr zwischen E-Mails, Nachrichten und manuellem Nachhaken verloren.", "Richtlinien, die gelesen werden, mit Lesebestätigungen, bereit für das Audit.", "Dokumente unterschrieben, ohne jemandem hinterherzulaufen, voll rechtsgültig."],
    stats: [{ n: "70+", t: "Integrationen, offene API und MCP-Konnektor" }, { n: "EU", t: "in Europa gehostet, konform mit DSGVO und EU AI Act" }],
    ask: "Vergleiche Abwesenheiten und Performance in meinen Teams" },
  tiempo: { tag: "Grundlagen automatisieren",
    lead: "Stempelungen, Schichten und Abwesenheiten im selben Kalender. Halten Sie das Arbeitszeitrecht ein, gleichen Sie Überstunden aus und machen Sie jede Stunde bereit für Lohnabrechnung und Projekte.",
    pains: ["Rechtssichere Arbeitszeiterfassung, ohne Papierlisten oder Tabellen.", "Überstunden mit Freizeit oder über die Lohnabrechnung ausgeglichen, ohne manuelles Rechnen.", "Fehlende Stempelungen und Verspätungen sofort sichtbar, nicht erst am Monatsende.", "Konfliktfreie Dienstpläne aus Vertragsstunden, Ruhezeiten und Besetzungsbedarf."],
    stats: [{ n: "4", t: "Arten zu stempeln: App, QR-Code, Personalnummer und Web" }, { n: "∞", t: "Abwesenheitsrichtlinien, mit mehrstufigen Freigaben" }],
    ask: "Sag mir jeden Montag um 09:30, wer diese Woche abwesend ist" },
  finanzas: { tag: "Kosten im Griff",
    lead: "Ausgaben, Karten und Bestellanfragen an einem Ort, abgestimmt mit Ihren Personalkosten. Schicken Sie One einen Stapel Belege, genehmigen Sie im Chat und fragen Sie, was jedes Team kostet.",
    pains: ["Ausgaben kontrollieren, bevor sie entstehen: von der Bestellanfrage bis zur bezahlten Rechnung.", "Duplikate und Abweichungen erkannt, ohne jemanden zu blockieren.", "Keine Papierbelege mehr.", "Gehaltsrunden, die im Budget bleiben.", "Die tatsächlichen Kosten jeder Person und jedes Teams, klar und aktuell."],
    stats: [{ n: "1,5 %", t: "Cashback auf Kartenzahlungen (bald verfügbar)" }, { n: "SEPA", t: "Erstattungen und Lieferantenzahlungen direkt aus Factorial" }],
    ask: "Wie hoch sind unsere Personalkosten pro Team in diesem Monat?" },
  talento: { tag: "Starke Teams aufbauen",
    lead: "Gewinnen, entwickeln und halten Sie die richtigen Leute, während One die Verwaltung übernimmt: Es macht aus Lebensläufen Bewerberprofile, wertet Umfragen aus und hält jedes 1:1 im Transkript fest.",
    pains: ["Faire Beurteilungen, mit KI-Zusammenfassungen von Selbsteinschätzung, Team und Führungskraft.", "Schulungspläne raus aus Excel, mit Kosten und Fördermitteln im Blick.", "Mitarbeiterbindung: Hören Sie, was Ihr Team wirklich sagt, nicht nur den Score.", "Schneller einstellen: One entwirft die Stelle, bewertet Bewerbende und führt das erste Gespräch.", "Eine rechtskonforme Sichere Meldestelle, ohne Risiko von Strafen."],
    stats: [{ n: "250+", t: "Jobbörsen, darunter LinkedIn und Indeed" }, { n: "360°", t: "Beurteilungen, kaskadierende Ziele und 9-Box" }],
    ask: "Was sagen die Mitarbeitenden in der Engagement-Umfrage dieses Quartals?" },
  it: { tag: "IT läuft im Takt mit HR",
    lead: "Geräte, Apps und Zugänge folgen automatisch jedem Eintritt, Wechsel und Austritt. Sie brauchen etwas? Sagen Sie es One: Es legt die Anfrage an, leitet sie an das richtige Team und antwortet zuerst anhand Ihrer Richtlinien.",
    pains: ["Jeder Laptop ab dem ersten Tag eingerichtet und geschützt.", "Keine Kosten mehr für Lizenzen, die niemand öffnet.", "Schatten-IT und KI-Tools erkannt und nach Risiko sortiert.", "Bereit für Audits nach ISO 27001, SOC 2 und DSGVO, mit Übergabedokumenten konform mit Artikel 21 der NIS2-Richtlinie."],
    stats: [{ n: "1 Klick", t: "um Lizenzen zurückzuholen, die niemand nutzt" }, { n: "Zero-Touch", t: "Gerätebereitstellung, von macOS bis ChromeOS" }],
    ask: "Sperre oder lösche den Laptop, den Marta verloren hat" },
  nomina: { tag: "Löhne, gleich beim ersten Mal richtig",
    lead: "Zeiten, Abwesenheiten und Ausgaben fließen automatisch in die Lohnabrechnung. So finden Sie Fehler vor dem Zahltag, nicht danach.",
    pains: ["Ein geführter, gemeinsamer Abrechnungszyklus, mit Ihrem Lohnbüro über Factorial Professionals verbunden.", "Automatische Fehlererkennung in Gehaltsbestandteilen und Abrechnungsergebnissen.", "SEPA-Zahlungen und automatischer Versand der Gehaltsabrechnungen."],
    stats: [{ n: "70+", t: "Integrationen mit Lohnabrechnungsanbietern, ERPs und mehr" }],
    ask: "Was fehlt noch, bevor wir die Abrechnung dieses Monats abschließen?" }
};

MODX.de = {
  desempeno: { extra: ["KI-Zusammenfassungen von Selbsteinschätzung, Team und Führungskraft, damit Beurteilungen fair bleiben.", "Kompetenzen im Netzdiagramm und kaskadierende Ziele."], try: "Vergleiche jede Person mit dem Teamdurchschnitt" },
  formacion: { extra: ["Schulungskosten und Fördermittel im Blick, mit Warnungen zu Ablauf und Rezertifizierung.", "SCORM-Import, Kurskatalog und automatische Zertifikate."], try: "Erstelle aus diesem Dokument einen Kurs und ein Quiz" },
  engagement: { extra: ["1:1-Videocalls mit KI-Transkript und einem Chat, um sie auszuwerten.", "One wertet Umfrageergebnisse, Trends und Freitextkommentare aus."], try: "Was sagen die Mitarbeitenden in der Engagement-Umfrage dieses Quartals?" },
  comunicaciones: { extra: ["Der Firmenchat für Teams vor Ort: Gruppen nach Team, Schicht oder Standort, direkt aus dem Organigramm.", "KI-Übersetzung in fünf Sprachen, Sprachnachrichten, Videos und Lesebestätigung bei wichtigen Warnungen."], try: "Schreib der Frühschicht wegen der Schließung am Freitag" },
  ats: { extra: ["KI-Top-Match: One bewertet jede Bewerbung.", "Machen Sie aus Lebensläufen Bewerberprofile, auch aus gescannten."], try: "Entwirf die Stellenanzeige und bewerte die Bewerbenden für Design" },
  canal: { extra: ["Kommunikation in beide Richtungen, zentrale Fallverwaltung und lückenloses Prüfprotokoll.", "Meldet jemand bei One einen Missstand, leitet One die Person zur Sicheren Meldestelle weiter, statt ein Ticket zu öffnen."] },
  control: { extra: ["Stempeln per App, QR-Code, Personalnummer oder Web, mit Geolokalisierung und Geofencing-Warnungen.", "Feste, teilflexible oder flexible Pausen und ein jährliches Arbeitszeitkonto."], try: "Behebe alle Stempelprobleme dieser Woche" },
  turnos: { extra: ["Ein Agent, der Schichten automatisch nachbesetzt.", "Machen Sie mit One aus einer Excel oder einem Screenshot Ihres Dienstplans Schichten. One fordert vorher Ihre Bestätigung an.", "Schichttausch per App, mit Freigabe der Führungskraft."], try: "Erstelle die Schichten dieser Woche aus dieser Excel" },
  ausencias: { extra: ["Beschreiben Sie One Ihre Regeln für Urlaubsansprüche, und Factorial wendet sie an: Eintrittsdatum, Rundung und Betriebszugehörigkeit.", "Mehrstufige Freigaben, Vertretungen und Sperrzeiten."], try: "Genehmige die offenen Urlaubsanträge meines Teams" },
  plantilla: { extra: ["Vergleichen Sie Planversionen, um Szenarien durchzuspielen.", "One entwirft den Plan aus Ihren Unternehmensvorgaben, in Minuten statt Tagen."] },
  proyectos: { extra: ["Marge pro Projekt, Kanban-Boards und Erkennung von Engpässen.", "Kosten in mehreren Währungen, abrechenbare und nicht abrechenbare Arbeit, Angebote und Rechnungen."], try: "Welche Projekte sind überfällig und welche Marge haben sie?" },
  fpa: { extra: ["Vertragswerte, tatsächliche Lohnabrechnung und weitere Personalkosten in einer Ansicht, normalisiert nach FTE.", "Kostenstellen mit One gesammelt zuweisen."], try: "Wie hoch sind unsere Kosten pro FTE im Bereich Betrieb?" },
  gastos: { extra: ["Factorial Cards: virtuell, physisch und im Wallet.", "Erstattung über die Lohnabrechnung oder per SEPA, mit lokaler Compliance: GoBD-Konformität, Tagespauschalen und DATEV-Integration."], try: "Genehmige die offenen Ausgaben meines Teams" },
  compras: { extra: ["KI liest Rechnungen direkt aus dem Postfach, dazu Bankabgleich mit KI.", "Onboarding von Lieferanten, Unterzeichnung von Lieferantenverträgen und SEPA-Zahlungen."], try: "Erstelle die Bestellanfrage aus diesem Angebot" },
  revision: { extra: ["Budgets mit Kostenverfolgung in Echtzeit.", "Die Finanzabteilung sieht die Gehaltssumme nach Gesellschaft, ohne einzelne Gehälter."], try: "Schlage Erhöhungen und Beförderungen für mein Team vor" },
  politicas: { extra: ["Veröffentlichen Sie nach Gesellschaft, Standort, Team oder Rolle, mit Lesebestätigungen und Erinnerungen.", "Machen Sie aus PDFs Richtlinien und sehen Sie, was One nicht beantworten konnte."], try: "Welche Reisekostenrichtlinie gilt für mich?" },
  portal: { extra: ["Einstempeln, die heutigen Aufgaben und wer gerade da ist, direkt auf der Startseite.", "Ein Posteingang für Genehmigungen, Anfragen und Dokumente zum Unterschreiben."], try: "Was steht heute für mich an?" },
  onoff: { extra: ["Welcome Space: Dokumente schon vor dem ersten Tag unterschrieben.", "Erinnerungen an das Ende der Probezeit, Geburtstage und ablaufende Dokumente."], try: "Erstelle eine Onboarding-Richtlinie für das Store-Team" },
  documentos: { extra: ["Gehaltsabrechnungen automatisch versendet, auch als Massenversand.", "Geteilte und private Ordner, mit Berechtigungen bis auf Ordnerebene."], try: "Wo ist Lauras aktueller Vertrag?" },
  firma: { extra: ["Qualifizierte elektronische Signatur über Signaturit: rechtsgültig, mit fester Reihenfolge und Sammelerinnerungen."] },
  analiticas: { extra: ["Kennzahlen wie Gender Pay Gap, Fluktuation und Beförderungen, immer einheitlich definiert.", "One zeigt Auffälligkeiten und schlägt den nächsten Schritt vor: eine Stelle ausschreiben, eine Umfrage versenden oder eine Schulung zuweisen."], try: "Erstelle einen Bericht zum Personalbestand im letzten Quartal" },
  tickets: { extra: ["Auto Resolver erledigt wiederkehrende Anfragen komplett, eine Person gibt frei.", "SLA-Überwachung, Warnungen und Lösungsanalysen."], try: "Ich brauche einen neuen Laptop" },
  mdm: { extra: ["Festplattenverschlüsselung sowie Richtlinien für Passwörter, Updates und CIS.", "Endpunktschutz mit CrowdStrike Falcon oder SentinelOne."], try: "Sperre oder lösche den Laptop, den Marta verloren hat" },
  inventario: { extra: ["KI-Hinweise zu bald ablaufenden Garantien.", "Ausstattung nach Rolle, direkt aus dem Jobkatalog."], try: "Weise Marta einen neuen Laptop zu" },
  software: { extra: ["Schatten-IT und KI-Tools erkannt und nach Risiko sortiert.", "One erkennt Lizenzen, die niemand öffnet, und holt sie mit einem Klick zurück."], try: "Welche Lizenzen hat diesen Monat niemand genutzt?" },
  marketplace: { extra: ["Geräte kaufen oder leihen, inklusive Versand und Abholung."] },
  beneficios: { extra: ["Digitale Karte in Apple Wallet und Google Wallet, mit integrierter Steuerkonformität.", "Verfügbar in Spanien und Portugal."], try: "Wie viel Essenszuschuss habe ich noch?" },
  integraciones: { extra: ["MCP-Konnektor: Jeder kompatible Assistent nutzt Factorial mit Ihren Berechtigungen.", "Über 70 Integrationen: ATS und Jobbörsen, Mail und Kalender, ERPs und BI-Tools."] },
  anticipo: { extra: ["Keine Zinsen, keine Gebühren und kein Kredit: Das Limit wird automatisch berechnet."], try: "Wie viel Gehaltsvorschuss kann ich diesen Monat abrufen?" }
};

FACTS.de = {
  e: "Über uns",
  t: "Factorial in Zahlen",
  d: "Factorial wurde 2016 in Barcelona gegründet, gebaut für den Mittelstand in ganz Europa. Heute integrieren wir KI in das System, mit dem Ihr Unternehmen arbeitet, angefangen bei HR, Finanzen und IT.",
  items: [["17.000+", "Kunden aus allen Branchen"], ["1 Mio.+", "Menschen nutzen Factorial jeden Tag"], ["4,8/5", "Bewertung unseres Onboardings"], ["450+", "Menschen kümmern sich um unsere Kunden"], ["20 Mio. €+", "investieren wir jedes Jahr in das Produkt"], ["700 Mio. €+", "Finanzierung"]],
  note: "Büros in Barcelona, Madrid und München · Support per Telefon, Ticket und Chat in bis zu 7 Sprachen · Daten in der EU gehostet"
};

/* Seguridad y cumplimiento (fuente: slides de seguridad y RGPD de los decks) */
FACTS.es.sec = { t: "Seguridad y cumplimiento",
  certs: [["ISO/IEC 27001", "Sistema de gestión de la seguridad de la información"], ["SOC 2 Tipo I y II", "Controles de seguridad auditados de forma independiente"], ["ENS categoría alta", "Esquema Nacional de Seguridad (España)"]],
  items: ["Datos alojados en la UE (AWS Fráncfort).", "Conforme con el RGPD: Factorial puede actuar como responsable o encargado del tratamiento, con DPA y delegado de protección de datos.", "Conforme con el Reglamento de IA de la UE: tus datos nunca se usan para entrenar modelos de otros clientes.", "One solo ve y hace lo que permite el rol de cada persona.", "Acceso con SSO (Google, Microsoft, LinkedIn) y MFA por defecto.", "Revisiones trimestrales de accesos y monitorización continua."] };
FACTS.en.sec = { t: "Security and compliance",
  certs: [["ISO/IEC 27001", "Information security management system"], ["SOC 2 Type I & II", "Independently audited security controls"], ["ENS high category", "Spain's National Security Framework"]],
  items: ["Data hosted in the EU (AWS Frankfurt).", "GDPR compliant: Factorial can act as controller or processor, with a DPA and a data protection officer.", "EU AI Act compliant: your data is never used to train models for other customers.", "One only sees and does what each person's role allows.", "SSO sign-in (Google, Microsoft, LinkedIn) and MFA by default.", "Quarterly access reviews and continuous monitoring."] };
FACTS.de.sec = { t: "Sicherheit und Compliance",
  certs: [["ISO/IEC 27001", "Managementsystem für Informationssicherheit"], ["SOC 2 Typ I & II", "Unabhängig geprüfte Sicherheitskontrollen"], ["ENS, hohe Kategorie", "Nationales Sicherheitsschema Spaniens"]],
  items: ["Daten in der EU gehostet (AWS Frankfurt).", "DSGVO-konform: Factorial kann als Verantwortlicher oder Auftragsverarbeiter agieren, mit AVV und Datenschutzbeauftragtem.", "EU AI Act-konform: Ihre Daten werden nie zum Training von Modellen für andere Kunden verwendet.", "One sieht und tut nur, was die Rolle der jeweiligen Person erlaubt.", "Anmeldung per SSO (Google, Microsoft, LinkedIn) und MFA standardmäßig.", "Vierteljährliche Überprüfung der Zugriffsrechte und kontinuierliches Monitoring."] };
FACTS.pt.sec = { t: "Segurança e conformidade",
  certs: [["ISO/IEC 27001", "Sistema de gestão da segurança da informação"], ["SOC 2 Tipo I e II", "Controlos de segurança auditados de forma independente"], ["ENS categoria alta", "Esquema Nacional de Segurança (Espanha)"]],
  items: ["Dados alojados na UE (AWS Frankfurt).", "Conforme com o RGPD: a Factorial pode atuar como responsável ou subcontratante, com DPA e encarregado da proteção de dados.", "Conforme com o Regulamento da IA da UE: os seus dados nunca são usados para treinar modelos de outros clientes.", "O One só vê e faz o que a função de cada pessoa permite.", "Acesso com SSO (Google, Microsoft, LinkedIn) e MFA por defeito.", "Revisão trimestral dos acessos e monitorização contínua."] };
FACTS.fr.sec = { t: "Sécurité et conformité",
  certs: [["ISO/IEC 27001", "Système de management de la sécurité de l’information"], ["SOC 2 Type I et II", "Contrôles de sécurité audités de manière indépendante"], ["ENS catégorie haute", "Schéma national de sécurité (Espagne)"]],
  items: ["Données hébergées dans l’UE (AWS Francfort).", "Conforme au RGPD : Factorial peut agir comme responsable de traitement ou sous-traitant, avec DPA et délégué à la protection des données.", "Conforme à l’AI Act européen : vos données ne servent jamais à entraîner des modèles pour d’autres clients.", "One ne voit et ne fait que ce que le rôle de chaque personne autorise.", "Connexion SSO (Google, Microsoft, LinkedIn) et MFA par défaut.", "Revue trimestrielle des droits d’accès et surveillance continue."] };
FACTS.it.sec = { t: "Sicurezza e compliance",
  certs: [["ISO/IEC 27001", "Sistema di gestione della sicurezza delle informazioni"], ["SOC 2 Tipo I e II", "Controlli di sicurezza verificati in modo indipendente"], ["ENS categoria alta", "Schema nazionale di sicurezza (Spagna)"]],
  items: ["Dati ospitati nell’UE (AWS Francoforte).", "Conforme al GDPR: Factorial può agire come titolare o responsabile del trattamento, con DPA e responsabile della protezione dei dati.", "Conforme all’AI Act europeo: i tuoi dati non vengono mai usati per addestrare modelli di altri clienti.", "One vede e fa solo ciò che il ruolo di ogni persona consente.", "Accesso con SSO (Google, Microsoft, LinkedIn) e MFA di default.", "Revisione trimestrale dei permessi di accesso e monitoraggio continuo."] };

HUBX['pt-br'] = {
  core: { tag: "Toda a sua empresa em um só lugar",
    lead: "RH, Finanças e TI trabalham com os mesmos dados em tempo real, e o One também. Pessoas, documentos, políticas, comunicação e analytics: a base sobre a qual tudo funciona.",
    pains: ["Chega de esperar o relatório de outra pessoa: você pergunta e recebe a resposta, não um pedido.", "As solicitações deixam de se perder entre e-mails, mensagens e follow-ups manuais.", "Políticas que as pessoas realmente leem, com confirmações de leitura prontas para auditoria.", "Documentos assinados sem correr atrás de ninguém, com validade jurídica."],
    stats: [{ n: "+70", t: "integrações, API aberta e conector MCP" }, { n: "UE", t: "dados hospedados na Europa, em conformidade com o GDPR e o AI Act da UE" }],
    ask: "Compare ausências e desempenho entre as minhas equipes" },
  tiempo: { tag: "Automatize o básico",
    lead: "Registros de ponto, escalas e ausências no mesmo calendário. Controle a jornada, compense as horas extras e deixe cada hora pronta para a folha de pagamento e os projetos.",
    pains: ["Controle de jornada sem papel nem planilhas.", "Horas extras compensadas em folga ou pagas na folha, sem contas à mão.", "Esquecimentos de ponto e atrasos visíveis na hora, não no fim do mês.", "Escalas sem conflitos, geradas a partir das horas de contrato, das regras de descanso e da cobertura necessária."],
    stats: [{ n: "4", t: "formas de bater o ponto: app, QR code, número de matrícula e web" }, { n: "∞", t: "políticas de ausência, com aprovações em vários níveis" }],
    ask: "Toda segunda-feira às 9h30, me diga quem está ausente naquela semana" },
  finanzas: { tag: "Custos sob controle",
    lead: "Despesas, cartões e solicitações de compra em um só lugar, com o custo de pessoal sempre sincronizado. Mande para o One uma pilha de recibos, aprove pelo chat e pergunte quanto custa cada equipe.",
    pains: ["Controle o gasto antes que ele aconteça, da solicitação de compra à fatura paga.", "Duplicidades e divergências identificadas sem travar ninguém.", "Adeus aos recibos de papel.", "Revisões salariais que respeitam o orçamento.", "O custo real de cada pessoa e de cada equipe, claro e atualizado."],
    stats: [{ n: "+70", t: "integrações com ERP, folha de pagamento e muito mais" }, { n: "1 lugar", t: "para despesas, compras, projetos e orçamento" }],
    ask: "Qual é o nosso custo de pessoal por equipe este mês?" },
  talento: { tag: "Monte equipes de alta performance",
    lead: "Contrate, desenvolva e retenha as pessoas certas enquanto o One cuida da parte administrativa: transforma currículos em candidatos, analisa pesquisas e transcreve cada 1:1.",
    pains: ["Avaliações justas, com resumos de IA da autoavaliação, dos pares e do gestor.", "Planos de treinamento fora das planilhas, com os custos sob controle.", "Retenção: ouça o que a sua equipe realmente diz, não só a nota.", "Contratação mais rápida: o One escreve a vaga, ranqueia os candidatos e faz a primeira ligação.", "Um canal de denúncias em conformidade, sem risco de multas."],
    stats: [{ n: "+250", t: "portais de emprego, incluindo LinkedIn e Indeed" }, { n: "360°", t: "avaliações, metas em cascata e 9-box" }],
    ask: "O que as pessoas estão dizendo na pesquisa de clima deste trimestre?" },
  it: { tag: "TI em sintonia com o RH",
    lead: "Dispositivos, apps e acessos acompanham automaticamente cada admissão, mudança e desligamento. Precisa de algo? Peça ao One: ele abre a solicitação, encaminha para a equipe certa e responde primeiro com base nas suas políticas.",
    pains: ["Cada notebook configurado e protegido desde o primeiro dia.", "Pare de pagar licenças que ninguém abre.", "Shadow IT e ferramentas de IA identificadas e classificadas por risco.", "Pronto para auditorias ISO 27001, SOC 2 e GDPR."],
    stats: [{ n: "1 clique", t: "para recuperar as licenças que ninguém usa" }, { n: "Zero-touch", t: "implantação de dispositivos, do macOS ao ChromeOS" }],
    ask: "Bloqueie ou apague o notebook que a Marta perdeu" },
  nomina: { tag: "Folha de pagamento certa de primeira",
    lead: "Registros de ponto, ausências e despesas chegam sozinhos à folha de pagamento, para você encontrar os erros antes do dia do pagamento, não depois.",
    pains: ["Um ciclo de folha guiado e colaborativo, com o seu escritório de contabilidade conectado pela Factorial Professionals.", "Identificação automática de erros nas rubricas e nos resultados da folha.", "Distribuição automática dos holerites."],
    stats: [{ n: "+70", t: "integrações com sistemas de folha, ERP e muito mais" }],
    ask: "O que falta antes de fecharmos a folha deste mês?" }
};

MODX['pt-br'] = {
  desempeno: { extra: ["Resumos de IA da autoavaliação, dos pares e do gestor, para avaliações justas.", "Gráficos de radar de competências e metas em cascata."], try: "Compare cada pessoa com a média da equipe dela" },
  formacion: { extra: ["Custos de treinamento sob controle, com alertas de vencimento e de reciclagem.", "Importador SCORM, catálogo de cursos e certificados automáticos."], try: "Crie um curso e um questionário a partir deste documento" },
  engagement: { extra: ["Videochamadas 1:1 com transcrição por IA e um chat para analisá-las.", "O One analisa resultados de pesquisas, tendências e comentários abertos."], try: "O que as pessoas estão dizendo na pesquisa de clima deste trimestre?" },
  comunicaciones: { extra: ["O chat da empresa para as equipes da operação: grupos por equipe, turno ou local, criados a partir do organograma.", "Tradução por IA em cinco idiomas, mensagens de voz, vídeo e confirmação de leitura nos alertas críticos."], try: "Envie uma mensagem para o turno da manhã sobre o fechamento de sexta-feira" },
  ats: { extra: ["AI Top Match: o One ranqueia todas as candidaturas.", "Transforme currículos em candidatos, inclusive currículos digitalizados."], try: "Escreva a vaga e ranqueie os candidatos de Design" },
  canal: { extra: ["Comunicação nos dois sentidos, gestão de casos e trilha de auditoria completa.", "Se alguém conta uma preocupação ao One, ele encaminha para o canal em vez de abrir um chamado."] },
  control: { extra: ["Ponto por app, QR code, número de matrícula ou web, com geolocalização e alertas de geofencing.", "Intervalos fixos, semiflexíveis ou flexíveis, e banco de horas anual."], try: "Corrija todas as inconsistências de ponto desta semana" },
  turnos: { extra: ["Um agente de reescala que cobre turnos automaticamente.", "Transforme uma planilha ou um print da sua escala em turnos com o One, que pede sua confirmação.", "Trocas de turno pelo app, com aprovação do gestor."], try: "Crie as escalas desta semana a partir desta planilha" },
  ausencias: { extra: ["Descreva suas regras de acúmulo ao One e a Factorial aplica: data de admissão, arredondamentos e tempo de casa.", "Aprovações em vários níveis, delegação e períodos bloqueados."], try: "Aprove as solicitações de ausência pendentes da minha equipe" },
  plantilla: { extra: ["Compare versões do plano para analisar cenários diferentes.", "O One escreve o plano a partir das diretrizes da empresa, em minutos em vez de dias."] },
  proyectos: { extra: ["Margem por projeto, quadros Kanban e identificação de bloqueios.", "Custos em várias moedas, trabalho faturável e não faturável, orçamentos e faturamento."], try: "Quais projetos estão atrasados e qual é a margem deles?" },
  fpa: { extra: ["Valores contratuais, salários reais e outros custos de pessoal em uma só visão, normalizados por FTE.", "Atribuição de centros de custo em massa com o One."], try: "Qual é o nosso custo por FTE em Operações?" },
  gastos: { extra: ["Cartões Factorial: virtuais, físicos e na carteira do celular.", "Recibos digitais e reembolso pela folha de pagamento."], try: "Aprove as despesas pendentes da minha equipe" },
  compras: { extra: ["Leitura de faturas por IA direto do e-mail e conciliação bancária com IA.", "Cadastro de fornecedores e assinatura de contratos."], try: "Crie a solicitação de compra a partir deste orçamento" },
  revision: { extra: ["Verbas de orçamento com acompanhamento do custo em tempo real.", "Finanças vê a massa salarial por entidade, sem acesso aos salários individuais."], try: "Sugira aumentos e promoções para a minha equipe" },
  politicas: { extra: ["Publique por entidade, local, equipe ou cargo, com acompanhamento das confirmações de leitura e lembretes.", "Transforme PDFs de políticas em políticas e veja o que o One não conseguiu responder."], try: "Qual política de despesas de viagem vale para mim?" },
  portal: { extra: ["Ponto, tarefas do dia e quem está presente, logo na tela inicial.", "Uma única caixa de entrada para aprovações, solicitações e documentos a assinar."], try: "O que eu tenho para hoje?" },
  onoff: { extra: ["Welcome Space: documentos assinados antes do primeiro dia.", "Alertas de fim do período de experiência, aniversários e documentos vencendo."], try: "Crie uma política de onboarding para a equipe das lojas" },
  documentos: { extra: ["Holerites enviados automaticamente, com distribuição em massa.", "Pastas compartilhadas e privadas, com permissões em cada pasta."], try: "Onde está o último contrato da Laura?" },
  firma: { extra: ["Assinatura eletrônica qualificada com Signaturit: com validade jurídica, ordem de assinatura e lembretes em massa."] },
  analiticas: { extra: ["Métricas como diferença salarial de gênero, turnover e promoções, sempre definidas do mesmo jeito.", "O One aponta o que se destaca e sugere o próximo passo: abrir uma vaga, enviar uma pesquisa ou atribuir um treinamento."], try: "Crie um relatório de quadro do último trimestre" },
  tickets: { extra: ["O Auto Resolver fecha solicitações repetitivas de ponta a ponta, com a aprovação de uma pessoa.", "Monitoramento de SLA, alertas e analytics de resolução."], try: "Preciso de um notebook novo" },
  mdm: { extra: ["Criptografia de disco e políticas de senha, atualizações e CIS.", "Proteção de endpoints com SentinelOne."], try: "Bloqueie ou apague o notebook que a Marta perdeu" },
  inventario: { extra: ["Alertas de IA para garantias perto de vencer.", "Kits por cargo a partir do catálogo de cargos."], try: "Atribua um notebook novo para a Marta" },
  software: { extra: ["Shadow IT e ferramentas de IA identificadas e classificadas por risco.", "O One identifica as licenças que ninguém abre e as recupera em um clique."], try: "Quais licenças ninguém usou este mês?" },
  marketplace: { extra: ["Compre ou alugue dispositivos, com envio e coleta incluídos."] },
  integraciones: { extra: ["Conector MCP: qualquer assistente compatível usa a Factorial com as mesmas permissões do usuário.", "+70 integrações: ATS e portais de emprego, e-mail e calendários, ERP e ferramentas de BI."] }
};

FACTS['pt-br'] = {
  e: "Sobre nós",
  t: "A Factorial em números",
  d: "A Factorial foi fundada em Barcelona em 2016 para empresas de médio porte. Hoje levamos a IA ao sistema que faz a sua empresa funcionar, começando por RH, Finanças e TI.",
  items: [["+17.000", "clientes de todos os setores"], ["+1 mi", "de pessoas usam a Factorial todos os dias"], ["4,8/5", "de avaliação do nosso onboarding"], ["+450", "pessoas dedicadas aos nossos clientes"], ["+€ 20 mi", "investidos em produto todos os anos"], ["+€ 700 mi", "de investimento captado"]],
  note: "Escritórios em Barcelona, Madri, Munique e São Paulo · Suporte no Brasil, em português, por telefone, chamado e chat · Dados hospedados na UE"
};

FACTS['pt-br'].sec = { t: "Segurança e conformidade",
  certs: [["ISO/IEC 27001", "Sistema de gestão de segurança da informação"], ["SOC 2 Tipo I e II", "Controles de segurança auditados de forma independente"], ["ENS categoria alta", "Esquema Nacional de Segurança (Espanha)"]],
  items: ["Dados hospedados na UE (AWS Frankfurt).", "Em conformidade com o GDPR: a Factorial pode atuar como controladora ou operadora, com DPA e encarregado de proteção de dados.", "Em conformidade com o AI Act da UE: seus dados nunca são usados para treinar modelos de outros clientes.", "O One só vê e faz o que o cargo de cada pessoa permite.", "Acesso com SSO (Google, Microsoft, LinkedIn) e MFA por padrão.", "Revisão trimestral dos acessos e monitoramento contínuo."] };

HUBX.pl = {
  core: { tag: "Cała firma w jednym miejscu",
    lead: "HR, Finanse i IT pracują na tych samych aktualnych danych, podobnie jak One. Ludzie, dokumenty, polityki, komunikacja i analityka: fundament, na którym działa cała reszta.",
    pains: ["Koniec z czekaniem na czyjś raport: pytasz i dostajesz odpowiedź, a nie kolejną prośbę.", "Prośby nie giną już między e-mailami, wiadomościami i ręcznym przypominaniem.", "Polityki, które ludzie naprawdę czytają, z potwierdzeniami zapoznania gotowymi do audytu.", "Dokumenty podpisane bez gonienia kogokolwiek, z pełną mocą prawną."],
    stats: [{ n: "70+", t: "integracji, otwarte API i konektor MCP" }, { n: "UE", t: "dane w Europie, zgodność z RODO i unijnym AI Act" }],
    ask: "Porównaj nieobecności i wyniki moich zespołów" },
  tiempo: { tag: "Zautomatyzuj podstawy",
    lead: "Rejestracja czasu, grafiki i nieobecności w jednym kalendarzu. Rozliczaj nadgodziny i miej każdą godzinę gotową do listy płac i projektów.",
    pains: ["Ewidencja czasu pracy bez papierów i arkuszy.", "Nadgodziny rozliczane czasem wolnym lub w liście płac, bez ręcznych obliczeń.", "Brakujące wpisy i spóźnienia widoczne od razu, a nie na koniec miesiąca.", "Grafiki bez konfliktów, tworzone na podstawie godzin z umów, zasad odpoczynku i potrzebnej obsady."],
    stats: [{ n: "4", t: "sposoby rejestracji czasu: aplikacja, kod QR, numer pracownika i przeglądarka" }, { n: "∞", t: "polityk nieobecności, z wielopoziomową akceptacją" }],
    ask: "W każdy poniedziałek o 9:30 powiedz mi, kogo nie będzie w tym tygodniu" },
  finanzas: { tag: "Koszty pod kontrolą",
    lead: "Wydatki, karty i wnioski zakupowe w jednym miejscu, z kosztami ludzi zawsze zsynchronizowanymi. Wyślij One stertę paragonów, akceptuj w czacie i pytaj, ile kosztuje każdy zespół.",
    pains: ["Kontroluj wydatki, zanim się pojawią, od wniosku zakupowego po zapłaconą fakturę.", "Duplikaty i rozbieżności wyłapywane bez blokowania kogokolwiek.", "Koniec z papierowymi paragonami.", "Przeglądy wynagrodzeń, które mieszczą się w budżecie.", "Rzeczywisty koszt każdej osoby i każdego zespołu, jasny i aktualny."],
    stats: [{ n: "70+", t: "integracji z ERP, systemami płacowymi i nie tylko" }, { n: "1 miejsce", t: "na wydatki, zakupy, projekty i budżet" }],
    ask: "Ile w tym miesiącu kosztują nas pracownicy w podziale na zespoły?" },
  talento: { tag: "Buduj zespoły o wysokiej skuteczności",
    lead: "Zatrudniaj, rozwijaj i zatrzymuj właściwych ludzi, a One zajmie się administracją: zamienia CV w kandydatów, analizuje ankiety i transkrybuje każde 1:1.",
    pains: ["Sprawiedliwe oceny, z podsumowaniami AI samooceny, ocen współpracowników i menedżera.", "Plany szkoleń poza arkuszami, z kosztami pod kontrolą.", "Retencja: usłysz, co naprawdę mówi Twój zespół, a nie tylko wynik.", "Szybsza rekrutacja: One pisze ogłoszenie, porządkuje kandydatów i wykonuje pierwszy telefon.", "Zgodny z przepisami kanał dla sygnalistów, bez ryzyka kar."],
    stats: [{ n: "250+", t: "portali z ofertami pracy, w tym LinkedIn i Indeed" }, { n: "360°", t: "oceny, kaskadowe cele i 9-box" }],
    ask: "Co ludzie mówią w ankiecie zaangażowania w tym kwartale?" },
  it: { tag: "IT w zgodzie z HR",
    lead: "Urządzenia, aplikacje i dostępy automatycznie podążają za każdym zatrudnieniem, zmianą i odejściem. Potrzebujesz czegoś? Powiedz One: otworzy zgłoszenie, skieruje je do właściwego zespołu i najpierw odpowie na podstawie Twoich polityk.",
    pains: ["Każdy laptop skonfigurowany i zabezpieczony od pierwszego dnia.", "Koniec z płaceniem za licencje, których nikt nie otwiera.", "Shadow IT i narzędzia AI wykryte i uporządkowane według ryzyka.", "Gotowość do audytów ISO 27001, SOC 2 i RODO, z dokumentami przekazania zgodnymi z art. 21 dyrektywy NIS2."],
    stats: [{ n: "1 klik", t: "żeby odzyskać licencje, z których nikt nie korzysta" }, { n: "Zero-touch", t: "wdrażanie urządzeń, od macOS po ChromeOS" }],
    ask: "Zablokuj lub wyczyść laptopa, którego zgubiła Marta" },
  nomina: { tag: "Płace poprawne za pierwszym razem",
    lead: "Czas pracy, nieobecności i wydatki trafiają do listy płac automatycznie, więc błędy wyłapujesz przed dniem wypłaty, a nie po nim.",
    pains: ["Prowadzony, wspólny cykl płacowy, z Twoim biurem rachunkowym połączonym przez Factorial Professionals.", "Automatyczne wykrywanie błędów w składnikach wynagrodzeń i wynikach listy płac.", "Automatyczna dystrybucja pasków płacowych."],
    stats: [{ n: "70+", t: "integracji z systemami płacowymi, ERP i nie tylko" }],
    ask: "Czego brakuje, zanim zamkniemy listę płac za ten miesiąc?" }
};

MODX.pl = {
  desempeno: { extra: ["Podsumowania AI samooceny, ocen współpracowników i menedżera, żeby oceny były sprawiedliwe.", "Wykresy radarowe kompetencji i kaskadowe cele."], try: "Porównaj każdą osobę ze średnią jej zespołu" },
  formacion: { extra: ["Koszty szkoleń pod kontrolą, z alertami o wygasaniu i ponownej certyfikacji.", "Import SCORM, katalog kursów i automatyczne certyfikaty."], try: "Stwórz kurs i quiz na podstawie tego dokumentu" },
  engagement: { extra: ["Spotkania 1:1 wideo z transkrypcją AI i czatem do ich analizy.", "One analizuje wyniki ankiet, trendy i otwarte komentarze."], try: "Co ludzie mówią w ankiecie zaangażowania w tym kwartale?" },
  comunicaciones: { extra: ["Firmowy czat dla zespołów pierwszej linii: grupy według zespołu, zmiany lub lokalizacji, tworzone na podstawie struktury organizacyjnej.", "Tłumaczenie AI na pięć języków, wiadomości głosowe, wideo i potwierdzenia odczytu przy ważnych komunikatach."], try: "Wyślij wiadomość do porannej zmiany o piątkowym zamknięciu" },
  ats: { extra: ["AI Top Match: One porządkuje wszystkie aplikacje.", "Zamieniaj CV w kandydatów, także zeskanowane."], try: "Napisz ogłoszenie i uporządkuj kandydatów na stanowisko Designera" },
  canal: { extra: ["Komunikacja w obie strony, prowadzenie spraw i pełny dziennik audytu.", "Jeśli ktoś zgłosi problem w rozmowie z One, One kieruje go do kanału zamiast otwierać zgłoszenie."] },
  control: { extra: ["Rejestracja czasu przez aplikację, kod QR, numer pracownika lub przeglądarkę, z geolokalizacją i alertami geofencingu.", "Przerwy stałe, półelastyczne lub elastyczne oraz roczne saldo godzin."], try: "Popraw wszystkie problemy z rejestracją czasu z tego tygodnia" },
  turnos: { extra: ["Agent przeplanowania, który pomaga automatycznie obsadzać zmiany.", "Zamień plik Excel lub zrzut ekranu grafiku w zmiany z One, który poprosi Cię o potwierdzenie.", "Zamiana zmian w aplikacji, z akceptacją menedżera."], try: "Utwórz grafik na ten tydzień na podstawie tego pliku Excel" },
  ausencias: { extra: ["Opisz One swoje zasady naliczania, a Factorial je zastosuje: data zatrudnienia, zaokrąglenia i staż.", "Wielopoziomowa akceptacja, zastępstwa i okresy zablokowane."], try: "Zaakceptuj oczekujące wnioski urlopowe mojego zespołu" },
  plantilla: { extra: ["Porównuj wersje planu, żeby przeanalizować różne scenariusze.", "One przygotowuje plan na podstawie wytycznych firmy, w kilka minut zamiast kilku dni."] },
  proyectos: { extra: ["Marża na projekt, tablice Kanban i wykrywanie wąskich gardeł.", "Koszty w wielu walutach, praca fakturowana i niefakturowana, oferty i fakturowanie."], try: "Które projekty są opóźnione i jaką mają marżę?" },
  fpa: { extra: ["Wartości z umów, rzeczywiste płace i inne koszty ludzi w jednym widoku, w przeliczeniu na etat (FTE).", "Masowe przypisywanie centrów kosztów z One."], try: "Jaki jest nasz koszt na etat w Operacjach?" },
  gastos: { extra: ["Karty Factorial: wirtualne, fizyczne i w portfelu telefonu.", "Cyfrowe paragony i zwrot w ramach listy płac."], try: "Zaakceptuj oczekujące wydatki mojego zespołu" },
  compras: { extra: ["Odczyt faktur przez AI prosto z e-maila i uzgadnianie bankowe z AI.", "Rejestracja dostawców i podpisywanie umów."], try: "Utwórz wniosek zakupowy na podstawie tej oferty" },
  revision: { extra: ["Pule budżetowe ze śledzeniem kosztu w czasie rzeczywistym.", "Finanse widzą masę płacową według podmiotu, bez dostępu do indywidualnych wynagrodzeń."], try: "Zaproponuj podwyżki i awanse dla mojego zespołu" },
  politicas: { extra: ["Publikuj według podmiotu, lokalizacji, zespołu lub roli, ze śledzeniem potwierdzeń zapoznania i przypomnieniami.", "Zamieniaj polityki w PDF w polityki w Factorial i zobacz, na co One nie umiał odpowiedzieć."], try: "Która polityka wydatków na podróże mnie obowiązuje?" },
  portal: { extra: ["Rejestracja czasu, dzisiejsze zadania i kto jest obecny, od razu na ekranie głównym.", "Jedna skrzynka na akceptacje, wnioski i dokumenty do podpisu."], try: "Co mam dziś do zrobienia?" },
  onoff: { extra: ["Welcome Space: dokumenty podpisane przed pierwszym dniem.", "Alerty o końcu okresu próbnego, urodzinach i wygasających dokumentach."], try: "Utwórz politykę onboardingu dla zespołu sklepów" },
  documentos: { extra: ["Paski płacowe wysyłane automatycznie, z masową dystrybucją.", "Foldery wspólne i prywatne, z uprawnieniami na poziomie folderu."], try: "Gdzie jest ostatnia umowa Laury?" },
  firma: { extra: ["Kwalifikowany podpis elektroniczny z Signaturit: z mocą prawną, kolejnością podpisów i masowymi przypomnieniami."] },
  analiticas: { extra: ["Wskaźniki takie jak luka płacowa między płciami, rotacja i awanse, zawsze definiowane tak samo.", "One wskazuje, co się wyróżnia, i proponuje kolejny krok: otworzyć rekrutację, wysłać ankietę lub przypisać szkolenie."], try: "Utwórz raport zatrudnienia za ostatni kwartał" },
  tickets: { extra: ["Auto Resolver zamyka powtarzalne prośby od początku do końca, z akceptacją człowieka.", "Monitorowanie SLA, alerty i analityka rozwiązywania zgłoszeń."], try: "Potrzebuję nowego laptopa" },
  mdm: { extra: ["Szyfrowanie dysku oraz polityki haseł, aktualizacji i CIS.", "Ochrona urządzeń końcowych z SentinelOne."], try: "Zablokuj lub wyczyść laptopa, którego zgubiła Marta" },
  inventario: { extra: ["Alerty AI o kończących się gwarancjach.", "Zestawy sprzętu według roli z katalogu stanowisk."], try: "Przypisz Marcie nowego laptopa" },
  software: { extra: ["Shadow IT i narzędzia AI wykryte i uporządkowane według ryzyka.", "One wyłapuje licencje, których nikt nie otwiera, i odzyskuje je jednym kliknięciem."], try: "Z których licencji nikt nie korzystał w tym miesiącu?" },
  integraciones: { extra: ["Konektor MCP: każdy zgodny asystent korzysta z Factorial z tymi samymi uprawnieniami co użytkownik.", "70+ integracji: ATS i portale z ofertami pracy, e-mail i kalendarze, ERP i narzędzia BI."] }
};

FACTS.pl = {
  e: "O nas",
  t: "Factorial w liczbach",
  d: "Factorial powstał w Barcelonie w 2016 roku dla średnich firm w całej Europie. Dziś wbudowujemy AI w system, na którym działa Twoja firma, zaczynając od HR, Finansów i IT.",
  items: [["17 000+", "klientów ze wszystkich branż"], ["1 mln+", "osób korzysta z Factorial każdego dnia"], ["4,8/5", "ocena naszego onboardingu"], ["450+", "osób dba o naszych klientów"], ["20 mln €+", "inwestujemy co roku w produkt"], ["700 mln €+", "pozyskanego finansowania"]],
  note: "Biura w Barcelonie, Madrycie i Monachium · Wsparcie przez telefon, zgłoszenia i czat w maksymalnie 7 językach · Dane w UE"
};

FACTS.pl.sec = { t: "Bezpieczeństwo i zgodność",
  certs: [["ISO/IEC 27001", "System zarządzania bezpieczeństwem informacji"], ["SOC 2 Typ I i II", "Niezależnie audytowane mechanizmy bezpieczeństwa"], ["ENS, kategoria wysoka", "Krajowy schemat bezpieczeństwa (Hiszpania)"]],
  items: ["Dane przechowywane w UE (AWS Frankfurt).", "Zgodność z RODO: Factorial może działać jako administrator lub podmiot przetwarzający, z umową powierzenia (DPA) i inspektorem ochrony danych.", "Zgodność z unijnym AI Act: Twoje dane nigdy nie służą do trenowania modeli dla innych klientów.", "One widzi i robi tylko to, na co pozwala rola każdej osoby.", "Logowanie przez SSO (Google, Microsoft, LinkedIn) i domyślnie MFA.", "Kwartalne przeglądy dostępów i ciągły monitoring."] };

/* módulos que no se ofrecen en cada mercado: no aparecen en el mapa ni en los paneles */
const HIDE = { pl: ['beneficios', 'anticipo', 'marketplace'], 'pt-br': ['beneficios', 'anticipo'], en: ['beneficios', 'anticipo'], de: ['beneficios', 'anticipo'], fr: ['beneficios'], it: ['beneficios', 'anticipo'] };

/* Textos de la página en español que usa el creador de pitch (deck/). En el mapa, el español sale del HTML de index.html: si cambias allí un título, cámbialo también aquí. */
const UI_ES_PAGE = {
 "allin": "All in One",
 "h1": "One ya conoce tu empresa",
 "sub": "Todos los módulos de Factorial comparten el mismo dato. One trabaja encima de todos ellos, con tus permisos y tus políticas.",
 "navWhy": "IA para empresas",
 "s2t": "Tus equipos ya usan IA. Que sea la tuya.",
 "s2d": "Lo que cambia no es la tecnología, es el contexto. Y con datos de personas, la confianza no es negociable.",
 "cmpHead": "<tr><th></th><th>IA genérica</th><th>One</th></tr>",
 "cmpBody": "<tr><td>Contexto</td><td>Empieza en blanco cada vez. El contexto lo pegas tú.</td><td>Conectado a tus datos de Factorial y a las herramientas que conectes desde el primer mensaje.</td></tr>\n      <tr><td>Permisos</td><td>No sabe quién debe ver qué.</td><td>Cada persona solo ve lo que su rol le permite. Mismos roles, nada nuevo expuesto.</td></tr>\n      <tr><td>Cumplimiento</td><td>Sin garantías en la UE.</td><td>Conforme con el RGPD y el Reglamento de IA de la UE, alojado en la UE.</td></tr>\n      <tr><td>Fiabilidad</td><td>Se inventa respuestas sin avisar.</td><td>Responde con tus datos y muestra la fuente. Si no lo sabe, lo dice.</td></tr>\n      <tr><td>Control</td><td>Coste y acciones opacos.</td><td>Tú decides qué agentes se ejecutan y ves cada acción y lo que ha costado.</td></tr>",
 "ctaT": "¿Vemos tu ciclo completo con tus propios datos?",
 "ctaD": "Mapeamos tu plantilla, tu proceso de selección y tu política salarial, y te enseñamos el mismo flujo dentro de Factorial, con One trabajando en cada paso."
};
