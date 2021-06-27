const mongoose = require('mongoose');

const stepSchema = new mongoose.Schema({
    _id : mongoose.Schema.Types.ObjectId,
    cilj : {
        type : mongoose.Schema.Types.ObjectId,
        ref: "Step",
        required : true
    },
    redniBroj : {
        type: Number,
        required: true,
    },
    opis : {
        type: String,
        required : true
    }
});

const Step = mongoose.model("Step", stepSchema);
module.exports = Step