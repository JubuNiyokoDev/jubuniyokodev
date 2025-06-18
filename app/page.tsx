"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  ChevronDown,
  Globe,
  Mail,
  Phone,
  ExternalLink,
  Github,
  Linkedin,
  Facebook,
  MessageCircle,
  Download,
  CheckCircle,
  Menu,
  X,
  MapPin,
  Briefcase,
  GraduationCap,
  Code,
  Smartphone,
  Brain,
  Shield,
  Instagram,
  Twitter,
  Youtube,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const themes = {
  corporate: {
    name: "Corporate",
    icon: "💼",
    primary: "from-slate-900 via-gray-900 to-slate-800",
    secondary: "from-blue-600 to-blue-700",
    accent: "blue",
    card: "bg-white/5 border-gray-600/30",
    text: "text-blue-400",
    gradient: "bg-gradient-to-r from-blue-600 to-blue-700",
  },
  elegant: {
    name: "Élégant",
    icon: "✨",
    primary: "from-gray-900 via-black to-gray-900",
    secondary: "from-amber-600 to-yellow-600",
    accent: "amber",
    card: "bg-white/5 border-amber-500/30",
    text: "text-amber-400",
    gradient: "bg-gradient-to-r from-amber-600 to-yellow-600",
  },
  modern: {
    name: "Moderne",
    icon: "🔥",
    primary: "from-gray-900 via-slate-800 to-gray-900",
    secondary: "from-cyan-600 to-teal-600",
    accent: "cyan",
    card: "bg-white/5 border-cyan-500/30",
    text: "text-cyan-400",
    gradient: "bg-gradient-to-r from-cyan-600 to-teal-600",
  },
  professional: {
    name: "Pro",
    icon: "🎯",
    primary: "from-slate-900 via-blue-900 to-slate-900",
    secondary: "from-indigo-600 to-purple-600",
    accent: "indigo",
    card: "bg-white/5 border-indigo-500/30",
    text: "text-indigo-400",
    gradient: "bg-gradient-to-r from-indigo-600 to-purple-600",
  },
}

const translations = {
  fr: {
    nav: {
      home: "Accueil",
      about: "À propos",
      services: "Services",
      projects: "Projets",
      contact: "Contact",
    },
    hero: {
      title: "Niyondiko Joffre",
      subtitle: "Ingénieur en TIC • Lead Developer",
      description:
        "Bac+4 en Technologies de l'Information et de la Communication, option Génie Logiciel. Lead Developer chez Kit Digital Innovation, spécialisé en développement Web, Mobile, IA et Blockchain.",
      cta: "Voir mes projets",
    },
    promo: {
      title: "🚀 Développement professionnel sur mesure",
      text: "Vous cherchez une application web ou mobile professionnelle, un chatbot intelligent, un système IA ou une plateforme blockchain ? Je réalise vos projets personnalisés dans un délai de 2 semaines minimum. Contactez-moi directement par WhatsApp ou par email.",
      button: "Me contacter maintenant",
    },
    about: {
      title: "À propos",
      education: "Formation",
      educationText: "Bac+4 en Technologies de l'Information et de la Communication, option Génie Logiciel",
      position: "Poste actuel",
      positionText: "Lead Developer chez Kit Digital Innovation (Kabondo, Bujumbura)",
      skills: "Compétences",
      skillsList: [
        "Développement d'applications mobiles (Flutter)",
        "Développement web (Django, React)",
        "Intelligence Artificielle",
        "Chatbots",
        "Blockchain",
        "Déploiement cloud",
        "API sécurisées",
        "UI/UX design",
      ],
    },
    services: {
      title: "Mes Services",
      list: [
        {
          icon: <Smartphone className="w-8 h-8" />,
          title: "Développement Mobile",
          description: "Applications mobiles Flutter pour Android et iOS",
          features: ["Interface moderne", "Performance optimisée", "Publication sur stores"],
        },
        {
          icon: <Code className="w-8 h-8" />,
          title: "Développement Web",
          description: "Sites web et applications avec Django et React",
          features: ["Design responsive", "Sécurité renforcée", "SEO optimisé"],
        },
        {
          icon: <Brain className="w-8 h-8" />,
          title: "Intelligence Artificielle",
          description: "Solutions IA et chatbots intelligents",
          features: ["Chatbots personnalisés", "Traitement du langage", "Intégration API"],
        },
        {
          icon: <Shield className="w-8 h-8" />,
          title: "Blockchain",
          description: "Développement blockchain et smart contracts",
          features: ["Smart contracts", "DApps", "Sécurité blockchain"],
        },
      ],
    },
    projects: {
      title: "Projets",
      list: [
        {
          id: "comlab",
          title: "ComLab",
          description:
            "Plateforme complète de mise en relation entre talents, experts, mentors, startups, entreprises et ONG.",
          features: [
            "Matching intelligent",
            "Formations certifiées",
            "Multilingue (FR/EN/KR)",
            "Accompagnement projets",
          ],
          url: "https://comlab-burundi.com",
          status: "En ligne",
        },
        {
          id: "techsafe",
          title: "TechSafe",
          description: "Application mobile avec IA pour lutter contre la violence basée sur le genre (VBG).",
          features: ["Signalement intelligent", "Alerte d'urgence", "Interface en Kirundi", "Information juridique"],
          status: "En développement",
        },
        {
          id: "iwanje",
          title: "Iwanje",
          description: "Plateforme e-commerce avec blockchain intégrée pour services, produits, immobilier.",
          features: ["Géolocalisation", "Filtres IA intelligents", "Paiements sécurisés", "Multi-vendeurs"],
          status: "En développement",
        },
        {
          id: "ndabazi",
          title: "Ndabazi App",
          description: "Application mobile avec fonctionnalités avancées",
          features: ["Interface intuitive", "Fonctionnalités personnalisées", "Performance optimisée"],
          downloadUrl: "#",
          status: "Disponible",
        },
      ],
    },
    contact: {
      title: "Contact",
      subtitle: "Discutons de votre projet",
      form: {
        name: "Nom",
        email: "Email",
        subject: "Sujet",
        message: "Message",
        send: "Envoyer",
      },
      info: {
        email: "Email",
        phone: "Téléphone / WhatsApp",
        location: "Localisation",
      },
      whatsapp: "WhatsApp",
      social: "Réseaux sociaux",
    },
  },
  en: {
    nav: {
      home: "Home",
      about: "About",
      services: "Services",
      projects: "Projects",
      contact: "Contact",
    },
    hero: {
      title: "Niyondiko Joffre",
      subtitle: "ICT Engineer • Lead Developer",
      description:
        "Bachelor+4 in Information and Communication Technologies, Software Engineering option. Lead Developer at Kit Digital Innovation, specialized in Web, Mobile, AI and Blockchain development.",
      cta: "View my projects",
    },
    promo: {
      title: "🚀 Professional custom development",
      text: "Looking for a professional web or mobile application, intelligent chatbot, AI system or blockchain platform? I deliver your custom projects within a minimum of 2 weeks. Contact me directly via WhatsApp or email.",
      button: "Contact me now",
    },
    about: {
      title: "About",
      education: "Education",
      educationText: "Bachelor+4 in Information and Communication Technologies, Software Engineering option",
      position: "Current Position",
      positionText: "Lead Developer at Kit Digital Innovation (Kabondo, Bujumbura)",
      skills: "Skills",
      skillsList: [
        "Mobile app development (Flutter)",
        "Web development (Django, React)",
        "Artificial Intelligence",
        "Chatbots",
        "Blockchain",
        "Cloud deployment",
        "Secure APIs",
        "UI/UX design",
      ],
    },
    services: {
      title: "My Services",
      list: [
        {
          icon: <Smartphone className="w-8 h-8" />,
          title: "Mobile Development",
          description: "Flutter mobile applications for Android and iOS",
          features: ["Modern interface", "Optimized performance", "Store publication"],
        },
        {
          icon: <Code className="w-8 h-8" />,
          title: "Web Development",
          description: "Websites and applications with Django and React",
          features: ["Responsive design", "Enhanced security", "SEO optimized"],
        },
        {
          icon: <Brain className="w-8 h-8" />,
          title: "Artificial Intelligence",
          description: "AI solutions and intelligent chatbots",
          features: ["Custom chatbots", "Language processing", "API integration"],
        },
        {
          icon: <Shield className="w-8 h-8" />,
          title: "Blockchain",
          description: "Blockchain development and smart contracts",
          features: ["Smart contracts", "DApps", "Blockchain security"],
        },
      ],
    },
    projects: {
      title: "Projects",
      list: [
        {
          id: "comlab",
          title: "ComLab",
          description: "Complete platform connecting talents, experts, mentors, startups, companies and NGOs.",
          features: ["Smart matching", "Certified training", "Multilingual (FR/EN/KR)", "Project support"],
          url: "https://comlab-burundi.com",
          status: "Online",
        },
        {
          id: "techsafe",
          title: "TechSafe",
          description: "Mobile application with AI to fight against gender-based violence (GBV).",
          features: ["Smart reporting", "Emergency alert", "Kirundi interface", "Legal information"],
          status: "In development",
        },
        {
          id: "iwanje",
          title: "Iwanje",
          description: "E-commerce platform with integrated blockchain for services, products, real estate.",
          features: ["Geolocation", "Smart AI filters", "Secure payments", "Multi-vendor"],
          status: "In development",
        },
        {
          id: "ndabazi",
          title: "Ndabazi App",
          description: "Mobile application with advanced features",
          features: ["Intuitive interface", "Custom features", "Optimized performance"],
          downloadUrl: "#",
          status: "Available",
        },
      ],
    },
    contact: {
      title: "Contact",
      subtitle: "Let's discuss your project",
      form: {
        name: "Name",
        email: "Email",
        subject: "Subject",
        message: "Message",
        send: "Send",
      },
      info: {
        email: "Email",
        phone: "Phone / WhatsApp",
        location: "Location",
      },
      whatsapp: "WhatsApp",
      social: "Social Networks",
    },
  },
}

export default function Portfolio() {
  const [language, setLanguage] = useState<"fr" | "en">("fr")
  const [currentTheme, setCurrentTheme] = useState<keyof typeof themes>("corporate")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const t = translations[language]
  const theme = themes[currentTheme]

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
    setMobileMenuOpen(false)
  }

  return (
    <div className={`min-h-screen bg-gradient-to-br ${theme.primary} text-white`}>
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold text-white"
          >
            Jubu Niyoko Dev
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex space-x-8">
            {Object.entries(t.nav).map(([key, value]) => (
              <button
                key={key}
                onClick={() => scrollToSection(key === "home" ? "hero" : key)}
                className="text-gray-300 hover:text-white transition-colors font-medium"
              >
                {value}
              </button>
            ))}
          </div>

          {/* Theme & Language */}
          <div className="flex items-center space-x-3">
            {/* Theme Selector */}
            <div className="hidden md:flex space-x-1 bg-black/40 rounded-lg p-1">
              {Object.entries(themes).map(([key, themeData]) => (
                <button
                  key={key}
                  onClick={() => setCurrentTheme(key as keyof typeof themes)}
                  className={`p-2 rounded text-sm transition-all ${currentTheme === key ? "bg-white/20 text-white" : "text-gray-400 hover:text-white"
                    }`}
                  title={themeData.name}
                >
                  {themeData.icon}
                </button>
              ))}
            </div>

            <Button
              variant="outline"
              size="sm"
              onClick={() => setLanguage(language === "fr" ? "en" : "fr")}
              className="bg-white/10 border-white/30 text-white hover:bg-white/20"
            >
              <Globe className="w-4 h-4 mr-2" />
              {language.toUpperCase()}
            </Button>

            {/* Mobile Menu */}
            <Button
              variant="outline"
              size="sm"
              className="lg:hidden bg-white/10 border-white/30 text-white hover:bg-white/20"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-black/90 backdrop-blur-md"
            >
              <div className="container mx-auto px-4 py-4 space-y-3">
                {Object.entries(t.nav).map(([key, value]) => (
                  <button
                    key={key}
                    onClick={() => scrollToSection(key === "home" ? "hero" : key)}
                    className="block w-full text-left py-2 text-gray-300 hover:text-white transition-colors"
                  >
                    {value}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Subtle Background Animation */}
        <div className="absolute inset-0">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-white/5 blur-xl"
              style={{
                width: `${200 + i * 50}px`,
                height: `${200 + i * 50}px`,
                left: `${20 + i * 15}%`,
                top: `${10 + i * 15}%`,
              }}
              animate={{
                x: [0, 50, -50, 0],
                y: [0, -30, 30, 0],
                scale: [1, 1.1, 0.9, 1],
              }}
              transition={{
                duration: 20 + i * 5,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div
              className={`mx-auto mb-4 rounded-full shadow-2xl inline-block border-4 border-white`}
              style={{
                display: 'inline-block',
                overflow: 'hidden',
                background: 'linear-gradient(135deg, #1fa2ff, #12d8fa, #a6ffcb)',
                width: '160px',
                height: '160px',
              }}
            >
              <img
                src="./joffre.jpg"
                alt="Portrait de Joffre"
                style={{
                  borderRadius: '50%',
                  display: 'block',
                  width: '100%',
                  height: '100%',
                  objectFit: 'fill',
                }}
              />
            </div>



            <h1 className="text-5xl md:text-7xl font-bold mb-4 text-white">{t.hero.title}</h1>

            <p className={`text-xl md:text-2xl mb-6 ${theme.text} font-medium`}>{t.hero.subtitle}</p>

            <p className="text-lg mb-8 text-gray-300 max-w-3xl mx-auto leading-relaxed">{t.hero.description}</p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => scrollToSection("projects")}
                size="lg"
                className={`${theme.gradient} hover:opacity-90 text-white px-8 py-4 text-lg font-medium`}
              >
                {t.hero.cta}
                <ChevronDown className="ml-2 w-5 h-5" />
              </Button>

              <Button
                onClick={() => window.open("https://wa.me/25768497372", "_blank")}
                variant="outline"
                size="lg"
                className="border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg bg-slate-600"
              >
                <MessageCircle className="mr-2 w-5 h-5" />
                WhatsApp
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Promo Banner */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className={`py-16 ${theme.gradient}`}
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">{t.promo.title}</h2>
          <p className="text-lg mb-8 max-w-4xl mx-auto text-white/90 leading-relaxed">{t.promo.text}</p>
          <Button
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 bg-slate-600"
            onClick={() => window.open("https://wa.me/25768497372", "_blank")}
          >
            <MessageCircle className="mr-2 w-5 h-5" />
            {t.promo.button}
          </Button>
        </div>
      </motion.section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">{t.about.title}</h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}>
              <Card className={`${theme.card} backdrop-blur-md h-full`}>
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <GraduationCap className={`w-8 h-8 ${theme.text} mr-3`} />
                    <h3 className={`text-2xl font-bold ${theme.text}`}>{t.about.education}</h3>
                  </div>
                  <p className="text-gray-300 mb-8 leading-relaxed">{t.about.educationText}</p>

                  <div className="flex items-center mb-6">
                    <Briefcase className={`w-8 h-8 ${theme.text} mr-3`} />
                    <h3 className={`text-2xl font-bold ${theme.text}`}>{t.about.position}</h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed">{t.about.positionText}</p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }}>
              <Card className={`${theme.card} backdrop-blur-md h-full`}>
                <CardContent className="p-8">
                  <h3 className={`text-2xl font-bold mb-8 ${theme.text}`}>{t.about.skills}</h3>
                  <ul className="space-y-3">
                    {t.about.skillsList.map((skill, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center text-gray-300"
                      >
                        <div className={`w-2 h-2 ${theme.gradient} rounded-full mr-3`} />
                        {skill}
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-black/20">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">{t.services.title}</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.services.list.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className={`${theme.card} backdrop-blur-md hover:scale-105 transition-all duration-300 h-full`}>
                  <CardContent className="p-6 text-center">
                    <div className={`${theme.text} mb-4 flex justify-center`}>{service.icon}</div>
                    <h3 className={`text-xl font-bold mb-3 ${theme.text}`}>{service.title}</h3>
                    <p className="text-gray-300 mb-4 text-sm leading-relaxed">{service.description}</p>

                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-xs text-gray-400">
                          <CheckCircle className={`w-3 h-3 ${theme.text} mr-2 flex-shrink-0`} />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">{t.projects.title}</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {t.projects.list.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className={`${theme.card} backdrop-blur-md hover:scale-105 transition-all duration-300 h-full`}>
                  <CardContent className="p-8">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className={`text-2xl font-bold ${theme.text}`}>{project.title}</h3>
                      <Badge
                        variant="outline"
                        className={`${project.status === "En ligne" || project.status === "Online"
                          ? "border-green-400 text-green-400"
                          : project.status === "Disponible" || project.status === "Available"
                            ? "border-blue-400 text-blue-400"
                            : "border-yellow-400 text-yellow-400"
                          }`}
                      >
                        {project.status}
                      </Badge>
                    </div>

                    <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>

                    <div className="mb-6">
                      <h4 className={`font-semibold mb-3 ${theme.text}`}>Fonctionnalités:</h4>
                      <ul className="space-y-2">
                        {project.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-400">
                            <div className={`w-1.5 h-1.5 ${theme.gradient} rounded-full mr-2 flex-shrink-0`} />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex gap-3">
                      {project.url && (
                        <Button
                          className={`flex-1 ${theme.gradient} hover:opacity-90 text-white`}
                          onClick={() => window.open(project.url, "_blank")}
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Visiter
                        </Button>
                      )}
                      {project.downloadUrl && (
                        <Button
                          variant="outline"
                          className="flex-1 border-white/30 text-white hover:bg-white/10 bg-green-800"
                          onClick={() => window.open(project.downloadUrl, "_blank")}
                        >
                          <Download className="w-4 h-4 mr-2" />
                          APK
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-black/20">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">{t.contact.title}</h2>
            <p className={`text-xl ${theme.text}`}>{t.contact.subtitle}</p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}>
                <Card className={`${theme.card} backdrop-blur-md`}>
                  <CardContent className="p-8">
                    <form className="space-y-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">{t.contact.form.name}</label>
                        <input
                          type="text"
                          className="w-full px-4 py-3 bg-black/20 border border-white/20 rounded-lg focus:outline-none focus:border-blue-400 text-white"
                          placeholder="Votre nom"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">{t.contact.form.email}</label>
                        <input
                          type="email"
                          className="w-full px-4 py-3 bg-black/20 border border-white/20 rounded-lg focus:outline-none focus:border-blue-400 text-white"
                          placeholder="votre@email.com"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">{t.contact.form.subject}</label>
                        <input
                          type="text"
                          className="w-full px-4 py-3 bg-black/20 border border-white/20 rounded-lg focus:outline-none focus:border-blue-400 text-white"
                          placeholder="Sujet"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">{t.contact.form.message}</label>
                        <textarea
                          rows={5}
                          className="w-full px-4 py-3 bg-black/20 border border-white/20 rounded-lg focus:outline-none focus:border-blue-400 text-white resize-none"
                          placeholder="Votre message..."
                        />
                      </div>

                      <Button
                        type="submit"
                        className={`w-full ${theme.gradient} hover:opacity-90 py-4 text-lg text-white`}
                      >
                        <Mail className="mr-2 w-5 h-5" />
                        {t.contact.form.send}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Contact Info */}
              <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }}>
                <Card className={`${theme.card} backdrop-blur-md h-full`}>
                  <CardContent className="p-8">
                    <h3 className={`text-2xl font-bold mb-8 ${theme.text}`}>Informations</h3>

                    <div className="space-y-6">
                      <div className="flex items-center">
                        <Mail className={`w-6 h-6 mr-4 ${theme.text}`} />
                        <div>
                          <p className="text-sm text-gray-400">{t.contact.info.email}</p>
                          <a
                            href="mailto:niyondikojoffreasjubu@gmail.com"
                            className="text-white hover:text-blue-300 font-medium"
                          >
                            niyondikojoffreasjubu@gmail.com
                          </a>
                        </div>
                      </div>

                      <div className="flex items-center">
                        <Phone className={`w-6 h-6 mr-4 ${theme.text}`} />
                        <div>
                          <p className="text-sm text-gray-400">{t.contact.info.phone}</p>
                          <a href="tel:+25768497372" className="text-white hover:text-green-300 font-medium">
                            +257 68497372
                          </a>
                        </div>
                      </div>

                      <div className="flex items-center">
                        <MapPin className={`w-6 h-6 mr-4 ${theme.text}`} />
                        <div>
                          <p className="text-sm text-gray-400">{t.contact.info.location}</p>
                          <p className="text-white font-medium">Gitega</p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-8">
                      <Button
                        className="w-full bg-green-600 hover:bg-green-700 py-4 text-lg text-white"
                        onClick={() => window.open("https://wa.me/25768497372", "_blank")}
                      >
                        <MessageCircle className="w-5 h-5 mr-2" />
                        {t.contact.whatsapp}
                      </Button>
                    </div>

                    <div className="mt-8">
                      <h4 className={`font-semibold mb-4 ${theme.text}`}>{t.contact.social}</h4>
                      <div className="flex space-x-3">
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-white/30 text-white hover:bg-white/10 bg-gray-800"
                          onClick={() => window.open("#", "_blank")}
                        >
                          <Linkedin className="w-4 h-4" />
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-white/30 text-white hover:bg-white/10 bg-gray-800"
                          onClick={() => window.open("#", "_blank")}
                        >
                          <Github className="w-4 h-4" />
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-white/30 text-white hover:bg-white/10 bg-gray-800"
                          onClick={() => window.open("#", "_blank")}
                        >
                          <Facebook className="w-4 h-4" />
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-white/30 text-white hover:bg-white/10 bg-gray-800"
                          onClick={() => window.open("#", "_blank")}
                        >
                          <Instagram className="w-4 h-4" />
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-white/30 text-white hover:bg-white/10 bg-gray-800"
                          onClick={() => window.open("#", "_blank")}
                        >
                          <Twitter className="w-4 h-4" />
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-white/30 text-white hover:bg-white/10 bg-gray-800"
                          onClick={() => window.open("#", "_blank")}
                        >
                          <Youtube className="w-4 h-4" />
                        </Button>

                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-black/60 border-t border-white/10">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">© 2025 Niyondiko Joffre. Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  )
}
