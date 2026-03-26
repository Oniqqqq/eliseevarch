import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function ServiceExpertise() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const img1Y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const img2Y = useTransform(scrollYProgress, [0, 1], ["5%", "-15%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
  
  const words = ["Архитектура", "Интерьер", "Арт", "Строительство", "Инжиниринг", "Сервис"];

  const mistOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={containerRef} className="py-24 md:py-32 overflow-hidden relative flex flex-col items-center bg-background min-h-screen justify-center">

      <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-[0.03] font-bold select-none text-[25vw] md:text-[20vw] tracking-wider leading-none whitespace-nowrap z-0 overflow-hidden">
        <motion.div style={{ x: textY }} className="uppercase">E l i s e e v</motion.div>
      </div>

      <div className="max-w-[1800px] mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center z-10">
        
        <div className="lg:col-span-3 h-[30vh] md:h-[40vh] lg:h-[60vh] overflow-hidden rounded-sm relative mt-12 lg:mt-0 order-2 lg:order-1 opacity-50 lg:opacity-100">
          <motion.div style={{ y: img1Y }} className="w-full h-[120%] -mt-[10%] origin-top">
            <img src="/architecture/moskovskoe_more_19-kopiya.jpg" className="w-full h-full object-cover" alt="Architecture Example" />
          </motion.div>
          <motion.div 
            style={{ opacity: mistOpacity }} 
            className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-transparent pointer-events-none"
          />
          <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-background to-transparent pointer-events-none" />
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background to-transparent pointer-events-none" />
        </div>

        <div className="lg:col-span-6 flex flex-col items-center justify-center text-center space-y-2 md:space-y-4 order-1 lg:order-2">
          {words.map((word, i) => (
            <motion.div 
              key={word}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: i === 2 ? 1 : 0.2, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 1, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
              className={`text-4xl md:text-6xl lg:text-[5.5rem] font-medium uppercase tracking-tight leading-[1.05] 
                ${i === 2 ? 'text-foreground' : 'text-foreground hover:opacity-100 transition-opacity duration-500 cursor-pointer'}`}
            >
              {word}
            </motion.div>
          ))}
        </div>

        <div className="lg:col-span-3 h-[30vh] md:h-[40vh] lg:h-[50vh] overflow-hidden rounded-sm mt-8 lg:mt-20 relative order-3 opacity-50 lg:opacity-100">
          <motion.div style={{ y: img2Y }} className="w-full h-[120%] -mt-[10%] origin-top">
            <img src="/design/NEMCHINOVO_DESIGN_LIVING_ROOM_001.jpg" className="w-full h-full object-cover" alt="Interior Details" />
          </motion.div>
          <motion.div 
            style={{ opacity: mistOpacity }} 
            className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent pointer-events-none"
          />
          <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-background to-transparent pointer-events-none" />
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background to-transparent pointer-events-none" />
        </div>
      </div>
    </section>
  );
}
