import bcrypt from "bcrypt";
import User from 'models/User';
import nc from 'next-connect';
import { signToken } from "utils/auth";
import db from 'utils/db';


const handler = nc();

handler.post(async (req, res) => {
  await db.connect();
  const user= await User.findOne({email:req.body.email});
  await db.disconnect();
  ///if we get the user by email then we compare the plain password in the body of ajax request 
  ///with the encrypted password in the users database;
  if(user&& bcrypt.compareSync(req.body.password,user.password)){
    ////we first build a token by  JSON Web Token (JWT) package according to user informaition
    const token=signToken(user);
    ///then we send token and user information in response;
    res.send({
      token,
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      favorites:user.favorites
    });
  }else{
    res.status(401).send({ message: 'ایمیل یا رمزعبور اشتباه میباشد.' });
  }
  
});
handler.put(async (req, res) => {
  await db.connect();
  const user = await User.findOne({email:req.body.email});
  console.log(req.body.id);
  user.favorites=req.body.like?user.favorites.filter(fav=>fav!=req.body.id):[...user.favorites,req.body.id];
  await user.save();
  await db.disconnect();
  res.send(user);
});
export default handler;
///in this section we are going to implement a backend to authenticate the user