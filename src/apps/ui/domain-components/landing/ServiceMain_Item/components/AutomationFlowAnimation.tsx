"use client";

import { motion } from "framer-motion";
import {
  Bot,
  Check,
  FileText,
} from "lucide-react";

export const AutomationFlowAnimation = () => {
  return (
    <div className="flex items-center justify-center gap-1">
      {/* 문서 아이콘 */}
      <motion.div
        className="flex items-center justify-center rounded-md bg-teal-500 p-3"
        initial={{ scale: 1 }}
        animate={{
          scale: [1, 1.3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          times: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 0.95, 1],
        }}
      >
        <FileText className="w-6 text-white" />
      </motion.div>

      {/* 화살표 */}
      <div className="h-0.5 w-10 bg-green-500" />

      {/* 로봇 아이콘 */}
      <motion.div
        className="flex items-center justify-center rounded-md bg-pink-500 p-3"
        initial={{ scale: 1 }}
        animate={{
          scale: [1, 1, 1, 1, 1, 1.3, 1, 1, 1, 1, 1, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          times: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 0.95, 1],
        }}
      >
        <Bot className="w-6 text-white" />
      </motion.div>

      {/* 화살표 */}
      {/* <div className="h-0.5 w-1.5 bg-green-500" /> */}
      <div className="h-0.5 w-10 bg-green-500" />

      {/* 체크마크 아이콘 */}
      <motion.div
        className="flex items-center justify-center rounded-md bg-teal-500 p-3"
        initial={{ scale: 1 }}
        animate={{
          scale: [1, 1, 1, 1, 1, 1, 1, 1, 1.3, 1, 1, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          times: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 0.95, 1],
        }}
      >
        <Check className="w-6 text-white" />
      </motion.div>
    </div>
  );
};
