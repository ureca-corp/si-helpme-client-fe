import { motion } from "framer-motion";
import { Gavel } from "lucide-react";

export const HeroOrbitiongCircles_CenterItem = () => {
  return (
    <div className="relative flex items-center justify-center p-4">
      {/* 배경 원형 */}
      <motion.div
        className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-100 to-purple-200"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      />

      {/* 차트 하이라이트 효과 */}
      <motion.div
        className="absolute inset-0 rounded-full border-2 border-purple-300"
        initial={{ scale: 0.8, opacity: 0.8 }}
        animate={{
          scale: [0.8, 1.2, 0.8],
          opacity: [0.8, 0, 0.8],
        }}
        transition={{
          duration: 2,
          // delay: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="z-10"
        initial={{ scale: 1 }}
        animate={{ scale: [1, 1.2, 1] }}
        transition={{
          duration: 2,
          // delay: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Gavel size={60} className="text-gray-800" />
      </motion.div>
    </div>
  );
};
