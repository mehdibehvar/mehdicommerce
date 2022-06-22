import nc from 'next-connect';
import bcrypt from 'bcrypt';
import db from '../../../utils/db';
import { signToken } from 'utils/auth';
import User from 'models/User';

const handler = nc();

handler.put(async (req, res) => {
  await db.connect();
  const user = await User.findById(req.body.id);
  user.name = req.body.name;
  user.email = req.body.email;
  user.password = req.body.password
    ? bcrypt.hashSync(req.body.password,Math.LOG2E)
    : user.password;
  await user.save();
  await db.disconnect();

  const token = signToken(user);
  res.send({
    token,
    _id: user._id,
    name: user.name,
    email: user.email,
    isAdmin: user.isAdmin,
  });
});

export default handler;