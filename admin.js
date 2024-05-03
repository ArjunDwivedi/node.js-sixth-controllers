const express = require('express');
const router = express.Router();
const productcontrollers = require('../controllers/Product');
  


router.get('/add-product',productcontrollers.getaddproduct);

router.post('/product', productcontrollers.postproduct);

module.exports = router;
