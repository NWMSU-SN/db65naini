var express = require('express'); 
var router = express.Router(); 
 
// Require controller modules. 
var api_controller = require('../controllers/api'); 
var lagguage_controller = require('../controllers/lagguageController'); 
 
/// API ROUTE /// 
 
// GET resources base. 
router.get('/', api_controller.api); 
 
/// COSTUME ROUTES /// 
 
// POST request for creating a Costume.  
router.post('/lagguages', lagguage_controller.lagguage_create_post); 
 
// DELETE request to delete Costume. 
router.delete('/lagguages/:id', lagguage_controller.lagguage_delete); 
 
// PUT request to update Costume. 
router.put('/lagguages/:id', 
lagguage_controller.lagguage_update_put); 
 
// GET request for one Costume. 
router.get('/lagguages/:id', lagguage_controller.lagguage_detail); 
 
// GET request for list of all Costume items. 
router.get('/lagguages', lagguage_controller.lagguage_list); 
 
module.exports = router; 