import React from "react";
import LessonPage from "../LessonPage";

// ── PASTE YOUR LINKS BELOW ─────────────────────────────────────────
const YOUTUBE_URL = "https://www.youtube.com/embed/409FGi8-ZfA";        // e.g. "https://www.youtube.com/embed/VIDEO_ID"
const GOOGLE_SLIDES_URL = "https://docs.google.com/presentation/d/e/2PACX-1vQXUkUNqhuqBklRNkJ5hMc3dM-zMV9S8r_0XJORNgKNvTkmUNYqJBSp3fTdVL59KA/pubembed?start=false&loop=false&delayms=3000";  // e.g. "https://docs.google.com/presentation/d/ID/embed"
// ──────────────────────────────────────────────────────────────────

const sections = [
  {
    heading: "What is a Storage Platform?",
    body: "A storage platform is an integrated ecosystem designed to store, manage, protect, and provide access to digital data across various environments. It serves as the foundational layer that enables applications, users, and organizations to work with data efficiently and reliably.",
  },
  {
    heading: "How Storage Platforms Support Stakeholders",
    body: [
      "Users — Personal/Home: Cloud storage (Google Drive, Dropbox, iCloud); Enterprise: Network shares and collaboration spaces; Developers: Code repositories, container registries, CI/CD artifacts",
      "Organizations — Business Continuity: Ensures data availability during outages; Compliance: Meets GDPR, HIPAA, SOX requirements; Cost Management: Optimizes expenditure through tiering",
      "Applications — Database Systems: Low-latency block storage; Web Apps: Scalable object storage for media; Enterprise Apps: Shared file storage; Big Data/Analytics: High-throughput storage",
    ],
  },
  {
    heading: "Importance of Storage Platforms",
    body: [
      "Ensures data availability and reliability at all times",
      "Protects data from loss or failure through redundancy",
      "Supports business operations and data-driven decision-making",
    ],
  },
  {
    heading: "Main Types of Storage Platforms",
    body: [
      "DAS (Direct-Attached Storage) — Storage directly connected to a computer or server. Simple, low-cost. Limited scalability and sharing. Examples: Internal hard drives inside a PC, external USB drive, SAS drives in server bays",
      "NAS (Network-Attached Storage) — Storage connected to a network; allows multiple users to access files. Uses SMB/CIFS (Windows), NFS (Linux), AFP (Mac). Has its own OS and management interface. Common in homes and small offices",
      "SAN (Storage Area Network) — High-speed dedicated network for block-level storage (Fibre Channel or iSCSI). Storage appears as local drives to servers. Used in enterprise environments for high performance and scalability. Managed centrally by storage administrators",
      "Cloud Storage — Data on remote servers via the internet. Highly scalable, accessed via APIs. Pay-as-you-go pricing. Managed entirely by cloud provider. Examples: Google Drive, AWS S3, Microsoft Azure",
    ],
  },
  {
    heading: "Features of Storage Platforms",
    body: [
      "Data Security & Encryption — Protects stored data from unauthorized access using encryption and access controls",
      "High Availability & Redundancy — Ensures data remains accessible by storing multiple copies across different servers or locations",
      "Scalability — The ability to easily increase or decrease storage capacity as data needs grow or shrink",
      "Performance & Speed Optimization — Improves how fast data can be stored, retrieved, or processed",
      "Multi-Platform Access & Integration — Allows data to be accessed across different devices, OS, and applications",
      "Data Backup & Disaster Recovery — Automatically creates backups and enables restoration after system failures or disasters",
    ],
  },
  {
    heading: "Use Cases of Storage Platforms",
    body: [
      "File Saving — People and businesses use cloud storage (Google Drive, Dropbox) to store and access files from anywhere",
      "Big Data Handling for AI & Research — Companies use Hadoop HDFS to process and analyze huge amounts of information such as customer trends",
      "Data Backup — Companies use services like Azure Backup to keep copies safe against cyberattacks or computer failures",
      "Media Streaming — Platforms like Netflix and YouTube store massive amounts of video and deliver content to users at scale",
      "Virtual Machines & Cloud Apps — AWS EBS stores data for virtual machines and applications running online",
      "Smart Devices (IoT) — Edge Storage saves and processes data from smart home devices and industrial machines without needing internet",
    ],
  },
  {
    heading: "Advantages of Storage Platforms",
    body: [
      "Reliable Data Availability — Ensures data is consistently accessible whenever users or systems need it",
      "Fast Disaster Recovery — Quick restoration of data after system failures, reducing downtime and data loss",
      "Security Protection — Safeguards data against unauthorized access, breaches, and cyber threats",
      "Cost-Effective — Eliminates need for expensive hardware; users pay only for the storage they use",
    ],
  },
  {
    heading: "Challenges of Storage Platforms",
    body: [
      "Scalability Issues — As data grows exponentially, storage platforms must scale efficiently",
      "Cost Management — Storing and managing large amounts of data can be expensive",
      "Security & Privacy Concerns — Data breaches, cyberattacks, and compliance with regulations (GDPR, HIPAA, SOX)",
      "Performance Bottlenecks — High-speed data access and retrieval can be difficult to maintain",
      "Data Redundancy & Loss — Ensuring data integrity and avoiding loss due to hardware failure or cyber threats",
      "Energy Consumption & Environmental Impact — Data centers require significant power, raising sustainability concerns",
      "Integration Challenges — Many organizations use multiple storage solutions, making seamless integration difficult",
    ],
  },
  {
    heading: "Emerging Trends in Storage",
    body: [
      "Cloud-Native Storage — Rise of cloud computing led to more flexible, scalable, cost-efficient solutions (AWS, Google Cloud, Azure)",
      "Edge Storage — With IoT and edge computing, data is processed/stored closer to the source, reducing latency and bandwidth costs",
      "AI & Machine Learning in Storage — AI-driven management helps optimize performance, predict failures, and automate data organization",
      "Blockchain for Secure Storage — Decentralized storage using blockchain enhances data security, integrity, and transparency",
      "Software-Defined Storage (SDS) — Separating storage software from hardware allows for more scalable and cost-effective solutions",
      "Hybrid & Multi-Cloud Strategies — Mix of on-premise, private, and public cloud storage for better flexibility and disaster recovery",
      "NVMe & SSD Adoption — Faster, more efficient storage solutions like NVMe and SSDs improve performance significantly",
    ],
  },
];

const tableData = {
  headers: ["Type", "Connection", "Best For", "Example"],
  rows: [
    ["DAS", "Direct to computer/server", "Single-user, simple storage", "External USB drive"],
    ["NAS", "Network (Ethernet)", "Multi-user file sharing", "Synology NAS"],
    ["SAN", "Dedicated high-speed network", "Enterprise block storage", "Fibre Channel SAN"],
    ["Cloud", "Internet", "Scalable remote storage", "AWS S3, Google Drive"],
  ],
};

const questions = [
  { question: "What is a storage platform?", options: ["A device used only for processing data", "A system used to store, manage, and access data", "A software used only for gaming", "A network cable"] },
  { question: "Why are storage platforms important?", options: ["They make computers faster", "They ensure data availability and protection", "They replace operating systems", "They only store temporary files"] },
  { question: "Which storage type is directly connected to a single computer or server?", options: ["NAS", "SAN", "DAS", "Cloud Storage"] },
  { question: "Which storage type allows multiple users on a network to access files simultaneously?", options: ["DAS", "NAS", "SAN", "Tape Storage"] },
  { question: "What type of storage uses a high-speed dedicated network for enterprise block-level storage?", options: ["DAS", "NAS", "Cloud Storage", "SAN"] },
  { question: "Which protocols does NAS use for Windows file sharing?", options: ["HTTP/HTTPS", "FTP/SFTP", "TCP/UDP", "SMB/CIFS"] },
  { question: "Which of the following is an example of cloud storage?", options: ["Internal hard drive", "USB flash drive", "Google Drive", "DVD"] },
  { question: "Which challenge is specifically associated with the exponential growth of data?", options: ["Security & Privacy Concerns", "Scalability Issues", "Energy Consumption", "Integration Challenges"] },
  { question: "How does AI primarily assist in storage management?", options: ["By eliminating the need for physical hardware", "By providing decentralized security through blockchain", "By optimizing performance and predicting potential failures", "By reducing the cost of SSD and NVMe adoption"] },
  { question: "What is the main purpose of Software-Defined Storage (SDS)?", options: ["To separate storage software from hardware for better scalability", "To increase the physical speed of data retrieval", "To move data processing closer to the source", "To manage data redundancy and prevent hardware failure"] },
  { question: "Why are organizations increasingly adopting Edge Storage?", options: ["To comply with complex global data regulations", "To lower the high cost of energy consumption", "To reduce latency and bandwidth costs by storing data near its source", "To integrate multiple storage solutions more seamlessly"] },
  { question: "What environmental concern is linked to large data centers?", options: ["The high cost of managing large amounts of data", "Performance bottlenecks during high-speed access", "Significant power requirements affecting sustainability", "Data loss caused by cyber threats"] },
  { question: "Which technology enhances data integrity and transparency through decentralization?", options: ["Cloud-Native Storage", "NVMe & SSD Adoption", "Blockchain", "Hybrid-Cloud Strategies"] },
  { question: "What is the main purpose of high availability and redundancy?", options: ["To reduce storage costs", "To improve file compression", "To ensure data access during failures", "To speed up file uploads"] },
  { question: "Which use case focuses on protecting data from loss due to system failure?", options: ["File Saving", "Data Backup", "Smart Devices Data Storage", "Media Streaming"] },
  { question: "Which advantage ensures data can be accessed anytime when needed?", options: ["Cost-Effective", "Fast Disaster Recovery", "Reliable Data Availability", "Security Protection"] },
  { question: "Why are storage platforms considered cost-effective?", options: ["They eliminate all security risks", "They require manual backups", "They reduce hardware and maintenance costs", "They slow down system performance"] },
  { question: "Which feature allows connection between storage platforms and third-party applications?", options: ["Data Security", "Scalability", "Multi-Platform Access & Integration", "Backup"] },
  { question: "Which feature allows a storage platform to grow its capacity without interrupting services?", options: ["Data Compression", "Encryption", "Caching", "Scalability"] },
  { question: "Which feature improves access speed by optimizing how data is stored and retrieved?", options: ["Redundancy", "High Availability", "Scalability", "Performance & Speed Optimization"] },
];

const answerKey = ["B","B","C","B","D","D","C","B","C","A","C","C","C","C","B","C","C","C","D","D"];

export default function Lesson7() {
  return (
    <LessonPage
      lessonId={7}
      lessonTitle="Storage Platforms"
      lessonShortTitle="Storage Platforms"
      lessonIcon="💾"
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