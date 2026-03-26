import React from "react";
import LessonPage from "../LessonPage";

const YOUTUBE_URL = "https://www.youtube.com/embed/Iwa3jRDMMBg";
const GOOGLE_SLIDES_URL = "https://docs.google.com/presentation/d/e/2PACX-1vRRlJu0O0vEwwi6yU8BESjWJGo9zjd6SIIcAz6lDhAcb4qM0VfN0WBE_bOVArt0WQ/pubembed?start=false&loop=false&delayms=3000";

const sections = [
  {
    heading: "What is an Operating System?",
    body: "An Operating System (OS) is the most critical software that acts as the fundamental bridge between the computer user and the hardware components. Without an OS, a user would need to speak the computer's binary language to operate simple devices like a keyboard or a monitor. The Intermediary: It serves as the interface that translates user commands into machine code that the hardware can understand. The Resource Manager: It controls and coordinates the use of hardware among various application programs for different users. Examples: Microsoft Windows, macOS, Linux, Android, and iOS.",
  },
  {
    heading: "Key Functions: Managing the CPU & Memory",
    body: [
      "Process Management — Handles multitasking by allocating CPU time to different programs, allowing you to listen to music while browsing the web",
      "Memory Management — Tracks every byte of memory used, ensuring that one app does not overwrite the memory space of another app",
      "Error Handling — Detects errors in the CPU or memory and helps the system recover without shutting down completely",
    ],
  },
  {
    heading: "Key Functions: Storage, Peripherals & Security",
    body: [
      "File Management — Organizes data into a structured hierarchy of directories and folders for easy retrieval and storage",
      "Device Management (I/O) — Uses specific software called 'drivers' to communicate with peripheral devices like printers, mice, and webcams",
      "Security & Access Control — Manages user accounts, passwords, and permissions to prevent data theft and unauthorized system access",
    ],
  },
  {
    heading: "History: The Text-Based Era (1950s–1970s)",
    body: [
      "Batch Processing (1950s) — Jobs were grouped in 'batches' and processed sequentially via punch cards without direct user interaction. Only one user could operate the computer at a time",
      "Time-Sharing Systems (1960s) — Allowed multiple users to access a single mainframe computer simultaneously, improving efficiency and CPU utilization",
      "Command Line Interface (CLI) — Users typed specific text commands (e.g., UNIX/DOS) to perform tasks; no mouse cursors or icons yet existed",
      "Multiprogramming (1970s) — Multiple programs could reside in memory at the same time; CPU switched between programs reducing idle time and increasing system throughput",
    ],
  },
  {
    heading: "History: The Modern Era (1980s–Present)",
    body: [
      "GUI Revolution (1980s) — Introduced by Apple (Macintosh) and Microsoft (Windows), using windows, icons, menus, and pointers (WIMP) for easy navigation; made computers accessible to the general public",
      "Personal Computing — Shifted focus from shared mainframes to individual desktops and laptops for home and office use",
      "Mobile Operating Systems (2000s) — Touch-optimized OS like Android and iOS introduced, prioritizing portability, battery efficiency, and app ecosystems",
      "Modern Era (2000s–Today) — OS evolved to support mobile devices, cloud computing, and distributed systems; Windows 11, Android, iOS, and Linux designed to be fast, secure, and capable across a wide range of devices",
    ],
  },
  {
    heading: "Types of OS: General-Purpose",
    body: [
      "Time-Sharing (Multitasking) OS — The most common type for modern computers. Allows multiple concurrent tasks to share the CPU, switching between them so rapidly it creates the illusion of simultaneous execution. Examples: Windows 11, macOS, Linux (desktop versions)",
      "Mobile OS — Specialized OS designed for handheld devices like smartphones and tablets. Optimized for touchscreens, battery efficiency, and cellular connectivity. Examples: Android, iOS",
    ],
  },
  {
    heading: "Types of OS: Real-Time & Specialized",
    body: [
      "Hard Real-Time OS (RTOS) — Missing a deadline results in total system failure. Used in critical safety systems. Examples: Airbag control systems, heart pacemakers, flight control computers (avionics)",
      "Soft Real-Time OS — Missing a deadline results in degraded quality but not failure. Examples: Live video streaming (lag is annoying but not fatal), online gaming servers",
      "Network OS (NOS) — Runs on a server and manages data, users, groups, security, and networking. Allows client computers to share files and printers over a LAN. Examples: Windows Server, Red Hat Enterprise Linux",
      "Distributed OS — Connects multiple independent computers to form a single powerful system. The user views the entire network as one machine. Examples: Apache Hadoop, LOCUS, Google's Fuchsia",
      "Embedded OS — Built into larger devices (appliances, cars, elevators, ATMs) to perform dedicated functions with limited resources",
      "Batch OS — Older type where jobs were punched onto cards and submitted to an operator to be processed in a 'batch.' Example: Payroll systems in the 1970s",
    ],
  },
  {
    heading: "Popular Operating Systems",
    body: [
      "Microsoft Windows (~70% global desktop share) — Standard for business, enterprise, and gaming. Windows 10 remains most widely used; Windows 11 is steadily growing",
      "macOS (~10–15% global desktop share) — Dominant in creative industries (design, video editing) and software development",
      "Linux (~4% desktop / dominant in servers) — Preferred by developers, cybersecurity professionals, and privacy advocates",
      "Android (~72% mobile market share) — Most widely used OS on the planet by volume. Used by Samsung, Google, Xiaomi, and many others",
      "iOS (~27% mobile market share) — Runs exclusively on Apple iPhones. Known for strong privacy features and tight hardware-software integration",
    ],
  },
  {
    heading: "Challenges in OS Development",
    body: [
      "Hardware Diversity — OS must support various processors, storage devices, and peripherals from different manufacturers, requiring continuous updates and compatibility testing",
      "Security — With the rise of cyber threats, OS must protect user data from malware, unauthorized access, and system vulnerabilities through constant security patches, access control mechanisms, and encryption",
      "Performance Optimization — OS must efficiently manage CPU time, memory, and storage to ensure smooth operation. Poor optimization leads to slow performance, crashes, or excessive power consumption",
      "Scalability — Modern OS used in servers and cloud environments must handle increasing numbers of users, applications, and data without degrading performance",
      "Reliability & Stability — OS must minimize system failures and recover quickly from errors to ensure continuous availability, particularly in mission-critical systems",
    ],
  },
  {
    heading: "Modern & Future Trends",
    body: [
      "Cloud Engineering — Cloud-based OS allow users to store data and run applications online, enabling access from anywhere. Example: Chrome OS relies heavily on cloud services",
      "Artificial Intelligence — AI is used to optimize resource management, improve system security, and predict system issues before they occur, resulting in smarter and more efficient systems",
      "Internet of Things (IoT) — OS now designed to run on lightweight and embedded devices such as sensors, smart appliances, and wearables. Focus on real-time processing and low power consumption",
      "Encryption & Zero-Trust Security — Future OS expected to adopt zero-trust security models, advanced encryption, and biometric authentication to enhance protection against cyber threats",
      "Quantum & Edge Computing — Research being conducted on OS for quantum and edge computing to handle complex computations and real-time data processing, opening new possibilities for advanced technologies",
    ],
  },
];

const questions = [
  { question: "What was the main characteristic of early computers in the 1940s–1950s?", options: ["They used graphical interfaces", "They operated without an operating system", "They supported multitasking", "They ran on the internet"] },
  { question: "Which operating system era used punch cards to process jobs sequentially?", options: ["Time-sharing systems", "Batch processing systems", "Mobile operating systems", "Distributed systems"] },
  { question: "What improvement did multiprogramming operating systems introduce?", options: ["Touchscreen support", "Multiple users at once", "Multiple programs in memory at the same time", "Cloud storage integration"] },
  { question: "Time-sharing operating systems mainly allowed users to:", options: ["Use computers offline", "Interact with computers simultaneously", "Run only one program", "Process punch cards faster"] },
  { question: "Which feature made personal computers more accessible in the 1990s?", options: ["Command-line interfaces", "Graphical User Interfaces (GUI)", "Batch processing", "Time-sharing systems"] },
  { question: "Which of the following is an example of a mobile operating system?", options: ["Windows Server", "Linux Ubuntu", "Android", "Apache Hadoop"] },
  { question: "Which OS function manages CPU time and multitasking?", options: ["File management", "Process management", "Device management", "Security management"] },
  { question: "What is a major challenge in OS development related to different devices?", options: ["Scalability", "Hardware diversity", "User experience design", "Battery life"] },
  { question: "Which modern OS trend focuses on running applications online?", options: ["Embedded systems", "Cloud-based operating systems", "Batch operating systems", "Real-time systems"] },
  { question: "Which future technology requires new types of operating systems?", options: ["Desktop computing", "Quantum computing", "Word processing", "Batch processing"] },
  { question: "An operating system acts as a bridge between the user and computer hardware.", options: ["True", "False"] },
  { question: "Batch processing systems allowed users to interact with programs in real time.", options: ["True", "False"] },
  { question: "Time-sharing systems improved efficiency by allowing multiple users to access one computer.", options: ["True", "False"] },
  { question: "Graphical User Interfaces replaced text-based command lines for ease of use.", options: ["True", "False"] },
  { question: "Security is not a major concern in modern operating system development.", options: ["True", "False"] },
  { question: "Performance optimization ensures efficient use of CPU, memory, and storage.", options: ["True", "False"] },
  { question: "Internet of Things operating systems are designed for lightweight and embedded devices.", options: ["True", "False"] },
  { question: "Energy efficiency is unimportant in mobile operating systems.", options: ["True", "False"] },
  { question: "Cloud-based operating systems allow access to data from anywhere with an internet connection.", options: ["True", "False"] },
  { question: "Research on future operating systems includes support for quantum and edge computing.", options: ["True", "False"] },
];

const answerKey = ["B","B","C","B","B","C","B","B","B","B","True","False","True","True","False","True","True","False","True","True"];

export default function Lesson4() {
  return (
    <LessonPage
      lessonId={4}
      lessonTitle="Operating Systems"
      lessonShortTitle="Operating Systems"
      lessonIcon="⚙️"
      youtubeUrl={YOUTUBE_URL}
      googleSlidesUrl={GOOGLE_SLIDES_URL}
      sections={sections}
      questions={questions}
      answerKey={answerKey}
      color="purple"
    />
  );
}