import bcrypt from "bcrypt";
import User from 'models/User';
import nc from 'next-connect';
import { signToken } from "utils/auth";
import db from 'utils/db';


const handler = nc();

handler.post(async (req, res) => {
  await db.connect();
  const newUser= new User({name:req.body.name,
  email:req.body.email,
password:bcrypt.hashSync(req.body.password,Math.LOG2E),
isAdmin:false});
const user=await newUser.save();
  await db.disconnect();
    ////we first build a token by  JSON Web Token (JWT) package according to user informaition
    const token=signToken(user);
    ///then we send token and user information in response;
    res.send({
      token,
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin
    });
  
});

export default handler;
///in this section we are going to implement a backend to create new user