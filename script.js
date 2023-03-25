const escButton = document.querySelectorAll('.gallery > ul > li > img');

// Função mudar imagem
function mudarImagem(full,novaImagem){
    document.getElementById(full).src=novaImagem;
}

// Função que adiciona classe ao clicar
escButton.forEach(function(key){
    key.addEventListener('click', function(){
        removeStyles();
        this.setAttribute('class', 'active');
    });
})

// Função que remove a classe anterior ao clicar
function removeStyles(){
    for(let i = 0;i < escButton.length;i++){
        document.querySelectorAll('.gallery > ul > li > img')[i].removeAttribute('class');
    }
}

function handleMouseEnter() {
    this.classList.add('card-hovered');
    document.body.id = `${this.id}-hovered`;
}

function handleMouseLeave() {
    this.classList.remove('card-hovered');
    document.body.id = "";
}

function addEventListenersToCards() {
    const cardElements = document.getElementsByClassName('card');

    for (let index = 0; index < cardElements.length; index++) {
        const card = cardElements[index];
        card.addEventListener('mouseenter', handleMouseEnter);
        card.addEventListener('mouseleave', handleMouseLeave);
    }
}

document.addEventListener("DOMContentLoaded", addEventListenersToCards, false);

function selectCarouselItem (selectedBtnElement){
    const selectedItem = selectedBtnElement.id;
    const carousel = document.querySelector('.cards-carousel');
    const transform = carousel.style.transform;
    const rotateY = transform.match(/rotateY\((-?\d+deg)\)/i);
    const rotateYDeg = -120 * (Number(selectedItem)-1);
    const newTransform = transform.replace(rotateY[0], `rotateY(${rotateYDeg}deg)`);
    
    carousel.style.transform = newTransform;

    const activeBtnElement = document.querySelector('.btn-active');
    activeBtnElement.classList.remove('btn-active');
    selectedBtnElement.classList.add('btn-active');
    console.log(activeBtnElement);
}
