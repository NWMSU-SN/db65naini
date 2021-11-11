var express = require('express'); 
const lagguage_controlers= require('../controllers/lagguageController'); 
var router = express.Router(); 
 
/* GET costumes */ 
router.get('/', lagguage_controlers.lagguage_view_all_Page ); 
module.exports = router; 