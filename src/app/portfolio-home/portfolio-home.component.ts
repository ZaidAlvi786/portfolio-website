import { CommonModule } from '@angular/common';
import { Component, ElementRef, Renderer2 } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import emailjs from '@emailjs/browser';
import { MatIconModule } from '@angular/material/icon';
import 'intersection-observer';

@Component({
  selector: 'app-portfolio-home',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
  ],
  templateUrl: './portfolio-home.component.html',
  styleUrl: './portfolio-home.component.scss'
})
export class PortfolioHomeComponent {
  cards = [
    { icon: 'fa-solid fa-truck-ramp-box', title: 'Operations', color: 'blue' },
    { icon: 'fa-solid fa-boxes-stacked', title: 'Supply Chain', color: 'red' },
    { icon: 'fa-solid fa-warehouse', title: 'Fulfilment', color: 'yellow' },
    { icon: 'fa-solid fa-headset', title: 'Customer Services', color: 'purple' }
  ];

  expertiseCards = [
    {
      icon: 'fa-solid fa-briefcase',
      title: 'Operations Leadership',
      description: '17+ years leading multi-functional operations for UK-based retail brands. Expertise in SLA governance and KPI-driven execution.',
      color: '#4CAF50'
    },
    {
      icon: 'fa-solid fa-truck-fast',
      title: 'Supply Chain & Fulfilment',
      description: 'Managing end-to-end supply chain delivery, including DC operations, warehousing, distribution, and inventory accuracy.',
      color: '#FF5722'
    },
    {
      icon: 'fa-solid fa-cart-shopping',
      title: 'Buying & Merchandising',
      description: 'Expert support in product setup, PO management, and quantity validation for major UK retailers like Matalan and Debenhams.',
      color: '#FFEB3B'
    },
    {
      icon: 'fa-solid fa-comments-dollar',
      title: 'Customer Service Governance',
      description: 'Overseeing B2B/B2C services for international brands, ensuring performance standards and high customer satisfaction (NPS Champion).',
      color: '#9C27B0'
    }
  ];

  experiencePillars = [
    {
      title: 'Backend Administration',
      description: 'Leveraging a B.Com background to maintain 100% accuracy in high-stakes environments. Expert in Daily Financial Reconciliations, Data Integrity, and complex Operational Reporting.',
      icon: 'fa-solid fa-file-invoice-dollar',
      color: '#2196F3'
    },
    {
      title: 'Operations & Supply Chain',
      description: 'Expert management of end-to-end operational lifecycles. Specialized in Warehouse Coordination, 3PL negotiations, Stock Replenishment, and Amazon FBA Flow governance.',
      icon: 'fa-solid fa-truck-ramp-box',
      color: '#FF5722'
    },
    {
      title: 'Customer Excellence (CSR)',
      description: 'Award-winning leadership in service delivery. 3x NPS Champion recognized for scaling multichannel support systems and achieving 400% engagement growth.',
      icon: 'fa-solid fa-headset',
      color: '#4CAF50'
    }
  ];

  brandLogos = [
    { name: 'Abacus', icon: 'fa-solid fa-building-columns' },
    { name: 'Mobilink', icon: 'fa-solid fa-tower-cell' },
    { name: 'Toyzone.pk', icon: 'fa-solid fa-robot' },
    { name: 'Matalan', icon: 'fa-solid fa-shop' },
    { name: 'Debenhams', icon: 'fa-solid fa-bag-shopping' }
  ];

  educationCards = [
    {
      title: "Bachelor of Commerce (Accounting)",
      description: "University of the Punjab – Lahore, Pakistan.",
      duration: "Completed",
      color: "#2196F3",
      icon: "fa fa-graduation-cap"
    }
  ];

  managedServices = [
    {
      id: 'cx',
      title: 'Customer Experience (CX) & Support Strategy',
      goal: 'Transforming every interaction into a loyalty-building moment.',
      icon: 'fa-solid fa-headset',
      color: '#3b82f6',
      features: [
        'Omnichannel Support: Email, Live Chat, WhatsApp, and Voice.',
        'NPS & CSAT Champion: Data-driven strategies to boost scores.',
        'Escalation Governance: Resolution for Tier-3 technical/billing conflicts.',
        'SOP Development: Designing the "Playbook" for consistent quality.'
      ]
    },
    {
      id: 'supply-chain',
      title: 'Supply Chain, Warehouse & DC Operations',
      goal: 'Ensuring the right product reaches the right customer, every time.',
      icon: 'fa-solid fa-truck-ramp-box',
      color: '#ef4444',
      features: [
        'WMS Management: Receiving, inventory slotting, and picking/packing.',
        'DC Optimization: High-volume flow-through and dispatch coordination.',
        'Inventory Integrity: Rigorous cycle counting and reconciliation.',
        'Logistics Coordination: 3PL management & SLA compliance.'
      ]
    },
    {
      id: 'marketplace',
      title: 'Global 3rd Party Marketplace Management (3PM)',
      goal: 'Seamlessly integrating your brand into the world’s largest retailers.',
      icon: 'fa-solid fa-store',
      color: '#f59e0b',
      features: [
        'Strategic Partners: Compliance for <strong>Matalan</strong>, <strong>Voga</strong>, Secret Sales, Amazon.',
        'Platform Governance: Managed listing standards & image synchronization.',
        'International Fulfillment: Cross-border logistics & regional compliance.'
      ]
    },
    {
      id: 'buying',
      title: 'Backend Buying & Procurement Administration',
      goal: 'Acting as the technical engine for your Buying and Merchandising teams.',
      icon: 'fa-solid fa-database',
      color: '#a855f7',
      features: [
        'System Ingestion: Raw data transformed into ERP/IMS entries.',
        'PO Management: Precision lifecycle tracking from Draft to Received.',
        'Master Data Management: Cleaning catalogs to prevent system errors.',
        'Vendor Liaison: Confirming lead times and order accuracy.'
      ],
      highlight: 'You provide the data, we build the system.'
    },
    {
      id: 'digital',
      title: 'Digital Media & Creative Managed Services',
      goal: 'Maintaining a cohesive, high-converting digital brand presence.',
      icon: 'fa-solid fa-palette',
      color: '#ec4899',
      features: [
        'Graphic Design Oversight: Web banners, social assets, and marketing collateral.',
        'Digital Media Management: Posting schedules and brand engagement.',
        'UI/UX Feedback: Bridging gap between feedback and web improvements.'
      ]
    },
    {
      id: 'finance',
      title: 'Business Infrastructure & Financial Admin',
      goal: 'Providing the financial and operational backbone for growth.',
      icon: 'fa-solid fa-chart-pie',
      color: '#10b981',
      features: [
        'Accounts & Finance Support: Payables/Receivables and expense tracking.',
        'P&L Reporting: Visibility into operational costs and margins.',
        'Process Automation: Bottenecks solved via Jira, Slack, and ERP.'
      ]
    }
  ];

  detailedExperience = [
    {
      company: 'Taskaler (Clothing Brand) – UK',
      role: 'Operations Supply Chain Dispatch & Inventory Manager (B2B, B2C)',
      duration: 'March 2021 – Present',
      color: '#1E90FF',
      highlights: [
        'Build and execute strategic account plans delivering key business opportunities for Amazon and independent sellers.',
        'Drive new product launches and relationship extensions by partnering with business development and onboarding teams.',
        'Conduct deep-dive analysis and provide routine executive-level reporting on future opportunities and action plans.',
        'Manage Amazon A-Z account operations including FBA, Product Hunting, and Drop Shipping in a fast-paced environment.',
        'Lead and inspire teams to deliver process efficiencies and support personal development plans linked to performance.',
        'Manage store reconciliation and daily replenishment requirements, calling out financial risks to Line Managers.'
      ]
    },
    {
      company: 'Toyzone.pk & Elephantu.com',
      role: 'Head Of Operations Supply Chain Warehouse & Inventory',
      duration: 'Feb 2019 – Mar 2021',
      color: '#FF6347',
      highlights: [
        'Directed operational lifecycle from purchasing to final-mile dispatch, owning inventory control and warehouse governance.',
        'Launched support operations in new geographies and drove CS forecasting/budgeting processes for multi-year growth.',
        'Facilitated all internal and external audits/stock takes, addressing findings with proper clarification and adjustments.',
        'Innovated tools to scale customer engagements across multiple support channels, achieving high satisfaction and efficiency.',
        'Managed supply chain strategy, analyzing logistics data to find bottlenecks and cost-effective solutions.',
        'Supervised facilities services, maintenance activities, and tradespersons ensuring safe and harmonious working environments.'
      ]
    },
    {
      company: 'Abacus Consulting',
      role: 'Team Lead Customer Services / Floor Manager',
      duration: '2011 – 2019',
      color: '#4CAF50',
      highlights: [
        'Led a team of 34+ agents, managing dialer progress, KPI leakages, and daily performance reporting via MS Excel.',
        'Conducted daily coaching and performance reviews to develop staff and improve technical skills for new hires.',
        'Managed call center daily operations, setting targets and organizing shift patterns to ensure zero customer downtime.',
        'Published regular reports to management suggesting new strategies for performance improvement and trend adherence.',
        'Coordinated with multiple stakeholders for resolution of complex customer escalations and resource planning.'
      ]
    },
    {
      company: 'Mobilink',
      role: 'Data Entry Operator / CRO / Admin Manager',
      duration: '2006 – 2011',
      color: '#FFA500',
      highlights: [
        'Managed high-volume data entry and administrative operations ensuring 100% data integrity and SOP compliance.',
        'Assessed staff performance and provided coaching/guidance to ensure maximum efficiency in business operations.',
        'Coordinated administrative procedures to streamline processes and monitor budgetary constraints for office supplies.',
        'Provided top-tier phone support with a positive attitude, ensuring compliance with New Sales Activation/MNP SOPs.',
        'Maintained complex filing systems and protected confidential customer information through regular backups.'
      ]
    }
  ];

  webDevelopmentSkills = [
    { name: 'SLA Governance', percentage: 95, color: '#3b82f6', inView: true, displayPercentage: 95 },
    { name: 'KPI Management', percentage: 95, color: '#64748b', inView: true, displayPercentage: 95 },
    { name: 'Supply Chain Ops', percentage: 95, color: '#3178C6', inView: true, displayPercentage: 95 },
    { name: 'Warehousing (DC)', percentage: 95, color: '#38B2AC', inView: true, displayPercentage: 95 },
    { name: 'PO Management', percentage: 90, color: '#8CC84B', inView: true, displayPercentage: 90 },
    { name: 'Inventory Accuracy', percentage: 90, color: '#10b981', inView: true, displayPercentage: 90 },
    { name: '3PL Coordination', percentage: 90, color: '#4479A1', inView: true, displayPercentage: 90 },
    { name: 'Process Improvement', percentage: 85, color: '#8b5cf6', inView: true, displayPercentage: 85 }
  ];

  graphicDesigningSkills = [
    { name: 'Advanced MS Excel', percentage: 95, color: '#f59e0b', inView: true, displayPercentage: 95 },
    { name: 'ERP Systems', percentage: 85, color: '#ef4444', inView: true, displayPercentage: 85 },
    { name: 'Business Analytics', percentage: 80, color: '#0ea5e9', inView: true, displayPercentage: 80 }
  ];

  socialMediaSkills = [
    { name: 'B2B/B2C Relations', percentage: 95, color: '#f97316', inView: true, displayPercentage: 95 },
    { name: 'Workforce Planning', percentage: 90, color: '#64748b', inView: true, displayPercentage: 90 },
  ];

  programmingLanguagesSkills = [
    { name: 'English', percentage: 90, color: '#facc15', inView: true, displayPercentage: 90 },
    { name: 'Urdu', percentage: 100, color: '#3b82f6', inView: true, displayPercentage: 100 },
    { name: 'Punjabi', percentage: 95, color: '#3776AB', inView: true, displayPercentage: 95 }
  ];

  toolsAndFrameworksSkills = [
    { name: 'Administrative Management', percentage: 95, color: '#db2777', inView: true, displayPercentage: 95 },
    { name: 'Strategic Planning', percentage: 90, color: '#059669', inView: true, displayPercentage: 90 },
    { name: 'Inventory Systems', percentage: 90, color: '#d946ef', inView: true, displayPercentage: 90 },
    { name: 'Branch Administration', percentage: 95, color: '#f43f5e', inView: true, displayPercentage: 95 },
    { name: 'Compliance & Policy', percentage: 90, color: '#3b82f6', inView: true, displayPercentage: 90 },
    { name: 'Computer Proficiency', percentage: 95, color: '#64748b', inView: true, displayPercentage: 95 },
  ];

  communicationSkills = [
    { name: 'Client Acquisition', percentage: 95, color: '#f97316', inView: true, displayPercentage: 95 },
    { name: 'Commercial Development', percentage: 90, color: '#3b82f6', inView: true, displayPercentage: 90 },
    { name: 'Complaint Management', percentage: 95, color: '#10b981', inView: true, displayPercentage: 95 },
    { name: 'Presentation Skills', percentage: 90, color: '#8b5cf6', inView: true, displayPercentage: 90 },
    { name: 'Client Follow-up', percentage: 95, color: '#f59e0b', inView: true, displayPercentage: 95 },
    { name: 'Innovative Thinking', percentage: 85, color: '#6366f1', inView: true, displayPercentage: 85 },
  ];
  certifications = [
    {
      title: 'Advanced MS Excel',
      organization: 'Dashboards, KPI & Reporting',
      date: 'Professional Cert',
      icon: 'fa-solid fa-file-excel',
      color: '#1D6F42'
    },
    {
      title: 'MS Word Expert',
      organization: 'Office Proficiency',
      date: 'Certified',
      icon: 'fa-solid fa-file-word',
      color: '#2B579A'
    },
    {
      title: 'PowerPoint Specialist',
      organization: 'Visual Communications',
      date: 'Certified',
      icon: 'fa-solid fa-file-powerpoint',
      color: '#D24726'
    }
  ];

  experienceYears: number = 0;
  targetExperience: number = 17;
  growthPercentage: number = 0;
  targetGrowth: number = 400; 
  npsChampionCount: number = 0;
  targetNPSChampion: number = 3;

  achievements = [
    {
      title: 'NPS Champion',
      description: 'Awarded NPS Champion for 3 consecutive months for outstanding service quality.',
      date: 'Consecutive Winner',
      icon: 'fa-solid fa-crown',
      color: '#FFD700'
    },
    {
      title: 'Team Lead of the Month',
      description: 'Recognized for exceptional leadership and operational excellence 3 times.',
      date: 'Triple Winner',
      icon: 'fa-solid fa-medal',
      color: '#3b82f6'
    },
    {
      title: 'CRO of The Month',
      description: 'Top performer in Customer Relations and Operational quality 3 times.',
      date: 'Triple Winner',
      icon: 'fa-solid fa-star',
      color: '#10b981'
    },
    {
      title: 'CFL Winner',
      description: 'Champion of the Customer First League for elite service delivery.',
      date: 'Award Winner',
      icon: 'fa-solid fa-trophy',
      color: '#f59e0b'
    },
    {
      title: 'Team of The Month',
      description: 'Led the highest-performing department to victory in monthly KPI rankings.',
      date: 'Leadership Award',
      icon: 'fa-solid fa-users-gear',
      color: '#8b5cf6'
    },
    {
      title: 'Quality Guru',
      description: 'Recognized for excellence in service standards and operational compliance.',
      date: 'Subject Matter Expert',
      icon: 'fa-solid fa-award',
      color: '#C0C0C0'
    }
  ];

  isSidebarOpen = false;
  contactForm: FormGroup;
  loading = false;
  private startTime: number | null = null;

  constructor(private fb: FormBuilder, private renderer: Renderer2, private el: ElementRef) {
    this.contactForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      from_name: ['', [Validators.required]],
      to_name: ['Portfolio'],
      message: ['', [Validators.required]],
    });
  }

  ngOnInit() {
    if (typeof window !== 'undefined') {
      this.addIntersectionObserver();
      this.addIntersectionObserver1();
      this.initCounterObserver();
    }
  }

  initCounterObserver() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.animateCounters();
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });

    const heroSection = document.querySelector('.banner-content');
    if (heroSection) observer.observe(heroSection);
  }

  animateCounters() {
    const duration = 2000;
    const start = (timestamp: number) => {
      if (!this.startTime) this.startTime = timestamp;
      const progress = Math.min((timestamp - this.startTime) / duration, 1);
      
      const easeOutQuad = (t: number) => t * (2 - t);
      const easedProgress = easeOutQuad(progress);

      this.experienceYears = Math.floor(easedProgress * this.targetExperience);
      this.growthPercentage = Math.floor(easedProgress * this.targetGrowth);
      this.npsChampionCount = Math.floor(easedProgress * this.targetNPSChampion);

      if (progress < 1) {
        requestAnimationFrame(start);
      }
    };
    requestAnimationFrame(start);
  }

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  async send() {
    if (this.contactForm.valid) {
      // Initialize with public key
      emailjs.init("yfBukQ5y-tTdE7CWi");
      
      const sendButton = document.querySelector('button[type="submit"]') as HTMLButtonElement;
      const originalText = sendButton ? sendButton.innerText : 'Send Message';
      if (sendButton) sendButton.innerText = 'Sending...';

      this.loading = true;
      try {
        await emailjs.send("service_sg6vzm6", "template_5dko6pi", {
          from_name: this.contactForm.value.from_name,
          to_name: this.contactForm.value.to_name,
          reply_to: this.contactForm.value.email, // Kept 'email' in form but it maps to 'reply_to' in EmailJS
          message: this.contactForm.value.message,
        });
        alert("Message successfully delivered! I will get back to you soon.");
        this.contactForm.reset();
      } catch (error) {
        console.error("EmailJS Error:", error);
        alert("Transmission failed. Please use direct email: kha.alvi@gmail.com");
      } finally {
        this.loading = false;
        if (sendButton) sendButton.innerText = originalText;
      }
    } else {
      alert("Please ensure all fields are correctly populated.");
    }
  }

  addIntersectionObserver() {
    if (typeof window === 'undefined') return;
    const sections = document.querySelectorAll('.skills-category');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute('data-index'));
            const sectionHeader = entry.target.closest('div.space-y-10')?.querySelector('h2')?.textContent || '';
            let skillsArray: any[] = [];

            if (sectionHeader.includes('Operational Strategy')) {
              skillsArray = this.webDevelopmentSkills;
            } else if (sectionHeader.includes('Backend & System Admin')) {
              skillsArray = this.toolsAndFrameworksSkills;
            } else if (sectionHeader.includes('Customer Success & CX')) {
              skillsArray = this.communicationSkills;
            }

            if (skillsArray[index] && !skillsArray[index].inView) {
              skillsArray[index].inView = true;
              const interval = setInterval(() => {
                if (skillsArray[index].displayPercentage < skillsArray[index].percentage) {
                  skillsArray[index].displayPercentage++;
                } else {
                  clearInterval(interval);
                }
              }, 30);
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    sections.forEach((section) => {
      section.querySelectorAll('.animate-up[data-index]').forEach((skillBar) => {
        observer.observe(skillBar);
      });
    });
  }

  addIntersectionObserver1() {
    if (typeof window === 'undefined') return;
    const elements = document.querySelectorAll('.animate-up');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            const delay = index * 150; 
            setTimeout(() => {
              entry.target.classList.add('active');
            }, delay);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    elements.forEach((element) => observer.observe(element));
  }

  isElementInViewport(el: Element): boolean {
    const rect = el.getBoundingClientRect();
    return rect.top < window.innerHeight && rect.bottom >= 0;
  }
}
