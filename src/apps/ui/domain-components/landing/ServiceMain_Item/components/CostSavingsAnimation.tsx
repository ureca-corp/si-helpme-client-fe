"use client";

import { motion } from "framer-motion";

export const CostSavingsAnimation = () => {
  return (
    <div className="flex w-52 flex-col items-center gap-1">
      {/* 진행률 바 배경 */}
      <div className="h-2 w-full rounded-full bg-gray-400">
        {/* 진행률 바 채움 */}
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-red-500 via-yellow-500 to-green-500"
          initial={{ width: "100%" }}
          animate={{
            width: ["100%", "50%", "100%"],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            times: [0, 0.5, 1],
          }}
        />
      </div>
    </div>
  );
};
