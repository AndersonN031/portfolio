// Usando a biblioteca TypeIt para animar textos no portfólio 
export default function textAnimated() {
  document.addEventListener('DOMContentLoaded', () => {
    new TypeIt("#textAnimated", {
      speed: 100,
      loop: true,
      // cursor: false
    }).type("Desenvolvedor web", { delay: 5000 }).delete(18)

      .go()
  })
}

