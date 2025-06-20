import Link from "next/link";
import { Spacecraft } from "../types/spacecraft";
import Image from "next/image";
import { motion } from "framer-motion";

interface SpacecraftCardProps {
  spacecraft: Spacecraft;
}

export default function SpacecraftCard({ spacecraft }: SpacecraftCardProps) {
  return (
    <Link href={`/spacecraft/${spacecraft.Slug}`}>
      <motion.div
        className="bg-gray-800 rounded-lg border-gradient shadow-lg overflow-hidden"
        whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(255, 215, 0, 0.3)" }}
        transition={{ duration: 0.3 }}
      >
        <Image
          src={spacecraft["Image URL"]}
          alt={spacecraft.Name}
          width={300}
          height={200}
          className="w-full h-48 object-cover rounded-t-lg"
          onError={(e) => {
            e.currentTarget.src = "/images/placeholder.jpg";
          }}
        />
        <div className="p-4">
          <h2 className="text-xl font-bold text-yellow-400 font-orbitron">{spacecraft.Name}</h2>
          <p className="text-gray-300">{spacecraft["First Appearance"]}</p>
        </div>
      </motion.div>
    </Link>
  );
}