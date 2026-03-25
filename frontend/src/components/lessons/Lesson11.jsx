import React from "react";
import LessonPage from "./LessonPage";

const YOUTUBE_URL = "https://www.youtube.com/embed/rub5NaYwwP0";
const GOOGLE_SLIDES_URL = "https://docs.google.com/presentation/d/e/2PACX-1vTRH4dwHiPjd6ZKqtYaGAuqGkHqgrJLgMwbdFnUr59xBdmXczoc-jSU8XOa5tKHhQ/pubembed?start=false&loop=false&delayms=3000";

const sections = [
  {
    heading: "What is a Media Platform?",
    body: "A media platform is a digital service or technology that enables the creation, sharing, and consumption of content. It acts as an interactive space where users, creators, and advertisers connect — unlike traditional one-way media like TV. Common examples include social networks like Instagram, video services like YouTube, and audio apps like Spotify. These platforms use algorithms to personalize content and thrive on user interaction through likes, comments, and shares.",
  },
  {
    heading: "Purpose and Importance",
    body: [
      "To Inform — distributing news, facts, and current events to the public",
      "To Entertain — providing games, videos, music, and other leisure content",
      "To Connect & Socialize — enabling communication between individuals and communities",
      "To Educate & Share Knowledge — hosting tutorials, courses, and educational content",
      "To Enable Marketing & Commerce — connecting businesses with consumers",
      "To Generate Revenue — providing monetization tools for creators and platform owners",
      "To Host and Facilitate Live Interaction — enabling real-time broadcasts and events",
      "To Build and Manage Communities — allowing groups to organize around shared interests",
    ],
  },
  {
    heading: "History: Traditional Media (1600s–1980s)",
    body: [
      "Earliest forms of mass communication: newspapers, magazines, radio, television, and books",
      "Information was largely one-way (producer to consumer)",
      "Impact: Shaped public opinion, spread knowledge, created shared culture",
      "1440 — Johannes Gutenberg's Printing Press established",
      "1605 — First newspaper published (Relation aller Fürnemmen und gedenckwürdigen Historien)",
      "1702 — First English daily newspaper (London's Daily Courant)",
      "1920 — First radio news broadcast (8MK Detroit)",
      "1930s — Television begins broadcasting",
    ],
  },
  {
    heading: "History: Early Digital Media (1990s–Early 2000s)",
    body: [
      "Marked the shift from analog to digital — websites, email, blogs, and online forums",
      "Made information more accessible and shareable globally",
      "Interactivity was still limited; users could access content at any time unlike traditional media",
      "Impact: Started global interaction, allowed personal publishing",
      "1991 — World Wide Web launched to the public",
      "1993 — Email becomes widely used by the public",
      "1994 — Personal websites begin to appear widely",
      "1995 — Yahoo! and other web portals popularize online browsing",
      "1997 — First blogs appear (term 'weblog' coined)",
    ],
  },
  {
    heading: "History: Rise of Social Media (2003–2010)",
    body: [
      "Transformed media from a one-way channel into a two-way, interactive ecosystem",
      "Social media applications enabled users to generate, share, and comment on content instantly",
      "Impact: Real-time communication, viral trends, marketing, social movements",
      "2004 — Facebook launched with real-identity profiles, friend networks, and personal timelines",
      "2005 — YouTube founded — anyone could upload and distribute videos",
      "2006 — Twitter launched as a microblogging platform for real-time short messages",
      "2010 — Instagram launched, emphasizing visual sharing",
    ],
  },
  {
    heading: "History: Modern Media Platforms (2010–Present)",
    body: [
      "Characterized by personalization, on-demand content, and immersive experiences",
      "Services like TikTok (2016), Netflix, and Spotify combine streaming, social interaction, and advanced algorithms",
      "Technologies like AR, VR, and AI create more engaging and interactive experiences",
      "Unlike early media, modern platforms allow constant connectivity and influence cultural, economic, and political behaviors",
    ],
  },
  {
    heading: "Current Technologies",
    body: [
      "Cloud Computing — Media platforms use cloud services to store data, host content, and manage traffic. Allows YouTube and Netflix to handle millions of simultaneous users",
      "Content Delivery Networks (CDN) — Distribute media content across multiple servers worldwide, ensuring faster loading and smoother streaming",
      "Artificial Intelligence & Machine Learning — Used for content recommendations, search optimization, face recognition, and automated captions (e.g., YouTube recommendations, Facebook suggested posts)",
      "Big Data & Analytics — Platforms analyze user behavior (likes, views, shares) to improve content, advertising, and user experience",
      "Mobile & Web Technologies — HTML5, CSS, JavaScript, and mobile app frameworks enable platforms to work smoothly across devices",
      "Live Streaming Technology — Allows real-time video and audio broadcasting for live news, online classes, and gaming streams",
    ],
  },
  {
    heading: "Security Technologies",
    body: [
      "Authentication & Authorization — Technologies to verify user identity and control access to content and account features",
      "Encryption — Protects data in transit and at rest from unauthorized interception",
      "Firewalls & Intrusion Detection Systems (IDS) — Monitor and block suspicious activities, protecting platforms from cyberattacks",
      "Data Privacy & Compliance Tools — Used to comply with data protection laws and manage user consent and privacy settings",
      "Content Moderation Systems — AI-powered moderation detects fake news, harmful content, and spam to maintain safe communities",
      "Backup & Recovery Systems — Ensure data can be restored in case of system failure or cyber incidents",
    ],
  },
  {
    heading: "Types of Media Platforms",
    body: [
      "Social Media Platforms — For sharing posts and connecting with people. Allow two-way interaction, real-time updates, and personalized content through algorithms. Examples: TikTok, Facebook, Reddit, LinkedIn",
      "Video Sharing Platforms — For watching and sharing content in video form. User-generated content, interaction through likes and comments, on-demand access. Examples: YouTube, TikTok",
      "Streaming Platforms — For watching or listening to media online anytime. Personalized recommendations via algorithms, on-demand videos, full viewer control. Examples: Netflix, Amazon Prime Video",
      "News & Publishing Platforms — For creating, publishing, and distributing news and written content. Focus on factual, timely information; primarily one-way communication. Examples: Online newspapers, blogs, Medium, Substack",
      "Messaging Platforms — For sending instant messages directly to individuals or groups. Real-time communication, end-to-end encryption, multimedia sharing. Examples: Messenger, WhatsApp, Telegram, Viber",
      "Live Streaming Platforms — For broadcasting video and audio in real time. Real-time interaction through comments and reactions; requires stable internet connection. Examples: YouTube Live, Facebook Live, Twitch, TikTok Live",
    ],
  },
  {
    heading: "Challenges and Issues",
    body: [
      "Misinformation — False or misleading information spreads quickly, especially on social media. Can confuse the public, influence opinions, and cause panic or conflict",
      "Privacy Issues — Platforms collect personal data (location, preferences, online activity). Improper use or data leaks can put users' privacy at risk",
      "Cyberbullying — Online harassment, hate speech, and bullying occur frequently. Negatively affects mental health, especially among children and teenagers",
      "Addiction/Excessive Use — Excessive use can lead to addiction, reducing productivity and affecting sleep, mental health, and real-life relationships",
      "Security Risks — Users may face hacking, phishing, scams, and identity theft due to weak security practices or malicious online activities",
      "Content Moderation — Detecting harmful content is hard due to volume and context. Automated moderation may mislabel content; human moderation is emotionally taxing",
    ],
  },
  {
    heading: "Future Trends",
    body: [
      "Artificial Intelligence — More personalized content, automated moderation, AI-generated media, and deeper analytics",
      "Augmented Reality (AR) — Overlaying digital elements in the real world for immersive experiences",
      "Virtual Reality (VR) — Fully immersive digital environments for entertainment, social interaction, and events",
      "Live / Real-Time Media — Growing demand for unedited, spontaneous content and live interaction with audiences",
      "Data Privacy & Security — Stricter regulations and user expectations will push platforms to prioritize privacy-first features",
    ],
  },
];

const questions = [
  { question: "The traditional period of media platforms allowed information to be disseminated to a large audience, but it was mostly ___ way.", options: ["One", "Two", "Three", "Four"] },
  { question: "Which media platform issue can confuse the public, influence opinions, and cause panic or conflict?", options: ["Misinformation", "Privacy Issues", "Cyberbullying", "Content Moderation"] },
  { question: "Platforms that are used to watch or listen to media content online, anytime.", options: ["Live Streaming Platforms", "Video Sharing Platforms", "Streaming Platforms", "Stream Platforms"] },
  { question: "A media platform issue where users may face hacking, phishing, scams, and identity theft.", options: ["Security Risk", "Privacy Concerns", "Content Moderation", "Cyberbullying"] },
  { question: "What does 'AR' stand for in the context of Media Platforms?", options: ["Alternate Reality", "Artificial Recognition", "Augmented Reality", "Audio Rendering"] },
  { question: "Which of these is a way media platforms are used in marketing and advertising?", options: ["Online learning access", "Product promotion reach", "Awareness and Support", "Real-time interaction"] },
  { question: "Which among these platforms is NOT a social media platform?", options: ["Reddit", "LinkedIn", "Brainly", "Netflix"] },
  { question: "This era transformed media from a one-way channel into a two-way, interactive ecosystem.", options: ["Traditional Media", "Early Digital Media", "Rise of Social Media", "Modern Media"] },
  { question: "One of the significant events in traditional media history was Johannes Gutenberg's _____, established in 1440.", options: ["Radio Broadcasting Station", "Journalism Office", "Printing Press", "Newspaper Publishing"] },
  { question: "What term was coined in 1997 when the first blog posts appeared?", options: ["Google Blog", "Blogging", "Vlog", "Weblog"] },
  { question: "Which of these is NOT listed as a 'Traditional Media Platform'?", options: ["Television (TV)", "YouTube", "Radio", "Newspapers"] },
  { question: "What was a key limitation of Traditional Media (1600s–1980s) compared to modern platforms?", options: ["It was too expensive", "It was largely one-way communication", "It was not accessible to the public", "It did not include visual content"] },
  { question: "In which era did media platforms begin to allow 'personal publishing' and 'global reach'?", options: ["Traditional Media", "Early Digital Media", "Rise of Social Media", "Modern Media Platforms"] },
  { question: "What is the primary function of 'Authentication & Authorization' technologies in media platforms?", options: ["To deliver content faster", "To verify user identity and control access", "To recommend personalized content", "To block cyberattacks automatically"] },
  { question: "Which technology ensures data can be restored in case of system failure?", options: ["Firewalls", "Backup & Recovery Systems", "Content Delivery Networks", "HTML5"] },
  { question: "Which is a key feature of 'Live Streaming Platforms'?", options: ["Pre-recorded content only", "No audience interaction", "Real-time video broadcasting with live chat", "Available only on television"] },
  { question: "Which type of media platform focuses on 'delivering factual, timely, and reliable information'?", options: ["Social Media Platforms", "News & Publishing Platforms", "Messaging Platforms", "Streaming Platforms"] },
  { question: "Which application of media platforms is described as 'Remote Team Work Tools'?", options: ["Education", "Business Collaboration", "Advocacy", "Entertainment"] },
  { question: "AI is used in media platforms primarily for:", options: ["Physical content printing", "Content recommendations and search optimization", "Building television antennas", "Cable network management"] },
  { question: "Which messaging platform characteristic ensures message security between sender and receiver?", options: ["Real-time updates", "Algorithm personalization", "End-to-end encryption", "Cloud storage"] },
];

const answerKey = ["A","A","C","A","C","B","D","C","C","D","B","B","B","B","B","C","B","B","B","C"];

export default function Lesson11() {
  return (
    <LessonPage
      lessonId={11}
      lessonTitle="Media Platforms"
      lessonShortTitle="Media Platforms"
      lessonIcon="🎬"
      youtubeUrl={YOUTUBE_URL}
      googleSlidesUrl={GOOGLE_SLIDES_URL}
      sections={sections}
      questions={questions}
      answerKey={answerKey}
      color="cream"
    />
  );
}