const express = require('express');
const PORT = 3000;
const app = express();

app.set("json spaces",4);

// app.get("/", (req,res) => res.json({status: "Nodejs backend"}));

// app.get("/clientes", (req,res) => {
//     res.json([
//                 {'codigo':1,'nome':'Cavanha'},
//                 {'codigo':2,'nome':'Bolsonaro'}
//             ]
//     )
// });

const index = require('./routes/index');
const clientes = require('./routes/clientes');

app.use('/',index);
app.use('/cliente',clientes);

app.listen(PORT, () => console.log("escutando na porta "+PORT));
