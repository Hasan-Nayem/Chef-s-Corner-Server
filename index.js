const express = require('express');
const app = express();
const port = 3000;
const chef = require("./data/chefs.json")

app.get('/', (req, res) =>{
    res.send("Server is running");
})

app.get("/all-chef", (req, res) =>{
    res.send(chef);
})

app.get('/chef/:id', (req, res) =>{
    const id = req.params.id;
    const chefInfo = chef.find(chef => chef.id === parseInt(id));
    res.send(chefInfo);
})


app.listen(port, () => {
    console.log('listening on port - ' + port);
});