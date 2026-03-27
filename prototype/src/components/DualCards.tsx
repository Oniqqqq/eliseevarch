import { motion } from 'framer-motion';

export default function DualCards() {
  return (
    <section className="py-24 px-6 md:px-12 max-w-[1800px] mx-auto bg-background mb-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-[70vh] md:h-[80vh]">
        
        {/* Portfolio Card */}
        <motion.a
          href="#"
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative group overflow-hidden cursor-pointer rounded-sm bg-neutral-900 block"
        >
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-700 z-10" />
          <motion.video 
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            src="/182_Golden-horizon-villa_8.mp4" 
            autoPlay 
            muted 
            loop 
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-x-8 bottom-8 text-white z-20 flex flex-col justify-end transform transition-transform duration-700 group-hover:-translate-y-4">
            <h3 className="text-3xl md:text-5xl font-medium tracking-tight uppercase mb-2">Портфолио</h3>
            <p className="text-xs tracking-widest uppercase opacity-80 transform transition-all duration-700 group-hover:opacity-100 group-hover:tracking-[0.2em]">Наши любимые проекты</p>
          </div>
        </motion.a>

        {/* Philosophy Card */}
        <motion.a
          href="#"
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative group overflow-hidden cursor-pointer rounded-sm bg-neutral-900 block"
        >
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-700 z-10" />
          <motion.video 
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            src="/IMG_2403.mp4" 
            autoPlay 
            muted 
            loop 
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-x-8 bottom-8 text-white z-20 flex flex-col justify-end transform transition-transform duration-700 group-hover:-translate-y-4">
            <h3 className="text-3xl md:text-5xl font-medium tracking-tight uppercase mb-2">Философия</h3>
            <p className="text-xs tracking-widest uppercase opacity-80 transform transition-all duration-700 group-hover:opacity-100 group-hover:tracking-[0.2em]">Больше, чем архитектура</p>
          </div>
        </motion.a>

      </div>

      <div className="flex justify-center items-center gap-6 mt-16">
        <motion.button 
          whileHover={{ scale: 1.1 }}
          className="w-12 h-12 rounded-full border border-foreground flex items-center justify-center hover:bg-foreground hover:text-background transition-colors pointer-events-auto"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
        </motion.button>
        <motion.button 
          whileHover={{ scale: 1.1 }}
          className="w-12 h-12 rounded-full flex items-center justify-center bg-foreground text-background transition-colors pointer-events-auto"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
        </motion.button>
      </div>

    </section>
  );
}
