var Luggage = require('../models/luggage');

// List of all Luggages

exports.luggage_list = async function (req, res) {
    try {
        luggages = await Luggage.find();
        res.send(luggages);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// for a specific Luggage. 
exports.luggage_detail = async function (req, res) {
    console.log("detail" + req.params.id)
    try {
        result = await Luggage.findById(req.params.id)
        res.send(result)
    } catch (error) {
        res.status(500)
        res.send(`{"error": document for id ${req.params.id} not found`);
    }
};

// Handle luggage create on POST. 
exports.luggage_create_post = async function (req, res) {
    console.log(req.body)
    let document = new Luggage();
    // We are looking for a body, since POST does not have query parameters. 
    // Even though bodies can be in many different formats, we will be picky 
    // and require that it be a json object 
    // {"luggage_type":"goat", "cost":12, "size":"large"} 
    document.luggage_type = req.body.luggage_type;
    document.cost = req.body.cost;
    document.size = req.body.size;
    try {
        let result = await document.save();
        res.send(result);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// Handle luggage delete form on DELETE. 
exports.luggage_delete = async function (req, res) {
    console.log("delete " + req.params.id)
    try {
        result = await Luggage.findByIdAndDelete(req.params.id)
        console.log("Removed " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": Error deleting ${err}}`);
    }
};
// Handle luggage update form on PUT. 
exports.luggage_update_put = async function (req, res) {
    console.log(`update on id ${req.params.id} with body 
${JSON.stringify(req.body)}`)
    try {
        let toUpdate = await Luggage.findById(req.params.id)
        // Do updates of properties 
        if (req.body.luggage_type)
            toUpdate.luggage_type = req.body.luggage_type;
        if (req.body.cost) toUpdate.cost = req.body.cost;
        if (req.body.size) toUpdate.size = req.body.size;
        let result = await toUpdate.save();
        console.log("Sucess " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": ${err}: Update for id ${req.params.id} 
failed`);
    }
};
exports.luggage_view_all_Page = async function (req, res) {
    try {
        luggages = await Luggage.find();
        res.render('luggage', { title: 'Luggage Search Results', results: luggages });
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

exports.luggage_view_one_Page = async function (req, res) {
    console.log("single view for id " + req.query.id)
    try {
        result = await Luggage.findById(req.query.id)
        res.render('luggagedetail',
            { title: 'Luggage Detail', toShow: result });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};

// Handle building the view for creating a costume. 
// No body, no in path parameter, no query. 
// Does not need to be async 
exports.luggage_create_Page = function (req, res) {
    console.log("create view")
    try {
        res.render('luggagecreate', { title: 'Luggage Create' });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
}

// Handle building the view for updating a costume. 
// query provides the id 
exports.luggage_update_Page = async function (req, res) {
    console.log("update view for item " + req.query.id)
    try {
        let result = await Luggage.findById(req.query.id)
        res.render('luggageupdate', { title: 'Luggage Update', toShow: result });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};

// Handle a delete one view with id from query 
exports.luggage_delete_Page = async function (req, res) {
    console.log("Delete view for id " + req.query.id)
    try {
        result = await Luggage.findById(req.query.id)
        res.render('luggagedelete', {
            title: 'Luggage Delete', toShow:
                result
        });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};
