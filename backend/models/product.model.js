import mongoose from 'mongoose';

const productSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    image: { 
        type: String,
        required: true
    },
}, {
    timestamps: true // Remember to have createdAT and updatedAt

});

const Product = mongoose.model('Product', productSchema);

export default Product;