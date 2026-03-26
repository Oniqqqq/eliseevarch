import { motion } from 'framer-motion';

export default function ContactForm() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-12 max-w-[1800px] mx-auto bg-background flex flex-col items-center">
      <motion.h2 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight uppercase mb-16 text-center text-foreground"
      >
        Оставить заявку
      </motion.h2>

      <motion.form 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2 }}
        className="w-full max-w-4xl"
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <input 
            type="text" 
            placeholder="ИМЯ" 
            className="w-full bg-transparent border border-foreground/30 px-6 py-5 text-xs tracking-widest uppercase focus:outline-none focus:border-foreground transition-colors placeholder:text-foreground/50"
          />
          <div className="md:row-span-2">
            <textarea 
              placeholder="СООБЩЕНИЕ" 
              className="w-full h-full min-h-[140px] bg-transparent border border-foreground/30 px-6 py-5 text-xs tracking-widest uppercase focus:outline-none focus:border-foreground transition-colors placeholder:text-foreground/50 resize-none"
            ></textarea>
          </div>
          <input 
            type="tel" 
            placeholder="НОМЕР ТЕЛЕФОНА" 
            className="w-full bg-transparent border border-foreground/30 px-6 py-5 text-xs tracking-widest uppercase focus:outline-none focus:border-foreground transition-colors placeholder:text-foreground/50"
          />
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between mt-8 border-t border-secondary pt-8 gap-6">
          <p className="text-[10px] md:text-xs tracking-widest uppercase text-foreground/50 text-center md:text-left">
            Нажимая кнопку, вы соглашаетесь с <a href="#" className="underline hover:text-foreground transition-colors">политикой конфиденциальности</a>
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-foreground text-background px-8 py-3.5 rounded-full text-[10px] md:text-xs tracking-widest uppercase hover:bg-foreground/80 transition-colors flex items-center justify-center gap-3 shrink-0"
          >
            Отправить
            <span className="w-5 h-5 bg-background text-foreground rounded-full flex items-center justify-center">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </span>
          </motion.button>
        </div>
      </motion.form>
    </section>
  );
}
