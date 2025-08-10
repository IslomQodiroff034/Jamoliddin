import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Shield, TrendingUp, Target, Sparkles } from "lucide-react";
import { motion } from "motion/react";

interface ValuesPageProps {
  currentLanguage: string;
  translations: any;
}

export function ValuesPage({ currentLanguage, translations }: ValuesPageProps) {
  const getValues = () => [
    {
      id: 1,
      title: translations.values.items.honesty.title,
      description: translations.values.items.honesty.description,
      icon: Shield,
      color: "from-emerald-500 to-teal-500",
      bgColor: "from-emerald-50 to-teal-50"
    },
    {
      id: 2,
      title: translations.values.items.growth.title,
      description: translations.values.items.growth.description,
      icon: TrendingUp,
      color: "from-blue-500 to-indigo-500",
      bgColor: "from-blue-50 to-indigo-50"
    },
    {
      id: 3,
      title: translations.values.items.results.title,
      description: translations.values.items.results.description,
      icon: Target,
      color: "from-orange-500 to-red-500", 
      bgColor: "from-orange-50 to-red-50"
    },
    {
      id: 4,
      title: translations.values.items.impact.title,
      description: translations.values.items.impact.description,
      icon: Sparkles,
      color: "from-purple-500 to-pink-500",
      bgColor: "from-purple-50 to-pink-50"
    }
  ];

  const values = getValues();

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
          <Badge variant="secondary" className="mb-4 bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 border-purple-200">
            {translations.values.badge}
          </Badge>
          <motion.h1 
            className="text-4xl lg:text-6xl mb-6 text-purple-600 font-bold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            {translations.values.title}
          </motion.h1>
          <motion.p 
            className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            {translations.values.subtitle}
          </motion.p>
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mt-6 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          />
        </motion.div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto mb-16">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={value.id}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <Card className={`p-6 h-full bg-gradient-to-br ${value.bgColor} border-0 shadow-lg hover:shadow-2xl transition-all duration-500 group relative overflow-hidden`}>
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-4 right-4 w-20 h-20 rounded-full bg-white/30"></div>
                    <div className="absolute bottom-4 left-4 w-12 h-12 rounded-full bg-white/20"></div>
                  </div>
                  
                  <div className="relative space-y-4">
                    {/* Icon */}
                    <motion.div 
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${value.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                      whileHover={{ rotate: 10 }}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </motion.div>

                    {/* Content */}
                    <div className="space-y-3">
                      <h3 className={`text-xl font-medium group-hover:scale-105 transition-transform duration-300 text-gray-800`}>
                        {value.title}
                      </h3>
                      <p className="text-gray-700 leading-relaxed text-base font-medium">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Stats Section */}
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          viewport={{ once: true }}
        >
          {[
            { number: "10+", label: translations.values.stats.projects },
            { number: "4+", label: translations.values.stats.experience },
            { number: "80%", label: translations.values.stats.clients },
            { number: "24/7", label: translations.values.stats.support }
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              initial={{ scale: 0.8 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.8 + index * 0.1, duration: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-4xl lg:text-5xl mb-3 text-purple-600 font-bold">
                {stat.number}
              </div>
              <div className="text-lg text-gray-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}