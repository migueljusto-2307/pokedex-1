const geracao = document.getElementById('geracao'); //recebemos o ID do primeiro drop
const tipagem = document.getElementById('tipagem'); //recebemos o ID do segundo drop
const versao = document.getElementById('versao');

const tipagens = { //criamos um objeto para cada valor do primeiro drop
    1: ["Normal", "Fire", "Water", "Grass","Eletric","Ice","Fighting","Poison","Ground","Flying","Psychic","Bug","Rock","Ghost","Dragon"], 
    2: ["Normal", "Fire", "Water", "Grass","Eletric","Ice","Fighting","Poison","Ground","Flying","Psychic","Bug","Rock","Ghost","Dragon","Steel","Dark"], 
    3: ["Normal", "Fire", "Water", "Grass","Eletric","Ice","Fighting","Poison","Ground","Flying","Psychic","Bug","Rock","Ghost","Dragon","Steel","Dark"], 
    4: ["Normal", "Fire", "Water", "Grass","Eletric","Ice","Fighting","Poison","Ground","Flying","Psychic","Bug","Rock","Ghost","Dragon","Steel","Dark"], 
    5: ["Normal", "Fire", "Water", "Grass","Eletric","Ice","Fighting","Poison","Ground","Flying","Psychic","Bug","Rock","Ghost","Dragon","Steel","Dark"], 
    6: ["Normal", "Fire", "Water", "Grass","Eletric","Ice","Fighting","Poison","Ground","Flying","Psychic","Bug","Rock","Ghost","Dragon","Steel","Dark","Fairy"], 
    7: ["Normal", "Fire", "Water", "Grass","Eletric","Ice","Fighting","Poison","Ground","Flying","Psychic","Bug","Rock","Ghost","Dragon","Steel","Dark","Fairy"], 
    8: ["Normal", "Fire", "Water", "Grass","Eletric","Ice","Fighting","Poison","Ground","Flying","Psychic","Bug","Rock","Ghost","Dragon","Steel","Dark","Fairy"], 
    9: ["Normal", "Fire", "Water", "Grass","Eletric","Ice","Fighting","Poison","Ground","Flying","Psychic","Bug","Rock","Ghost","Dragon","Steel","Dark","Fairy"], 
};

const versoes = {
    1: ["Red", "Blue","Yellow"],
    2: ["Gold", "Silver", "Crystal"],
    3: ["Ruby", "Sapphire", "Emerald", "FireRed","LeafGreen"],
    4: ["Diamond", "Pearl", "Platinum", "HeartGold","SoulSilver"],
    5: ["Black", "White", "Black2", "White2"],
    6: ["X", "Y", "Omega Ruby", "Alpha Sapphire"],
    7: ["Sun", "Moon", "Ultra Sun", "Ultra Moon","Let's Go Pikachu", "Let's Go Eevee"],
    8: ["Sword", "Shield", "Brilliant Diamond", "Shining Pearl", "Legend:Arceus"],
    9: ["Scarlet", "Violet", "Legends:Z-A"],

};

geracao.addEventListener('change', filtrar);

function filtrar(){ // função que filtra o segundo drop
    const valorSelect = geracao.value; // recebe o valor selecionado no primeiro

    tipagem.innerHTML = '<option value="">Selecione a tipagem</option>'; //limpa pro estado original
    versao.innerHTML = '<option value="">Selecione a versao</option>';

    const tipos = tipagens[valorSelect]; //faz a captura dos dados da correspondência
    const versos = versoes[valorSelect];

    tipos.forEach(tipo => { //percorre os dados do array selecionado
        const option = document.createElement('option') // cria uma nova opção dentro do segundo drop

        option.value = tipo; //pega o primeiro item do array e coloca como value do option
        option.textContent = tipo;//pega o primerio item do array e coloca como texto do option

        tipagem.appendChild(option);//apensa ao segundo drop todos os options criados
    });

    versos.forEach(ver => { //percorre os dados do array selecionado
        const option = document.createElement('option') // cria uma nova opção dentro do segundo drop

        option.value = ver; //pega o primeiro item do array e coloca como value do option
        option.textContent = ver;//pega o primerio item do array e coloca como texto do option

        versao.appendChild(option);//apensa ao segundo drop todos os options criados
    })

};
    