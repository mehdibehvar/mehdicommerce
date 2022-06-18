import jwt from 'jsonwebtoken';

const signToken = (user) => {
  ///the sign function return a token;
  return jwt.sign(
    ///the first parameter for this function is an object as payload;
    {
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    },
/// the second parameter is a secret value so we read it from .env;
    process.env.JWT_SECRET,
    {
      expiresIn: '30d',
    }
  );
};

export { signToken };
///jwt.sign(payload, secretOrPrivateKey, [options, callback])