import { motion, AnimatePresence } from 'framer-motion';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const menuLinks = ["Портфолио", "Услуги", "Философия", "Бюро", "Контакты"];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-40 bg-background text-foreground flex flex-col pt-24 px-6 md:hidden overflow-hidden"
        >
          <div className="flex flex-col h-full justify-between pb-12">
            <div className="flex flex-col space-y-6 mt-12">
              {menuLinks.map((link, i) => (
                <motion.div
                  key={link}
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -30, opacity: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                >
                  <a 
                    href="#" 
                    onClick={onClose}
                    className="text-4xl font-light tracking-tight uppercase hover:opacity-50 transition-opacity"
                  >
                    {link}
                  </a>
                </motion.div>
              ))}
            </div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col space-y-8"
            >
              <a href="#" className="border border-foreground px-6 py-4 rounded-full text-xs tracking-widest uppercase hover:bg-foreground hover:text-background transition-colors flex items-center justify-center gap-3 w-max">
                <span className="w-1.5 h-1.5 rounded-full bg-current"></span>
                Связаться с нами
              </a>

              <div className="flex space-x-6 text-xs tracking-widest uppercase opacity-50">
                <a href="#">Instagram</a>
                <a href="#">Telegram</a>
                <a href="#">WhatsApp</a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
