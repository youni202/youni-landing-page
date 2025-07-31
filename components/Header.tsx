import { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, UserCog } from 'lucide-react';

interface HeaderProps {
  onContactClick: () => void;
  onAdminClick: () => void;
}

export default function Header({ onContactClick, onAdminClick }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { name: '홈', href: '#home' },
    { name: '강의', href: '#lectures' },
    { name: '고객사', href: '#clients' },
    { name: '인사이트', href: '#blog' },
    { name: '뉴스레터', href: '#newsletter' },
  ];

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            className="text-2xl font-bold gradient-text"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Youni
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
              >
                {item.name}
              </motion.a>
            ))}
            
            <motion.button
              onClick={onContactClick}
              className="bg-primary text-primary-foreground px-6 py-2 rounded-lg font-medium"
              style={{
                transition: 'none',
                animation: 'none',
                transform: 'none'
              }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 }}
            >
              문의하기
            </motion.button>

            <motion.button
              onClick={onAdminClick}
              className="p-2 text-muted-foreground hover:text-foreground"
              style={{
                transition: 'none',
                animation: 'none',
                transform: 'none'
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7 }}
              transition={{ delay: 1 }}
            >
              <UserCog className="w-5 h-5" />
            </motion.button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 text-foreground"
            style={{
              transition: 'none',
              animation: 'none',
              transform: 'none'
            }}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.nav
            className="md:hidden mt-4 py-4 border-t border-border"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
          >
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-foreground hover:text-primary transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              
              <button
                onClick={() => {
                  onContactClick();
                  setIsMenuOpen(false);
                }}
                className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium w-full"
                style={{
                  transition: 'none',
                  animation: 'none',
                  transform: 'none'
                }}
              >
                문의하기
              </button>

              <button
                onClick={() => {
                  onAdminClick();
                  setIsMenuOpen(false);
                }}
                className="flex items-center space-x-2 text-muted-foreground hover:text-foreground py-2"
                style={{
                  transition: 'none',
                  animation: 'none',
                  transform: 'none'
                }}
              >
                <UserCog className="w-5 h-5" />
                <span>관리자</span>
              </button>
            </div>
          </motion.nav>
        )}
      </div>
    </motion.header>
  );
}