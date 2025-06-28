"use client";

import React from "react";

export interface ChatMessage {
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
}

export interface ChatContextType {
  messages: ChatMessage[];
  loading: boolean;
  error: string | null;
  addMessage: (text: string, sender?: "user" | "bot") => void;
  addBotResponse: (text: string) => void;
  setLoading: (isLoading: boolean) => void;
  setError: (err: string | null) => void;
  clearChat: () => void;
}

export const ChatContext = React.createContext<ChatContextType | undefined>(
  undefined
);

export function ChatProvider({ children }: { children: React.ReactNode }) {
  const [messages, setMessages] = React.useState<ChatMessage[]>([]);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [error, setError] = React.useState<string | null>(null);

  const addMessage = (text: string, sender: "user" | "bot" = "user") => {
    setMessages((prevMessages) => [
      ...prevMessages,
      { text, sender, timestamp: new Date() },
    ]);
  };

  const addBotResponse = (text: string) => {
    setMessages((prevMessages) => [
      ...prevMessages,
      { text, sender: "bot", timestamp: new Date() },
    ]);
  };

  const clearChat = () => {
    setMessages([]);
  };
  // O objeto de valor fornecido pelo contexto deve corresponder exatamente a `ChatContextType`.
  const contextValue: ChatContextType = {
    messages,
    loading,
    error,
    addMessage,
    addBotResponse,
    setLoading,
    setError,
    clearChat,
  };

  return (
    <ChatContext.Provider value={contextValue}>{children}</ChatContext.Provider>
  );
}

export function useChat() {
  const context = React.useContext(ChatContext);

  if (context === undefined) {
    throw new Error("useChat must be used within a ChatProvider");
  }
  return context;
}
