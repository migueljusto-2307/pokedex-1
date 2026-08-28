const botoes = document.querySelectorAll('.button_card');

botoes.forEach(button => {

    let star_on = true; 

    const star = document.createElement('img');
    star.setAttribute('src', 'assets/icons/star=Padrão.png');
    
    button.insertBefore(star, button.firstChild);

    star.addEventListener('click', () => {
        if (star_on) {
            star.setAttribute('src', 'assets/icons/star.png');
            star_on = false;
        } else {
            star.setAttribute('src', 'assets/icons/star=Padrão.png');
            star_on = true;
        }
    });
});

const botao = document.querySelectorAll('.button-poke');

botao.forEach(button => {

    let poke_on = true; 

    const poke = document.createElement('img');
    poke.setAttribute('src', 'assets/icons/poke=Padrão.png');
    
    button.insertBefore(poke, button.firstChild);

    poke.addEventListener('click', () => {
        if (poke_on) {
            poke.setAttribute('src', 'assets/icons/poke=hover.png');
            poke_on = false;
        } else {
            poke.setAttribute('src', 'assets/icons/poke=Padrão.png');
            poke_on = true;
        }
    });
});
