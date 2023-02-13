const express = require('express');                      // Import express

const app = express();                                   // Create express app

const PORT = 5000;                                       // Define port

// Middleware is a function that has access to the request and response objects. register middleware olways before routes
app.use(express.json());                                 // Parse JSON data in the body of the request


app.listen( PORT, () => console.log(`Server started... on port  ${PORT}`)); // Start server


const productsList = [
    { id: 1, name: 'Product 1' , price: 1000},
    { id: 2, name: 'Product 2' , price: 2000},
    { id: 3, name: 'Product 3' , price: 3000},
    { id: 4, name: 'Product 4' , price: 4000},
    { id: 5, name: 'Product 5' , price: 5000},
    { id: 6, name: 'Product 6' , price: 6000},
    { id: 7, name: 'Product 7' , price: 7000},
    { id: 8, name: 'Product 8' , price: 8000},
    { id: 9, name: 'Product 9' , price: 9000},
    { id: 10, name: 'Product 10' , price: 10000},
    { id: 11, name: 'Product 11' , price: 11000},

];


app.get('/products', (req, res) => {  
    res.send({productsList});
        });                                           // Define route
                          
app.get('/products/:id', (req, res) => {
   const productItem = productsList.find( el => el.id === parseInt(req.params.id));
    res.send(productItem);
});                                                                // Define route


// POST request, create new product
app.post('/products', (req, res) => {
    const product = {                                      // Create new product
        id: productsList.length + 1,         // Generate new id
        name: req.body.name,                        // Get name from request body   
        price: req.body.price      // Get price from request body
    };
    productsList.push(product);                       // Add new product to productsList
res.send(product);                              // Send new product to client
});


