const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');
const Goal = require('../../models/goal');
const Step = require('../../models/step');

router.get("/", async function(req,res) {
    console.log("Funkcija koja izvlaci sve podatke!");
    try {
        const all = await Goal.find({}).exec();
        res.json(all).status(201);
    } catch(error) {
        next(error);
    }
    

});

router.get("/:id",async function(req,res) {
    const podatak = req.params.id;
    console.log("Funkcija koja izvlaci podatke sa id: " + podatak);
    try {
        const all = await Goal.find({_id : podatak}).exec();
        res.json(all).status(201);
    } catch(error) {
        next(error);
    }
    
});

router.post("/",function(req,res,next){
    console.log("POST zahtev koja postavlja zadatak u bazu!");
    try {
        const naziv = req.body.naziv;
        const opis = req.body.opis;
        const vaznost = req.body.vaznost;
        console.log("Ubacujemo zadatak sa nazivom: " + naziv );
        const newGoal = {
            _id : new mongoose.Types.ObjectId,
            naziv : naziv,
            opis: opis,
            vaznost : vaznost
        }
        console.log("Kreirali smo zadatak");
        Goal.create(newGoal)
            .then(user => {
                res.status(201).json({message : "Svaka cast majstore"});
            })
            .catch(err => {
                res.send(err);
            })
        console.log("Ubacili smo zadatak");
    } catch(error) {
        next(error)
    }
});
module.exports = router;
