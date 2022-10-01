import Head from 'next/head';
import db from 'utils/db';
import Products from "components/products/products";
import Product from 'models/Product';
import Layout from 'layouts/Layout';
export default function Searched({products}) {

  return (
 <>
  <Head>
  <title>brand-online-shop</title>
  </Head>
<Layout>
     {!products.length==0? <Products products={products} />:<div className='d-flex justify-content-center align-items-center mt-5'><p className='text-danger'>موردی یافت نشد</p></div>}
</Layout>
 </>
  )
}

export async function getServerSideProps(context) {
    const {query}=context;
  await db.connect();
  const products=await Product.find({name:query.params}).lean();
  await db.disconnect();
  if(!products){
    return {notFound:true}
  }
    return({
        props:{
            products:products.map((doc) => db.convertDocToObj(doc)),
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
