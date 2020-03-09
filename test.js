const axios = require("axios");

axios({
    "method":"GET",
    "url":"https://brappdbv2.p.rapidapi.com/Trail/1",
    "headers":{
    "content-type":"application/octet-stream",
    "x-rapidapi-host":"brappdbv2.p.rapidapi.com",
    "x-rapidapi-key":"uUyi2FvFE3bH1Lu4AqZY5jWBHbq7pnyjM22iB2Rc"
    }
    })
    .then((response)=>{
      console.log(response.data)
    })
    .catch((error)=>{
      console.log(error)
    })
