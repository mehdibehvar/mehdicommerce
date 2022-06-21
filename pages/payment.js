import StepWizard from "components/StepWizard";
import { basketActionTypes, store } from "contexts/store";
import Cookies from "js-cookie";
import Layout from "layouts/Layout";
import { useRouter } from "next/router";
import { useContext, useState } from "react";
import { useSnackbar } from 'notistack';

export default function Payment() {
  const router = useRouter();
  const { dispatch } = useContext(store);
  const [paymentMethod, setPaymentMethod] = useState();
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const handlePaymentMethod = (e) => {
      e.preventDefault();
      closeSnackbar();
    if(!paymentMethod){ 
        enqueueSnackbar("شیوه پرداخت باید انتخاب شود",{variant:"error"})
return}
    dispatch({
      type: basketActionTypes.save_payment_method,
      payload: paymentMethod,
    });
    Cookies.set("paymentMethod", paymentMethod);
    router.push("/placeorder");
  };
  return (
    <Layout title="payment">
      <StepWizard active={2} />
      <div className="container w-50">
        <h4 className="mt-5 text-primary">شیوه پرداخت را انتخاب کنید:</h4>
        <form
          onChange={(e) => setPaymentMethod(e.target.value)}
          className=" row mt-3 g-3"
        >
          <div className="col-10">
            <div className="form-check mb-2">
              <input
                value="کارت اعتباری "
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
              />
              <label className="form-check-label" htmlFor="flexRadioDefault1">
                کارت اعتباری
              </label>
            </div>
            <div className="form-check">
              <input
                value="کیف پول"
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault2"
              />
              <label className="form-check-label" htmlFor="flexRadioDefault2">
                کیف پول
              </label>
            </div>
          </div>

          <div className="col-10">
            <button
              type="submit"
              onClick={handlePaymentMethod}
              className="btn btn-primary w-100 mt-3"
            >
              {" "}
              ادمه فرایند خرید
            </button>
          </div>
          </form>
          <div className="col-10 mt-2">
            <button onClick={()=>router.push("/shipping")} type="submit" className="btn btn-warning w-100">
              مرحله قبل
            </button>
          </div>
        
      </div>
    </Layout>
  );
}
