export const portfolioData = {
  personal: {
    name: "Sulton Wibawa",
    role: "Software Engineer",
    subRole: "Full-Stack Web Developer",
    location: "Jakarta, Indonesia",
    headline: "Software engineer with experience building web applications, data-driven systems, and GIS platforms using modern frontend and backend technologies.",
    about: "Results-driven software engineer transitioning with a strong foundation in modern web development. I build practical web applications and digital solutions across frontend, backend, data, and business workflows. With practical experience developing React applications, integrating REST APIs, and implementing reusable component architectures, I translate complex business requirements into working, maintainable software. My broader background in operations, GIS, and process optimization has shaped my approach to software engineering—always focused on delivering tangible improvements, maintaining clear documentation (SRS, SDD, ERD), and collaborating effectively within Agile teams.",
    contact: {
      email: "msultont@example.com", // Placeholder
      linkedin: "https://www.linkedin.com/in/msultont/",
      github: "https://github.com/msulton55", // Assuming this is correct from the vercel link
      resume: "/cv-LEAN (ENGLISH).pdf",
    }
  },
  skills: {
    frontend: ["React", "Vue.js", "JavaScript", "TypeScript", "HTML", "CSS", "Responsive UI", "Ant Design"],
    backend: ["Django", "Python", "REST/API concepts"],
    database: ["PostgreSQL"],
    gis_data: ["ArcGIS", "QGIS", "WebGIS", "Data Visualization", "Excel", "Google Sheets"],
    engineering: ["Agile", "Jira", "SRS", "SDD", "ERD", "Git", "UI/UX flow documentation"],
    additional: ["Electron", "Java", "Machine Learning", "Google Vision API"]
  },
  metrics: [
    { value: "30%", label: "reduction in manual data-entry errors" },
    { value: "USD 307.6K", label: "identified cost-saving opportunities" },
    { value: "20%", label: "reported efficiency improvement in WebGIS workflow" },
    { value: "4", label: "MVPs delivered ahead of schedule" }
  ],
  projects: [
    {
      id: "ajb-recognition",
      title: "AJB Document Entity Recognition",
      description: "A web application designed to automate extraction and recognition of information from land deed documents. Integrates frontend interfaces with machine learning capabilities for efficient document processing.",
      tags: ["React", "Python", "Machine Learning", "Google Vision API"],
      link: "#", // Placeholder
    },
    {
      id: "webgis-planning",
      title: "WebGIS Regional Planning Platform",
      description: "A WebGIS platform developed for regional planning, facilitating data visualization and cross-team collaboration. The platform streamlined regional planning workflows, leading to approximately 20% efficiency improvement.",
      tags: ["Django", "ArcGIS", "WebGIS"],
      link: "#",
    },
    {
      id: "seighneur",
      title: "Seighneur Application",
      description: "An Electron-based desktop application for inventory and land-asset management. Features a React interface integrated into practical system designs for operational workflows.",
      tags: ["Electron", "React", "Desktop App"],
      link: "#",
    },
    {
      id: "titippaket-admin",
      title: "TitipPaket Admin Dashboard",
      description: "Frontend dashboard development for an expedition and courier platform. Built reusable interface components, data tables, and filtering functionalities.",
      tags: ["React", "Ant Design", "Frontend Implementation"],
      link: "#",
    },
    {
      id: "sea-port-routes",
      title: "Sea Port Best Route Algorithm",
      description: "Java desktop application designed to calculate optimal routes between sea ports using Dijkstra-based route calculation and interactive mapping.",
      tags: ["Java", "Dijkstra Algorithm", "SWT Map API"],
      link: "#",
    }
  ],
  experience: [
    {
      id: "bapsa",
      company: "PT Bandar Pelumas Sejahtera Abadi",
      role: "Operations Professional", // Using generic title based on prompt
      period: "Recent", // Adjust based on resume if needed
      description: "Focused on workflow automation, data systems, and digital process improvement. Led initiatives in analytical tooling and system thinking to streamline operational technology and business data analysis. Achieved a 30% reduction in manual warehouse data-entry errors and identified significant cost-saving opportunities.",
      technologies: ["Data Analysis", "Workflow Automation", "Process Improvement"]
    },
    {
      id: "bappenas",
      company: "BAPPENAS RI",
      role: "Software Engineer / Web Developer",
      period: "Previous",
      description: "Built a WebGIS platform using Django and ArcGIS, improving regional planning efficiency by approximately 20%. Led Agile sprints and delivered 4 MVPs ahead of schedule. Created detailed technical documentation including ERDs, UI/UX flows, and SRS/SDD. Developed dashboards for regional data insights and collaborated closely with planning teams.",
      technologies: ["Django", "ArcGIS", "WebGIS", "Agile", "Jira"]
    },
    {
      id: "titippaket",
      company: "Titippaket",
      role: "Frontend Developer Intern",
      period: "Previous",
      description: "Developed front-end components and dashboards using React and Ant Design to support courier and expedition operations.",
      technologies: ["React", "Ant Design"]
    },
    {
      id: "joomva",
      company: "Joomva",
      role: "Full-Stack Developer",
      period: "Previous",
      description: "Developed and maintained full-stack web applications to support business operations.",
      technologies: ["Web Development"]
    },
    {
      id: "freelance",
      company: "Freelance",
      role: "Java Desktop Developer",
      period: "Previous",
      description: "Built custom Java applications focused on algorithmic problem-solving and desktop UI.",
      technologies: ["Java"]
    }
  ],
  education: {
    university: "University of Indonesia",
    degree: "Bachelor of Engineering, Computer Engineering",
    gpa: "3.31",
    thesis: "Machine-learning-based land deed recognition system. (Connected to the AJB Document Entity Recognition project)"
  },
  certification: {
    name: "EF SET English Certificate",
    score: "70/100 (C1 Advanced)",
    year: "2025"
  }
};
