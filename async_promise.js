const axios = require('axios')


const url= 'https://dinosaur-facts-api.shultzlab.com/dinosaurs'

//ejecutar asyncrona usando promesas
axios.get(url)
        .then((respuesta)=> {
            //console.log(respuesta.data)
            let dinosaurios = respuesta.data
                    dinosaurios.forEach(dinosaurio => {
                        console.log(dinosaurio.Name)
                        console.log("-------------")
                    });
            
        })
        .catch((error)=> {
            console.log(error.code)
        })