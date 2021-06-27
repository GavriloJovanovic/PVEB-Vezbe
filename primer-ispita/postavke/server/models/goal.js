const mongoose = require('mongoose');

const goalSchema = new mongoose.Schema({
    _id : mongoose.Schema.Types.ObjectId,
    naziv : {
        type : String,
        required: true
    },
    opis : {
        type : String,
        required: true
    },
    vaznost : {
        type : Number,
        required: true
    }
});

const Goal = mongoose.model("Goal",goalSchema);
module.exports = Goal;