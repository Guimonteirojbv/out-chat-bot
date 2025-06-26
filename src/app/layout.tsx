import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our ChatBot",
  description: "Um íncrivel bot",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  );
}
