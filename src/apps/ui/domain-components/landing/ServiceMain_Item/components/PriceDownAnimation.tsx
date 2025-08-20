"use client";

import { motion } from "framer-motion";
import { ArrowDown, TrendingDown } from "lucide-react";

export const PriceDownAnimation = () => {
  return (
    <div className="relative flex h-16 w-16 items-center justify-center">
      {/* 배경 원형 */}
      <motion.div
        className="absolute inset-0 rounded-full bg-gradient-to-br from-red-100 to-red-200"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      />

      {/* 메인 아이콘 컨테이너 */}
      <div className="relative z-10 flex flex-col items-center">
        {/* 화살표 애니메이션 */}
        <motion.div
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.6,
            delay: 0.2,
            type: "spring",
            stiffness: 200,
            damping: 15,
          }}
        >
          <ArrowDown className="h-6 w-6 text-red-600" />
        </motion.div>

        {/* 트렌딩 다운 아이콘 */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            duration: 0.4,
            delay: 0.4,
            type: "spring",
            stiffness: 300,
          }}
          className="mt-1"
        >
          <TrendingDown className="h-4 w-4 text-red-500" />
        </motion.div>
      </div>

      {/* 펄스 효과 */}
      <motion.div
        className="absolute inset-0 rounded-full border-2 border-red-300"
        initial={{ scale: 0.8, opacity: 0.8 }}
        animate={{
          scale: [0.8, 1.2, 0.8],
          opacity: [0.8, 0, 0.8],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* 추가 펄스 효과 (지연) */}
      <motion.div
        className="absolute inset-0 rounded-full border border-red-200"
        initial={{ scale: 0.9, opacity: 0.6 }}
        animate={{
          scale: [0.9, 1.3, 0.9],
          opacity: [0.6, 0, 0.6],
        }}
        transition={{
          duration: 2,
          delay: 0.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
};
