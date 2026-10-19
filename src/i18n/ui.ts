export const defaultLang = "es";

export const languages = [
  { code: "es", label: "Español", short: "ES" },
  { code: "en", label: "English", short: "EN" },
] as const;

export type Lang = (typeof languages)[number]["code"];

const es = {
  meta: {
    title: "Francisco Ferrández · Ingeniero informático",
    description:
      "Francisco Ferrández, ingeniero informático en Castellón. Desarrollo backend con Java, Spring Boot y .NET, y automatizo despliegues.",
  },
  seo: {
    jobTitle: "Analista de software",
    ogAlt: "Francisco Ferrández · Backend & CI/CD",
  },
  notFound: {
    title: "Página no encontrada · Francisco Ferrández",
    description: "Esta página no existe.",
    heading: "Esta página no existe",
    text: "Puede que el enlace esté mal escrito o que la página se haya movido.",
    cta: "Volver al inicio",
  },
  nav: {
    about: "Sobre mí",
    experience: "Experiencia",
    projects: "Proyectos",
    stack: "Stack",
    contact: "Contacto",
    menu: "Abrir menú",
    theme: "Cambiar tema",
    language: "Cambiar idioma",
  },
  hero: {
    eyebrow: "Ingeniero informático · Castellón",
    role: "Backend & CI/CD",
    tagline:
      "Desarrollo servicios backend con Java y .NET, y automatizo cómo llegan a producción.",
    status: "Analista de software en la GISS",
    ctaPrimary: "Hablemos",
    ctaSecondary: "Ver experiencia",
  },
  about: {
    title: "Sobre mí",
    paragraphs: [
      "Soy ingeniero informático por la Universidad de Alicante. Me gusta construir software y, sobre todo, automatizar: si algo se repite, acabo convirtiéndolo en un script.",
      "Empecé dando soporte IT en una fábrica, pasé al desarrollo full stack con Angular y .NET y después al backend en Azure. Desde junio de 2026 soy analista de software en la Gerencia Informática de la Seguridad Social, en Castellón, tras aprobar la oposición.",
      "Soy resolutivo, comunicativo y curioso. Disfruto trabajando en equipo y aprendiendo algo nuevo en cada proyecto.",
    ],
    facts: [
      { label: "Experiencia", value: "4+ años" },
      { label: "Formación", value: "Ing. Informática · UA (2019–2023)" },
      { label: "Idiomas", value: "ES · VA (C1) · EN (B1)" },
      { label: "Ubicación", value: "Castellón" },
    ],
  },
  experience: {
    title: "Experiencia",
    items: [
      {
        company: "Gerencia Informática de la Seguridad Social (GISS)",
        role: "Analista de software",
        place: "Unidad Provincial de Informática · Castellón",
        period: "jun 2026 — actualidad",
        description:
          "Desarrollo servicios con Spring Boot y mantengo los pipelines de integración y despliegue con Jenkins y Nexus.",
        stack: ["Java", "Spring Boot", "Jenkins", "Nexus"],
      },
      {
        company: "GS Gestión Fintech Apps",
        role: "Desarrollador backend",
        place: "En remoto",
        period: "ene 2025 — feb 2026",
        description:
          "Migré a Azure varias APIs bancarias (open banking, panel de administración y envío de ficheros) y las puse en producción en diciembre de 2025.",
        stack: [".NET Core", "Entity Framework", "Azure"],
      },
      {
        company: "Akra Informática Coop. V.",
        role: "Desarrollador de software",
        place: "Alicante · Híbrido",
        period: "ene 2023 — dic 2024",
        description:
          "Desarrollé un ERP web, una API de informes, facturación electrónica y automatización del correo. Participé desde el análisis hasta la atención al cliente.",
        stack: ["Angular", ".NET", "Spring Boot", "Docker"],
      },
      {
        company: "Smurfit Kappa",
        role: "Técnico de TI · Prácticas",
        place: "San Vicente del Raspeig",
        period: "jun 2022 — dic 2022",
        description:
          "Soporte informático en una fábrica de más de 150 trabajadores. También desarrollé una aplicación para registrar la lectura de códigos.",
        stack: ["Windows", "LAN/WAN", "Active Directory"],
      },
    ],
  },
  projects: {
    title: "Proyectos",
    intro: "Lo que he construido, por empresa.",
    source: "Ver código",
    problem: "Problema",
    solution: "Solución",
    groups: [
      {
        id: "gs",
        tab: "GS Gestión",
        company: "GS Gestión Fintech Apps",
        period: "2025 — 2026",
        note: "APIs .NET migradas a Azure y en producción desde diciembre de 2025.",
        items: [
          {
            title: "OpenBanking API",
            problem: "La API de open banking seguía en la infraestructura antigua y había que llevarla a la nube.",
            solution: "La migré a .NET en Azure, con consultas OData y migraciones de base de datos desde el código.",
            stack: [".NET Core", "Entity Framework", "OData", "Azure"],
          },
          {
            title: "PanelAdmin API",
            problem: "El panel de administración de clientes necesitaba un backend en Azure con permisos más finos.",
            solution: "Migré la API y la protegí con autorización por scopes. Se alimenta de OpenBanking API.",
            stack: [".NET Core", "OData", "Azure"],
          },
          {
            title: "BankFileSender API",
            problem: "Había que enviar ficheros a los bancos y avisar por correo de cada envío.",
            solution: "Una API en Azure que envía los ficheros y delega los avisos en una librería de correo compartida.",
            stack: [".NET Core", "Azure"],
          },
          {
            title: "Azure Functions",
            problem: "Tareas pequeñas y recurrentes que no justificaban una API propia.",
            solution: "Funciones independientes: un bróker que envía correos desde una cola, la sincronización de divisas y el traspaso de datos.",
            stack: ["Azure Functions", "Azure Pipelines", ".NET"],
          },
          {
            title: "Servicios bancarios",
            problem: "El intercambio de ficheros con los bancos (EDITRAN) y un gestor de automatizaciones web seguían en la plataforma antigua.",
            solution: "Migré los dos servicios. EDITRAN está en producción desde diciembre de 2025.",
            stack: [".NET", "EDITRAN"],
          },
        ],
      },
      {
        id: "akra",
        tab: "Akra",
        company: "Akra Informática",
        period: "2023 — 2024",
        note: "Software de gestión y facturación para pymes.",
        items: [
          {
            title: "SGIWeb",
            problem: "Cada pantalla del ERP repetía la misma lógica para editar datos, ya fuera en formularios o en modales.",
            solution: "Diseñé una base de componentes reutilizables: la misma pieza sirve para editar en línea o en un modal.",
            stack: ["Angular", ".NET", "Docker"],
          },
          {
            title: "API de informes",
            problem: "El ERP necesitaba sacar informes en distintos formatos.",
            solution: "Una API con Spring Boot y JasperReports que genera informes en PDF, Excel o lo que haga falta.",
            stack: ["Spring Boot", "JasperReports", "Docker"],
          },
          {
            title: "AkraFACe",
            problem: "Quien factura a la Administración tiene que enviar facturas electrónicas firmadas a través de FACe.",
            solution: "Una aplicación que toma los datos del programa de facturación, genera la factura FACe y la firma con certificado digital.",
            stack: ["WinForms", ".NET"],
          },
          {
            title: "AkraVeriFactu",
            problem: "VeriFactu obliga al software de facturación a generar registros y enviarlos a la Agencia Tributaria.",
            solution: "Una plataforma que gestiona esos registros y los presenta, para que los clientes cumplan sin complicaciones.",
            stack: [".NET"],
          },
          {
            title: "MailManager",
            problem: "Responder a mano correos repetitivos consumía mucho tiempo.",
            solution: "Un servicio de Windows que lee el correo de Outlook, responde con plantillas y registra cada respuesta.",
            stack: [".NET", "Entra ID"],
          },
          {
            title: "Módulos a medida",
            problem: "Aplicaciones ya en producción necesitaban una agenda y un stock fiable entre puntos de venta.",
            solution: "Un calendario que coloca los eventos como Google Calendar y una sincronización de TPV con el servidor central para recalcular el stock.",
            stack: ["Visual Basic", "C#"],
          },
        ],
      },
      {
        id: "personal",
        tab: "Personal",
        company: "Personal",
        period: "",
        note: "Proyectos propios y de la universidad.",
        items: [
          {
            title: "Este portfolio",
            problem: "Quería una web propia para enseñar mi trabajo y aprender SEO con un caso real.",
            solution: "Esta web: hecha con Astro, bilingüe, con modo claro y oscuro y publicada automáticamente en GitHub Pages.",
            stack: ["Astro", "Tailwind CSS", "TypeScript"],
            href: "https://github.com/franferrandez/franferrandez.github.io",
          },
          {
            title: "GAN · TFG",
            problem: "Mi Trabajo de Fin de Grado consistía en entender y entrenar redes generativas antagónicas (GAN).",
            solution: "Scripts y notebooks en Python con los experimentos que hice en la Universidad de Alicante.",
            stack: ["Python", "Jupyter"],
            href: "https://github.com/franferrandez/GAN-TFG",
          },
        ],
      },
    ],
  },
  stack: {
    title: "Stack",
    intro: "Tecnologías que uso y el nivel que tengo en cada una.",
    now: { label: "Ahora en la GISS", items: ["Java", "Spring Boot", "Jenkins", "Nexus"] },
    groups: {
      languages: "Lenguajes",
      frameworks: "Frameworks",
      databases: "Bases de datos",
      cloud: "Cloud y APIs",
      tools: "Herramientas",
      os: "Sistemas operativos",
    },
    levels: [
      { name: "Básico", text: "Lo conozco de la universidad." },
      { name: "Medio", text: "Lo he usado en proyectos pequeños o personales." },
      { name: "Alto", text: "Lo he usado en proyectos grandes." },
    ],
  },
  contact: {
    title: "¿Hablamos?",
    text: "¿Tienes un proyecto en mente o quieres hablar de backend y automatización? Escríbeme.",
    cta: "Escríbeme",
    copy: "Copiar email",
    copied: "¡Copiado!",
  },
  footer: {
    rights: "Francisco Ferrández Martínez",
    built: "Hecho con Astro y Tailwind CSS",
    top: "Volver arriba",
  },
};

type Content = typeof es;

const en: Content = {
  meta: {
    title: "Francisco Ferrández · Software engineer",
    description:
      "Francisco Ferrández, software engineer in Castellón, Spain. I build backends with Java, Spring Boot and .NET, and automate deployments.",
  },
  seo: {
    jobTitle: "Software analyst",
    ogAlt: "Francisco Ferrández · Backend & CI/CD",
  },
  notFound: {
    title: "Page not found · Francisco Ferrández",
    description: "This page does not exist.",
    heading: "This page doesn't exist",
    text: "The link may be mistyped or the page may have moved.",
    cta: "Back to home",
  },
  nav: {
    about: "About",
    experience: "Experience",
    projects: "Projects",
    stack: "Stack",
    contact: "Contact",
    menu: "Open menu",
    theme: "Toggle theme",
    language: "Change language",
  },
  hero: {
    eyebrow: "Software engineer · Castellón, Spain",
    role: "Backend & CI/CD",
    tagline:
      "I build backend services with Java and .NET, and automate how they get to production.",
    status: "Software analyst at GISS",
    ctaPrimary: "Get in touch",
    ctaSecondary: "See experience",
  },
  about: {
    title: "About",
    paragraphs: [
      "I studied Computer Engineering at the University of Alicante. I love building software and, above all, automating: if something repeats, I end up turning it into a script.",
      "I started in IT support at a factory, moved to full stack development with Angular and .NET, and then to backend work on Azure. Since June 2026 I've been a software analyst at GISS, the Spanish Social Security IT agency, in Castellón, after passing the civil service exam.",
      "I'm proactive, communicative and curious. I enjoy working in teams and learning something new on every project.",
    ],
    facts: [
      { label: "Experience", value: "4+ years" },
      { label: "Education", value: "Computer Eng. · UA (2019–2023)" },
      { label: "Languages", value: "ES · VA (C1) · EN (B1)" },
      { label: "Based in", value: "Castellón" },
    ],
  },
  experience: {
    title: "Experience",
    items: [
      {
        company: "Gerencia Informática de la Seguridad Social (GISS)",
        role: "Software analyst",
        place: "Provincial IT Unit · Castellón",
        period: "Jun 2026 — present",
        description:
          "I build services with Spring Boot and maintain the CI/CD pipelines with Jenkins and Nexus.",
        stack: ["Java", "Spring Boot", "Jenkins", "Nexus"],
      },
      {
        company: "GS Gestión Fintech Apps",
        role: "Backend developer",
        place: "Remote",
        period: "Jan 2025 — Feb 2026",
        description:
          "I moved several banking APIs to Azure (open banking, admin panel and file transfers) and took them to production in December 2025.",
        stack: [".NET Core", "Entity Framework", "Azure"],
      },
      {
        company: "Akra Informática Coop. V.",
        role: "Software developer",
        place: "Alicante · Hybrid",
        period: "Jan 2023 — Dec 2024",
        description:
          "I built a web ERP, a reporting API, e-invoicing tools and email automation, from analysis to customer support.",
        stack: ["Angular", ".NET", "Spring Boot", "Docker"],
      },
      {
        company: "Smurfit Kappa",
        role: "IT technician · Internship",
        place: "San Vicente del Raspeig",
        period: "Jun 2022 — Dec 2022",
        description:
          "IT support at a factory with over 150 workers. I also built an app to log barcode scans.",
        stack: ["Windows", "LAN/WAN", "Active Directory"],
      },
    ],
  },
  projects: {
    title: "Projects",
    intro: "What I've built, by company.",
    source: "View code",
    problem: "Problem",
    solution: "Solution",
    groups: [
      {
        id: "gs",
        tab: "GS Gestión",
        company: "GS Gestión Fintech Apps",
        period: "2025 — 2026",
        note: ".NET APIs moved to Azure and live since December 2025.",
        items: [
          {
            title: "OpenBanking API",
            problem: "The open banking API was still on the old infrastructure and had to move to the cloud.",
            solution: "I migrated it to .NET on Azure, with OData queries and code-first database migrations.",
            stack: [".NET Core", "Entity Framework", "OData", "Azure"],
          },
          {
            title: "PanelAdmin API",
            problem: "The customer admin panel needed an Azure backend with finer-grained permissions.",
            solution: "I migrated the API and secured it with scope-based authorisation. It's fed by OpenBanking API.",
            stack: [".NET Core", "OData", "Azure"],
          },
          {
            title: "BankFileSender API",
            problem: "Files had to be sent to banks, with an email notification for each one.",
            solution: "An Azure API that sends the files and hands notifications off to a shared email library.",
            stack: [".NET Core", "Azure"],
          },
          {
            title: "Azure Functions",
            problem: "Small recurring jobs that didn't justify an API of their own.",
            solution: "Standalone functions: a broker that sends emails from a queue, currency syncing and data hand-off.",
            stack: ["Azure Functions", "Azure Pipelines", ".NET"],
          },
          {
            title: "Banking services",
            problem: "The bank file exchange (EDITRAN) and a web automation manager were still on the old platform.",
            solution: "I migrated both services. EDITRAN has been in production since December 2025.",
            stack: [".NET", "EDITRAN"],
          },
        ],
      },
      {
        id: "akra",
        tab: "Akra",
        company: "Akra Informática",
        period: "2023 — 2024",
        note: "Business and invoicing software for small companies.",
        items: [
          {
            title: "SGIWeb",
            problem: "Every ERP screen repeated the same data editing logic, whether in forms or in modals.",
            solution: "I designed a set of reusable components: the same piece handles inline and modal editing.",
            stack: ["Angular", ".NET", "Docker"],
          },
          {
            title: "Reporting API",
            problem: "The ERP needed reports in several formats.",
            solution: "A Spring Boot and JasperReports API that produces reports as PDF, Excel or whatever is needed.",
            stack: ["Spring Boot", "JasperReports", "Docker"],
          },
          {
            title: "AkraFACe",
            problem: "Anyone invoicing the Spanish public sector must submit signed e-invoices through FACe.",
            solution: "An app that takes data from the invoicing software, creates the FACe invoice and signs it with a digital certificate.",
            stack: ["WinForms", ".NET"],
          },
          {
            title: "AkraVeriFactu",
            problem: "Spain's VeriFactu rules require invoicing software to create records and send them to the Tax Agency.",
            solution: "A platform that manages and submits those records, so customers stay compliant without hassle.",
            stack: [".NET"],
          },
          {
            title: "MailManager",
            problem: "Answering repetitive emails by hand took a lot of time.",
            solution: "A Windows service that reads Outlook mail, replies from templates and logs every reply.",
            stack: [".NET", "Entra ID"],
          },
          {
            title: "Custom modules",
            problem: "Apps already in production needed a calendar and reliable stock across points of sale.",
            solution: "A calendar that lays out events like Google Calendar, and a POS sync with the central server to recalculate stock.",
            stack: ["Visual Basic", "C#"],
          },
        ],
      },
      {
        id: "personal",
        tab: "Personal",
        company: "Personal",
        period: "",
        note: "Side projects and university work.",
        items: [
          {
            title: "This portfolio",
            problem: "I wanted my own site to show my work and learn SEO on a real case.",
            solution: "This site: built with Astro, bilingual, with light and dark themes and deployed automatically to GitHub Pages.",
            stack: ["Astro", "Tailwind CSS", "TypeScript"],
            href: "https://github.com/franferrandez/franferrandez.github.io",
          },
          {
            title: "GAN · Thesis",
            problem: "My Bachelor's thesis was about understanding and training generative adversarial networks (GANs).",
            solution: "Python scripts and notebooks with the experiments I ran at the University of Alicante.",
            stack: ["Python", "Jupyter"],
            href: "https://github.com/franferrandez/GAN-TFG",
          },
        ],
      },
    ],
  },
  stack: {
    title: "Stack",
    intro: "The tools I use and how well I know each one.",
    now: { label: "Currently at GISS", items: ["Java", "Spring Boot", "Jenkins", "Nexus"] },
    groups: {
      languages: "Languages",
      frameworks: "Frameworks",
      databases: "Databases",
      cloud: "Cloud & APIs",
      tools: "Tools",
      os: "Operating systems",
    },
    levels: [
      { name: "Basic", text: "I know it from university." },
      { name: "Intermediate", text: "I've used it in small or personal projects." },
      { name: "Advanced", text: "I've used it in large projects." },
    ],
  },
  contact: {
    title: "Let's talk",
    text: "Got a project in mind or want to talk backend and automation? Drop me a line.",
    cta: "Email me",
    copy: "Copy email",
    copied: "Copied!",
  },
  footer: {
    rights: "Francisco Ferrández Martínez",
    built: "Built with Astro and Tailwind CSS",
    top: "Back to top",
  },
};

export const content: Record<Lang, Content> = { es, en };

type Level = 1 | 2 | 3;

// Nivel: 1 básico · 2 medio · 3 alto (escala del CV)
export const skills: { group: keyof Content["stack"]["groups"]; items: [string, Level][] }[] = [
  { group: "languages", items: [["C#", 3], ["JavaScript", 3], ["Java", 2], ["Python", 2], ["C++", 2]] },
  { group: "frameworks", items: [[".NET Core", 3], ["Angular", 3], ["Astro", 2], ["WordPress", 2], ["Laravel", 1]] },
  { group: "databases", items: [["SQL Server", 3], ["MySQL", 3], ["Oracle", 2], ["MongoDB", 1]] },
  { group: "cloud", items: [["Azure", 2], ["API REST", 2], ["SOAP", 2]] },
  { group: "tools", items: [["Git", 3], ["Docker", 2], ["Kubernetes", 1]] },
  { group: "os", items: [["Windows", 3], ["Linux", 3], ["macOS", 2]] },
];

export const analytics = {
  // Token público de Cloudflare Web Analytics (vacío = desactivado)
  cloudflareToken: "9b5cb1522f774359be90e0ac54f6aed6",
};

export const profile = {
  name: "Francisco Ferrández",
  email: "franciscoferrandezmartinez@gmail.com",
  github: "https://github.com/franferrandez",
  linkedin: "https://www.linkedin.com/in/franferrandez/",
};
