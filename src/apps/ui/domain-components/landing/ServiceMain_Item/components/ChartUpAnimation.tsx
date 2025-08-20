"use client";

import { motion } from "framer-motion";

export const ChartUpAnimation = () => {
  return (
    <div className="relative flex h-16 w-16 items-center justify-center">
      {/* 배경 원형 */}
      <motion.div
        className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-50 to-blue-100"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      />

      {/* 차트 컨테이너 */}
      <div className="relative z-10 flex h-12 w-12 items-end justify-center">
        {/* 차트 그리드 라인들 */}
        <div className="absolute inset-0 flex flex-col justify-between">
          {[0, 1, 2, 3].map((i) => (
            <motion.div
              key={i}
              className="h-px w-full bg-blue-200/50"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{
                duration: 0.3,
                delay: 0.1 + i * 0.1,
                ease: "easeOut",
              }}
            />
          ))}
        </div>

        {/* 차트 데이터 포인트들 */}
        <div className="relative flex h-full w-full items-end justify-between px-1">
          {/* 데이터 포인트 1 */}
          <motion.div
            className="h-2 w-2 rounded-full bg-blue-400"
            initial={{ scale: 0, y: 10 }}
            animate={{ scale: 1, y: 0 }}
            transition={{
              duration: 0.4,
              delay: 0.3,
              type: "spring",
              stiffness: 300,
            }}
          />

          {/* 데이터 포인트 2 */}
          <motion.div
            className="h-2 w-2 rounded-full bg-blue-500"
            initial={{ scale: 0, y: 10 }}
            animate={{ scale: 1, y: 0 }}
            transition={{
              duration: 0.4,
              delay: 0.4,
              type: "spring",
              stiffness: 300,
            }}
          />

          {/* 데이터 포인트 3 */}
          <motion.div
            className="h-2 w-2 rounded-full bg-blue-600"
            initial={{ scale: 0, y: 10 }}
            animate={{ scale: 1, y: 0 }}
            transition={{
              duration: 0.4,
              delay: 0.5,
              type: "spring",
              stiffness: 300,
            }}
          />

          {/* 데이터 포인트 4 */}
          <motion.div
            className="h-2 w-2 rounded-full bg-blue-700"
            initial={{ scale: 0, y: 10 }}
            animate={{ scale: 1, y: 0 }}
            transition={{
              duration: 0.4,
              delay: 0.6,
              type: "spring",
              stiffness: 300,
            }}
          />
        </div>

        {/* 차트 라인 */}
        <svg
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            d="M8 36 L16 32 L24 28 L32 20 L40 12"
            stroke="url(#chartGradient)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{
              duration: 1.2,
              delay: 0.7,
              ease: "easeInOut",
            }}
          />
          <defs>
            <linearGradient
              id="chartGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop offset="0%" stopColor="#3B82F6" />
              <stop offset="100%" stopColor="#1D4ED8" />
            </linearGradient>
          </defs>
        </svg>

        {/* 상승 화살표 */}
        <motion.div
          className="absolute -top-1 -right-1"
          initial={{ scale: 0, rotate: -45 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{
            duration: 0.5,
            delay: 1.2,
            type: "spring",
            stiffness: 400,
          }}
        >
          <div className="h-3 w-3 rotate-45 transform border-t-2 border-r-2 border-green-500" />
        </motion.div>
      </div>

      {/* 펄스 효과 */}
      <motion.div
        className="absolute inset-0 rounded-full border border-blue-300/50"
        initial={{ scale: 0.8, opacity: 0.6 }}
        animate={{
          scale: [0.8, 1.1, 0.8],
          opacity: [0.6, 0, 0.6],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
};
