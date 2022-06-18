import BasketItem from "components/basket/BasketItem";
import { store } from "contexts/store";
import Cookies from "js-cookie";
import BasketLayout from "layouts/BasketLayout";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useRouter } from "next/router";
import { useContext } from "react";

 function Basket() {
  const { state } = useContext(store);
  const { basketItems } = state.basket;
  const token=Cookies.get("token");
  const router=useRouter()
  function handlePayment() {
    if(token){
      router.push("/payment")
    }else{
      router.push("/login")
    }
  }
  const basketItemsList = basketItems.map((item) => (
    <BasketItem key={item._id} product={item} />
  ));

  return (
    <BasketLayout>
      <div className="container mt-3">
        <h5 className="mb-0 ">سبد خرید شما:</h5>
        <div className="row g-3">
          <div className="col-sm-10 ">
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
          <div className="col-sm-2 border">
            <div className="position-sticky top-50 start-0 ">
              <div className="complete-buy border mb-2 rounded-3">
                <div className="total-cost border-bottom">
                  <h5>تعداد {basketItems.reduce((ac,cu)=>ac+parseInt(cu.quantity),0)} کالا:</h5>
                  <h5>مبلغ قابل پرداخت: {basketItems.reduce((ac,cu)=>ac+(cu.price*cu.quantity),0)} تومان</h5>
                </div>
                <button onClick={handlePayment} className="btn btn-primary">تکمیل خرید</button>
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