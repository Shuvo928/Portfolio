// Data for dynamic sections
const skills = ["Macine Learning", "Python", "Deep Learning", "Web DEvelopment", "C#", "PHP & MySQL", "JavaScript", "HTML & CSS","java"];
const projects = [
    {
        title: "Smart-Load-Shedding-Prediction-Project using Machine Learning",
        description: "Created a predictive model to optimize load shedding schedules, minimizing disruptions and improving energy efficiency.",
        link: "https://github.com/Shuvo928/Smart-Load-Shedding-Prediction-Project" // Replace with your actual project URL
    },
    {
        title: "Breast Cancer Detection using Deep Learning",
        description: "Developed a deep learning model to accurately detect breast cancer from medical data, improving early diagnosis and patient outcomes.",
        link: "https://github.com/Shuvo928/Breast-Cancer-Detection-Using-Deep-Learning" // Replace with your actual project URL
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

// Populate Skills
const skillsList = document.getElementById('skills-list');
skills.forEach(skill => {
    const span = document.createElement('span');
    span.className = 'skill';
    span.textContent = skill;
    skillsList.appendChild(span);
});

// Populate Projects
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

// Section navigation
function showSection(sectionId, el) {
    document.querySelectorAll('.section').forEach(sec => sec.classList.remove('active'));
    document.getElementById(sectionId).classList.add('active');
    document.querySelectorAll('nav a').forEach(a => a.classList.remove('active'));
    if (el) el.classList.add('active');
}
