// essa função faz com que ao clicar no link "especialidades", role suavemente para a seção "especialidades"
function scrollIntoSpecialty() {
  document.addEventListener('DOMContentLoaded', function () {
    let linkSpecialty = document.getElementById('link-specialty');
    linkSpecialty.addEventListener('click', function (e) {
      e.preventDefault();
      let specialtySection = document.getElementById('specialty')
      specialtySection.scrollIntoView({ behavior: 'smooth' });
    });
  })
}

// essa função faz com que ao clicar no link "sobre", role suavemente para a seção "sobre"
function scrollIntoAbout() {
  document.addEventListener('DOMContentLoaded', function () {
    let linkAbout = document.getElementById('link-about');
    linkAbout.addEventListener('click', function (e) {
      e.preventDefault();
      let aboutSection = document.getElementById('about')
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    });
  })
}

// essa função faz com que ao clicar no link "projeto", role suavemente para a seção de "projetos"
function scrollIntoProject() {
  document.addEventListener('DOMContentLoaded', function () {
    let linkProject = document.getElementById('link-project');
    linkProject.addEventListener('click', function (e) {
      e.preventDefault();
      let projectSection = document.getElementById('project')
      projectSection.scrollIntoView({ behavior: 'smooth' });
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

scrollIntoSpecialty()

scrollIntoAbout()

scrollIntoProject()

scrollIntoContact()

document.addEventListener('DOMContentLoaded', () => {
  new TypeIt("#textAnimated", {
    speed: 100,
    loop: true,
    cursor: false
  }).type("Sou Anderson Nunes", { delay: 1000 }).delete(18).type("Desenvolvedor Web", { delay: 1000 })

    .go()
})



