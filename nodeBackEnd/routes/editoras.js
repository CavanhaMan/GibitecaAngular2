const express = require('express');
const Editora = require('../models/editoras');
const router = express.Router();

router.get("/",(req,res) => 
    Editora.findAll()
        .then(result => res.json(result))
        .catch(error => {
            res.status(412).json({msg: error.message});
        })
    );

router.get('/:id',(req,res) => {
    Editora.findOne({
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
    Editora.findAll({where: {nome:{[Op.like]:query}}})
        .then(editoras => res.json(editoras))
        .catch(err => console.log(err));
});

router.delete("/:id", (req,res) => {
    Editora.destroy({
        where: {codigo: req.params.id}
    })
    .then(result => res.sendStatus(204))
    .catch(error => {
        res.status(412).json({msg:error.message});
    });
});

router.post('/',(req,res) => {
    console.log(req.body);
    Editora.create(req.body)
        .then(result => res.json(result))
        .catch(error => {
            res.status(412).json({msg:error.message});
        });
});

router.put('/',(req,res) => {
    Editora.update(req.body, {
        where: {codigo: req.body.codigo}
    })
    .then(result => res.sendStatus(204))
    .catch(error => {
        res.status(412).json({msg: error.message});
    });
})

module.exports = router;