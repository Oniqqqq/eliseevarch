import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const projects = [
  { id: 1, src: '/architecture/Round_House_10.jpg', aspect: 'aspect-[4/3]', colSpan: 'col-span-12 md:col-span-4' },
  { id: 2, src: '/design/LUPINE_livingroom_001.jpg', aspect: 'aspect-square', colSpan: 'col-span-12 md:col-span-4' },
  { id: 3, src: '/construction/green_grove_banya_32.jpg', aspect: 'aspect-[3/4]', colSpan: 'col-span-12 md:col-span-4' },
  
  { id: 4, src: '/architecture/fortops_04.jpg', aspect: 'aspect-[16/9]', colSpan: 'col-span-12 md:col-span-6' },
  { id: 5, src: '/design/MOSKOVSKOE_MORE_DESIGN_LIVING_ROOM_001.jpg', aspect: 'aspect-[4/3]', colSpan: 'col-span-12 md:col-span-6' },
  
  { id: 6, src: '/architecture/golden_horizon_villa_01.jpg', aspect: 'aspect-square', colSpan: 'col-span-12 md:col-span-3' },
  { id: 7, src: '/construction/green_grove_stroy_55.jpg', aspect: 'aspect-[3/4]', colSpan: 'col-span-12 md:col-span-3' },
  { id: 8, src: '/architecture/madison_park_05_PnKjVu0.jpg', aspect: 'aspect-square', colSpan: 'col-span-12 md:col-span-6' },
  
  { id: 9, src: '/construction/monteville_2_stroy_36.jpg', aspect: 'aspect-[16/9]', colSpan: 'col-span-12 md:col-span-7' },
  { id: 10, src: '/zavidovo_stroy_08.jpg', aspect: 'aspect-square', colSpan: 'col-span-12 md:col-span-5' },
];

export default function ProjectMosaic() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  return (
    <section ref={containerRef} className="py-24 md:py-32 px-6 md:px-12 max-w-[1800px] mx-auto bg-background">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-6">
        {projects.map((project, index) => {
          // Enhancing the cinematic reveal:
          // Cards move up at different speeds based on their column.
          const speed = (index % 3 === 0) ? -80 : (index % 3 === 1) ? 30 : -20;
          const y = useTransform(scrollYProgress, [0, 1], [-speed, speed]);
          const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 1]);
          const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 0.7]);
          
          return (
            <motion.div 
              key={project.id}
              style={{ y, scale, opacity }}
              className={`${project.colSpan} overflow-hidden group cursor-pointer`}
            >
              <div className={`${project.aspect} w-full overflow-hidden bg-foreground/5`}>
                <motion.img 
                  whileHover={{ scale: 1.07 }}
                  transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                  src={project.src} 
                  alt={`Project ${project.id}`} 
                  className="w-full h-full object-cover transform-gpu"
                />
              </div>
            </motion.div>
          );
        })}
      </div>

      <div className="flex justify-center mt-32">
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-foreground text-background px-10 py-4 text-[10px] md:text-xs tracking-widest uppercase rounded-full hover:bg-foreground/80 transition-colors pointer-events-auto"
        >
          Смотреть все проекты
        </motion.button>
      </div>
    </section>
  );
}
