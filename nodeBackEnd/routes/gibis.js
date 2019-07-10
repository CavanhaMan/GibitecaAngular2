const express = require('express');
const Gibi = require('../models/gibis');
const router = express.Router();

router.get("/",(req,res) => 
    Gibi.findAll()
        .then(result => res.json(result))
        .catch(error => {
            res.status(412).json({msg: error.message});
        })
    );

router.get('/:id',(req,res) => {
    Gibi.findOne({
        where: {codigo: req.params.id,}
    }).then(result => {
        if(result) res.json(result);
        else res.sendStatus(404);
    }).catch(error => {
        res.status(212).json({msg: error.message});
    });
})

const Sequelize = require('sequelize');
const Op = Sequelize.Op;

router.get('/search/params',(req,res) => {
    var query = `%${req.query.neme}%`;

    console.log(query)
    Gibi.findAll({where: {nome:{[Op.like]:query}}})
        .then(gibis => res.json(gibis))
        .catch(err => console.log(err));
});

router.delete("/:id", (req,res) => {
    Gibi.destroy({
        where: {codigo: req.params.id}
    })
    .then(result => res.sendStatus(204))
    .catch(error => {
        res.status(412).json({msg:error.message});
    });
});

router.post('/',(req,res) => {
    console.log(req.body);
    Gibi.create(req.body)
        .then(result => res.json(result))
        .catch(error => {
            res.status(412).json({msg:error.message});
        });
});

router.put('/',(req,res) => {
    Gibi.update(req.body, {
        where: {codigo: req.body.codigo}
    })
    .then(result => res.sendStatus(204))
    .catch(error => {
        res.status(412).json({msg: error.message});
    });
})

module.exports = router;