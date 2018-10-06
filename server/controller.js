function getInventory (req,res){
    const db = req.app.get('db')

    return db.get_inventory()
        .then(response => {

            res.status(200).send(response);
        })
        .catch(err => {
            console.log('did not retrieve data', err)
        })

}

function createProduct (req,res){
    const {product_name, price, image_url} = req.body;
    const db = req.app.get('db')
    return db.create_product([product_name, price, image_url])
    .then(response => {

            res.status(200).send(response);
        })
        .catch(err => {
            console.log('did not retrieve data', err)
        });

}

function deleteProduct (req, res){
    const db = req.app.get('db')
    return db.delete_product([req.params.id])
    .then(response => {
        res.status(200).send('Deleted Successfully')
    })
    .catch(err => {
        console.log('error deleting item', err)
    })
}

module.exports = {
    getInventory,
    createProduct,
    deleteProduct
}