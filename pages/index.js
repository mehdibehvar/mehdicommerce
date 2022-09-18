import Products from "components/products/products";
import Product from "models/Product";
import Head from "next/head";
import db from "utils/db";
import Footer from "../components/footer/Footer";
import ShipingNav from "../components/shiping-nav/ShipingNav";
import Carousel from "../components/slider/Carousel";
import MainLayout from "../layouts/main-layout";
export default function Home({ products }) {

  return (
    <>
      <Head>
        <title>brand-online-shop</title>
      </Head>

      <MainLayout>
        <Carousel />
        <ShipingNav />
        <Products products={products} />
        <Footer />
      </MainLayout>
    </>
  );
}

export async function getServerSideProps() {
  await db.connect();
  const products = await Product.find({}).lean();
  await db.disconnect();
  if (!products) {
    return { notFound: true };
  }
  return {
    props: {
      products: products.map((doc) => db.convertDocToObj(doc)),
    },
  };
}

//converDocToObj is an utility function than convert doc  JSON serializable data types.

///Product is a mongoos model of data

///use find function
// Mongoose models provide several static helper functions for CRUD operations.
// Each of these functions returns a mongoose Query object.

///use lean function
///By default, Mongoose queries return an instance of the Mongoose Document class.
/// Documents are much heavier than vanilla JavaScript objects,
///because they have a lot of internal state for change tracking. Enabling the lean
///option tells Mongoose to skip instantiating a full Mongoose document
///and just give you the POJO.(Plain Old JavaScript Object )

///Error: Error serializing `.products[0].createdAt` returned from `getServerSideProps` in "/".
///Reason: `object`("[object Date]") cannot be serialized as JSON.
/// Please only return JSON serializable data types.
