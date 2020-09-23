const express = require('express');
const app = express();

app.get('/', (req,res) => {
res.send("This is a trial run page, lets go!")
});

const port = process.env.port || 3000;
app.listen(port, () => {
    console.log("Server running on port 3000")
});