const modalOverlay = document.querySelector('.modal-overlay');
const cards = document.querySelectorAll('.card');
  // Ele vai pegar todos os elementos que tem a classe cards.

for (let card of cards) {
  card.addEventListener("click", function(){
    const videoId = card.getAttribute("id");
      // Aqui ele pode pegar qualquer atributo do vídeo.
    // modalOverlay.classList.add('active');
    // modalOverlay.querySelector('iframe').src = `https://www.youtube.com/embed/${videoId}`;
    window.location.href = `/video?id=${videoId}`;
      // nos estamos acessando a url do site, e onde nos queremos que o usuario vá.
  });
};

// document.querySelector('.close-modal')
//   .addEventListener("click", function() {
//     modalOverlay.classList.remove('active');
//     modalOverlay.querySelector('iframe').src = "";
//   });
