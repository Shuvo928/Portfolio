// Initialize AOS
AOS.init({
    duration: 1000,
    once: true,
    offset: 100
});

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(10, 10, 26, 0.98)';
        navbar.style.padding = '0.5rem 0';
    } else {
        navbar.style.background = 'rgba(10, 10, 26, 0.95)';
        navbar.style.padding = '1rem 0';
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Skills data
const skills = [
    { name: "Machine Learning", icon: "bi-cpu", level: 85 },
    { name: "Python", icon: "bi-filetype-py", level: 90 },
    { name: "Deep Learning", icon: "bi-brain", level: 80 },
    { name: "Web Development", icon: "bi-code-slash", level: 88 },
    { name: "C#", icon: "bi-filetype-cs", level: 75 },
    { name: "PHP & MySQL", icon: "bi-database", level: 82 },
    { name: "JavaScript", icon: "bi-filetype-js", level: 85 },
    { name: "HTML & CSS", icon: "bi-filetype-html", level: 95 },
    { name: "Java", icon: "bi-filetype-java", level: 70 }
];

// Projects data
const projects = [
    {
        title: "Breast Cancer Ultrasound Image Processing",
        description: "Developed a deep learning model to accurately detect breast cancer from medical data, improving early diagnosis and patient outcomes.",
        link: "https://github.com/Shuvo928/Breast-Cancer-ultrasound-image-processing"
    },
    {
        title: "Student Result Management System",
        description: "A web-based system to manage student records, input marks, and generate result reports efficiently.",
        link: "https://github.com/Shuvo928/Student_Result_Management-system"
    },
    {
        title: "Smart Load Shedding Prediction",
        description: "Created a predictive model using Machine Learning to optimize load shedding schedules and improve energy efficiency.",
        link: "https://github.com/Shuvo928/Smart-Load-Shedding-Prediction-Project"
    }
];

// Achievements data
const achievements = [
    {
        title: "Academic Scholarship",
        img: "images/certificates/ml-cert.jpg"
    },
    {
        title: "Machine Learning with Python",
        img: "images/certificates/scholarship.jpg"
    },
    {
        title: "Web Design & Development",
        img: "images/certificates/web-cert.jpg"
    },
    {
        title: "Graphics Design",
        img: "images/certificates/graphics-cert.jpg"
    }
];
// Contact Form Handling
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        // Simple validation
        if (name && email && message) {
            // Here you would typically send the data to a server
            // For now, we'll show a success message
            
            // Create alert div
            const alertDiv = document.createElement('div');
            alertDiv.className = 'alert alert-success alert-dismissible fade show mt-3';
            alertDiv.role = 'alert';
            alertDiv.innerHTML = `
                <strong>Thank you, ${name}!</strong> Your message has been sent. I'll get back to you soon.
                <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
            `;
            
            // Insert alert before the form
            contactForm.insertBefore(alertDiv, contactForm.firstChild);
            
            // Clear form
            contactForm.reset();
            
            // Remove alert after 5 seconds
            setTimeout(() => {
                if (alertDiv) {
                    alertDiv.remove();
                }
            }, 5000);
        } else {
            // Error alert
            const alertDiv = document.createElement('div');
            alertDiv.className = 'alert alert-danger alert-dismissible fade show mt-3';
            alertDiv.role = 'alert';
            alertDiv.innerHTML = `
                <strong>Error!</strong> Please fill in all fields.
                <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
            `;
            
            contactForm.insertBefore(alertDiv, contactForm.firstChild);
            
            setTimeout(() => {
                if (alertDiv) {
                    alertDiv.remove();
                }
            }, 3000);
        }
    });
}

// Populate Skills
const skillsContainer = document.getElementById('skills-container');
skills.forEach((skill, index) => {
    setTimeout(() => {
        const skillCard = document.createElement('div');
        skillCard.className = 'col-lg-4 col-md-6';
        skillCard.setAttribute('data-aos', 'fade-up');
        skillCard.setAttribute('data-aos-delay', index * 100);
        skillCard.innerHTML = `
            <div class="skill-card">
                <i class="bi ${skill.icon} skill-icon"></i>
                <h4>${skill.name}</h4>
                <div class="skill-level">
                    <div class="skill-progress" style="width: ${skill.level}%"></div>
                </div>
            </div>
        `;
        skillsContainer.appendChild(skillCard);
    }, index * 100);
});

// Populate Projects
const projectsContainer = document.getElementById('projects-container');
projects.forEach((project, index) => {
    const projectCard = document.createElement('div');
    projectCard.className = 'col-md-6 col-lg-4';
    projectCard.setAttribute('data-aos', 'fade-up');
    projectCard.setAttribute('data-aos-delay', index * 100);
    projectCard.innerHTML = `
        <div class="project-card">
            <div class="project-content">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <a href="${project.link}" target="_blank" class="project-link">
                    View Project <i class="bi bi-arrow-right"></i>
                </a>
            </div>
        </div>
    `;
    projectsContainer.appendChild(projectCard);
});

// Populate Achievements
const achievementsContainer = document.getElementById('achievements-container');
achievements.forEach((achievement, index) => {
    const achievementCard = document.createElement('div');
    achievementCard.className = 'col-md-6 col-lg-3';
    achievementCard.setAttribute('data-aos', 'fade-up');
    achievementCard.setAttribute('data-aos-delay', index * 100);
    achievementCard.innerHTML = `
        <div class="achievement-card" onclick="openImageModal('${achievement.img}', '${achievement.title}')">
            <img src="${achievement.img}" alt="${achievement.title}" class="achievement-img">
            <h4>${achievement.title}</h4>
        </div>
    `;
    achievementsContainer.appendChild(achievementCard);
});

// Image Modal Function
function openImageModal(imgSrc, imgAlt) {
    const modal = new bootstrap.Modal(document.getElementById('imageModal'));
    document.getElementById('modalImage').src = imgSrc;
    document.getElementById('modalImage').alt = imgAlt;
    modal.show();
}

// Active navigation link based on scroll
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});