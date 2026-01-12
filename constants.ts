
import { Skill, Project, Experience } from './types';
// import { validateImagePath, validateCertPath } from './utils/security';

export const PERSONAL_INFO = {
  name: "ARUN KUMAR K",
  role: "Full Stack Developer | Cyber Security Analyst",
  tagline: "Building secure, scalable web & mobile applications with a hacker mindset 🔐💻",
  intro: "Cybersecurity professional with hands-on experience in penetration testing, backed by a strong foundation as a former Flutter full-stack developer. Skilled in securing applications and building them end-to-end. I leverage my ethical hacking expertise and software development background to create secure, high-quality systems. Passionate about identifying vulnerabilities, strengthening defenses, and contributing to both cybersecurity and software development teams.",
  aboutDetailed: "I started my journey with a BCA from KG College and worked my way through professional roles as a Flutter Developer and Full-Stack Developer at Trofeo Solutions and The Top Class Entertainment LLP. Currently specializing in Cyber Security, I focus on identifying vulnerabilities, strengthening system defenses, and contributing to both cybersecurity and software development teams.",
  closing: "I don’t just build applications — I secure them.",
  email: "arunkumar622.cs@gmail.com",
  phone: "+91-9943226408",
  location: "Tamil Nadu, India",
  linkedin: "https://www.linkedin.com/in/arun-kumar-k-462813376",
  github: "https://github.com/Arunkumar701/",
  instagram: "https://www.instagram.com/arun.kumar.tech?igsh=MWhrcHpsNmdqbWpuNA==",
  languages: ["English", "Telugu", "Tamil"]
};

export const SKILLS: Skill[] = [
  // Security
  { name: "Vulnerability Assessment (VA)", category: "Security" },
  { name: "Penetration Testing (PT)", category: "Security" },
  { name: "Web Application Testing (OWASP Top 10)", category: "Security" },
  { name: "Password Cracking", category: "Security" },
  { name: "SQLi, XSS, CSRF", category: "Security" },
  { name: "CTF Experience (TryHackMe, HackTheBox)", category: "Security" },
  { name: "Bandit", category: "Security" },
  // Tools (Security focused)
  { name: "Nmap", category: "Tools" },
  { name: "Burp Suite", category: "Tools" },
  { name: "Metasploit", category: "Tools" },
  { name: "SQLmap", category: "Tools" },
  { name: "Hydra", category: "Tools" },
  { name: "Wireshark", category: "Tools" },
  // Frontend/Tech
  { name: "React.js", category: "Frontend" },
  { name: "Flutter", category: "Frontend" },
  { name: "HTML5/CSS3", category: "Frontend" },
  // Programming Languages
  { name: "Python", category: "Backend" },
  { name: "JavaScript", category: "Backend" },
  { name: "SQL", category: "Backend" },
  { name: "Bash", category: "Backend" },
  { name: "Node.js", category: "Backend" },
  // Developer Tools
  { name: "Git", category: "Tools" },
  { name: "VS Code", category: "Tools" },
  { name: "Chrome DevTools", category: "Tools" },
  { name: "Android Studio", category: "Tools" },
  { name: "Postman", category: "Tools" },
  { name: "Docker", category: "Tools" },
  // Operating Systems
  { name: "Kali Linux", category: "Tools" },
  { name: "Ubuntu", category: "Tools" },
  { name: "Windows", category: "Tools" }
];

export const PROJECTS: Project[] = [
  {
    title: "Web App Pentesting Lab (DVWA + Burp Suite)",
    image: "/img/peneration_tester_lab.png",
    tech: ["Kali Linux", "Burp Suite", "DVWA"],
    features: ["Detected SQL injection, XSS, and brute-force vulnerabilities", "Intercepted and modified traffic using Burp Suite", "Performed routine security assessments and reported findings"],
    securityAspects: ["Vulnerability Assessment", "Exploitation Research", "Security Reporting"],
    description: "Cybersecurity Project: A hands-on environment for practicing and demonstrating advanced web exploitation techniques."
  },
  {
    title: "Internal Network Exploitation (TryHackMe - Blue Room)",
    image: "/img/Internal_netwrk_pro.png",
    tech: ["Nmap", "Metasploit", "Bash"],
    features: ["Identified SMB vulnerabilities and escalated privileges", "Conducted daily network security checks"],
    securityAspects: ["Network Reconnaissance", "Privilege Escalation", "Vulnerability Research"],
    description: "Cybersecurity Project: Focuses on internal network reconnaissance and exploitation."
  },
  {
    title: "Booking Management (React-ts + Node.js + MySQL)",
    image: "/img/booking_magr_pro.png",
    tech: ["React.js", "Node.js", "Fastify", "MySQL"],
    features: ["Built responsive web frontend using React.js", "Developed RESTful backend APIs using Node.js and Fastify", "Implemented MySQL database with efficient data modeling and queries"],
    securityAspects: ["Secure API Endpoints", "Data Validation", "Secure SQL Queries"],
    description: "Software Development Project: A full-stack solution for managing bookings."
  },
  {
    title: "Notes API (Node.js + Fastify / Express.js + MySQL)",
    image: "/img/nodejs_projects.jpg",
    tech: ["Node.js", "Fastify", "Express.js", "MySQL"],
    features: ["Developed full CRUD RESTful APIs", "Designed and integrated MySQL database for persistent storage", "Implemented request validation and structured routing", "Tested API endpoints using Postman"],
    securityAspects: ["CRUD Security", "Request Validation", "API Testing"],
    description: "Software Development Project: Scalable backend for note-taking applications."
  },
  {
    title: "CMS Web Project (Flutter + Firebase)",
    image: "/img/cms_pro.jpg",
    tech: ["Flutter", "Firebase"],
    features: ["Built responsive CMS web app using Flutter", "Integrated Firebase for authentication and real-time database"],
    securityAspects: ["Identity Management", "Secure Hosting", "Database Rules"],
    description: "Software Development Project: A cross-platform Content Management System."
  },
  {
    title: "Mini Shopping App (Flutter + MySQL)",
    image: "/img/mini_shopping_pro.png",
    tech: ["Flutter", "MySQL", "SQLite"],
    features: ["Built mobile frontend with Flutter", "Developed backend SQLite database integration"],
    securityAspects: ["Local Data Security", "State Management", "Secure Backend Integration"],
    description: "Software Development Project: Mobile shopping experience with local storage."
  }
];

export const NETWORK_DATA = [
  {
    id: 1,
    title: "Corporate Network Audit",
    description: "Conducted a comprehensive security audit on a simulated corporate network using Nmap and Wireshark to identify open ports and insecure protocols.",
    tech: ["Nmap", "Wireshark", "Packet Tracer"],
  },
  {
    id: 2,
    title: "Intrusion Detection System (IDS)",
    description: "Configured Snort IDS on a Linux environment to monitor network traffic for suspicious patterns and log potential unauthorized access attempts.",
    tech: ["Snort", "Linux", "Syslog"],
  },
  {
    id: 3,
    title: "Secure VLAN Configuration",
    description: "Designed and implemented a secure VLAN architecture to isolate sensitive departments and improve network performance and security.",
    tech: ["Cisco iOS", "Switching", "VLAN Tagging"],
  }
];

export const EXPERIENCES: Experience[] = [
  {
    role: "Cyber security",
    company: "The Top Class Entertainment LLP",
    duration: "2025 - Present",
    responsibilities: [
      "Application security testing (Web & API)",
      "Finding and reporting vulnerabilities",
      "Analyzing systems for vulnerabilities and hardening defenses",
      "Collaborating with development teams to ensure secure-by-design principles"
    ]
  },
  {
    role: "Flutter Full-Stack Developer",
    company: "The Top Class Entertainment LLP",
    duration: "2023 - 2025",
    responsibilities: [
      "Developed high-performance cross-platform mobile and web applications",
      "Built and maintained RESTful backend services and databases",
      "Ensured seamless integration between frontend and backend components"
    ]
  },
  {
    role: "Flutter Developer",
    company: "Trofeo Solutions",
    duration: "2022 - 2023",
    responsibilities: [
      "Focused on responsive UI development using Flutter",
      "Integrated third-party APIs and state management solutions",
      "Delivered production-ready code for client applications"
    ]
  }
];

export const ACADEMICS = [
  {
    degree: "Bachelor of Computer Applications",
    institution: "KG College of Arts and Science, Coimbatore",
    duration: "2019 - 2022"
  },
  {
    degree: "Higher Secondary (12th)",
    institution: "Devanga Higher Secondary School, Coimbatore",
    duration: "2017 - 2019"
  },
  {
    degree: "Secondary School (10th)",
    institution: "Devanga Higher Secondary School, Coimbatore",
    duration: "2016 - 2017"
  }
];

export const CERTIFICATIONS = [
  {
    name: "Certified Ethical Hacker (CEH)",
    provider: "Ec-Council",
    duration: "May 2025 - Jun 2026",
    image: "/cert/ceh_ec_council.png",
    credentialId: "ECC7451390862"
  },
  {
    name: "Cybersecurity Analyst",
    provider: "HackUp Technology",
    duration: "Feb 2025 - Oct 2025",
    image: "/cert/hackup_tehno.png",
    credentialId: "HTIP20251328"
  }
];
