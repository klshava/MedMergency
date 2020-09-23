const express = require('express');
const app = express();

app.get('/', (req,res) => {
res.send("This is a trial run page, lets go!")
});

app.listen(3000, () => {
    console.log("Server running on port 3000")
});