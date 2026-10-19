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
      "Portfolio de Francisco Ferrández: ingeniero informático especializado en backend (.NET, Spring Boot) y pipelines de CI/CD.",
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
    eyebrow: "Ingeniero informático · Castellón, España",
    role: "Backend & CI/CD",
    tagline:
      "Construyo servicios backend con .NET y Spring Boot y automatizo su camino a producción con pipelines de integración y despliegue continuo.",
    status: "Analista de software · Gerencia Informática de la Seguridad Social",
    ctaPrimary: "Hablemos",
    ctaSecondary: "Ver experiencia",
  },
  about: {
    title: "Sobre mí",
    photoAlt: "Retrato de Francisco Ferrández sonriendo, con camisa azul claro",
    paragraphs: [
      "Soy ingeniero informático por la Universidad de Alicante y me apasionan el desarrollo de software y la automatización de procesos: cualquier tarea repetitiva es candidata a convertirse en un script o en un pipeline.",
      "He pasado por el soporte IT en industria, el desarrollo full stack con Angular y .NET y el desarrollo backend en la nube con Azure. Desde junio de 2026 soy analista de software en la Gerencia Informática de la Seguridad Social (GISS) en Castellón, tras aprobar la oposición de Gestión de Sistemas e Informática.",
      "Me considero una persona resolutiva, comunicativa e inquieta. Disfruto trabajando en equipo y aprendiendo algo nuevo en cada proyecto.",
    ],
    facts: [
      { label: "Experiencia", value: "4+ años" },
      { label: "Formación", value: "Ing. Informática · UA (2019–2023)" },
      { label: "Idiomas", value: "ES · VA (C1) · EN (B1)" },
      { label: "Base", value: "Castellón" },
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
          "Desarrollo de servicios backend con Spring Boot y gestión de pipelines de integración y despliegue continuo con Jenkins y Nexus.",
        stack: ["Java", "Spring Boot", "Jenkins", "Nexus"],
      },
      {
        company: "GS Gestión Fintech Apps",
        role: "Desarrollador backend",
        place: "En remoto",
        period: "ene 2025 — feb 2026",
        description:
          "Migración a Azure de las APIs de open banking, panel de administración y envío de ficheros bancarios, en producción desde diciembre de 2025. Azure Functions, pipelines de despliegue y servicios de intercambio de ficheros bancarios.",
        stack: [".NET Core", "Entity Framework", "Azure"],
      },
      {
        company: "Akra Informática Coop. V.",
        role: "Desarrollador de software",
        place: "Alicante · Híbrido",
        period: "ene 2023 — dic 2024",
        description:
          "ERP web basado en building blocks reutilizables, API de generación de informes, facturación electrónica con firma mediante certificado y automatización del correo. Análisis de requisitos, implementación y atención al cliente.",
        stack: ["Angular", ".NET", "Spring Boot", "Docker"],
      },
      {
        company: "Smurfit Kappa",
        role: "Técnico de TI · Prácticas",
        place: "San Vicente del Raspeig",
        period: "jun 2022 — dic 2022",
        description:
          "Soporte informático en una fábrica de 20.000 m² con más de 150 trabajadores y desarrollo de una solución centralizada para registrar el picado automático de códigos.",
        stack: ["Windows", "LAN/WAN", "Active Directory"],
      },
    ],
  },
  projects: {
    title: "Proyectos",
    intro: "Lo que he construido, agrupado por empresa.",
    source: "Ver código",
    groups: [
      {
        id: "gs",
        tab: "GS Gestión",
        company: "GS Gestión Fintech Apps",
        period: "2025 — 2026",
        note: "APIs .NET por capas (API, Data y Test) migradas a Azure y puestas en producción en diciembre de 2025.",
        items: [
          {
            title: "OpenBanking API",
            description:
              "API de comunicación bancaria que centraliza los datos de open banking. Consultas OData sobre Entity Framework y migraciones de esquema gestionadas por código.",
            stack: [".NET Core", "Entity Framework", "OData", "Azure"],
          },
          {
            title: "PanelAdmin API",
            description:
              "Backend del panel de administración de productos de clientes, con autorización por scopes e integración con OpenBanking API.",
            stack: [".NET Core", "OData", "Azure"],
          },
          {
            title: "BankFileSender API",
            description:
              "API para el envío de ficheros bancarios, que delega las notificaciones por correo en una librería compartida.",
            stack: [".NET Core", "Azure"],
          },
          {
            title: "Azure Functions",
            description:
              "Funciones para tareas concretas: un bróker que consume una cola de correos y los envía, la sincronización de referencias y divisas, y el traspaso de datos para el lector de PDF.",
            stack: ["Azure Functions", "Azure Pipelines", ".NET"],
          },
          {
            title: "Servicios bancarios",
            description:
              "Migración del servicio de intercambio de ficheros bancarios EDITRAN y de un gestor de automatizaciones web.",
            stack: [".NET", "EDITRAN"],
          },
        ],
      },
      {
        id: "akra",
        tab: "Akra",
        company: "Akra Informática",
        period: "2023 — 2024",
        note: "Software de gestión y facturación para pymes, desde el análisis de requisitos hasta la atención al cliente.",
        items: [
          {
            title: "SGIWeb",
            description:
              "ERP web construido sobre building blocks reutilizables: los mismos componentes sirven para editar datos en formularios in-line o en modales.",
            stack: ["Angular", ".NET", "Docker"],
          },
          {
            title: "API de informes",
            description:
              "API que interopera con el ERP para generar informes en PDF, Excel o el formato que se necesite.",
            stack: ["Spring Boot", "JasperReports", "Docker"],
          },
          {
            title: "AkraFACe",
            description:
              "Consume los datos de los programas de facturación y genera facturas electrónicas en formato FACe, con firma mediante certificado electrónico.",
            stack: ["WinForms", ".NET"],
          },
          {
            title: "AkraVeriFactu",
            description:
              "Gestión y presentación de registros de facturación conforme a la normativa VeriFactu de la Agencia Tributaria.",
            stack: [".NET"],
          },
          {
            title: "MailManager",
            description:
              "Servicio de Windows multiinstancia que lee el correo de Outlook con un token de Microsoft Entra ID, responde automáticamente mediante plantillas y registra cada respuesta.",
            stack: [".NET", "Entra ID"],
          },
          {
            title: "Módulos a medida",
            description:
              "Un calendario estilo Google Calendar y Keep que replica su algoritmo de colocación de eventos, y la sincronización de TPV con un servidor central para recalcular el stock.",
            stack: ["Visual Basic", "C#"],
          },
        ],
      },
      {
        id: "personal",
        tab: "Personal",
        company: "Personal",
        period: "",
        note: "Proyectos propios y académicos.",
        items: [
          {
            title: "Este portfolio",
            description:
              "Web estática bilingüe con modo claro y oscuro, animaciones accesibles y despliegue continuo en GitHub Pages.",
            stack: ["Astro", "Tailwind CSS", "TypeScript"],
            href: "https://github.com/franferrandez/franferrandez.github.io",
          },
          {
            title: "GAN · TFG",
            description:
              "Scripts y notebooks de mi Trabajo de Fin de Grado en la Universidad de Alicante sobre redes generativas antagónicas.",
            stack: ["Python", "Jupyter"],
            href: "https://github.com/franferrandez/GAN-TFG",
          },
        ],
      },
    ],
  },
  stack: {
    title: "Stack",
    intro: "Mis competencias técnicas y el nivel que tengo en cada una.",
    now: { label: "Ahora en la GISS", items: ["Java", "Spring Boot", "Jenkins", "Nexus"] },
    groups: {
      languages: "Lenguajes",
      frameworks: "Frameworks",
      databases: "Bases de datos",
      cloud: "Cloud y arquitecturas",
      tools: "Herramientas",
      os: "Sistemas operativos",
    },
    levels: [
      { name: "Básico", text: "Conocimientos teóricos y académicos, puestos en práctica en la universidad." },
      { name: "Medio", text: "Experiencia práctica en proyectos pequeños o personales." },
      { name: "Alto", text: "Experiencia probada en proyectos grandes." },
    ],
  },
  contact: {
    title: "¿Hablamos?",
    text: "Siempre abierto a conversar sobre backend, automatización o cualquier proyecto interesante.",
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
      "Portfolio of Francisco Ferrández: software engineer focused on backend (.NET, Spring Boot) and CI/CD pipelines.",
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
      "I build backend services with .NET and Spring Boot and automate their path to production with continuous integration and delivery pipelines.",
    status: "Software analyst · GISS (Spanish Social Security IT)",
    ctaPrimary: "Get in touch",
    ctaSecondary: "See experience",
  },
  about: {
    title: "About",
    photoAlt: "Portrait of Francisco Ferrández smiling, wearing a light blue shirt",
    paragraphs: [
      "I hold a degree in Computer Engineering from the University of Alicante and I'm passionate about software development and process automation: any repetitive task is a candidate to become a script or a pipeline.",
      "I've worked in industrial IT support, full stack development with Angular and .NET, and cloud backend development on Azure. Since June 2026 I've been a software analyst at the Gerencia Informática de la Seguridad Social (GISS), the Spanish Social Security IT agency, in Castellón, after passing the public examination for Systems & IT Management.",
      "I consider myself proactive, communicative and curious. I enjoy working in teams and learning something new on every project.",
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
          "Backend services with Spring Boot and management of continuous integration and delivery pipelines with Jenkins and Nexus.",
        stack: ["Java", "Spring Boot", "Jenkins", "Nexus"],
      },
      {
        company: "GS Gestión Fintech Apps",
        role: "Backend developer",
        place: "Remote",
        period: "Jan 2025 — Feb 2026",
        description:
          "Migrated the open banking, admin panel and bank file APIs to Azure, live in production since December 2025. Azure Functions, deployment pipelines and bank file exchange services.",
        stack: [".NET Core", "Entity Framework", "Azure"],
      },
      {
        company: "Akra Informática Coop. V.",
        role: "Software developer",
        place: "Alicante · Hybrid",
        period: "Jan 2023 — Dec 2024",
        description:
          "A web ERP built on reusable building blocks, a reporting API, e-invoicing with digital certificate signing and email automation. Requirements analysis, implementation and customer support.",
        stack: ["Angular", ".NET", "Spring Boot", "Docker"],
      },
      {
        company: "Smurfit Kappa",
        role: "IT technician · Internship",
        place: "San Vicente del Raspeig",
        period: "Jun 2022 — Dec 2022",
        description:
          "IT support for a 20,000 m² factory with over 150 workers, plus a centralised solution to log automatic code scanning.",
        stack: ["Windows", "LAN/WAN", "Active Directory"],
      },
    ],
  },
  projects: {
    title: "Projects",
    intro: "What I've built, grouped by company.",
    source: "View code",
    groups: [
      {
        id: "gs",
        tab: "GS Gestión",
        company: "GS Gestión Fintech Apps",
        period: "2025 — 2026",
        note: "Layered .NET APIs (API, Data and Test) migrated to Azure and released to production in December 2025.",
        items: [
          {
            title: "OpenBanking API",
            description:
              "Banking communication API that centralises open banking data. OData queries over Entity Framework and code-first schema migrations.",
            stack: [".NET Core", "Entity Framework", "OData", "Azure"],
          },
          {
            title: "PanelAdmin API",
            description:
              "Backend for the customer products admin panel, with scope-based authorisation and integration with OpenBanking API.",
            stack: [".NET Core", "OData", "Azure"],
          },
          {
            title: "BankFileSender API",
            description:
              "API for sending bank files, delegating email notifications to a shared library.",
            stack: [".NET Core", "Azure"],
          },
          {
            title: "Azure Functions",
            description:
              "Single-purpose functions: a broker that consumes an email queue and sends the messages, reference and currency sync, and data hand-off for the PDF reader.",
            stack: ["Azure Functions", "Azure Pipelines", ".NET"],
          },
          {
            title: "Banking services",
            description:
              "Migration of the EDITRAN bank file exchange service and of a web automation manager.",
            stack: [".NET", "EDITRAN"],
          },
        ],
      },
      {
        id: "akra",
        tab: "Akra",
        company: "Akra Informática",
        period: "2023 — 2024",
        note: "Business management and invoicing software for SMEs, from requirements analysis to customer support.",
        items: [
          {
            title: "SGIWeb",
            description:
              "Web ERP built on reusable building blocks: the same components handle data editing both in inline forms and in modals.",
            stack: ["Angular", ".NET", "Docker"],
          },
          {
            title: "Reporting API",
            description:
              "API that interoperates with the ERP to generate reports as PDF, Excel or whatever format is needed.",
            stack: ["Spring Boot", "JasperReports", "Docker"],
          },
          {
            title: "AkraFACe",
            description:
              "Reads data from the invoicing software and generates FACe electronic invoices, signed with a digital certificate.",
            stack: ["WinForms", ".NET"],
          },
          {
            title: "AkraVeriFactu",
            description:
              "Management and submission of invoicing records in compliance with the Spanish Tax Agency's VeriFactu regulation.",
            stack: [".NET"],
          },
          {
            title: "MailManager",
            description:
              "Multi-instance Windows service that reads Outlook mail with a Microsoft Entra ID token, replies automatically from templates and logs every reply.",
            stack: [".NET", "Entra ID"],
          },
          {
            title: "Custom modules",
            description:
              "A Google Calendar and Keep style calendar that replicates its event layout algorithm, and POS sync with a central server to recalculate stock.",
            stack: ["Visual Basic", "C#"],
          },
        ],
      },
      {
        id: "personal",
        tab: "Personal",
        company: "Personal",
        period: "",
        note: "Personal and academic projects.",
        items: [
          {
            title: "This portfolio",
            description:
              "Bilingual static site with light and dark themes, accessible animations and continuous deployment to GitHub Pages.",
            stack: ["Astro", "Tailwind CSS", "TypeScript"],
            href: "https://github.com/franferrandez/franferrandez.github.io",
          },
          {
            title: "GAN · Thesis",
            description:
              "Scripts and notebooks from my Bachelor's thesis at the University of Alicante on generative adversarial networks.",
            stack: ["Python", "Jupyter"],
            href: "https://github.com/franferrandez/GAN-TFG",
          },
        ],
      },
    ],
  },
  stack: {
    title: "Stack",
    intro: "My technical skills and my level in each one.",
    now: { label: "Currently at GISS", items: ["Java", "Spring Boot", "Jenkins", "Nexus"] },
    groups: {
      languages: "Languages",
      frameworks: "Frameworks",
      databases: "Databases",
      cloud: "Cloud & architectures",
      tools: "Tools",
      os: "Operating systems",
    },
    levels: [
      { name: "Basic", text: "Theoretical and academic knowledge, put into practice at university." },
      { name: "Intermediate", text: "Hands-on experience in small or personal projects." },
      { name: "Advanced", text: "Proven experience in large projects." },
    ],
  },
  contact: {
    title: "Let's talk",
    text: "Always happy to chat about backend, automation or any interesting project.",
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
  cloudflareToken: "",
};

export const profile = {
  name: "Francisco Ferrández",
  email: "franciscoferrandezmartinez@gmail.com",
  github: "https://github.com/franferrandez",
  linkedin: "https://www.linkedin.com/in/franferrandez/",
};
