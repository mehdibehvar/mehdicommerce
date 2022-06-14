
import BasketLayout from 'layouts/BasketLayout'

import Image from 'next/image'

import BasketStyle from "../styles/Basket.module.css"




export default function Basket() {

  return (
    <BasketLayout>
        <div className='container cart-container px-4'>
          <h5>سبد خرید شما</h5>
            <div className='row gx-3'>
                <div className='col-9  cart-list'>
                  <div className='container'>
                    <div className='row gy-3'>
                    <div className='container product-grid border rounded-3'>
                        <div className='row cart-grid-header border-bottom m-1'><p className='text-success mb-0'>فروشنده:دنیای دیجیتال</p></div>
                        <div className='row'>
                          <div className='col-6'><div className={`${BasketStyle.productWrapper} d-flex align-items-center`}>
                          <Image
                          src="/assets/images/products/product1.png"
                          alt='product-name'
                          className='rounded-3 border'
                          width={150}
                          height={150}
                          layout="fixed"
                          />
                            </div> </div>
                          <div className='col-3 d-flex align-items-center'><div className="counter">
        <button  className="increment">+</button>
        <p>4</p>
        <button className="decrement">-</button>
    </div> تعداد</div>
                          <div className='col-3 d-flex align-items-center'> مبلغ کل</div>
                        </div>
                    </div>

                 
                    </div>
                  </div>
                
                </div>
                <div className='col-3  '>
<div className='position-sticky top-50 start-50 '>
<div className='complete-buy border mb-2 rounded-3'>
                    <div className='total-cost border-bottom'>
                      <span>مجموع خرید(3 کالا):</span>
                      <span>9000 تومان</span>
                    </div>
                    <button className='btn btn-primary'>تکمیل خرید</button></div>
                  <div className='guarantee border rounded-3'>حفاظت از خریدار</div>
</div>
                </div>
            </div>
        </div>
    </BasketLayout>
  )
}
