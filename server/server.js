

const product = require('./Backend/Routes/Products')
const purchase = require('./Backend/Routes/Purchase')
const contact = require('./Backend/Routes/Contact')
const users = require('./Backend/Routes/Users')


const express = require('express')
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 3500;


require('dotenv').config()
app.use(express.static('public'));
app.use(express.json());
app.use(cors());


//Contact Routes
app.get('/contacts', contact.getAllContacts)
app.get('/contacts/:id', contact.getOneContact)
app.post('/contacts/', contact.postContact)
app.delete('/contacts/:id', contact.deleteContact)

//Product Routes
app.get('/products', product.getAllProducts)
app.get('/products/:id', product.getOneProduct)
//app.post('/products', product.addToProduct)
app.patch('/product/edit/:id', product.editQuantity)
app.delete('/product/remove', product.deleteCart)

//User Routes
app.get('/users', users.getAllUsers)
app.get('/users/:id', users.getOneUser)
app.post('/users', users.addUser)
app.post('/users/login', users.LoginUser)
app.patch('/users/:id', users.editUser)
app.delete('/users/:id', users.deleteUser)


//Purchase Routes
app.get('/purchase', purchase.getAllPurchase)
app.get('/purchase/:id', purchase.getOnePurchase)
app.post('/purchase', purchase.AddPurchase)
app.put('/purchase/:id', purchase.EditPurchase)
app.delete('/purchase/:id', purchase.DeletePurchase)






app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})