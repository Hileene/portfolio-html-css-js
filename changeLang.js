// Donnée du portfolio dans les deux langues

'use strict'

const en = {
  name: 'Aline Behalal',
  about: 'About',
  experience: 'Experience',
  projects: 'Projects',
  contact: 'Contact',
  hello: "Hello I'm",
  job: 'Frontend Developer',
  downloadcv: 'Download CV',
  contactinfo: 'Contact Info',
  knowmore: 'Get To Know More',
  aboutme: 'About me',
  years: 'Fresh Graduate<br>Frontend Development',
  education: 'Education',
  educationdata: 'A.S. Web Development<br>BA Communication',
  objective:
    'As a recent graduate with a passion for front-end development, I \
  bring a foundation in web content creation, SEO expertise, and a \
  knack for English to French translation. Eager to apply my skills, I \
  aim to contribute effectively to innovative projects while \
  continuously enhancing my coding abilities.',
  explore: 'Explore My',
  skills: 'Experience',
  skillsfrontend: 'Frontend  Development',
  skillsbackend: 'Backend Development',
  proficient: 'Proficient',
  beginner: 'Beginner',
  intermediate: 'Intermediate',
  browse: 'Browse My Recent',
  project1: 'Project One',
  project2: 'Project Two',
  project3: 'Project Three',
  project4: 'Project Four',
  project5: 'Project Five',
  project6: 'Project Six',
  livedemo: 'Live Demo',
  getintouch: 'Get In Touch',
  email: 'Example@gmail.com',
  linkedin: 'Linkedin',
  copyright: 'Copyright &#169; 2023 Aline Behalal All Rights Reserved',
}

const fr = {
  name: 'Aline Behalal',
  about: 'À propos',
  experience: 'Éxpérience',
  projects: 'Projets',
  contact: 'Contact',
  hello: 'Bonjour, Je Suis',
  job: 'Développeuse Frontend Junior',
  downloadcv: 'CV',
  contactinfo: 'Contact',
  knowmore: 'Découvrez-En Plus',
  aboutme: 'À propos',
  years: 'Débutant<br>Développeur Frontend',
  education: 'Éducation',
  educationdata: 'Titre RNCP niveau V<br>Licence en Communication',
  objective:
    'Récemment diplômée et passionnée par le développement frontend, je ' +
    'possède une base solide en création de contenu web, en référencement (SEO) ' +
    "et en traduction de l'anglais vers le français.  J'ai hâte de mettre en oeuvre " +
    'mes compétences et de contribuer efficacement à des projets innovants tout en améliorant continuellement mes compétences en programmation.',
  explore: 'Explorez Mes',
  skills: 'Compétences',
  skillsfrontend: 'Développement Frontend',
  skillsbackend: 'Développement Backend',
  proficient: 'Compétent',
  beginner: 'Débutant',
  intermediate: 'Intermédiaire',
  browse: 'Parcourez Mes Derniers',
  project1: 'Projet Un',
  project2: 'Projet Deux',
  project3: 'Projet Trois',
  project4: 'Projet Quatre',
  project5: 'Projet Cinq',
  project6: 'Projet Six',
  livedemo: 'Demo',
  getintouch: 'Entrez En ',
  email: 'Example@gmail.com',
  linkedin: 'Linkedin',
  copyright: 'Copyrights © 2023 Aline Behalal Tous droits réservés',
}

const elements = document.querySelectorAll('[data-i18n]')

let currentLanguage = 'en' // Set the initial language

let i18n = []

function replaceText(el) {
  const key = el.dataset.i18n
  el.innerHTML = i18n[key] || key
}
// Fonction pour modifier la langue
function changeLang(lang) {
  i18n = eval(lang)
  elements.forEach((el) => replaceText(el))
}

var buttons = document.querySelectorAll('.toggle-button')
var activeClassName = 'active'

//Fonction qui permet de mettre le bouton sélectionné actif
function activeState(items, activeName) {
  for (var i = 0; i < items.length; i++) {
    if (items[i].classList.contains(activeName)) {
      items[i].classList.remove(activeName)
    }
  }
}

for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function (e) {
    activeState(buttons, activeClassName)
    e.target.classList.add(activeClassName)
  })
}

// /Écouteurs d'évènement des boutons d'option langue

document
  .getElementById('switchLangEN')
  .addEventListener('click', () => changeLang('en'))
document
  .getElementById('switchLangFR')
  .addEventListener('click', () => changeLang('fr'))

document
  .getElementById('switchLangENHamburger')
  .addEventListener('click', () => changeLang('en'))
document
  .getElementById('switchLangFRHamburger')
  .addEventListener('click', () => changeLang('fr'))

// Mise à jour de l'email via l'objet "config"
document.querySelector('#email-info').innerHTML = config.email

// Function to download the appropriate resume PDF based on language
function downloadResumePdf() {
  const lang = currentLanguage
  const pdfUrl =
    lang === 'en' ? './assets/myResumeEN.pdf' : './assets/myResumeFR.pdf'

  // Open the PDF in a new window
  window.open(pdfUrl)
}
