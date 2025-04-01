// Feature detail data for pricing plans

export interface FeatureDetail {
  title: string;
  description: string;
}

export interface FeatureItem {
  title: string;
  items: string[];
  details?: FeatureDetail[];
}

export const starterFeatures: FeatureItem[] = [
  {
    title: "AI-Powered Chatbot Setup",
    items: [
      "Appointment booking & confirmation",
      "Pre-loaded answers to 50 common questions"
    ],
    details: [
      {
        title: "Automated Scheduling",
        description: "Our AI chatbot integrates with your calendar to manage appointments, send confirmations, and handle cancellations without human intervention."
      },
      {
        title: "Smart Response System",
        description: "We pre-train the chatbot with 50 of your most frequently asked questions, ensuring accurate and consistent responses to client inquiries."
      },
      {
        title: "24/7 Availability",
        description: "The chatbot remains active outside business hours, capturing leads and handling basic inquiries when your staff is unavailable."
      }
    ]
  },
  {
    title: "SEO Setup",
    items: [
      "On-page optimization (meta tags, keywords, mobile-friendly design)",
      "Google Business Profile creation"
    ],
    details: [
      {
        title: "Technical SEO Implementation",
        description: "We optimize your website's technical foundation including meta tags, schema markup, and mobile responsiveness to improve search visibility."
      },
      {
        title: "Keyword Strategy",
        description: "Strategic placement of researched keywords throughout your website to boost relevance for high-intent search queries."
      },
      {
        title: "Local Business Presence",
        description: "Complete setup and optimization of your Google Business Profile to improve local search rankings and visibility on Google Maps."
      }
    ]
  },
  {
    title: "SMS Notifications",
    items: [
      "Integration with SMS system (client covers SMS carrier costs)"
    ],
    details: [
      {
        title: "Text Message Alerts",
        description: "Automated SMS system that sends confirmations and reminders to clients, reducing no-shows by up to 40%."
      },
      {
        title: "Carrier Integration",
        description: "Compatible with all major SMS carriers and platforms. You only pay for the messages you send (typical costs range from $0.01-0.05 per message)."
      }
    ]
  },
  {
    title: "Hosting & Domain",
    items: [
      "1 year of hosting + free domain registration"
    ],
    details: [
      {
        title: "Cloud Hosting Solution",
        description: "Enterprise-grade hosting with 99.9% uptime guarantee, daily backups, and SSL security certificate included."
      },
      {
        title: "Domain Registration",
        description: "Free registration of your preferred domain name (subject to availability) for the first year, with easy renewal options."
      }
    ]
  },
  {
    title: "Training",
    items: [
      "1-hour training session for staff"
    ],
    details: [
      {
        title: "Personalized Training",
        description: "Live training session with your team covering system operation, chatbot customization, and best practices for maximizing results."
      },
      {
        title: "Documentation",
        description: "Comprehensive user guide and video tutorials for future reference and training new staff members."
      }
    ]
  }
];

export const professionalFeatures: FeatureItem[] = [
  {
    title: "Everything in Starter Package",
    items: ["All features from the Starter Package included"],
    details: [{
      title: "Enhanced Capabilities",
      description: "All Starter features with expanded capacities and capabilities to support medium-sized businesses."
    }]
  },
  {
    title: "AI-Powered Voice Assistant Setup",
    items: [
      "Handles incoming/outgoing calls for appointments",
      "Basic call analytics (e.g., missed calls, peak hours)"
    ],
    details: [
      {
        title: "Intelligent Call Handling",
        description: "Natural-sounding AI voice assistant answers calls, collects information, and schedules appointments without human intervention."
      },
      {
        title: "Call Routing & Triage",
        description: "Smart routing system directs urgent calls to staff while handling routine inquiries automatically based on customizable rules."
      },
      {
        title: "Performance Analytics",
        description: "Dashboard showing call volumes, peak hours, common inquiries, and conversion rates to help optimize your business operations."
      }
    ]
  },
  {
    title: "Enhanced SEO",
    items: [
      "Local SEO (directory listings, review management setup)",
      "Competitor analysis report"
    ],
    details: [
      {
        title: "Local Search Dominance",
        description: "Comprehensive local SEO strategy including listing management across 50+ directories and location-specific keyword optimization."
      },
      {
        title: "Review Generation System",
        description: "Automated system to solicit and manage reviews across Google, Yelp, and industry-specific platforms."
      },
      {
        title: "Competitive Intelligence",
        description: "Detailed analysis of your top 3 competitors' digital strategies, keywords, and market positioning with actionable recommendations."
      }
    ]
  },
  {
    title: "SMS Integration",
    items: [
      "Automated reminders (client covers SMS costs)"
    ],
    details: [
      {
        title: "Advanced Messaging Workflows",
        description: "Sophisticated, rules-based messaging sequences for appointment reminders, follow-ups, and re-engagement of inactive clients."
      },
      {
        title: "Two-Way SMS Communication",
        description: "Clients can respond directly to SMS messages with the AI handling simple replies and notifications for staff when human intervention is needed."
      }
    ]
  },
  {
    title: "Hosting & Domain",
    items: [
      "2 years of hosting + free domain"
    ],
    details: [
      {
        title: "Extended Hosting Package",
        description: "Two full years of premium hosting with enhanced security features, priority support, and quarterly performance optimizations."
      },
      {
        title: "Domain & Email Setup",
        description: "Domain registration with DNS management and optional professional email setup (up to 5 accounts) available upon request."
      }
    ]
  }
];

export const premiumFeatures: FeatureItem[] = [
  {
    title: "Everything in Professional Package",
    items: ["All features from the Professional Package included"],
    details: [{
      title: "Enterprise-Grade Solution",
      description: "Fully expanded capabilities designed for multi-location businesses with complex needs and higher volumes."
    }]
  },
  {
    title: "Advanced AI Voice & Chatbot",
    items: [
      "24/7 call handling with call recording",
      "Dynamic AI learning (adapts to client behavior)"
    ],
    details: [
      {
        title: "Enterprise Call Management",
        description: "Sophisticated multi-line call handling with queue management, prioritization, and seamless transfer to human staff when needed."
      },
      {
        title: "Conversational Intelligence",
        description: "Advanced AI that learns from each interaction, continuously improving its responses and adapting to your clients' specific terminology and needs."
      },
      {
        title: "Call Recording & Analysis",
        description: "Secure recording of all calls with AI-powered analysis to identify trends, training opportunities, and quality assurance."
      },
      {
        title: "Multi-Department Routing",
        description: "Intelligent routing to different departments or locations based on caller needs, with customizable business logic."
      }
    ]
  },
  {
    title: "Enterprise SEO",
    items: [
      "Backlink strategy + 3 blog posts (SEO-optimized)",
      "Monthly rank tracking for 6 months"
    ],
    details: [
      {
        title: "Authority Building Strategy",
        description: "Comprehensive backlink acquisition plan targeting high-authority sites in your industry to boost domain authority and rankings."
      },
      {
        title: "Content Marketing Launch",
        description: "Three professionally written, SEO-optimized blog posts (1500+ words each) designed to target high-value keywords and establish topical authority."
      },
      {
        title: "Performance Monitoring",
        description: "Six months of detailed rank tracking for up to 50 keywords with monthly reports and strategy adjustments based on performance data."
      },
      {
        title: "Multi-Location SEO",
        description: "Specialized optimization for businesses with multiple locations, including location pages and area-specific keyword strategies."
      }
    ]
  },
  {
    title: "SMS Automation",
    items: [
      "Custom SMS templates for reminders/promotions"
    ],
    details: [
      {
        title: "Marketing Automation",
        description: "Sophisticated SMS marketing campaigns with segmentation, A/B testing, and performance analytics to maximize engagement and ROI."
      },
      {
        title: "Custom Template Library",
        description: "Library of professionally written templates for various scenarios (appointment reminders, special offers, follow-ups) that can be customized and scheduled."
      },
      {
        title: "Intelligent Scheduling",
        description: "AI-powered timing optimization that sends messages when clients are most likely to respond based on historical engagement data."
      }
    ]
  },
  {
    title: "Hosting & Domain",
    items: [
      "3 years of hosting + free domain"
    ],
    details: [
      {
        title: "Premium Extended Hosting",
        description: "Three years of enterprise-level hosting with dedicated resources, enhanced security, DDoS protection, and quarterly performance reviews."
      },
      {
        title: "Priority Support",
        description: "24/7 priority technical support with guaranteed response times and dedicated account representative for any hosting or domain issues."
      }
    ]
  }
];

export const addOnsFAQ = [
  {
    question: "How do I know which add-ons are right for my business?",
    answer: "We provide a free consultation to assess your specific needs and recommend only the add-ons that will deliver measurable ROI for your business type and size."
  },
  {
    question: "Can I add these options later?",
    answer: "Yes, all add-ons can be purchased and implemented at any time after your initial setup is complete, though some may have slightly higher pricing when purchased separately."
  },
  {
    question: "Do add-ons require additional maintenance fees?",
    answer: "Most add-ons are one-time purchases with no additional maintenance, except for ongoing services like SEO maintenance which have clearly defined terms and renewal options."
  }
];

export const planSpecificFAQ = {
  starter: [
    {
      question: "Is the Starter Package suitable for new businesses?",
      answer: "Absolutely! The Starter Package is ideal for new businesses looking to establish a professional online presence and automate basic client interactions without a large upfront investment."
    },
    {
      question: "How customizable is the AI chatbot?",
      answer: "The chatbot can be tailored to match your brand voice and handle your specific common inquiries. While the Starter Package includes 50 pre-loaded questions, you can always add more with our affordable expansion pack."
    },
    {
      question: "What happens after the first year of hosting?",
      answer: "After your included first year, hosting can be renewed at our standard rate of $99/year, which includes continued security updates and technical support."
    }
  ],
  professional: [
    {
      question: "How does the AI voice assistant sound to callers?",
      answer: "Our voice assistant uses natural-sounding speech with customizable voice options (male/female, accent preferences). Callers often can't distinguish it from a human receptionist in initial interactions."
    },
    {
      question: "Can the voice assistant handle complex scheduling scenarios?",
      answer: "Yes, the assistant can manage complex scheduling including appointment length variations, provider preferences, insurance verification prompts, and rescheduling requests."
    },
    {
      question: "What kind of reports will I receive for SEO and call analytics?",
      answer: "You'll get monthly performance dashboards showing keyword rankings, website traffic, call volumes, peak call times, common inquiries, and conversion metrics, all with actionable insights."
    }
  ],
  premium: [
    {
      question: "How does the dynamic AI learning work?",
      answer: "The system continuously analyzes interactions with your clients, identifying patterns in questions, preferences, and behaviors. It then adapts its responses and suggestions accordingly, becoming more effective over time without manual updates."
    },
    {
      question: "Is the Premium Package suitable for businesses with multiple locations?",
      answer: "It's specifically designed for multi-location businesses, with features for location-specific routing, individualized SEO for each location, and centralized reporting across all your branches."
    },
    {
      question: "What's included in the annual AI model retraining add-on?",
      answer: "This includes a comprehensive review and update of your AI model based on a full year of interaction data, incorporation of new service offerings or policies, addition of up to 100 new training scenarios, and performance optimization."
    }
  ]
};
