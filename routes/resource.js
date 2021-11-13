var express = require('express'); 
var router = express.Router(); 
 
// Require controller modules. 
var api_controller = require('../controllers/api'); 
var luggage_controller = require('../controllers/luggage'); 
 
/// API ROUTE /// 
 
// GET resources base. 
router.get('/', api_controller.api); 
 
/// COSTUME ROUTES /// 
 
// POST request for creating a Costume.  
router.post('/resource/luggages', luggage_controller.luggage_create_post); 
 
// DELETE request to delete Costume. 
router.delete('/resource/luggages/:id', luggage_controller.luggage_delete); 
 
// PUT request to update Costume. 
router.put('/resource/luggages/:id', 
luggage_controller.luggage_update_put); 
 
// GET request for one Costume. 
router.get('/resource/luggages/:id', luggage_controller.luggage_detail); 
 
// GET request for list of all Costume items. 
router.get('/resource/luggages', luggage_controller.luggage_list); 

module.exports = router; 