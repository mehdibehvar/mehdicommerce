import BasketItem from "components/basket/BasketItem";
import { store } from "contexts/store";
import BasketLayout from "layouts/BasketLayout";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useRouter } from "next/router";
import { useContext } from "react";
import styles from "../styles/placeOrder.module.css"
 function Basket() {
  const { state } = useContext(store);
  const { basketItems } = state.basket;

  const router=useRouter()
  function handlePayment() {

      router.push("/shipping")
  
  }
  const basketItemsList = basketItems.map((item) => (
    <BasketItem key={item._id} product={item} />
  ));

  return (
    <BasketLayout>
      <div className="container mt-3">
        <h5 className="mb-2 text-primary ">سبد خرید شما:</h5>
        <div className="row g-3">
          <div className="col-md-10 ">
            {basketItems.length?<table className="table border">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">نام محصول</th>
                  <th scope="col">قیمت</th>
                  <th scope="col">تعداد</th>
                  <th scope="col">حذف</th>
                </tr>
              </thead>
              <tbody>{basketItemsList}</tbody>
            </table>:<div>
              <p className="text-danger">سبد خرید شما خالی است</p>
            <Link href="/">
            <a>برو برای خرید</a>
            </Link>
            </div>
           }
          
          </div>
          <div className="col-md-2 border">
            <div className="position-sticky top-50 start-0 ">
            <h6 className="text-danger border-bottom pb-1">خلاصه سفارش:</h6>
            <div className="container my-3 ">
                <div className="row my-2">
                  <div className="col-6 pr-0"><h6 className={styles.orderplaceItem}>سفارشات:</h6></div>
                  <div className="col-6"><h6 className={styles.orderplacePrice}>{basketItems.reduce((ac,cu)=>ac+parseInt(cu.quantity),0)} عدد</h6></div>
                </div>
                <div className="row my-2">
                  <div className="col-6 pr-0"><h6 className={styles.orderplaceItem}>مبلغ کل:</h6></div>
                  <div className="col-6"><h6 className={styles.orderplacePrice}>{basketItems.reduce((ac,cu)=>ac+(cu.price*cu.quantity),0)} تومان</h6></div>
                </div>
                <div className="row mb-2">
                <button onClick={handlePayment} className="btn btn-primary w-100">تکمیل خرید</button>
                </div>
         
              </div>
    
            </div>
          </div>
        </div>
      </div>
    </BasketLayout>
  );
}
export default dynamic (()=>Promise.resolve(Basket), { ssr: false });

////You may not always want to include a module on server-side. For example,
/// when the module includes a library that only works in the browser.its the reason i used the dynamic export
///we only want to show basket screen to the user in the client so we don't need to render it in server side