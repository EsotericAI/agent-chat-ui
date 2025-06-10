import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnalysisTaskHeaderProps {
  current: number;
  total: number;
  className?: string;
}

export function AnalysisTaskHeader({ current, total, className }: AnalysisTaskHeaderProps) {
  const progressPercentage = (current / total) * 100;
  
  return (
    <motion.div 
      className={cn("mb-3 flex items-center gap-3", className)}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* 任务序号 - 带脉冲动画 */}
      <motion.div 
        className="flex items-center gap-2"
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3, delay: 0.1 }}
      >
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 text-sm font-bold text-white shadow-lg ring-2 ring-blue-100 dark:ring-blue-900">
          {current}
        </div>
        <div className="text-sm font-medium text-muted-foreground">
          of <span className="font-semibold">{total}</span>
        </div>
      </motion.div>
      
      {/* 进度条 - 带动画 */}
      <div className="flex-1 bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 rounded-full shadow-sm"
          initial={{ width: 0 }}
          animate={{ width: `${progressPercentage}%` }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        />
      </div>
      
      {/* 标签 */}
      <motion.div 
        className="flex items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.4 }}
      >
        <span className="text-xs font-medium text-muted-foreground">
          {Math.round(progressPercentage)}%
        </span>
        <div className="rounded-full bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900/50 dark:to-indigo-900/50 px-3 py-1.5 text-xs font-semibold text-blue-700 dark:text-blue-300 shadow-sm">
          Analysis Task
        </div>
      </motion.div>
    </motion.div>
  );
} 