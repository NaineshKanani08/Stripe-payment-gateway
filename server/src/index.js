const express = require('express')
const cors = require('cors')
const Razorpay = require('Razorpay')
const { products } = require('./data')

const app = express()

const port = 8000
app.use(cors())
app.use(express.json())

//razorpay instance
const instance = new Razorpay({
    key_id: 'rzp_test_QOgXbMITmaM4Bq',
    key_secret: '1lVho05yxwtL59YuvzUDKdcC',
})

app.get('/products', (req, res) => {
    res.status(200).json(products)
})
app.get('/order/:productId', (req, res) => {
    const { productId } = req.params
    const product = products.find((product) => product.id === +productId)
    const payload = {
        amount: product.amount * 100 * 80,
        currency: "INR",
        receipt: "receipt#111",
        notes: { desc: product.description }
    }
    instance.orders.create(payload, (error, order) => {
        if (error) {
            return res.status(500).json(error)
        }
        return res.status(200).json(order)
    })
})
app.listen(port, () => {
    console.log(`server running on PORT ${port}`)
})