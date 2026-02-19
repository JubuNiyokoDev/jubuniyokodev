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
  CalendarDays,
  Award,
  Users,
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
      services: "Expertises",
      career: "Parcours",
      projects: "Projets",
      contact: "Contact",
    },
    themeNames: {
      corporate: "Corporate",
      elegant: "Élégant",
      modern: "Moderne",
      professional: "Pro",
    },
    hero: {
      title: "Joffre NIYONDIKO",
      subtitle: "Software Engineer • Backend • Mobile • IA",
      description:
        "Software Engineer spécialisé en Backend Systems, Mobile Development et applications IA. Co-Founder & Lead Developer avec des applications publiées sur Google Play et des systèmes sécurisés en production.",
      portraitAlt: "Portrait de Joffre Niyondiko",
      cta: "Voir mes projets",
    },
    promo: {
      title: "🚀 Portfolio professionnel & solutions sur mesure",
      text: "Développement web/mobile, architecture backend sécurisée, intégration IA et blockchain. Approche orientée performance, sécurité et expérience utilisateur.",
      button: "Me contacter maintenant",
    },
    about: {
      title: "À propos",
      summaryTitle: "Résumé Professionnel",
      summaryText:
        "Ingénieur logiciel spécialisé en systèmes backend, développement mobile et applications pilotées par l'IA. Cofondateur et Lead Developer avec une expérience pratique dans la conception et le déploiement d'applications de niveau production utilisées par de vrais utilisateurs sur Google Play. Excellente maîtrise de Django, Flutter, Supabase et des architectures d'API sécurisées. Expérience confirmée dans la conception de systèmes évolutifs, l'intégration de fonctionnalités IA, et la mise en place de plateformes sociales et fintech axées sur la confidentialité.",
      education: "Formation",
      educationText:
        "Bachelor+4 en Technologies de l'Information et de la Communication (Génie Logiciel) - University Polytechnique of Gitega, 2025.",
      position: "Expérience principale",
      positionText: "Co-Founder & Lead Developer chez RundiNova Tech (Gitega) - Juin 2024 à Février 2026.",
      skills: "Compétences clés",
      skillsList: [
        "Django, Flutter, React, Riverpod",
        "API sécurisées, auth, cloud deployment",
        "Supabase, PostgreSQL, Firebase, Isar",
        "IA appliquée, Smart matching, reporting",
        "Blockchain, smart contracts, Web3",
        "Architecture mobile offline-first",
      ],
      quickInfoLabels: {
        email: "Email",
        phone: "Téléphone",
        location: "Localisation",
      },
    },
    services: {
      title: "Domaines d'Expertise",
      list: [
        {
          icon: <Smartphone className="w-8 h-8" />,
          title: "Ingénierie Mobile",
          description: "Applications Flutter Android/iOS et publication sur Play Store",
          features: ["Architecture hors ligne", "UI responsive", "Performance production"],
        },
        {
          icon: <Code className="w-8 h-8" />,
          title: "Systèmes Backend",
          description: "Architectures Django robustes et APIs REST sécurisées",
          features: ["Scalabilité", "Sécurité API", "Auth & flux de données"],
        },
        {
          icon: <Brain className="w-8 h-8" />,
          title: "IA appliquée",
          description: "Fonctionnalités IA pour matching, signalement et analytics",
          features: ["Fonctionnalités IA", "Reporting intelligent", "Automatisation"],
        },
        {
          icon: <Shield className="w-8 h-8" />,
          title: "Blockchain",
          description: "Composants blockchain et smart contracts pour transactions sûres",
          features: ["Smart contracts", "Flux de confiance", "Prêt pour Web3"],
        },
      ],
    },
    career: {
      title: "Parcours Professionnel",
      experienceTitle: "Expérience",
      experienceRole: "Co-Founder & Lead Developer",
      experienceCompany: "RundiNova Tech - Gitega",
      experiencePeriod: "Juin 2024 - Février 2026",
      experienceItems: [
        "Cofondation d'une startup technologique livrant des solutions Web, Mobile, IA et Blockchain.",
        "Conception et déploiement de systèmes backend évolutifs avec Django et des APIs REST sécurisées.",
        "Pilotage du développement mobile Flutter (Android & iOS), de l'architecture à la mise en production.",
        "Intégration de fonctionnalités IA incluant des systèmes de matching intelligent et de reporting avancé.",
        "Architecture de composants blockchain et smart contracts pour des plateformes de transactions sécurisées.",
        "Gestion complète du cycle projet: besoins, UI/UX, développement, déploiement et maintenance.",
      ],
      certificationsTitle: "Certifications",
      certifications: [
        "Artificial Intelligence & Blockchain Innovation Program - JuneTech, 2024",
        "Leadership Skills Training - The Global Leadership Summit, 2024",
        "Blockchain Training Certificate - TresorAcademy, 2023",
        "Electronics & Arduino Development Training - TME, 2023",
      ],
      courseworkTitle: "Cours académiques",
      coursework: [
        "Database Systems - University Polytechnique of Gitega, 2023 (SQL & Database Design)",
        "Computer Systems & Architecture - University Polytechnique of Gitega, 2022 (Problem Solving)",
      ],
      involvementTitle: "Implication",
      involvementRole: "GDG Lead (Google Developer Groups Lead)",
      involvementOrg: "University Polytechnique of Gitega / GDG",
      involvementPeriod: "Juin 2023 - Juin 2025",
      involvementItems: [
        "Direction du chapitre universitaire Google Developer Groups (GDG).",
        "Organisation d'ateliers techniques sur Flutter, le développement web et le cloud.",
        "Mentorat des étudiants en développement mobile et backend.",
        "Coordination d'événements tech et de meetups développeurs.",
      ],
      stackTitle: "Stack Technique",
      skillGroups: [
        "Langages: Python, Dart, Solidity, SQL",
        "Backend & DB: PostgreSQL, Supabase, Firebase, REST APIs, Isar",
        "Cloud & Déploiement: API Security, Authentication, Push Notifications",
        "IA & Blockchain: Machine Learning, AI Systems, Smart Contracts, Web3",
      ],
    },
    projects: {
      title: "Projets",
      featuresLabel: "Fonctionnalités",
      techLabel: "Technologies",
      visitLabel: "Visiter",
      storeLabel: "Google Play",
      list: [
        {
          id: "comlab",
          title: "ComLab - Online Collaboration Platform",
          description:
            "Plateforme complète reliant talents, experts, mentors, startups, entreprises et ONG.",
          features: ["Matching intelligent", "Formations certifiées", "Multilingue FR/EN/KR", "Support projets"],
          tech: ["Django", "Flutter", "Supabase", "AI Integration"],
          url: "https://comlab-burundi.com/",
          status: "En ligne",
        },
        {
          id: "techsafe",
          title: "TechSafe - AI Mobile App for GBV Prevention",
          description: "Application mobile IA pour signalement et alertes en prévention des VBG.",
          features: ["Smart reporting", "Emergency alerts", "Interface Kirundi", "Information juridique"],
          tech: ["Flutter", "AI models", "Supabase"],
          url: "https://techsafe.com/",
          status: "En développement",
        },
        {
          id: "storytus",
          title: "Storytus - Social Status / Story Sharing App",
          description:
            "App sociale mobile avec statuts texte/image/audio, privacy control, repost, mentions, hashtags et analytics.",
          features: ["Commentaires & likes", "Favoris", "Notifications", "Multilingue FR/EN/KR"],
          tech: ["Flutter", "Supabase", "Firebase", "Realtime DB"],
          downloadUrl: "https://play.google.com/store/apps/details?id=com.storytus.storytus",
          status: "Publié",
        },
        {
          id: "ikigabo",
          title: "Ikigabo - Personal Wealth Management",
          description: "Application offline de gestion financière personnelle publiée sur Google Play.",
          features: ["Transactions", "Actifs & dettes", "Multi-devise", "PIN & biométrie"],
          tech: ["Flutter", "Isar", "Riverpod", "fl_chart"],
          downloadUrl: "https://play.google.com/store/apps/details?id=com.ikigabo.ikigabo",
          status: "Publié",
        },
        {
          id: "iwanje",
          title: "Iwanje - E-commerce Platform with Blockchain",
          description: "Plateforme multi-vendeurs intégrant blockchain et filtres IA pour transactions sécurisées.",
          features: ["Géolocalisation", "Listings", "Paiements sécurisés", "Multi-vendeurs"],
          tech: ["Flutter", "Django", "Smart Contracts", "AI filters"],
          url: "https://iwanje.com/",
          status: "En développement",
        },
        {
          id: "imbonakazoza",
          title: "Imbonakazoza - Android Maps App",
          description:
            "Application Android pour localiser les agents d'argent électronique en temps réel avec Google Maps SDK.",
          features: ["Markers temps réel", "Satellite/normal", "Zoom/pan/rotation", "UI responsive"],
          tech: ["Kotlin", "Jetpack Compose", "Google Maps SDK 18.2.0"],
          downloadUrl: "https://play.google.com/store/apps/details?id=com.kithub.imbonakazoza",
          status: "Publié",
        },
      ],
    },
    contact: {
      title: "Contact",
      subtitle: "Disponible pour collaborations et projets professionnels",
      infoTitle: "Informations",
      form: {
        name: "Nom",
        email: "Email",
        subject: "Sujet",
        message: "Message",
        send: "Envoyer",
        placeholders: {
          name: "Votre nom",
          email: "votre@email.com",
          subject: "Sujet",
          message: "Votre message...",
        },
      },
      info: {
        email: "Email",
        phone: "Téléphone / WhatsApp",
        location: "Localisation",
      },
      whatsapp: "WhatsApp",
      social: "Réseaux sociaux",
      footerRights: "Tous droits réservés.",
    },
  },
  en: {
    nav: {
      home: "Home",
      about: "About",
      services: "Expertise",
      career: "Career",
      projects: "Projects",
      contact: "Contact",
    },
    themeNames: {
      corporate: "Corporate",
      elegant: "Elegant",
      modern: "Modern",
      professional: "Pro",
    },
    hero: {
      title: "Joffre NIYONDIKO",
      subtitle: "Software Engineer • Backend • Mobile • AI",
      description:
        "Software Engineer specialized in Backend Systems, Mobile Development and AI-driven applications. Co-Founder & Lead Developer with production-grade apps published on Google Play.",
      portraitAlt: "Portrait of Joffre Niyondiko",
      cta: "View my projects",
    },
    promo: {
      title: "🚀 Professional Portfolio & Custom Solutions",
      text: "Web/mobile development, secure backend architecture, AI integration, and blockchain components with a focus on performance and reliability.",
      button: "Contact me now",
    },
    about: {
      title: "About",
      summaryTitle: "Professional Summary",
      summaryText:
        "Software Engineer specialized in Backend Systems, Mobile Development and AI-driven applications. Co-Founder and Lead Developer with hands-on experience building and deploying production-grade applications used by real users on Google Play. Strong expertise in Django, Flutter, Supabase, and secure API architecture. Experienced in designing scalable systems, integrating AI features, and implementing privacy-focused social and fintech platforms.",
      education: "Education",
      educationText:
        "Bachelor+4 in Information and Communication Technologies (Software Engineering) - University Polytechnique of Gitega, 2025.",
      position: "Main Experience",
      positionText: "Co-Founder & Lead Developer at RundiNova Tech (Gitega) - June 2024 to February 2026.",
      skills: "Core Strengths",
      skillsList: [
        "Django, Flutter, React, Riverpod",
        "Secure APIs, auth, cloud deployment",
        "Supabase, PostgreSQL, Firebase, Isar",
        "Applied AI, smart matching, reporting",
        "Blockchain, smart contracts, Web3",
        "Offline-first mobile architecture",
      ],
      quickInfoLabels: {
        email: "Email",
        phone: "Phone",
        location: "Location",
      },
    },
    services: {
      title: "Expertise Areas",
      list: [
        {
          icon: <Smartphone className="w-8 h-8" />,
          title: "Mobile Engineering",
          description: "Flutter Android/iOS applications with production delivery",
          features: ["Offline-first", "Responsive UI", "Store-ready"],
        },
        {
          icon: <Code className="w-8 h-8" />,
          title: "Backend Systems",
          description: "Robust Django architecture and secure REST APIs",
          features: ["Scalable", "API Security", "Auth & data flow"],
        },
        {
          icon: <Brain className="w-8 h-8" />,
          title: "Applied AI",
          description: "AI capabilities for matching, reporting, and insights",
          features: ["AI features", "Smart reporting", "Automation"],
        },
        {
          icon: <Shield className="w-8 h-8" />,
          title: "Blockchain",
          description: "Blockchain components and smart contracts for secure transactions",
          features: ["Smart contracts", "Trust flows", "Web3-ready"],
        },
      ],
    },
    career: {
      title: "Professional Path",
      experienceTitle: "Experience",
      experienceRole: "Co-Founder & Lead Developer",
      experienceCompany: "RundiNova Tech - Gitega",
      experiencePeriod: "June 2024 - February 2026",
      experienceItems: [
        "Co-founded a technology startup delivering Web, Mobile, AI and Blockchain solutions to clients.",
        "Designed and deployed scalable backend systems using Django and secure REST APIs.",
        "Led mobile app development with Flutter (Android & iOS) from architecture to production release.",
        "Integrated AI-driven features including smart matching systems and intelligent reporting tools.",
        "Architected blockchain components and smart contracts for secure transaction platforms.",
        "Managed full lifecycle: requirements, UI/UX, development, deployment and maintenance.",
      ],
      certificationsTitle: "Certifications",
      certifications: [
        "Artificial Intelligence & Blockchain Innovation Program - JuneTech, 2024",
        "Leadership Skills Training - The Global Leadership Summit, 2024",
        "Blockchain Training Certificate - TresorAcademy, 2023",
        "Electronics & Arduino Development Training - TME, 2023",
      ],
      courseworkTitle: "Coursework",
      coursework: [
        "Database Systems - University Polytechnique of Gitega, 2023 (SQL & Database Design)",
        "Computer Systems & Architecture - University Polytechnique of Gitega, 2022 (Problem Solving)",
      ],
      involvementTitle: "Involvement",
      involvementRole: "GDG Lead (Google Developer Groups Lead)",
      involvementOrg: "University Polytechnique of Gitega / GDG",
      involvementPeriod: "June 2023 - June 2025",
      involvementItems: [
        "Led the university chapter of Google Developer Groups (GDG).",
        "Organized technical workshops on Flutter, Web Development, and Cloud technologies.",
        "Mentored students in mobile and backend development.",
        "Coordinated tech events and developer meetups.",
      ],
      stackTitle: "Skills Stack",
      skillGroups: [
        "Programming Languages: Python, Dart, Solidity, SQL",
        "Backend & DB: PostgreSQL, Supabase, Firebase, REST APIs, Isar",
        "Cloud & Deployment: API Security, Authentication, Push Notifications",
        "AI & Blockchain: Machine Learning, AI Systems, Smart Contracts, Web3",
      ],
    },
    projects: {
      title: "Projects",
      featuresLabel: "Features",
      techLabel: "Technologies",
      visitLabel: "Visit",
      storeLabel: "Google Play",
      list: [
        {
          id: "comlab",
          title: "ComLab - Online Collaboration Platform",
          description:
            "Complete platform connecting talents, experts, mentors, startups, companies, and NGOs.",
          features: ["Smart matching", "Certified training", "Multilingual FR/EN/KR", "Project support"],
          tech: ["Django", "Flutter", "Supabase", "AI Integration"],
          url: "https://comlab-burundi.com/",
          status: "Live",
        },
        {
          id: "techsafe",
          title: "TechSafe - AI Mobile App for GBV Prevention",
          description: "Mobile AI app for gender-based violence reporting and emergency alerts.",
          features: ["Smart reporting", "Emergency alerts", "Kirundi interface", "Legal information"],
          tech: ["Flutter", "AI models", "Supabase"],
          url: "https://techsafe.com/",
          status: "In development",
        },
        {
          id: "storytus",
          title: "Storytus - Social Status / Story Sharing App",
          description:
            "Social app with text/image/audio statuses, privacy controls, reposts, mentions, hashtags and analytics.",
          features: ["Comments & likes", "Bookmarks", "Notifications", "Multilingual FR/EN/KR"],
          tech: ["Flutter", "Supabase", "Firebase", "Realtime DB"],
          downloadUrl: "https://play.google.com/store/apps/details?id=com.storytus.storytus",
          status: "Published",
        },
        {
          id: "ikigabo",
          title: "Ikigabo - Personal Wealth Management",
          description: "Offline personal finance app published on Google Play.",
          features: ["Transactions", "Assets & debts", "Multi-currency", "PIN & biometrics"],
          tech: ["Flutter", "Isar", "Riverpod", "fl_chart"],
          downloadUrl: "https://play.google.com/store/apps/details?id=com.ikigabo.ikigabo",
          status: "Published",
        },
        {
          id: "iwanje",
          title: "Iwanje - E-commerce Platform with Blockchain",
          description: "Multi-vendor platform integrating blockchain and AI-powered filters.",
          features: ["Geolocation", "Listings", "Secure payments", "Multi-vendor"],
          tech: ["Flutter", "Django", "Smart Contracts", "AI filters"],
          url: "https://iwanje.com/",
          status: "In development",
        },
        {
          id: "imbonakazoza",
          title: "Imbonakazoza - Android Maps App",
          description: "Android app to locate electronic money agents in real time with Google Maps SDK.",
          features: ["Realtime markers", "Satellite/normal", "Zoom/pan/rotation", "Responsive UI"],
          tech: ["Kotlin", "Jetpack Compose", "Google Maps SDK 18.2.0"],
          downloadUrl: "https://play.google.com/store/apps/details?id=com.kithub.imbonakazoza",
          status: "Published",
        },
      ],
    },
    contact: {
      title: "Contact",
      subtitle: "Available for professional collaborations and technical projects",
      infoTitle: "Information",
      form: {
        name: "Name",
        email: "Email",
        subject: "Subject",
        message: "Message",
        send: "Send",
        placeholders: {
          name: "Your name",
          email: "your@email.com",
          subject: "Subject",
          message: "Your message...",
        },
      },
      info: {
        email: "Email",
        phone: "Phone / WhatsApp",
        location: "Location",
      },
      whatsapp: "WhatsApp",
      social: "Social Networks",
      footerRights: "All rights reserved.",
    },
  },
}

export default function Portfolio() {
  const [language, setLanguage] = useState<"fr" | "en">("en")
  const [currentTheme, setCurrentTheme] = useState<keyof typeof themes>("professional")
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
                  className={`p-2 rounded text-sm transition-all ${
                    currentTheme === key ? "bg-white/20 text-white" : "text-gray-400 hover:text-white"
                  }`}
                  title={t.themeNames[key as keyof typeof t.themeNames]}
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
        {/* Water-like Background Animation */}
        <div className="absolute inset-0">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-white/5 blur-2xl"
              style={{
                width: `${220 + i * 70}px`,
                height: `${220 + i * 70}px`,
                left: `${5 + i * 20}%`,
                top: `${8 + i * 10}%`,
              }}
              animate={{
                x: [0, 30, -20, 0],
                y: [0, -20, 15, 0],
                scale: [1, 1.08, 0.95, 1],
              }}
              transition={{
                duration: 16 + i * 4,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />
          ))}

          <motion.div
            className="absolute -bottom-28 left-[-12%] h-56 w-[124%] rounded-[48%] bg-cyan-400/10 blur-3xl"
            animate={{ x: [0, 50, -30, 0], y: [0, -10, 6, 0] }}
            transition={{ duration: 18, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute -bottom-36 left-[-8%] h-64 w-[118%] rounded-[48%] bg-blue-400/10 blur-3xl"
            animate={{ x: [0, -40, 25, 0], y: [0, -14, 8, 0] }}
            transition={{ duration: 22, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          />
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div
              className="mx-auto mb-4 rounded-full shadow-2xl inline-block border-4 border-white"
              style={{
                display: "inline-block",
                overflow: "hidden",
                background: "linear-gradient(135deg, #1fa2ff, #12d8fa, #a6ffcb)",
                width: "160px",
                height: "160px",
              }}
            >
              <img
                src="./joffre.jpg"
                alt={t.hero.portraitAlt}
                style={{
                  borderRadius: "50%",
                  display: "block",
                  width: "100%",
                  height: "100%",
                  objectFit: "fill",
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
                  <div className="flex items-center mb-4">
                    <Briefcase className={`w-8 h-8 ${theme.text} mr-3`} />
                    <h3 className={`text-2xl font-bold ${theme.text}`}>{t.about.summaryTitle}</h3>
                  </div>
                  <p className="text-gray-300 mb-8 leading-relaxed">{t.about.summaryText}</p>

                  <div className="flex items-center mb-4">
                    <GraduationCap className={`w-8 h-8 ${theme.text} mr-3`} />
                    <h3 className={`text-2xl font-bold ${theme.text}`}>{t.about.education}</h3>
                  </div>
                  <p className="text-gray-300 mb-8 leading-relaxed">{t.about.educationText}</p>

                  <div className="flex items-center mb-4">
                    <CalendarDays className={`w-8 h-8 ${theme.text} mr-3`} />
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
                        transition={{ delay: index * 0.08 }}
                        className="flex items-center text-gray-300"
                      >
                        <div className={`w-2 h-2 ${theme.gradient} rounded-full mr-3`} />
                        {skill}
                      </motion.li>
                    ))}
                  </ul>

                  <div className="mt-10 grid sm:grid-cols-2 gap-4">
                    <div className="rounded-lg border border-white/20 p-4 bg-black/20">
                      <p className="text-xs uppercase tracking-wide text-gray-400 mb-1">
                        {t.about.quickInfoLabels.email}
                      </p>
                      <p className="text-sm text-white">niyondikojoffreasjubu@gmail.com</p>
                    </div>
                    <div className="rounded-lg border border-white/20 p-4 bg-black/20">
                      <p className="text-xs uppercase tracking-wide text-gray-400 mb-1">
                        {t.about.quickInfoLabels.phone}
                      </p>
                      <p className="text-sm text-white">+257 68497372</p>
                    </div>
                    <div className="rounded-lg border border-white/20 p-4 bg-black/20 sm:col-span-2">
                      <p className="text-xs uppercase tracking-wide text-gray-400 mb-1">
                        {t.about.quickInfoLabels.location}
                      </p>
                      <p className="text-sm text-white">Gitega, Gitega Province, Burundi</p>
                    </div>
                  </div>
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

      {/* Career Section */}
      <section id="career" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">{t.career.title}</h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}>
              <Card className={`${theme.card} backdrop-blur-md h-full`}>
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <Briefcase className={`w-8 h-8 ${theme.text} mr-3`} />
                    <h3 className={`text-2xl font-bold ${theme.text}`}>{t.career.experienceTitle}</h3>
                  </div>
                  <p className="text-white font-semibold text-lg">{t.career.experienceRole}</p>
                  <p className="text-gray-300">{t.career.experienceCompany}</p>
                  <p className="text-gray-400 text-sm mb-6">{t.career.experiencePeriod}</p>

                  <ul className="space-y-3">
                    {t.career.experienceItems.map((item, idx) => (
                      <li key={idx} className="flex items-start text-sm text-gray-300">
                        <CheckCircle className={`w-4 h-4 ${theme.text} mr-2 mt-0.5 flex-shrink-0`} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }}>
              <Card className={`${theme.card} backdrop-blur-md h-full`}>
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <Award className={`w-8 h-8 ${theme.text} mr-3`} />
                    <h3 className={`text-2xl font-bold ${theme.text}`}>{t.career.certificationsTitle}</h3>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {t.career.certifications.map((item, idx) => (
                      <li key={idx} className="flex items-start text-sm text-gray-300">
                        <CheckCircle className={`w-4 h-4 ${theme.text} mr-2 mt-0.5 flex-shrink-0`} />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center mb-4">
                    <Code className={`w-8 h-8 ${theme.text} mr-3`} />
                    <h3 className={`text-2xl font-bold ${theme.text}`}>{t.career.courseworkTitle}</h3>
                  </div>
                  <ul className="space-y-3">
                    {t.career.coursework.map((item, idx) => (
                      <li key={idx} className="flex items-start text-sm text-gray-300">
                        <CheckCircle className={`w-4 h-4 ${theme.text} mr-2 mt-0.5 flex-shrink-0`} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}>
              <Card className={`${theme.card} backdrop-blur-md h-full`}>
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <Users className={`w-8 h-8 ${theme.text} mr-3`} />
                    <h3 className={`text-2xl font-bold ${theme.text}`}>{t.career.involvementTitle}</h3>
                  </div>
                  <p className="text-white font-semibold text-lg">{t.career.involvementRole}</p>
                  <p className="text-gray-300">{t.career.involvementOrg}</p>
                  <p className="text-gray-400 text-sm mb-6">{t.career.involvementPeriod}</p>
                  <ul className="space-y-3">
                    {t.career.involvementItems.map((item, idx) => (
                      <li key={idx} className="flex items-start text-sm text-gray-300">
                        <CheckCircle className={`w-4 h-4 ${theme.text} mr-2 mt-0.5 flex-shrink-0`} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }}>
              <Card className={`${theme.card} backdrop-blur-md h-full`}>
                <CardContent className="p-8">
                  <h3 className={`text-2xl font-bold mb-6 ${theme.text}`}>{t.career.stackTitle}</h3>
                  <ul className="space-y-3">
                    {t.career.skillGroups.map((item, idx) => (
                      <li key={idx} className="flex items-start text-sm text-gray-300">
                        <CheckCircle className={`w-4 h-4 ${theme.text} mr-2 mt-0.5 flex-shrink-0`} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-black/10">
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
                transition={{ delay: index * 0.08 }}
              >
                <Card className={`${theme.card} backdrop-blur-md hover:scale-[1.02] transition-all duration-300 h-full`}>
                  <CardContent className="p-8">
                    <div className="flex justify-between items-start mb-4 gap-3">
                      <h3 className={`text-2xl font-bold ${theme.text}`}>{project.title}</h3>
                      <Badge
                        variant="outline"
                        className={`${
                          project.status === "En ligne" || project.status === "Live"
                            ? "border-green-400 text-green-400"
                            : project.status === "Publié" || project.status === "Published"
                              ? "border-blue-400 text-blue-400"
                              : "border-yellow-400 text-yellow-400"
                        }`}
                      >
                        {project.status}
                      </Badge>
                    </div>

                    <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>

                    <div className="mb-6">
                      <h4 className={`font-semibold mb-3 ${theme.text}`}>{t.projects.featuresLabel}:</h4>
                      <ul className="space-y-2">
                        {project.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-400">
                            <div className={`w-1.5 h-1.5 ${theme.gradient} rounded-full mr-2 flex-shrink-0`} />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-6">
                      <h4 className={`font-semibold mb-3 ${theme.text}`}>{t.projects.techLabel}:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((item, idx) => (
                          <Badge key={idx} variant="outline" className="border-white/20 text-gray-200">
                            {item}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-3 flex-wrap">
                      {project.url && (
                        <Button
                          className={`${theme.gradient} hover:opacity-90 text-white`}
                          onClick={() => window.open(project.url, "_blank")}
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          {t.projects.visitLabel}
                        </Button>
                      )}
                      {project.downloadUrl && (
                        <Button
                          variant="outline"
                          className="border-white/30 text-white hover:bg-white/10 bg-green-800"
                          onClick={() => window.open(project.downloadUrl, "_blank")}
                        >
                          <Download className="w-4 h-4 mr-2" />
                          {t.projects.storeLabel}
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
                          placeholder={t.contact.form.placeholders.name}
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">{t.contact.form.email}</label>
                        <input
                          type="email"
                          className="w-full px-4 py-3 bg-black/20 border border-white/20 rounded-lg focus:outline-none focus:border-blue-400 text-white"
                          placeholder={t.contact.form.placeholders.email}
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">{t.contact.form.subject}</label>
                        <input
                          type="text"
                          className="w-full px-4 py-3 bg-black/20 border border-white/20 rounded-lg focus:outline-none focus:border-blue-400 text-white"
                          placeholder={t.contact.form.placeholders.subject}
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">{t.contact.form.message}</label>
                        <textarea
                          rows={5}
                          className="w-full px-4 py-3 bg-black/20 border border-white/20 rounded-lg focus:outline-none focus:border-blue-400 text-white resize-none"
                          placeholder={t.contact.form.placeholders.message}
                        />
                      </div>

                      <Button type="submit" className={`w-full ${theme.gradient} hover:opacity-90 py-4 text-lg text-white`}>
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
                    <h3 className={`text-2xl font-bold mb-8 ${theme.text}`}>{t.contact.infoTitle}</h3>

                    <div className="space-y-6">
                      <div className="flex items-center">
                        <Mail className={`w-6 h-6 mr-4 ${theme.text}`} />
                        <div>
                          <p className="text-sm text-gray-400">{t.contact.info.email}</p>
                          <a href="mailto:niyondikojoffreasjubu@gmail.com" className="text-white hover:text-blue-300 font-medium">
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
                          <p className="text-white font-medium">Gitega, Gitega Province, Burundi</p>
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
                      <div className="flex flex-wrap gap-3">
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-white/30 text-white hover:bg-white/10 bg-gray-800"
                          onClick={() =>
                            window.open("https://www.linkedin.com/in/niyondiko-joffre-062840277", "_blank")
                          }
                        >
                          <Linkedin className="w-4 h-4" />
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-white/30 text-white hover:bg-white/10 bg-gray-800"
                          onClick={() => window.open("https://www.github.com/JubuNiyokoDev", "_blank")}
                        >
                          <Github className="w-4 h-4" />
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-white/30 text-white hover:bg-white/10 bg-gray-800"
                          onClick={() => window.open("https://www.facebook.com/jubuniyoko", "_blank")}
                        >
                          <Facebook className="w-4 h-4" />
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-white/30 text-white hover:bg-white/10 bg-gray-800"
                          onClick={() => window.open("https://www.instagram.com/jubu_niyoko", "_blank")}
                        >
                          <Instagram className="w-4 h-4" />
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-white/30 text-white hover:bg-white/10 bg-gray-800"
                          onClick={() => window.open("https://x.com/jubu_niyoko", "_blank")}
                        >
                          <Twitter className="w-4 h-4" />
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-white/30 text-white hover:bg-white/10 bg-gray-800"
                          onClick={() => window.open("https://www.youtube.com/@JubuNiyoko", "_blank")}
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
          <p className="text-gray-400">© 2026 Niyondiko Joffre. {t.contact.footerRights}</p>
        </div>
      </footer>
    </div>
  )
}
