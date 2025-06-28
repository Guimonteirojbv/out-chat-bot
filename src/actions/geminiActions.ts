"use server";

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
  } catch (error: unknown) {
    console.error("Error in Server Action");
    throw new Error(
      `Erro ao processar sua requisição: ${
        error.message || "Erro desconhecido."
      }`
    );
  }
}
