// dependecia request
//tipos: commonjs, module 


const request= require('request') 

//la direccion de la api: endpoint
const url= 'https://dinosaur-facts-api.shultzlab.com/dinosaurs'

//hacer operacion asincrona
let r = request( url , 
                { json:true },
                (error , respuesta , body)=> {
                    let dinosaurios = body
                    dinosaurios.forEach(dinosaurio => {
                        console.log(dinosaurio.Name)
                        console.log("-------------")
                    });
                })   


