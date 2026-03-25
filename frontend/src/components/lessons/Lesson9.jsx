import React from "react";
import LessonPage from "./LessonPage";

const YOUTUBE_URL = "https://www.youtube.com/embed/qwFZYHgpFXk";
const GOOGLE_SLIDES_URL = "https://docs.google.com/presentation/d/e/2PACX-1vQgTANs5Wo9RMnYU0N5nGG9oi-xtNhZBpLmwKD9g-uzfDCyNCwlBVHfBwUDipTm1w/pubembed?start=false&loop=false&delayms=3000";

const sections = [
  {
    heading: "What is a Web Platform?",
    body: "A web platform is the complete ecosystem of technologies, standards, and infrastructure that enables the creation, deployment, and operation of web applications and websites. It encompasses both the client-side environment (web browsers running on users' devices) and the server-side infrastructure (backend systems that process requests and deliver content). At its core, the web platform consists of HTML for structure, CSS for presentation, and JavaScript for interactivity, along with web browsers that interpret these technologies and display content to users.",
  },
  {
    heading: "Web Platform Architecture",
    body: [
      "Client-Side Technologies — The part of the web platform that runs in the user's browser, handling what users see and interact with directly on their device",
      "Core Standards — The languages and protocols (HTML, CSS, JavaScript, HTTP) that enable communication and functionality between browsers and servers",
      "Server-Side — The backend infrastructure running on remote servers that processes requests, manages databases, and handles business logic behind the scenes",
    ],
  },
  {
    heading: "Origin: The Birth of the World Wide Web",
    body: "In 1989, Tim Berners-Lee, a British scientist at CERN, proposed a 'hypertext' system allowing documents to be linked together through clickable links regardless of where they were stored. He invented the World Wide Web between 1989 and 1991. The first website launched on August 6, 1991, explained what the World Wide Web was. The first browser, called 'WorldWideWeb' (later Nexus), could both view and create web pages.",
  },
  {
    heading: "Evolution of the Web Platform",
    body: [
      "Web 1.0 — The Static Web (1990s–2000s): 'Read-only' web with static HTML pages and limited interactivity. Users could only view information. Features: Static content, simple HTML/CSS, no dynamic updates. Example: Personal homepages, Yahoo! Directory",
      "Web 2.0 — The Interactive Web (2000s–2010s): Transformed the web into a 'read-write' platform where users create and share content. Social media, blogs, and collaborative platforms emerged. Features: Social networking, AJAX and dynamic content, cloud computing. Example: Facebook, Instagram, YouTube",
      "Web 3.0 — The Semantic Web (2010s–Present): Powered by AI/ML and decentralized technologies. Focuses on understanding data context, personalization, and user data control. Features: AI and ML, blockchain integration, decentralization. Example: ChatGPT, Netflix, cryptocurrency wallets",
    ],
  },
  {
    heading: "Milestones in Web Development",
    body: [
      "1991 — Tim Berners-Lee launched the world's first website at CERN",
      "1995 — Brendan Eich created JavaScript in just 10 days at Netscape, transforming static pages into dynamic interactive experiences",
      "1998 — CSS Level 2 introduced advanced positioning and layout features; Google's search algorithm introduced by Larry Page and Sergey Brin",
      "2004 — Term 'Web 2.0' coined; Facebook launched as Harvard-only network",
      "2008 — Google Chrome launched with the V8 JavaScript engine; HTML5 first public draft published",
      "2013–2014 — React (2013), Angular (2010), and Vue (2014) revolutionized front-end development with component-based architectures",
    ],
  },
  {
    heading: "Core Web Technologies",
    body: [
      "HTML (HyperText Markup Language) — The structural foundation of every web page. Creates the skeleton of websites by organizing text, images, links, forms, and other elements into a hierarchical structure",
      "CSS (Cascading Style Sheets) — Controls the visual presentation and layout of web pages. Defines colors, fonts, spacing, positioning, animations, and responsive layouts that adapt to different screen sizes",
      "JavaScript — Brings web pages to life with interactivity and dynamic behavior. Enables real-time updates, form validation, interactive maps, animations, and communication with servers",
    ],
  },
  {
    heading: "Web Browsers & Rendering Engines",
    body: [
      "Web Browsers — Software applications that retrieve, interpret, and display web content by rendering HTML, CSS, and JavaScript. Modern browsers are essentially operating systems for web applications, providing APIs to access device features",
      "Blink Engine (Google) — Open-source engine used by Chrome, Edge, Opera, and Brave. Most dominant engine with over 70% global market share. Performance-focused with multi-process architecture",
      "WebKit Engine (Apple) — Powers Safari. Energy-efficient, privacy-focused, and Apple ecosystem-integrated. Original source of Blink (forked in 2013)",
      "Gecko Engine (Mozilla) — Powers Firefox. Only major engine not based on WebKit/Blink. Independent development, standards advocacy, privacy-first, open governance",
    ],
  },
  {
    heading: "Document Object Model (DOM)",
    body: "The DOM is a programming interface that represents an HTML document as a tree structure of objects that can be accessed and manipulated by JavaScript. Each HTML element, attribute, and piece of text becomes a 'node' in this tree, creating a hierarchical representation. The DOM tree starts with the document root, branching into <html>, which contains <head> and <body>, which further branch into all page elements. The DOM bridges the gap between static HTML documents and dynamic, interactive web applications.",
  },
  {
    heading: "Web APIs",
    body: [
      "Fetch API — Modern, Promise-based interface for making HTTP requests to servers asynchronously. Powers infinite scroll and real-time updates without page refreshes",
      "Service Workers — JavaScript scripts running in the background enabling Progressive Web Apps with offline functionality. Make web apps work like native apps with push notifications",
      "Geolocation API — Allows websites to request the user's physical location with explicit permission. Uses GPS, Wi-Fi, and cell tower triangulation",
      "WebRTC — Enables peer-to-peer audio, video, and data communication directly between browsers without plugins. Powers video conferencing, voice calls, and screen sharing",
    ],
  },
  {
    heading: "Frontend Development",
    body: [
      "Focuses on everything a user sees and interacts with — layout, appearance, and functionality",
      "Uses HTML, CSS, and JavaScript along with frameworks like React, Angular, and Vue.js",
      "React — Component-based, widely used, efficient rendering through virtual DOM",
      "Vue.js — Simple and beginner-friendly",
      "Angular — Full-featured framework from Google",
      "Advantages: Efficiency (only updates what changed), increased interactiveness (real-time updates without reloads), easier maintenance through reusable components",
    ],
  },
  {
    heading: "Backend Development",
    body: [
      "Server-side platforms process requests from the frontend",
      "Node.js — JavaScript on the server; non-blocking I/O for high concurrency",
      "Django / Flask — Python web frameworks",
      "Laravel — PHP framework",
      "Spring Boot — Java enterprise framework",
      "Responsibilities: User authentication, business logic, database communication, and API handling",
    ],
  },
  {
    heading: "Web Services & APIs",
    body: [
      "RESTful APIs — Use HTTP methods: GET (retrieve), POST (create), PUT (update), DELETE (remove). Common data format: JSON",
      "Microservices Architecture — Breaks an application into small, independent services each handling a specific task. Advantages: Easier scaling, better fault isolation, faster development. Examples: Authentication service, payment service, notification service",
      "Cloud Platforms — AWS, Google Cloud Platform, Microsoft Azure provide servers, databases, storage, auto-scaling, and security tools",
    ],
  },
  {
    heading: "Web Security",
    body: [
      "SQL Injection — Malicious SQL code inserted into application queries to manipulate databases",
      "Cross-Site Scripting (XSS) — Injection of malicious scripts into trusted websites viewed by users",
      "Broken Authentication — Flaws in authentication mechanisms allowing unauthorized access",
      "CSRF Attacks — Cross-Site Request Forgery tricks users into executing unwanted actions",
      "Authentication Methods: Password-based, Multi-factor (MFA), Biometric, OAuth 2.0, JWT (JSON Web Tokens)",
      "Authorization Methods: Role-Based Access Control (RBAC), Attribute-Based Access Control (ABAC), API access tokens",
    ],
  },
  {
    heading: "Performance & Scalability",
    body: [
      "Frontend Optimization: Minification & Compression (reduce HTML/CSS/JS file sizes), Lazy Loading (load images on demand), Code Splitting (break bundles into smaller chunks)",
      "Backend Optimization: Database query optimization and indexing, CDN (Content Delivery Network) for global content distribution, Server-side caching",
      "Vertical Scaling — Adding more power (CPU/RAM) to existing servers; limited by hardware",
      "Horizontal Scaling — Adding more servers to distribute load; uses load balancing, microservices, and auto-scaling",
    ],
  },
  {
    heading: "Emerging Technologies & Future Trends",
    body: [
      "Progressive Web Apps (PWAs) — Web applications using modern capabilities to deliver app-like experiences. Features: Offline functionality (service workers), installable (add to home screen), push notifications",
      "AI Integration — TensorFlow.js for client-side ML, real-time predictions without servers, chatbots, personalized recommendations, content moderation",
      "Edge Computing — Moves computation to the network edge to reduce latency. Technologies: Cloudflare Workers, AWS Lambda@Edge, Vercel Edge Functions. Benefits: Lower latency, global distribution, cost efficiency",
    ],
  },
];

const questions = [
  { question: "Who invented the World Wide Web?", options: ["Bill Gates", "Steve Jobs", "Tim Berners-Lee", "Brendan Eich"] },
  { question: "Which HTML, CSS, and JavaScript technology enables real-time page updates without a full reload?", options: ["WebRTC", "AJAX and dynamic content", "Service Workers", "Geolocation API"] },
  { question: "Which rendering engine powers Google Chrome?", options: ["WebKit", "Gecko", "Blink", "Trident"] },
  { question: "What does the DOM stand for?", options: ["Digital Object Map", "Document Object Model", "Data Output Method", "Dynamic Online Module"] },
  { question: "Which core web technology controls visual presentation including colors, fonts, and layout?", options: ["HTML", "JavaScript", "CSS", "Python"] },
  { question: "What is a Service Worker primarily used for?", options: ["Database queries", "Enabling Progressive Web Apps with offline functionality", "Rendering HTML pages", "Managing server authentication"] },
  { question: "Which Web version is characterized by AI, blockchain, and decentralization?", options: ["Web 1.0", "Web 2.0", "Web 3.0", "Web 4.0"] },
  { question: "Which HTTP method is used to retrieve data in a RESTful API?", options: ["POST", "DELETE", "PUT", "GET"] },
  { question: "What is the main advantage of microservices architecture?", options: ["Single monolithic codebase", "Easier scaling and better fault isolation", "Only works with SQL databases", "Requires no cloud hosting"] },
  { question: "Which frontend framework is described as 'component-based and widely used'?", options: ["Angular", "Django", "Vue.js", "React"] },
  { question: "What does CSRF stand for?", options: ["Cross-Site Request Forgery", "Client-Side Resource Framework", "Content Security Relay Filter", "Centralized Session Request Form"] },
  { question: "Which authentication method requires users to verify identity using two or more verification steps?", options: ["JWT", "OAuth 2.0", "Multi-Factor Authentication (MFA)", "RBAC"] },
  { question: "What is the primary purpose of a CDN (Content Delivery Network)?", options: ["To encrypt user passwords", "To distribute content globally for faster loading", "To manage backend databases", "To run JavaScript on the server"] },
  { question: "Which JavaScript was created in just 10 days by Brendan Eich at Netscape?", options: ["TypeScript", "CoffeeScript", "JavaScript", "Python"] },
  { question: "What is a Progressive Web App (PWA)?", options: ["A native Android application", "A web application using modern capabilities to deliver app-like experiences with offline functionality", "A browser extension", "A type of server-side framework"] },
];

const answerKey = ["C","B","C","B","C","B","C","D","B","D","A","C","B","C","B"];

export default function Lesson9() {
  return (
    <LessonPage
      lessonId={9}
      lessonTitle="Web Platforms"
      lessonShortTitle="Web Platforms"
      lessonIcon="🌐"
      youtubeUrl={YOUTUBE_URL}
      googleSlidesUrl={GOOGLE_SLIDES_URL}
      sections={sections}
      questions={questions}
      answerKey={answerKey}
      color="pink"
    />
  );
}