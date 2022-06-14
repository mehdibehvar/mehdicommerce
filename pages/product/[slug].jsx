import SingleProductLayout from 'layouts/singleProductLayout';
import Product from 'models/Product';
import Head from 'next/head';

import db from 'utils/db';


export default function SingleProduct({product}) {

  return (
 <>
  <Head>
    <title>brand-{product.name}</title>
    <meta name={product.name} content={product.description}/>
  </Head>
  <SingleProductLayout product={product} />
 </>
  )
}

export async function getServerSideProps(context) {
    const {params}=context;
    const {slug}=params;
  await db.connect();
  const product=await Product.findOne({slug}).lean();
  await db.disconnect();
  if(!product){
    return {notFound:true}
  }
    return({
        props:{
            product:db.convertDocToObj(product)
        }
    })
}

///findone is a mongoose function that Finds one document.
///Product is a mongoos model of data
///_id: new ObjectId("62a85e0f3e8d819102623834"), convertDocToObj -->_id: '62a85e0f3e8d819102623834',
///use lean function
///By default, Mongoose queries return an instance of the Mongoose Document class.
/// Documents are much heavier than vanilla JavaScript objects, 
///because they have a lot of internal state for change tracking. Enabling the lean 
///option tells Mongoose to skip instantiating a full Mongoose document 
///and just give you the POJO.(Plain Old JavaScript Object )