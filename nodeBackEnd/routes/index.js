const express = require('express');
const router = express.Router();

router.get("/",(req,res) => {res.json([
                {'codigo':1,'nome':'CavanhaMan'},
                {'codigo':2,'nome':'Bolsonaro'}
            ]
        )});

module.exports = router;