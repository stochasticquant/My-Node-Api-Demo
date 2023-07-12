
// any connection to mongodb needs mongoose
const mongoose = require('mongoose')

// create data schema
const productSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please enter a product name"]
        },
        quantity: {
            type: Number,
            required: true,
            default: 0
        },
        price: {
            type: Number,
            required: true
        },
        image: {
            type: String,
            required: false
        }
    },
    {
        timestamps: true
    }
)

// create data model
const Product = mongoose.model('Product', productSchema)

// export the data model
module.exports = Product;
