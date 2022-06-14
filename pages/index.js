import Products from "components/products/products";
import { store } from "contexts/store";
import { get } from "lib";
import Head from "next/head";
import { useContext } from "react";

import Banner from "../components/advertising/Banner";
import Footer from "../components/footer/Footer";
import ShipingNav from "../components/shiping-nav/ShipingNav";
import Carousel from "../components/slider/Carousel";

import MainLayout from "../layouts/main-layout";
import styles from "../styles/Home.module.css";




export default function Home({products}) {
const {state}=useContext(store);
const {darkMode}=state;

  return (
    <>
     <div className={`${styles.container} ${darkMode?"bg-dark":"bg-light"}`}>
      <Head>
      <title>brand-online-shop</title>
      </Head>
   <MainLayout>
       <Carousel/>
        <ShipingNav/>
        <Banner/>
        <Products products={products}/>
        <Footer />
 </MainLayout>  
    </div>
 
    </>
   
  );
}
export async function getStaticProps() {
  const products=await get("http://localhost:5001/products");
 
  if(!products){
    return {
      notFound:true
    }
    }
    return ({
      props:{
        products
      },
      revalidate:30
    })
}