const hamburgerBtn = document.querySelector('.hamburger-btn');
const modal =document.querySelector('.modal-container');
const closeBtn = document.querySelector('.modal-btn');

hamburgerBtn.addEventListener('click', function(){
    modal.classList.toggle('show-modal');
});

closeBtn.addEventListener('click', function(){
    modal.classList.remove('show-modal')
});