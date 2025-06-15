// src/app/layout.tsx
import { ReactNode } from "react";
import "./globals.css";

export const metadata = {
  title: "Starship Codex",
  description: "A showcase of Star Wars spacecraft",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-900 text-white font-orbitron">
        {children}
      </body>
    </html>
  );
}