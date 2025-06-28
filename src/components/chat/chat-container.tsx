"use client";
import React from "react";
import { Message } from "./message";
import { useChat } from "@/contexts/ChatContext";
import { LoadingChat } from "../loading-chat";

export function Chat() {
  const { messages, loading, error } = useChat();
  //   const ChatEndRef = React.useRef<HTMLDivElement>(null);

  //   function ScrollToBottom() {
  //     ChatEndRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  //     console.log("executou");
  //   }

  return (
    <section className=" bg-gray-200 flex-1 overflow-auto  py-3 relative">
      <div className="container ">
        {messages.map((message, idx) => (
          <Message key={idx} type={message.sender} content={message.text} />
        ))}

        {loading && <LoadingChat />}
      </div>
    </section>
  );
}
