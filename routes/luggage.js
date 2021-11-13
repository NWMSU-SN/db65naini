var express = require('express');
const luggage_controlers = require('../controllers/luggage');
var router = express.Router();

/* GET costumes */
router.get('/', luggage_controlers.luggage_view_all_Page);

router.get('/detail', luggage_controlers.luggage_view_one_Page);

/* GET create costume page */
router.get('/create', luggage_controlers.luggage_create_Page);


router.get('/update', luggage_controlers.luggage_update_Page); 

router.get('/delete', luggage_controlers.luggage_delete_Page); 

module.exports = router;