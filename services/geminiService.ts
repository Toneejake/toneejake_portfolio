import { GoogleGenAI } from "@google/genai";
import { PERSONAL_INFO, PROJECTS, TECH_STACK, SOFT_SKILLS, CERTIFICATIONS } from "../constants";

// Construct the system prompt with the resume context
const SYSTEM_INSTRUCTION = `
You are an AI assistant representing ${PERSONAL_INFO.name}. 
Your goal is to answer questions about John's professional background, skills, and projects based strictly on the following resume data.

Profile:
${PERSONAL_INFO.bio}
Education: ${PERSONAL_INFO.education.degree} at ${PERSONAL_INFO.education.school} (Graduating: ${PERSONAL_INFO.education.graduation}).

Technical Skills:
${TECH_STACK.map(s => s.name).join(', ')}

Soft Skills:
${SOFT_SKILLS.map(s => s.name).join(', ')}

Projects:
${PROJECTS.map(p => `- ${p.title} (${p.category}): ${p.description}. Tech: ${p.tech.join(', ')}`).join('\n')}

Certifications:
${CERTIFICATIONS.map(c => `- ${c.title} by ${c.issuer} (${c.date})`).join('\n')}

Tone: Professional, enthusiastic, and concise.
If asked about contact info, provide: ${PERSONAL_INFO.email}.
If asked a question not related to the resume, politely steer the conversation back to John's qualifications.
`;

let aiClient: GoogleGenAI | null = null;

export const getAiClient = () => {
  if (!aiClient) {
    const apiKey = import.meta.env.VITE_GEMINI_API_KEY || '';
    if (!apiKey) {
      console.error("❌ Missing VITE_GEMINI_API_KEY in .env file. API calls will fail.");
    } else {
      console.log("✅ Gemini API Key found (length: " + apiKey.length + ")");
    }
    aiClient = new GoogleGenAI({ apiKey });
  }
  return aiClient;
};

export const createChatSession = () => {
  const ai = getAiClient();
  // Using gemini-2.0-flash-exp. If 'lite' was intended, check the exact Model ID in AI Studio.
  // We use 'gemini-2.0-flash-exp' as it is the standard experimental release.
  return ai.chats.create({
    model: 'gemini-2.0-flash-lite',
    config: {
      systemInstruction: SYSTEM_INSTRUCTION,
      temperature: 0.7,
      maxOutputTokens: 500,
    }
  });
};