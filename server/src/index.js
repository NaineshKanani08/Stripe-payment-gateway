const express = require('express')
const cors = require('cors')
const Razorpay = require('Razorpay')
const { products } = require('./data')
const currencyExchangeRate = require("currency-exchange-rate")
const CC = require('currency-converter-lt')
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

/* ##############Using currency-converter-lt############## */
// let currencyConverter = new CC({ from: "USD", to: "INR", amount: 1 })

// const getData = async () => {
//     const res = await currencyConverter.convert().then((response) => {
//         return response
//     })
//     return res
// }

const getCurrentPrice = async ({ fromCurrency }) => {
    const currencyRate = await currencyExchangeRate.getCurrencyExchangeRate({ fromCurrency: fromCurrency, toCurrency: "INR" }, function (exchangeRateValue, error) {
        if (error) {
            console.error(error);
        }
        else {
            console.log(exchangeRateValue);
        }
    });
    return currencyRate
}

app.get('/order/:productId', async (req, res) => {
    const { productId } = req.params
    const product = products.find((product) => product.id === +productId)
    try {
        // const getRate = await getData()
        const getRate = await getCurrentPrice({ fromCurrency: product.currency })
        const payload = {
            amount: product.amount * 100 * Math.ceil(getRate),
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
    } catch (err) {
        console.error(err)
    }
})
app.listen(port, () => {
    console.log(`server running on PORT ${port}`)
})