import Header from 'components/header/Header';
import { useAuthDispatchContext } from 'contexts/authContext/AuthContext';
import { actionType } from 'contexts/authContext/AuthReducer';
import SingleProductLayout from 'layouts/singleProductLayout';
import { get } from 'lib';
import { useRouter } from 'next/router';
import  { useEffect } from 'react'

export default function SingleProduct({product}) {
    const router=useRouter()
    const {slug}=router.query;

  return (
  <SingleProductLayout product={product} />
  )
}

export async function getServerSideProps({params}) {
    const product=await get("http://localhost:5001/products",{
        params:{
            id:params.slug
        }
    })
    if (!product[0]) {
        notFound:true
    }
    return({
        props:{
            product:product[0]
        }
    })
}