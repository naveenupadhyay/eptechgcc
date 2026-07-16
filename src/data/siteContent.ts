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
  Headphones,
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
  | "Headphones"
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
  Headphones,
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
    name: "Eleventyfirst Parallel Technologies",
    founder: "Naveen Upadhyay",
    positioning: "AI workflow transformation, product engineering, and enterprise automation.",
    footer: "AI Transformation | Product Engineering | Workflow Automation | India Execution",
    email: "naveen@eleventyfirstparallel.in",
    linkedin: "https://www.linkedin.com/in/naveen-u-76612210/?skipRedirect=true",
    portrait: "/naveen-operator.png"
  },
  logoCloud: {
    title: "Experience across companies leaders recognize",
    groups: [
      {
        label: "Eptech client and build relationships",
        logos: [
          { name: "Boutiqaat", domain: "boutiqaat.com", logoUrl: "/logos/boutiqaat.jpg" },
          { name: "BYJU'S", domain: "byjus.com", logoUrl: "/logos/byjus.jpg" },
          { name: "eyewa", domain: "eyewa.com", logoUrl: "/logos/eyewa.jpg" },
          { name: "Aistra Labs", domain: "aistra.com", logoUrl: "/logos/aistra-labs.jpg" }
        ]
      },
      {
        label: "Operator track record behind the company",
        logos: [
          { name: "Paytm", domain: "paytm.com", logoUrl: "/logos/paytm.jpg" },
          { name: "Walmart", domain: "walmart.com", logoUrl: "/logos/walmart.jpg" },
          { name: "JPMorgan Chase", domain: "jpmorganchase.com", logoUrl: "/logos/jpmorgan.jpg" },
          { name: "Alibaba", domain: "alibaba.com", logoUrl: "https://logo.clearbit.com/alibaba.com" }
        ]
      }
    ]
  },
  intro: {
    skipLabel: "Skip Intro",
    enterLabel: "Enter Site",
    sequences: [
      {
        eyebrow: "Enterprise AI transformation",
        headline: "Turn business workflows into AI-powered operating systems.",
        subline: "Finance, legal, sales, support, engineering, and operations can all move from manual work to intelligent execution.",
        bullets: ["Automate document-heavy processes.", "Add AI agents where teams lose time, speed, and consistency."]
      },
      {
        eyebrow: "Practical AI capability",
        headline: "Build AI products that work inside real enterprise workflows.",
        subline: "Not slideware, not generic bots: systems that parse, reason, call tools, follow SOPs, and support decisions.",
        bullets: ["Agentic RAG and workflow automation.", "Voice, chat, document, and decision-support systems."]
      },
      {
        eyebrow: "Case-study led proof",
        headline: "Built across finance, legal, conversational AI, and AI-native engineering.",
        subline: "Our strongest signal is the practical work: audit automation, contract workflows, dispute resolution, voice agents, and engineering copilots.",
        bullets: ["Finance and audit workflow automation.", "Legal AI, customer care, sales outreach, and coding-agent orchestration."]
      },
      {
        eyebrow: "Eleventyfirst Parallel Technologies",
        headline: "Operator-led AI transformation, backed by India execution capability.",
        subline: "The company combines high-scale operator judgment with practical AI product engineering and India execution.",
        bullets: ["Built around real enterprise workflow transformation.", "Transforms AI capability into shipped systems and measurable workflow outcomes."]
      }
    ],
    finalHeadline: "AI TRANSFORMATION FOR ENTERPRISE WORKFLOWS",
    finalSubheadline: "Document intelligence. Agentic workflows. Voice and chat agents. AI-native engineering. Built by operators who understand real business execution.",
    metrics: [
      { value: "4", label: "AI capability verticals" },
      { value: "3.5 yrs", label: "AI product depth" },
      { value: "Agents", label: "workflow automation" },
      { value: "India", label: "execution capability" }
    ],
    pipeline: [
      { label: "Workflow", icon: "Workflow" },
      { label: "Documents", icon: "FileCheck2" },
      { label: "Agents", icon: "BrainCircuit" },
      { label: "Governance", icon: "ShieldCheck" },
      { label: "Scale", icon: "Rocket" }
    ] as Array<{ label: string; icon: IconName }>
  },
  profile: {
    title: "Operator, CPTO, and India Product Engineering Partner",
    summary:
      "Naveen Upadhyay is a product and engineering operator with 20+ years across AI, eCommerce, edTech, investment banking, enterprise identity, and India-based technology teams. He helps founders combine CTO/CPTO-level judgment with serious product engineering execution from India.",
    operatorLine:
      "The difference is not advisory theater. Naveen has personally run product, engineering, design, data, AI, and platform teams at CPTO, CTO, President Engineering, and Head of Engineering levels.",
    metrics: [
      { value: "20+", label: "years product & engineering" },
      { value: "CPTO", label: "product + technology lens" },
      { value: "4,000+", label: "Walmart India center scale exposure" },
      { value: "0-1", label: "to 100-1000 operating range" }
    ],
    points: [
      "Chief Technology Officer at Aistra Labs, leading AI-native product development across Audit & Tax, Legal, Education, and Conversational AI.",
      "Chief Technology Officer at eyewa, helping set up and scale a fully remote India-based technology organization.",
      "CTO and CPO for Boutiqaat's India product and engineering organization, running technology, product, design, data, and BI teams.",
      "President Engineering at BYJU'S, running integration technology across acquired companies including WhiteHat Jr, Epic, Toppr, and Tynker.",
      "Head of Engineering at Paytm, leading large-scale commerce systems for catalog, search, recommendation, inventory, serviceability, and hyperlocal commerce.",
      "Engineering leadership at Walmart eCommerce, contributing to India development center growth from 1,500 to 4,000+ people.",
      "Architect at Snapdeal during its scale journey from roughly $100M to $6.5B valuation and 50 to 1,000+ engineers."
    ],
    timeline: [
      {
        company: "Aistra Labs",
        role: "Chief Technology Officer",
        detail: "Set up and scaled an AI-native product engineering organization for four Agentic AI verticals, including custom LLMs, agentic workflows, and enterprise automation."
      },
      {
        company: "eyewa",
        role: "Chief Technology Officer",
        detail: "Helped build a remote India technology organization while leading technology and product execution for a leading omnichannel eyewear player."
      },
      {
        company: "Boutiqaat",
        role: "CTO and CPO",
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
  capabilitiesPage: {
    path: "/capabilities",
    kicker: "Eptech capability stack",
    title: "AI Product Engineering Capabilities Built Across Finance, Legal, Conversational AI, and Education",
    subtitle:
      "Over the last three and a half years, Eptech has built production-grade AI systems across document intelligence, agentic automation, voice and chat agents, claims workflows, legal AI, and education support tools.",
    positioning:
      "This is the delivery foundation behind Eleventyfirst Parallel Technologies: not generic staffing, but battle-tested AI product engineering capability that can become the execution core of an India-based GCC.",
    ctas: [
      { label: "Discuss a GCC Buildout", href: "mailto:naveen@eleventyfirstparallel.in" },
      {
        label: "Book a 20-min Call",
        href: "https://calendly.com/naveen-eleventyfirstparallel/ai-product-development-discussion"
      },
      {
        label: "View F&A AI Pitch",
        href: "/finance-ai"
      }
    ],
    proofMetrics: [
      { value: "3.5 yrs", label: "AI product engineering depth" },
      { value: "4", label: "domain verticals delivered" },
      { value: "Agentic", label: "RAG, workflows, and automation" },
      { value: "Voice + Chat", label: "multi-channel conversational AI" }
    ],
    domains: [
      {
        name: "Finance, Audit & Tax Automation",
        summary:
          "Document-heavy finance workflows require more than OCR. Eptech has built semantic document intelligence, audit and taxation automation, API integrations, and agentic RAG systems that reason across complex evidence, filings, claims, and process rules.",
        icon: "FileCheck2",
        capabilities: [
          "Semantic parsing of complex financial, audit, tax, claims, and supporting documents",
          "Advanced document ingestion using libraries such as Unstructured, enriched with custom extraction and normalization logic",
          "Agentic RAG pipelines for evidence discovery, context retrieval, review assistance, and decision support",
          "Third-party API and MCP server integrations for workflow orchestration and external system actions",
          "Claims processing automation across document validation, evidence extraction, workflow routing, and status intelligence"
        ],
        outcomes: [
          "Reduced manual review effort across document-heavy processes",
          "Improved consistency in audit, taxation, and claims workflows",
          "Created reusable document intelligence components for future finance products"
        ]
      },
      {
        name: "Conversational AI & Voice Automation",
        summary:
          "Eptech has built voice and chat agents that can operate over telephony, WhatsApp, websites, and other digital endpoints, with workflow control designed around real SOPs instead of open-ended chatbot behavior.",
        icon: "Workflow",
        capabilities: [
          "Voice agents and chat agents deployable across telephony, WhatsApp, web, and custom endpoints",
          "Conversation orchestration using LangChain and LangGraph for deterministic and agentic flows",
          "LiveKit-based telephony integration, SIP trunking, and real-time voice experiences",
          "SOP-driven conversation design for sales, support, operations, and process automation",
          "Experiments and integrations with voice infrastructure such as Pipecat and related real-time agent frameworks"
        ],
        outcomes: [
          "Moved conversations from static scripts to AI-assisted operating workflows",
          "Enabled multi-channel deployment without rebuilding the core agent logic",
          "Created reusable patterns for contact center automation and AI operations"
        ]
      },
      {
        name: "Legal AI & Contract Intelligence",
        summary:
          "Eptech has built legal AI capabilities across alternate dispute resolution and contract lifecycle workflows, including machine learning models and contract management at scale for a British client through Vayliv.",
        icon: "Scale",
        capabilities: [
          "Machine learning models supporting alternate dispute resolution workflows",
          "Contract management at scale, including extraction, classification, review assistance, and workflow routing",
          "Document intelligence for legal clauses, obligations, metadata, risk signals, and operational follow-up",
          "Implementation experience for Vayliv serving a British client in contract-heavy workflows"
        ],
        outcomes: [
          "Supported legal teams with faster review and structured contract intelligence",
          "Turned unstructured legal documents into workflow-ready data",
          "Created reusable legal AI patterns for future legaltech and compliance products"
        ]
      },
      {
        name: "Education AI & Teacher Productivity",
        summary:
          "Eptech has also built practical AI tools for educators, helping teachers plan better classes, create lesson plans, and support individualized education planning for students.",
        icon: "BrainCircuit",
        capabilities: [
          "AI-assisted lesson planning for classroom preparation and structured teaching flows",
          "Support tools for individualized education programs and personalized learning needs",
          "Teacher productivity workflows that convert curriculum goals into usable classroom assets",
          "Education-focused AI experiences designed for clarity, trust, and day-to-day usability"
        ],
        outcomes: [
          "Reduced preparation load for teachers",
          "Improved structure and personalization in classroom planning",
          "Built domain patterns relevant for edtech, tutoring, and learning operations"
        ]
      }
    ],
    platformCapabilities: [
      {
        title: "Semantic Document Intelligence",
        description:
          "Beyond default parsing: structure-aware extraction, chunking, metadata enrichment, retrieval preparation, and domain-specific interpretation."
      },
      {
        title: "Agentic RAG & Workflow Automation",
        description:
          "Retrieval, reasoning, tool use, API calls, MCP integrations, workflow state, human review, and auditable outputs in one operating loop."
      },
      {
        title: "Multi-Channel Conversational AI",
        description:
          "Voice, chat, WhatsApp, web, telephony, and custom endpoints powered by SOP-aware orchestration and real-time infrastructure."
      },
      {
        title: "AI-Native Product Engineering",
        description:
          "Reusable engineering patterns across LLM apps, workflow engines, backend services, integrations, evaluation loops, and delivery governance."
      }
    ],
    architecture: {
      kicker: "Core product stack",
      title: "One Reusable AI Stack, Many Enterprise Products",
      summary:
        "Eptech’s advantage is a repeatable architecture: the same core layers can power finance automation, legal AI, claims processing, voice agents, education tools, and future GCC product pods.",
      layers: [
        {
          title: "Experience Channels",
          description: "Web apps, WhatsApp, telephony, voice agents, chat agents, internal consoles, and client-facing workflow portals.",
          nodes: ["Web", "WhatsApp", "Voice", "Telephony", "Ops Console"]
        },
        {
          title: "Agent & Workflow Orchestration",
          description: "LangGraph, LangChain, SOP-driven flows, state machines, escalation paths, and human-in-the-loop review.",
          nodes: ["LangGraph", "LangChain", "SOP Flows", "Human Review", "Evaluations"]
        },
        {
          title: "Knowledge & Document Intelligence",
          description: "Semantic parsing, Unstructured-based ingestion, chunking, metadata enrichment, vector retrieval, and agentic RAG.",
          nodes: ["Unstructured", "Semantic Parsing", "Vector Search", "Agentic RAG", "Evidence Packs"]
        },
        {
          title: "Tooling & Integration Layer",
          description: "MCP servers, third-party APIs, CRMs, ERPs, tax systems, contract repositories, claims systems, and telephony infrastructure.",
          nodes: ["MCP", "APIs", "LiveKit", "SIP", "External Systems"]
        },
        {
          title: "Governance, Security & Delivery",
          description: "Audit trails, role-based access, data controls, monitoring, QA, delivery cadence, reporting, and product analytics.",
          nodes: ["Audit Trail", "RBAC", "Monitoring", "QA", "KPIs"]
        }
      ],
      products: [
        "Audit & Tax Automation",
        "Claims Processing",
        "Legal Contract Intelligence",
        "Voice & Chat Agents",
        "Education Planning Tools",
        "Enterprise Workflow Automation"
      ],
      flow: [
        { label: "Documents + Conversations + APIs", detail: "Inputs from files, calls, chats, forms, systems, and workflow events" },
        { label: "Semantic Understanding", detail: "Domain-aware parsing, extraction, retrieval, and context assembly" },
        { label: "Agentic Execution", detail: "Reasoning, tool calls, workflow state, SOP control, and escalation" },
        { label: "Business Outcome", detail: "Audit support, claim resolution, contract operations, customer conversations, or teacher productivity" }
      ]
    },
    stack: [
      "LangChain",
      "LangGraph",
      "LiveKit",
      "SIP trunking",
      "Unstructured",
      "Agentic RAG",
      "MCP servers",
      "Third-party APIs",
      "LLM workflows",
      "Voice agents",
      "Chat agents",
      "Workflow automation"
    ],
    operatingMessage:
      "For founders evaluating India, this matters because a GCC is only valuable when it has a serious product and AI engineering spine. Eptech brings that spine: domain understanding, reusable AI components, delivery discipline, and the ability to convert ambiguous workflows into shipped systems."
  },
  financeAIPage: {
    path: "/finance-ai",
    kicker: "EPTech F&A AI transformation",
    title: "AI Agents for Finance and Accounting Operations",
    subtitle:
      "EPTech helps finance and accounting teams move from spreadsheet-heavy execution to AI-assisted workflows that are faster, more controlled, and easier to scale.",
    positioning:
      "No rip-and-replace ERP program. No generic AI demo. We build practical automation layers around the finance team's existing systems, controls, policies, and approval workflows.",
    assets: {
      pdf: "/fa-ai-pitch/EPTech_FA_AI_Pitch.pdf",
      sourceHtml: "/fa-ai-pitch/fa-ai-pitch.html",
      referralEmail: "/fa-ai-pitch/EPTech_FA_AI_Referral_Email.md"
    },
    ctas: [
      { label: "Book a 2-hour Diagnostic", href: "https://calendly.com/naveen-eleventyfirstparallel/ai-product-development-discussion" },
      { label: "Download PDF", href: "/fa-ai-pitch/EPTech_FA_AI_Pitch.pdf" },
      { label: "Email Naveen", href: "mailto:naveen@eleventyfirstparallel.in" }
    ],
    proofMetrics: [
      { value: "30-60%", label: "targeted manual effort reduction" },
      { value: "20-50%", label: "targeted cycle-time reduction" },
      { value: "4-8 wks", label: "typical pilot window" },
      { value: "Human-led", label: "approval, judgment, and control" }
    ],
    frictions: [
      "Invoices scattered across inboxes, portals, and shared drives",
      "Month-end close dependent on trackers, reconciliations, and follow-up emails",
      "FP&A teams spending days assembling data instead of analyzing performance",
      "Audit evidence spread across ERP exports, emails, documents, and tickets",
      "CFO dashboards arriving late because data pipelines are not trusted",
      "Exceptions found after the fact instead of flagged while the business can act"
    ],
    approach: [
      {
        title: "Diagnose",
        description:
          "Map the current F&A workflow, identify repeated manual work, and quantify where an AI agent can produce measurable value quickly.",
        icon: "Target" as IconName
      },
      {
        title: "Build",
        description:
          "Create custom AI agents and workflow automation connected to ERP, accounting systems, spreadsheets, documents, email, Slack, Teams, and approval tools.",
        icon: "Workflow" as IconName
      },
      {
        title: "Transform",
        description:
          "Once the first workflow proves ROI, expand into adjacent workflows so finance shifts toward exception-based review, live visibility, and cleaner audit trails.",
        icon: "Rocket" as IconName
      }
    ],
    workflows: [
      {
        name: "AP Invoice Intelligence",
        pain: "Manual capture, coding errors, approval delays",
        build: "Read invoices, match vendors and POs, suggest GL coding, route approvals, and flag exceptions",
        impact: "40-70% reduction in manual AP handling time",
        icon: "FileCheck2" as IconName
      },
      {
        name: "Month-End Close Command Center",
        pain: "Spreadsheet trackers, unclear owners, late bottlenecks",
        build: "Track close tasks, dependencies, owner reminders, evidence links, and controller dashboards",
        impact: "20-50% reduction in close coordination effort",
        icon: "ClipboardCheck" as IconName
      },
      {
        name: "Account Reconciliations",
        pain: "Manual matching and repeated variance explanations",
        build: "Match transactions, identify anomalies, draft explanations, and store support",
        impact: "30-60% reduction in reconciliation prep time",
        icon: "BadgeCheck" as IconName
      },
      {
        name: "FP&A Reporting Packs",
        pain: "Analysts spend days pulling and formatting data",
        build: "Generate management reporting packs, KPI tables, variance commentary, and source-linked narratives",
        impact: "30-70% reduction in reporting assembly time",
        icon: "LineChart" as IconName
      },
      {
        name: "Internal Audit Testing",
        pain: "Evidence gathering and workpaper drafting are manual",
        build: "Request evidence, map controls, run first-pass testing, and draft findings for human review",
        impact: "30-60% reduction in audit documentation effort",
        icon: "ShieldCheck" as IconName
      },
      {
        name: "CFO and Board Dashboards",
        pain: "Late, static reporting with limited drill-down",
        build: "Governed metrics, real-time dashboard workflows, and board-pack automation",
        impact: "Faster executive visibility and fewer ad hoc requests",
        icon: "BarChart3" as IconName
      }
    ],
    useCases: [
      {
        title: "Month-end close acceleration",
        bestFit: "Close takes 5-10 business days, status is managed in spreadsheets, and leadership wants faster financial reporting.",
        outcome: "Reduce close coordination effort by 20-50% and recurring reconciliation prep by 30-60%."
      },
      {
        title: "AP automation and invoice intelligence",
        bestFit: "High invoice volume, manual coding and approvals, duplicate invoice risk, and fragmented intake channels.",
        outcome: "Reduce manual AP handling time by 40-70% and approval cycle time by 20-40%."
      },
      {
        title: "FP&A reporting and variance commentary",
        bestFit: "Reporting packs take multiple days, actuals are manually reconciled to forecasts, and commentary quality varies.",
        outcome: "Reduce reporting assembly by 30-70% and first-draft commentary effort by 40-60%."
      },
      {
        title: "Internal audit and compliance agent",
        bestFit: "Audit teams spend significant time collecting evidence, preparing workpapers, and documenting first-pass findings.",
        outcome: "Reduce audit documentation effort by 30-60% while improving traceability and review consistency."
      }
    ],
    pilots: [
      {
        name: "Close and Reconciliation Agent",
        duration: "4-6 weeks",
        scope: ["Close checklist and owner tracking", "Reconciliation support", "Variance explanation drafts", "Evidence links and audit trail"]
      },
      {
        name: "AP Invoice and Approval Agent",
        duration: "4-8 weeks",
        scope: ["Invoice extraction", "Vendor and PO matching", "GL coding suggestions", "Exception detection", "Approval routing"]
      },
      {
        name: "FP&A Reporting Agent",
        duration: "4-6 weeks",
        scope: ["Actuals, budget, and forecast ingestion", "KPI and variance tables", "Commentary drafts", "CFO dashboard prototype"]
      },
      {
        name: "Internal Audit Evidence Agent",
        duration: "6-8 weeks",
        scope: ["Control mapping", "Evidence request tracking", "Sample support review", "Workpaper and finding draft support"]
      }
    ],
    governance: [
      "Role-based access controls",
      "Data minimization",
      "Human approval gates",
      "Source-linked outputs",
      "Audit logs",
      "Exception queues",
      "Segregation-of-duties awareness",
      "Client-specific policies and thresholds"
    ],
    diagnostic: {
      title: "Start with a 2-hour F&A AI diagnostic",
      description:
        "We map current finance workflows, identify the top three automation opportunities, estimate likely effort and cycle-time impact, and recommend the fastest pilot to prove ROI.",
      deliverables: ["Workflow map", "Automation opportunity shortlist", "ROI hypothesis", "Pilot recommendation"]
    }
  },
  aiNativeEngineeringPage: {
    path: "/ai-native-engineering",
    kicker: "AI-native engineering teams",
    title: "One AI Engineering Stack, Two Adoption Paths",
    subtitle:
      "The same AI stack adapts to two very different realities: adding an AI execution layer to a large existing engineering organization, or designing a new startup engineering operating model from day zero.",
    banner: "/ai-native-engineering-banner.svg",
    stackLink: "/stack",
    cards: [
      {
        label: "Large existing engineering org",
        title: "AI layer on top of complex engineering reality",
        summary:
          "A mature engineering organization already has hundreds of tools, repositories, dashboards, runbooks, approval flows, platform services, security rules, and undocumented tribal knowledge. AI-native engineering here should not force disruption. It should become an intelligent execution layer that makes the existing system easier to understand, operate, govern, and improve.",
        stackFit:
          "The stack is integration-heavy: experience channels connect through Slack, Teams, Jira, GitHub, GitLab, Confluence, internal portals, observability tools, CI/CD, cloud platforms, data warehouses, security tools, and internal APIs. Agentic RAG compresses documentation, tickets, logs, code, and architecture decisions into usable context.",
        bestPilots: [
          "Engineering knowledge assistant across repos, docs, tickets, and architecture decisions",
          "Incident response copilot that summarizes logs, traces, recent deploys, ownership, and runbooks",
          "PR and release readiness agent for quality, security, test coverage, and architecture drift",
          "Legacy system understanding agent for onboarding, migration, and dependency analysis",
          "Support-to-engineering triage agent that connects customer issues to code, owners, and fixes"
        ],
        outcomes: [
          "Lower coordination tax",
          "Faster onboarding",
          "Reduced investigation time",
          "Better delivery visibility",
          "Governed AI adoption without breaking existing workflows"
        ]
      },
      {
        label: "New startup",
        title: "AI-native engineering operating model from day zero",
        summary:
          "A new startup has the advantage of low legacy drag. Instead of bolting AI onto chaos later, the team can design product development, engineering, QA, support feedback, architecture documentation, and delivery governance around AI-native workflows from the beginning.",
        stackFit:
          "The stack is cleaner and lighter: GitHub, Linear or Jira, Slack, Notion or Confluence, analytics, cloud, support, CRM, and founder dashboards. Every customer conversation, product decision, roadmap item, bug, and architecture choice can become structured organizational memory from the start.",
        bestPilots: [
          "Product spec to engineering task generation",
          "AI-assisted coding, test generation, and regression checks",
          "Customer feedback to roadmap and sprint intelligence",
          "Founder dashboard across product velocity, bugs, support themes, and delivery risk",
          "Lightweight architecture documentation and evaluation loops"
        ],
        outcomes: [
          "Faster shipping",
          "Smaller but higher-leverage teams",
          "Cleaner product memory",
          "Founder-level visibility",
          "Less operational debt as the company scales"
        ]
      }
    ]
  },
  slides: [
    {
      id: "hero",
      kicker: "AI transformation + execution capability",
      title: "Transform Enterprise Workflows with AI",
      body:
        "We help enterprises and ambitious startups turn manual, document-heavy, conversation-heavy, and engineering-heavy workflows into AI-powered operating systems.",
      ctas: [
        { label: "View Case Studies", target: "case-studies", variant: "secondary" },
        { label: "Explore Capabilities", target: "services" },
        { label: "Start a Conversation", href: "mailto:naveen@eleventyfirstparallel.in", variant: "secondary" }
      ]
    },
    {
      id: "about",
      kicker: "What we build",
      title: "AI Systems for Real Business Workflows",
      body:
        "Eleventyfirst Parallel Technologies combines product engineering, AI architecture, workflow automation, and India execution capability to build practical AI systems that teams can actually use."
    },
    {
      id: "operator",
      kicker: "Operator credibility",
      title: "Led by an Operator Who Has Built at Scale",
      body:
        "The company is operator-led, which helps us design AI transformation around business reality: teams, processes, cost, adoption, governance, and delivery.",
      operatorProof: [
        {
          title: "Scale-company operator",
          description: "Experience across Snapdeal, Paytm, BYJU'S, Boutiqaat, eyewa, Aistra Labs, Walmart, JPMorgan, and Alibaba ecosystem exposure.",
          icon: "Rocket"
        },
        {
          title: "Product + engineering depth",
          description: "Owned product, engineering, architecture, design, data, BI, platform scale, cost optimization, and executive communication.",
          icon: "BadgeCheck"
        },
        {
          title: "Enterprise workflow judgment",
          description: "Understands how AI must fit into existing tools, compliance needs, human review, delivery cadence, and operating metrics.",
          icon: "Users"
        },
        {
          title: "India execution capability",
          description: "Builds with product-minded India teams that can ship AI products, integrations, automation, and production workflows.",
          icon: "ShieldCheck"
        }
      ]
    },
    {
      id: "cpto",
      kicker: "Transformation lens",
      title: "Where AI Creates Enterprise Leverage",
      body:
        "The opportunity is not only chatbots. It is redesigning the way work moves through documents, decisions, conversations, approvals, engineering tasks, and customer interactions.",
      items: [
        "Document-heavy workflows become semantic extraction, reasoning, reconciliation, and review systems",
        "Support and sales workflows become voice and chat agents that follow SOPs and escalate intelligently",
        "Legal and compliance workflows become contract, evidence, clause, and decision-support systems",
        "Engineering workflows become context-aware coding-agent orchestration with tests, reviews, and release gates",
        "Operations workflows become tool-calling agents connected to APIs, MCP servers, CRMs, ERPs, and internal systems",
        "Leadership gets dashboards, audit trails, evaluation loops, and measurable productivity outcomes"
      ],
      icon: "BadgeCheck"
    },
    {
      id: "services",
      kicker: "Core AI capabilities",
      title: "From AI Pilots to Production Workflow Systems",
      pillars: [
        {
          title: "Document Intelligence",
          description: "Semantic parsing, evidence extraction, filings analysis, contract review, claims processing, audit trails, and human-in-the-loop review.",
          icon: "FileCheck2"
        },
        {
          title: "Agentic Workflows",
          description: "AI agents that reason over context, call tools, follow SOPs, integrate with APIs/MCP servers, and execute governed business processes.",
          icon: "BrainCircuit"
        },
        {
          title: "Conversational AI",
          description: "Voice and chat agents for customer care, sales outreach, WhatsApp, telephony, web, contact centers, escalation, and workflow completion.",
          icon: "Headphones"
        },
        {
          title: "AI-Native Engineering",
          description: "Context and control layers for coding agents, repo knowledge, tests, evals, MCP tools, architecture rules, and release learning loops.",
          icon: "Workflow"
        }
      ]
    },
    {
      id: "case-studies",
      kicker: "Case studies",
      title: "Practical Examples from Four Years of AI Engineering",
      body:
        "Examples from product engineering work across finance, legal, sales, customer care, and engineering teams. This is the capability proof, not a generic AI pitch.",
      caseStudies: [
        {
          title: "Finance, Audit and Tax",
          description: "Audit-firm application for public and private company audits: parsing filings and prior filings, reading financials, and running reconciliation through Java and Python automation.",
          tags: ["Filings", "Financial parsing", "Java automation", "Python automation", "Audit trails"],
          icon: "CircleDollarSign"
        },
        {
          title: "Legal AI",
          description: "Contract negotiation at scale plus alternate dispute resolution workflows using LLMs, machine learning models, and structured decision trees.",
          tags: ["Contract negotiation", "ADR", "LLMs", "ML models", "Decision trees"],
          icon: "Scale"
        },
        {
          title: "Conversational AI",
          description: "Customer care support for a Dubai government entity and a sales outreach engine where voice agents call customers, qualify intent, and route follow-up.",
          tags: ["Voice agents", "Customer care", "Sales outreach", "Telephony", "Escalation"],
          icon: "Headphones"
        },
        {
          title: "AI-Native Engineering",
          description: "A context and control layer that orchestrates coding agents, repo knowledge, architecture rules, MCP tools, tests, evals, release gates, and human review.",
          tags: ["Claude Code", "Cursor", "LangGraph/LangChain", "MCP", "Evals"],
          icon: "BrainCircuit"
        }
      ]
    },
    {
      id: "ai-stack",
      kicker: "AI stack",
      title: "A Practical Stack for Enterprise AI Workflows",
      body:
        "We design the stack around the workflow: data ingestion, semantic parsing, vector and graph memory, agent runtimes, tool calling, evaluation, security, and human review.",
      items: [
        "Document ingestion with OCR, Unstructured-style parsing, chunking, metadata, and extraction pipelines",
        "RAG, agentic RAG, workflow state, vector search, structured databases, and knowledge graphs where useful",
        "Agent runtimes using LangGraph, LangChain, tool calling, MCP integrations, queues, and workflow services",
        "Model layer across commercial LLMs, open models, embeddings, rerankers, speech, and domain-specific classifiers",
        "Evaluation, observability, audit trails, prompt/version control, human approval, and policy guardrails"
      ],
      icon: "Target"
    },
    {
      id: "india",
      kicker: "Execution model",
      title: "AI Product Engineering from India, with Operator Control",
      body:
        "The India advantage is not cheap outsourcing. It is building a serious AI product engineering engine that can move from workflow diagnosis to production systems.",
      items: [
        "Senior product-minded engineers who understand workflow context and business outcomes",
        "AI, data, backend, frontend, QA, DevOps, and automation capability in one execution pod",
        "Faster experimentation across pilots, proof-of-value, integrations, and production releases",
        "Operator-level review around architecture, quality, cost, security, and adoption risk",
        "A path from project team to dedicated AI capability center when the business is ready"
      ],
      icon: "Globe2"
    },
    {
      id: "framework",
      kicker: "Operating model",
      title: "From Workflow Diagnosis to Production AI",
      timeline: [
        { title: "Map the workflow, users, documents, tools, decisions, and failure points", icon: "Workflow" },
        { title: "Identify AI leverage: extraction, reasoning, agents, automation, or conversation", icon: "BrainCircuit" },
        { title: "Design the architecture, data flow, model layer, integrations, and human controls", icon: "Network" },
        { title: "Build a pilot with real workflow data, evals, dashboards, and review loops", icon: "ClipboardCheck" },
        { title: "Integrate with enterprise systems, APIs, MCP tools, and operating cadence", icon: "LinkIcon" },
        { title: "Scale into production with governance, observability, security, and training", icon: "ShieldCheck" }
      ]
    },
    {
      id: "fit",
      kicker: "Best fit",
      title: "Best Fit",
      items: [
        "Enterprises with document-heavy finance, audit, tax, compliance, claims, or legal workflows",
        "Companies building AI agents for customer care, sales outreach, operations, or internal productivity",
        "Technology teams adopting AI-native engineering, coding agents, evals, and release automation",
        "AI-first or AI-transforming companies that need product engineering depth from India",
        "Leadership teams that want practical workflow outcomes rather than generic AI experimentation",
        "Organizations that need operator judgment, fast pilots, and a path to production scale"
      ],
      icon: "Fingerprint"
    },
    {
      id: "team",
      kicker: "Team",
      title: "The People Behind Eleventyfirst Parallel Technologies",
      body:
        "A compact team around Naveen: AI product engineering leadership, strategic guidance, hiring discipline, people operations, and India execution support.",
      team: [
        {
          name: "Naveen Upadhyay",
          role: "Founder and CEO",
          description: "Operator leading AI transformation strategy, product architecture, workflow automation, AI-native engineering, India team buildout, and client execution.",
          initials: "NU",
          image: "/naveen-operator.png",
          linkedin: "https://www.linkedin.com/in/naveen-u-76612210/?skipRedirect=true"
        },
        {
          name: "Kamal Tripathi",
          role: "Strategic Advisor",
          description: "Advises on strategic direction, operating model maturity, enterprise relationships, and long-term value creation.",
          initials: "KT",
          image: "/kamal.jpg",
          linkedin: "https://www.linkedin.com/in/kamal-tripathi-459a825/"
        },
        {
          name: "Nisha K.",
          role: "HR and People Operations",
          description: "Leads people operations, hiring coordination, talent experience, and India team operating rhythm.",
          initials: "NK",
          image: "/nisha.jpg"
        }
      ]
    },
    {
      id: "cta",
      kicker: "Start transforming",
      title: "Ready to Turn a Workflow into an AI System?",
      body: "Bring operator-led AI product engineering into your business. We can map the workflow, identify AI leverage, build the pilot, integrate the stack, and scale it through an India execution team.",
      ctas: [
        { label: "Start a Conversation", href: "mailto:naveen@eleventyfirstparallel.in" },
        { label: "Connect on LinkedIn", href: "https://www.linkedin.com/in/naveen-u-76612210/?skipRedirect=true", variant: "secondary" }
      ]
    }
  ]
} as const;
