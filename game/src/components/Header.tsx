import { Button } from "@/components/ui/button";
import carnageLogo from "@/assets/carnage-logo.png";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <img 
              src={carnageLogo} 
              alt="Carnage Logo" 
              className="h-16 w-auto object-contain"
              style={{ filter: 'drop-shadow(var(--shadow-glow))' }}
            />
            <div className="hidden md:flex space-x-6">
              <a href="#" className="text-foreground hover:text-accent transition-colors font-medium">
                БИБЛИОТЕКА
              </a>
              <a href="#" className="text-foreground hover:text-accent transition-colors font-medium">
                ФОРУМ
              </a>
              <a href="#" className="text-foreground hover:text-accent transition-colors font-medium">
                АНОНС
              </a>
              <a href="#" className="text-foreground hover:text-accent transition-colors font-medium">
                РОЛИК
              </a>
            </div>
          </div>
          <Button variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
            РЕГИСТРАЦИЯ
          </Button>
        </nav>
      </div>
    </header>
  );
};
