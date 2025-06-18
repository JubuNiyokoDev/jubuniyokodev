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
  Star,
  Calendar,
  Award,
  Clock,
  CheckCircle,
  ArrowRight,
  Menu,
  X,
  MapPin,
  Briefcase,
  GraduationCap,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const themes = {
  ocean: {
    name: "Océan",
    icon: "🌊",
    primary: "from-blue-900 via-blue-800 to-slate-900",
    secondary: "from-blue-600 to-cyan-600",
    accent: "blue",
    card: "bg-blue-900/20 border-blue-400/30",
    text: "text-blue-300",
  },
  tech: {
    name: "Tech",
    icon: "🔮",
    primary: "from-purple-900 via-violet-800 to-slate-900",
    secondary: "from-purple-600 to-pink-600",
    accent: "purple",
    card: "bg-purple-900/20 border-purple-400/30",
    text: "text-purple-300",
  },
  nature: {
    name: "Nature",
    icon: "🌿",
    primary: "from-green-900 via-emerald-800 to-slate-900",
    secondary: "from-green-600 to-emerald-600",
    accent: "green",
    card: "bg-green-900/20 border-green-400/30",
    text: "text-green-300",
  },
  sunset: {
    name: "Sunset",
    icon: "🌅",
    primary: "from-orange-900 via-red-800 to-slate-900",
    secondary: "from-orange-600 to-red-600",
    accent: "orange",
    card: "bg-orange-900/20 border-orange-400/30",
    text: "text-orange-300",
  },
}

const translations = {
  fr: {
    nav: {
      home: "Accueil",
      about: "À propos",
      services: "Services",
      projects: "Projets",
      experience: "Expérience",
      testimonials: "Témoignages",
      blog: "Blog",
      contact: "Contact",
    },
    hero: {
      title: "Niyondiko Joffre",
      subtitle: "Ingénieur en TIC • Lead Developer",
      description:
        "Spécialisé en Génie Logiciel, développement Web/Mobile, Intelligence Artificielle et Blockchain. Plus de 5 ans d'expérience dans la création de solutions technologiques innovantes.",
      cta: "Découvrir mes projets",
      stats: {
        projects: "Projets réalisés",
        clients: "Clients satisfaits",
        experience: "Années d'expérience",
        technologies: "Technologies maîtrisées",
      },
    },
    promo: {
      title: "🚀 Développement sur mesure - Résultats garantis",
      text: "Vous cherchez une application web ou mobile professionnelle, un chatbot intelligent, un système IA ou une plateforme blockchain ? Je réalise vos projets personnalisés avec une approche agile et des technologies de pointe. Délai minimum : 2 semaines. Maintenance et support inclus.",
      features: ["Développement rapide", "Technologies modernes", "Support 24/7", "Prix compétitifs"],
      button: "Demander un devis gratuit",
    },
    about: {
      title: "À propos de moi",
      subtitle: "Passionné par l'innovation technologique",
      intro:
        "Ingénieur en Technologies de l'Information et de la Communication avec une spécialisation en Génie Logiciel, je transforme les idées en solutions digitales performantes.",
      education: "Formation",
      educationText:
        "Bac+4 en Technologies de l'Information et de la Communication, option Génie Logiciel - Université du Burundi",
      position: "Poste actuel",
      positionText: "Lead Developer chez Kit Digital Innovation (Kabondo, Bujumbura)",
      mission: "Ma mission",
      missionText:
        "Accompagner les entreprises et entrepreneurs dans leur transformation digitale en créant des solutions sur mesure, performantes et évolutives.",
      skills: "Compétences techniques",
      skillsList: [
        { name: "Développement Mobile", level: 95, tech: "Flutter, React Native, Kotlin" },
        { name: "Développement Web", level: 98, tech: "Django, React, Next.js, Vue.js" },
        { name: "Intelligence Artificielle", level: 90, tech: "Python, TensorFlow, OpenAI API" },
        { name: "Blockchain", level: 85, tech: "Solidity, Web3, Smart Contracts" },
        { name: "Cloud & DevOps", level: 88, tech: "AWS, Docker, CI/CD" },
        { name: "UI/UX Design", level: 92, tech: "Figma, Adobe XD, Tailwind" },
      ],
      values: {
        title: "Mes valeurs",
        items: [
          { icon: "⚡", title: "Performance", desc: "Code optimisé et solutions rapides" },
          { icon: "🎯", title: "Précision", desc: "Respect des délais et cahiers des charges" },
          { icon: "🚀", title: "Innovation", desc: "Technologies de pointe et approches créatives" },
          { icon: "🤝", title: "Collaboration", desc: "Communication transparente avec les clients" },
        ],
      },
    },
    services: {
      title: "Mes Services",
      subtitle: "Solutions complètes pour vos besoins digitaux",
      list: [
        {
          icon: "📱",
          title: "Développement Mobile",
          description: "Applications iOS et Android natives et cross-platform avec Flutter et React Native.",
          features: [
            "Interface utilisateur moderne",
            "Performance optimisée",
            "Intégration API",
            "Publication sur stores",
          ],
          price: "À partir de 800€",
          duration: "2-4 semaines",
        },
        {
          icon: "💻",
          title: "Développement Web",
          description: "Sites web et applications web modernes, responsive et performantes.",
          features: ["Design responsive", "SEO optimisé", "Sécurité renforcée", "Hébergement inclus"],
          price: "À partir de 600€",
          duration: "1-3 semaines",
        },
        {
          icon: "🤖",
          title: "Intelligence Artificielle",
          description: "Chatbots intelligents, systèmes de recommandation et solutions IA personnalisées.",
          features: ["Traitement du langage naturel", "Machine Learning", "Intégration API", "Formation des modèles"],
          price: "À partir de 1200€",
          duration: "3-6 semaines",
        },
        {
          icon: "⛓️",
          title: "Blockchain & Web3",
          description: "Smart contracts, DApps et solutions blockchain pour votre entreprise.",
          features: ["Smart contracts sécurisés", "Intégration Web3", "Tokenisation", "Audit de sécurité"],
          price: "À partir de 1500€",
          duration: "4-8 semaines",
        },
        {
          icon: "☁️",
          title: "Déploiement Cloud",
          description: "Migration et déploiement de vos applications sur le cloud avec monitoring.",
          features: ["Architecture scalable", "Monitoring 24/7", "Sauvegarde automatique", "Support technique"],
          price: "À partir de 400€",
          duration: "1-2 semaines",
        },
        {
          icon: "🎨",
          title: "UI/UX Design",
          description: "Conception d'interfaces utilisateur modernes et expérience utilisateur optimisée.",
          features: ["Prototypage interactif", "Design system", "Tests utilisateurs", "Responsive design"],
          price: "À partir de 500€",
          duration: "1-2 semaines",
        },
      ],
    },
    projects: {
      title: "Projets & Réalisations",
      subtitle: "Découvrez mes dernières créations",
      featured: "Projets phares",
      all: "Tous les projets",
      list: [
        {
          id: "comlab",
          title: "ComLab – Plateforme d'Innovation Collaborative",
          category: "Plateforme Web",
          description:
            "Une plateforme complète de mise en relation entre talents, experts, mentors, startups, entreprises et ONG. Solution complète avec matching intelligent et système de formation.",
          image: "/placeholder.svg?height=300&width=500",
          technologies: ["React", "Django", "PostgreSQL", "AI Matching", "WebRTC"],
          features: [
            "Matching intelligent basé sur l'IA",
            "Système de formations certifiées",
            "Interface multilingue (FR/EN/KR)",
            "Accompagnement de projets",
            "Système de messagerie intégré",
            "Tableau de bord analytics",
          ],
          results: {
            users: "2000+ utilisateurs",
            matches: "500+ connexions",
            satisfaction: "98% satisfaction",
          },
          url: "https://comlab-burundi.com",
          status: "En ligne",
          year: "2024",
        },
        {
          id: "techsafe",
          title: "TechSafe – Protection contre la VBG",
          category: "Application Mobile",
          description:
            "Application mobile révolutionnaire avec IA pour lutter contre la violence basée sur le genre (VBG). Interface en Kirundi avec système d'alerte d'urgence.",
          image: "/placeholder.svg?height=300&width=500",
          technologies: ["Flutter", "Firebase", "AI/ML", "Geolocation", "Push Notifications"],
          features: [
            "Signalement intelligent avec IA",
            "Système d'alerte d'urgence GPS",
            "Interface complète en Kirundi",
            "Base de données juridiques",
            "Réseau de support communautaire",
            "Anonymisation des données",
          ],
          results: {
            downloads: "5000+ téléchargements",
            alerts: "200+ alertes traitées",
            impact: "Impact social positif",
          },
          status: "En développement",
          year: "2024",
        },
        {
          id: "iwanje",
          title: "Iwanje – E-commerce Intelligent Multi-vendeurs",
          category: "Plateforme E-commerce",
          description:
            "Plateforme e-commerce révolutionnaire avec blockchain intégrée pour services, produits et immobilier. Géolocalisation et filtres IA intelligents.",
          image: "/placeholder.svg?height=300&width=500",
          technologies: ["Next.js", "Blockchain", "Smart Contracts", "AI Filters", "Payment Gateway"],
          features: [
            "Multi-vendeurs avec blockchain",
            "Géolocalisation avancée",
            "Filtres IA intelligents",
            "Paiements sécurisés multi-devises",
            "Système de réputation décentralisé",
            "Marketplace immobilier intégré",
          ],
          results: {
            vendors: "100+ vendeurs",
            transactions: "50000€+ volume",
            growth: "200% croissance mensuelle",
          },
          status: "Beta",
          year: "2024",
        },
        {
          id: "ndabazi",
          title: "Ndabazi App – Assistant Personnel IA",
          category: "Application Mobile",
          description:
            "Assistant personnel intelligent avec IA conversationnelle en Kirundi. Gestion de tâches, rappels et conseils personnalisés.",
          image: "/placeholder.svg?height=300&width=500",
          technologies: ["Flutter", "OpenAI API", "NLP", "Local Storage", "Voice Recognition"],
          features: [
            "IA conversationnelle en Kirundi",
            "Reconnaissance vocale",
            "Gestion de tâches intelligente",
            "Conseils personnalisés",
            "Mode hors ligne",
            "Synchronisation cloud",
          ],
          results: {
            users: "1000+ utilisateurs actifs",
            satisfaction: "95% satisfaction",
            retention: "80% rétention mensuelle",
          },
          downloadUrl: "#",
          status: "Disponible",
          year: "2023",
        },
      ],
    },
    experience: {
      title: "Expérience Professionnelle",
      subtitle: "Mon parcours dans l'industrie tech",
      timeline: [
        {
          year: "2024 - Présent",
          title: "Lead Developer",
          company: "Kit Digital Innovation",
          location: "Kabondo, Bujumbura",
          description:
            "Direction technique d'une équipe de 8 développeurs. Conception et développement de solutions digitales innovantes pour clients internationaux.",
          achievements: [
            "Augmentation de 40% de la productivité de l'équipe",
            "Livraison de 15+ projets majeurs",
            "Mise en place de processus DevOps",
            "Formation de 5 développeurs juniors",
          ],
        },
        {
          year: "2022 - 2024",
          title: "Développeur Fullstack Senior",
          company: "TechHub Burundi",
          location: "Bujumbura",
          description:
            "Développement d'applications web et mobile pour startups locales et internationales. Spécialisation en solutions IA et blockchain.",
          achievements: [
            "Développement de 20+ applications",
            "Intégration de solutions IA dans 10 projets",
            "Réduction de 60% des temps de développement",
            "Mentoring de développeurs juniors",
          ],
        },
        {
          year: "2021 - 2022",
          title: "Développeur Mobile",
          company: "InnovateTech Solutions",
          location: "Bujumbura",
          description:
            "Spécialisation dans le développement d'applications mobiles Flutter et React Native pour le marché africain.",
          achievements: [
            "Création de 8 applications mobiles",
            "100000+ téléchargements cumulés",
            "Optimisation des performances de 50%",
            "Certification Flutter avancée",
          ],
        },
        {
          year: "2020 - 2021",
          title: "Développeur Web Junior",
          company: "WebCraft Burundi",
          location: "Bujumbura",
          description:
            "Développement de sites web et applications web avec Django et React. Apprentissage des bonnes pratiques de développement.",
          achievements: [
            "Développement de 12 sites web",
            "Maîtrise de Django et React",
            "Certification en développement web",
            "Contribution à des projets open source",
          ],
        },
      ],
    },
    testimonials: {
      title: "Témoignages Clients",
      subtitle: "Ce que disent mes clients",
      list: [
        {
          name: "Marie Uwimana",
          position: "CEO, StartupHub Burundi",
          company: "StartupHub",
          text: "Joffre a transformé notre vision en une plateforme exceptionnelle. Son expertise technique et sa compréhension des besoins business sont remarquables.",
          rating: 5,
          project: "Plateforme de mise en relation",
        },
        {
          name: "Jean-Claude Niyonzima",
          position: "Directeur Technique",
          company: "FinTech Solutions",
          text: "Un développeur exceptionnel ! L'application mobile qu'il a créée pour nous a dépassé toutes nos attentes. Livraison dans les délais et qualité irréprochable.",
          rating: 5,
          project: "Application mobile bancaire",
        },
        {
          name: "Sarah Johnson",
          position: "Product Manager",
          company: "Global Tech Inc.",
          text: "Working with Joffre was a game-changer for our project. His AI expertise helped us implement features we thought were impossible.",
          rating: 5,
          project: "Système IA de recommandation",
        },
        {
          name: "David Hakizimana",
          position: "Fondateur",
          company: "EcoTech Burundi",
          text: "Joffre ne se contente pas de coder, il conseille et propose des améliorations. Un vrai partenaire technologique pour notre croissance.",
          rating: 5,
          project: "Plateforme e-commerce",
        },
      ],
    },
    blog: {
      title: "Blog & Actualités",
      subtitle: "Mes derniers articles et réflexions tech",
      articles: [
        {
          id: 1,
          title: "L'avenir de l'IA en Afrique : Opportunités et défis",
          excerpt:
            "Analyse des tendances de l'intelligence artificielle sur le continent africain et les opportunités pour les développeurs locaux.",
          date: "15 Décembre 2024",
          readTime: "8 min",
          category: "Intelligence Artificielle",
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          id: 2,
          title: "Flutter vs React Native : Guide complet 2024",
          excerpt:
            "Comparaison détaillée des deux frameworks de développement mobile les plus populaires avec exemples pratiques.",
          date: "10 Décembre 2024",
          readTime: "12 min",
          category: "Développement Mobile",
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          id: 3,
          title: "Blockchain pour les PME : Cas d'usage pratiques",
          excerpt:
            "Comment les petites et moyennes entreprises peuvent tirer parti de la technologie blockchain pour optimiser leurs opérations.",
          date: "5 Décembre 2024",
          readTime: "10 min",
          category: "Blockchain",
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          id: 4,
          title: "Optimisation des performances web : Techniques avancées",
          excerpt:
            "Stratégies et outils pour améliorer significativement les performances de vos applications web modernes.",
          date: "1 Décembre 2024",
          readTime: "15 min",
          category: "Développement Web",
          image: "/placeholder.svg?height=200&width=300",
        },
      ],
    },
    contact: {
      title: "Contactez-moi",
      subtitle: "Prêt à discuter de votre prochain projet ?",
      form: {
        name: "Nom complet",
        email: "Email",
        phone: "Téléphone",
        subject: "Sujet",
        message: "Message",
        budget: "Budget estimé",
        timeline: "Délai souhaité",
        send: "Envoyer le message",
      },
      info: {
        email: "Email",
        phone: "Téléphone / WhatsApp",
        location: "Localisation",
        availability: "Disponibilité",
      },
      whatsapp: "WhatsApp",
      social: "Réseaux sociaux",
      availability: "Disponible pour nouveaux projets",
    },
  },
  en: {
    nav: {
      home: "Home",
      about: "About",
      services: "Services",
      projects: "Projects",
      experience: "Experience",
      testimonials: "Testimonials",
      blog: "Blog",
      contact: "Contact",
    },
    hero: {
      title: "Niyondiko Joffre",
      subtitle: "ICT Engineer • Lead Developer",
      description:
        "Specialized in Software Engineering, Web/Mobile development, Artificial Intelligence and Blockchain. Over 5 years of experience creating innovative technological solutions.",
      cta: "Discover my projects",
      stats: {
        projects: "Completed projects",
        clients: "Satisfied clients",
        experience: "Years of experience",
        technologies: "Technologies mastered",
      },
    },
    promo: {
      title: "🚀 Custom Development - Guaranteed Results",
      text: "Looking for a professional web or mobile application, intelligent chatbot, AI system or blockchain platform? I deliver your custom projects with an agile approach and cutting-edge technologies. Minimum delivery: 2 weeks. Maintenance and support included.",
      features: ["Fast development", "Modern technologies", "24/7 support", "Competitive prices"],
      button: "Request free quote",
    },
    about: {
      title: "About me",
      subtitle: "Passionate about technological innovation",
      intro:
        "Information and Communication Technologies Engineer with specialization in Software Engineering, I transform ideas into high-performance digital solutions.",
      education: "Education",
      educationText:
        "Bachelor+4 in Information and Communication Technologies, Software Engineering option - University of Burundi",
      position: "Current Position",
      positionText: "Lead Developer at Kit Digital Innovation (Kabondo, Bujumbura)",
      mission: "My mission",
      missionText:
        "Accompany companies and entrepreneurs in their digital transformation by creating custom, high-performance and scalable solutions.",
      skills: "Technical skills",
      skillsList: [
        { name: "Mobile Development", level: 95, tech: "Flutter, React Native, Kotlin" },
        { name: "Web Development", level: 98, tech: "Django, React, Next.js, Vue.js" },
        { name: "Artificial Intelligence", level: 90, tech: "Python, TensorFlow, OpenAI API" },
        { name: "Blockchain", level: 85, tech: "Solidity, Web3, Smart Contracts" },
        { name: "Cloud & DevOps", level: 88, tech: "AWS, Docker, CI/CD" },
        { name: "UI/UX Design", level: 92, tech: "Figma, Adobe XD, Tailwind" },
      ],
      values: {
        title: "My values",
        items: [
          { icon: "⚡", title: "Performance", desc: "Optimized code and fast solutions" },
          { icon: "🎯", title: "Precision", desc: "Respect deadlines and specifications" },
          { icon: "🚀", title: "Innovation", desc: "Cutting-edge technologies and creative approaches" },
          { icon: "🤝", title: "Collaboration", desc: "Transparent communication with clients" },
        ],
      },
    },
    services: {
      title: "My Services",
      subtitle: "Complete solutions for your digital needs",
      list: [
        {
          icon: "📱",
          title: "Mobile Development",
          description: "Native and cross-platform iOS and Android applications with Flutter and React Native.",
          features: ["Modern user interface", "Optimized performance", "API integration", "Store publication"],
          price: "From €800",
          duration: "2-4 weeks",
        },
        {
          icon: "💻",
          title: "Web Development",
          description: "Modern, responsive and high-performance websites and web applications.",
          features: ["Responsive design", "SEO optimized", "Enhanced security", "Hosting included"],
          price: "From €600",
          duration: "1-3 weeks",
        },
        {
          icon: "🤖",
          title: "Artificial Intelligence",
          description: "Intelligent chatbots, recommendation systems and personalized AI solutions.",
          features: ["Natural language processing", "Machine Learning", "API integration", "Model training"],
          price: "From €1200",
          duration: "3-6 weeks",
        },
        {
          icon: "⛓️",
          title: "Blockchain & Web3",
          description: "Smart contracts, DApps and blockchain solutions for your business.",
          features: ["Secure smart contracts", "Web3 integration", "Tokenization", "Security audit"],
          price: "From €1500",
          duration: "4-8 weeks",
        },
        {
          icon: "☁️",
          title: "Cloud Deployment",
          description: "Migration and deployment of your applications to the cloud with monitoring.",
          features: ["Scalable architecture", "24/7 monitoring", "Automatic backup", "Technical support"],
          price: "From €400",
          duration: "1-2 weeks",
        },
        {
          icon: "🎨",
          title: "UI/UX Design",
          description: "Modern user interface design and optimized user experience.",
          features: ["Interactive prototyping", "Design system", "User testing", "Responsive design"],
          price: "From €500",
          duration: "1-2 weeks",
        },
      ],
    },
    projects: {
      title: "Projects & Achievements",
      subtitle: "Discover my latest creations",
      featured: "Featured projects",
      all: "All projects",
      list: [
        {
          id: "comlab",
          title: "ComLab – Collaborative Innovation Platform",
          category: "Web Platform",
          description:
            "A complete platform connecting talents, experts, mentors, startups, companies and NGOs. Complete solution with intelligent matching and training system.",
          image: "/placeholder.svg?height=300&width=500",
          technologies: ["React", "Django", "PostgreSQL", "AI Matching", "WebRTC"],
          features: [
            "AI-based intelligent matching",
            "Certified training system",
            "Multilingual interface (FR/EN/KR)",
            "Project support",
            "Integrated messaging system",
            "Analytics dashboard",
          ],
          results: {
            users: "2000+ users",
            matches: "500+ connections",
            satisfaction: "98% satisfaction",
          },
          url: "https://comlab-burundi.com",
          status: "Online",
          year: "2024",
        },
        {
          id: "techsafe",
          title: "TechSafe – GBV Protection",
          category: "Mobile Application",
          description:
            "Revolutionary mobile application with AI to fight against gender-based violence (GBV). Kirundi interface with emergency alert system.",
          image: "/placeholder.svg?height=300&width=500",
          technologies: ["Flutter", "Firebase", "AI/ML", "Geolocation", "Push Notifications"],
          features: [
            "Intelligent reporting with AI",
            "GPS emergency alert system",
            "Complete Kirundi interface",
            "Legal database",
            "Community support network",
            "Data anonymization",
          ],
          results: {
            downloads: "5000+ downloads",
            alerts: "200+ alerts processed",
            impact: "Positive social impact",
          },
          status: "In development",
          year: "2024",
        },
        {
          id: "iwanje",
          title: "Iwanje – Smart Multi-vendor E-commerce",
          category: "E-commerce Platform",
          description:
            "Revolutionary e-commerce platform with integrated blockchain for services, products and real estate. Geolocation and smart AI filters.",
          image: "/placeholder.svg?height=300&width=500",
          technologies: ["Next.js", "Blockchain", "Smart Contracts", "AI Filters", "Payment Gateway"],
          features: [
            "Multi-vendor with blockchain",
            "Advanced geolocation",
            "Smart AI filters",
            "Secure multi-currency payments",
            "Decentralized reputation system",
            "Integrated real estate marketplace",
          ],
          results: {
            vendors: "100+ vendors",
            transactions: "€50000+ volume",
            growth: "200% monthly growth",
          },
          status: "Beta",
          year: "2024",
        },
        {
          id: "ndabazi",
          title: "Ndabazi App – AI Personal Assistant",
          category: "Mobile Application",
          description:
            "Intelligent personal assistant with conversational AI in Kirundi. Task management, reminders and personalized advice.",
          image: "/placeholder.svg?height=300&width=500",
          technologies: ["Flutter", "OpenAI API", "NLP", "Local Storage", "Voice Recognition"],
          features: [
            "Conversational AI in Kirundi",
            "Voice recognition",
            "Intelligent task management",
            "Personalized advice",
            "Offline mode",
            "Cloud synchronization",
          ],
          results: {
            users: "1000+ active users",
            satisfaction: "95% satisfaction",
            retention: "80% monthly retention",
          },
          downloadUrl: "#",
          status: "Available",
          year: "2023",
        },
      ],
    },
    experience: {
      title: "Professional Experience",
      subtitle: "My journey in the tech industry",
      timeline: [
        {
          year: "2024 - Present",
          title: "Lead Developer",
          company: "Kit Digital Innovation",
          location: "Kabondo, Bujumbura",
          description:
            "Technical leadership of a team of 8 developers. Design and development of innovative digital solutions for international clients.",
          achievements: [
            "40% increase in team productivity",
            "Delivery of 15+ major projects",
            "Implementation of DevOps processes",
            "Training of 5 junior developers",
          ],
        },
        {
          year: "2022 - 2024",
          title: "Senior Fullstack Developer",
          company: "TechHub Burundi",
          location: "Bujumbura",
          description:
            "Development of web and mobile applications for local and international startups. Specialization in AI and blockchain solutions.",
          achievements: [
            "Development of 20+ applications",
            "AI solutions integration in 10 projects",
            "60% reduction in development time",
            "Mentoring junior developers",
          ],
        },
        {
          year: "2021 - 2022",
          title: "Mobile Developer",
          company: "InnovateTech Solutions",
          location: "Bujumbura",
          description:
            "Specialization in Flutter and React Native mobile application development for the African market.",
          achievements: [
            "Creation of 8 mobile applications",
            "100000+ cumulative downloads",
            "50% performance optimization",
            "Advanced Flutter certification",
          ],
        },
        {
          year: "2020 - 2021",
          title: "Junior Web Developer",
          company: "WebCraft Burundi",
          location: "Bujumbura",
          description:
            "Development of websites and web applications with Django and React. Learning development best practices.",
          achievements: [
            "Development of 12 websites",
            "Mastery of Django and React",
            "Web development certification",
            "Contribution to open source projects",
          ],
        },
      ],
    },
    testimonials: {
      title: "Client Testimonials",
      subtitle: "What my clients say",
      list: [
        {
          name: "Marie Uwimana",
          position: "CEO, StartupHub Burundi",
          company: "StartupHub",
          text: "Joffre transformed our vision into an exceptional platform. His technical expertise and understanding of business needs are remarkable.",
          rating: 5,
          project: "Connection platform",
        },
        {
          name: "Jean-Claude Niyonzima",
          position: "Technical Director",
          company: "FinTech Solutions",
          text: "An exceptional developer! The mobile application he created for us exceeded all our expectations. On-time delivery and impeccable quality.",
          rating: 5,
          project: "Banking mobile application",
        },
        {
          name: "Sarah Johnson",
          position: "Product Manager",
          company: "Global Tech Inc.",
          text: "Working with Joffre was a game-changer for our project. His AI expertise helped us implement features we thought were impossible.",
          rating: 5,
          project: "AI recommendation system",
        },
        {
          name: "David Hakizimana",
          position: "Founder",
          company: "EcoTech Burundi",
          text: "Joffre doesn't just code, he advises and suggests improvements. A true technological partner for our growth.",
          rating: 5,
          project: "E-commerce platform",
        },
      ],
    },
    blog: {
      title: "Blog & News",
      subtitle: "My latest articles and tech insights",
      articles: [
        {
          id: 1,
          title: "The Future of AI in Africa: Opportunities and Challenges",
          excerpt:
            "Analysis of artificial intelligence trends on the African continent and opportunities for local developers.",
          date: "December 15, 2024",
          readTime: "8 min",
          category: "Artificial Intelligence",
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          id: 2,
          title: "Flutter vs React Native: Complete Guide 2024",
          excerpt: "Detailed comparison of the two most popular mobile development frameworks with practical examples.",
          date: "December 10, 2024",
          readTime: "12 min",
          category: "Mobile Development",
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          id: 3,
          title: "Blockchain for SMEs: Practical Use Cases",
          excerpt: "How small and medium enterprises can leverage blockchain technology to optimize their operations.",
          date: "December 5, 2024",
          readTime: "10 min",
          category: "Blockchain",
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          id: 4,
          title: "Web Performance Optimization: Advanced Techniques",
          excerpt: "Strategies and tools to significantly improve the performance of your modern web applications.",
          date: "December 1, 2024",
          readTime: "15 min",
          category: "Web Development",
          image: "/placeholder.svg?height=200&width=300",
        },
      ],
    },
    contact: {
      title: "Contact me",
      subtitle: "Ready to discuss your next project?",
      form: {
        name: "Full name",
        email: "Email",
        phone: "Phone",
        subject: "Subject",
        message: "Message",
        budget: "Estimated budget",
        timeline: "Desired timeline",
        send: "Send message",
      },
      info: {
        email: "Email",
        phone: "Phone / WhatsApp",
        location: "Location",
        availability: "Availability",
      },
      whatsapp: "WhatsApp",
      social: "Social Networks",
      availability: "Available for new projects",
    },
  },
}

export default function Portfolio() {
  const [language, setLanguage] = useState<"fr" | "en">("fr")
  const [currentTheme, setCurrentTheme] = useState<keyof typeof themes>("ocean")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [selectedProject, setSelectedProject] = useState<string | null>(null)

  const t = translations[language]
  const theme = themes[currentTheme]

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
    setMobileMenuOpen(false)
  }

  const stats = [
    { number: "50+", label: t.hero.stats.projects },
    { number: "30+", label: t.hero.stats.clients },
    { number: "5+", label: t.hero.stats.experience },
    { number: "20+", label: t.hero.stats.technologies },
  ]

  return (
    <div className={`min-h-screen bg-gradient-to-br ${theme.primary} text-white overflow-hidden`}>
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="text-2xl font-bold">
            NJ
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex space-x-6">
            {Object.entries(t.nav).map(([key, value]) => (
              <button
                key={key}
                onClick={() => scrollToSection(key === "home" ? "hero" : key)}
                className="hover:text-blue-300 transition-colors text-sm font-medium"
              >
                {value}
              </button>
            ))}
          </div>

          {/* Theme Selector & Language Toggle */}
          <div className="flex items-center space-x-3">
            {/* Theme Selector */}
            <div className="hidden md:flex space-x-1 bg-black/20 rounded-lg p-1">
              {Object.entries(themes).map(([key, themeData]) => (
                <button
                  key={key}
                  onClick={() => setCurrentTheme(key as keyof typeof themes)}
                  className={`p-2 rounded text-lg transition-all ${
                    currentTheme === key ? "bg-white/20" : "hover:bg-white/10"
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
              className="bg-white/10 border-white/20 hover:bg-white/20"
            >
              <Globe className="w-4 h-4 mr-2" />
              {language.toUpperCase()}
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="outline"
              size="sm"
              className="lg:hidden bg-white/10 border-white/20 hover:bg-white/20"
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
              className="lg:hidden bg-black/40 backdrop-blur-md border-t border-white/10"
            >
              <div className="container mx-auto px-4 py-4 space-y-2">
                {Object.entries(t.nav).map(([key, value]) => (
                  <button
                    key={key}
                    onClick={() => scrollToSection(key === "home" ? "hero" : key)}
                    className="block w-full text-left py-2 hover:text-blue-300 transition-colors"
                  >
                    {value}
                  </button>
                ))}
                {/* Mobile Theme Selector */}
                <div className="flex space-x-2 pt-2 border-t border-white/10">
                  {Object.entries(themes).map(([key, themeData]) => (
                    <button
                      key={key}
                      onClick={() => setCurrentTheme(key as keyof typeof themes)}
                      className={`p-2 rounded text-lg transition-all ${
                        currentTheme === key ? "bg-white/20" : "hover:bg-white/10"
                      }`}
                      title={themeData.name}
                    >
                      {themeData.icon}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section with Enhanced Water Animation */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Enhanced Animated Water Background */}
        <div className="absolute inset-0">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className={`absolute rounded-full bg-gradient-to-r from-${theme.accent}-400/20 to-cyan-400/20 blur-xl`}
              style={{
                width: `${150 + i * 80}px`,
                height: `${150 + i * 80}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                x: [0, 150, -150, 0],
                y: [0, -150, 150, 0],
                scale: [1, 1.3, 0.7, 1],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 15 + i * 3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div
              className={`w-40 h-40 mx-auto mb-8 rounded-full bg-gradient-to-r from-${theme.accent}-400 to-cyan-400 flex items-center justify-center text-5xl font-bold shadow-2xl`}
            >
              NJ
            </div>
            <h1
              className={`text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-${theme.accent}-400 to-cyan-400 bg-clip-text text-transparent`}
            >
              {t.hero.title}
            </h1>
            <p className={`text-2xl md:text-3xl mb-6 ${theme.text}`}>{t.hero.subtitle}</p>
            <p className="text-lg md:text-xl mb-12 text-gray-300 max-w-4xl mx-auto leading-relaxed">
              {t.hero.description}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="text-center"
                >
                  <div className={`text-3xl md:text-4xl font-bold ${theme.text} mb-2`}>{stat.number}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => scrollToSection("projects")}
                size="lg"
                className={`bg-gradient-to-r ${theme.secondary} hover:opacity-90 text-white px-8 py-4 text-lg`}
              >
                {t.hero.cta}
                <ChevronDown className="ml-2 w-5 h-5" />
              </Button>
              <Button
                onClick={() => window.open("https://wa.me/25768497372", "_blank")}
                variant="outline"
                size="lg"
                className="border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg"
              >
                <MessageCircle className="mr-2 w-5 h-5" />
                WhatsApp
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Promotional Banner */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className={`py-20 bg-gradient-to-r ${theme.secondary} relative overflow-hidden`}
      >
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">{t.promo.title}</h2>
          <p className="text-lg md:text-xl mb-8 max-w-5xl mx-auto leading-relaxed opacity-90">{t.promo.text}</p>

          <div className="grid md:grid-cols-4 gap-6 mb-10">
            {t.promo.features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center justify-center space-x-2 bg-white/10 rounded-lg py-3 px-4"
              >
                <CheckCircle className="w-5 h-5" />
                <span className="font-medium">{feature}</span>
              </motion.div>
            ))}
          </div>

          <Button
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg"
            onClick={() => window.open("https://wa.me/25768497372", "_blank")}
          >
            <MessageCircle className="mr-2 w-5 h-5" />
            {t.promo.button}
          </Button>
        </div>
      </motion.section>

      {/* Enhanced About Section */}
      <section id="about" className="py-24">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6">{t.about.title}</h2>
            <p className={`text-xl ${theme.text} mb-4`}>{t.about.subtitle}</p>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">{t.about.intro}</p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 mb-16">
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
                  <p className="text-gray-300 mb-8 leading-relaxed">{t.about.positionText}</p>

                  <div className="flex items-center mb-6">
                    <Star className={`w-8 h-8 ${theme.text} mr-3`} />
                    <h3 className={`text-2xl font-bold ${theme.text}`}>{t.about.mission}</h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed">{t.about.missionText}</p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }}>
              <Card className={`${theme.card} backdrop-blur-md h-full`}>
                <CardContent className="p-8">
                  <h3 className={`text-2xl font-bold mb-8 ${theme.text}`}>{t.about.skills}</h3>
                  <div className="space-y-6">
                    {t.about.skillsList.map((skill, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-medium text-white">{skill.name}</span>
                          <span className={`text-sm ${theme.text}`}>{skill.level}%</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
                          <motion.div
                            className={`bg-gradient-to-r ${theme.secondary} h-2 rounded-full`}
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{ duration: 1, delay: index * 0.1 }}
                          />
                        </div>
                        <p className="text-sm text-gray-400">{skill.tech}</p>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Values Section */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}>
            <h3 className={`text-3xl font-bold text-center mb-12 ${theme.text}`}>{t.about.values.title}</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {t.about.values.items.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card
                    className={`${theme.card} backdrop-blur-md text-center h-full hover:scale-105 transition-transform`}
                  >
                    <CardContent className="p-6">
                      <div className="text-4xl mb-4">{value.icon}</div>
                      <h4 className={`text-xl font-bold mb-3 ${theme.text}`}>{value.title}</h4>
                      <p className="text-gray-300 text-sm">{value.desc}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-black/20">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6">{t.services.title}</h2>
            <p className={`text-xl ${theme.text}`}>{t.services.subtitle}</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.services.list.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className={`${theme.card} backdrop-blur-md hover:scale-105 transition-all duration-300 h-full`}>
                  <CardContent className="p-8">
                    <div className="text-4xl mb-4">{service.icon}</div>
                    <h3 className={`text-2xl font-bold mb-4 ${theme.text}`}>{service.title}</h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>

                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-400">
                          <CheckCircle className={`w-4 h-4 ${theme.text} mr-2 flex-shrink-0`} />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <div className="flex justify-between items-center mb-4">
                      <div>
                        <div className={`text-lg font-bold ${theme.text}`}>{service.price}</div>
                        <div className="text-sm text-gray-400 flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {service.duration}
                        </div>
                      </div>
                    </div>

                    <Button
                      className={`w-full bg-gradient-to-r ${theme.secondary} hover:opacity-90`}
                      onClick={() => window.open("https://wa.me/25768497372", "_blank")}
                    >
                      Demander un devis
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Projects Section */}
      <section id="projects" className="py-24">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6">{t.projects.title}</h2>
            <p className={`text-xl ${theme.text}`}>{t.projects.subtitle}</p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {t.projects.list.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card
                  className={`${theme.card} backdrop-blur-md hover:scale-105 transition-all duration-300 h-full overflow-hidden`}
                >
                  <div className="relative">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className={`bg-gradient-to-r ${theme.secondary} text-white`}>{project.category}</Badge>
                    </div>
                    <div className="absolute top-4 right-4">
                      <Badge variant="outline" className="bg-black/50 text-white border-white/30">
                        {project.year}
                      </Badge>
                    </div>
                  </div>

                  <CardContent className="p-8">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className={`text-2xl font-bold ${theme.text}`}>{project.title}</h3>
                      <Badge
                        variant="outline"
                        className={`${
                          project.status === "En ligne" || project.status === "Online"
                            ? "border-green-400 text-green-400"
                            : project.status === "Beta"
                              ? "border-yellow-400 text-yellow-400"
                              : "border-blue-400 text-blue-400"
                        }`}
                      >
                        {project.status}
                      </Badge>
                    </div>

                    <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>

                    <div className="mb-6">
                      <h4 className={`font-semibold mb-3 ${theme.text}`}>Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, idx) => (
                          <Badge key={idx} variant="secondary" className="bg-white/10 text-white">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className={`font-semibold mb-3 ${theme.text}`}>Fonctionnalités clés:</h4>
                      <ul className="space-y-1">
                        {project.features.slice(0, 3).map((feature, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-400">
                            <div className={`w-1.5 h-1.5 bg-${theme.accent}-400 rounded-full mr-2 flex-shrink-0`} />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-black/20 rounded-lg">
                      {Object.entries(project.results).map(([key, value]) => (
                        <div key={key} className="text-center">
                          <div className={`text-lg font-bold ${theme.text}`}>{value}</div>
                          <div className="text-xs text-gray-400 capitalize">{key}</div>
                        </div>
                      ))}
                    </div>

                    <div className="flex gap-3">
                      {project.url && (
                        <Button
                          className={`flex-1 bg-gradient-to-r ${theme.secondary} hover:opacity-90`}
                          onClick={() => window.open(project.url, "_blank")}
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Visiter
                        </Button>
                      )}
                      {project.downloadUrl && (
                        <Button
                          variant="outline"
                          className="flex-1 border-white/30 text-white hover:bg-white/10"
                          onClick={() => window.open(project.downloadUrl, "_blank")}
                        >
                          <Download className="w-4 h-4 mr-2" />
                          APK
                        </Button>
                      )}
                      <Button
                        variant="outline"
                        className="border-white/30 text-white hover:bg-white/10"
                        onClick={() => setSelectedProject(selectedProject === project.id ? null : project.id)}
                      >
                        {selectedProject === project.id ? "Moins" : "Plus"}
                      </Button>
                    </div>

                    {/* Expanded Details */}
                    <AnimatePresence>
                      {selectedProject === project.id && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="mt-6 pt-6 border-t border-white/10"
                        >
                          <h4 className={`font-semibold mb-3 ${theme.text}`}>Toutes les fonctionnalités:</h4>
                          <ul className="space-y-2">
                            {project.features.map((feature, idx) => (
                              <li key={idx} className="flex items-center text-sm text-gray-300">
                                <CheckCircle className={`w-4 h-4 ${theme.text} mr-2 flex-shrink-0`} />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 bg-black/20">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6">{t.experience.title}</h2>
            <p className={`text-xl ${theme.text}`}>{t.experience.subtitle}</p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {t.experience.timeline.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative mb-12 last:mb-0"
              >
                <div className="flex items-center mb-4">
                  <div className={`w-4 h-4 bg-gradient-to-r ${theme.secondary} rounded-full mr-4 flex-shrink-0`} />
                  <div className={`text-lg font-bold ${theme.text}`}>{exp.year}</div>
                </div>

                <Card className={`${theme.card} backdrop-blur-md ml-8`}>
                  <CardContent className="p-8">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                      <div>
                        <h3 className={`text-2xl font-bold ${theme.text} mb-2`}>{exp.title}</h3>
                        <p className="text-lg text-gray-300 mb-1">{exp.company}</p>
                        <p className="text-sm text-gray-400 flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          {exp.location}
                        </p>
                      </div>
                    </div>

                    <p className="text-gray-300 mb-6 leading-relaxed">{exp.description}</p>

                    <div>
                      <h4 className={`font-semibold mb-3 ${theme.text}`}>Réalisations clés:</h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start text-sm text-gray-300">
                            <Award className={`w-4 h-4 ${theme.text} mr-2 mt-0.5 flex-shrink-0`} />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6">{t.testimonials.title}</h2>
            <p className={`text-xl ${theme.text}`}>{t.testimonials.subtitle}</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {t.testimonials.list.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className={`${theme.card} backdrop-blur-md h-full`}>
                  <CardContent className="p-8">
                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className={`w-5 h-5 ${theme.text} fill-current`} />
                      ))}
                    </div>

                    <blockquote className="text-gray-300 mb-6 leading-relaxed italic">"{testimonial.text}"</blockquote>

                    <div className="flex items-center">
                      <div
                        className={`w-12 h-12 bg-gradient-to-r ${theme.secondary} rounded-full flex items-center justify-center text-white font-bold mr-4`}
                      >
                        {testimonial.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </div>
                      <div>
                        <div className={`font-semibold ${theme.text}`}>{testimonial.name}</div>
                        <div className="text-sm text-gray-400">{testimonial.position}</div>
                        <div className="text-sm text-gray-500">{testimonial.company}</div>
                      </div>
                    </div>

                    <div className="mt-4 pt-4 border-t border-white/10">
                      <Badge variant="outline" className="border-white/30 text-white">
                        {testimonial.project}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-24 bg-black/20">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6">{t.blog.title}</h2>
            <p className={`text-xl ${theme.text}`}>{t.blog.subtitle}</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.blog.articles.map((article, index) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card
                  className={`${theme.card} backdrop-blur-md hover:scale-105 transition-all duration-300 h-full overflow-hidden`}
                >
                  <div className="relative">
                    <img
                      src={article.image || "/placeholder.svg"}
                      alt={article.title}
                      className="w-full h-40 object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className={`bg-gradient-to-r ${theme.secondary} text-white text-xs`}>
                        {article.category}
                      </Badge>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <h3 className={`text-lg font-bold ${theme.text} mb-3 line-clamp-2`}>{article.title}</h3>
                    <p className="text-gray-300 text-sm mb-4 line-clamp-3">{article.excerpt}</p>

                    <div className="flex justify-between items-center text-xs text-gray-400 mb-4">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {article.date}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {article.readTime}
                      </div>
                    </div>

                    <Button variant="outline" size="sm" className="w-full border-white/30 text-white hover:bg-white/10">
                      Lire l'article
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Contact Section */}
      <section id="contact" className="py-24">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6">{t.contact.title}</h2>
            <p className={`text-xl ${theme.text}`}>{t.contact.subtitle}</p>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}>
                <Card className={`${theme.card} backdrop-blur-md`}>
                  <CardHeader>
                    <CardTitle className={`text-2xl ${theme.text}`}>Envoyez-moi un message</CardTitle>
                  </CardHeader>
                  <CardContent className="p-8">
                    <form className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-2">{t.contact.form.name}</label>
                          <input
                            type="text"
                            className="w-full px-4 py-3 bg-black/20 border border-white/20 rounded-lg focus:outline-none focus:border-blue-400 text-white"
                            placeholder="Votre nom complet"
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
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-2">{t.contact.form.phone}</label>
                          <input
                            type="tel"
                            className="w-full px-4 py-3 bg-black/20 border border-white/20 rounded-lg focus:outline-none focus:border-blue-400 text-white"
                            placeholder="+257 XX XXX XXX"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-2">
                            {t.contact.form.budget}
                          </label>
                          <select className="w-full px-4 py-3 bg-black/20 border border-white/20 rounded-lg focus:outline-none focus:border-blue-400 text-white">
                            <option value="">Sélectionner</option>
                            <option value="500-1000">500€ - 1000€</option>
                            <option value="1000-3000">1000€ - 3000€</option>
                            <option value="3000-5000">3000€ - 5000€</option>
                            <option value="5000+">5000€+</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">{t.contact.form.subject}</label>
                        <input
                          type="text"
                          className="w-full px-4 py-3 bg-black/20 border border-white/20 rounded-lg focus:outline-none focus:border-blue-400 text-white"
                          placeholder="Sujet de votre message"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">{t.contact.form.message}</label>
                        <textarea
                          rows={6}
                          className="w-full px-4 py-3 bg-black/20 border border-white/20 rounded-lg focus:outline-none focus:border-blue-400 text-white resize-none"
                          placeholder="Décrivez votre projet en détail..."
                        />
                      </div>

                      <Button
                        type="submit"
                        className={`w-full bg-gradient-to-r ${theme.secondary} hover:opacity-90 py-4 text-lg`}
                      >
                        <Mail className="mr-2 w-5 h-5" />
                        {t.contact.form.send}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Contact Info */}
              <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} className="space-y-8">
                <Card className={`${theme.card} backdrop-blur-md`}>
                  <CardContent className="p-8">
                    <h3 className={`text-2xl font-bold mb-6 ${theme.text}`}>Informations de contact</h3>

                    <div className="space-y-6">
                      <div className="flex items-center">
                        <Mail className={`w-6 h-6 mr-4 ${theme.text}`} />
                        <div>
                          <p className="text-sm text-gray-400">{t.contact.info.email}</p>
                          <a
                            href="mailto:niyondikojoffreasjubu@gmail.com"
                            className={`${theme.text} hover:text-blue-200 font-medium`}
                          >
                            niyondikojoffreasjubu@gmail.com
                          </a>
                        </div>
                      </div>

                      <div className="flex items-center">
                        <Phone className={`w-6 h-6 mr-4 ${theme.text}`} />
                        <div>
                          <p className="text-sm text-gray-400">{t.contact.info.phone}</p>
                          <a href="tel:+25768497372" className={`${theme.text} hover:text-green-200 font-medium`}>
                            +257 68497372
                          </a>
                        </div>
                      </div>

                      <div className="flex items-center">
                        <MapPin className={`w-6 h-6 mr-4 ${theme.text}`} />
                        <div>
                          <p className="text-sm text-gray-400">{t.contact.info.location}</p>
                          <p className="text-white font-medium">Kabondo, Bujumbura, Burundi</p>
                        </div>
                      </div>

                      <div className="flex items-center">
                        <Clock className={`w-6 h-6 mr-4 ${theme.text}`} />
                        <div>
                          <p className="text-sm text-gray-400">{t.contact.info.availability}</p>
                          <p className="text-green-400 font-medium">{t.contact.availability}</p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-8">
                      <Button
                        className="w-full bg-green-600 hover:bg-green-700 py-4 text-lg"
                        onClick={() => window.open("https://wa.me/25768497372", "_blank")}
                      >
                        <MessageCircle className="w-5 h-5 mr-2" />
                        {t.contact.whatsapp}
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card className={`${theme.card} backdrop-blur-md`}>
                  <CardContent className="p-8">
                    <h3 className={`text-2xl font-bold mb-6 ${theme.text}`}>{t.contact.social}</h3>

                    <div className="grid grid-cols-2 gap-4">
                      <Button
                        variant="outline"
                        className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white"
                        onClick={() => window.open("#", "_blank")}
                      >
                        <Linkedin className="w-5 h-5 mr-2" />
                        LinkedIn
                      </Button>

                      <Button
                        variant="outline"
                        className="border-gray-400 text-gray-400 hover:bg-gray-400 hover:text-white"
                        onClick={() => window.open("#", "_blank")}
                      >
                        <Github className="w-5 h-5 mr-2" />
                        GitHub
                      </Button>

                      <Button
                        variant="outline"
                        className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
                        onClick={() => window.open("#", "_blank")}
                      >
                        <Facebook className="w-5 h-5 mr-2" />
                        Facebook
                      </Button>

                      <Button
                        variant="outline"
                        className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white"
                        onClick={() => window.open("#", "_blank")}
                      >
                        <Globe className="w-5 h-5 mr-2" />
                        Twitter
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="py-12 bg-black/40 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className={`text-2xl font-bold mb-4 ${theme.text}`}>Niyondiko Joffre</h3>
              <p className="text-gray-400 mb-4">
                Ingénieur en TIC spécialisé en développement Web/Mobile, IA et Blockchain.
              </p>
              <div className="flex space-x-3">
                <Button size="sm" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                  <Linkedin className="w-4 h-4" />
                </Button>
                <Button size="sm" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                  <Github className="w-4 h-4" />
                </Button>
                <Button size="sm" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                  <Facebook className="w-4 h-4" />
                </Button>
              </div>
            </div>

            <div>
              <h4 className={`font-semibold mb-4 ${theme.text}`}>Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Développement Mobile
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Développement Web
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Intelligence Artificielle
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Blockchain
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className={`font-semibold mb-4 ${theme.text}`}>Projets</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    ComLab
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    TechSafe
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Iwanje
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Ndabazi App
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className={`font-semibold mb-4 ${theme.text}`}>Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>niyondikojoffreasjubu@gmail.com</li>
                <li>+257 68497372</li>
                <li>Kabondo, Bujumbura</li>
                <li>Burundi</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 Niyondiko Joffre. Tous droits réservés. | Développé avec ❤️ en utilisant Next.js & Tailwind CSS
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
