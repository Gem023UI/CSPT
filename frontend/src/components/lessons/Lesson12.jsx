import React from "react";
import LessonPage from "../LessonPage";

const YOUTUBE_URL = "https://www.youtube.com/embed/JwvHgOLVSsE";
const GOOGLE_SLIDES_URL = "https://docs.google.com/presentation/d/e/2PACX-1vRHGNCh3IuSiLyZJ3NvBf2Nf8IrCHJeLeq61p0KxLyVtC8pOFcu4tcNzAxXONBsxQ/pubembed?start=false&loop=false&delayms=3000";

const sections = [
  {
    heading: "Introduction to Analytics Systems",
    body: "Analytics in Computer Systems, Platforms & Technologies refers to the comprehensive technology infrastructure that enables organizations to collect, store, process, and analyze data at scale. This ecosystem includes cloud platforms, databases, processing frameworks, APIs, and integration tools that work together to transform raw data into actionable insights. Every digital interaction generates data — website clicks, app usage, purchases, social media posts, sensor readings. Analytics systems provide the infrastructure to capture this data, process it at scale, and extract insights that drive business decisions.",
  },
  {
    heading: "Data Collection Infrastructure",
    body: [
      "Google Analytics — JavaScript tracking code monitors website behavior: page views, clicks, time on site, conversion events",
      "Mobile SDKs — Firebase, Mixpanel, Amplitude track app usage, screen views, user actions, and crashes",
      "Pixel Tracking — Facebook Pixel, LinkedIn Insight Tag monitor conversions for advertising optimization",
      "Heat Mapping — Hotjar, Crazy Egg visualize where users click, scroll, and spend time",
      "Server-Side Tracking — Captures backend events like order processing, payment success, and shipping updates",
    ],
  },
  {
    heading: "APIs & Data Integration",
    body: [
      "REST APIs — Use HTTP methods (GET, POST, PUT, DELETE) to retrieve or send data. Most common API type",
      "Webhooks — Push data in real-time when specific events occur (e.g., new customer signup triggers data sync)",
      "GraphQL — Query language that lets clients request exactly the data they need, nothing more",
      "Streaming APIs — Continuous data flow for real-time applications (Twitter streaming, stock market feeds)",
    ],
  },
  {
    heading: "IoT & Sensor Data Collection",
    body: [
      "Industrial IoT — Factory sensors monitor equipment temperature, vibration, and performance metrics",
      "Smart Cities — Traffic sensors, air quality monitors, and parking meters stream data continuously",
      "Wearables — Fitness trackers and smartwatches collect health metrics, activity data, and location",
      "Protocols — MQTT and CoAP for lightweight device communication; HTTP/HTTPS for cloud connectivity",
    ],
  },
  {
    heading: "Cloud Computing Platforms",
    body: [
      "Amazon Web Services (AWS) — Leads in market share and service variety (200+ services). Best for breadth and flexibility",
      "Google Cloud Platform (GCP) — Excels in data analytics (BigQuery) and ML (TensorFlow, Vertex AI). Best for data-intensive workloads",
      "Microsoft Azure — Dominates in enterprises using Microsoft products (Windows, Office 365). Best for enterprise integration",
      "Multi-cloud strategies are increasingly common — organizations leverage strengths of each platform. Choice depends on existing infrastructure, team expertise, and specific analytics requirements",
    ],
  },
  {
    heading: "Database Systems for Analytics",
    body: [
      "SQL (Relational) Databases — Store structured data in tables with predefined schemas. ACID properties ensure consistency. Systems: PostgreSQL (open-source, complex queries), MySQL (fast, popular), SQL Server (Azure integration), Oracle (enterprise, mission-critical)",
      "NoSQL — Document Stores: MongoDB, Couchbase — flexible schemas for content management and user profiles",
      "NoSQL — Key-Value Stores: Redis, DynamoDB — ultra-fast lookups for session storage and real-time leaderboards",
      "NoSQL — Column-Family: Cassandra, HBase — optimized for write-heavy workloads, time-series data, and IoT sensors",
      "NoSQL — Graph Databases: Neo4j, Neptune — analyze connected data, relationships, social networks, and fraud detection",
    ],
  },
  {
    heading: "Data Processing Frameworks",
    body: [
      "Apache Hadoop — Distributed Processing Pioneer. Stores and processes data across thousands of commodity servers. Components: HDFS (distributed file system), MapReduce (parallel processing), YARN (resource management). Use Cases: Batch processing of massive datasets, log analysis, data transformation",
      "Apache Spark — In-Memory Processing, 10–100x faster than Hadoop MapReduce. Key Advantages: In-Memory Computing (data stays in RAM), Lazy Evaluation (optimize before running), Fault Tolerance (automatic recovery), Unified API (same code for batch and streaming). Supports Python, Scala, Java, R, and SQL",
    ],
  },
  {
    heading: "Integration & Orchestration",
    body: [
      "Workflow Orchestration — Automate and manage dependencies between data processing tasks. Tools: Apache Airflow (Python-based DAG workflows), Prefect (modern orchestration with better error handling), Dagster (data orchestrator for ML and ETL with quality checks)",
      "Integration Platforms (iPaaS) — Connect applications and automate data flows without writing code",
      "Zapier — 5,000+ app connectors, trigger-action automation, no-code interface",
      "Segment — Customer data platform, single API collects and routes analytics data to 300+ tools",
      "Fivetran — Automated ELT pipelines from sources to data warehouses, handles schema changes",
      "MuleSoft — Enterprise integration platform, API management, and complex orchestration",
    ],
  },
  {
    heading: "Analytics Platform Architecture",
    body: [
      "Lambda Architecture — Combines batch processing (comprehensive but slower) with stream processing (fast but approximate) for both real-time insights and historically accurate analytics",
      "Batch Layer — Processes all historical data periodically (daily/hourly) with high accuracy",
      "Speed Layer — Processes recent data in real-time for immediate insights",
      "Serving Layer — Merges results from both layers to answer queries",
    ],
  },
  {
    heading: "7-Layer Analytics Stack",
    body: [
      "Layer 1: Data Sources — Websites, mobile apps, IoT devices, databases, third-party APIs",
      "Layer 2: Ingestion — APIs, webhooks, log collectors, SDKs, streaming platforms (Kafka)",
      "Layer 3: Storage — Data lakes (raw data), data warehouses (processed), operational databases",
      "Layer 4: Processing — ETL tools, Spark/Hadoop (batch), Flink/Kinesis (streaming)",
      "Layer 5: Analytics & ML — SQL queries, statistical analysis, ML models, AI algorithms",
      "Layer 6: Visualization & Applications — Dashboards (Tableau, Power BI), reports, alerts, embedded analytics",
      "Layer 7: Governance & Security — Data quality, access control, compliance (GDPR, CCPA), metadata management",
    ],
  },
  {
    heading: "Security & Compliance",
    body: [
      "Encryption — Data encrypted at rest (AES-256) and in transit (TLS 1.2+)",
      "Access Control — Role-based access (RBAC), principle of least privilege, granular permissions",
      "Authentication — Multi-factor authentication, SSO (Single Sign-On), OAuth/OIDC",
      "Audit Logging — Track all data access, modifications, and exports for compliance",
      "GDPR — EU privacy law: user consent required, right to deletion, data portability, breach notification within 72 hours",
      "CCPA — California privacy law similar to GDPR; consumers control their data",
      "HIPAA — Healthcare data privacy and security standards in the US",
      "PCI DSS — Payment card industry data security standards for handling credit card data",
    ],
  },
];

const tableData = {
  headers: ["Layer", "Name", "Examples"],
  rows: [
    ["1", "Data Sources", "Websites, apps, IoT, databases"],
    ["2", "Ingestion", "APIs, Kafka, webhooks, SDKs"],
    ["3", "Storage", "Data lakes, warehouses, databases"],
    ["4", "Processing", "Spark, Hadoop, Flink, Kinesis"],
    ["5", "Analytics & ML", "SQL, ML models, AI algorithms"],
    ["6", "Visualization", "Tableau, Power BI, dashboards"],
    ["7", "Governance", "GDPR compliance, access control"],
  ],
};

const questions = [
  { question: "What is the primary purpose of analytics systems in organizations?", options: ["To replace human workers entirely", "To transform raw data into actionable insights", "To reduce server storage costs", "To design user interfaces"] },
  { question: "Which tool visualizes where users click, scroll, and spend time on a webpage?", options: ["Google Analytics", "Mobile SDK", "Heat Mapping (Hotjar)", "Webhook"] },
  { question: "What is the difference between REST APIs and GraphQL?", options: ["REST is newer than GraphQL", "GraphQL lets clients request exactly the data they need; REST uses standard HTTP methods", "REST only works with databases", "GraphQL requires physical hardware"] },
  { question: "Which protocol is used for lightweight IoT device communication?", options: ["HTTP", "MQTT", "FTP", "SMTP"] },
  { question: "Which cloud platform is described as the leader in data analytics with BigQuery?", options: ["AWS", "Microsoft Azure", "Google Cloud Platform", "IBM Cloud"] },
  { question: "Which NoSQL database type is best for ultra-fast lookups like session storage?", options: ["Document Store (MongoDB)", "Graph Database (Neo4j)", "Key-Value Store (Redis)", "Column-Family (Cassandra)"] },
  { question: "What is Apache Spark's main advantage over Hadoop MapReduce?", options: ["It uses less disk space", "It is 10–100x faster through in-memory computing", "It requires no installation", "It is built on blockchain"] },
  { question: "What does ETL stand for in data processing?", options: ["Extract, Transform, Load", "Encode, Transfer, Link", "Evaluate, Test, Launch", "Export, Transfer, Limit"] },
  { question: "Which layer in the 7-Layer Analytics Stack handles dashboards and reports?", options: ["Layer 3: Storage", "Layer 4: Processing", "Layer 5: Analytics & ML", "Layer 6: Visualization & Applications"] },
  { question: "What does GDPR require organizations to do within 72 hours of a data breach?", options: ["Delete all user data", "Notify the affected users and authorities", "Shut down all servers", "Migrate data to a different cloud provider"] },
  { question: "What is the role of Apache Airflow in analytics?", options: ["It stores large datasets", "It automates and manages workflow dependencies using DAGs", "It renders data visualizations", "It encrypts data at rest"] },
  { question: "Which Integration Platform connects 5,000+ apps using no-code trigger-action automation?", options: ["MuleSoft", "Fivetran", "Segment", "Zapier"] },
  { question: "In Lambda Architecture, what does the Speed Layer do?", options: ["Processes all historical data for accuracy", "Merges results from batch and stream", "Processes recent data in real-time for immediate insights", "Manages data governance and compliance"] },
  { question: "What encryption standard is typically used for data at rest in analytics systems?", options: ["MD5", "SHA-1", "AES-256", "Base64"] },
  { question: "What does RBAC stand for in access control?", options: ["Remote Backup and Cache", "Role-Based Access Control", "Redundancy-Based Architecture Check", "Resource Broadcast and Compute"] },
];

const answerKey = ["B","C","B","B","C","C","B","A","D","B","B","D","C","C","B"];

export default function Lesson12() {
  return (
    <LessonPage
      lessonId={12}
      lessonTitle="Analytics Systems & Tech"
      lessonShortTitle="Analytics"
      lessonIcon="📊"
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