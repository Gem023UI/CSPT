import React from "react";
import LessonPage from "./LessonPage";

const YOUTUBE_URL = "https://www.youtube.com/embed/pKbmwc1TcsA";
const GOOGLE_SLIDES_URL = "https://docs.google.com/presentation/d/e/2PACX-1vRmQLehjQ6-Rr9AtnkPJSyUibNXXTb5BEifquHRK8N43INTvAm6kcd1WLp270Cq7Q/pubembed?start=false&loop=false&delayms=3000";

const sections = [
  {
    heading: "Introduction to Computer Security",
    body: "Computer security and cybersecurity are essential components of the modern digital world, as computers and networks are widely used for communication, business, and governance. As technology advanced, security threats such as unauthorized access and data theft increased in frequency and complexity. Understanding the development of computer security helps explain why strong cybersecurity measures are necessary today.",
  },
  {
    heading: "History: Early Computing & Physical Protection",
    body: [
      "Early Computing (Pre-1960s) — Computers were large, expensive machines accessible only to a small number of trusted users. Security focused mainly on supervision and trust. Little awareness of malicious digital threats because computers were not yet interconnected",
      "1960s: Mainframe Computers — Systems owned by large organizations (IBM). Security focused on physical protection: locked computer rooms, guards, restricted access. Since computers were not networked, hacking and malware did not yet exist",
      "1970s: Time-Sharing Systems — Multiple users could access a single computer simultaneously. Introduced risks of unauthorized data access across users. Basic security mechanisms introduced: passwords and access controls — the beginning of logical security",
    ],
  },
  {
    heading: "History: Networking Era & Modern Security",
    body: [
      "Early Networking — ARPANET connected computers for research, introducing risks of unauthorized remote access. Systems were no longer completely isolated, requiring security measures beyond physical protection",
      "Late 1970s: Security Policies — Organizations developed formal computer security policies. Security models were introduced for access control. Security became part of organizational management",
      "1980s: Personal Computers — Rapid growth made technology accessible to individuals and small businesses. Software sharing through floppy disks enabled malicious programs to spread. Emphasized need for user awareness and protection mechanisms",
      "1988: Morris Worm — First major worm caused widespread system disruptions. Marked a turning point in security awareness. Led to development of antivirus software and stronger access controls",
      "1990s: Internet Expansion — Global connectivity enabled remote attacks. Hackers could access systems without physical presence. Firewalls, encryption, and network security tools introduced",
      "Late 1990s: Modern Cybersecurity — Security became a recognized field. Organizations invested in dedicated security teams. Governments introduced laws to address cybercrime. Transition from basic computer security to modern cybersecurity practices",
    ],
  },
  {
    heading: "Evolution of Cybersecurity",
    body: [
      "Early Reactive Approach — Organizations responded to threats only after damage occurred. Antivirus was the primary defense. Weaknesses of reactive security became clear as attacks increased",
      "Shift to Proactive Security — Prevention became key. Regular updates, vulnerability scanning, and risk assessments introduced. Cybersecurity evolved into a continuous process",
      "Advanced Network Security — Firewalls became capable of intelligent traffic filtering. Intrusion detection systems monitored suspicious activities. Encryption widely used to protect data in transit",
      "Multi-Factor Authentication — Passwords alone became insufficient. Added additional verification layers. Unauthorized access became significantly more difficult",
      "Cybersecurity as Business Priority — Data breaches resulted in financial losses and reputational damage. Organizations formed dedicated cybersecurity teams. Cybersecurity became part of business strategy",
      "Human Factor — Many attacks exploit human behavior rather than system weaknesses. Phishing tricks users into revealing sensitive information. Training and awareness programs introduced to reduce human error",
      "Cloud & Mobile Security — Cloud computing changed how data is stored and accessed. Mobile devices expanded the attack surface. New tools developed for cloud and mobile environments",
      "AI in Cybersecurity — AI systems analyze large data volumes quickly and detect unusual behavior in real time. Machine learning improves threat detection accuracy and reduces response time",
    ],
  },
  {
    heading: "Types of Malicious Attacks",
    body: [
      "Phishing — Attackers disguise themselves as legitimate organizations (banks, social media, government) through fake emails, texts, or websites to trick users into revealing passwords, credit card numbers, or personal data. Relies on deception and human error",
      "DDoS (Distributed Denial-of-Service) — Uses multiple compromised computers (botnet) to flood a target server or website with massive traffic, causing it to slow down, crash, or become unavailable. Used against businesses and government sites for financial damage or disruption",
      "Man-in-the-Middle (MITM) — Attacker secretly intercepts communication between two parties on unsecured networks (e.g., public Wi-Fi). Can eavesdrop, steal credentials, capture financial info, or alter transmitted data without either party knowing",
      "SQL Injection — Attacker inserts malicious SQL code into input fields (login forms, search boxes) to manipulate a database. Can gain unauthorized access to sensitive data, modify/delete records, bypass authentication, or take control of the entire database",
      "Brute Force Attack — Systematically tries every possible combination of passwords or keys using automated software until the correct one is found. Effective against weak, short, or common passwords. Countermeasures: strong passwords, account lockout, and MFA",
    ],
  },
  {
    heading: "Types of Malicious Software (Malware)",
    body: [
      "Virus — Attaches itself to legitimate files/programs and spreads when infected files are opened or shared. Can replicate to other files, corrupt data, slow performance, or delete important files. Relies on human actions to spread",
      "Worm — Self-replicating malware that spreads automatically across networks without human interaction. Exploits vulnerabilities in OS, software, or network configurations. Can consume bandwidth, slow systems, or deliver additional malware payloads",
      "Trojan (Trojan Horse) — Masquerades as a legitimate or useful program to deceive users into installing it. Creates backdoors for remote access, steals information, or installs additional malware. Unlike viruses/worms, Trojans do not self-replicate — they rely on user trust",
      "Ransomware — Locks or encrypts victim's files/entire system, demanding a ransom (usually cryptocurrency) to restore access. Targets individuals, businesses, hospitals, and government agencies. Some variants threaten to publicly release sensitive information",
      "Spyware — Secretly monitors user activities, records browsing history, captures keystrokes, and steals login credentials without consent. Collected data sent to attackers for identity theft or financial fraud. Runs silently in the background — one of the stealthiest forms of malware",
    ],
  },
  {
    heading: "Network Security",
    body: [
      "Firewall — Monitors and controls incoming/outgoing network traffic based on security rules. Acts as a barrier between trusted internal and untrusted external networks. Filters traffic by IP address, port, protocol, or application",
      "IDS/IPS (Intrusion Detection/Prevention Systems) — IDS monitors network traffic for unusual patterns and alerts administrators. IPS actively blocks or stops threats in real time. Together they prevent unauthorized access, malware infections, and data breaches",
      "Secure Wi-Fi / Network Access Controls — Strong Wi-Fi passwords, WPA3/WPA2 encryption, and network access policies. Prevents unauthorized users and devices from connecting to the network",
      "Antivirus & Endpoint Security — Protects individual devices from malware, viruses, and malicious attacks. Includes firewalls, application control, data encryption, and behavior monitoring. Prevents spread of malware across the entire system",
    ],
  },
  {
    heading: "Internet Security",
    body: [
      "HTTPS / SSL Encryption — Protects data transmitted between browser and website. Ensures passwords, credit card numbers, and personal data are encrypted and cannot be intercepted. Websites with HTTPS display a padlock icon in the browser",
      "VPN (Virtual Private Network) — Creates a secure, encrypted 'tunnel' for online activity. Hides the user's IP address and encrypts all data. Essential when using unsecured public Wi-Fi. Prevents hacking, identity theft, and unauthorized access",
      "Email Security / Anti-Phishing Tools — Scans incoming messages for suspicious links, attachments, or sender addresses. Blocks or flags unsafe content. Plays a critical role in preventing identity theft and financial fraud",
      "Multi-Factor Authentication (MFA) — Requires two or more verification methods: something you know (password), something you have (phone/token), something you are (biometric). Extremely effective — even if a hacker has your password, they cannot log in without additional factors",
    ],
  },
  {
    heading: "Challenges in Cybersecurity",
    body: [
      "Human Element — The greatest challenge despite advanced technology. Social engineering (phishing, business email compromise) exploits human psychology rather than technical flaws",
      "Human Error — Most hacks happen because someone used a weak password or clicked a suspicious link",
      "Lack of Experts — Not enough trained professionals to stop evolving cyberthreats",
      "Insider Threats — Danger from within the organization, whether intentional or accidental",
      "New Hack Tools — Hackers constantly invent new viruses that older antivirus software can't catch",
      "Remote Work — Harder to protect employees using home Wi-Fi instead of secure office internet",
      "Legacy Systems — Old computers and software with known vulnerabilities still in use",
      "Cost — Good security is expensive; small businesses often cannot afford the best protection",
    ],
  },
  {
    heading: "Future Trends in Cybersecurity",
    body: [
      "AI Defense — AI 'watches' the network and blocks hackers instantly, 24/7. Risk: can cause False Positives, blocking legitimate users",
      "AI Attacks — Hackers using AI to create Deepfakes and better phishing campaigns. Risk: Harder to tell if a video or voice is real or fake",
      "Biometrics — Using fingerprints, face scans, or typing patterns to prove identity. Advantage: Very convenient and hard to steal. Risk: If biometric data is hacked, you cannot 'change' it like a password",
      "How to Stay Safe: Use MFA, keep all software patched, adopt Zero Trust architecture, conduct security awareness training, and maintain offline data backups",
    ],
  },
];

const questions = [
  { question: "What is the main purpose of a malicious attack?", options: ["To improve system performance", "To protect user data", "To damage, disrupt, or gain unauthorized access to systems", "To update software automatically"] },
  { question: "Which type of attack floods a website with traffic to make it unavailable?", options: ["Phishing", "DDoS Attack", "SQL Injection", "Brute Force Attack"] },
  { question: "Which type of malware disguises itself as a legitimate program to trick users?", options: ["Worm", "Trojan", "Virus", "Spyware"] },
  { question: "What is the primary function of a firewall in network security?", options: ["To speed up internet connection", "To block unauthorized access to a network", "To delete viruses automatically", "To store passwords securely"] },
  { question: "What does HTTPS help protect?", options: ["Physical computer hardware", "Encrypted communication between a browser and a website", "Wi-Fi signal strength", "Printer connections"] },
  { question: "Why is Multi-Factor Authentication (MFA) important?", options: ["It removes the need for passwords", "It makes websites load faster", "It adds extra verification to prevent unauthorized access", "It automatically updates antivirus software"] },
  { question: "Which factor is considered the 'greatest challenge' in cybersecurity despite having advanced technology?", options: ["Software bugs", "The Human Element", "Slow internet speeds", "Expensive hardware"] },
  { question: "What is the primary goal of a Phishing attack?", options: ["To speed up a computer's performance", "To install helpful software updates", "To steal login info using tricky emails or texts", "To fix a company's network connection"] },
  { question: "Why does Remote Work pose a significant cybersecurity challenge?", options: ["Employees work longer hours at home", "Home Wi-Fi is often less secure than office networks", "It is impossible to use passwords at home", "Computers get dusty outside of the office"] },
  { question: "What is a major disadvantage of using AI for defense in cybersecurity?", options: ["It needs to sleep 8 hours a day", "It can only block one hacker at a time", "It may cause 'False Positives' by blocking real users", "It makes the internet slower for everyone"] },
  { question: "How do hackers use AI as a 'New Threat'?", options: ["To help users remember their passwords", "To create 'Deepfakes' and perfect scam emails", "To clean viruses from old computers", "To make software cheaper for small businesses"] },
  { question: "What is a unique risk of using Biometrics like fingerprints for authentication?", options: ["They are very easy for hackers to guess", "You might forget your fingerprint", "They are less convenient than long passwords", "If hacked, you cannot 'change' your biometric data"] },
  { question: "Which term describes a threat that comes from someone within the organization?", options: ["Outside Threat", "Insider Threat", "New Hack Tool", "Remote Threat"] },
  { question: "Why was computer security first focused on physical protection in the 1960s?", options: ["To protect online shopping accounts", "Computers were valuable and housed in controlled environments without network connections", "To prevent social media hacking", "To protect mobile devices"] },
  { question: "What malware spreads automatically across networks without any human interaction?", options: ["Virus", "Trojan", "Worm", "Spyware"] },
  { question: "What is the main goal of malicious software (malware)?", options: ["To help computers run faster", "To protect system files", "To damage systems or steal information", "To improve internet connectivity"] },
  { question: "Which type of malware secretly monitors user activities and captures keystrokes without consent?", options: ["Ransomware", "Virus", "Worm", "Spyware"] },
  { question: "Why did cybersecurity become more important with the growth of the internet in the 1990s?", options: ["Because computers became smaller", "Because systems became globally connected and remotely accessible to attackers", "Because passwords were no longer required", "Because computers stopped working offline"] },
  { question: "What is the primary role of network security?", options: ["To design online applications", "To increase internet speed", "To protect data and systems from unauthorized access", "To create user accounts"] },
  { question: "Why is cybersecurity still a major challenge today?", options: ["Because cyber threats continue to evolve", "Because computers are outdated", "Because the internet is rarely used", "Because security tools are unnecessary"] },
];

const answerKey = ["C","B","B","B","B","C","B","C","B","C","B","D","B","B","C","C","D","B","C","A"];

export default function Lesson14() {
  return (
    <LessonPage
      lessonId={14}
      lessonTitle="Security"
      lessonShortTitle="Security"
      lessonIcon="🔐"
      youtubeUrl={YOUTUBE_URL}
      googleSlidesUrl={GOOGLE_SLIDES_URL}
      sections={sections}
      questions={questions}
      answerKey={answerKey}
      color="cream"
    />
  );
}