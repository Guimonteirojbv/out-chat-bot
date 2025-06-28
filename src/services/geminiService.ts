import { GoogleGenAI } from "@google/genai";
import { IGenerativeAiService } from "./generateAiService";

const API_KEY = process.env.GEMINI_API_KEY;

if (!API_KEY) {
  throw new Error("GEMINI_API_KEY is not defined in environment variables.");
}

export const GeminiService = {
  ...IGenerativeAiService,
  generateContent: async (prompt: string) => {
    try {
      const genAI = new GoogleGenAI({ apiKey: API_KEY });
      const result = await genAI.models.generateContent({
        model: "gemini-2.0-flash",
        contents: prompt,
      });

      return result.text;
    } catch (error) {
      console.error("Erro ao gerar conteúdo com gemini: ", error);
      throw new Error("Não foi possível gerar conteúdo. Tente novamente");
    }
  },
};
