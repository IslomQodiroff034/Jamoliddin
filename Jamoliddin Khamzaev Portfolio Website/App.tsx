import { useState } from 'react';
import { Button } from "./components/ui/button";
import { Badge } from "./components/ui/badge";
import { Mail, Phone, Send, ExternalLink, Sparkles, Zap, Target, Menu, X, Home, Briefcase, Heart, User, Instagram, Globe } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { ImageWithFallback } from './components/figma/ImageWithFallback';
import professionalPhoto from 'figma:asset/e402aabf88ede72a7df6a95b9952153815e9e74d.png';

import { HomePage } from './components/HomePage';
import { ProjectsPage } from './components/ProjectsPage';
import { ValuesPage } from './components/ValuesPage';
import { translations } from './components/translations';

type Page = 'home' | 'projects' | 'values';
type Language = 'uz' | 'ru' | 'en';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [currentLanguage, setCurrentLanguage] = useState<Language>('uz');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const t = translations[currentLanguage];

  const navigation = [
    { name: t.nav.home, key: 'home' as Page, icon: Home },
    { name: t.nav.projects, key: 'projects' as Page, icon: Briefcase },
    { name: t.nav.values, key: 'values' as Page, icon: Heart },
  ];

  const languages = [
    { code: 'uz' as Language, name: 'O\'zbek', flag: '🇺🇿' },
    { code: 'ru' as Language, name: 'Русский', flag: '🇷🇺' },
    { code: 'en' as Language, name: 'English', flag: 'EN' },
  ];

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage setCurrentPage={setCurrentPage} currentLanguage={currentLanguage} translations={t} />;
      case 'projects':
        return <ProjectsPage currentLanguage={currentLanguage} translations={t} />;
      case 'values':
        return <ValuesPage currentLanguage={currentLanguage} translations={t} />;
      default:
        return <HomePage setCurrentPage={setCurrentPage} currentLanguage={currentLanguage} translations={t} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-blue-50 to-cyan-50">
      {/* Floating Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-pink-400/20 to-purple-500/20 rounded-full blur-xl"
          animate={{
            x: [0, 30, 0],
            y: [0, -30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-r from-blue-400/20 to-cyan-500/20 rounded-full blur-xl"
          animate={{
            x: [0, -20, 0],
            y: [0, 20, 0],
            scale: [1, 0.9, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
        <motion.div
          className="absolute bottom-40 left-1/3 w-20 h-20 bg-gradient-to-r from-green-400/20 to-emerald-500/20 rounded-full blur-xl"
          animate={{
            x: [0, 25, 0],
            y: [0, -25, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4
          }}
        />
      </div>

      {/* Navigation Header */}
      <motion.header 
        className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-white/20 shadow-lg"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <motion.div 
              className="flex items-center space-x-3"
              whileHover={{ scale: 1.02 }}
            >
              <div className="w-12 h-12 rounded-full overflow-hidden ring-2 ring-purple-200">
                <img 
                  src={professionalPhoto} 
                  alt="Jamoliddin Khamzaev" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h1 className="text-lg bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  Jamoliddin Khamzaev
                </h1>
                <p className="text-xs text-muted-foreground">{t.home.badge}</p>
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-1">
              {navigation.map((item) => {
                const Icon = item.icon;
                return (
                  <motion.button
                    key={item.key}
                    onClick={() => setCurrentPage(item.key)}
                    className={`px-4 py-2 rounded-lg transition-all duration-300 flex items-center space-x-2 ${
                      currentPage === item.key
                        ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{item.name}</span>
                  </motion.button>
                );
              })}
              
              {/* Language Switcher - Desktop */}
              <div className="ml-3 flex items-center bg-gray-100 rounded-md p-0.5">
                {languages.map((lang) => (
                  <motion.button
                    key={lang.code}
                    onClick={() => setCurrentLanguage(lang.code)}
                    className={`px-2 py-1 rounded transition-all duration-300 ${
                      currentLanguage === lang.code
                        ? 'bg-white shadow-sm scale-110'
                        : 'hover:bg-white/50 hover:scale-105'
                    }`}
                    whileHover={{ scale: currentLanguage === lang.code ? 1.1 : 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    title={lang.name}
                  >
                    <span className={`${lang.code === 'en' ? 'text-sm font-medium' : 'text-lg'}`}>{lang.flag}</span>
                  </motion.button>
                ))}
              </div>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-gray-100"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.nav
                className="md:hidden border-t border-gray-200 py-4"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="space-y-2">
                  {navigation.map((item) => {
                    const Icon = item.icon;
                    return (
                      <button
                        key={item.key}
                        onClick={() => {
                          setCurrentPage(item.key);
                          setMobileMenuOpen(false);
                        }}
                        className={`w-full px-4 py-3 rounded-lg transition-all duration-300 flex items-center space-x-3 ${
                          currentPage === item.key
                            ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white'
                            : 'text-gray-600 hover:bg-gray-100'
                        }`}
                      >
                        <Icon className="w-5 h-5" />
                        <span>{item.name}</span>
                      </button>
                    );
                  })}
                  
                  {/* Mobile Language Switcher */}
                  <div className="px-4 py-2">
                    <div className="flex items-center space-x-2 text-sm text-gray-600 mb-3">
                      <Globe className="w-4 h-4" />
                      <span>Language:</span>
                    </div>
                    <div className="flex items-center justify-center space-x-4">
                      {languages.map((lang) => (
                        <motion.button
                          key={lang.code}
                          onClick={() => {
                            setCurrentLanguage(lang.code);
                            setMobileMenuOpen(false);
                          }}
                          className={`p-3 rounded-lg transition-all duration-300 ${
                            currentLanguage === lang.code
                              ? 'bg-purple-100 border-2 border-purple-300 scale-110'
                              : 'hover:bg-gray-100 hover:scale-105'
                          }`}
                          whileHover={{ scale: currentLanguage === lang.code ? 1.1 : 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          title={lang.name}
                        >
                          <span className={`${lang.code === 'en' ? 'text-lg font-bold' : 'text-2xl'}`}>{lang.flag}</span>
                        </motion.button>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.nav>
            )}
          </AnimatePresence>
        </div>
      </motion.header>

      {/* Page Content */}
      <main className="relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={`${currentPage}-${currentLanguage}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-slate-800 to-slate-900 text-white py-8 relative">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Contact Info */}
            <div className="space-y-4">
              <h3 className="text-lg bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                {t.footer.contact}
              </h3>
              <div className="space-y-2 text-sm">
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4 text-cyan-400" />
                  <span>+998 90-015-55-00</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Send className="w-4 h-4 text-blue-400" />
                  <a href="https://t.me/jamoliddin_k" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                    @Jamoliddin_Khamzaev
                  </a>
                </div>
                <div className="flex items-center space-x-2">
                  <Instagram className="w-4 h-4 text-pink-400" />
                  <a href="https://instagram.com/jamoliddin_khamzaev" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400 transition-colors">
                    @Jamoliddin_Khamzaev
                  </a>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4 text-emerald-400" />
                  <span>jamoliddinhamzayev@email.com</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="text-lg bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                {t.footer.quickLinks}
              </h3>
              <div className="space-y-2 text-sm">
                {navigation.map((item) => (
                  <button
                    key={item.key}
                    onClick={() => setCurrentPage(item.key)}
                    className="block hover:text-cyan-400 transition-colors"
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <motion.p
              className="text-sm text-gray-400"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              &copy; 2025 Jamoliddin Khamzaev. {t.footer.copyright}
            </motion.p>
          </div>
        </div>
      </footer>
    </div>
  );
}