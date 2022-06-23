import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true,index:true },
    slug: { type: String, required: true, unique: true },
    category: { type: String, required: true },
    image: { type: String, required: true },
    price: { type: Number, required: true },
    brand: { type: String, required: true },
    rating: { type: Number, required: true, default: 0 },
    like:{type:Number,required:true,default:0},
    numReviews: { type: Number, required: true, default: 0 },
    countInStock: { type: Number, required: true, default: 0 },
    description: { type: String, required: true },
  },
  {
    timestamps: true,
    query:{
      byName(name){
        return this.where({ name: new RegExp(name,"i") })
      }
    }
  }
);

const Product =
  mongoose.models.Product || mongoose.model('Product', productSchema);
export default Product;
