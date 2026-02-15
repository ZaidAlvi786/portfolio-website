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

  workExperienceCards = [
    {
      icon: 'fas fa-tasks',
      title: 'Manager – Operations & Administration',
      description: 'Taskaler (UK Retail Support). Leading multi-functional teams for Customer Services, Buying & Merchandising (Matalan, Debenhams, Very). Managing DC, warehousing, and end-to-end supply chain coordination.',
      duration: 'Mar 2021 – Present',
      links: ['https://taskaler.com/'],
      color: '#1E90FF',
    },
    {
      icon: 'fas fa-warehouse',
      title: 'Head of Operations – Supply Chain, Warehouse & Inventory',
      description: 'Toyzone.pk | Elephantu.com | ISTARZ Pvt. Ltd. Directed operational lifecycle from purchasing to final-mile dispatch. Owned inventory control, warehouse governance, and 3PL negotiation.',
      duration: 'Feb 2019 – Mar 2021',
      links: ['https://www.toyzone.pk/', 'https://www.thestationerycompany.pk/'],
      color: '#FF6347',
    },
    {
      icon: 'fas fa-users-cog',
      title: 'Team Lead – Customer Services / HR / Floor Operations',
      description: 'Abacus Consulting. Managed teams of 34+ agents. Produced KPI dashboards, MPRs, and performance reports. Led hiring, training, and workforce planning.',
      duration: '2011 – 2019',
      links: ['https://abacus-bpo.com/'],
      color: '#4CAF50',
    },
    {
      icon: 'fas fa-user-tie',
      title: 'CRO / Administration Manager',
      description: 'Mobilink. Supported telecom operations through high-volume data processing and customer service delivery. Managed administrative operations and SOP compliance.',
      duration: '2006 – 2011',
      links: ['https://mobilinkbank.com/'],
      color: '#FFA500',
    }
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
    { name: 'SLA Governance', percentage: 95, color: '#E34F26', inView: true, displayPercentage: 95 },
    { name: 'KPI Management', percentage: 95, color: '#563D7C', inView: true, displayPercentage: 95 },
    { name: 'Supply Chain Ops', percentage: 95, color: '#1572B6', inView: true, displayPercentage: 95 },
    { name: 'Warehousing (DC)', percentage: 95, color: '#38B2AC', inView: true, displayPercentage: 95 },
    { name: 'PO Management', percentage: 90, color: '#8CC84B', inView: true, displayPercentage: 90 },
    { name: 'Inventory Accuracy', percentage: 90, color: '#00ff7b', inView: true, displayPercentage: 90 },
    { name: '3PL Coordination', percentage: 90, color: '#4479A1', inView: true, displayPercentage: 90 },
    { name: 'Process Improvement', percentage: 85, color: '#8E44AD', inView: true, displayPercentage: 85 }
  ];

  graphicDesigningSkills = [
    { name: 'Advanced MS Excel', percentage: 95, color: '#F9A825', inView: true, displayPercentage: 95 },
    { name: 'ERP Systems', percentage: 85, color: '#FF3366', inView: true, displayPercentage: 85 },
    { name: 'Business Analytics', percentage: 80, color: '#00B0FF', inView: true, displayPercentage: 80 }
  ];

  socialMediaSkills = [
    { name: 'B2B/B2C Relations', percentage: 95, color: '#FF8C00', inView: true, displayPercentage:  95 },
    { name: 'Workforce Planning', percentage: 90, color: '#6A4E23', inView: true, displayPercentage: 90 },
  ];

  programmingLanguagesSkills = [
    { name: 'English', percentage: 90, color: '#F7DF1E', inView: true, displayPercentage: 90 },
    { name: 'Urdu', percentage: 100, color: '#3178C6', inView: true, displayPercentage:  100 },
    { name: 'Punjabi', percentage: 95, color: '#3776AB', inView: true, displayPercentage: 95 }
  ];

  toolsAndFrameworksSkills = [
    { name: 'MS Word', percentage: 95, color: '#DD0031', inView: true, displayPercentage: 95 },
    { name: 'PowerPoint', percentage: 90, color: '#092E20', inView: true, displayPercentage: 90 },
    { name: 'Inventory Systems', percentage: 90, color: '#FF61F6', inView: true, displayPercentage: 90 },
    { name: 'Dialer Systems', percentage: 85, color: '#F24E1E', inView: true, displayPercentage: 85 },
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
      title: 'Operations & Supply Chain',
      organization: 'Executive Training',
      date: 'Various',
      icon: 'fa-solid fa-truck-ramp-box',
      color: '#306998'
    }
  ];

  achievements = [
    {
      title: 'NPS Champion',
      description: 'Awarded NPS Champion for 3 consecutive months for outstanding service quality.',
      date: 'Abacus Consulting',
      icon: 'fa-solid fa-crown',
      color: '#FFD700'
    },
    {
      title: 'Quality Guru Award',
      description: 'Recognized for excellence in service standards and operational compliance.',
      date: 'Multiple Times',
      icon: 'fa-solid fa-award',
      color: '#C0C0C0'
    }
  ];

  isSidebarOpen = false;
  contactForm: FormGroup | any;
  constructor(private fb: FormBuilder, private renderer: Renderer2, private el: ElementRef) {

    if (typeof window !== 'undefined') {
      // Add IntersectionObserver logic only if we are on the client-side
      this.addIntersectionObserver();
      this.addIntersectionObserver1();
    }
    this.contactForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      from_name: ['', [Validators.required]],
      to_name: ['Portfolio'],
      message: ['', [Validators.required]],
    })

  }

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  async send() {
    if (this.contactForm.valid) {
      emailjs.init("yfBukQ5y-tTdE7CWi");
      let response = await emailjs.send("service_sg6vzm6", "template_5dko6pi", {
        from_name: this.contactForm.value.from_name,
        to_name: this.contactForm.value.to_name,
        email: this.contactForm.value.email,
        message: this.contactForm.value.message,
      });
      alert("Message has been sent");
      this.contactForm.reset();
      console.log(response)
    } else {
      alert("Please fill in all the required fields before submitting.");
    }
  }

  addIntersectionObserver() {
    const sections = document.querySelectorAll('.skills-category');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute('data-index'));

            const sectionType = entry.target.closest('.skills-category')?.previousElementSibling?.textContent;
            let skillsArray = this.webDevelopmentSkills;

            if (sectionType?.includes('Graphic Designing')) {
              skillsArray = this.graphicDesigningSkills;
            } else if (sectionType?.includes('Social Media')) {
              skillsArray = this.socialMediaSkills;
            } else if (sectionType?.includes('Programming Languages')) {
              skillsArray = this.programmingLanguagesSkills;
            } else if (sectionType?.includes('Tools & Framework')) {
              skillsArray = this.toolsAndFrameworksSkills;
            }

            if (!skillsArray[index].inView) {
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
      { threshold: 0.5 }
    );

    sections.forEach((section) => {
      section.querySelectorAll('.skill-bar').forEach((skillBar) => {
        observer.observe(skillBar);
      });
    });
  }

  addIntersectionObserver1() {
      const elements = document.querySelectorAll('.animate-up');

      const observer = new IntersectionObserver(
          (entries) => {
              entries.forEach((entry, index) => {
                  if (entry.isIntersecting) {
                      const delay = index * 200; // Stagger animation for each card

                      setTimeout(() => {
                          entry.target.classList.add('active');
                      }, delay);

                      observer.unobserve(entry.target); // Stop observing after activation
                  }
              });
          },
          { threshold: 0.2 }
      );

      // Observe each element
      elements.forEach((element) => observer.observe(element));
      elements.forEach((element, index) => {
          if (this.isElementInViewport(element)) {
              setTimeout(() => {
                  element.classList.add('active');
              }, index * 50);
          }
      });
  }

  // **Helper function to check if an element is in the viewport**
  isElementInViewport(el: Element): boolean {
      const rect = el.getBoundingClientRect();
      return rect.top < window.innerHeight && rect.bottom >= 0;
  }




}

