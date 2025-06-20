// src/app/layout.tsx
import "./globals.css";
import "../styles/custom.css"; // Add this line
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Starship Codex",
  description: "A catalog of Star Wars spacecraft",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}