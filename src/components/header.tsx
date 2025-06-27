import { BotMessageSquareIcon, Trash2 } from "lucide-react";
import { Button } from "./ui/button";

export function Header() {
  return (
    <header className=" py-3 px-3 shadow-md sticky w-full ">
      <div className="container flex justify-between items-center">
        <div className="flex  items-center gap-2 ">
          <div className="w-10 h-10 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center">
            <BotMessageSquareIcon />
          </div>

          <h1 className="text-xl font-bold text-gray-900">OurChatBot</h1>
        </div>

        <Button
          className="flex items-center cursor-pointer hover:bg-amber-50"
          aria-label="limpar conversa"
        >
          <Trash2 />
          <span className="hidden sm:inline">Limpar conversa</span>
        </Button>
      </div>
    </header>
  );
}
