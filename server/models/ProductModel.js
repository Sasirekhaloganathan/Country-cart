const mongoose=require('mongoose')

const ProductSchema=new mongoose.Schema({
    ProductName:{type: String, required: true},
    ProductPrice:{type: Number, required:true , unique: true},
    Quantity: { type: Number, required: true },
    
},

{
    timestamps: true
}
);

module.exports = mongoose.model("ProductModel",ProductSchema)