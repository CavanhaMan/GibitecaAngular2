const express = require('express');

const PORT = 3000;

const app = express();

app.set("json spaces",4);

app.get("/", (req,res) => res.json({status: "Nodejs backend"}));

app.get("/clientes", (req,res) => {
    res.json([
                {'codigo':1,'nome':'Cavanha'},
                {'codigo':2,'nome':'Bolsonaro'}
            ]
    )
});

// app.listen(PORT, () => console.log("escutando na porta "+PORTA));
app.listen(PORT, () => console.log("escutando na porta "+PORT));
