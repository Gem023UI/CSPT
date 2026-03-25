import React from "react";
import LessonPage from "../LessonPage";

const YOUTUBE_URL = "https://www.youtube.com/embed/TkeMjmKjWzo";
const GOOGLE_SLIDES_URL = "https://docs.google.com/presentation/d/e/2PACX-1vSILhUOFuQi3ydLykmUmrRSP8e6bJFatPimO95CTLLjPnozoO3cf25qedTSJz79fQ/pubembed?start=false&loop=false&delayms=3000";

const sections = [
  {
    heading: "What is Artificial Intelligence?",
    body: "Artificial Intelligence refers to the simulation of human intelligence in machines that are programmed to think, learn, and problem-solve like humans. Key capabilities: learning from experience, adapting to new inputs, performing human-like tasks, and making autonomous decisions.",
  },
  {
    heading: "Examples of AI in Everyday Life",
    body: [
      "Voice Assistants — Siri, Alexa, Google Assistant",
      "Generative AI & Chatbots — ChatGPT, Claude, Gemini",
      "Writing Tools — Quillbot, Grammarly",
      "Face Recognition — Used in phones, security, and social media",
      "Navigation Apps — Google Maps, Waze",
      "Self-Driving / Driver-Assist Cars — Tesla Autopilot",
    ],
  },
  {
    heading: "History of Artificial Intelligence",
    body: [
      "1950 — Alan Turing proposed the 'Turing Test' to measure machine intelligence — a method to determine whether a machine can demonstrate human-level behavior",
      "1956 — Term 'Artificial Intelligence' coined at Dartmouth Conference by John McCarthy; formalized AI as a legitimate field of science",
      "1960s–1970s — Development of ELIZA (first chatbot) and expert systems",
      "1980s–1990s — AI Winter & Revival: period of decreased interest and funding due to unmet expectations; later revived with new funding sources",
      "First AI Winter: 1974–1980; Second AI Winter: late 1980s – early 1990s",
      "2000s — AI Revival: introduction of machine learning and neural networks renewed interest",
      "2012 — Deep Learning Revolution: AlexNet (Geoffrey Hinton's team) won ImageNet Challenge; breakthrough in image recognition using CNNs",
      "2020s — Generative AI Era: ChatGPT, DALL-E, and large language models transformed AI accessibility; creating text, images, audio, and video rather than only analyzing data",
    ],
  },
  {
    heading: "Current AI Technologies",
    body: [
      "Machine Learning — Systems that learn from data without explicit programming; improves with use and training",
      "Deep Learning — Neural networks with multiple layers for complex pattern recognition",
      "Natural Language Processing (NLP) — Understanding and generating human language (ChatGPT, translation tools)",
      "Computer Vision — Image and video analysis, facial recognition, and object detection",
      "Robotics & Automation — Autonomous vehicles, manufacturing robots, and drones",
      "Generative AI — Creating new content: text, images, music, and video",
    ],
  },
  {
    heading: "AI Applications by Industry",
    body: [
      "Healthcare — Disease diagnosis, drug discovery, personalized treatment, medical imaging analysis",
      "Finance — Fraud detection, algorithmic trading, credit scoring, risk assessment",
      "Transportation — Self-driving cars, traffic optimization, route planning, autonomous delivery",
      "Education — Personalized learning, intelligent tutoring, automated grading, adaptive curricula",
      "E-Commerce — Product recommendations, chatbots, inventory management, price optimization",
      "Entertainment — Content recommendations (Netflix, Spotify), game AI, special effects, content creation",
      "Smart Homes — Voice assistants (Alexa, Siri), home automation, security systems, energy management",
      "Cybersecurity — Threat detection, malware analysis, network security, vulnerability assessment",
    ],
  },
  {
    heading: "Types of AI",
    body: [
      "Narrow AI (Weak AI) — Designed to perform one specific task; cannot think or function beyond its programmed purpose. Cannot transfer knowledge to other tasks; operates under predefined limits. Examples: ChatGPT (text generation), Siri (voice assistant), Google Maps (navigation), Netflix (recommendation system)",
      "Artificial General Intelligence (AGI) — AI that can think, learn, and understand like a human; able to solve different types of problems, apply knowledge across tasks, and make independent decisions. AGI does not yet exist — still under research and development",
      "Artificial Super Intelligence (ASI) — Hypothetical future AI that would surpass human intelligence in all aspects; could think faster, make better decisions, and possibly improve itself. Still theoretical; raises serious ethical and safety concerns",
    ],
  },
  {
    heading: "Advantages of AI",
    body: [
      "Reduces human error and improves accuracy",
      "Works 24/7 without breaks",
      "Makes faster decisions using large amounts of data",
      "Automates repetitive tasks",
      "Increases efficiency and productivity",
      "Helps improve healthcare and other critical industries",
    ],
  },
  {
    heading: "Disadvantages of AI",
    body: [
      "May cause job displacement as automation replaces manual roles",
      "Expensive to develop and maintain",
      "Lacks human emotion and creativity",
      "Raises privacy and security concerns",
      "Can produce biased or unfair results based on training data",
      "May lead to overdependence on technology",
    ],
  },
  {
    heading: "Challenges in AI Development",
    body: [
      "Privacy & Data Security — Collection and use of massive amounts of personal data raises privacy concerns and security risks",
      "Job Displacement — Automation threatens traditional jobs, requiring workforce adaptation and reskilling initiatives",
      "Ethical Concerns — AI systems can perpetuate societal biases present in training data, raising fairness and discrimination issues",
    ],
  },
  {
    heading: "The Future of Artificial Intelligence",
    body: [
      "Emerging Trends: Artificial General Intelligence (AGI), Quantum AI computing, Edge AI and IoT integration, Explainable AI (XAI), AI-human collaboration",
      "Predicted Impact: Revolutionary healthcare advances, climate change solutions, personalized education for all, scientific discovery acceleration, enhanced human capabilities",
    ],
  },
];

const questions = [
  { question: "What does AI stand for?", options: ["Automated Information", "Artificial Intelligence", "Advanced Internet", "Automatic Integration"] },
  { question: "Which type of AI is currently available today?", options: ["Super AI", "General AI", "Narrow AI", "Self-Aware AI"] },
  { question: "Which of the following is an example of Narrow AI?", options: ["Human brain", "Self-aware robot", "Chatbot system", "Supercomputer with emotions"] },
  { question: "Which AI technology focuses on training systems using data without explicit programming?", options: ["Robotics", "Machine Learning", "Hardware Engineering", "Networking"] },
  { question: "What is one major advantage of AI?", options: ["It gets tired easily", "It works only during office hours", "It reduces human error", "It replaces all humans"] },
  { question: "Which of the following is a disadvantage of AI?", options: ["Increased efficiency", "Faster decision-making", "Job displacement", "24/7 availability"] },
  { question: "Who proposed the Turing Test?", options: ["John McCarthy", "Alan Turing", "Elon Musk", "Bill Gates"] },
  { question: "What is the main purpose of Computer Vision?", options: ["To improve internet speed", "To analyze images and videos", "To create websites", "To design hardware"] },
  { question: "Which industry commonly uses AI for fraud detection?", options: ["Agriculture", "Finance", "Tourism", "Construction"] },
  { question: "Artificial General Intelligence (AGI) is:", options: ["Already widely used today", "Limited to one task", "A theoretical AI that thinks like humans", "A type of mobile app"] },
  { question: "AI can work continuously without needing rest.", options: ["True", "False"] },
  { question: "Super AI already exists today.", options: ["True", "False"] },
  { question: "Machine Learning allows systems to learn from data.", options: ["True", "False"] },
  { question: "AI cannot be used in healthcare.", options: ["True", "False"] },
  { question: "Narrow AI is designed for specific tasks only.", options: ["True", "False"] },
  { question: "AI systems may reflect bias from their training data.", options: ["True", "False"] },
  { question: "Privacy concerns are one challenge of AI development.", options: ["True", "False"] },
  { question: "The Turing Test measures machine intelligence.", options: ["True", "False"] },
  { question: "Self-aware AI currently exists in real life.", options: ["True", "False"] },
  { question: "AI can help automate repetitive tasks.", options: ["True", "False"] },
];

const answerKey = ["B","C","C","B","C","C","B","B","B","C","True","False","True","False","True","True","True","True","False","True"];

export default function Lesson13() {
  return (
    <LessonPage
      lessonId={13}
      lessonTitle="Artificial Intelligence"
      lessonShortTitle="AI"
      lessonIcon="🤖"
      youtubeUrl={YOUTUBE_URL}
      googleSlidesUrl={GOOGLE_SLIDES_URL}
      sections={sections}
      questions={questions}
      answerKey={answerKey}
      color="pink"
    />
  );
}