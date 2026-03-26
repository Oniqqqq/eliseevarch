export default function Footer() {
  return (
    <footer className="w-full bg-background border-t border-foreground/10 py-12 md:py-8 px-6 md:px-12 max-w-[1800px] mx-auto text-[10px] sm:text-xs tracking-widest uppercase text-foreground/50">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-4 flex-wrap">
        
        <div className="order-3 md:order-1 text-center md:text-left">
          © Илья Елисеев, 2009—2026
        </div>

        <div className="order-1 md:order-2 flex space-x-6">
          <a href="#" className="hover:text-foreground transition-colors"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg></a>
          <a href="#" className="hover:text-foreground transition-colors"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/></svg></a>
          <a href="#" className="hover:text-foreground transition-colors"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg></a>
        </div>

        <div className="order-2 md:order-3 text-center md:text-right hidden sm:block">
          Политика конфиденциальности
        </div>
        
        <div className="order-4 md:order-4 text-center md:text-right hover:text-foreground transition-colors cursor-pointer">
          Архитектура сайта
        </div>
        
      </div>
    </footer>
  );
}
