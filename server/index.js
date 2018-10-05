require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const controller = require('./controller')
const massive = require('massive');
const port = 8080;
const app = express();


app.use(cors());
app.use(bodyParser.json());

massive(process.env.DATABASE_STRING)
    .then(db => {
        app.set('db', db)
        console.log('database is connected')
    })
    .catch(err => {
        console.log('database connection error', err)
    })

app.get('/api/inventory', (req, res) => controller.getInventory(req, res))

app.post('/api/product', (req, res) => controller.createProduct(req, res))


app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})