// Data for dynamic sections
const skills = ["Macine Learning", "Python", "Deep Learning", "Web DEvelopment", "C#", "PHP & MySQL", "JavaScript", "HTML & CSS","java"];
const projects = [
    
    {
        title: "Breast-Cancer-ultrasound-image-processing",
        description: "Developed a deep learning model to accurately detect breast cancer from medical data, improving early diagnosis and patient outcomes.",
        link: "https://github.com/Shuvo928/Breast-Cancer-ultrasound-image-processing" // Replace with your actual project URL
    }
    ,
    {
        title: "Student result management system",
        description: "A web-based system to manage student records, input marks, and generate result reports.",
        link: "https://github.com/Shuvo928/Student_Result_Management-system"
    },
    {
        title: "Smart-Load-Shedding-Prediction-Project using Machine Learning",
        description: "Created a predictive model to optimize load shedding schedules, minimizing disruptions and improving energy efficiency.",
        link: "https://github.com/Shuvo928/Smart-Load-Shedding-Prediction-Project" // Replace with your actual project URL
    }
];
const achievements = [
    {
        title: "Getting Scholars in academia",
        img: "myphoto.jpg"
    },
    {
        title: "Machine Learning with Python",
        img: "WhatsApp Image 2025-08-17 at 00.15.50_78c7f517.jpg"
    },
    
];


const skillsList = document.getElementById('skills-list');
skills.forEach(skill => {
    const span = document.createElement('span');
    span.className = 'skill';
    span.textContent = skill;
    skillsList.appendChild(span);
});


const projectsList = document.getElementById('projects-list');
projects.forEach(project => {
    const div = document.createElement('div');
    div.className = 'project';
    if (project.link) {
        div.innerHTML = `<h3><a href="${project.link}" target="_blank">${project.title}</a></h3><p>${project.description}</p>`;
    } else {
        div.innerHTML = `<h3>${project.title}</h3><p>${project.description}</p>`;
    }
    projectsList.appendChild(div);
});

// Populate Achievements (horizontal)
const achievementsList = document.getElementById('achievements-list');
achievementsList.classList.add('achievements-list');
achievements.forEach(ach => {
    const div = document.createElement('div');
    div.className = 'achievement-item';
    div.innerHTML = `<h3>${ach.title}</h3><img src="${ach.img}" alt="${ach.title}" class="cert-img">`;
    achievementsList.appendChild(div);
});


function showSection(sectionId, el) {
    document.querySelectorAll('.section').forEach(sec => sec.classList.remove('active'));
    document.getElementById(sectionId).classList.add('active');
    document.querySelectorAll('nav a').forEach(a => a.classList.remove('active'));
    if (el) el.classList.add('active');
}

// Image modal for achievement certificates
const modal = document.getElementById('img-modal');
const modalImg = modal ? modal.querySelector('.modal-content img') : null;
const modalClose = modal ? modal.querySelector('.modal-close') : null;
if (modal && modalImg) {
    document.querySelectorAll('.cert-img').forEach(img => {
        img.style.cursor = 'zoom-in';
        img.addEventListener('click', () => {
            modalImg.src = img.src;
            modalImg.alt = img.alt || '';
            modal.setAttribute('aria-hidden', 'false');
            modal.classList.add('open');
        });
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal || e.target === modalClose) {
            modal.classList.remove('open');
            modal.setAttribute('aria-hidden', 'true');
            modalImg.src = '';
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            modal.classList.remove('open');
            modal.setAttribute('aria-hidden', 'true');
            modalImg.src = '';
        }
    });
}
