const namePokemon = document.getElementById('nomePokemon');
const btnGo = document.getElementById('btn-go');

async function fetchApi(){

    try{
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/charizard");

        if(!response.ok){
            throw new Erro("Could not fetch resource");
        }

        const data = await response.json();
        console.log(data);
    }
    catch (error){
        console.error(error);
    }
}

btnGo.addEventListener('click', () => {
    console.log(fetchApi())
})