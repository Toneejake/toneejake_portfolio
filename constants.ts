import { Project, SocialLink, Domain, TechSkill, SoftSkill, ProjectAlbum, Certificate } from './types';
import { Brain, Database, Code, Layout, BarChart, Terminal, Sparkles } from 'lucide-react';

export const PERSONAL_INFO = {
  name: "John Kervin D. Evangelista",
  title: "AI/ML Engineer & Data Scientist",
  email: "johnkervinevangelista@gmail.com",
  phone: "09999631798",
  location: "Calumpang, Nagcarlan, Laguna",
  bio: "I am a Computer Science student specializing in Intelligent Systems with a strong foundation in building AI agents and Digital Twins. My journey involves bridging the gap between theoretical AI models and practical, scalable applications. I am actively seeking impactful internships where I can leverage my skills in Machine Learning and Data Science to solve real-world problems.",
  education: {
    degree: "Bachelor of Science in Computer Science",
    major: "Intelligent Systems",
    school: "Laguna State Polytechnic University Sta. Cruz",
    graduation: "June 2026"
  }
};

export const DOMAINS: Domain[] = [
  {
    title: "Generative AI",
    description: "Developing advanced RAG pipelines, fine-tuning LLMs, and building creative AI applications.",
    icon: Sparkles
  },
  {
    title: "Machine Learning",
    description: "Building predictive models and intelligent agents using Deep Learning and Reinforcement Learning techniques.",
    icon: Brain
  },
  {
    title: "Data Science",
    description: "Extracting actionable insights from complex datasets through cleaning, visualization, and statistical analysis.",
    icon: BarChart
  },
  {
    title: "Intelligent Systems",
    description: "Designing autonomous systems and Digital Twins that simulate and optimize real-world environments.",
    icon: Terminal
  }
];

export const TECH_STACK: TechSkill[] = [
  { name: "Python", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "JavaScript", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "TypeScript", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "PyTorch", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" },
  { name: "TensorFlow", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
  { name: "Pandas", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" },
  { name: "React", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Next.js", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  { name: "FastAPI", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" },
  { name: "Django", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" },
  { name: "PHP", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
  { name: "Arduino", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg" },
  { name: "Docker", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { name: "PostgreSQL", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { name: "Git", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "GitHub", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
  { name: "NPM", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" },
  { name: "Hugging Face", iconUrl: "https://huggingface.co/front/assets/huggingface_logo.svg" },
];

export const SOFT_SKILLS = [
  "Leadership",
  "Critical Thinking",
  "Problem Solving",
  "Creativity",
  "Communication",
  "Adaptability",
  "Continous Learning",
  "Time Management",
  "Teamwork"
];

export const PROJECTS: Project[] = [
  {
    title: "SafeScape: AI-Driven Fire Safety",
    category: "Thesis Project",
    description: "An undergraduate thesis project for the BFP. An AI perception model generating 2D 'Digital Twins' from floor plans using Deep RL for evacuation policies.",
    tech: ["Next.js", "FastAPI", "Python", "Deep RL"],
    link: "https://github.com/Toneejake/berong-safescape",
    image: "/images/placeholder-project.jpg"
  },
  {
    title: "Trashbayoyong",
    category: "Web & AI",
    description: "Smart waste management platform using Google Gemini 2.5 Flash for waste classification, upcycling suggestions, and gamification.",
    tech: ["React 19", "Tailwind CSS", "Google Gemini API"],
    link: "https://github.com/Toneejake/Trashbayoyong",
    image: "/images/placeholder-project.jpg"
  },
  {
    title: "StudyBuddy",
    category: "Personal Project",
    description: "AI-powered study assistant with SM-2 spaced repetition and NLP chatbot for optimizing student retention.",
    tech: ["Python", "Django", "NLP", "Algorithm Design"],
    link: "https://github.com/Toneejake/studybuddy-prototype",
    image: "/images/placeholder-project.jpg"
  },
  {
    title: "Hospital Management System",
    category: "Web Development",
    description: "Full-stack healthcare admin platform with patient records, scheduling, and OpenFDA API integration for drug recommendations.",
    tech: ["PHP", "MySQL", "Bootstrap 5", "OpenFDA API"],
    link: "https://github.com/Toneejake/hospital-management",
    image: "/images/placeholder-project.jpg"
  },
  {
    title: "Dental Appointment System",
    category: "Web Development",
    description: "Secure clinic management platform with interactive teeth selection, collision detection, and Twilio SMS notifications.",
    tech: ["PHP", "MySQL", "Twilio API", "Security"],
    link: "https://github.com/Toneejake/Dental-appointment",
    image: "/images/placeholder-project.jpg"
  },
  {
    title: "LA Crime Analysis",
    category: "Data Analysis",
    description: "Processed and analyzed LAPD crime dataset to identify behavioral patterns.",
    tech: ["Pandas", "Matplotlib", "Data Cleaning"],
    image: "/images/placeholder-project.jpg"
  },
  {
    title: "Cloud Infrastructure Demo",
    category: "Cloud",
    description: "A demonstration of scalable microservices deployment using Docker and Kubernetes.",
    tech: ["Docker", "Kubernetes", "AWS"],
    image: "/images/placeholder-project.jpg"
  }
];

export const PROJECT_ALBUMS: ProjectAlbum[] = [
  {
    id: 'web-ai',
    title: "Full Stack & AI",
    category: "Web & Intelligent Systems",
    cover: "/images/album-web.jpg",
    description: "Modern web applications powered by Artificial Intelligence.",
    projects: [
      {
        title: "SafeScape: AI-Driven Fire Safety",
        category: "Thesis Project",
        description: "An undergraduate thesis project for the BFP. An AI perception model generating 2D 'Digital Twins' from floor plans using Deep RL for evacuation policies.",
        tech: ["Next.js", "FastAPI", "Python", "Deep RL"],
        link: "https://github.com/Toneejake/berong-safescape",
        image: "/images/placeholder-project.jpg"
      },
      {
        title: "Trashbayoyong",
        category: "Web & AI",
        description: "Smart waste management platform using Google Gemini 2.5 Flash for waste classification, upcycling suggestions, and gamification.",
        tech: ["React 19", "Tailwind CSS", "Google Gemini API"],
        link: "https://github.com/Toneejake/Trashbayoyong",
        image: "/images/placeholder-project.jpg"
      },
      {
        title: "StudyBuddy",
        category: "Personal Project",
        description: "AI-powered study assistant with SM-2 spaced repetition and NLP chatbot for optimizing student retention.",
        tech: ["Python", "Django", "NLP", "Algorithm Design"],
        link: "https://github.com/Toneejake/studybuddy-prototype",
        image: "/images/placeholder-project.jpg"
      }
    ]
  },
  {
    id: 'web-dev',
    title: "Web Solutions",
    category: "Full Stack Development",
    cover: "/images/album-cloud.jpg", // Reusing image for now
    description: "Robust and secure web applications for real-world management problems.",
    projects: [
      {
        title: "Hospital Management System",
        category: "Web Development",
        description: "Full-stack healthcare admin platform with patient records, scheduling, and OpenFDA API integration for drug recommendations.",
        tech: ["PHP", "MySQL", "Bootstrap 5", "OpenFDA API"],
        link: "https://github.com/Toneejake/hospital-management",
        image: "/images/placeholder-project.jpg"
      },
      {
        title: "Dental Appointment System",
        category: "Web Development",
        description: "Secure clinic management platform with interactive teeth selection, collision detection, and Twilio SMS notifications.",
        tech: ["PHP", "MySQL", "Twilio API", "Security"],
        link: "https://github.com/Toneejake/Dental-appointment",
        image: "/images/placeholder-project.jpg"
      }
    ]
  },
  {
    id: 'data-science',
    title: "The Data Chronicles",
    category: "Data Science",
    cover: "/images/album-data.jpg",
    description: "Uncovering hidden patterns and telling stories through data.",
    projects: [
      {
        title: "LA Crime Analysis",
        category: "Data Analysis",
        description: "Processed and analyzed LAPD crime dataset to identify behavioral patterns.",
        tech: ["Pandas", "Matplotlib", "Data Cleaning"],
        image: "/images/placeholder-project.jpg"
      }
    ]
  }
];

export const CERTIFICATIONS: Certificate[] = [
  {
    title: "Designing with Figma: From Concept to Creation",
    issuer: "DICT Bataan",
    date: "October 8, 2024",
    link: "" // PDF Link placeholder
  },
  {
    title: "Natural Language Processing Fundamentals",
    issuer: "Asia Open Ran Academy",
    date: "October 26, 2024",
    link: "" // PDF Link placeholder
  },
  {
    title: "Introduction to RAN, 5G, and Open RAN",
    issuer: "Asia Open Ran Academy",
    date: "November 23, 2024",
    link: ""
  },
  {
    title: "Linux Fundamentals",
    issuer: "Asia Open Ran Academy",
    date: "November 30, 2024",
    link: ""
  },
  {
    title: "Artificial Intelligence/Machine Learning",
    issuer: "Asia Open Ran Academy",
    date: "December 14, 2024",
    link: ""
  },
  {
    title: "Docker For Absolute Beginners",
    issuer: "Udemy",
    date: "October 22, 2025",
    link: "https://www.udemy.com/certificate/UC-7095d7b9-b4a6-4286-9975-7d08923e5768/"
  },
  {
    title: "Artificial General Intelligence (AGI)",
    issuer: "Udemy",
    date: "October 22, 2025",
    link: "https://www.udemy.com/certificate/UC-a831e06b-ce00-4f5c-a58d-65f2340e7978/"
  },
  {
    title: "Introduction to Data Science",
    issuer: "Cisco Networking Academy",
    date: "October 22, 2025",
    link: ""
  },
  {
    title: "Data Analytics Essentials Course",
    issuer: "Cisco Networking Academy",
    date: "October 22, 2025",
    link: ""
  },
  {
    title: "Generative AI Fundamentals",
    issuer: "Databricks Academy",
    date: "October 22, 2025",
    link: "https://credentials.databricks.com/e04ab39c-e5d0-4df0-b310-6d66eb715e97#acc.r4Gb2Jfa"
  },
  {
    title: "Getting Started with Deep Learning",
    issuer: "NVIDIA",
    date: "October 22, 2025",
    link: "https://learn.nvidia.com/certificates?id=Wr6hcHjPQDO597A4IHd5UA"
  },
  {
    title: "AI Agent Fundamentals",
    issuer: "Databricks Academy",
    date: "October 23, 2025",
    link: "https://credentials.databricks.com/"
  },
  {
    title: "Professional Certificate of IBM SPSS Statistics Expert",
    issuer: "Udemy",
    date: "October 29, 2025",
    link: "https://www.udemy.com/certificate/UC-1c381137-5902-42d3-afe3-c0af5d1b65ae/"
  },
  {
    title: "Data Literacy",
    issuer: "Datacamp",
    date: "October 31, 2025",
    link: "https://www.datacamp.com/skill-verification/DL0036718725295"
  },
  {
    title: "Prompt Design in Vertex AI",
    issuer: "Google Skills",
    date: "November 16, 2025",
    link: "https://www.skills.google/public_profiles/8006dd0b-df06-4fd5-934f-9addde453e57/badges/20259214"
  },
  {
    title: "AI Fundamentals",
    issuer: "Datacamp",
    date: "November 17, 2025",
    link: "https://www.datacamp.com/skill-verification/AIF0020149225782"
  },
  {
    title: "Get Started with Google Workspace Tools",
    issuer: "Google Skills",
    date: "November 17, 2025",
    link: "https://www.skills.google/public_profiles/8006dd0b-df06-4fd5-934f-9addde453e57/badges/20273640"
  },
  {
    title: "Data Privacy Awareness",
    issuer: "DICT Region X",
    date: "November 17, 2025",
    link: ""
  },
  {
    title: "Learning the Basics of VIBE Coding",
    issuer: "DICT Region X",
    date: "November 18, 2025",
    link: ""
  },
  {
    title: "Google Skills Arcade Base Camp November 2025",
    issuer: "Google Skills",
    date: "November 18, 2025",
    link: "https://www.skills.google/public_profiles/8006dd0b-df06-4fd5-934f-9addde453e57/badges/20313139"
  },
  {
    title: "Google Skills Arcade Trivia November 2025 Week 1",
    issuer: "Google Skills",
    date: "November 18, 2025",
    link: "https://www.skills.google/public_profiles/8006dd0b-df06-4fd5-934f-9addde453e57/badges/20317740"
  },
  {
    title: "Implement Multimodal Vector Search with BigQuery",
    issuer: "Google Skills",
    date: "November 20, 2025",
    link: "https://www.skills.google/public_profiles/8006dd0b-df06-4fd5-934f-9addde453e57/badges/20384099"
  },
  {
    title: "Prepare Data for ML APIs on Google Cloud",
    issuer: "Google Skills",
    date: "November 23, 2025",
    link: "https://www.skills.google/public_profiles/8006dd0b-df06-4fd5-934f-9addde453e57/badges/20434371"
  },
  {
    title: "Build a Secure Google Cloud Network",
    issuer: "Google Skills",
    date: "November 23, 2025",
    link: "https://www.skills.google/public_profiles/8006dd0b-df06-4fd5-934f-9addde453e57/badges/20434922"
  },
  {
    title: "Streaming Analytics into BigQuery",
    issuer: "Google Skills",
    date: "November 23, 2025",
    link: "https://www.skills.google/public_profiles/8006dd0b-df06-4fd5-934f-9addde453e57/badges/20436029"
  },
  {
    title: "Implement CI/CD Pipelines on Google Cloud",
    issuer: "Google Skills",
    date: "November 23, 2025",
    link: "https://www.skills.google/public_profiles/8006dd0b-df06-4fd5-934f-9addde453e57/badges/20436381"
  },
  {
    title: "Develop Your Google Cloud Network",
    issuer: "Google Skills",
    date: "November 24, 2025",
    link: "https://www.skills.google/public_profiles/8006dd0b-df06-4fd5-934f-9addde453e57/badges/20448427"
  },
  {
    title: "Manage Kubernetes in Google Cloud",
    issuer: "Google Skills",
    date: "November 24, 2025",
    link: "https://www.skills.google/public_profiles/8006dd0b-df06-4fd5-934f-9addde453e57/badges/20452749"
  },
  {
    title: "Automate Data Capture at Scale with Document AI",
    issuer: "Google Skills",
    date: "November 24, 2025",
    link: "https://www.skills.google/public_profiles/8006dd0b-df06-4fd5-934f-9addde453e57/badges/20453474"
  },
  {
    title: "Cloud Run Functions: 3 Ways",
    issuer: "Google Skills",
    date: "November 24, 2025",
    link: "https://www.skills.google/public_profiles/8006dd0b-df06-4fd5-934f-9addde453e57/badges/20453803"
  },
  {
    title: "Associate Data Scientist",
    issuer: "Datacamp",
    date: "November 25, 2025",
    link: "https://www.datacamp.com/certificate/DSA0015750375231"
  },
  {
    title: "Get Started with Sensitive Data Protection",
    issuer: "Google Skills",
    date: "November 26, 2025",
    link: "https://www.skills.google/public_profiles/8006dd0b-df06-4fd5-934f-9addde453e57/badges/20493078"
  },
  {
    title: "Create a Secure Data Lake on Cloud Storage",
    issuer: "Google Skills",
    date: "November 26, 2025",
    link: "https://www.skills.google/public_profiles/8006dd0b-df06-4fd5-934f-9addde453e57/badges/20493641"
  },
  {
    title: "Develop Serverless Apps with Firebase",
    issuer: "Google Skills",
    date: "November 28, 2025",
    link: "https://www.skills.google/public_profiles/8006dd0b-df06-4fd5-934f-9addde453e57/badges/20545308"
  },
  {
    title: "Develop Serverless Applications on Cloud Run",
    issuer: "Google Skills",
    date: "November 28, 2025",
    link: "https://www.skills.google/public_profiles/8006dd0b-df06-4fd5-934f-9addde453e57/badges/20545765"
  },
  {
    title: "Share Data Using Google Data Cloud",
    issuer: "Google Skills",
    date: "November 28, 2025",
    link: "https://www.skills.google/public_profiles/8006dd0b-df06-4fd5-934f-9addde453e57/badges/20546615"
  },
  {
    title: "IBM Z Day 2025 - AI & Data",
    issuer: "IBM",
    date: "December 3, 2025",
    link: "https://www.credly.com/badges/2f666a95-4ec5-4284-a231-f632e1748f2b/public_url"
  },
  {
    title: "IBM Z Day 2025 - IBM Z Skills",
    issuer: "IBM",
    date: "December 3, 2025",
    link: "https://www.credly.com/badges/bba9f726-1eb9-4d10-a9c1-f1696df8103b/public_url"
  },
  {
    title: "IBM Z Day 2025 - Modernization",
    issuer: "IBM",
    date: "December 3, 2025",
    link: "https://www.credly.com/badges/147406d3-c071-4189-b5c4-de514df63266/public_url"
  },
  {
    title: "IBM Z Day 2025 - Security",
    issuer: "IBM",
    date: "December 3, 2025",
    link: "https://www.credly.com/badges/aca1d7e8-e7ad-4ac6-91df-e0326613e5d5/public_url"
  },
  {
    title: "Store, Process, and Manage Data on Google Cloud",
    issuer: "Google Skills",
    date: "December 15, 2025",
    link: "https://www.skills.google/public_profiles/8006dd0b-df06-4fd5-934f-9addde453e57/badges/20903642"
  },
  {
    title: "Gen AI Academy 2.0 (Security Track)",
    issuer: "Google Cloud & Hack 2 Skill",
    date: "December 15, 2025",
    link: "https://certificate.hack2skill.com/user/genai2security/2025H2S10GENAI-SE00221"
  },
  {
    title: "Gen AI Academy 2.0 (Serverless Track)",
    issuer: "Google Cloud & Hack 2 Skill",
    date: "December 15, 2025",
    link: "https://certificate.hack2skill.com/user/genai2serverless/2025H2S10GENAI-SR00170"
  },
  {
    title: "Gen AI Academy 2.0 (Networking Track)",
    issuer: "Google Cloud & Hack 2 Skill",
    date: "December 15, 2025",
    link: "https://certificate.hack2skill.com/user/genai2networking/2025H2S10GENAI-NE00166"
  },
  {
    title: "Gen AI Academy 2.0 (DevOps Track)",
    issuer: "Google Cloud & Hack 2 Skill",
    date: "December 15, 2025",
    link: "https://certificate.hack2skill.com/user/genai2devops/2025H2S10GENAI-DE00323"
  },
  {
    title: "Gen AI Academy 2.0 (AI/ML Track)",
    issuer: "Google Cloud & Hack 2 Skill",
    date: "December 15, 2025",
    link: "https://certificate.hack2skill.com/user/genai2aiml/2025H2S10GENAI-AIML00335"
  },
  {
    title: "Gen AI Academy 2.0 Completion",
    issuer: "Google Cloud & Hack 2 Skill",
    date: "December 23, 2025",
    link: "https://certificate.hack2skill.com/user/genai2completion1/2025H2S10GENAI-C100034"
  },
  {
    title: "Gen AI Academy 2.0 (Data Track)",
    issuer: "Google Cloud & Hack 2 Skill",
    date: "December 26, 2025",
    link: "https://certificate.hack2skill.com/user/genai2data1/2025H2S10GENAI-DA100077"
  }
];

export const SOCIALS: SocialLink[] = [
  { platform: "GitHub", url: "#", iconName: "Github" },
  { platform: "LinkedIn", url: "#", iconName: "Linkedin" },
  { platform: "Email", url: `mailto:${PERSONAL_INFO.email}`, iconName: "Mail" }
];