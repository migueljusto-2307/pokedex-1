const button = document.getElementById('button_card');

const star_on = true;

const star = document.createElement('img');
star.setAttribute('src', 'assets/icons/star=Padrão.png');

button.appendChild(star);


star.addEventListener('click', modific);

function modific(){ // função que filtra o segundo drop


    star.setAttribute('src', 'assets/icons/star.png');

    button.appendChild(star);//apensa ao segundo drop todos os options criados
    };