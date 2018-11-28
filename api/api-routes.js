// api-routes.js
// Initialize express router
let router = require('express').Router();

// Import contact controller
var thisforthatController = require('./Controller');


// I'm not sure if I need this next part but I will leave it here for good measure
 router.all('/', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next()
  });

// Contact routes 
router.route('/thisforthat')
    .get(thisforthatController.index)
    .post(thisforthatController.new);

// Export API routes
module.exports = router;

 

  
