import menuMobile from "./src/menuMobile.js";
import textAnimated from "./src/textAnimated.js";

function scrollIntoHome() {
  document.addEventListener('DOMContentLoaded', function () {
    let linkHome = document.querySelectorAll('.link-home');
    linkHome.forEach(function (linkHome) {
      linkHome.addEventListener('click', (e) => {
        e.preventDefault();
        let homeSection = document.getElementById('home')
        homeSection.scrollIntoView({ behavior: 'smooth' });
      })
    });
  })
}

// essa função faz com que ao clicar no link "especialidades", role suavemente para a seção "especialidades"
function scrollIntoSpecialty() {
  document.addEventListener('DOMContentLoaded', function () {
    let linkSpecialty = document.querySelectorAll('.link-specialty');
    linkSpecialty.forEach((linkSpecialty) => {
      linkSpecialty.addEventListener('click', (e) => {
        e.preventDefault();
        let specialtySection = document.getElementById('specialty')
        specialtySection.scrollIntoView({ behavior: 'smooth' });
      })
    });
  })
}

// essa função faz com que ao clicar no link "sobre", role suavemente para a seção "sobre"
function scrollIntoAbout() {
  document.addEventListener('DOMContentLoaded', function () {
    let linkAbout = document.querySelectorAll('.link-about');
    linkAbout.forEach(function (linkAbout) {
      linkAbout.addEventListener('click', (e) => {
        e.preventDefault();
        let aboutSection = document.getElementById('about')
        aboutSection.scrollIntoView({ behavior: 'smooth' });
      })
    });
  })
}

// essa função faz com que ao clicar no link "projeto", role suavemente para a seção de "projetos"
function scrollIntoProject() {
  document.addEventListener('DOMContentLoaded', function () {
    let linkProject = document.querySelectorAll('.link-project');
    linkProject.forEach(function (linkProject) {
      linkProject.addEventListener('click', function (e) {
        e.preventDefault();
        let projectSection = document.getElementById('project')
        projectSection.scrollIntoView({ behavior: 'smooth' });
      })
    });
  })
}

// essa função faz com que ao clicar no button link "contato", role suavemente para a seção de "contato"
function scrollIntoContact() {
  document.addEventListener('DOMContentLoaded', function () {
    let linkContacts = document.querySelectorAll('.link-contact');
    linkContacts.forEach(function (linkContact) {
      linkContact.addEventListener('click', function (e) {
        e.preventDefault();
        let contactSection = document.getElementById('contact');
        contactSection.scrollIntoView({ behavior: 'smooth' });
      });
    });
  });
}

scrollIntoHome()

scrollIntoSpecialty()

scrollIntoAbout()

scrollIntoProject()

scrollIntoContact()



// importando o arquivo menuMobile...
menuMobile()

// importando o arquivo textAnimated...
textAnimated()








