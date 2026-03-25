import React from "react";
import LessonPage from "./LessonPage";

const YOUTUBE_URL = "https://www.youtube.com/embed/jzHIosk8rBk";
const GOOGLE_SLIDES_URL = "https://docs.google.com/presentation/d/e/2PACX-1vRMig07hfM15fqiXzvApG6NJHNvWV3oOfjNnsEuNAQ6YyAPyMzwXd6IOrSXsPnltA/pubembed?start=false&loop=false&delayms=3000";

const sections = [
  {
    heading: "Introduction to CMS",
    body: "A Content Management System (CMS) is a software application that allows users to create, manage, and publish digital content efficiently. It is designed to simplify content handling by separating content creation from technical implementation, enabling both technical and non-technical users to collaborate in maintaining websites and digital platforms.",
  },
  {
    heading: "Early History of CMS",
    body: "Before CMS platforms existed, websites were developed using static HTML files. Any content update required manual editing of code, making website maintenance slow and inefficient. As websites grew in size and complexity, the need for automated content management systems became evident, especially for businesses and organizations.",
  },
  {
    heading: "History: Emergence & Growth",
    body: [
      "Late 1990s — First CMS solutions introduced for enterprise use. Focused on document and content storage. Proprietary and expensive systems with limited accessibility for individual developers",
      "Early 2000s (Open-Source Era) — Major turning point with the rise of open-source CMS platforms such as WordPress, Joomla, and Drupal. These systems provided customizable themes, plugins, and community support, making web publishing more accessible and affordable",
      "Impact of Open-Source CMS — Significantly expanded the use of CMS in education, business, and personal projects across the globe",
      "Modern CMS Development — Cloud-based CMS solutions, API-driven and headless architectures, integration with analytics and marketing tools, focus on scalability and performance",
    ],
  },
  {
    heading: "CMS Architecture Overview",
    body: [
      "Backend — Manages content creation, user roles, and workflows",
      "Database — Stores content and system data",
      "Frontend — Displays content to end users through the browser",
      "APIs — Allow content to be delivered across different platforms such as websites, mobile apps, and external services",
      "Modern CMS platforms are built with a layered architecture where each layer has a specific responsibility, enabling separation of concerns and easier maintenance",
    ],
  },
  {
    heading: "Current CMS Technologies",
    body: [
      "Backend Languages — PHP, Java, Python, JavaScript",
      "Frontend Technologies — HTML, CSS, JavaScript",
      "Frameworks — React, Vue, Angular",
      "Databases — MySQL, PostgreSQL, MongoDB",
      "APIs — REST and GraphQL for content delivery across platforms",
    ],
  },
  {
    heading: "Types of CMS",
    body: [
      "Traditional CMS — Manages both content and presentation in a single integrated system. Both the backend (content) and frontend (display) are tightly coupled. Example: WordPress in its classic form",
      "Headless CMS — Focuses only on content storage and delivery through APIs. Has no built-in frontend; developers choose any technology for display. Best for omnichannel delivery (web, mobile, IoT). Example: Contentful, Strapi",
      "Decoupled CMS — Combines features of both traditional and headless CMS. Offers flexibility while still supporting built-in frontend tools. Good balance between developer freedom and ease of use",
    ],
  },
  {
    heading: "Applications of CMS",
    body: [
      "Website and blog management — powering personal, business, and news websites",
      "E-commerce platforms — managing product listings, orders, and customer content",
      "Educational and learning management systems — hosting course content and student portals",
      "Corporate and enterprise websites — managing large-scale internal and external content",
      "News and media publishing platforms — enabling rapid content publishing and editorial workflows",
    ],
  },
  {
    heading: "Challenges: Security",
    body: "CMS platforms are frequent targets of cyberattacks due to their widespread use. Security risks often come from outdated plugins, weak authentication mechanisms, and improper system configurations. Without regular updates and security monitoring, CMS-based systems can become vulnerable to data breaches and unauthorized access.",
  },
  {
    heading: "Challenges: Performance, Scalability & Maintenance",
    body: [
      "Performance Issues — Slow loading times caused by heavy plugins, database performance bottlenecks, and lack of caching and optimization",
      "Scalability — Limited scalability in monolithic CMS architectures when traffic increases significantly",
      "Maintenance Complexity — Requires continuous updates, backups, and compatibility checks. Plugin and theme updates may cause system conflicts. Content migration between CMS platforms can be complex and time-consuming",
      "These maintenance requirements increase the operational workload for developers and administrators",
    ],
  },
  {
    heading: "Future Trends",
    body: [
      "Shift Toward Headless CMS — The future is moving toward headless and API-first architectures, allowing content delivery across multiple platforms (web, mobile, IoT) using a single backend",
      "CMS in Future IT Development — CMS technologies will play an increasingly important role in software development as digital platforms continue to expand",
      "Future CMS platforms will focus on flexibility, automation, and integration with emerging technologies",
      "AI Integration — Automated content tagging, personalization, SEO optimization, and intelligent editorial workflows",
      "Making CMS an essential tool for IT professionals in modern development",
    ],
  },
  {
    heading: "Conclusion",
    body: [
      "CMS has evolved to meet modern digital demands — from static HTML files to powerful cloud-based and API-driven platforms",
      "Supports efficient content management and delivery across websites, apps, and digital services",
      "Continues to improve with new technologies including AI, headless architecture, and cloud computing",
      "Essential knowledge for IT students and developers working in web development, digital marketing, and enterprise systems",
    ],
  },
];

const tableData = {
  headers: ["Type", "Manages Presentation", "API-First", "Best For"],
  rows: [
    ["Traditional CMS", "Yes (tightly coupled)", "No", "Blogs, small websites"],
    ["Headless CMS", "No (API only)", "Yes", "Omnichannel, mobile, IoT"],
    ["Decoupled CMS", "Optional", "Yes", "Flexibility + built-in frontend"],
  ],
};

const questions = [
  { question: "What is a Content Management System (CMS)?", options: ["A hardware device for storing files", "A software application that allows users to create, manage, and publish digital content", "A programming language for building websites", "A type of database management system"] },
  { question: "Before CMS existed, how were websites primarily built and updated?", options: ["Using drag-and-drop builders", "Through manual editing of static HTML files", "Using AI-generated content", "Through cloud-based editors"] },
  { question: "Which of the following was a characteristic of the first CMS solutions in the late 1990s?", options: ["Open-source and free", "Focused on gaming applications", "Proprietary, expensive, and focused on enterprise document storage", "Designed for mobile-first experiences"] },
  { question: "What major change happened in the early 2000s that expanded CMS use?", options: ["The invention of the internet", "The rise of open-source CMS platforms like WordPress, Joomla, and Drupal", "The launch of the first smartphone", "The introduction of cloud computing only"] },
  { question: "What does the backend of a CMS architecture manage?", options: ["Only the visual design and colors", "Content creation, user roles, and workflows", "Network security and firewalls", "Only database backups"] },
  { question: "Which of the following is a current backend language used in CMS development?", options: ["HTML", "CSS", "PHP", "Figma"] },
  { question: "What is the key characteristic of a Headless CMS?", options: ["It manages both content and presentation together", "It focuses only on content delivery through APIs with no built-in frontend", "It is designed only for mobile devices", "It requires no database"] },
  { question: "Which type of CMS combines features of both traditional and headless systems?", options: ["Batch CMS", "Embedded CMS", "Decoupled CMS", "Static CMS"] },
  { question: "Which of the following is an application of CMS?", options: ["Managing CPU processes", "E-commerce platforms and news publishing", "Configuring network routers", "Designing computer chips"] },
  { question: "What is a major security risk for CMS platforms?", options: ["Using too many images on a page", "Outdated plugins, weak authentication, and improper configurations", "Having too many registered users", "Using open-source code only"] },
  { question: "What causes performance issues in CMS platforms?", options: ["Too many administrators", "Heavy plugins and database performance bottlenecks", "Using HTTPS encryption", "Choosing headless architecture"] },
  { question: "What makes content migration between CMS platforms challenging?", options: ["Different screen resolutions", "Complexity of moving structured content and compatibility issues between platforms", "The high cost of cloud storage", "Lack of internet access"] },
  { question: "What is the main advantage of Headless CMS architecture?", options: ["It is easier to set up than traditional CMS", "Content can be delivered across web, mobile, and IoT from a single backend via APIs", "It does not require any database", "It automatically writes content using AI"] },
  { question: "Which database systems are commonly used in modern CMS platforms?", options: ["Oracle only", "MySQL, PostgreSQL, and MongoDB", "Excel and Google Sheets", "SQLite only"] },
  { question: "What is the future direction of CMS development according to the presentation?", options: ["Returning to static HTML websites", "Moving toward headless, API-first architectures with AI and cloud integration", "Eliminating all backend programming", "Focusing only on desktop applications"] },
];

const answerKey = ["B","B","C","B","B","C","B","C","B","B","B","B","B","B","B"];

export default function Lesson10() {
  return (
    <LessonPage
      lessonId={10}
      lessonTitle="Content Management Systems"
      lessonShortTitle="CMS"
      lessonIcon="📝"
      youtubeUrl={YOUTUBE_URL}
      googleSlidesUrl={GOOGLE_SLIDES_URL}
      sections={sections}
      tableData={tableData}
      questions={questions}
      answerKey={answerKey}
      color="pink"
    />
  );
}