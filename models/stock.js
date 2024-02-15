const { model, Schema } = require('mongoose')


const stockSchema = new Schema ({
    name: { type: String, required: true },
    symbol: { type: String, required: true },
    lastPrice: { type: Number, required: true },
    change: { type: Number, required: true },
    high: { type: Number, required: true },
    low: { type: Number, required: true },
    open: { type: Number, required: true }
}, {
    timestamps: true
})

const Stock = model('Stock', stockSchema)

module.exports = Stock