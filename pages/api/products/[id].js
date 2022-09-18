import Product from 'models/Product';
import User from 'models/User';
import nc from 'next-connect';
import db from 'utils/db';


const handler = nc();

handler.get(async (req, res) => {
  await db.connect();
  const product = await Product.findById(req.query.id);
  await db.disconnect();
  res.send(product);
});
handler.put(async (req, res) => {
  await db.connect();
  const product = await Product.findById(req.query.id);
  req.body.like?product.like=product.like-1:product.like=product.like+1;
  await product.save();
  await db.disconnect();
  res.send(product);
});
export default handler;