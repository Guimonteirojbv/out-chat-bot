"use server";

import { ErrorHandler } from "@/errors/error-handler";
import { GeminiService } from "@/services/geminiService";

export async function generateContentAction(prompt: string) {
  try {
    if (!prompt || typeof prompt !== "string" || prompt.trim() === "") {
      throw new Error(
        "Prompt inválido. Por favor, forneça um texto para gerar."
      );
    }

    const generatedText = await GeminiService.generateContent(prompt);
    return generatedText;
  } catch (error) {
    console.error("Error in Server Action");

    if (error instanceof ErrorHandler) {
      return error.message;
    } else {
      return "Ocorreu um erro desconhecido";
    }
  }
}
