import React from "react";
import LessonPage from "../LessonPage";

const YOUTUBE_URL = "https://www.youtube.com/embed/lA4_PcUL_Wc";
const GOOGLE_SLIDES_URL = "https://docs.google.com/presentation/d/e/2PACX-1vQJVXf6Nj2P7ojr2jXf26-5FSGPBt38sEggiSzDWeIPGXnoR873_gNsX41cXp5DDA/pubembed?start=false&loop=false&delayms=3000";

const sections = [
  {
    heading: "DBMS vs DBaaS",
    body: [
      "DBMS (Database Management System) — Software like MySQL, PostgreSQL, or Oracle that provides tools to create, retrieve, and manage data. You are responsible for the server it runs on, installation, and all maintenance.",
      "DBaaS (Database as a Service) — A cloud computing service like Amazon RDS, Google Cloud SQL, or MongoDB Atlas where you 'rent' access to a database. The cloud provider handles hardware, software installation, patching, and backups.",
    ],
  },
  {
    heading: "History: Pre-Database Era (Pre-1960s)",
    body: "Before computers, data storage was manual and labor-intensive. Filing cabinets filled with paper records served as the primary 'database' for businesses. These systems were limited by slow retrieval, error-prone filing, and poor accessibility. Despite their limitations, filing cabinets laid the groundwork for systematic data organization, inspiring the structured approach used in digital databases today.",
  },
  {
    heading: "History: The Navigational Era (1960s–1970s)",
    body: "The mid-20th century saw flat-file systems emerge for digital data storage. Early digital systems stored data in simple text files resembling digital paper records, but came with significant drawbacks: redundancy (duplicate data entries were common) and lack of relationships (flat files couldn't easily link related data). This stage marked the transition from physical to digital storage but highlighted the need for more sophisticated solutions.",
  },
  {
    heading: "History: The Relational Revolution (1970s–1990s)",
    body: "In 1970, Edgar F. Codd introduced the relational model, transforming data management. Relational databases like IBM's System R and later Oracle became the industry standard. Key features: SQL allowed users to interact with data efficiently, data could be linked across tables reducing redundancy, and normalization ensured data consistency and integrity. Relational databases dominated for decades and still form the foundation of enterprise data systems.",
  },
  {
    heading: "History: The NoSQL & Big Data Era (2000s)",
    body: [
      "With the explosion of the internet and unstructured data, traditional relational databases faced scalability and flexibility challenges",
      "NoSQL databases like MongoDB, Cassandra, and Firebase emerged to handle unstructured data (documents, images, videos)",
      "Horizontal scaling was introduced — supporting massive data volumes across distributed systems",
      "Faster performance enabled real-time applications",
      "NoSQL databases complemented relational systems, expanding possibilities for data storage and analysis",
    ],
  },
  {
    heading: "History: The Cloud & AI Era (2010s–Present)",
    body: [
      "Cloud computing made databases scalable, accessible, and low-maintenance",
      "On-demand scalability — adjust storage and processing power as needed",
      "Global accessibility — access databases from anywhere in the world",
      "AI-driven insights — advanced analytics powered by AI and machine learning",
      "Blockchain integration — decentralized data storage for enhanced security and transparency",
      "Serverless and autonomous database technologies emerged",
    ],
  },
  {
    heading: "The Core Trio: SQL",
    body: "SQL databases are built on the Relational Model where data is organized into predefined tables with strict relationships. Governed by ACID properties (Atomicity, Consistency, Isolation, Durability), ensuring transactions are never 'partially' completed. Data Structure: Structured (Rows and Columns). Scaling: Primarily Vertical (buying a bigger, faster server). Best For: Applications where data integrity is non-negotiable — Financial Systems, ERPs, and Healthcare records. Trade-off: Can become a bottleneck at massive global-scale traffic because 'locking' tables to ensure consistency takes time.",
  },
  {
    heading: "The Core Trio: NoSQL",
    body: "NoSQL emerged to solve the 'Big Data' problem. Uses documents, graphs, or key-value pairs instead of rigid tables. Prioritizes Availability and Partition Tolerance (CAP Theorem) over immediate consistency. Data Structure: Unstructured or Semi-structured (JSON documents, Key-Values). Scaling: Horizontal (adding more cheap servers to a 'cluster'). Best For: Social media feeds, IoT sensor data, Content Management, and Real-time Analytics. Trade-off: Uses 'Eventual Consistency' — if you update your profile picture, a user in another country might still see the old one for a few seconds.",
  },
  {
    heading: "The Core Trio: NewSQL",
    body: "NewSQL is a class of modern relational databases that provide the same scalable performance as NoSQL while maintaining ACID guarantees of traditional SQL — essentially 'distributed SQL.' Uses clever consensus algorithms (like Paxos or Raft) and precise time-keeping (like Google's Atomic Clocks) to keep data consistent across different global locations simultaneously. Scaling: Horizontal (like NoSQL), but still queried using SQL. Best For: Global SaaS platforms, high-volume e-commerce, and modern fintech that needs to scale across continents without losing a single cent in a transaction. Trade-off: More complex to set up and can be more expensive than traditional open-source SQL options.",
  },
  {
    heading: "Top 5 Database Platforms",
    body: [
      "PostgreSQL — Open-source 'Swiss Army Knife.' Extensions allow it to handle spatial data (PostGIS), time-series data (TimescaleDB), and act like a NoSQL store. Strong data integrity, supports structured and semi-structured data (JSON, XML). Standard choice for new startups and modernization projects.",
      "Oracle Database — Enterprise backbone of the world's banks, airlines, and governments. Most robust security and compliance features. 'Converged Database' philosophy handles JSON, Graph, and Relational data in one engine. Excellent security, backup, and handles massive workloads.",
      "MySQL — World's most deployed open-source database. Incredibly fast for 'Read-Heavy' workloads (e.g., displaying a social media feed). Default for millions of WordPress and e-commerce sites. ACID-compliant when using the InnoDB engine.",
      "MongoDB Atlas — Transitioned from a 'NoSQL database' to a full-scale Developer Data Platform. Document model (JSON) mirrors how developers write code — fastest way to build mobile and web apps. Schema-flexible, scales horizontally, high availability with replica sets.",
      "Snowflake — Redefined how companies think about Data Lakes and Data Warehouses. Separates storage from compute, meaning you only pay for processing power you use. Works seamlessly across AWS, Azure, and Google Cloud. Optimized for analytics and business intelligence.",
    ],
  },
  {
    heading: "The Cloud Titans",
    body: [
      "AWS (~31% market share) — The 'Utility' Titan. Philosophy: 'purpose-built databases.' Flagship: Amazon Aurora (up to 5x faster than standard MySQL). NoSQL Standard: DynamoDB (used by Amazon.com for Prime Day). Edge: Zero-ETL Integration allowing data to flow from Aurora to Redshift instantly.",
      "Microsoft Azure (~25% market share) — The 'Enterprise' Titan. Natural home for companies using Windows, Office 365, or Active Directory. Flagship: Azure SQL Database (serverless, based on SQL Server). Multi-Model Star: Cosmos DB (Document, Graph, or Key-Value store). Edge: Azure HorizonDB with deep OpenAI integration.",
      "Google Cloud Platform (~11-13% market share) — The 'Data & AI' Titan. Flagship: BigQuery — industry leader in Serverless data warehousing, queries petabytes in seconds. The 'Impossible' Database: Cloud Spanner — first database offering both global scalability AND strict consistency simultaneously. Edge: Vertex AI Integration — run LLMs directly inside the database.",
    ],
  },
  {
    heading: "Modern Challenges",
    body: [
      "Handling Massive & Diverse Data — Modern applications generate huge volumes of structured and unstructured data. Databases must scale efficiently while maintaining speed and reliability across distributed systems.",
      "Security & Compliance — Sensitive data stored in the cloud and across borders faces increasing threats. Compliance with regulations like GDPR (General Data Protection Regulation) adds complexity for organizations managing user data.",
      "Complexity & Resource Management — Modern databases often run in hybrid or multi-cloud setups, combining SQL, NoSQL, and AI-driven systems. Managing this complexity requires skilled teams and careful resource allocation.",
    ],
  },
];

const tableData = {
  headers: ["Type", "Model", "Scaling", "Best For"],
  rows: [
    ["SQL", "Relational (Tables)", "Vertical", "Financial systems, ERP, Healthcare"],
    ["NoSQL", "Documents / Key-Value / Graph", "Horizontal", "Social media, IoT, Real-time analytics"],
    ["NewSQL", "Distributed Relational", "Horizontal", "Global SaaS, Fintech, E-commerce"],
  ],
};

const questions = [
  { question: "What does DBMS stand for?", options: ["Data Backup Management System", "Database Management System", "Distributed Binary Management Software", "Digital Base Monitoring Service"] },
  { question: "Who introduced the relational model in 1970?", options: ["Alan Turing", "Bill Gates", "Edgar F. Codd", "Tim Berners-Lee"] },
  { question: "What does ACID stand for in database transactions?", options: ["Atomicity, Consistency, Isolation, Durability", "Access, Control, Integration, Data", "Automated, Connected, Indexed, Distributed", "Accuracy, Compression, Integrity, Delivery"] },
  { question: "Which SQL database is known as the world's most deployed open-source database?", options: ["PostgreSQL", "Oracle", "MySQL", "MongoDB"] },
  { question: "What is the main scaling method for NoSQL databases?", options: ["Vertical scaling (bigger server)", "Horizontal scaling (more servers)", "Cloud-only scaling", "Manual scaling"] },
  { question: "What does NewSQL combine?", options: ["NoSQL performance with no consistency", "SQL consistency with NoSQL horizontal scalability", "Blockchain with relational tables", "Graph databases with key-value stores"] },
  { question: "Which cloud database is described as the 'Impossible' database offering both global scalability AND strict consistency?", options: ["Amazon Aurora", "Azure Cosmos DB", "Google Cloud Spanner", "Snowflake"] },
  { question: "What makes Snowflake unique among database platforms?", options: ["It is open-source and self-hosted", "It separates storage from compute for flexible pricing", "It only works with MySQL", "It uses graph-based data models"] },
  { question: "Which NoSQL database is known for its JSON document model that mirrors how developers write code?", options: ["PostgreSQL", "Oracle", "MySQL", "MongoDB Atlas"] },
  { question: "What is a DBaaS?", options: ["A desktop backup application", "A cloud service where a provider manages the database infrastructure for you", "A type of SQL query language", "A database only used by governments"] },
  { question: "What challenge does the CAP Theorem relate to in NoSQL databases?", options: ["Cost and performance", "Availability and Partition Tolerance vs. immediate Consistency", "Security and encryption", "Backup and recovery"] },
  { question: "Which era introduced flat-file systems and digital data storage?", options: ["Pre-Database Era", "Navigational Era", "Relational Revolution", "NoSQL Era"] },
  { question: "What is PostgreSQL's key advantage that makes it a 'Swiss Army Knife'?", options: ["It is the fastest database in the world", "It uses blockchain for storage", "Its extensibility — extensions allow it to handle spatial, time-series, and NoSQL workloads", "It is owned by Microsoft"] },
  { question: "What is Amazon Aurora described as?", options: ["A NoSQL database for documents", "A cloud-native relational database up to 5x faster than standard MySQL", "A data visualization tool", "A graph database for social networks"] },
  { question: "Which modern challenge involves rules like GDPR that add compliance complexity?", options: ["Handling Massive Data", "Security & Compliance", "Performance Optimization", "Horizontal Scaling"] },
];

const answerKey = ["B","C","A","C","B","B","C","B","D","B","B","B","C","B","B"];

export default function Lesson6() {
  return (
    <LessonPage
      lessonId={6}
      lessonTitle="Database Platforms"
      lessonShortTitle="Database Platforms"
      lessonIcon="🗄️"
      youtubeUrl={YOUTUBE_URL}
      googleSlidesUrl={GOOGLE_SLIDES_URL}
      sections={sections}
      tableData={tableData}
      questions={questions}
      answerKey={answerKey}
      color="purple"
    />
  );
}