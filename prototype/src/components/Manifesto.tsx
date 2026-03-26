import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function Manifesto() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 70%", "center center"]
  });

  const text = "С 2009 года создаем архитектуру целостно по авторской методике интегрального проектирования".split(" ");

  return (
    <section ref={containerRef} className="py-24 md:py-32 px-6 md:px-12 max-w-[1800px] mx-auto bg-background flex flex-col items-center justify-center">
      
      <div className="text-center w-full max-w-6xl mx-auto overflow-hidden">
        <h2 className="text-4xl md:text-5xl lg:text-7xl font-light tracking-tight leading-[1.1] text-foreground flex flex-wrap justify-center uppercase">
          {text.map((word, i) => {
            const start = i / text.length;
            const end = start + (1 / text.length);
            const opacity = useTransform(scrollYProgress, [start, end], [0.1, 1]);
            const blurValue = useTransform(scrollYProgress, [start, end], [10, 0]);
            const filter = useTransform(blurValue, (v) => `blur(${v}px)`);
            const y = useTransform(scrollYProgress, [start, end], [20, 0]);

            return (
              <span key={i} className="mr-[0.3em] inline-block">
                <motion.span style={{ opacity, filter, y }} className="inline-block">{word}</motion.span>
              </span>
            );
          })}
        </h2>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 1, delay: 0.2 }}
        className="mt-20 md:mt-28 text-center max-w-3xl"
      >
        <p className="text-[10px] md:text-xs tracking-[0.2em] font-medium uppercase mb-6 text-foreground">
          По авторской методике интегральной архитектуры
        </p>
        <h3 className="text-2xl md:text-4xl lg:text-5xl font-medium tracking-tight uppercase leading-[1.1] mb-6 text-foreground">
          Мы создаем проекты<br className="hidden md:block"/> целостно, а не линейно
        </h3>
        <p className="text-xs md:text-sm font-light uppercase tracking-wider text-foreground/60 max-w-xl mx-auto">
          Объединяя архитектуру, интерьер и ландшафт в единую<br className="hidden md:block"/> гармоничную композицию
        </p>
      </motion.div>

    </section>
  );
}
