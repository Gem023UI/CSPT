import React from "react";
import LessonPage from "../LessonPage";

// ── PASTE YOUR LINKS BELOW ─────────────────────────────────────────
const YOUTUBE_URL = "https://www.youtube.com/embed/cvzWFXmbVvY";        // e.g. "https://www.youtube.com/embed/VIDEO_ID"
const GOOGLE_SLIDES_URL = "https://docs.google.com/presentation/d/e/2PACX-1vRkxA332cDhevQDx1JWC1eUpX7Xap8P8A_E_ZWMfVb39ig6_FP39U209bWEAE9Gow/pubembed?start=false&loop=false&delayms=3000";  // e.g. "https://docs.google.com/presentation/d/ID/embed"
// ──────────────────────────────────────────────────────────────────

const sections = [
  {
    heading: "What is a Data Format?",
    body: 'A data format is the way data is structured, organized, and stored so that computers and people can read, process, and exchange information correctly. Example: The number 20 can be represented as text "20", as a number 20, or inside JSON as "age": 20 — each follows a different data format.',
  },
  {
    heading: "Importance of Data Formats",
    body: [
      "Enable Communication Between Systems — Different systems can exchange data only if they understand the same format (e.g., a mobile app sending JSON to a web server)",
      "Ensure Data Accuracy and Consistency — Proper formats prevent errors and misinterpretation (e.g., dates formatted correctly as YYYY-MM-DD)",
      "Improve Efficiency and Performance — Binary formats load faster than text-based formats",
      "Support Data Storage and Retrieval — Databases rely on data formats to store and retrieve information properly",
      "Make Data Understandable to Humans — Text-based formats allow people to read and edit data easily",
    ],
  },
  {
    heading: "Classification of Data Formats",
    body: [
      "Structured Data — Follows a fixed, organized structure (rows and columns). Predefined format, easy to search. Examples: SQL databases, Excel tables, CSV files. Uses: Banking, school records, inventory systems",
      "Semi-Structured Data — Has some structure but is flexible; does not follow strict tables. Uses tags or key-value pairs. Examples: JSON, XML, YAML. Uses: Web APIs, mobile apps, configuration files",
      "Unstructured Data — No predefined format or structure. Difficult to organize, large in volume. Examples: Images, videos, audio files, social media posts, emails. Uses: Social media platforms, AI/ML, multimedia systems",
    ],
  },
  {
    heading: "Text Formats",
    body: [
      "TXT (Plain Text) — Stores only simple text with no formatting. Extremely small and compatible with all systems. Used for notes, logs, documentation",
      "CSV (Comma-Separated Values) — Stores data in table format; columns separated by commas. Common in Excel, databases, and data analysis",
      "JSON (JavaScript Object Notation) — Stores structured data in key–value pairs. Lightweight, human-readable. Used in web apps and APIs",
      "XML (Extensible Markup Language) — Uses tags to describe and structure data. Flexible but more complex. Common in enterprise systems and configurations",
      "YAML — Human-friendly structured text format. Designed for configuration and automation. Popular in DevOps and cloud technologies",
    ],
  },
  {
    heading: "Image Formats",
    body: [
      "JPG/JPEG — Best for photos and realistic images. Uses lossy compression to reduce size. Very common in cameras and websites",
      "PNG — Lossless compression keeps full quality. Supports transparency. Ideal for logos, icons, and graphics",
      "GIF — Supports simple animations. Limited to 256 colors. Popular for memes and reaction images",
      "SVG — Vector-based graphics. Can scale without losing quality. Used for icons, logos, and diagrams",
    ],
  },
  {
    heading: "Audio & Video Formats",
    body: [
      "MP3 — Compressed audio; small file size with good quality. Common for music and streaming",
      "WAV — Uncompressed high-quality audio; very large file sizes. Used in studios and professional recording",
      "AAC — Advanced compressed audio; better quality than MP3 at same size. Used by YouTube and Apple Music",
      "MP4 — Most widely supported video format. Good quality with efficient compression. Works on almost all devices",
      "AVI — Older Microsoft video format; larger file sizes. Still used in editing and archiving",
      "MKV — Flexible video container; supports multiple subtitles and audio tracks. Popular for high-quality movies",
    ],
  },
  {
    heading: "Binary Files & Protocol Buffers",
    body: [
      "Binary Files — Stored as raw bytes (0s and 1s). Not human-readable without special tools. Platform-dependent. Efficient for large data. Examples: Images (PNG, JPEG), Audio (MP3, WAV), Video (MP4), Executables (.exe)",
      "Protocol Buffers (Protobuf) — Compact binary representation. Faster serialization/deserialization than JSON or XML. Strongly typed schema (.proto files). Backward and forward compatible. Used in microservices, gRPC, cloud services",
    ],
  },
  {
    heading: "Advanced & Specialized Formats",
    body: [
      "SQL (Structured Data) — Schema-based, ACID compliance, relational models, complex queries. Used in banking, inventory management, ERP, student information systems",
      "NoSQL (JSON-Based) — Schema-less, document-based, horizontally scalable, distributed systems. Used in social media, e-commerce, real-time analytics",
      "APIs (JSON) — Human-readable, lightweight, language-independent. Used in RESTful APIs, mobile backends, cloud platforms",
      "Configuration Files — package.json, docker-compose.yml, config.yaml for application settings and deployment",
    ],
  },
  {
    heading: "Data Formats in AI & Machine Learning",
    body: [
      "CSV — Simple datasets",
      "JSON — Metadata and annotations",
      "HDF5 — Large numerical datasets",
      "TFRecord — TensorFlow training data",
      "Pickle — Python object serialization (with security risks)",
      "Applications: Training deep learning models, storing neural network weights, managing labeled datasets",
    ],
  },
  {
    heading: "Choosing the Right Data Format",
    body: [
      "Performance — Binary formats are faster",
      "Readability — Text formats are easier to debug",
      "Scalability — NoSQL formats scale better",
      "Compatibility — JSON and Protobuf are cross-platform",
      "Security — Binary and encrypted formats offer better protection",
    ],
  },
  {
    heading: "Common Mistakes When Using Data Formats",
    body: [
      "Using JSON for large binary data instead of binary formats",
      "Ignoring schema validation in flexible formats",
      "Overusing text formats where performance is critical",
      "Poor versioning of serialized data",
      "Security risks from unsafe deserialization (e.g., Pickle)",
      "Mixing incompatible formats across systems",
    ],
  },
];

const tableData = {
  headers: ["Everyday Item", "Data Formats Used"],
  rows: [
    ["Text message", "TXT"],
    ["Contact list", "Structured Database"],
    ["Online form", "JSON"],
    ["Photos", "JPG / PNG"],
    ["Music", "MP3"],
    ["Videos", "MP4"],
    ["Online shopping", "JSON + SQL"],
    ["School records", "CSV / SQL"],
  ],
};

const questions = [
  { question: "What is a data format?", options: ["A programming language", "The way data is structured and stored for reading and exchange", "A type of computer hardware", "A database management system"] },
  { question: "Which of the following is an example of structured data?", options: ["Images", "Social media posts", "SQL database tables", "Audio files"] },
  { question: "What type of data uses tags or key-value pairs like JSON and XML?", options: ["Structured data", "Unstructured data", "Semi-structured data", "Binary data"] },
  { question: "Which text format is best for simple unformatted text storage?", options: ["CSV", "TXT", "JSON", "XML"] },
  { question: "What does CSV stand for?", options: ["Common Structured Values", "Comma-Separated Values", "Computer Storage Variable", "Coded System Values"] },
  { question: "Which format is lightweight and uses key-value pairs for web APIs?", options: ["XML", "CSV", "JSON", "TXT"] },
  { question: "Which image format supports transparency?", options: ["JPG", "GIF", "PNG", "BMP"] },
  { question: "Which audio format offers better quality than MP3 at the same file size?", options: ["WAV", "AAC", "MP4", "AVI"] },
  { question: "What is the most widely supported video format?", options: ["AVI", "MKV", "MP4", "WAV"] },
  { question: "What is Protocol Buffers (Protobuf) primarily used for?", options: ["Image editing", "Compact binary data serialization in microservices", "Video streaming", "Text configuration files"] },
  { question: "Which data format property ensures atomicity, consistency, isolation, and durability?", options: ["NoSQL", "JSON", "ACID compliance in SQL", "Protobuf schema"] },
  { question: "Which format is recommended for AI training with large numerical datasets?", options: ["TXT", "CSV", "JSON", "HDF5"] },
  { question: "What is the main advantage of binary formats over text formats?", options: ["They are human-readable", "They are faster and more efficient", "They are more compatible", "They are easier to debug"] },
  { question: "Which format is popular in DevOps and cloud configuration?", options: ["JSON", "XML", "YAML", "CSV"] },
  { question: "What is a common mistake when using data formats?", options: ["Using JSON for APIs", "Using CSV for simple datasets", "Using JSON for large binary data instead of binary formats", "Using XML in enterprise systems"] },
];

const answerKey = ["B","C","C","B","B","C","C","B","C","B","C","D","B","C","C"];

export default function Lesson3() {
  return (
    <LessonPage
      lessonId={3}
      lessonTitle="Data Formats"
      lessonShortTitle="Data Formats"
      lessonIcon="📄"
      youtubeUrl={YOUTUBE_URL}
      googleSlidesUrl={GOOGLE_SLIDES_URL}
      sections={sections}
      tableData={tableData}
      questions={questions}
      answerKey={answerKey}
      color="cream"
    />
  );
}