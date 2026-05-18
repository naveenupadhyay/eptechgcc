import {
  BadgeCheck,
  BarChart3,
  BrainCircuit,
  BriefcaseBusiness,
  Building2,
  ChevronRight,
  CircleDollarSign,
  ClipboardCheck,
  Clock3,
  Code2,
  FileCheck2,
  Fingerprint,
  Globe2,
  Handshake,
  Layers3,
  LineChart,
  Link as LinkIcon,
  LockKeyhole,
  Network,
  Rocket,
  Scale,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
  Workflow,
  Zap
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type IconName =
  | "BadgeCheck"
  | "BarChart3"
  | "BrainCircuit"
  | "BriefcaseBusiness"
  | "Building2"
  | "ChevronRight"
  | "CircleDollarSign"
  | "ClipboardCheck"
  | "Clock3"
  | "Code2"
  | "FileCheck2"
  | "Fingerprint"
  | "Globe2"
  | "Handshake"
  | "Layers3"
  | "LineChart"
  | "LinkIcon"
  | "LockKeyhole"
  | "Network"
  | "Rocket"
  | "Scale"
  | "ShieldCheck"
  | "Sparkles"
  | "Target"
  | "Users"
  | "Workflow"
  | "Zap";

export const iconMap: Record<IconName, LucideIcon> = {
  BadgeCheck,
  BarChart3,
  BrainCircuit,
  BriefcaseBusiness,
  Building2,
  ChevronRight,
  CircleDollarSign,
  ClipboardCheck,
  Clock3,
  Code2,
  FileCheck2,
  Fingerprint,
  Globe2,
  Handshake,
  Layers3,
  LineChart,
  LinkIcon,
  LockKeyhole,
  Network,
  Rocket,
  Scale,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
  Workflow,
  Zap
};

export const siteContent = {
  brand: {
    name: "EleventyfirstParallel AI",
    founder: "Naveen Upadhyay",
    positioning: "Helping US startups build AI-native GCCs in India.",
    footer: "GCC Setup | AI-Native Operations | India Execution Partner",
    email: "naveen@eleventyfirstparallel.in",
    linkedin: "https://www.linkedin.com/in/naveen-u-76612210/?skipRedirect=true",
    portrait: "/nav.jpg"
  },
  intro: {
    skipLabel: "Skip Intro",
    enterLabel: "Enter Site",
    sequences: [
      {
        eyebrow: "US startup pressure",
        headline: "US startups need speed.",
        subline: "Talent. Scale. AI leverage."
      },
      {
        eyebrow: "India activation",
        headline: "India is no longer just outsourcing.",
        subline: "It is your AI-native execution hub."
      },
      {
        eyebrow: "GCC setup pipeline",
        headline: "Strategy to scale, without losing control.",
        subline: "Strategy -> Entity Setup -> Talent Build -> AI-Native Operations -> Scale"
      },
      {
        eyebrow: "Case study signal",
        headline: "Execution infrastructure, already proven.",
        subline: "50+ team. Under 3 months. 4 Agentic AI verticals."
      }
    ],
    finalHeadline: "BUILD YOUR AI-NATIVE GCC IN INDIA",
    finalSubheadline: "Product. Engineering. AI Operations. Scale.",
    metrics: [
      { value: "50+", label: "product & engineering team" },
      { value: "<3", label: "months to build" },
      { value: "4", label: "Agentic AI verticals" },
      { value: "LLMs", label: "custom workflows" }
    ],
    pipeline: [
      { label: "Strategy", icon: "Target" },
      { label: "Entity Setup", icon: "Building2" },
      { label: "Talent Build", icon: "Users" },
      { label: "AI-Native Operations", icon: "BrainCircuit" },
      { label: "Scale", icon: "Rocket" }
    ] as Array<{ label: string; icon: IconName }>
  },
  profile: {
    title: "Operator, CPTO, and India GCC Builder",
    summary:
      "Naveen Upadhyay is a product and engineering operator with 20+ years across AI, eCommerce, edTech, investment banking, enterprise identity, and global development centers. He has repeatedly built, scaled, and led India-based technology organizations for high-growth companies.",
    operatorLine:
      "The difference is not advisory theater. Naveen has personally run product, engineering, design, data, AI, and platform teams at CPTO, CTO, President Engineering, and Head of Engineering levels.",
    metrics: [
      { value: "20+", label: "years product & engineering" },
      { value: "CPTO", label: "product + technology lens" },
      { value: "4,000+", label: "Walmart India center scale exposure" },
      { value: "0-1", label: "to 100-1000 operating range" }
    ],
    points: [
      "Chief Technology Officer (GCC) at Aistra Labs, leading an AI-native GCC across Audit & Tax, Legal, Education, and Conversational AI.",
      "Chief Technology Officer (GCC) at eyewa, helping set up and scale a fully remote India-based technology organization.",
      "CTO and CPO for Boutiqaat's India-based GCC, running technology, product, design, data, and BI teams.",
      "President Engineering at BYJU'S, running integration technology across acquired companies including WhiteHat Jr, Epic, Toppr, and Tynker.",
      "Head of Engineering at Paytm, leading large-scale commerce systems for catalog, search, recommendation, inventory, serviceability, and hyperlocal commerce.",
      "Engineering leadership at Walmart eCommerce, contributing to India development center growth from 1,500 to 4,000+ people.",
      "Architect at Snapdeal during its scale journey from roughly $100M to $6.5B valuation and 50 to 1,000+ engineers."
    ],
    timeline: [
      {
        company: "Aistra Labs",
        role: "Chief Technology Officer (GCC)",
        detail: "Set up and scaled an AI-native GCC for four Agentic AI verticals, including custom LLMs, agentic workflows, and enterprise automation."
      },
      {
        company: "eyewa",
        role: "Chief Technology Officer (GCC)",
        detail: "Helped build a remote India technology organization while leading technology and product execution for a leading omnichannel eyewear player."
      },
      {
        company: "Boutiqaat",
        role: "CTO and CPO (India-based GCC)",
        detail: "Ran technology, product, design, data, and BI teams; scaled commerce systems, improved conversion, and reduced AWS infrastructure cost by 80%."
      },
      {
        company: "BYJU'S",
        role: "President Engineering",
        detail: "Led integration technology across acquired companies including WhiteHat Jr, Epic, Toppr, and Tynker as part of BYJU'S Future School."
      },
      {
        company: "Paytm",
        role: "Head of Engineering",
        detail: "Led engineering for India-scale commerce problems across billion-scale catalog, search, recommendation, inventory, and serviceability systems."
      },
      {
        company: "Walmart eCommerce",
        role: "Engineering Leadership",
        detail: "Managed cart, checkout, and digital marketing platforms while helping transform and grow the India development center from 1,500 to 4,000+ people."
      }
    ]
  },
  slides: [
    {
      id: "hero",
      kicker: "AI-native global execution infrastructure",
      title: "Build Your AI-Native GCC in India",
      body:
        "Move US work to India with an operator who has built and led India development centers across Aistra Labs, eyewa, Boutiqaat, BYJU'S, Paytm, Walmart, and Snapdeal.",
      ctas: [
        { label: "See Naveen's Track Record", target: "operator" },
        { label: "Explore the GCC Model", target: "framework", variant: "secondary" },
        { label: "View Aistra Case Study", target: "aistra", variant: "secondary" }
      ]
    },
    {
      id: "about",
      kicker: "About Naveen",
      title: "Operator, CPTO, and India GCC Builder",
      body:
        "A founder-focused partner who has actually built and led India development centers, not just advised from the outside."
    },
    {
      id: "operator",
      kicker: "Operator proof",
      title: "Built and Led India Development Centers Before GCC Became a Buzzword",
      body:
        "Naveen has operated inside the complexity US founders care about: product ownership, engineering quality, AI workflows, hiring velocity, delivery governance, platform scale, and executive accountability.",
      operatorProof: [
        {
          title: "Aistra Labs",
          description: "CTO (GCC) for an AI-native center across four Agentic AI verticals with 50+ product and engineering team members built in under 3 months.",
          icon: "BrainCircuit"
        },
        {
          title: "eyewa",
          description: "CTO (GCC) helping scale a remote India technology organization for a leading GCC/MENA omnichannel eyewear company.",
          icon: "Globe2"
        },
        {
          title: "Boutiqaat",
          description: "CTO and CPO for an India-based GCC, running product, engineering, design, data, and BI for a major MENA commerce unicorn.",
          icon: "Layers3"
        },
        {
          title: "Walmart eCommerce",
          description: "Engineering leadership exposure to one of the world's largest retail technology environments and India center growth from 1,500 to 4,000+ people.",
          icon: "Building2"
        }
      ]
    },
    {
      id: "cpto",
      kicker: "Why Naveen is different",
      title: "CPTO-Level Judgment, Not Vendor Management",
      body:
        "Most GCC vendors sell staffing. Naveen brings the judgment of someone who has owned product, architecture, delivery, cost, scale, and executive communication.",
      items: [
        "Can translate founder strategy into product, engineering, AI, and operating roadmaps",
        "Understands 0-1, 1-100, and 100-1000 stage operating problems",
        "Has led product, technology, design, data, BI, AI, and platform teams",
        "Knows how India teams should be structured for ownership, not ticket execution",
        "Has shipped at India-scale and global-scale across Paytm, Walmart, Snapdeal, BYJU'S, Boutiqaat, eyewa, and Aistra Labs",
        "Brings executive-level communication for US founders, CEOs, COOs, CTOs, and investors"
      ],
      icon: "BadgeCheck"
    },
    {
      id: "need",
      kicker: "Founder pressure",
      title: "US Startups Need Speed, Talent, and Leverage",
      items: [
        "High US product and engineering costs",
        "Difficulty scaling AI/product talent quickly",
        "Pressure to extend runway",
        "Need for faster product cycles",
        "Need for 24/7 execution velocity",
        "Founder desire for control without vendor dependency",
        "AI transformation requires new operating models"
      ],
      icon: "Zap"
    },
    {
      id: "india",
      kicker: "India as strategic infrastructure",
      title: "India Is No Longer Just Cost Advantage",
      body:
        "India can become a strategic product, engineering, AI, and operations hub for ambitious US startups.",
      items: [
        "World-class product and engineering talent",
        "Deep AI/ML and automation capability",
        "Lower burn with higher execution capacity",
        "Time-zone leverage",
        "Scalable hiring",
        "Strong startup and enterprise technology ecosystem",
        "Better strategic control than outsourcing",
        "Faster experimentation and product velocity"
      ],
      icon: "Globe2"
    },
    {
      id: "pillars",
      kicker: "What we help build",
      title: "From Offshore Team to AI-Native GCC",
      pillars: [
        {
          title: "Legal entity and operating model setup",
          description: "Choose the right path, governance structure, compliance base, and leadership rhythm.",
          icon: "Building2"
        },
        {
          title: "Product + engineering team buildout",
          description: "Build senior, accountable India teams aligned to US product strategy and delivery.",
          icon: "Code2"
        },
        {
          title: "AI-native workflows and automation",
          description: "Turn repeatable work into AI-assisted systems across product, ops, and customer workflows.",
          icon: "Workflow"
        },
        {
          title: "Governance, KPIs, cadence, and scale",
          description: "Install reporting, sprint discipline, decision rights, and operating maturity.",
          icon: "ClipboardCheck"
        }
      ]
    },
    {
      id: "aistra",
      kicker: "Case study",
      title: "AI-Native GCC Setup for Aistra Labs",
      body:
        "Led the setup and scale-up of an AI-native GCC supporting the Aistra Labs portfolio, managing end-to-end product development across four Agentic AI verticals: Audit & Tax, Legal, Education, and Conversational AI.",
      achievement: "Built and scaled a 50+ member product and engineering team in less than 3 months.",
      credibility: "Worked with founders who have taken multiple startups to multi-billion dollar IPOs in the US.",
      metrics: [
        { value: "50+", label: "team built", icon: "Users" },
        { value: "<3", label: "months", icon: "Clock3" },
        { value: "4", label: "AI verticals", icon: "Layers3" },
        { value: "Agentic", label: "AI portfolio", icon: "BrainCircuit" },
        { value: "LLM", label: "workflows", icon: "Sparkles" }
      ],
      capabilities: [
        "Customized LLMs",
        "Agentic AI workflows",
        "Audit and taxation automation",
        "Contact center automation",
        "Document-based workflow automation",
        "AI-powered enterprise process transformation"
      ]
    },
    {
      id: "models",
      kicker: "Setup models",
      title: "Flexible Paths to Build in India",
      models: [
        {
          name: "Captive GCC",
          bestFor: "Best for long-term strategic control.",
          includes: "Indian legal entity setup, compliance, direct hiring, payroll, leadership, governance.",
          icon: "Building2"
        },
        {
          name: "Employer of Record",
          bestFor: "Best for fast entry and initial hiring.",
          includes: "Useful for validating India operations before creating a full entity.",
          icon: "BriefcaseBusiness"
        },
        {
          name: "Build-Operate-Transfer",
          bestFor: "Best for companies that want speed first, ownership later.",
          includes: "We help build, operate, stabilize, and transfer the India center.",
          icon: "Handshake"
        }
      ]
    },
    {
      id: "framework",
      kicker: "Operating framework",
      title: "From Strategy to Scale",
      timeline: [
        { title: "Strategy & Operating Model", icon: "Target" },
        { title: "Entity / EOR / BOT Path Selection", icon: "Scale" },
        { title: "Talent Map & Hiring Plan", icon: "Users" },
        { title: "Product + Engineering Team Build", icon: "Code2" },
        { title: "AI-Native Workflow Design", icon: "BrainCircuit" },
        { title: "Governance, KPIs & Scale", icon: "BarChart3" }
      ]
    },
    {
      id: "now",
      kicker: "Why act now",
      title: "Extend Runway Without Slowing Ambition",
      items: [
        "Build more product for the same capital",
        "Hire senior talent faster",
        "Create resilient global execution capacity",
        "Move repeatable workflows to AI-powered teams",
        "Keep strategic control while reducing burn",
        "Increase speed from idea to shipped product",
        "Build AI-native operating leverage before competitors do"
      ],
      icon: "LineChart"
    },
    {
      id: "trust",
      kicker: "Governance & trust",
      title: "Built for Enterprise-Grade Execution",
      items: [
        "IP protection",
        "Security-first workflows",
        "Compliance and HR governance",
        "Transparent reporting",
        "Sprint cadence and delivery discipline",
        "Founder-level communication",
        "Long-term operating maturity"
      ],
      icon: "ShieldCheck"
    },
    {
      id: "fit",
      kicker: "Ideal clients",
      title: "Best Fit Companies",
      items: [
        "US startups from Series A to pre-IPO",
        "AI-first or AI-transforming companies",
        "SaaS, fintech, legaltech, edtech, healthtech, enterprise software",
        "Founder-led companies wanting strategic India presence",
        "Companies needing 20-200 person India teams",
        "Companies that want ownership, not vendor dependency"
      ],
      icon: "Fingerprint"
    },
    {
      id: "team",
      kicker: "Team",
      title: "The People Behind EleventyfirstParallel AI",
      body:
        "A compact senior team combining founder-level product and engineering leadership, strategic guidance, and people operations for India-based execution.",
      team: [
        {
          name: "Naveen Upadhyay",
          role: "Founder and CEO",
          description: "Operator, CPTO, and India GCC builder leading the product, engineering, AI-native operations, and client strategy.",
          initials: "NU",
          image: "/nav.jpg",
          linkedin: "https://www.linkedin.com/in/naveen-u-76612210/?skipRedirect=true"
        },
        {
          name: "Kamal Tripathi",
          role: "Strategic Advisor",
          description: "Advises on strategic direction, operating model maturity, and long-term GCC value creation.",
          initials: "KT",
          image: "/kamal.jpg",
          linkedin: "https://www.linkedin.com/in/kamal-tripathi-459a825/"
        },
        {
          name: "Nisha Kotwal",
          role: "HR and People Operations",
          description: "Leads people operations, hiring coordination, talent experience, and India team operating rhythm.",
          initials: "NK",
          image: "/nisha.jpg",
          linkedin: "https://www.linkedin.com/in/nisha-kotwal/"
        }
      ]
    },
    {
      id: "cta",
      kicker: "Start building",
      title: "Ready to Build Your India GCC?",
      body: "Turn India into your AI-native product, engineering, and operations advantage.",
      ctas: [
        { label: "Start a Conversation", href: "mailto:naveen@eleventyfirstparallel.in" },
        { label: "Connect on LinkedIn", href: "https://www.linkedin.com/in/naveen-u-76612210/?skipRedirect=true", variant: "secondary" }
      ]
    }
  ]
} as const;
