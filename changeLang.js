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
    'Leveraging my career transition into frontend development, \
    I bring creative problem-solving skills and a user-centered approach to web projects.\
    I’m expanding my expertise and learning TypeScript to enhance my capabilities.\
    My diverse background, coupled with bilingual communication (French/English),\
    equips me to deliver innovative solutions aligned with business goals.',
  explore: 'Explore My',
  skills: 'Experience',
  skillsfrontend: 'Frontend  Development',
  skillsbackend: 'Backend Development',
  proficient: 'Proficient',
  beginner: 'Beginner',
  intermediate: 'Intermediate',
  browse: 'Browse My Recent',
  livedemo: 'Live Demo',
  getintouch: 'Get In Touch',
  linkedin: 'Linkedin',
  copyright: 'Copyright &#169; 2023 Aline Behalal All Rights Reserved',
  ongoingproject: 'Ongoing Project',
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
    'Suite à ma reconversion en développement frontend, je ' +
    'combine créativité et souci du détail pour développer des projets web orientés utilisateur. ' +
    'Actuellement, je perfectionne mes connaissances et me forme en autodidacte au TypeScript. ' +
    'Mon parcours diversifié et mes compétences bilingues (français/anglais) me permettent de contribuer de manière innovante aux projets.',
  explore: 'Explorez Mes',
  skills: 'Compétences',
  skillsfrontend: 'Développement Frontend',
  skillsbackend: 'Développement Backend',
  proficient: 'Compétent',
  beginner: 'Débutant',
  intermediate: 'Intermédiaire',
  browse: 'Parcourez Mes Derniers',
  livedemo: 'Demo',
  getintouch: 'Entrez En ',
  email: 'Example@gmail.com',
  linkedin: 'Linkedin',
  copyright: 'Copyrights © 2023 Aline Behalal Tous droits réservés',
  ongoingproject: 'Projet en cours',
}

const elements = document.querySelectorAll('[data-i18n]')

let currentLanguage = 'en' // Langue initial
let isFrench = false

let i18n = []

//Fonction pour créer un bouton de téléchargement de Pdf en fonction de la langue du site
function buttonPdf(isFrench) {
  const resumeBtnContainer = document.querySelector('.btn-container')
  const existingResumeBtn = document.querySelector('.download-btn')

  if (existingResumeBtn) {
    // Si le bouton existe déjà, mettre à jour ses propriétés en fonction de la langue actuelle
    existingResumeBtn.download = isFrench ? 'myResumeFR.pdf' : 'myResumeEN.pdf'
    existingResumeBtn.href = isFrench
      ? './assets/myResumeFR.pdf'
      : './assets/myResumeEN.pdf'
    existingResumeBtn.textContent = isFrench ? 'CV' : 'Download CV'
  } else {
    // Si le bouton n'existe pas, création d'un nouveau.
    const newResumeBtn = document.createElement('a')
    newResumeBtn.classList.add('btn', 'btn-color-2', 'download-btn')
    newResumeBtn.setAttribute(
      'download',
      isFrench ? 'myResumeFR.pdf' : 'myResumeEN.pdf'
    )
    newResumeBtn.href = isFrench
      ? './assets/myResumeFR.pdf'
      : './assets/myResumeEN.pdf'
    newResumeBtn.textContent = isFrench ? 'CV' : 'Download CV'

    // Ajout du nouveau bouton.
    resumeBtnContainer.appendChild(newResumeBtn)
  }
}

function replaceText(el) {
  const key = el.dataset.i18n
  el.innerHTML = i18n[key] || key
}

// Fonction pour changer la langue en anglais
function changeToEnglish() {
  currentLanguage = 'en'
  isFrench = false
  i18n = eval('en')
  elements.forEach((el) => replaceText(el))
  buttonPdf(isFrench)
}

// Fonction pour changer la langue en français
function changeToFrench() {
  currentLanguage = 'fr'
  isFrench = true
  i18n = eval('fr')
  elements.forEach((el) => replaceText(el))
  buttonPdf(isFrench)
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

// Écouteurs d'évènement des boutons d'option langue
document
  .getElementById('switchLangEN')
  .addEventListener('click', changeToEnglish)
document
  .getElementById('switchLangFR')
  .addEventListener('click', changeToFrench)
document
  .getElementById('switchLangENHamburger')
  .addEventListener('click', changeToEnglish)
document
  .getElementById('switchLangFRHamburger')
  .addEventListener('click', changeToFrench)
