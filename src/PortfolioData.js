export const Profile = {
  name: "Gherwin Pacheco",
  role: "Software Developer",
  location: "Carmona, Cavite, Philippines",
  phone: "+63 945-217-0963",
  email: "gherwinpacheco1@gmail.com",
  summary:
    "Software Developer with 2+ years of experience maintaining, revising, and troubleshooting existing internal Manufacturing Execution (MES) and Warehouse Management (WMS) systems, operational dashboards, and shop-floor integrations across 19 SMT electronics production lines (C#, .NET, VB.NET, PHP, MySQL, SQL Server). Primarily handles system revision requests from Production Engineers to align software workflows with production process needs, resolves system bugs, optimizes slow SQL queries, and builds n8n workflow automations.",
  socials: {
    facebook: "https://www.facebook.com/gherwin.pacheco.08/",
    linkedin: "https://www.linkedin.com/in/gherwin-pacheco-4784a4319",
    github: "https://github.com/GherwinPacheco",
  },
};

export const SkillGroups = [
  {
    category: "Languages",
    items: [
      { name: "C#", image: "csharp.svg" },
      { name: "VB.NET", image: "aspnet.svg" },
      { name: "PHP", image: "php.svg" },
      { name: "SQL", image: "mysql.svg" },
      { name: "JavaScript", image: "javascript.svg" },
      { name: "HTML5", image: "html5.svg" },
      { name: "CSS3", image: "css.svg" },
    ],
  },
  {
    category: "Frameworks & Libraries",
    items: [
      { name: ".NET Core MVC", image: "aspnet.svg" },
      { name: "ASP.NET", image: "aspnet.svg" },
      { name: "WinForms", image: "csharp.svg" },
      { name: "React.js", image: "react.svg" },
      { name: "Next.js", image: "react.svg" },
      { name: "jQuery", image: "jquery.svg" },
      { name: "DataTables", image: "javascript.svg" },
      { name: "Tailwind CSS", image: "tailwind.svg" },
      { name: "Bootstrap", image: "bootstrap.svg" },
    ],
  },
  {
    category: "Databases & Tools",
    items: [
      { name: "MySQL", image: "mysql.svg" },
      { name: "SQL Server", image: "mysql.svg" },
      { name: "n8n", image: "n8n.svg" },
      { name: "Codex", image: "codex.svg" },
      { name: "Git & GitHub", image: "git.svg" },
      { name: "VS Code", image: "vscode.svg" },
    ],
  },
];

export const Skills = SkillGroups.flatMap((g) => g.items);

export const Certifications = [
  {
    title: ".NET Core MVC: The Complete Guide (.NET 8)",
    issuer: "Udemy – Bhrugen Patel",
    date: "March 2025",
  },
  {
    title: "C# Intermediate: Classes, Interfaces and OOP",
    issuer: "Udemy – Mosh Hamedani",
    date: "June 2025",
  },
];

export const Education = {
  school: "Cavite State University – Carmona Campus",
  location: "Cavite, Philippines",
  degree: "Bachelor of Science in Information Technology",
  duration: "August 2019 – September 2024",
};

export const Experience = [
  {
    position: "Software Developer",
    company: "GRUPPO EMS Inc.",
    location: "Cavite, Philippines",
    techstack: [
      "C#",
      ".NET Core MVC (.NET 8)",
      "VB.NET",
      "WinForms",
      "PHP",
      "MySQL",
      "SQL Server",
      "JavaScript",
      "jQuery",
      "DataTables",
      "n8n",
      "Git",
    ],
    duration: "January 2025 – Present",
    descriptions: [
      "Handle and implement system revision requests from Production Engineers to update, enhance, and maintain existing internal MES and WMS applications (C#, VB.NET, PHP, MySQL), aligning SMT traceability, lot tracking, quality inspections, scan validation, and warehouse workflows across 19 production lines.",
      "Troubleshoot, debug, and resolve software bugs identified across internal MES and WMS modules to ensure reliable day-to-day shop-floor and warehouse operations across all 19 production lines.",
      "Maintain operational dashboards and web modules monitoring unit status, line progress, and work-in-progress (WIP) aging metrics, optimizing slow MySQL queries across large production datasets.",
      "Support existing shop-floor SQL Server line database integrations and automate cross-departmental reporting and production alerting using n8n and scheduled SQL workflows to deliver operational updates and periodic Excel/HTML email reports.",
      "Collaborate with Production Engineers, QA, and warehouse teams to validate system revisions, conduct UAT, update technical documentation and user manuals, and assist with system release deployments.",
    ],
  },
  {
    position: "Software Developer Intern",
    company: "Municipality of General Mariano Alvarez",
    location: "Cavite, Philippines",
    techstack: ["React.js", "PHP", "JavaScript", "Tailwind CSS"],
    duration: "March 2024 – June 2024",
    descriptions: [
      "Designed and built a custom QR Code ID Generator web application (React.js, PHP, JavaScript, Tailwind CSS) that automated resident data encoding and streamlined ID card issuance for Informal Settler Family (ISF) residents.",
      "Debugged, maintained, and enhanced existing municipal information systems to improve reliability for daily local government operations.",
      "Provided on-site software, hardware, and technical support for municipal staff during public events and training sessions.",
    ],
  },
];

export const Projects = [
  {
    title: "Inventory and Sales Management System – Samson Pharmacy",
    type: "Capstone Project",
    tools: ["PHP", "MySQL", "JavaScript", "Bootstrap", "HTML5", "CSS3"],
    images: ["inv_sales_1.png", "inv_sales_2.png", "inv_sales_3.png"],
    description:
      "Developed an end-to-end pharmacy management and POS system to track real-time inventory levels, monitor product status and expiration, process point-of-sale transactions, and generate operational reports.",
    link: "https://github.com/GherwinPacheco/samson_pharmacy",
    linkLabel: "View on GitHub",
  },
  {
    title: "Furniture Ordering & E-Commerce System – Postrado",
    type: "Freelance",
    tools: ["PHP", "MySQL", "JavaScript", "Bootstrap", "HTML5", "CSS3"],
    images: [
      "ordering_1.png",
      "ordering_2.png",
      "ordering_3.png",
      "ordering_4.png",
    ],
    description:
      "Built a full-stack e-commerce platform supporting standard catalog purchases and custom-order furniture specifications alongside an administrative dashboard for managing fulfillment, customer records, inventory, and sales analytics.",
    link: "https://github.com/GherwinPacheco/postrado",
    linkLabel: "View on GitHub",
  },
  {
    title: "Custom QR Code ID Generator Web Application",
    type: "Internship Project",
    tools: ["React.js", "Tailwind CSS", "JavaScript", "PHP"],
    images: ["qr_1.png", "qr_2.png", "qr_3.png"],
    description:
      "Designed and built a custom QR Code ID Generator web application during my internship at the Municipality of General Mariano Alvarez, Cavite, automating resident data encoding and streamlining ID card issuance for Informal Settler Family (ISF) residents.",
    link: "https://gherwinpacheco.github.io/qrcode-generator/",
    linkLabel: "Live Demo",
  },
];
