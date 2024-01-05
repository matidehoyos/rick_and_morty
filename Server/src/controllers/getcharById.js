const axios = require("axios");
const URL = "https://rym2.up.railway.app/api/character";
const API_KEY = "henrystaff";

const getCharById = (res, id) => {
    axios.get(`${URL}/${id}?key=${API_KEY}`)
         .then(response => response.data)
         .then(data => {
            const character = {
                    id: data.id,
                    name: data.name,
                    gender: data.gender,
                    origin: data.origin,
                    species: data.species,
                    image: data.image,
                    status: data.status,
                    location: data.location
                    };
            return res
                     .writeHead(200, {"Content-Type": "application/json"})
                     .end(JSON.stringify(character));
                     })
                     .catch(error => {
            return res
                     .writeHead(500, {"Content-Type": "text/plain"})
                    .end(JSON.stringify(error.message))
                     })

}



module.exports = getCharById;