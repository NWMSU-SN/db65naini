const mongoose= require('mongoose');


const lagguageSchema = mongoose.Schema({
    lagguage_type: String,
    size:String,
    cost:Number
})

module.exports= mongoose.model("lagguages",lagguageSchema);

