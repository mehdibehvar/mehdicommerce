import Image from "next/image";
import Link from "next/link";

export default function Product({ product }) {
  return (
    <div className="col-sm-4 col-md-4 col-lg-4 category-section mb-3 mb-md-0 p-1">
      <Link
        href={{
          pathname: "/product/[slug]",
          query: {
            slug:encodeURIComponent(product.slug),
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
              <p className="text-danger mb-0">price: {product.price}</p>
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
}
