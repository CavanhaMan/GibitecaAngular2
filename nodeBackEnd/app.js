const express = require('express');
const PORT = 3000;
const app = express();
const db = require('./config/database');

db.authenticate()
    .then(() => console.log('Database connected... '))
    .catch(err => console.log('Error: '+err))

app.set("json spaces",4);

const index = require('./routes/index');
const clientes = require('./routes/clientes');

app.use('/',index);
app.use('/clientes',clientes);

app.listen(PORT, () => console.log("escutando na porta "+PORT));

// app.get("/", (req,res) => res.json({status: "Nodejs backend"}));

// app.get("/clientes", (req,res) => {
//     res.json([
//                 {'codigo':1,'nome':'Cavanha'},
//                 {'codigo':2,'nome':'Bolsonaro'}
//             ]
//     )
// });
