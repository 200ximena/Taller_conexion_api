const axios = require('axios');

const Url = 'https://stranger-things-api.fly.dev/api/v1/characters';

const traerPersonajes = async() => {
  try {
    const response = await axios.get(Url);
    const characters = response.data;
    characters.forEach(character => {
        console.log(character.name)
        console.log("-------------")
        });

  } catch(error){
    console.log(error)
    }
}
traerPersonajes()
