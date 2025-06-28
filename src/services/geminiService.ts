import { GoogleGenAI } from "@google/genai";
import { IGenerativeAiService } from "./generateAiService";
import { ErrorHandler } from "@/errors/error-handler";

const API_KEY = process.env.GEMINI_API_KEY;

if (!API_KEY) {
  throw new ErrorHandler(
    "GEMINI_API_KEY is not defined in environment variables."
  );
}

export const GeminiService = {
  ...IGenerativeAiService,
  generateContent: async (prompt: string) => {
    try {
      const genAI = new GoogleGenAI({ apiKey: API_KEY });

      if (!genAI)
        throw new ErrorHandler("Não foi possível estabelecer conexão.");

      const result = await genAI.models.generateContent({
        model: "gemini-2.0-flash",
        contents: prompt,
      });

      return result.text;
    } catch (error) {
      if (error instanceof ErrorHandler) {
        return error.message;
      }
    }
  },
};
