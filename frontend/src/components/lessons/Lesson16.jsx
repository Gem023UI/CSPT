import React from "react";
import LessonPage from "../LessonPage";

const YOUTUBE_URL = "https://www.youtube.com/embed/pwp0j_RnnwA";
const GOOGLE_SLIDES_URL = "https://docs.google.com/presentation/d/e/2PACX-1vRiUm3a2-FhkAiSGlxYG7VBo61nCl_c63L9xRNx81Yx32usx0Akf2h6To4RWzzt2Q/pubembed?start=false&loop=false&delayms=3000";

const sections = [
  {
    heading: "Introduction",
    body: [
      "Mobile App Platforms — Software environments that allow developers to create, distribute, and run applications on mobile devices such as smartphones and tablets. Provide the operating system, development tools, and application marketplaces needed to support mobile applications",
      "Mobile Game Platforms — Specialized software environments designed to support the development, distribution, and execution of games on mobile devices. Provide game engines, graphics processing support, and distribution channels for interactive and immersive gaming experiences",
    ],
  },
  {
    heading: "History: Early Mobile Phones (1990s–Early 2000s)",
    body: [
      "Designed mainly for basic communication: voice calls and SMS",
      "Very limited hardware: small monochrome screens, low memory, no internet connectivity",
      "Applications built directly into the phone by manufacturers — users could not install new apps",
      "Built-in tools: Calculator, Calendar, Alarm clock, Phonebook",
      "Early Games: Simple due to limited processing power; Snake (Nokia) became the most iconic mobile game; games were pre-installed, offline, and single-player only",
    ],
  },
  {
    heading: "History: Feature Phone Era (Early 2000s)",
    body: [
      "Introduced incremental improvements: small color displays, basic internet access (WAP), improved storage",
      "Java ME (J2ME) allowed third-party developers to create simple apps and games that could be downloaded",
      "Users could download wallpapers, ringtones, and simple games (Tetris, racing, puzzle games)",
      "Limitations: Low processing speed, small screens, slow and expensive mobile internet, limited app compatibility across devices",
    ],
  },
  {
    heading: "History: Birth of Smartphones (2007–2008)",
    body: [
      "2007 — Apple iPhone: introduced large touchscreen interface, eliminated physical keypads, focused on user experience and design",
      "2008 — Android by Google: open-source operating system adopted by multiple manufacturers (Samsung, HTC, LG); encouraged wider innovation and competition",
      "This period shifted mobile phones from communication devices to multi-purpose computing platforms",
      "2008 — App Stores launched: Apple App Store and Google Play Store",
      "Impact: Developers could distribute apps globally, users could easily search/download/update apps, improved security through app review systems, mobile apps became a commercial industry",
    ],
  },
  {
    heading: "History: Growth of Mobile Apps (2010s)",
    body: [
      "Smartphones became widely accessible, leading to rapid growth in mobile applications",
      "Social media apps: Facebook, Instagram, Twitter",
      "Messaging apps: WhatsApp, Messenger, Telegram",
      "Productivity apps: Email, document editors, cloud storage",
      "Education apps: Learning platforms and online courses",
      "Mobile gaming evolved: Angry Birds, Clash of Clans, PUBG Mobile",
      "Key gaming developments: transition from 2D to 3D graphics, online multiplayer, in-app purchases, live events and seasonal updates",
    ],
  },
  {
    heading: "Mobile Platforms Today",
    body: [
      "Dominated by Android (open-source, customizable, millions of apps, multiple device brands) and iOS (closed-source, optimized for Apple hardware, strong privacy and security)",
      "Modern smartphones support: high-performance processors and graphics, cloud-based applications, advanced gaming comparable to consoles, integration with cloud services and social platforms",
      "Main App Ecosystems: Apple Inc. (iOS App Store) and Google LLC (Google Play Store) control app distribution, security rules, and monetization policies",
      "Over 6+ billion smartphone users globally; mobile gaming generates more revenue than console and PC gaming combined",
    ],
  },
  {
    heading: "Current Technologies",
    body: [
      "Mobile Operating Systems — Android: open-source, customizable; iOS: closed-source, tightly controlled with strong privacy",
      "Development Platforms — Native: Android (Java/Kotlin with Android Studio), iOS (Swift/Objective-C with Xcode). Cross-Platform: Flutter, React Native, Xamarin — single codebase for multiple platforms",
      "Distribution Platforms — Google Play Store and Apple App Store: app hosting, delivery, automatic updates, review/approval process, user ratings and reviews",
      "Hardware — Multi-core CPUs, GPUs, sensors (accelerometer, gyroscope, GPS, camera). ARM architecture for low power consumption",
      "Cloud & Backend — Google Firebase, AWS Mobile, Microsoft Azure: data storage, authentication, real-time sync, push notifications",
      "Network Technologies — 4G LTE, 5G (ultra-low latency), Wi-Fi, Bluetooth. Enable video calls, cloud gaming, live streaming, IoT connectivity",
      "Security — Application sandboxing, secure boot, encrypted data storage, biometric authentication (fingerprint, face), app permission management",
    ],
  },
  {
    heading: "Key Challenges in Mobile Platforms",
    body: [
      "Market Saturation & Discoverability — Millions of apps competing for attention; 80% of downloads go to top-ranked apps; high user acquisition costs. Solution: App Store Optimization (ASO) and strong marketing",
      "Security Threats & Data Privacy — Data breaches, phishing, malware apps, unauthorized data tracking, payment fraud. Regulations: GDPR (Europe), CCPA (California). Impact: Increased compliance costs, mandatory encryption and secure APIs",
      "Monetization Challenges — Common models: freemium, in-app purchases (IAP), subscription-based, advertising. Problems: Ad fatigue, subscription saturation, platform commission fees (30% standard). Must balance revenue vs. user experience",
      "Device Fragmentation (Android especially) — Thousands of Android device models, different hardware capabilities, multiple OS versions. Result: Increased QA testing, compatibility issues, performance optimization challenges",
      "User Retention & Engagement — High uninstall rates within first 30 days; short attention spans. Key Metrics: DAU (Daily Active Users), MAU (Monthly Active Users), Retention Rate, Customer Lifetime Value (CLV)",
      "Rising Development Costs — Advanced UI/UX design, backend cloud infrastructure, cybersecurity investment, marketing. Small startups face funding pressure",
    ],
  },
  {
    heading: "Future Trends",
    body: [
      "AI Integration — Personalized recommendations, smart assistants and chatbots, AI-generated content, game difficulty adaptation. Future impact: hyper-personalized experiences, automated customer support, real-time analytics",
      "Augmented Reality (AR) & Immersive Tech — Popularized by Pokémon Go. Growing uses: retail virtual try-on, education simulations, real estate visualization, healthcare training. Future: AR embedded in everyday apps",
      "Cloud Gaming & 5G — Low latency and high-quality streaming makes AAA games accessible on smartphones without powerful hardware",
      "Cross-Platform & Low-Code Development — Flutter, React Native for single-codebase apps. Advantages: faster updates, lower cost, faster time-to-market",
      "Super Apps & Platform Ecosystems — Apps combining messaging, payments, ride-hailing, e-commerce, and financial services (WeChat, Grab). Platform ecosystems replacing single-purpose apps",
      "Sustainability & Green Computing — Energy-efficient app development, cloud optimization, reduced data consumption, corporate ESG responsibility",
    ],
  },
  {
    heading: "Strategic Recommendations",
    body: [
      "For Developers: Invest in security, focus on UX and retention, adopt AI and cross-platform tools, use data analytics for decision-making",
      "For Businesses: Diversify monetization models, build ecosystem partnerships, prioritize long-term user trust",
      "Conclusion: Mobile platforms are highly competitive. Security, monetization, and fragmentation remain major challenges. AI, AR/VR, 5G, cloud gaming, and super apps are shaping the future. Continuous innovation is key to survival",
    ],
  },
];

const questions = [
  { question: "Which of the following are the two most popular mobile operating system platforms?", options: ["Windows Phone and Symbian", "Android and iOS", "Linux and macOS", "Ubuntu and HarmonyOS"] },
  { question: "What is the main advantage of native app development?", options: ["Works only on web browsers", "Requires no coding", "High performance and full device access", "No need for app stores"] },
  { question: "Which of the following is an example of a cross-platform development framework?", options: ["Xcode", "Android Studio", "Flutter", "Swift"] },
  { question: "What is the primary function of distribution platforms like Google Play Store and the Apple App Store?", options: ["To manufacture smartphones", "To provide cloud storage", "To publish, distribute, and update mobile apps", "To design mobile hardware"] },
  { question: "Which hardware architecture is commonly used in mobile devices for low power consumption?", options: ["x86", "ARM", "PowerPC", "Itanium"] },
  { question: "Which network technology provides ultra-low latency and high bandwidth for mobile connectivity?", options: ["3G", "Wi-Fi 3", "4G LTE", "5G"] },
  { question: "Which of the following is considered an emerging mobile technology?", options: ["Fax messaging", "Artificial Intelligence", "CD players", "Dial-up internet"] },
  { question: "Today, mobile platforms are mainly dominated by:", options: ["Nokia and BlackBerry", "Android and iOS", "Windows and Linux", "Facebook and Twitter"] },
  { question: "During the 2010s, mobile apps grew rapidly because:", options: ["Smartphones became widely accessible", "Computers disappeared", "Internet was removed", "Apps were free forever"] },
  { question: "App stores were important because they:", options: ["Sold only physical phones", "Centralized app distribution", "Blocked developers", "Removed internet access"] },
  { question: "The iPhone introduced in 2007 was known for its:", options: ["Physical keypad", "Touchscreen interface", "Foldable screen", "VR headset"] },
  { question: "The launch of smartphones marked a turning point because they:", options: ["Removed SMS", "Became multi-purpose computing devices", "Eliminated games", "Reduced screen size"] },
  { question: "During the feature phone era, users could download apps using:", options: ["Bluetooth only", "Java ME (J2ME)", "iOS", "Windows XP"] },
  { question: "Early mobile phones had:", options: ["Large HD touchscreens", "Small monochrome screens", "VR capability", "5G internet"] },
  { question: "What is one major reason why mobile apps face discoverability challenges?", options: ["Limited smartphone users", "High internet costs", "Millions of competing apps in app stores", "Lack of developer tools"] },
  { question: "Which of the following is a major security concern in mobile apps and games?", options: ["Slow loading screens", "Data breaches and unauthorized tracking", "Poor graphic design", "Battery overheating"] },
  { question: "What is a common problem with monetization models in mobile apps?", options: ["Lack of payment options", "Too many free apps", "Ad fatigue and subscription saturation", "No user engagement"] },
  { question: "Why does device fragmentation increase development difficulty?", options: ["Apps must be redesigned monthly", "Different hardware and OS versions require extensive testing", "Developers must learn new languages", "Cloud storage is limited"] },
  { question: "Which metric measures how many users return to an app over time?", options: ["DAU", "MAU", "Retention Rate", "CLV"] },
  { question: "Which future trend allows high-quality games to run on smartphones without powerful hardware?", options: ["Super Apps", "Augmented Reality", "Cloud Gaming and 5G", "Low-Code Development"] },
];

const answerKey = ["B","C","C","C","B","D","B","B","A","B","B","B","B","B","C","B","C","B","C","C"];

export default function Lesson16() {
  return (
    <LessonPage
      lessonId={16}
      lessonTitle="Mobile Apps & Games Platforms"
      lessonShortTitle="Mobile & Games"
      lessonIcon="🎮"
      youtubeUrl={YOUTUBE_URL}
      googleSlidesUrl={GOOGLE_SLIDES_URL}
      sections={sections}
      questions={questions}
      answerKey={answerKey}
      color="purple"
    />
  );
}