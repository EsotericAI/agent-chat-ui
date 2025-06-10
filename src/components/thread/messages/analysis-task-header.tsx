import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { MarkdownText } from "../markdown-text";

interface AnalysisTaskHeaderProps {
  current: number;
  total: number;
  content?: string;
  className?: string;
}

export function AnalysisTaskHeader({ current, total, content, className }: AnalysisTaskHeaderProps) {
  const progressPercentage = (current / total) * 100;
  
  return (
    <div className={cn(
      "relative overflow-hidden",
      "bg-gradient-to-br from-slate-50 via-gray-50 to-gray-100 min-w-[700px]",
      "dark:from-slate-900/50 dark:via-gray-950/30 dark:to-gray-900/30",
      "border border-gray-200 dark:border-gray-800/50",
      "rounded-xl p-5 shadow-lg shadow-gray-100/50 dark:shadow-none",
      // 添加微妙的光泽效果
      "before:absolute before:inset-0 before:bg-gradient-to-br",
      "before:from-white/20 before:via-transparent before:to-transparent",
      "before:rounded-xl before:pointer-events-none",
      className
    )}>
      {/* 分析任务头部 */}
      <motion.div 
        className="mb-3 flex items-center gap-3"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        {/* 任务序号 */}
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-200 dark:bg-gray-700 text-sm font-medium text-gray-700 dark:text-gray-300">
            {current}
          </div>
          <div className="text-sm text-gray-500 dark:text-gray-400">
            of {total}
          </div>
        </div>
        
        {/* 进度条 */}
        <div className="flex-1 bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
          <motion.div
            className="h-full bg-gray-400 dark:bg-gray-500 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${progressPercentage}%` }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          />
        </div>
        
      </motion.div>

      {/* Markdown内容 */}
      {content && (
        <div className="relative z-10">
          <MarkdownText>{content}</MarkdownText>
        </div>
      )}
    </div>
  );
} 