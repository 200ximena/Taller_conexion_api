const axios = require('axios')


const url= 'https://dinosaur-facts-api.shultzlab.com/dinosaurs'

const traerDinosaurios = async() => {
    try{
    const response = await axios.get(url)
    let dinosaurios = response.data
    dinosaurios.forEach(dinosaurio => {
        console.log(dinosaurio.Name)
        console.log("-------------")
        });
    }catch(error){
    console.log(error)
    }

}
traerDinosaurios()