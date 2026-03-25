import React from "react";
import LessonPage from "../LessonPage";

// ── PASTE YOUR LINKS BELOW ─────────────────────────────────────────
const YOUTUBE_URL = "https://www.youtube.com/embed/ICbgrmoB5ZE";        // e.g. "https://www.youtube.com/embed/VIDEO_ID"
const GOOGLE_SLIDES_URL = "https://docs.google.com/presentation/d/e/2PACX-1vRjqCgBlndvDgCVkiESdvF_FZFd3C1itCK6MNStjFZ5AHyz356QNrziUR2k40BLXA/pubembed?start=false&loop=false&delayms=3000";  // e.g. "https://docs.google.com/presentation/d/ID/embed"
// ──────────────────────────────────────────────────────────────────

const sections = [
  {
    heading: "What is Computer Hardware?",
    body: "Computer hardware refers to the physical components of a computer system that work together to perform tasks. This includes the processor (CPU), which executes instructions; memory (RAM), which temporarily stores data for quick access; storage devices like hard drives or SSDs for long-term data storage; input devices such as keyboards and mice; output devices like monitors and printers; and peripheral components such as graphic cards or external drives that enhance functionality.",
  },
  {
    heading: "History: Ancient & Mechanical Computing (2400 BCE – 1837)",
    body: [
      "2400 BCE – 300 BCE: Use of the abacus by ancient civilizations",
      "1642: Blaise Pascal invented the Pascaline (mechanical calculator)",
      "1673: Gottfried Wilhelm Leibniz developed the Stepped Reckoner",
      "1837: Charles Babbage designed the Analytical Engine (concept of programmable computer)",
      "1843: Ada Lovelace wrote the first algorithm for the Analytical Engine",
    ],
  },
  {
    heading: "History: Theoretical & Early Electronic Era (1936 – 1956)",
    body: [
      "1936: Alan Turing proposed the Turing Machine (theory of computation)",
      "1946: Eckert & Mauchly built ENIAC — first electronic digital computer",
      "1947: Bardeen, Brattain & Shockley invented the transistor",
      "1950s: Jay Forrester developed magnetic core memory",
      "1956: IBM released the IBM 305 RAMAC — first commercial hard disk drive",
    ],
  },
  {
    heading: "History: Miniaturization & Personal Computing (1960s – 1980s)",
    body: [
      "1960s: Jack Kilby & Robert Noyce invented Integrated Circuits",
      "1970: IBM introduced the floppy disk for portable data storage",
      "1971: Intel released the Intel 4004 — first microprocessor",
      "1975: Altair 8800 released by MITS, sparking the PC revolution",
      "1981: IBM PC launched, standardizing PC hardware architecture",
      "1983: First commercial laptop by Osborne Computer Corp / Grid Systems",
      "1990s: Expansion in DRAM, CD-ROMs, graphics cards, and sound cards",
    ],
  },
  {
    heading: "History: Networking & Multimedia Expansion (1990s – 2000s)",
    body: [
      "1990s: Robert Metcalfe — Ethernet; NVIDIA & 3dfx — 3D graphics; faster RAM development",
      "1995: USB standard introduced by USB Implementers Forum",
      "2000s: Rise of multi-core processors and solid-state drives (SSDs)",
    ],
  },
  {
    heading: "Core Hardware Components",
    body: [
      "CPU (Central Processing Unit) — executes instructions, the 'brain' of the computer",
      "RAM (Random Access Memory) — volatile memory for active program data",
      "Storage (HDD/SSD) — non-volatile long-term data storage",
      "Motherboard — main circuit board connecting all components",
      "GPU (Graphics Processing Unit) — renders visuals and accelerates parallel tasks",
      "PSU (Power Supply Unit) — converts AC power to DC for components",
      "I/O Devices — keyboards, mice, monitors, printers for interaction",
    ],
  },
  {
    heading: "Roles of Computer Hardware",
    body: [
      "Data Processing — CPUs and GPUs execute billions of instructions per second",
      "Data Storage — HDDs, SSDs, and cloud storage preserve data long-term",
      "Communication & Networking — routers, switches, NICs enable data exchange",
      "User Interaction — input/output devices bridge humans and systems",
    ],
  },
  {
    heading: "Challenges in Computer Hardware",
    body: [
      "End of Moore's Law — transistor doubling every 2 years is hitting physical and economic limits (quantum tunneling at 2nm–3nm scale)",
      "Power Wall & Thermal Management — high-performance AI chips generate extreme heat; liquid/immersion cooling now required",
      "Memory & Storage Bottleneck — CPU speeds grow 50% annually but memory latency only 10%; HBM3 developed to address this",
      "Specialized Hardware Demands — general-purpose CPUs inefficient for AI/ML; rise of NPUs, TPUs, and custom silicon",
      "Hardware-Level Security Threats — side-channel attacks (Spectre, Meltdown) exploit processor behavior",
      "Sustainability & E-Waste — millions of tons of hardware in landfills; modular laptop movement (e.g., Framework) addresses this",
    ],
  },
  {
    heading: "Future Trends in Computer Hardware",
    body: [
      "Quantum Computing Integration — moving from theory to applied business use; IBM & Google demonstrated Quantum Supremacy",
      "Edge AI Accelerators — NPUs on phones and devices process AI locally without cloud (e.g., Snapdragon, Apple M-series)",
      "Chiplet & Modular Design — 'Lego-fying' chips (e.g., AMD Ryzen) mixes process nodes for performance and cost efficiency",
      "Neuromorphic & Photonic Computing — brain-mimicking chips (Intel Loihi) using 1000× less energy; photons replace electrons",
      "Next-Gen Materials (SiC/GaN) — silicon replaced by Silicon Carbide & Gallium Nitride for faster, cooler power management",
      "RISC-V & Open Hardware — open-source processor designs eliminating costly licensing fees; adopted by NASA and major tech companies",
    ],
  },
];

const questions = [
  { question: "What is computer hardware?", options: ["Software programs only", "Physical components of a computer system", "A type of operating system", "Cloud computing service"] },
  { question: "Who invented the Pascaline mechanical calculator?", options: ["Ada Lovelace", "Blaise Pascal", "Charles Babbage", "Alan Turing"] },
  { question: "What was ENIAC?", options: ["A programming language", "The first electronic digital computer", "A storage device", "An operating system"] },
  { question: "Which component is considered the 'brain' of the computer?", options: ["RAM", "GPU", "CPU", "SSD"] },
  { question: "What does RAM stand for?", options: ["Read-Access Memory", "Random Access Memory", "Remote Application Module", "Rapid Action Memory"] },
  { question: "What physical law about transistor density is reaching its limits?", options: ["Newton's Law", "Ohm's Law", "Moore's Law", "Boyle's Law"] },
  { question: "What is quantum tunneling in the context of chips?", options: ["A new cooling method", "Electrons jumping across gaps they shouldn't at tiny scales", "A data transfer protocol", "A chip design technique"] },
  { question: "What is the 'memory wall' bottleneck?", options: ["RAM being too large", "CPU speeds outpacing memory data transfer rates", "Graphics memory limitations", "Storage capacity limits"] },
  { question: "What was the significance of the Intel 4004?", options: ["First hard disk drive", "First transistor", "First microprocessor", "First solid-state drive"] },
  { question: "What does HBM3 solve in modern computing?", options: ["Cooling issues", "Memory bandwidth for AI chips", "Display resolution", "Network speeds"] },
  { question: "What is an NPU?", options: ["Network Processing Unit", "Neural Processing Unit", "Non-volatile Processing Unit", "Native Protocol Utility"] },
  { question: "Which attack exploited CPU branch prediction to steal data?", options: ["Ransomware", "Phishing", "Spectre and Meltdown", "DDoS"] },
  { question: "What is chiplet design?", options: ["A tiny computer chip", "Breaking large chips into smaller combinable units", "A chip for IoT devices", "A GPU optimization technique"] },
  { question: "What makes GaN useful in modern chargers?", options: ["It is cheaper than silicon", "It handles high voltage and heat better, enabling smaller faster chargers", "It is wireless", "It stores more data"] },
  { question: "What is RISC-V?", options: ["A graphics card", "An open-source processor design", "A type of RAM", "A cloud computing service"] },
];

const answerKey = ["B","B","B","C","B","C","B","B","C","B","B","C","B","B","B"];

export default function Lesson1() {
  return (
    <LessonPage
      lessonId={1}
      lessonTitle="Computer Hardware"
      lessonShortTitle="Computer Hardware"
      lessonIcon="🖥️"
      youtubeUrl={YOUTUBE_URL}
      googleSlidesUrl={GOOGLE_SLIDES_URL}
      sections={sections}
      questions={questions}
      answerKey={answerKey}
      color="purple"
    />
  );
}