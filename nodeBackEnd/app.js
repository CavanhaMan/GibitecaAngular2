const express = require('express');

const PORT = 3000;

const app = express();

app.get("/", (req,res) => res.json({status: "Nodejs backend"}));

app.listen(PORT, () => console.log("escutando na porta "+PORT));
