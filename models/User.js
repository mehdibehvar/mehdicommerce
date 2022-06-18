import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    name:{type:String,required:true,},
    email: { type: String, required: true,unique:true },
    password: { type: String, required: true},
    isAdmin: { type: Boolean, required: true, default: false },
  },
  {
    timestamps: true,
  }
);

const User =
  mongoose.models.User || mongoose.model('User', userSchema);
export default User;
///Mongoose provides a straight-forward, schema-based solution to model your application data
///Everything in Mongoose starts with a Schema. Each schema
// maps to a MongoDB collection and defines the shape of 
//the documents within that collection.
//Mongoose schemas support a timestamps option. If you set timestamps: true, 
//Mongoose will add two properties of type Date to your schema:
//createdAt: a date representing when this document was created
//updatedAt: a date representing when this document was last updated
///By default, Mongoose adds an _id property to your schemas.