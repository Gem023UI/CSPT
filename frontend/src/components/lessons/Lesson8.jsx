import React from "react";
import LessonPage from "../LessonPage";

// ── PASTE YOUR LINKS BELOW ─────────────────────────────────────────
const YOUTUBE_URL = "https://www.youtube.com/embed/gBBw1YGJPFU";        // e.g. "https://www.youtube.com/embed/VIDEO_ID"
const GOOGLE_SLIDES_URL = "https://docs.google.com/presentation/d/e/2PACX-1vRTkXA_XyI3vWp-V4u-5Gcj7ah_echzadxg1g1z_DLBeSzPA-U8WGyskPJcn-PukA/pubembed?start=false&loop=false&delayms=3000";  // e.g. "https://docs.google.com/presentation/d/ID/embed"
// ──────────────────────────────────────────────────────────────────

const sections = [
  {
    heading: "What are Application Platforms?",
    body: "An application platform is a comprehensive software framework that provides developers with the necessary tools, services, libraries, and infrastructure to build, deploy, test, and manage applications. It serves as the foundation layer between hardware/operating systems and end-user applications.",
  },
  {
    heading: "Components of Application Platforms",
    body: [
      "Development tools — IDEs, SDKs, and frameworks for building apps",
      "Runtime environments — Execution engines and virtual machines",
      "APIs and integration services — Connecting apps to external systems",
      "Storage and database management — Handling persistent data",
      "Security and authentication systems — Protecting apps and users",
      "Deployment and monitoring tools — Managing app lifecycle",
    ],
  },
  {
    heading: "Purpose of Application Platforms",
    body: [
      "Accelerate development by providing pre-built components",
      "Standardize development practices across teams",
      "Reduce infrastructure complexity for developers",
      "Enable scalability and performance optimization",
      "Facilitate application lifecycle management",
    ],
  },
  {
    heading: "History of Application Platforms",
    body: [
      "1960s–1970s (Mainframe Era) — IBM System/360 and System/370 dominated. Monolithic, centralized computing. Batch processing and time-sharing. Limited accessibility and high costs",
      "1980s–1990s (Personal Computing Revolution) — MS-DOS and Windows platforms emerged. Apple Macintosh introduced GUI-based development. Client-server architectures. Java introduced 'Write Once, Run Anywhere' (1995)",
      "2000s (Web & Enterprise) — .NET Framework (2002) and Java EE. LAMP stack for web development. AWS launched (2006). SaaS models emerged",
      "2010s (Mobile & Cloud Native) — iOS SDK and Android (2008) revolutionized mobile. PaaS became mainstream. Docker containers (2013) enabled microservices. DevOps culture transformed workflows",
      "2020s (AI & Low-Code) — Low-code/no-code platforms democratize development. Serverless computing gains adoption. AI-powered development tools emerge. Edge computing and distributed platforms",
    ],
  },
  {
    heading: "Types of Application Platforms",
    body: [
      "Desktop Application Platforms — Supports applications that run locally on a computer. Provides graphical user interface and system resources. Example: Windows, macOS for local apps",
      "Web Application Platforms — Enables access to applications through a browser. Supports client-server architecture. Example: Google Docs, online banking portals",
      "Mobile Application Platforms — Supports touch-based interfaces. Manages mobile hardware (camera, GPS, sensors). Example: iOS and Android",
      "Cloud Application Platforms — Removes need for physical servers. Supports scalability and global access. Example: AWS, Azure, Google Cloud",
      "Enterprise Application Platforms — Handles complex business processes. Supports multiple users and databases. Example: SAP, Salesforce, ServiceNow",
      "Cross-Platform Application Platforms — Reduces development time; one codebase runs on multiple OS. Example: Flutter, React Native, Xamarin",
      "Low-Code / No-Code Platforms — Enables non-programmers to build applications using visual tools. Speeds up development. Example: Microsoft Power Apps, OutSystems, Bubble",
    ],
  },
  {
    heading: "Modern Application Platform Technologies",
    body: [
      "Mobile Platforms — iOS (Swift/Xcode), Android (Kotlin/Android Studio), Cross-platform: Flutter, React Native. Apps: Social media, e-commerce, banking, healthcare",
      "Enterprise Platforms — Salesforce (CRM), SAP (ERP), ServiceNow (IT service management)",
      "Development Frameworks — React.js, Angular, Vue.js (web); Node.js, Django, Spring Boot (backend); TensorFlow, PyTorch (AI/ML)",
      "Container & Orchestration — Docker for containerization; Kubernetes for orchestration. Apps: Microservices, cloud-native applications",
      "Cloud-Based PaaS — AWS Elastic Beanstalk & Lambda; Azure App Service & Functions; GCP App Engine & Cloud Run",
      "Low-Code/No-Code — OutSystems, Mendix, Microsoft Power Apps, Bubble, Webflow",
    ],
  },
  {
    heading: "Real-World Applications",
    body: [
      "E-Commerce & Retail — Shopify powers millions of online stores; Amazon on AWS; iOS/Android shopping apps",
      "Finance & Banking — Mobile banking apps (Chase, Bank of America); Trading platforms (Robinhood); Payment systems (PayPal, Stripe)",
      "Healthcare & Telemedicine — Epic Systems for hospital management; Teladoc telehealth on mobile; Health data via FHIR APIs",
      "Education & E-Learning — Canvas and Blackboard LMS; Zoom on cloud platforms; Educational mobile apps",
      "Entertainment & Media — Netflix and Spotify on cloud; Unity and Unreal Engine for gaming; Instagram and TikTok on mobile",
    ],
  },
  {
    heading: "Importance of Application Platforms",
    body: [
      "Development Efficiency — Pre-built tools and libraries accelerate coding",
      "Cross-Platform Compatibility — Apps work across devices and browsers",
      "Enhanced User Experience — Standardized UI ensures intuitive, consistent design",
      "Scalability — Easily handles more users and data without rework",
      "Integration — Connects with third-party tools and services",
      "Cost-Effective — Reduces development and maintenance expenses",
      "Security & Compliance — Built-in protocols support safe apps",
      "Innovation Support — Focus on creative features rather than foundations",
    ],
  },
  {
    heading: "Current Challenges",
    body: [
      "Platform Fragmentation — Multiple platforms require separate development efforts",
      "Vendor Lock-In — Difficulty switching between platform providers",
      "Performance Optimization — Balancing features with speed and efficiency",
      "High Development Costs — Maintaining multiple platform codebases",
      "Skill Gaps — Shortage of developers proficient in emerging platforms",
      "Security & Privacy — Data breaches, GDPR/CCPA/HIPAA compliance, API vulnerabilities",
      "Supply Chain Attacks — Third-party dependencies introduce security risks",
    ],
  },
  {
    heading: "The Future of Application Platforms",
    body: [
      "AI Integration — GitHub Copilot for code generation; automated testing; intelligent recommendations; natural language interfaces",
      "Low-Code/No-Code Expansion — Citizen developers creating business apps; visual development replacing traditional coding",
      "Extended Reality (XR) — AR/VR platforms; Metaverse development frameworks; spatial computing and 3D interfaces",
      "Serverless & Edge Computing — FaaS eliminating server management; reduced latency; cost optimization through pay-per-use",
      "Sustainability & Green Computing — Energy-efficient architectures; carbon-aware computing; environmental impact monitoring",
      "Quantum Computing Platforms — IBM Qiskit, AWS Braket; quantum algorithms for optimization and cryptography",
      "Blockchain & Decentralization — dApp platforms; Web3 technologies and smart contracts",
    ],
  },
];

const questions = [
  { question: "What best describes an application platform?", options: ["A physical computer component", "A software environment used to develop and run applications", "A programming language only", "A database system"] },
  { question: "Which of the following is an example of a desktop application platform?", options: ["Android", "Microsoft Windows", "Google Chrome", "AWS"] },
  { question: "Which application runs primarily on a web application platform?", options: ["Adobe Photoshop", "VLC Media Player", "Google Docs", "Microsoft Paint"] },
  { question: "What is the main purpose of a mobile application platform?", options: ["To replace desktop computers", "To manage business databases", "To support applications designed for smartphones and tablets", "To host websites"] },
  { question: "Which of the following is an example of a cloud application platform?", options: ["macOS", "Android Studio", "Amazon Web Services (AWS)", "Microsoft Word"] },
  { question: "Which platform type allows applications to be accessed using a web browser?", options: ["Desktop Application Platform", "Mobile Application Platform", "Web Application Platform", "Enterprise Application Platform"] },
  { question: "Which application is commonly associated with a mobile application platform?", options: ["SAP ERP", "GCash", "Microsoft Excel (desktop)", "VLC Media Player"] },
  { question: "What is a major advantage of cloud application platforms?", options: ["They require physical servers for each user", "They allow applications to scale easily", "They only work offline", "They are limited to one device"] },
  { question: "Which platform allows one codebase to run on multiple operating systems?", options: ["Desktop Platform", "Enterprise Platform", "Cross-Platform Application Platform", "Web Hosting Platform"] },
  { question: "Which of the following is an example of a low-code / no-code platform?", options: ["Microsoft Power Apps", "Java", "Linux", "MySQL"] },
  { question: "Application platforms help developers build, run, and manage applications.", options: ["True", "False"] },
  { question: "Desktop applications always require an internet connection to work.", options: ["True", "False"] },
  { question: "Google Docs is an example of a web application.", options: ["True", "False"] },
  { question: "Mobile application platforms are designed mainly for laptops and desktop computers.", options: ["True", "False"] },
  { question: "Cloud application platforms eliminate the need for local hardware resources.", options: ["True", "False"] },
  { question: "Security and data privacy are major challenges faced by application platforms.", options: ["True", "False"] },
  { question: "Low-code platforms require advanced programming knowledge to use.", options: ["True", "False"] },
  { question: "Cross-platform development helps reduce development time and cost.", options: ["True", "False"] },
  { question: "Application platforms have no role in modern business and industry.", options: ["True", "False"] },
  { question: "Artificial Intelligence is influencing the future of application platforms.", options: ["True", "False"] },
];

const answerKey = ["B","B","C","C","C","C","B","B","C","A","True","False","True","False","True","True","False","True","False","True"];

export default function Lesson8() {
  return (
    <LessonPage
      lessonId={8}
      lessonTitle="Application Platforms"
      lessonShortTitle="App Platforms"
      lessonIcon="📦"
      youtubeUrl={YOUTUBE_URL}
      googleSlidesUrl={GOOGLE_SLIDES_URL}
      sections={sections}
      questions={questions}
      answerKey={answerKey}
      color="cream"
    />
  );
}