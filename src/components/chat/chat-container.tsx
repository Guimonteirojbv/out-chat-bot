"use client";
import React from "react";
import { Message } from "./message";

export function Chat() {
  //   const ChatEndRef = React.useRef<HTMLDivElement>(null);

  //   function ScrollToBottom() {
  //     ChatEndRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  //     console.log("executou");
  //   }
  return (
    <section className=" bg-gray-200 flex-1 overflow-auto py-3 relative">
      <div className="container ">
        <Message type="request" content="Olá" />
        <Message type="response" content="Olá tudo bem?" />
        <Message type="response" content="Olá tudo bem?" />
        <Message type="response" content="Olá tudo bem?" />
        <Message type="response" content="Olá tudo bem?" />
        <Message type="response" content="Olá tudo bem?" />
        <Message type="response" content="Olá tudo bem?" />
        <Message type="response" content="Olá tudo bem?" />
        <Message type="response" content="Olá tudo bem?" />
        <Message type="response" content="Olá tudo bem?" />
        <Message type="response" content="Olá tudo bem?" />
        <Message type="response" content="Olá tudo bem?" />
        <Message type="response" content="Olá tudo bem?" />
        <Message type="response" content="Olá tudo bem?" />
        <Message type="response" content="Olá tudo bem?" />
        <Message type="response" content="Olá tudo bem?" />
        <Message type="response" content="Olá tudo bem?" />
        <Message type="response" content="Olá tudo bem?" />
        <Message type="response" content="Olá tudo bem?" />
        <Message type="response" content="Olá tudo bem?" />
        <Message type="response" content="Olá tudo bem?" />
        <Message type="response" content="Olá tudo bem?" />
        <Message type="response" content="Olá tudo bem?" />
        <Message type="response" content="Olá tudo bem?" />
        <Message type="response" content="Olá tudo bem?" />
        <Message type="response" content="Olá tudo bem?" />
        <Message type="response" content="Olá tudo bem?" />
      </div>
    </section>
  );
}
