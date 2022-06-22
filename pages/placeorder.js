import PlaceOrderBasketItem from "components/placeorderBasketItem";
import StepWizard from "components/StepWizard";
import { store } from "contexts/store";
import Layout from "layouts/Layout";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useRouter } from "next/router";
import { useContext } from "react";
import styles from "../styles/PlaceOrder.module.css"
 function PlaceOrder() {
  const { state } = useContext(store);
  const { basketItems,paymentMethod,shippingAddress } = state.basket;

  const router = useRouter();
  function handleFinalPayment() {
    router.push("/shaparak");
  }
  const basketItemsList = basketItems.map((item) => (
    <PlaceOrderBasketItem key={item._id} product={item} />
  ));
  const round2=(num)=>Math.round((num)*100 ) /100;
  const itemsPrice=basketItems.reduce((ac,cu)=>ac+cu.quantity*cu.price,0);
const shippingPrice=itemsPrice>1000000?0:50000;
const taxPrice=round2(itemsPrice*0.1)
const finalPrice=round2(itemsPrice+shippingPrice+taxPrice)
  return (
    <Layout>
       <StepWizard active={3}/>
      <div className="container mt-3">
        <h5 className="mx-2 text-primary ">پرداخت نهایی:</h5>
        <div className="row g-3">
          <div className="col-sm-10 ">
            <div className="container">
              <div className="row g-3">
                <div className="col-12 p-3 border">
                <h6>ادرس تحویل:</h6>
                <span>{shippingAddress.fullName}</span>
                {"-"}
                <span>{shippingAddress.city}</span>
                {"-"}
                <span>{shippingAddress.address}</span>
                {"-"}
                <span>کد پستی:{shippingAddress.postalCode}</span>

                </div>
                <div className="col-12 p-3 border">
                  <h6>شیوه پرداخت:</h6>
                  <p className="p-0 text-success">{paymentMethod}</p>
                </div>
                <div className="col-12 p-3 border">
                  <h6>لیست سفارشات شما:</h6>
                  {basketItems.length ? (
                    <table className="table ">
                      <thead>
                        <tr>
                          <th scope="col">عکس محصول</th>
                          <th scope="col">نام محصول</th>
                          <th scope="col">قیمت</th>
                          <th scope="col">تعداد</th>
                        </tr>
                      </thead>
                      <tbody>{basketItemsList}</tbody>
                    </table>
                  ) : (
                    <div>
                      <p className="text-danger">سبد خرید شما خالی است</p>
                      <Link href="/">
                        <a>برو برای خرید</a>
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-2 border">
            <div className="position-sticky top-50 start-0 ">
              <h6 className="text-danger border-bottom pb-1">خلاصه سفارش:</h6>
              <div className="container my-3 ">
                <div className="row my-2">
                  <div className="col-6 pr-0"><h6 className={styles.orderplaceItem}>سفارشات:</h6></div>
                  <div className="col-6"><h6 className={styles.orderplacePrice}>{itemsPrice} تومان</h6></div>
                </div>
                <div className="row mb-2">
                  <div className="col-6 pr-0"><h6 className={styles.orderplaceItem}>مالیات:</h6></div>
                  <div className="col-6"><h6 className={styles.orderplacePrice}>{taxPrice} تومان</h6></div>
                </div>
                <div className="row mb-2">
                  <div className="col-6 pr-0"><h6 className={styles.orderplaceItem}>هزینه پست:</h6></div>
                  <div className="col-6"><h6 className={styles.orderplacePrice}>{shippingPrice} تومان</h6></div>
                </div>
                <div className="row mb-2">
                  <div className="col-6 text-danger pr-0"><h6 className={styles.orderplaceItem}><strong>مبلغ نهایی:</strong></h6></div>
                  <div className="col-6"><h6 className={styles.orderplacePrice}>{finalPrice} تومان</h6></div>
                </div>
                <div className="row mb-2">
               <button onClick={handleFinalPayment} 
                  className="btn btn-primary col-12">
             پرداخت کن
                </button>
                </div>
         
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
export default dynamic(() => Promise.resolve(PlaceOrder), { ssr: false });

////You may not always want to include a module on server-side. For example,
/// when the module includes a library that only works in the browser.its the reason i used the dynamic export
///we only want to show basket screen to the user in the client so we don't need to render it in server side
