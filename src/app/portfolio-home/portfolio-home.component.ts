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

  projectCards = [
    {
      title: 'SLA Optimization',
      description: 'Strengthened end-to-end coordination between buying and supply chain, improving UK retail partner delivery.',
      color: 'blue',
      icon: 'fas fa-chart-line',
      duration: 'Taskaler'
    },
    {
      title: 'Dispatch Efficiency',
      description: 'Reduced dispatch delays through process standardisation and standard operating procedures (SOPs).',
      color: 'green',
      icon: 'fas fa-shipping-fast',
      duration: 'Toyzone.pk'
    },
    {
      title: 'Team Growth',
      description: 'Achieved 400% increase in engagement and 50% growth in followers through strategic leadership.',
      color: 'purple',
      icon: 'fas fa-users',
      duration: 'Abacus'
    },
    {
      title: 'Audit Compliance',
      description: 'Successfully facilitated internal and external audits with strong compliance outcomes.',
      color: 'red',
      icon: 'fas fa-file-contract',
      duration: 'Toyzone.pk'
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
      emailjs.init("yfBukQ5y-tTdE7CWi");
      try {
        let response = await emailjs.send("service_sg6vzm6", "template_5dko6pi", {
          from_name: this.contactForm.value.from_name,
          to_name: this.contactForm.value.to_name,
          email: this.contactForm.value.email,
          message: this.contactForm.value.message,
        });
        alert("Message has been sent");
        this.contactForm.reset();
        console.log(response);
      } catch (error) {
        console.error("EmailJS Error:", error);
        alert("Failed to send message. Please try again.");
      }
    } else {
      alert("Please fill in all the required fields before submitting.");
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
