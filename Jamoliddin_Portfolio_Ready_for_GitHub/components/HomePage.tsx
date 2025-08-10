import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Mail, Phone, Send, ExternalLink, Target, Instagram } from "lucide-react";
import { motion } from "motion/react";
import professionalPhoto from 'figma:asset/e402aabf88ede72a7df6a95b9952153815e9e74d.png';

interface HomePageProps {
  setCurrentPage: (page: 'home' | 'projects' | 'values') => void;
  currentLanguage: string;
  translations: any;
}

export function HomePage({ setCurrentPage, currentLanguage, translations }: HomePageProps) {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-screen">
        {/* Background Image */}
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat lg:bg-right-center"
          style={{
            backgroundImage: `url(${professionalPhoto})`,
            backgroundPosition: 'center center'
          }}
        />
        
        {/* Dark Overlay for better text contrast */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/60"></div>
        
        <div className="container mx-auto px-4 py-16 lg:py-24 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
            <motion.div 
              className="space-y-6 text-white"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div 
                className="space-y-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Badge variant="secondary" className="w-fit bg-white/20 text-white border-white/30 backdrop-blur-sm">
                    {translations.home.badge}
                  </Badge>
                </motion.div>
                <motion.h1 
                  className="text-5xl lg:text-7xl tracking-tight text-white drop-shadow-2xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                  style={{ 
                    fontWeight: '600',
                    textShadow: '2px 2px 4px rgba(0,0,0,0.8)'
                  }}
                >
                  {translations.home.name}
                </motion.h1>
                <motion.p 
                  className="text-xl text-gray-100 drop-shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                >
                  {translations.home.experience}
                </motion.p>
              </motion.div>
              
              <motion.p 
                className="text-lg leading-relaxed text-gray-200 drop-shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                {translations.home.description}
              </motion.p>
              
              <motion.div 
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.6 }}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button 
                    size="lg" 
                    className="group bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-500 hover:to-blue-600 text-white border-0 shadow-lg"
                    onClick={() => setCurrentPage('projects')}
                  >
                    <Target className="mr-2 h-4 w-4" />
                    {translations.home.viewProjects}
                    <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button 
                    size="lg" 
                    asChild 
                    className="bg-blue-600 hover:bg-blue-700 text-white border-0 shadow-lg"
                  >
                    <a href="https://t.me/jamoliddin_k" target="_blank" rel="noopener noreferrer">
                      <Send className="mr-2 h-4 w-4" />
                      {translations.home.contactTelegram}
                    </a>
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>
            
            {/* Empty space for better text positioning */}
            <div className="hidden lg:block"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 lg:py-24 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 lg:p-12 bg-gradient-to-br from-white/80 to-blue-50/80 backdrop-blur-sm border-0 shadow-2xl">
                <div className="space-y-8">
                  <motion.div 
                    className="text-center space-y-4"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <h2 className="text-4xl lg:text-5xl text-purple-600 font-bold">
                      {translations.home.aboutMe.title}
                    </h2>
                    <motion.div 
                      className="w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: 80 }}
                      transition={{ delay: 0.5, duration: 0.8 }}
                      viewport={{ once: true }}
                    />
                  </motion.div>
                  
                  <div className="space-y-6 text-lg leading-relaxed">
                    <motion.div
                      className="text-center italic border-l-4 border-purple-500 pl-6 text-purple-700 bg-gradient-to-r from-purple-50 to-blue-50 py-4 rounded-r-lg"
                      initial={{ opacity: 0, x: -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4, duration: 0.6 }}
                      viewport={{ once: true }}
                    >
                      <p className="text-purple-700 font-medium">
                        "{translations.home.aboutMe.quote}"
                      </p>
                    </motion.div>
                    
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6, duration: 0.6 }}
                      viewport={{ once: true }}
                    >
                      {translations.home.aboutMe.education}
                    </motion.p>
                    
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8, duration: 0.6 }}
                      viewport={{ once: true }}
                    >
                      {translations.home.aboutMe.experience}
                    </motion.p>
                  </div>
                  
                  <motion.div 
                    className="bg-gradient-to-r from-emerald-50 via-teal-50 to-cyan-50 rounded-xl p-6 text-center border border-emerald-200/50"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1, duration: 0.6 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <h3 className="text-2xl mb-3 text-emerald-700 font-bold">
                      {translations.home.aboutMe.mission.title}
                    </h3>
                    <p className="text-lg text-emerald-700">
                      {translations.home.aboutMe.mission.description}
                    </p>
                    <motion.div className="mt-4">
                      <Button 
                        variant="outline" 
                        className="border-emerald-300 text-emerald-700 hover:bg-emerald-100"
                        onClick={() => setCurrentPage('values')}
                      >
                        {translations.home.aboutMe.mission.button}
                      </Button>
                    </motion.div>
                  </motion.div>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-slate-900 via-purple-900 to-blue-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 opacity-20">
            <div className="w-full h-full" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
            }}></div>
          </div>
        </div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-2xl mx-auto text-center space-y-8">
            <motion.div 
              className="space-y-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl lg:text-5xl text-white" style={{ fontWeight: '600' }}>{translations.home.contact.title}</h2>
              <motion.div 
                className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: 80 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                viewport={{ once: true }}
              />
            </motion.div>
            
            <div className="grid gap-6">
              {/* Phone */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <Card className="p-6 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 backdrop-blur-md border-white/10 hover:bg-gradient-to-r hover:from-indigo-500/30 hover:to-purple-500/30 transition-all duration-300">
                  <div className="flex items-center justify-center space-x-4">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    >
                      <Phone className="h-6 w-6 text-cyan-400" />
                    </motion.div>
                    <span className="text-xl text-white">+998 90-015-55-00</span>
                  </div>
                </Card>
              </motion.div>
              
              {/* Telegram & Instagram */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <Card className="p-6 bg-gradient-to-r from-blue-500/20 to-pink-500/20 backdrop-blur-md border-white/10 hover:bg-gradient-to-r hover:from-blue-500/30 hover:to-pink-500/30 transition-all duration-300">
                  <div className="space-y-3">
                    <div className="flex items-center justify-center space-x-4">
                      <motion.div
                        animate={{ rotate: [-10, 10, -10] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                      >
                        <Send className="h-6 w-6 text-blue-400" />
                      </motion.div>
                      <a 
                        href="https://t.me/jamoliddin_k" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-xl hover:text-blue-400 transition-colors text-white"
                      >
                        @Jamoliddin_Khamzaev
                      </a>
                    </div>
                    <div className="flex items-center justify-center space-x-4">
                      <motion.div
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      >
                        <Instagram className="h-6 w-6 text-pink-400" />
                      </motion.div>
                      <a 
                        href="https://instagram.com/jamoliddin_khamzaev" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-xl hover:text-pink-400 transition-colors text-white"
                      >
                        @Jamoliddin_Khamzaev
                      </a>
                    </div>
                  </div>
                </Card>
              </motion.div>
              
              {/* Email */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <Card className="p-6 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 backdrop-blur-md border-white/10 hover:bg-gradient-to-r hover:from-emerald-500/30 hover:to-teal-500/30 transition-all duration-300">
                  <div className="flex items-center justify-center space-x-4">
                    <motion.div
                      animate={{ y: [-2, 2, -2] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <Mail className="h-6 w-6 text-emerald-400" />
                    </motion.div>
                    <a 
                      href="mailto:jamoliddinhamzayev@email.com" 
                      className="text-xl hover:text-emerald-400 transition-colors text-white"
                    >
                      jamoliddinhamzayev@email.com
                    </a>
                  </div>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}