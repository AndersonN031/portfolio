// Usando a biblioteca TypeIt para animar textos no portfólio 
export default function textAnimated() {
  document.addEventListener('DOMContentLoaded', () => {
    new TypeIt("#textAnimated", {
      speed: 100,
      loop: true,
      cursor: false
    }).type("Sou Anderson Nunes", { delay: 1000 }).delete(18).type("Desenvolvedor Web", { delay: 1000 })

      .go()
  })
}