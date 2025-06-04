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
    { icon: 'fa-solid fa-paintbrush', title: 'Graphic Design', color: 'blue' },
    { icon: 'fa-solid fa-laptop-code', title: 'Web Development', color: 'red' },
    { icon: 'fa-solid fa-robot', title: 'Machine Learning', color: 'yellow' },
    { icon: 'fa-solid fa-chart-line', title: 'Digital Marketing', color: 'purple' }
  ];

  expertiseCards = [
    {
      icon: 'fa-solid fa-code',
      title: 'Web Development',
      description: 'Experienced in HTML, CSS, JS, Angular, Node.js, Express, Python, Django, WordPress, Shopify and more.',
      color: '#4CAF50' // Green
    },
    {
      icon: 'fa-solid fa-paintbrush',
      title: 'Graphics Design',
      description: 'Proficient in UI/UX design, Adobe XD, Figma, Logo Design, and illustrations using Illustrator.',
      color: '#FF5722' // Red
    },
    {
      icon: 'fa-solid fa-robot',
      title: 'Machine Learning',
      description: 'Applying ML algorithms to solve problems, building intelligent systems and data-driven models.',
      color: '#FFEB3B' // Yellow
    },
    {
      icon: 'fa-solid fa-bullhorn',
      title: 'Digital Marketing',
      description: 'Expertise in SEO, Social Media Management, content strategy, and driving digital campaigns.',
      color: '#9C27B0' // Purple
    }
  ];

  workExperienceCards = [
    {
      icon: 'fas fa-laptop-code', // Example Font Awesome icon for frontend development
      title: 'Web Frontend Intern',
      description:
        'Worked at Smart Moves Lab (Lahore, Pakistan) as a frontend intern, gaining expertise in HTML, CSS, Bootstrap, Tailwind, JS, Angular, and GitHub.',
      duration: 'Jan 2023 - Mar 2023',
      color: '#1E90FF', // Blue for this card
    },
    {
      icon: 'fas fa-project-diagram', // Example Font Awesome icon for project work
      title: 'Frontend Developer',
      description:
        'Employed at Smart Moves Lab (Lahore, Pakistan) where I worked on company Angular projects, completed daily tasks, created UI modules, and integrated functionality.',
      duration: 'Sep 2023 - Jul 2024',
      color: '#FF6347', // Red for this card
    },
  ];

  educationCards = [
    {
      title: "FSC Pre-Engineering",
      description: "Completed FSC Pre-Engineering from Unique College Lahore, Pakistan.",
      duration: "09/2018 - 07/2020",
      color: "#4CAF50", // Green (or any color you prefer)
      icon: "fa fa-graduation-cap" // or any other icon you choose
    },
    {
      title: "Bachelor of Science in Software Engineering",
      description: "Pursuing Bachelor of Science in Software Engineering at the University of Lahore.",
      duration: "09/2020 - 07/2024",
      color: "#2196F3", // Blue (or any color you prefer)
      icon: "fa fa-graduation-cap" // or any other icon you choose
    }
  ];

  projectCards = [
    {
      title: 'Lights Bazaar',
      description: 'An e-commerce website for selling neon signs.',
      color: 'blue',
      icon: 'fas fa-store',  // Add icon class here
      duration: '05/23 - 05/24'
    },
    {
      title: 'Opexa UK',
      description: 'A wholesale website tailored to UK-based customers.',
      color: 'green',
      icon: 'fas fa-box',  // Add icon class here
      duration: '07/23 - 07/24 (For Client)'
    },
    {
      title: 'AmazonSpace UK',
      description: 'A service website offering FBA services for sellers.',
      color: 'purple',
      icon: 'fas fa-truck',  // Add icon class here
      duration: '07/23 - 07/24 (For Client)'
    },
    {
      title: 'Safecares UK',
      description: 'A website providing home care services.',
      color: 'red',
      icon: 'fas fa-heart',  // Add icon class here
      duration: '08/24 - 10/24 (For Client)'
    },
    {
      title: 'E-commerce Website (Angular & Node.js)',
      description: 'Developed multiple e-commerce websites using Angular for the frontend and Node.js for the backend.',
      color: 'orange',
      icon: 'fas fa-laptop',  // Add icon class here
      duration: '12/2024 - Present'
    },
    {
      title: 'Brain Tumor Classification Detection',
      description: 'Developed using a fine-tuned pre-trained VGG16 model, achieving 96% accuracy.',
      color: 'cyan',
      icon: 'fas fa-brain',  // Add icon class here
      duration: '07/2024 - Present'
    },
    {
      title: 'Text Summarizer',
      description: 'Fine-tuned a pre-trained BART model, achieving 50% accuracy.',
      color: 'yellow',
      icon: 'fas fa-text-height',  // Add icon class here
      duration: '07/2024 - Present'
    },
    {
      title: 'Shopify Project',
      description: 'Making an e-commerce store for a client of skin care products using a paid theme.',
      color: 'pink',
      icon: 'fas fa-shopping-cart',  // Add icon class here
      duration: '01/2025 - Present'
    }
  ];

  webDevelopmentSkills = [
    { name: 'HTML', percentage: 90, color: '#E34F26', inView: false, displayPercentage: 0 },
    { name: 'CSS', percentage: 90, color: '#563D7C', inView: false, displayPercentage: 0 },
    { name: 'Bootstrap', percentage: 90, color: '#1572B6', inView: false, displayPercentage: 0 },
    { name: 'Tailwind', percentage: 90, color: '#38B2AC', inView: false, displayPercentage: 0 },
    { name: 'Node.js', percentage: 70, color: '#8CC84B', inView: false, displayPercentage: 0 },
    { name: 'Express', percentage: 70, color: '#00ff7b', inView: false, displayPercentage: 0 },
    { name: 'MySQL', percentage: 70, color: '#4479A1', inView: false, displayPercentage: 0 },
    { name: 'Machine Learning', percentage: 70, color: '#8E44AD', inView: false, displayPercentage: 0 }
  ];

  graphicDesigningSkills = [
    { name: 'UI/UX', percentage: 80, color: '#F9A825', inView: false, displayPercentage: 0 },
    { name: 'Logo Design', percentage: 70, color: '#FF3366', inView: false, displayPercentage: 0 },
    { name: 'Illustrations', percentage: 60, color: '#00B0FF', inView: false, displayPercentage: 0 }
  ];

  socialMediaSkills = [
    { name: 'SEO & Digital Marketing', percentage: 70, color: '#FF8C00', inView: false, displayPercentage: 0 },
    { name: 'Content Writing', percentage: 60, color: '#6A4E23', inView: false, displayPercentage: 0 },
  ];

  programmingLanguagesSkills = [
    { name: 'Javascript', percentage: 80, color: '#F7DF1E', inView: false, displayPercentage: 0 },
    { name: 'Typescript', percentage: 80, color: '#3178C6', inView: false, displayPercentage: 0 },
    { name: 'Python', percentage: 70, color: '#3776AB', inView: false, displayPercentage: 0 }
  ];

  toolsAndFrameworksSkills = [
    { name: 'Angular', percentage: 80, color: '#DD0031', inView: false, displayPercentage: 0 },
    { name: 'Django', percentage: 70, color: '#092E20', inView: false, displayPercentage: 0 },
    { name: 'Adobe XD', percentage: 75, color: '#FF61F6', inView: false, displayPercentage: 0 },
    { name: 'Figma', percentage: 70, color: '#F24E1E', inView: false, displayPercentage: 0 },
    { name: 'Illustrator', percentage: 70, color: '#ff9a00', inView: false, displayPercentage: 0 },
    { name: 'WordPress', percentage: 80, color: '#21759B', inView: false, displayPercentage: 0 },
    { name: 'Shopify', percentage: 80, color: '#21759B', inView: false, displayPercentage: 0 },
  ];
  certifications = [
    {
      title: 'Python Intermediate',
      organization: 'Sololearn',
      date: '03/2023 - 04/2023',
      icon: 'fa-brands fa-python', // Add relevant font-awesome icon
      color: '#3776AB' // Python blue
    },
    {
      title: 'Introduction to Python',
      organization: 'Sololearn',
      date: '03/2023 - 03/2023',
      icon: 'fa-brands fa-python',
      color: '#306998'
    },
    {
      title: 'Fundamentals of Digital Marketing',
      organization: 'Google Digital Garage',
      date: '05/2023 - 05/2023',
      icon: 'fa-solid fa-chart-line', // Icon for marketing or analytics
      color: '#34A853' // Google green
    }
  ];

  achievements = [
    {
      title: 'Research Paper on Brain Tumor Classification Detection',
      description: 'Approved for presentation at the 6th International Conference on Advancements of Computational Sciences.',
      date: '12/2024 - Present',
      icon: 'fa-solid fa-award', // Icon for awards or achievements
      color: '#FFD700' // Gold color
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

