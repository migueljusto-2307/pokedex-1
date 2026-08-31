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
