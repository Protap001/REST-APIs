const express = require("express");
 const router =  express.Router();

 const products = [
    {id: 1, name: "iphone 14 pro", price: 2760},
    {id: 2, name: "Samsung s23 ultra", price: 2460},
    {id: 3, name: "xiaomi", price: 2060}
    
    ];

router.get("/", (req, res) => {
    res.send(products[0]);
});


module.exports = router;