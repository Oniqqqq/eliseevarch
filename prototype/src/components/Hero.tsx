import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);

  return (
    <section ref={containerRef} className="relative h-screen w-full overflow-hidden bg-primary">
      <motion.div style={{ y, scale }} className="absolute inset-0 w-full h-full">
        <video 
          src="/IMG_2403.mp4" 
          autoPlay 
          muted 
          loop 
          playsInline
          className="w-full h-full object-cover opacity-80"
        />
        {/* Subtle dark gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-black/30" />
      </motion.div>

      <motion.div style={{ opacity }} className="relative z-10 h-full flex flex-col justify-end pb-20 md:pb-32 px-6 md:px-12 max-w-[1800px] mx-auto text-white">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end text-xs tracking-widest uppercase mb-4 opacity-70">
           <div>01 <span className="ml-4">Архитектура</span></div>
           <div>02 <span className="ml-4">Дизайн</span></div>
           <div>03 <span className="ml-4">Инжиниринг</span></div>
        </div>

        <div className="w-full h-[1px] bg-white/20 mb-12"></div>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 3, ease: [0.16, 1, 0.3, 1] }}
          className="text-lg md:text-2xl lg:text-3xl font-light tracking-[0.05em] uppercase text-center md:text-left mx-auto md:mx-0 max-w-4xl"
        >
          Здесь ваши желания становятся произведением архитектуры
        </motion.h1>

      </motion.div>
    </section>
  );
}
