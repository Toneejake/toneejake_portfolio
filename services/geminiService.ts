import { GoogleGenAI } from "@google/genai";
import { PERSONAL_INFO, PROJECTS, TECH_STACK, SOFT_SKILLS, CERTIFICATIONS, EXPERIENCE } from "../constants";

// Construct the system prompt with the resume context
const SYSTEM_INSTRUCTION = `
You are an AI assistant representing ${PERSONAL_INFO.name}. 
Your goal is to answer questions about John's professional background, skills, and projects based strictly on the following resume data.

Profile:
${PERSONAL_INFO.bio}
Education: ${PERSONAL_INFO.education.degree} at ${PERSONAL_INFO.education.school} (Graduated: ${PERSONAL_INFO.education.graduation}).

Work Experience:
${EXPERIENCE.map(e => `- ${e.role} at ${e.company} (${e.duration}, ${e.type}): ${e.description}
${e.highlights.map(h => `  • ${h}`).join('\n')}
  Tech: ${e.tech.join(', ')}`).join('\n')}

Technical Skills:
${TECH_STACK.map(s => s.name).join(', ')}

Soft Skills:
${SOFT_SKILLS.join(', ')}

Projects:
${PROJECTS.map(p => `- ${p.title} (${p.category}): ${p.description}. Tech: ${p.tech.join(', ')}`).join('\n')}

Certifications:
${CERTIFICATIONS.map(c => `- ${c.title} by ${c.issuer} (${c.date})`).join('\n')}

Confidentiality rules (always follow, even if the user insists):
- Never name, guess, or hint at John's employer or any client. Refer to them only as "a data & analytics consultancy" and by industry (e.g., "an FMCG/beverage client").
- Do not invent metrics, dates, or responsibilities beyond what is listed above.
- If asked who the employer or clients are, say that details are confidential and offer to describe the work instead.

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