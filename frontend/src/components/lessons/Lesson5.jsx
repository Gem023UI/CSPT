import React from "react";
import LessonPage from "../LessonPage";

// ── PASTE YOUR LINKS BELOW ─────────────────────────────────────────
const YOUTUBE_URL = "https://www.youtube.com/embed/4tYfmxjCeaE";        // e.g. "https://www.youtube.com/embed/VIDEO_ID"
const GOOGLE_SLIDES_URL = "https://docs.google.com/presentation/d/e/2PACX-1vSxZBcjXqQSM-4VQSxTgYnEaXndrE5HdylnjQ_RtluLAvLtzGyj8pvb36c6b1FwFg/pubembed?start=false&loop=false&delayms=3000";  // e.g. "https://docs.google.com/presentation/d/ID/embed"
// ──────────────────────────────────────────────────────────────────

const sections = [
  {
    heading: "What is a Computing Platform?",
    body: "A computing platform refers to the environment in which a piece of software is executed. It includes the hardware architecture (CPU, memory, storage), operating system, and sometimes runtime libraries. Computing platforms have evolved significantly since the inception of computers.",
  },
  {
    heading: "History: Early Computing Platforms (1940s–1960s)",
    body: [
      "Vacuum Tube Computers — Earliest platforms like ENIAC (1945). Massive machines occupying entire rooms; thousands of vacuum tubes; prone to frequent malfunctions; limited programming flexibility",
      "Transistor Computers — Late 1950s; transistors replaced vacuum tubes, smaller and more reliable. Example: IBM 1401 (1959); marked a step toward practical and efficient computing",
    ],
  },
  {
    heading: "History: Mainframe & Minicomputer Era (1960s–1980s)",
    body: [
      "Mainframe Era (1960s–1970s) — IBM System/360 (1964) dominated businesses and governments. Large-scale batch processing; multiple users via terminals; centralized computing",
      "Minicomputers (1960s–1980s) — DEC PDP-11; smaller, more affordable; multiple users with real-time computing. Democratized computing for smaller businesses, labs, and universities",
      "Personal Computer (1970s–1980s) — Apple II (1977), IBM PC (1981). Combined hardware (x86) with OS (MS-DOS, early macOS); made computing accessible to the general public",
    ],
  },
  {
    heading: "History: Modern Computing Platforms",
    body: [
      "Client-Server & Network Platforms (1980s–1990s) — UNIX servers, Windows NT, early Linux. Centralized data management; multiple users; collaborative applications",
      "Mobile & Embedded Platforms (1990s–2000s) — Symbian OS, Palm OS, Windows CE. Low power consumption, portability, user-friendly interfaces; paved way for smartphones",
      "Modern Platforms (2000–present) — Desktop/laptop (Windows, macOS, Linux), Mobile (iOS, Android), Cloud (AWS, Azure, Google Cloud), IoT (Arduino, Raspberry Pi), Gaming consoles (PlayStation, Xbox, Nintendo Switch)",
    ],
  },
  {
    heading: "Current Technologies of Computing Platforms",
    body: [
      "Personal Computing — Desktop PCs, laptops; Windows, macOS, Linux. Examples: Dell XPS with Windows 11, Apple MacBook Pro with macOS Ventura",
      "Mobile Computing — Smartphones, tablets; Android, iOS. Examples: Samsung Galaxy (Android), iPhone 15 (iOS)",
      "Cloud Computing — IaaS, PaaS, SaaS. Examples: Amazon Web Services (AWS), Microsoft Azure, Google Cloud Platform (GCP)",
      "Embedded & IoT — Microcontrollers, Raspberry Pi, Arduino, ESP32. Use cases: Smart devices, home automation, industrial control",
      "Console/Gaming — PlayStation 5, Xbox Series X, Nintendo Switch. Proprietary firmware and game stores",
      "Virtualization & Containers — VMware, Docker, Kubernetes. Multiple virtual platforms on same hardware",
    ],
  },
  {
    heading: "Cloud Service Models",
    body: [
      "IaaS (Infrastructure as a Service) — Provides virtualized computing resources: servers, storage, networking over the internet. Users manage infrastructure without owning hardware",
      "PaaS (Platform as a Service) — Platform for developers to build, test, and deploy applications without managing underlying infrastructure",
      "SaaS (Software as a Service) — Delivers software applications over the internet on a subscription basis, accessible through a web browser",
    ],
  },
  {
    heading: "Benefits of Cloud Computing",
    body: [
      "Cost Efficiency — Avoid large expenditures in physical infrastructure; pay only for resources used",
      "Scalability — Swiftly change resources up or down in response to demand",
      "Accessibility — Apps and data accessible via internet at any time from any location",
      "Collaboration — Increased collaboration through shared access to data and tools",
    ],
  },
  {
    heading: "Challenges of Computing Platforms",
    body: [
      "Hardware-Software Compatibility — Not all software runs on every platform (e.g., macOS vs Windows)",
      "Security Threats — Vulnerabilities in OS, applications, or cloud environments can be exploited",
      "Resource Management — Ensuring optimal CPU, memory, and storage allocation for multiple applications",
      "Platform Fragmentation — Mobile OS versions, device capabilities, and browsers create inconsistent experiences",
      "Scalability — Cloud platforms must scale dynamically without performance loss",
      "Cost — Maintaining hardware, licensing OS, and software subscriptions can be expensive",
      "User Adaptation — Rapid technological changes require continuous learning and adaptation",
    ],
  },
  {
    heading: "Future of Computing Platforms",
    body: [
      "Convergence & Platform Unification — Seamless experiences across devices and ecosystems",
      "AI-Driven & Autonomous Platforms — Intelligent, self-managing computing environments",
      "Ubiquitous Computing — Computing embedded in everyday objects and environments",
      "Edge Computing — Processing data closer to the source, reducing latency",
      "Green Computing — Energy-efficient platforms reducing environmental impact",
      "Virtual & Augmented Reality — Immersive computing experiences",
    ],
  },
  {
    heading: "Applications of Computing Platforms",
    body: [
      "Business — Hosting, analytics, collaboration, and AI services",
      "Education — E-learning platforms and virtual labs",
      "Healthcare — Telemedicine and medical device integration",
      "Manufacturing — Industrial automation and monitoring via IoT",
      "Logistics — Real-time tracking and supply chain management",
      "Entertainment — Video streaming, gaming, and social media",
    ],
  },
];

const questions = [
  { question: "What is a computing platform?", options: ["A type of hardware only", "The environment where software is executed including hardware, OS, and runtime", "A programming language", "A type of database"] },
  { question: "Which was the first type of electronic computer?", options: ["Transistor computers", "Minicomputers", "Vacuum tube computers", "Personal computers"] },
  { question: "What replaced vacuum tubes in late 1950s computers?", options: ["Integrated circuits", "Transistors", "Microprocessors", "Solid-state drives"] },
  { question: "Which IBM system dominated the Mainframe Era?", options: ["IBM 1401", "IBM PC", "IBM System/360", "IBM ThinkPad"] },
  { question: "What was the first widely available personal computer platform?", options: ["ENIAC", "Apple II and IBM PC", "DEC PDP-11", "Nintendo"] },
  { question: "Which cloud service model provides virtualized servers and networking?", options: ["SaaS", "PaaS", "IaaS", "DaaS"] },
  { question: "Which cloud model is a platform for developers to build apps without managing hardware?", options: ["SaaS", "IaaS", "FaaS", "PaaS"] },
  { question: "Which cloud service model delivers software over the internet via subscription?", options: ["IaaS", "PaaS", "SaaS", "HaaS"] },
  { question: "What cloud benefit allows resources to be adjusted based on demand?", options: ["Accessibility", "Collaboration", "Scalability", "Cost Efficiency"] },
  { question: "Which OS platforms are used in mobile computing?", options: ["Windows and macOS", "Android and iOS", "Linux and UNIX", "DOS and CP/M"] },
  { question: "What is platform fragmentation?", options: ["A storage issue", "Inconsistent experiences across different OS versions and devices", "A network security problem", "A type of software bug"] },
  { question: "Which platforms are examples of IoT/embedded computing?", options: ["AWS and Azure", "PlayStation and Xbox", "Raspberry Pi and Arduino", "Windows and macOS"] },
  { question: "What does Docker/Kubernetes represent in computing platforms?", options: ["Mobile platforms", "Virtualization & Container platforms", "Gaming platforms", "Embedded platforms"] },
  { question: "Which sector uses cloud platforms for patient data and medical devices?", options: ["Education", "Healthcare", "Gaming", "Industrial Automation"] },
  { question: "Which future trend involves bringing processing closer to the data source?", options: ["Green Computing", "Ubiquitous Computing", "AI-Driven platforms", "Edge Computing"] },
  { question: "What security concern involves relying on third-party suppliers to protect data?", options: ["Platform fragmentation", "Hardware compatibility", "Vendor lock-in", "Cloud provider data security"] },
  { question: "Which platforms are VMware, Docker, and Kubernetes examples of?", options: ["Mobile Platforms", "Virtualization & Container Platforms", "Gaming Platforms", "Embedded Platforms"] },
  { question: "Which sector uses embedded systems in medical devices?", options: ["Education", "Healthcare", "Gaming", "Industrial Automation"] },
  { question: "What is a major security concern for cloud computing enterprises?", options: ["Relying on third-party suppliers to protect sensitive information", "The high cost of vacuum tube replacement", "Lack of internet access", "The size of the hardware"] },
  { question: "What is one upcoming trend for computing platforms?", options: ["Returning to batch processing", "Increased use of vacuum tubes", "AI-driven/autonomous platforms and Edge computing", "Moving away from mobile devices"] },
];

const answerKey = ["B","C","B","C","B","C","D","C","C","B","B","C","B","B","D","D","B","B","A","C"];

export default function Lesson5() {
  return (
    <LessonPage
      lessonId={5}
      lessonTitle="Computing Platforms"
      lessonShortTitle="Computing Platforms"
      lessonIcon="☁️"
      youtubeUrl={YOUTUBE_URL}
      googleSlidesUrl={GOOGLE_SLIDES_URL}
      sections={sections}
      questions={questions}
      answerKey={answerKey}
      color="purple"
    />
  );
}