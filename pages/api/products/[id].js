import Product from 'models/Product';
import nc from 'next-connect';
import db from 'utils/db';


const handler = nc();

handler.get(async (req, res) => {
  await db.connect();
  const products = await Product.findById(req.query.id);
  await db.disconnect();
  res.send(products);
});

export default handler;