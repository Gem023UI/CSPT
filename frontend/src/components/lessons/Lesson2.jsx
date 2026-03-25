import React from "react";
import LessonPage from "../LessonPage";

// ── PASTE YOUR LINKS BELOW ─────────────────────────────────────────
const YOUTUBE_URL = "https://www.youtube.com/embed/x33geTAn63c";        // e.g. "https://www.youtube.com/embed/VIDEO_ID"
const GOOGLE_SLIDES_URL = "https://docs.google.com/presentation/d/e/2PACX-1vTBr0ccAKfMCjARpDrksWXSDk5PW4K28lA064eB8YSPGUXS0raEGlF0L2mNbDLxUQ/pubembed?start=false&loop=false&delayms=3000";  // e.g. "https://docs.google.com/presentation/d/ID/embed"
// ──────────────────────────────────────────────────────────────────

const sections = [
  {
    heading: "Introduction to Number Systems",
    body: "A number system is a method of representing numbers using a specific set of symbols and rules. It defines how numbers are written, counted, and calculated. Number systems are important because computers and digital devices rely on them to store, process, and communicate data.",
  },
  {
    heading: "History & Importance",
    body: [
      "Early humans used simple counting methods such as tally marks",
      "The decimal system developed from human use of ten fingers",
      "Binary was introduced for computing because electronic circuits operate using two states: ON and OFF",
      "Used in computer systems, digital electronics, data processing, and programming",
      "Essential for understanding how computers work internally",
    ],
  },
  {
    heading: "Types of Number Systems",
    body: [
      "Decimal (Base 10) — Uses digits 0–9; each digit's value depends on position. Example: 452 = (4×10²)+(5×10¹)+(2×10⁰)",
      "Binary (Base 2) — Uses only 0 and 1; used by computers. Example: 1011₂ = (1×2³)+(0×2²)+(1×2¹)+(1×2⁰) = 11₁₀",
      "Octal (Base 8) — Uses digits 0–7; shorter representation of binary; used in older computer systems",
      "Hexadecimal (Base 16) — Uses digits 0–9 and A–F (A=10, B=11, C=12, D=13, E=14, F=15); used for memory addresses and color codes",
    ],
  },
  {
    heading: "Place Value & Positional Notation",
    body: "In positional notation, the value of a digit depends on the digit itself and its position in the number. Example (Decimal 345): 3 is in the Hundreds place (3×100), 4 is in the Tens place (4×10), 5 is in the Ones place (5×1).",
  },
  {
    heading: "Number System Conversions",
    body: [
      "Binary → Decimal: Multiply each bit by powers of 2 and sum. Example: 1101₂ = (1×2³)+(1×2²)+(0×2¹)+(1×2⁰) = 13₁₀",
      "Decimal → Binary: Divide by 2 repeatedly, record remainders from bottom to top. Example: 10₁₀ → 1010₂",
      "Binary ↔ Octal: Group binary digits into sets of 3 bits from right to left",
      "Binary ↔ Hexadecimal: Group binary digits into sets of 4 bits from right to left",
    ],
  },
  {
    heading: "Binary Arithmetic",
    body: [
      "Addition Rules: 0+0=0 | 0+1=1 | 1+1=10 (write 0, carry 1)",
      "Subtraction Rules: 1−0=1 | 1−1=0 | 0−1 = borrow from next bit",
    ],
  },
  {
    heading: "Signed Number Representation",
    body: [
      "Signed Magnitude — MSB is the sign bit (0=positive, 1=negative); remaining bits are the magnitude. Example: +5 = 00000101, −5 = 10000101",
      "1's Complement — Invert all bits of the positive number. Example: +5 = 00000101, −5 = 11111010. Limitation: two representations of zero",
      "2's Complement — Take 1's complement then add 1. Most widely used in computers. Example: +5 = 00000101 → 1's complement: 11111010 → 2's: 11111011. Advantage: only one zero, correct arithmetic",
    ],
  },
  {
    heading: "Floating-Point Numbers",
    body: [
      "Represents real numbers (numbers with decimals)",
      "Components: Sign bit (positive/negative), Exponent (determines scale), Mantissa/Significand (precision)",
      "Example: −12.75 = −1.10011 × 2³",
      "Standard: IEEE 754 is the most commonly used floating-point standard",
      "Advantage: Represents very large and very small numbers; used for scientific and engineering calculations",
      "Limitations: Rounding errors, precision loss, slower than integer operations",
    ],
  },
  {
    heading: "Applications of Number Systems",
    body: [
      "Binary — internal computer operations",
      "Decimal — human interaction and everyday calculations",
      "Octal & Hexadecimal — memory addressing and debugging",
      "Signed numbers — financial calculations, counters",
      "Floating-point — scientific computing, graphics, AI",
      "Networking — IP addressing and data encoding",
    ],
  },
  {
    heading: "Conclusion",
    body: "Number systems are the foundation of all computer operations. Understanding signed number representations and floating-point numbers is essential for programming, system design, and data processing. Among signed representations, 2's complement is the most efficient and widely used. Floating-point numbers enable the representation of real-world values, making modern computing possible despite their precision limitations.",
  },
];

const tableData = {
  headers: ["Number System", "Base", "Digits Used"],
  rows: [
    ["Decimal", "10", "0 – 9"],
    ["Binary", "2", "0, 1"],
    ["Octal", "8", "0 – 7"],
    ["Hexadecimal", "16", "0 – 9, A – F"],
  ],
};

const questions = [
  { question: "What is a number system?", options: ["A way to draw numbers", "A method of representing numbers", "A computer program", "A type of calculator"] },
  { question: "Which number system is commonly used by humans?", options: ["Binary", "Octal", "Decimal", "Hexadecimal"] },
  { question: "How many digits does the decimal number system have?", options: ["2", "8", "10", "16"] },
  { question: "Which digits are used in the binary number system?", options: ["0–9", "1–8", "0 and 1", "0–7"] },
  { question: "What is the base (radix) of the binary system?", options: ["2", "8", "10", "16"] },
  { question: "Which number system uses digits from 0 to 7?", options: ["Binary", "Octal", "Decimal", "Hexadecimal"] },
  { question: "What is the base of the hexadecimal number system?", options: ["8", "10", "12", "16"] },
  { question: "Which symbols are used in hexadecimal numbers?", options: ["0–7", "0–9 only", "0–9 and A–F", "1–16"] },
  { question: "Which number system is mostly used by computers?", options: ["Decimal", "Binary", "Octal", "Hexadecimal"] },
  { question: "What does the binary number 101 represent?", options: ["A decimal number", "An octal number", "A binary number", "A hexadecimal number"] },
  { question: "What is a signed number?", options: ["A number with letters", "A number with only zeros", "A number with a positive or negative sign", "A number with decimals"] },
  { question: "Which representation uses the leftmost bit as a sign bit?", options: ["Unsigned number", "Signed magnitude", "Decimal system", "Octal system"] },
  { question: "In signed magnitude, what does the sign bit 0 mean?", options: ["Negative", "Positive", "Zero", "Error"] },
  { question: "What is 1's complement used for?", options: ["Counting numbers", "Representing negative binary numbers", "Storing letters", "Floating-point numbers"] },
  { question: "How do you get the 1's complement of a binary number?", options: ["Add 1", "Subtract 1", "Flip all bits (0→1, 1→0)", "Divide by 2"] },
  { question: "What is 2's complement mainly used for?", options: ["Decimal conversion", "Binary subtraction", "Letter encoding", "Multiplication"] },
  { question: "How do you get the 2's complement of a binary number?", options: ["Add 2", "Flip bits only", "Flip bits then add 1", "Divide by 2"] },
  { question: "What is a floating-point number?", options: ["A number without value", "A number with letters", "A number with a decimal point", "A negative number only"] },
  { question: "Which is an example of a floating-point number?", options: ["1010", "25", "-12", "3.14"] },
  { question: "Why are number systems important in computers?", options: ["For decoration", "For playing games only", "For data storage and processing", "For typing text"] },
];

const answerKey = ["B","C","C","C","A","B","D","C","B","C","C","B","B","B","C","B","C","C","D","C"];

export default function Lesson2() {
  return (
    <LessonPage
      lessonId={2}
      lessonTitle="Number System"
      lessonShortTitle="Number System"
      lessonIcon="🔢"
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