import Image from "next/image";

export default function ProductFeatures({product}) {
    const {name,id,price,description,image}=product
  return (
    <div className="row bg-white  my-3">
      <div className="col-8 col-md-5 p-5 " id="el">
       <Image
       src={image}
       alt={name}
       width={250}
       height={200}
       layout="responsive"
       />
      </div>
      <div className="col-sm-12 col-md-7 border-right sp-content ">
        <div className="header-sp d-flex justify-content-between mt-4">
          <h5 className="text-dark">{name}</h5>
          <div className="like-icon">
            <i className="fas fa-heart text-danger mr-2"></i>
            <i className="fa fa-share-alt mr-2" aria-hidden="true"></i>
            <i className="fas fa-bell text-primary "></i>
          </div>
        </div>
        <div className="vote-stars mt-3">
          <span>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fal fa-star"></i>
            <i className="fal fa-star"></i>
          </span>
          <p className="ml-3 d-inline text-secondary">
            (5 دیدگاه برای این کالا)
          </p>
        </div>
        <div className="discount-sp mt-3">
          <span>
            <s>250/000 تومان</s>
          </span>
          <span className="ml-3 text-danger">{price} تومان</span>
        </div>
        <div className="text-sp  mt-5 border-bottom">
          <p>
           {description}
          </p>
        </div>
        <div className="d-flex justify-content-between mt-3 sp-category">
          <span>برند: شیائومی</span>
          <span>
            <span>
              دسته بندی:
              <span className="badge badge-pill badge-primary text-white">
                هدست و هندزفری
              </span>
              <span className="badge badge-pill badge-primary text-white">
                موسیقی
              </span>
            </span>
          </span>
        </div>
        <h6 className="feature text-dark mt-3">ویژگیهای محصول</h6>
        <ul className="nav flex-column feature-list mb-4">
          <li className="nav-item text-secondary">
            <a className="nav-link active pr-0 text-secondary" href="#">
              <i className="fal fa-dot-circle text-primary mr-1"></i>کیفیت صدای
              بالا
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link pr-0 text-secondary" href="#">
              <i className="fal fa-dot-circle text-primary mr-1"></i>مقاوم در
              برابر ضربه
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link pr-0 text-secondary" href="#">
              <i className="fal fa-dot-circle text-primary mr-1"></i>ارزش خرید
              بالا
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link pr-0 text-secondary">
              <i className="fal fa-dot-circle text-primary mr-1"></i>قابلیت بی
              سیم
            </a>
          </li>
        </ul>
        <div className="sp-number">
          <form className="form-inline">
            <div className="form-group row mb-3">
              <label
                htmlFor="inputPassword"
                className="col-sm-2 col-form-label"
              >
                تعداد :
              </label>
              <div className="col-sm-3">
                <input
                  type="text"
                  className="form-control col"
                  id="inputPassword"
                />
              </div>
              <div className="col-sm-6">
                <button type="submit" className="btn btn-success ">
                  افزودن به سبد خرید
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}