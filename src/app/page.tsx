import spacecraftsData from "../data/spacecrafts.json";
import { Spacecraft } from "../types/spacecraft";
import SpacecraftList from "../components/SpacecraftList";
import { motion } from "framer-motion";

// Cast the imported JSON data to the Spacecraft type
const spacecrafts: Spacecraft[] = spacecraftsData.map((item) => ({
  ...item,
  ID: Number(item.ID),
}));

export default function Home() {
  console.log("SpacecraftList:", SpacecraftList); // Debug log
  console.log("motion:", motion); // Debug log
  return (
    <div
      className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white p-4"
      style={{ fontFamily: "Inter, sans-serif" }}
    >
      <motion.h1
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-5xl md:text-6xl font-bold text-center mb-8 font-orbitron text-yellow-400"
      >
        Starship Codex
      </motion.h1>
      <SpacecraftList initialSpacecrafts={spacecrafts} />
    </div>
  );
}