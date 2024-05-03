const express = require('express');
const router = express.Router();
const path = require('path');
const  productcontrollers = require('../controllers/Product');

router.get('/second',productcontrollers.addproduct )

module.exports = router;    