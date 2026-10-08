export const portfolioData = {
  personal: {
    name: "Muhammad Sulton Tauhid",
    role: "Software Engineer",
    subRole: "Full-Stack Web Developer",
    location: "Jakarta, Indonesia",
    url: "https://portfolio-msultont.vercel.app",
    headline:
      "Software Engineer and Full-Stack Web Developer based in Jakarta, Indonesia, with experience building React applications, Django and ArcGIS WebGIS platforms, dashboards, and data-driven systems.",
    about:
      "Muhammad Sulton Tauhid is a Software Engineer and Full-Stack Web Developer based in Jakarta, Indonesia, with approximately three years of software development experience. He has built React web applications and dashboards, a Django and ArcGIS WebGIS platform, and a machine-learning-based land deed recognition system using React and Python. His technical background includes PostgreSQL, REST/API integration, and data-driven systems, alongside an understanding of business operations, workflow automation, and process improvement. He is interested in modern web development and building practical software for real user and business needs.",
    contact: {
      linkedin: "https://www.linkedin.com/in/msultont/",
      resume: "/cv-LEAN (ENGLISH).pdf",
    },
  },
  skills: {
    frontend: [
      "React",
      "Vue.js",
      "JavaScript",
      "HTML",
      "CSS",
      "Responsive UI",
      "Ant Design",
    ],
    backend: ["Django", "Python", "REST/API concepts"],
    database: ["PostgreSQL"],
    gis_data: [
      "ArcGIS",
      "QGIS",
      "WebGIS",
      "Data Visualization",
      "Excel",
      "Google Sheets",
    ],
    engineering: [
      "Agile",
      "Jira",
      "SRS",
      "SDD",
      "ERD",
      "Git",
      "UI/UX flow documentation",
    ],
    additional: ["Electron", "Java", "Machine Learning", "Google Vision API"],
  },
  metrics: [
    { value: "30%", label: "reduction in manual data-entry errors" },
    { value: "USD 307.6K", label: "identified cost-saving opportunities" },
    {
      value: "20%",
      label: "reported efficiency improvement in WebGIS workflow",
    },
    { value: "4", label: "MVPs delivered ahead of schedule" },
  ],
  projects: [
    {
      id: "ajb-recognition",
      title: "AJB Document Entity Recognition",
      description:
        "A machine-learning-based land deed recognition system developed with React and Python as part of a computer engineering thesis project.",
      tags: ["React", "Python", "Machine Learning", "Google Vision API"],
    },
    {
      id: "webgis-planning",
      title: "WebGIS Regional Planning Platform",
      description:
        "A WebGIS platform developed for regional planning, facilitating data visualization and cross-team collaboration. The platform streamlined regional planning workflows, leading to approximately 20% efficiency improvement.",
      tags: ["Django", "ArcGIS", "WebGIS"],
    },
    {
      id: "seighneur",
      title: "Seighneur Application",
      description:
        "An Electron-based desktop application for inventory and land-asset management. Features a React interface integrated into practical system designs for operational workflows.",
      tags: ["Electron", "React", "Desktop App"],
    },
    {
      id: "titippaket-admin",
      title: "TitipPaket Admin Dashboard",
      description:
        "Frontend dashboard development for an expedition and courier platform. Built reusable interface components, data tables, and filtering functionalities.",
      tags: ["React", "Ant Design", "Frontend Implementation"],
    },
    {
      id: "sea-port-routes",
      title: "Sea Route Calculator",
      description:
        "A Java application that calculates sea routes using Dijkstra's algorithm with mapping functionality.",
      tags: ["Java", "Dijkstra's Algorithm", "Mapping"],
    },
  ],
  experience: [
    {
      id: "bapsa",
      company: "PT Bandar Pelumas Sejahtera Abadi",
      role: "Field Operations & Data Analyst",
      period: "Jan 2023 – Present",
      description:
        "Automated warehouse data-entry workflows, reducing manual errors by 30%. Analyzed revenue reports and identified $307,600 in cost-saving opportunities, developed more than five workshop service packages, and contributed to a 15% increase in customer retention.",
      technologies: [
        "Data Analysis",
        "Workflow Automation",
        "Process Improvement",
      ],
    },
    {
      id: "bappenas",
      company: "BAPPENAS RI",
      role: "Software Engineer",
      period: "Feb 2021 – Dec 2022",
      description:
        "Built a regional WebGIS platform using Django and ArcGIS, collaborating with planning teams across three regions and delivering weekly data insights through dashboard/WebGIS integration. Improved workflow efficiency by 20%, led Agile sprints using Jira, delivered four MVPs ahead of schedule, and created ERDs, UI/UX flows, SRS, and SDD documentation.",
      technologies: ["Django", "ArcGIS", "WebGIS", "Agile", "Jira"],
    },
    {
      id: "titippaket",
      company: "Titippaket",
      role: "Frontend Developer Intern",
      period: "Oct 2020 – Jan 2021",
      description:
        "Developed React and Ant Design dashboard functionality, including administrative data tables and filtering workflows.",
      technologies: ["React", "Ant Design"],
    },
    {
      id: "joomva",
      company: "Joomva",
      role: "Full-Stack Developer",
      period: "2020",
      description:
        "Contributed to an e-learning management system supporting school management and video-conferencing workflows.",
      technologies: ["Full-Stack Web Development"],
    },
    {
      id: "freelance",
      company: "Freelance",
      role: "Java Freelance Developer",
      period: "2020",
      description:
        "Developed a sea-route calculator using Dijkstra's algorithm with mapping functionality.",
      technologies: ["Java", "Dijkstra's Algorithm"],
    },
  ],
  education: {
    university: "University of Indonesia",
    degree: "Bachelor of Engineering, Computer Engineering",
    gpa: "3.31",
    thesis:
      "Machine-learning-based land deed recognition system using React and Python.",
  },
  certification: {
    name: "EF SET English Certificate",
    score: "70/100 (C1 Advanced)",
    year: "2025",
  },
};
