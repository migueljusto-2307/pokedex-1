const botoes = document.querySelectorAll('.button_card');

botoes.forEach(button => {

    let star_on = true; 

    const star = document.createElement('img');
    star.classList.add("button-poke");
    star.setAttribute('src', 'assets/icons/star=Padrão.png');
    
    button.insertBefore(star, button.firstChild);

    star.addEventListener('click', () => {
        if (star_on) {
            star.setAttribute('src', 'assets/icons/star=hover.png');
            star_on = false;
        } else {
            star.setAttribute('src', 'assets/icons/star=Padrão.png');
            star_on = true;
        }
    });
});