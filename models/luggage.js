const mongoose= require('mongoose');


const luggageSchema = mongoose.Schema({
    luggage_type: String,
    size:String,
    cost:Number
})

module.exports= mongoose.model("Luggages",luggageSchema);

