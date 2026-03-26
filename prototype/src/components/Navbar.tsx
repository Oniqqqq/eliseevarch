import { motion, useScroll, useTransform } from 'framer-motion';
import { useState } from 'react';
import MobileMenu from './MobileMenu';

export default function Navbar() {
  const { scrollY } = useScroll();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const backgroundColor = useTransform(
    scrollY,
    [0, 50, 150],
    ['rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 0.5)', 'rgba(242, 241, 239, 0.95)']
  );
  
  const backdropFilter = useTransform(
    scrollY,
    [0, 50],
    ['blur(0px)', 'blur(12px)']
  );

  const color = useTransform(
    scrollY,
    [0, 50],
    isMobileMenuOpen ? ['#111111', '#111111'] : ['#ffffff', '#111111']
  );

  const buttonBorder = useTransform(
    scrollY,
    [0, 50],
    ['rgba(255,255,255,0.4)', 'rgba(17,17,17,0.2)']
  );

  return (
    <>
      <motion.header 
        style={{ backgroundColor: isMobileMenuOpen ? 'rgba(242, 241, 239, 1)' : backgroundColor, color, backdropFilter }}
        className="fixed top-0 left-0 right-0 z-[60] transition-colors duration-500 ease-out"
      >
        <div className="max-w-[1800px] mx-auto px-6 md:px-12 py-5 flex items-center justify-between text-[11px] md:text-xs tracking-[0.15em] uppercase font-medium">
          
          <div className="hidden md:flex space-x-12 w-1/3">
            <a href="#" className="relative group py-1">
              Портфолио
              <span className="absolute left-0 bottom-0 w-full h-[1px] bg-current scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100"></span>
            </a>
            <a href="#" className="relative group py-1">
              Услуги
              <span className="absolute left-0 bottom-0 w-full h-[1px] bg-current scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100"></span>
            </a>
            <a href="#" className="relative group py-1">
              Философия
              <span className="absolute left-0 bottom-0 w-full h-[1px] bg-current scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100"></span>
            </a>
          </div>
          
          <div className="flex-grow flex justify-start md:justify-center w-2/3 md:w-1/3">
            <img 
              src="/logo_2026.svg" 
              alt="Eliseev Architects" 
              className={`h-4 md:h-5 inline-block object-contain transition-all duration-300 ${isMobileMenuOpen ? 'invert' : 'mix-blend-difference invert filter brightness-0'}`} 
            />
          </div>

          <div className="hidden md:flex space-x-12 items-center justify-end w-1/3">
            <a href="#" className="relative group py-1">
              Бюро
              <span className="absolute left-0 bottom-0 w-full h-[1px] bg-current scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100"></span>
            </a>
            <a href="#" className="relative group py-1">
              Контакты
              <span className="absolute left-0 bottom-0 w-full h-[1px] bg-current scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100"></span>
            </a>
            <motion.a 
              href="#" 
              style={{ borderColor: buttonBorder }}
              className="border px-5 py-2.5 rounded-full hover:bg-foreground hover:text-background transition-all duration-300 flex items-center gap-3"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-current transition-colors"></span>
              Связаться
            </motion.a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex justify-end w-1/3">
             <button 
               onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
               className="flex flex-col gap-1.5 p-2" aria-label="Menu"
             >
               <motion.span 
                 animate={isMobileMenuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                 className="w-6 h-[1px] bg-current block origin-center"
               ></motion.span>
               <motion.span 
                 animate={isMobileMenuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                 className={`h-[1px] bg-current block origin-center transition-all ${isMobileMenuOpen ? 'w-6' : 'w-4 ml-auto'}`}
               ></motion.span>
             </button>
          </div>
        </div>
      </motion.header>

      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </>
  );
}
