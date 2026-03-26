import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function Intro() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "center center"]
  });

  // Mist reveal effect: an overlay that fades out as we scroll into the section
  const mistOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const yOffset1 = useTransform(scrollYProgress, [0, 1], [100, 0]);
  const yOffset2 = useTransform(scrollYProgress, [0, 1], [150, 0]);

  return (
    <section ref={containerRef} className="relative py-24 md:py-32 px-6 md:px-12 max-w-[1800px] mx-auto bg-background min-h-screen flex items-center justify-center overflow-hidden">
      
      {/* Background Images with Mist Reveal */}
      <div className="absolute inset-0 pointer-events-none z-0 flex justify-between items-center px-0 md:px-20 opacity-40 md:opacity-100">
        
        {/* Left Image */}
        <motion.div style={{ y: yOffset1 }} className="relative w-1/2 md:w-1/4 h-[40vh] md:h-[70vh]">
          <img 
            src="/design/LUPINE_livingroom_001.jpg" 
            alt="Interior" 
            className="w-full h-full object-cover" 
          />
          <motion.div 
            style={{ opacity: mistOpacity }} 
            className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-transparent"
          />
          <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-background to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent" />
        </motion.div>
        
        {/* Right Image */}
        <motion.div style={{ y: yOffset2 }} className="relative w-1/2 md:w-1/4 h-[30vh] md:h-[50vh] mt-32">
          <img 
            src="/design/MOSKOVSKOE_MORE_DESIGN_LIVING_ROOM_001.jpg" 
            alt="Interior Detail" 
            className="w-full h-full object-cover" 
          />
          <motion.div 
            style={{ opacity: mistOpacity }} 
            className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-transparent"
          />
          <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-background to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent" />
        </motion.div>

      </div>

      <div className="relative z-10 flex flex-col items-center text-center max-w-5xl mx-auto mix-blend-difference text-white">
        <motion.h3 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-[10px] md:text-xs tracking-[0.2em] font-medium uppercase mb-6 md:mb-8"
        >
          Полный комплекс услуг
        </motion.h3>
        
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight uppercase leading-[1.05] mb-8 md:mb-12"
        >
          Архитектурное бюро<br className="hidden md:block"/> полного цикла
        </motion.h2>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="text-sm md:text-base font-light max-w-2xl leading-relaxed mb-10 md:mb-12 opacity-80"
        >
          <p className="mb-2 uppercase text-xs tracking-wider">Берем на себя весь процесс —</p>
          <p className="opacity-70">от концепции и проектирования до реализации и заселения,<br className="hidden md:block"/> оставаясь рядом и после завершения строительства.</p>
        </motion.div>

        <motion.button
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          className="bg-white text-black px-10 py-4 rounded-full text-[10px] tracking-widest uppercase hover:bg-gray-200 transition-colors pointer-events-auto"
        >
          Услуги
        </motion.button>
      </div>
    </section>
  );
}
