const mongoose= require('mongoose');


const luggageSchema = mongoose.Schema({
    luggage_type: String,
    size:String,
    cost:{ type: Number, min: 20, max: 100, default: 20 }
})

module.exports= mongoose.model("Luggages",luggageSchema);

