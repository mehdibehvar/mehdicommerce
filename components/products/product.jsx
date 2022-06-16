import { basketActionTypes, store } from "contexts/store";
import { get } from "lib";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { useRouter } from "next/router";

export default function Product({ product }) {
  const { dispatch,state } = useContext(store);
  const { name, price, slug, image, countInStock,_id } = product;
  const router=useRouter()
  const addToCartHandeler =async () => {
    const existedItem=state.basket.basketItems.find(item=>item._id===_id);
    ///if the item exist in my basket sum its prevquantity with one;otherwise return one because its the first time you want add it to basket
    const quantity=existedItem?parseInt(existedItem.quantity)+1:1
    const data=await get(`/api/products/${_id}`);
    if (data.countInStock>=quantity) {
      dispatch({
        type:  basketActionTypes.update_basket,
        payload: { ...product, quantity },
      });
    } else {
      window.alert(`درخواست شما بیشتر از موجودی انبار است.تعداد ${countInStock}از این محصول در انبار وجود دارد`);
    }
    router.push("/basket")
  };
  return (
    <div className="col-sm-4 col-md-4 col-lg-4  mb-3 mb-md-0 ">
    <div className=" border   category-section p-2 text-end">
      <Link
        href={`/product/${slug}`}
      >
        <a className="text-decoration-none text-dark">
          <div className="d-flex justify-content-around align-items-center">   
            <div className="product-image">
              <Image
                className="img-fluid"
                src={image}
                alt={name}
                width={100}
                height={100}
                layout="responsive"
              />
            </div>
            <div className="cat-describe">
              <p className="name mb-2">{name}</p>
              <p className="text-danger mb-2">price: {price}</p>
            </div>
          </div>
        </a>
      </Link>
      <button onClick={addToCartHandeler} type="button"  className="add-to-basket-button btn btn-primary btn-sm ">افزودن به سبد خرید</button>
    </div>
    </div>
  );
}
