let correctPokemon;
 const start = async () => {
    //create a random number for correct answer
    const ranNum = Math.floor(Math.random() * 151);
    // call the pokemon api for the data
    const url = `https://pokeapi.co/api/v2/pokemon/${ranNum}`;
    const response =  await fetch(url);
    const json = await response.json();
    correctPokemon = {
            name: json.name,
            id: json.id,
            image: json.sprites.front_default
        };
        console.log(correctPokemon);
    // join the pokemon image data
 document.getElementById('correct-image').src = correctPokemon.image;
    // create other 3 name data random for options

    // call api for the data

    //join the pokemon name data

    //

}
start();