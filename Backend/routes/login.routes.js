const express = require('express');
const router = express.Router();
const {getDetails,postDetails,updateDetails,deleteDetails,getSingleDetails} = require("../controllers/login.controllers.js");

//post login form

//get details
router.get('/all', getDetails);

//get Single user Details
router.get('/:id', getSingleDetails);

//post details
router.post('/', postDetails);

//update details
router.put('/:id', updateDetails);

//delete details
router.delete('/:id', deleteDetails);

module.exports = router;    
