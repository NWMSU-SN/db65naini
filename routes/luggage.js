var express = require('express');
const luggage_controlers = require('../controllers/luggage');
var router = express.Router();

// A little function to check if we have an authorized user and continue on 
//or 
// redirect to login. 
const secured = (req, res, next) => { 
    if (req.user){ 
      return next(); 
    } 
    req.session.returnTo = req.originalUrl; 
    res.redirect("/login"); 
  } 

/* GET costumes */
router.get('/', luggage_controlers.luggage_view_all_Page);

router.get('/detail', luggage_controlers.luggage_view_one_Page);

/* GET create costume page */
router.get('/create',secured, luggage_controlers.luggage_create_Page);


router.get('/update',secured, luggage_controlers.luggage_update_Page); 

router.get('/delete',secured, luggage_controlers.luggage_delete_Page); 

module.exports = router;