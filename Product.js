// const product  = [];
const path = require('path');


exports.getaddproduct = (req, res, next) => {
    res.sendFile(path.join(__dirname,'../','views','addproduct.html'));
};


exports.postproduct = (req, res, next) => {
    console.log(req.body);
    res.redirect('/shop/second');
};

exports.addproduct = (req, res, next) => {
    res.sendFile(path.join(__dirname,'../','views','shop.html'))
};