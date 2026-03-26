import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function Founder() {
  const textRef = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: textRef,
    offset: ["start 80%", "end 40%"]
  });

  const quote = "Мы работаем с архитектурой как с системой тонких взаимосвязей, где важно удерживать в фокусе каждую деталь. Такой дом хочется рассматривать и каждый день открывать новые грани. В первую очередь, грани своего наслаждения.";
  const words = quote.split(" ");

  return (
    <section className="py-24 md:py-32 px-0 md:px-12 max-w-[1800px] mx-auto bg-background">
      <div className="flex flex-col lg:flex-row min-h-[70vh] items-center">
        
        {/* Left: Founder Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="w-full lg:w-1/2 h-[60vh] lg:h-[80vh] overflow-hidden"
        >
          {/* Using the dedicated ilia.jpg image */}
          <motion.img 
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            src="/ilia.jpg" 
            alt="Ilya Eliseev" 
            className="w-full h-full object-cover object-center"
          />
        </motion.div>

        {/* Right: Typography and Quote */}
        <div className="w-full lg:w-1/2 px-8 md:px-16 lg:px-24 py-16 flex flex-col justify-center">
          <div className="mb-8">
            <h3 className="text-sm md:text-base font-medium tracking-wider uppercase text-foreground mb-1">
              Илья Елисеев
            </h3>
            <p className="text-[10px] md:text-xs tracking-widest uppercase text-foreground/50">
              Основатель и главный архитектор бюро
            </p>
          </div>

          <p 
            ref={textRef}
            className="text-lg md:text-2xl lg:text-3xl font-light leading-[1.3] text-foreground mb-12 uppercase tracking-wide flex flex-wrap"
          >
            {words.map((word, i) => {
              const start = i / words.length;
              const end = start + (1 / words.length);
              const opacity = useTransform(scrollYProgress, [start, end], [0.15, 1]);
              return (
                <span key={i} className="mr-[0.3em] inline-block">
                  <motion.span style={{ opacity, transition: 'opacity 0.1s' }}>{word}</motion.span>
                </span>
              );
            })}
          </p>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="self-start bg-foreground text-background px-8 py-3.5 rounded-full text-[10px] md:text-xs tracking-widest uppercase hover:bg-foreground/80 transition-colors pointer-events-auto"
          >
            Философия
          </motion.button>
        </div>

      </div>
    </section>
  );
}
