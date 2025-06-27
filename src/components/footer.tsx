import { Button } from "./ui/button";

import { Send } from "lucide-react";
import { Textarea } from "./ui/textarea";

export function Footer() {
  return (
    <footer className="py-10 border-t-1">
      <div className="flex gap-4 container">
        <Textarea
          className="resize-none"
          placeholder="Digite sua mensagem...(Enter para enviar, Shift+Enter para nova linha)"
        />
        <Button
          variant="default"
          className="bg-blue-500 hover:bg-blue-600 text-white disabled:opacity-50 cursor-pointer"
        >
          <Send />
        </Button>
      </div>
    </footer>
  );
}
