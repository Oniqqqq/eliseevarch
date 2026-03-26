import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader({ isLoading }: { isLoading: boolean }) {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div 
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#111]"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <img src="/logo_2026.svg" alt="Eliseev Logo" className="w-48 md:w-72 invert brightness-0 opacity-80" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
