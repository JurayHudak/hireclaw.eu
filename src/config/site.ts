export const siteConfig = {
  name: "Max",
  tagline: "Where OpenClaw Meets N8N and CRM",
  description: "Available 24/7 to help with coding, automation, data analysis, web scraping, and more.",

  mcpServers: [
    {
      name: "Twenty CRM",
      description: "Full CRM integration — manage companies, people, opportunities, tasks, and notes via chat",
      icon: "💼",
      commands: [
        "Find me the best opportunity for [product]",
        "Add a note to opportunity [name]",
        "List all companies with open deals",
        "Create a task for the sales team"
      ]
    },
    {
      name: "n8n Workflows",
      description: "Trigger, monitor, and manage n8n automation workflows",
      icon: "⚡",
      commands: [
        "Show my active workflows",
        "Run the job posting workflow",
        "Check n8n execution history"
      ]
    },
    {
      name: "PostgreSQL + Vector DB",
      description: "Vector memory storage and database operations",
      icon: "🗄️",
      commands: [
        "Search my memory for [topic]",
        "Store this conversation as context",
        "Query the leads database"
      ]
    },
    {
      name: "Apify Scraper",
      description: "Web scraping and data extraction at scale",
      icon: "🌐",
      commands: [
        "Scrape job listings from [site]",
        "Extract company data from [URL]",
        "Monitor competitor prices"
      ]
    },
    {
      name: "AgentMail",
      description: "Send and receive emails through natural chat",
      icon: "📧",
      commands: [
        "Send email to [recipient]",
        "Check my inbox for new leads",
        "Reply to that email about [topic]"
      ]
    },
    {
      name: "File & Code Management",
      description: "Read, write, edit code and manage project files",
      icon: "📁",
      commands: [
        "Update the README with new features",
        "Check git status on [project]",
        "Create a new workflow file"
      ]
    }
  ],

  containers: [
    {
      name: "n8n (Main + Worker)",
      description: "Workflow automation engine with queue-based processing",
      icon: "⚙️"
    },
    {
      name: "Twenty CRM",
      description: "Full-stack CRM with companies, deals, tasks, and AI features",
      icon: "💼"
    },
    {
      name: "PostgreSQL + pgvector",
      description: "Database with vector similarity search for AI memory",
      icon: "🗄️"
    },
    {
      name: "Redis",
      description: "Job queue management for n8n workflow execution",
      icon: "📬"
    },
    {
      name: "Prometheus + Grafana",
      description: "System monitoring and visualization dashboards",
      icon: "📊"
    },
    {
      name: "Caddy + Tailscale",
      description: "Reverse proxy with automatic HTTPS and secure tunnels",
      icon: "🔒"
    },
    {
      name: "OpenClaw Gateway",
      description: "AI orchestration layer connecting chat to all services",
      icon: "🤖"
    }
  ],

  capabilities: [
    {
      emoji: "💻",
      title: "Coding & Automation",
      description: "n8n workflows, Python, bash, full-stack development"
    },
    {
      emoji: "📊",
      title: "CRM & Lead Management",
      description: "Twenty CRM, opportunities, notes, tasks — all from chat"
    },
    {
      emoji: "🤖",
      title: "AI Agent Operations",
      description: "Manage workflows, trigger automations, query databases"
    },
    {
      emoji: "🧾",
      title: "System Administration",
      description: "Server management, Docker, backups, monitoring"
    },
    {
      emoji: "📝",
      title: "Content Creation",
      description: "Writing, documentation, invoices, reports"
    },
    {
      emoji: "🌐",
      title: "Research & Analysis",
      description: "Web search, trend analysis, market research"
    }
  ],

  deployment: [
    {
      emoji: "🖥️",
      title: "Your VPS Server",
      description: "Hetzner hosting, 8GB RAM, reliable infrastructure",
      price: "€5/month",
      benefit: "Ready for production workloads"
    },
    {
      emoji: "🤖",
      title: "AI Model Access",
      description: "High-quality AI models for advanced tasks",
      price: "€10/month",
      benefit: "Flexible, scalable intelligence"
    }
  ],

  benefits: [
    {
      emoji: "💡",
      title: "Available 24/7",
      description: "Access me anytime via Telegram, Slack, or direct message. I'm always ready to help with your projects, answer questions, or handle routine tasks."
    },
    {
      emoji: "🧠",
      title: "CRM-Powered Memory",
      description: "Every lead, deal, and customer interaction stored in Twenty CRM. Ask me to find opportunities, add notes, or update records — all from chat."
    },
    {
      emoji: "🔐",
      title: "Data Privacy",
      description: "Your information stays secure. I never share or sell your data. Your workspace and conversations are private."
    },
    {
      emoji: "🚀",
      title: "Continuous Learning",
      description: "I improve with every interaction. The more we work together, the better I understand your needs and preferences."
    },
    {
      emoji: "💼",
      title: "Business Ready",
      description: "Lead generation, invoicing, project management, automation workflows — ready for real business use cases."
    }
  ],

  contact: {
    email: "juraj@agentmail.to",
    telegram: "@openclaw"
  }
}
