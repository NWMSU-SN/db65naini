var Lagguage = require('../models/lagguage'); 
 
// List of all Lagguages

exports.lagguage_list =async function(req, res) { 
    try{ 
        lagguages = await Lagguage.find(); 
        res.send(lagguages); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
 
// for a specific Lagguage. 
exports.lagguage_detail = function(req, res) { 
    res.send('NOT IMPLEMENTED: lagguage detail: ' + req.params.id); 
}; 
 
// Handle lagguage create on POST. 
exports.lagguage_create_post = async function(req, res) { 
    console.log(req.body) 
    let document = new Lagguage(); 
    // We are looking for a body, since POST does not have query parameters. 
    // Even though bodies can be in many different formats, we will be picky 
    // and require that it be a json object 
    // {"lagguage_type":"goat", "cost":12, "size":"large"} 
    document.lagguage_type = req.body.lagguage_type; 
    document.cost = req.body.cost; 
    document.size = req.body.size; 
    try{ 
        let result = await document.save(); 
        res.send(result); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
 
// Handle lagguage delete form on DELETE. 
exports.lagguage_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: lagguage delete DELETE ' + req.params.id); 
}; 
 
// Handle lagguage update form on PUT. 
exports.lagguage_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: lagguage update PUT' + req.params.id); 
};

exports.lagguage_view_all_Page = async function(req, res) { 
    try{ 
        lagguages = await Lagguage.find(); 
        res.render('luggage', { title: 'Lagguage Search Results', results: lagguages }); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 