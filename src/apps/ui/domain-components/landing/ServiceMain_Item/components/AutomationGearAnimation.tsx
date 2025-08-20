import { motion } from "framer-motion";
import { Clock, Cog } from "lucide-react";

/**
 * 자동화 기술로 업무 효율을 높였습니다(애니메이션)
 */
export const AutomationGearAnimation = () => {
  return (
    <div className="relative flex h-6 w-6 items-center justify-center">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <Cog className="h-5 w-5 text-blue-600" />
      </motion.div>

      <motion.div
        animate={{ rotate: -360 }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <Cog className="h-3 w-3 text-blue-400" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="absolute -top-6 left-1/2 -translate-x-1/2"
      >
        <Clock className="h-3 w-3 text-blue-500" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs font-bold text-blue-600"
      ></motion.div>
    </div>
  );
};
