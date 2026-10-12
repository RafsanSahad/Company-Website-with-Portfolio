// script.js - Add your custom JavaScript here 

// Global variables
const projectData = {
  1: {
    title: 'Portfolio Animation',
    description: 'Showcase of my animation and motion graphics work',
    tech: ['After Effects', 'Motion Graphics', 'Animation'],
    demo: 'https://youtu.be/Jv_u1frLJTQ',
    category: 'animation',
    thumbnail: 'https://i.ytimg.com/vi/Jv_u1frLJTQ/maxresdefault.jpg'
  },
  2: {
    title: 'Animation Projects',
    description: 'Collection of animation and motion graphics work',
    tech: ['After Effects', 'Motion Graphics', 'Animation'],
    demo: 'https://flic.kr/s/aHBqjzKSvi',
    category: 'animation',
    thumbnail: 'https://live.staticflickr.com/65535/53319919089_3WooFE.jpg'
  },
  3: {
    title: 'Character Design',
    description: 'Collection of character designs and illustrations',
    tech: ['Illustrator', 'Character Design', '2D Art'],
    demo: 'https://flic.kr/s/aHBqjzEsxq',
    category: 'design',
    thumbnail: 'https://live.staticflickr.com/65535/53319919089_3WooFE.jpg'
  },
  4: {
    title: 'GitHub Projects',
    description: 'Collection of coding and development projects',
    tech: ['Python', 'C++', 'Web Development'],
    demo: 'https://github.com/RafsanSahad',
    category: 'code',
    thumbnail: 'https://opengraph.githubassets.com/RafsanSahad'
  }
};

// Testimonial Data
const testimonialData = [
  {
    name: "Emily Rodriguez",
    role: "Creative Director",
    image: "https://ui-avatars.com/api/?name=Emily+Rodriguez&background=007bff&color=fff",
    rating: 5,
    quote: "Rafsan's character designs brought our project to life. His attention to detail and creative vision exceeded our expectations. A true professional!"
  },
  {
    name: "David Kim",
    role: "Animation Studio Lead",
    image: "https://ui-avatars.com/api/?name=David+Kim&background=00c6ff&color=fff",
    rating: 5,
    quote: "Working with Rafsan on our motion graphics project was a pleasure. His technical skills and artistic eye delivered exactly what we needed."
  },
  {
    name: "Lisa Wang",
    role: "Digital Marketing Manager",
    image: "https://ui-avatars.com/api/?name=Lisa+Wang&background=0056b3&color=fff",
    rating: 5,
    quote: "This seller transformed our content with his video editing skills. The final product was polished, professional, and perfectly aligned with our brand."
  },
  {
    name: "Michael Chen",
    role: "Tech Startup Founder",
    image: "https://ui-avatars.com/api/?name=Michael+Chen&background=007bff&color=fff",
    rating: 5,
    quote: "His cybersecurity expertise helped us identify and fix critical vulnerabilities in our system. His thorough approach and clear communication made the process smooth."
  },
  {
    name: "Sarah Johnson",
    role: "Content Creator",
    image: "https://ui-avatars.com/api/?name=Sarah+Johnson&background=00c6ff&color=fff",
    rating: 5,
    quote: "The animation work Rafsan did for my channel was outstanding. He understood my vision perfectly and delivered beyond my expectations."
  }
];

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            once: true,
            mirror: false
        });
    }
    
    // Initialize navigation
    const navToggle = document.querySelector('.nav-toggle');
    const nav = document.querySelector('.nav');
    const navLinks = document.querySelectorAll('.nav a');
    
    if (navToggle && nav) {
        navToggle.addEventListener('click', () => {
            navToggle.classList.toggle('open');
            nav.classList.toggle('active');
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!nav.contains(e.target) && !navToggle.contains(e.target)) {
                navToggle.classList.remove('open');
                nav.classList.remove('remove');
            }
        });
        
        // Close menu when clicking a link
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navToggle.classList.remove('open');
                nav.classList.remove('active');
            });
        });
    }
    
    // Initialize floating navigation
    const floatingNav = document.querySelector('.floating-nav');
    const sections = document.querySelectorAll('section[id]');
    
    function updateFloatingNav() {
        if (!floatingNav) return;
        
        const scrollPosition = window.scrollY;
        
        // Show/hide floating nav based on scroll position
        if (scrollPosition > 300) {
            floatingNav.classList.add('visible');
        } else {
            floatingNav.classList.remove('visible');
        }
        
        // Update active section
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionBottom = sectionTop + section.offsetHeight;
            const sectionId = section.getAttribute('id');
            const navItem = floatingNav.querySelector(`[data-section="${sectionId}"]`);
            
            if (navItem && scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                navItem.classList.add('active');
            } else if (navItem) {
                navItem.classList.remove('active');
            }
        });
    }
    
    // Update floating nav on scroll
    window.addEventListener('scroll', updateFloatingNav);
    updateFloatingNav(); // Initial update
    
});

// Typing animation for hero tagline
const typingSpan = document.querySelector('.typing');
const titles = [
    'Video Editor',
    'Animator',
    'Coder',
    'Cybersecurity Expert'
];
let titleIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 100;
let pauseTime = 1500;

function type() {
    const currentTitle = titles[titleIndex];
    if (isDeleting) {
        typingSpan.textContent = currentTitle.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typingSpan.textContent = currentTitle.substring(0, charIndex + 1);
        charIndex++;
    }
    
    if (!isDeleting && charIndex === currentTitle.length) {
        isDeleting = true;
        setTimeout(type, pauseTime);
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        titleIndex = (titleIndex + 1) % titles.length;
        setTimeout(type, typingSpeed);
    } else {
        setTimeout(type, isDeleting ? typingSpeed / 2 : typingSpeed);
    }
}

// Start typing animation
if (typingSpan) {
    setTimeout(type, 1000);
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function () {
  // Observer options for animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  // Navigation
  const navToggle = document.getElementById('nav-toggle');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('nav.nav ul li a');

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', function () {
      navMenu.classList.toggle('active');
      navToggle.classList.toggle('open');
    });
  }

  navLinks.forEach(link => {
    link.addEventListener('click', function () {
      navMenu.classList.remove('active');
    });
  });

  // Lazy loading for images
  const lazyImages = document.querySelectorAll('.lazy-image');
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.classList.add('loaded');
        observer.unobserve(img);
      }
    });
  });

  lazyImages.forEach(img => imageObserver.observe(img));

  // Scroll-reveal animation for sections
  const sections = document.querySelectorAll('section');
  const sectionObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('section-transition', 'visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  sections.forEach(section => {
    section.classList.add('section-transition');
    sectionObserver.observe(section);
  });

  // Smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        const headerOffset = 80;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // Initialize Testimonials
  function initializeTestimonials() {
    const carousel = document.querySelector('.testimonials-carousel');
    if (!carousel) return;

    // Clear existing content
    carousel.innerHTML = '';

    // Create slides
    testimonialData.forEach((testimonial, index) => {
      const slide = document.createElement('div');
      slide.className = `testimonial-slide ${index === 0 ? 'active' : ''}`;
      slide.innerHTML = `
        <div class="testimonial-content">
          <p class="testimonial-quote">${testimonial.quote}</p>
          <div class="testimonial-profile">
            <img src="${testimonial.image}" alt="${testimonial.name}" class="testimonial-img" onerror="this.src='https://ui-avatars.com/api/?name=User&background=007bff&color=fff'">
            <div class="testimonial-info">
              <h4 class="testimonial-name">${testimonial.name}</h4>
              <p class="testimonial-role">${testimonial.role}</p>
              <div class="testimonial-rating">${'★'.repeat(testimonial.rating)}</div>
            </div>
          </div>
        </div>
      `;
      carousel.appendChild(slide);
    });

    // Create navigation arrows
    const prevBtn = document.createElement('button');
    prevBtn.className = 'carousel-arrow left';
    prevBtn.innerHTML = '←';
    prevBtn.setAttribute('aria-label', 'Previous testimonial');
    
    const nextBtn = document.createElement('button');
    nextBtn.className = 'carousel-arrow right';
    nextBtn.innerHTML = '→';
    nextBtn.setAttribute('aria-label', 'Next testimonial');
    
    carousel.appendChild(prevBtn);
    carousel.appendChild(nextBtn);

    // Create indicators
    const indicators = document.createElement('div');
    indicators.className = 'carousel-indicators';
    testimonialData.forEach((_, index) => {
      const indicator = document.createElement('span');
      indicator.className = `indicator ${index === 0 ? 'active' : ''}`;
      indicator.setAttribute('aria-label', `Go to testimonial ${index + 1}`);
      indicators.appendChild(indicator);
    });
    carousel.appendChild(indicators);

    // Initialize carousel functionality
    let currentSlide = 0;
    const slides = carousel.querySelectorAll('.testimonial-slide');
    const dots = carousel.querySelectorAll('.indicator');

    function updateSlides() {
      slides.forEach((slide, index) => {
        slide.classList.remove('active', 'prev', 'next');
        if (index === currentSlide) {
          slide.classList.add('active');
        } else if (index === (currentSlide - 1 + slides.length) % slides.length) {
          slide.classList.add('prev');
        } else if (index === (currentSlide + 1) % slides.length) {
          slide.classList.add('next');
        }
      });

      dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentSlide);
      });
    }

    // Event listeners for navigation
    prevBtn.addEventListener('click', () => {
      currentSlide = (currentSlide - 1 + slides.length) % slides.length;
      updateSlides();
    });

    nextBtn.addEventListener('click', () => {
      currentSlide = (currentSlide + 1) % slides.length;
      updateSlides();
    });

    // Event listeners for indicators
    dots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        currentSlide = index;
        updateSlides();
      });
    });

    // Auto-advance slides
    let autoAdvance = setInterval(() => {
      currentSlide = (currentSlide + 1) % slides.length;
      updateSlides();
    }, 5000);

    // Pause auto-advance on hover
    carousel.addEventListener('mouseenter', () => clearInterval(autoAdvance));
    carousel.addEventListener('mouseleave', () => {
      autoAdvance = setInterval(() => {
        currentSlide = (currentSlide + 1) % slides.length;
        updateSlides();
      }, 5000);
    });

    // Initialize first slide
    updateSlides();
  }

  // Call initialization when DOM is loaded
  initializeTestimonials();

  // Scroll-to-top button
  const scrollToTopBtn = document.getElementById('scrollToTopBtn');
  window.addEventListener('scroll', function () {
    if (!scrollToTopBtn) return;
    if (window.scrollY > 300) {
      scrollToTopBtn.classList.add('show');
    } else {
      scrollToTopBtn.classList.remove('show');
    }
  });

  if (scrollToTopBtn) {
    scrollToTopBtn.addEventListener('click', function () {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // Portfolio Filter Functionality
  const filterButtons = document.querySelectorAll('.filter-btn');
  const portfolioCards = document.querySelectorAll('.portfolio-card');

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Remove active class from all buttons
      filterButtons.forEach(btn => btn.classList.remove('active'));
      // Add active class to clicked button
      button.classList.add('active');

      const filter = button.getAttribute('data-filter');

      portfolioCards.forEach(card => {
        if (filter === 'all' || card.getAttribute('data-category') === filter) {
          card.style.display = 'block';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'scale(1)';
          }, 100);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'scale(0.8)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 300);
        }
      });
    });
  });

  // Portfolio Modal Functionality
  const modal = document.querySelector('.portfolio-modal');
  const modalContent = document.querySelector('.modal-content');
  const closeModal = document.querySelector('.modal-close');
  const portfolioLinks = document.querySelectorAll('.portfolio-link');

  portfolioLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const projectId = link.closest('.portfolio-card').getAttribute('data-project-id');
      const project = projectData[projectId];
      
      if (project) {
        document.querySelector('.modal-title').textContent = project.title;
        document.querySelector('.modal-description').textContent = project.description;
        document.querySelector('.modal-img').src = project.thumbnail;
        
        const techList = document.querySelector('.modal-tech');
        techList.innerHTML = project.tech.map(tech => `<span class="tech-badge">${tech}</span>`).join('');
        
        const demoLink = document.querySelector('.modal-demo');
        demoLink.href = project.demo;
        
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  if (closeModal) {
    closeModal.addEventListener('click', () => {
      modal.classList.remove('active');
      document.body.style.overflow = '';
    });
  }

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modal.classList.contains('active')) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  }

  // Floating Navigation
  const floatingNav = document.getElementById('floating-nav');
  const floatingNavItems = document.querySelectorAll('.floating-nav-item');
  let lastScrollTop = 0;

  function updateFloatingNav() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    // Show/hide floating nav based on scroll direction
    if (!floatingNav) return;
    if (scrollTop > 300) {
      floatingNav.classList.add('visible');
    } else {
      floatingNav.classList.remove('visible');
    }
    
    // Update active state
    floatingNavItems.forEach(item => {
      const targetId = item.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);
      
      if (targetSection) {
        const rect = targetSection.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          item.classList.add('active');
        } else {
          item.classList.remove('active');
        }
      }
    });
    
    lastScrollTop = scrollTop;
  }

  // Add scroll event listener
  window.addEventListener('scroll', updateFloatingNav);

  // Smooth scroll for floating nav items
  floatingNavItems.forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = item.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);
      
      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Keyboard navigation for testimonials carousel
  document.addEventListener('keydown', function(e) {
    if (document.activeElement.tagName === 'INPUT' || document.activeElement.tagName === 'TEXTAREA') return;
    if (modal && modal.classList.contains('active')) return;
  });

  // Initialize Education and Expertise Sections
  function initializeEducationAndExpertise() {
    const educationSection = document.querySelector('.education-section');
    const expertiseCards = document.querySelectorAll('.expertise-card');
    const languageItems = document.querySelectorAll('.languages-list li');
    const expertiseItems = document.querySelectorAll('.expertise-list li');
    const toolItems = document.querySelectorAll('.tools-list li');

    if (educationSection) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1 });

      observer.observe(educationSection);
    }

    // Animate expertise cards
    expertiseCards.forEach((card, index) => {
      card.style.opacity = '0';
      card.style.transform = 'translateY(20px)';
      card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
      
      setTimeout(() => {
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
      }, 100 * index);
    });

    // Animate list items
    const animateListItems = (items) => {
      items.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateX(-20px)';
        item.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
        
        setTimeout(() => {
          item.style.opacity = '1';
          item.style.transform = 'translateX(0)';
        }, 50 * index);
      });
    };

    animateListItems(languageItems);
    animateListItems(expertiseItems);
    animateListItems(toolItems);
  }

  // Call the initialization function when the DOM is loaded
  initializeEducationAndExpertise();
}); 