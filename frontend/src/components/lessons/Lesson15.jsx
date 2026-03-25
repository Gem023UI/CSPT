import React from "react";
import LessonPage from "./LessonPage";

const YOUTUBE_URL = "https://www.youtube.com/embed/uaBfoLsGHpU";
const GOOGLE_SLIDES_URL = "https://docs.google.com/presentation/d/e/2PACX-1vQwscBVJq_C7OUxbckOcOqiUZxvjr9RnXcDCyXvLrYjqyZrCH85qiCHVf0iHvb1Og/pubembed?start=false&loop=false&delayms=3000";

const sections = [
  {
    heading: "What is the Internet of Things?",
    body: "The Internet of Things (IoT) is a vast network of physical objects—'things'—embedded with sensors, software, and technologies that allow them to connect, collect, and exchange data with other systems over the internet without requiring human intervention.",
  },
  {
    heading: "History of IoT",
    body: [
      "1982 — Engineers at Carnegie Mellon University connected a Coca-Cola vending machine to the internet. It could report if it was out of drinks and if newly loaded bottles were cold. The first time a mundane object communicated its status online",
      "1999 — Kevin Ashton, a British technologist at MIT, coined the phrase 'Internet of Things.' He realized computers needed help gathering real-world data on their own rather than relying on humans. He pushed for industry-standard RFID tags to connect objects to the internet",
      "The 2000s — Three technologies matured to make IoT practical: IPv6 (created enough unique internet addresses for trillions of devices), The Smartphone (became a blueprint for cheap sensors including cameras, GPS, and accelerometers), Cloud Computing (provided unlimited storage and processing power for all the data devices generate)",
      "2013–Present — Connected devices officially exceeded the human population on Earth, marking the shift from experimentation to mass adoption. Split into two branches: Consumer IoT (smart homes, thermostats, voice assistants) and Industrial IoT or IIoT (factories using sensors to predict machine failures)",
    ],
  },
  {
    heading: "Examples of Consumer IoT",
    body: [
      "Smart Speaker (Alexa / Siri) — Listens for voice commands to play music, answer questions, or control other smart devices",
      "Smart Watch / Fitness Tracker — Tracks heart rate, steps, and sleep. Sends data to your phone to help you track health goals",
      "Smart Lights (Philips Hue) — Turn on/off with voice commands or motion. Can change colors and be controlled remotely",
      "Robot Vacuum (Roomba) — Maps your home and cleans floors automatically. Returns to its charger when done",
    ],
  },
  {
    heading: "Examples of Industrial IoT (IIoT)",
    body: [
      "Predictive Maintenance Sensors — Attached to factory machines. Detect unusual vibrations or heat and alert workers to fix problems before they cause breakdowns",
      "Warehouse Inventory Tags — RFID tags on boxes let warehouses know exactly what is in stock and where it is located without manual counting",
      "Smart Grid (Utilities) — Sensors on power lines that detect outages instantly and reroute power to prevent blackouts",
      "Connected Medical Devices (Hospitals) — Smart beds that monitor patient movement and vital signs, alerting nurses automatically",
    ],
  },
  {
    heading: "Current Technologies: Consumer IoT",
    body: [
      "Context-Aware Smart Homes — Systems use edge AI to learn user behavior and optimize energy, lighting, and comfort without manual input. Smart locks utilize Ultra-Wideband (UWB) for precise proximity-based unlocking",
      "AI Health Companions (Wearables) — Devices have evolved from fitness trackers to medical-grade health companions. The Oura Ring Gen 4 tracks sleep, stress, and recovery with high precision, participating in chronic condition management",
      "Local Processing for Privacy — On-device AI allows security camera footage to be stored and analyzed 100% locally, keeping personal data off the cloud and addressing privacy concerns",
      "Seamless Interoperability — Wi-Fi 6/7 and new standards ensure that devices from different brands work together fluidly, ending the era of finicky cross-brand connections",
    ],
  },
  {
    heading: "Current Technologies: Industrial IoT (IIoT)",
    body: [
      "Edge AI & 'Agentic' Systems — Intelligence is moving from the cloud to the device itself. AI accelerators (NPUs) embedded in microcontrollers allow machines to make real-time decisions (e.g., stopping a production line upon detecting a fault) without waiting for the cloud",
      "Prescriptive Maintenance — Systems have moved beyond 'predictive' (telling you a machine will fail) to 'prescriptive' (recommending the optimal time to fix it based on labor schedules and parts availability)",
      "Resilient & Hybrid Connectivity — Rise in hybrid models combining 5G RedCap (reduced capability for IoT) and satellite (NTN) to ensure constant coverage even in remote areas",
      "Computer Vision as a Primary Sensor — Cameras equipped with vision-language models are now context-aware sensors. In factories, they understand entire scenes rather than just checking for single defects",
    ],
  },
  {
    heading: "Advantages: Consumer IoT",
    body: [
      "Energy Savings & Lower Bills — Smart thermostats and lighting learn your habits and automatically adjust to save power. Studies confirm smart thermostats with occupancy sensors can reduce heating/cooling costs by 8–15%",
      "Convenience and Voice Control — Everyday tasks become effortless. Check groceries, lock doors, or adjust lights simply by speaking. Global smart speaker market projected to hit $46.1 billion by 2028",
      "Peace of Mind (Remote Monitoring) — Smart doorbells, locks, and security cameras let you see who is at the door or verify you turned off the stove while away from home",
      "Accessibility for Elderly and Disabled — Voice-activated controls and automated routines allow elderly or disabled individuals to live independently longer, removing physical barriers",
    ],
  },
  {
    heading: "Advantages: Industrial IoT (IIoT)",
    body: [
      "Predictive Maintenance Saves Millions — Sensors detect when a machine is about to fail so it can be fixed before it breaks. Predictive maintenance is now the leading IIoT use case, with companies reporting significant reductions in downtime",
      "Massive Efficiency Gains — Factories use real-time data to optimize production lines, reducing waste and speeding up output. IIoT market projected to grow from $394 billion in 2025 to $1.85 trillion by 2034",
      "Better Working Conditions — Wearable sensors and connected safety gear alert workers to dangerous conditions (toxic gas, extreme heat) or call for help if a worker falls, reducing workplace injuries",
      "Supply Chain Visibility — Companies can track goods in real-time from factory to customer, reducing lost shipments and enabling instant delivery rerouting",
    ],
  },
  {
    heading: "Disadvantages: Consumer IoT",
    body: [
      "Loss of Privacy — Smart devices constantly listen or track behavior. A 2026 study found 37% of smart thermostat owners worry about data privacy, up from 26% in 2022. 70% said they would switch to a more privacy-focused option",
      "Planned Obsolescence & E-Waste — Gadgets are designed with limited lifespans. In July 2025, Belkin shut down its Wemo smart home platform, affecting ~4 million users and forcing them to discard working hardware. Global e-waste market hit $62.96 billion in 2026",
      "Ecosystem Lock-in — Users become trapped in specific brand ecosystems; switching requires replacing all devices",
      "Complex Setup and Maintenance — Many users find initial configuration and ongoing maintenance of smart home systems difficult and time-consuming",
    ],
  },
  {
    heading: "Disadvantages: Industrial IoT (IIoT)",
    body: [
      "High Cost of Entry — Retrofitting old factory machinery with smart sensors is rarely cost-effective. Most factories use decades-old equipment, and replacing it purely for digital compatibility often costs more than it saves",
      "Integration Headaches — Old factory equipment uses legacy protocols (Modbus, CANopen) while modern software uses internet protocols (MQTT). Getting these to communicate requires expensive custom engineering and specialized IoT gateways",
      "Data Overload Without Insight — Companies collect petabytes of data but lack the tools to understand it. Leads to 'sensor fatigue' and 'analysis paralysis' — spending money on storage without ever seeing a return on investment",
      "Severe Skills Shortage — It is nearly impossible to find employees who understand both heavy machinery and modern coding. 47% of business leaders in a 2026 PwC survey cited 'lack of qualified personnel' as their top IoT challenge",
    ],
  },
];

const questions = [
  { question: "According to the lesson, what are the three key components embedded in 'things' that allow them to connect and exchange data?", options: ["Batteries, wires, and screens", "Sensors, software, and technologies", "Buttons, cameras, and speakers", "Plastic, metal, and glass"] },
  { question: "In what year did engineers at Carnegie Mellon University connect a Coca-Cola vending machine to the internet?", options: ["1972", "1982", "1992", "2002"] },
  { question: "Who coined the term 'Internet of Things' (IoT) in 1999?", options: ["Kevin Ashton", "Bill Gates", "Steve Jobs", "Regine V. Lazquez"] },
  { question: "Which three technologies matured in the 2000s to make IoT practical?", options: ["IPv6, The Smartphone, and Cloud Computing", "Bluetooth, Fiber Optics, and Mainframes", "Artificial Intelligence, Virtual Reality, and Blockchain", "Social Media, Email, and Web Browsers"] },
  { question: "What major milestone for IoT happened between 2013 and the present?", options: ["The first computer was invented", "The term 'IoT' was officially coined", "Connected devices outnumbered the human population", "The first smart fridge was sold"] },
  { question: "After 2013, IoT split into two main branches. What are they?", options: ["Small IoT and Large IoT", "Consumer IoT and Industrial IoT (IIoT)", "Home IoT and Office IoT", "Cheap IoT and Expensive IoT"] },
  { question: "Which of the following is an example of Consumer IoT?", options: ["Predictive Maintenance Sensor", "Warehouse Inventory Tag", "Smart Speaker (Alexa/Siri)", "Smart Grid Sensor"] },
  { question: "Which of the following is an example of Industrial IoT (IIoT)?", options: ["Smart Watch", "Robot Vacuum", "Smart Lights", "Warehouse Inventory Tags"] },
  { question: "What is 'Context-Aware Smart Homes' using to learn user behavior and optimize energy without manual input?", options: ["Human workers", "Edge AI", "Luck", "Manual schedules"] },
  { question: "What can the Oura Ring Gen 4 track with high precision according to the lesson?", options: ["Text messages and calls", "Sleep, stress, and recovery", "Weather forecasts", "Grocery lists"] },
  { question: "What is the purpose of 'Local Processing for Privacy' (on-device AI) in consumer devices?", options: ["To keep personal data off the cloud", "To make devices run slower", "To increase electricity bills", "To connect to more advertisements"] },
  { question: "What is the main difference between 'predictive maintenance' and 'prescriptive maintenance'?", options: ["Predictive fixes machines; prescriptive just watches them", "Predictive tells you a machine will fail; prescriptive tells you the best time to fix it", "Predictive is for factories; prescriptive is for homes", "There is no difference"] },
  { question: "What two technologies are combined in 'hybrid models' to keep industrial equipment connected in remote areas?", options: ["Wi-Fi and Bluetooth", "4G and Radio Waves", "5G RedCap and Satellite (NTN)", "Fiber Optics and DSL"] },
  { question: "What is the Internet of Things (IoT)?", options: ["A social media platform for sharing photos", "A network of physical objects embedded with sensors and software to connect and exchange data over the internet", "A type of computer virus", "A completely safe innovation with no risks"] },
  { question: "Which of the following is an ADVANTAGE of Consumer IoT?", options: ["You lose your privacy", "You can control your home from anywhere in the world", "Your gadgets break quickly", "You need five different apps for five devices"] },
  { question: "Which of the following is an ADVANTAGE of Industrial IoT?", options: ["Machines break without warning", "Factories run less efficiently", "Companies can track goods in real-time from factory to customer", "Workers are less safe"] },
  { question: "Which of the following is a DISADVANTAGE of Consumer IoT?", options: ["Lower electricity bills", "Voice control convenience", "Smart devices constantly listen or track your behavior", "Elderly people can live independently longer"] },
  { question: "Which of the following is another DISADVANTAGE of Consumer IoT?", options: ["Peace of mind from remote monitoring", "Energy savings", "Gadgets are designed to die (planned obsolescence)", "Accessibility for disabled users"] },
  { question: "Which of the following is a DISADVANTAGE of Industrial IoT?", options: ["Predictive maintenance saves money", "Better working conditions", "Massive efficiency gains", "Retrofitting old factory machines costs too much money"] },
  { question: "Which of the following is another DISADVANTAGE of Industrial IoT?", options: ["Supply chain visibility", "Companies cannot find employees who understand both machinery and coding", "Machines last longer", "Workers are safer"] },
];

const answerKey = ["B","B","A","A","C","B","C","D","B","B","A","B","C","B","B","C","C","C","D","B"];

export default function Lesson15() {
  return (
    <LessonPage
      lessonId={15}
      lessonTitle="Internet of Things (IoT)"
      lessonShortTitle="IoT"
      lessonIcon="📡"
      youtubeUrl={YOUTUBE_URL}
      googleSlidesUrl={GOOGLE_SLIDES_URL}
      sections={sections}
      questions={questions}
      answerKey={answerKey}
      color="cream"
    />
  );
}