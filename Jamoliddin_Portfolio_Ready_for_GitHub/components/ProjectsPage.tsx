import { Card } from "./ui/card";
import { Badge } from "./ui/badge"; 
import { Button } from "./ui/button";
import { ExternalLink, MessageCircle, Plus } from "lucide-react";
import { motion } from "motion/react";
import khisoLogo from 'figma:asset/d6d8d078aac9f789654742441500ac78e86f19da.png';
import allSolarLogo from 'figma:asset/953ba06ad3c968e209d61e92e6065965a707fc7d.png';
import nafisLogo from 'figma:asset/d1aa99749521f55f251dbfe0b1b7de3a91c55b5e.png';
import osiyoTravelLogo from 'figma:asset/28781a4634293d8a45984bb07634cc4a579ff40d.png';
import akbarAvezovPhoto from 'figma:asset/e1fecee5a6c9406ca8a249f937eb6743a6756341.png';

interface ProjectsPageProps {
  currentLanguage: string;
  translations: any;
}

export function ProjectsPage({ currentLanguage, translations }: ProjectsPageProps) {
  const getProjects = () => [
    {
      id: 1,
      name: "KHISO",
      description: translations.projects.khiso.description,
      logo: khisoLogo,
      color: "from-blue-500 to-indigo-600",
      bgColor: "from-blue-50 to-indigo-50",
      textColor: "text-blue-600",
      buttonColor: "bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white",
      link: "https://www.instagram.com/khiso.maktabi/"
    },
    {
      id: 2,
      name: "All Solar",
      description: translations.projects.allSolar.description,
      logo: allSolarLogo,
      color: "from-green-400 to-emerald-500",
      bgColor: "from-green-50 to-emerald-50",
      textColor: "text-green-600",
      buttonColor: "bg-gradient-to-r from-green-400 to-emerald-500 hover:from-green-500 hover:to-emerald-600 text-white",
      link: "https://www.instagram.com/all_solar/",
      isCircularLogo: true
    },
    {
      id: 3,
      name: "Nafis Inter Lux",
      description: translations.projects.nafis.description,
      logo: nafisLogo,
      color: "from-teal-600 to-green-700",
      bgColor: "from-teal-50 to-green-50",
      textColor: "text-teal-700",
      buttonColor: "bg-gradient-to-r from-teal-600 to-green-700 hover:from-teal-700 hover:to-green-800 text-white",
      link: "https://www.instagram.com/nafisdizayn/"
    },
    {
      id: 4,
      name: "Osiyo Travel",
      description: translations.projects.osiyoTravel.description,
      logo: osiyoTravelLogo,
      color: "from-red-400 to-pink-500",
      bgColor: "from-red-50 to-pink-50",
      textColor: "text-red-600",
      buttonColor: "bg-gradient-to-r from-red-400 to-pink-500 hover:from-red-500 hover:to-pink-600 text-white",
      link: "https://www.instagram.com/osiyotravel/",
      isSquareLogo: true
    },
    {
      id: 5,
      name: "Akbar Avezov",
      description: translations.projects.akbarAvezov.description,
      logo: akbarAvezovPhoto,
      color: "from-blue-600 to-cyan-600",
      bgColor: "from-blue-50 to-cyan-50",
      textColor: "text-blue-700",
      buttonColor: "bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white",
      link: "https://www.instagram.com/akbar_avezov_dengiz/",
      isCircularLogo: true
    }
  ];

  const projects = getProjects();

  return (
    <div className="min-h-screen py-16 lg:py-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="text-4xl lg:text-6xl mb-4 text-purple-600"
            style={{
              background: 'linear-gradient(to right, #9333ea, #2563eb)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              fontWeight: '600'
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            {translations.projects.title}
          </motion.h1>
          <motion.p 
            className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            {translations.projects.subtitle}
          </motion.p>
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mt-6 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          />
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => {
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -5 }}
              >
                <Card className={`p-6 h-full bg-gradient-to-br ${project.bgColor} border-0 shadow-lg hover:shadow-2xl transition-all duration-300 group relative overflow-hidden`}>
                  {/* Background decorative elements */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-4 right-4 w-20 h-20 rounded-full bg-white/30"></div>
                    <div className="absolute bottom-4 left-4 w-12 h-12 rounded-full bg-white/20"></div>
                  </div>

                  <div className="relative space-y-4">
                    {/* Project Logo */}
                    <div className="flex items-center justify-center mb-6">
                      {project.logo ? (
                        <motion.div 
                          className={`w-20 h-20 ${
                            project.isCircularLogo ? 'rounded-full' : 
                            project.isSquareLogo ? 'rounded-xl' : 'rounded-xl'
                          } overflow-hidden bg-white shadow-lg flex items-center justify-center`}
                          whileHover={{ scale: 1.1, rotate: 5 }}
                        >
                          <img 
                            src={project.logo} 
                            alt={project.name}
                            className="w-full h-full object-cover object-center"
                            style={{
                              objectFit: 'cover',
                              objectPosition: 'center'
                            }}
                          />
                        </motion.div>
                      ) : (
                        <motion.div 
                          className={`w-20 h-20 rounded-xl bg-gradient-to-r ${project.color} flex items-center justify-center shadow-lg`}
                          whileHover={{ scale: 1.1, rotate: 5 }}
                        >
                          <span className="text-white text-xl font-bold">
                            {project.name.charAt(0)}
                          </span>
                        </motion.div>
                      )}
                    </div>

                    {/* Project Info */}
                    <div className="space-y-3">
                      <motion.h3 
                        className={`text-3xl text-center ${project.textColor} font-bold`}
                        whileHover={{ scale: 1.05 }}
                      >
                        {project.name}
                      </motion.h3>
                      <p className="text-gray-700 leading-relaxed text-center text-base">
                        {project.description}
                      </p>
                    </div>

                    {/* Action Button */}
                    <motion.div className="pt-4">
                      <Button 
                        className={`w-full ${project.buttonColor} border-0 shadow-lg`}
                        asChild
                        size="lg"
                      >
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          {translations.projects.viewProject}
                        </a>
                      </Button>
                    </motion.div>
                  </div>

                  {/* Hover effects */}
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-white/30 to-white/10 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-gradient-to-r from-white/20 to-white/5 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Card>
              </motion.div>
            );
          })}

          {/* Plus Card - indicating more projects */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: projects.length * 0.1, duration: 0.6 }}
            whileHover={{ y: -5 }}
            className="flex items-center justify-center"
          >
            <Card className="p-6 h-full bg-gradient-to-br from-gray-50 to-slate-50 border-2 border-dashed border-gray-300 hover:border-purple-400 transition-all duration-300 group relative overflow-hidden min-h-[300px]">
              <div className="flex flex-col items-center justify-center h-full space-y-4">
                <motion.div
                  className="w-20 h-20 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center shadow-lg"
                  whileHover={{ scale: 1.1, rotate: 180 }}
                  transition={{ duration: 0.3 }}
                >
                  <Plus className="w-10 h-10 text-white" />
                </motion.div>
                <div className="text-center">
                  <h3 
                    className="text-2xl mb-2 text-purple-600 font-bold"
                  >
                    {translations.projects.moreProjects}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {translations.projects.inProgress}
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Card className="p-8 bg-gradient-to-br from-purple-50 to-blue-50 border-0 shadow-xl max-w-2xl mx-auto">
            <div className="space-y-4">
              <motion.h3 
                className="text-2xl text-purple-600 font-bold"
              >
                {translations.projects.cta.title}
              </motion.h3>
              <p className="text-gray-700">
                {translations.projects.cta.description}
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white border-0 shadow-lg"
                  asChild
                >
                  <a href="https://t.me/jamoliddin_k" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="mr-2 h-4 w-4" />
                    {translations.projects.cta.button}
                  </a>
                </Button>
              </motion.div>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}