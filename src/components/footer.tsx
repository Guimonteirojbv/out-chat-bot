"use client";
import { Button } from "./ui/button";

import { Send } from "lucide-react";
import { Textarea } from "./ui/textarea";
import React from "react";
import { useChat } from "@/contexts/ChatContext";
import { generateContentAction } from "@/actions/geminiActions";

export function Footer() {
  const [prompt, setPrompt] = React.useState("");
  const { addMessage, addBotResponse, setLoading, setError, loading } =
    useChat();

  function onKeyDown(event: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (event.key === "Enter") {
      event.preventDefault(); // se quiser evitar pular linha
      handleSubmit(event);
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!prompt.trim()) return;

    addMessage(prompt, "user");
    setLoading(true);
    setError(null);

    try {
      const generatedText = await generateContentAction(prompt);
      setPrompt("");

      addBotResponse(generatedText);
    } catch (error: any) {
      const errorMessage =
        error instanceof Error ? error.message : "Ocorreu um erro inesperado.";
      setError(errorMessage);
      addBotResponse(`Erro: ${errorMessage}`);
    } finally {
      setLoading(false);
    }
  }

  return (
    <footer className="py-10 border-t-1">
      <form className="flex gap-4 container" onSubmit={handleSubmit}>
        <Textarea
          className="resize-none"
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
            setPrompt(e.target.value)
          }
          onKeyDown={onKeyDown}
          placeholder="Digite sua mensagem...(Enter para enviar, Shift+Enter para nova linha)"
        />
        <Button
          variant="default"
          disabled={loading}
          className="bg-blue-500 hover:bg-blue-600 text-white disabled:opacity-50 cursor-pointer"
        >
          <Send />
        </Button>
      </form>
    </footer>
  );
}
