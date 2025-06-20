"use client";

import { useState } from "react";
import { Spacecraft } from "../types/spacecraft";
import { motion } from "framer-motion";

interface SpacecraftListProps {
  initialSpacecrafts: Spacecraft[];
}

export default function SpacecraftList({ initialSpacecrafts }: SpacecraftListProps) {
  const [spacecrafts] = useState<Spacecraft[]>(initialSpacecrafts);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterAppearance, setFilterAppearance] = useState("");

  const filteredSpacecrafts = spacecrafts.filter(
    (ship) =>
      ship.Name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (filterAppearance === "" || ship["First Appearance"] === filterAppearance)
  );

  const appearances = [...new Set(spacecrafts.map((ship) => ship["First Appearance"]))];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto"
    >
      <div className="mb-6 space-y-4">
        <input
          type="text"
          placeholder="Search by name..."
          className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 transition duration-200"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select
          className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 transition duration-200"
          value={filterAppearance}
          onChange={(e) => setFilterAppearance(e.target.value)}
        >
          <option value="">All Appearances</option>
          {appearances.map((appearance) => (
            <option key={appearance} value={appearance} className="bg-gray-800">
              {appearance}
            </option>
          ))}
        </select>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredSpacecrafts.map((ship) => (
          <motion.div
            key={ship.ID}
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <div>{ship.Name}</div> {/* Replaced SpacecraftCard with a div */}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
} 