const express = require("express");
 const router =  express.Router();
 const Joi = require("joi");
 
 const products = [
    {id: 1, name: "iphone 14 pro", price: 2760},
    {id: 2, name: "Samsung s23 ultra", price: 2460},
    {id: 3, name: "xiaomi", price: 2060}
    
    ];

router.get("/", (req, res) => {
    res.send(products);
});


router.post("/", (req, res) => {

 const shema = new Joi.object({
    name: Joi.string().min(3).max(30).required(),
    price: Joi.number().required()
 });

     const {error} = validateProduct(req.body);
    
    if(error) {
      return  res.status(400).send(result.error.details[0].message);
        return;
    }

    const produc = {
        id: products.length + 1,
        name: req.body.name,
        price: req.body.price
    }

    products.push(produc);
    res.send(produc);
});

router.put("/:id", (req, res) => {
    const product = products.find(p => p.id == req.params.id);

    if(!product) {
      return  res.status(404).send("axtardiginiz mehsul tapilmadi");
    }

    const {error} = validateProduct(req.body);

    if(error) {
     return res.status(400).send(result.error.details[0].message);
       
    }
      

    product.name = req.body.name;
    product.price = req.body.price;

    res.send(product)
});


router.delete("/:id", (req, res) => {
    const product = products.find(p => p.id == req.params.id);

    if(!product) {
       return res.status(404).send("axtardiginiz mehsul tapilmadi");
    }

    const index = products.indexOf(product);
    products.splice(index, 1);
    res.send(product);
});


router.get("/:id", (req, res) => {
    console.log(req.params);
    console.log(req.query);

    const product = products.find(p => p.id == req.params.id);

    if(!product) {
      return  res.status(404).send("axtardiginiz mehsul tapilmadi");
    }
    res.send(product);
});


function validateProduct(product) {

    const shema = new Joi.object({
        name: Joi.string().min(3).max(30).required(),
        price: Joi.number().required()
     });
    
        return shema.validate(product);

        if(result.error) {
            res.status(400).send(result.error.details[0].message);
            return;
        }

}

module.exports = router;