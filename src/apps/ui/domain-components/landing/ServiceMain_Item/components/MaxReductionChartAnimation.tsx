"use client";

import { motion } from "framer-motion";

export const MaxReductionChartAnimation = () => {
  const bars = [
    { height: 20, delay: 0, duration: 2.5 },
    { height: 12, delay: 0.5, duration: 3.0 },
    { height: 8, delay: 1.0, duration: 3.5 },
    { height: 16, delay: 1.5, duration: 2.8 },
  ];

  return (
    <div className="relative flex h-16 w-16 items-center justify-center">
      {/* 배경 원형 */}
      <motion.div
        className="absolute inset-0 rounded-full bg-gradient-to-br from-green-100 to-green-200"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      />

      {/* 차트 컨테이너 */}
      <div className="relative z-10 flex flex-col items-center gap-1">
        {/* 막대 그래프 */}
        <div className="flex h-8 items-end gap-0.5">
          {bars.map((bar, index) => (
            <motion.div
              key={index}
              className="w-2 rounded-t-sm bg-gradient-to-t from-green-400 to-blue-500 shadow-sm"
              initial={{ height: 4 }}
              animate={{
                height: [4, bar.height, 4],
              }}
              transition={{
                duration: bar.duration,
                delay: bar.delay,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
