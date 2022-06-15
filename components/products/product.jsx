import Image from "next/image";
import Link from "next/link";

export default function Product({ product }) {
  const {slug}=product;
  return (
    <div className="col-sm-4 col-md-4 col-lg-4  mb-3 mb-md-0 ">
    <div className=" border   category-section p-2 text-end">
      <Link
        href={{
          pathname: "/product/[slug]",
          query: {
            slug:encodeURIComponent(slug),
          },
        }}
      >
        <a className="text-decoration-none text-dark">
          <div className="d-flex justify-content-around align-items-center">   
            <div className="product-image">
              <Image
                className="img-fluid"
                src={product.image}
                alt={product.name}
                width={100}
                height={100}
                layout="responsive"
              />
            </div>
            <div className="cat-describe">
              <p className="name mb-2">{product.name}</p>
              <p className="text-danger mb-2">price: {product.price}</p>
            </div>
          </div>
        </a>
      </Link>
      <button  className="add-to-basket-button btn btn-primary btn-sm ">افزودن به سبد خرید</button>
    </div>
    </div>
  );
}
