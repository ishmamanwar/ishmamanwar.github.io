import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

export default function LoadingScreen({
  onLoadingComplete,
}: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const checkDark = () =>
      setIsDarkMode(document.documentElement.classList.contains("dark"));
    checkDark();

    const observer = new MutationObserver(checkDark);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setTimeout(() => onLoadingComplete(), 400);
          return 100;
        }
        const remaining = 100 - prev;
        const step = Math.max(1, Math.min(remaining * 0.12, 8));
        return Math.min(prev + step, 100);
      });
    }, 120);
    return () => clearInterval(progressInterval);
  }, [onLoadingComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white dark:bg-black"
      style={{ pointerEvents: "none" }}
    >
      <motion.img
        src={isDarkMode ? "/assets/logo.png" : "/assets/logo-black.png"}
        alt="Logo"
        className="w-40 h-40 md:w-56 md:h-56 lg:w-64 lg:h-64 select-none"
        initial={{ scale: 0.96, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        draggable={false}
      />

      <div className="mt-6 w-64 md:w-80 h-2 rounded-full bg-neutral-200 dark:bg-neutral-800 overflow-hidden">
        <motion.div
          className="h-full bg-neutral-900 dark:bg-neutral-100"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.2, ease: "easeOut" }}
        />
      </div>

      <div className="mt-2 text-xs text-neutral-500 dark:text-neutral-400">
        {Math.round(progress)}%
      </div>
    </motion.div>
  );
}
