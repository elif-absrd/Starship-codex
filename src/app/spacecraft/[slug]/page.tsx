"use client";

import spacecraftsData from "../../../data/spacecrafts.json";
import { Spacecraft } from "../../../types/spacecraft";
import { motion } from "framer-motion";
import { notFound } from "next/navigation";
import Image from "next/image";

// Cast the imported JSON data to the Spacecraft type
const spacecrafts: Spacecraft[] = spacecraftsData as Spacecraft[];

// Pre-generate static paths for all spacecraft
export async function generateStaticParams() {
  return spacecrafts.map((ship) => ({
    slug: ship.Slug,
  }));
}

export default function SpacecraftDetail({ params }: { params: { slug: string } }) {
  const spacecraft = spacecrafts.find((ship) => ship.Slug === params.slug);

  if (!spacecraft) {
    notFound();
  }

  console.log(`SpacecraftDetail (${params.slug}):`, spacecraft);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white p-4"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold mb-6 font-orbitron text-yellow-400"
        >
          {spacecraft.Name}
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="bg-gray-800 rounded-lg p-6 shadow-xl"
          >
            <Image
              src={spacecraft["Image URL"]}
              alt={spacecraft.Name}
              width={500}
              height={300}
              className="w-full h-64 object-cover rounded-lg mb-4"
              onError={(e) => {
                e.currentTarget.src = "/images/placeholder.jpg";
              }}
            />
          </motion.div>
          <motion.div
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="bg-gray-800 rounded-lg p-6 shadow-xl space-y-4"
          >
            <p className="text-lg"><strong className="text-yellow-400">Model:</strong> {spacecraft.Model}</p>
            <p className="text-lg"><strong className="text-yellow-400">Class:</strong> {spacecraft.Class}</p>
            <p className="text-lg"><strong className="text-yellow-400">Manufacturer:</strong> {spacecraft.Manufacturer}</p>
            <p className="text-lg"><strong className="text-yellow-400">First Appearance:</strong> {spacecraft["First Appearance"]}</p>
            {spacecraft.Description && (
              <p className="text-lg mt-4">{spacecraft.Description}</p>
            )}
            <button
              onClick={() => window.history.back()}
              className="mt-6 bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-2 px-4 rounded-lg transition duration-200"
            >
              Back to Home
            </button>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}