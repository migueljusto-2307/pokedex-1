const botao = document.getElementById('meu-botao');
const som = document.getElementById('som-clique');

botao.addEventListener('click', function() {
    som.currentTime = 0; 
    som.play();
});
