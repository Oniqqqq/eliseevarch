import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

export default function ReconstructionNotice() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;

    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Find closest anchor tag
      const link = target.closest('a');
      
      // Also check if they clicked a button that might be a placeholder
      // For this project, mostly checking a tags with href="#"
      const isPlaceholderLink = link && link.getAttribute('href') === '#';
      
      if (isPlaceholderLink) {
        e.preventDefault(); // Prevent jump to top
        
        setIsVisible(true);
        
        // Clear previous timeout to avoid multiple overlapping hiding events
        clearTimeout(timeoutId);
        
        // Keep visible for 2.5s before triggering exit animation
        timeoutId = setTimeout(() => {
          setIsVisible(false);
        }, 2500);
      }
    };

    // Use capturing phase to intercept before other handlers might stop propagation
    document.addEventListener('click', handleClick, true);
    
    return () => {
      document.removeEventListener('click', handleClick, true);
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95, filter: 'blur(4px)' }}
          animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
          exit={{ opacity: 0, y: 15, scale: 0.98, filter: 'blur(2px)' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-10 left-1/2 -translate-x-1/2 z-[100] px-5 py-3 rounded-2xl flex items-center justify-center pointer-events-none"
          style={{
            background: 'rgba(15, 15, 15, 0.75)',
            backdropFilter: 'blur(24px)',
            WebkitBackdropFilter: 'blur(24px)',
            border: '1px solid rgba(255, 255, 255, 0.06)',
            boxShadow: '0 20px 40px -10px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.08)'
          }}
        >
          <div className="flex items-center gap-3.5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white/30 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-white/60"></span>
            </span>
            <span className="text-[#f2f1ef] text-[10px] sm:text-[11px] tracking-[0.08em] font-medium uppercase whitespace-nowrap opacity-90">
              Раздел на реконструкции
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
