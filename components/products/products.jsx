import Product from "./product";

export default function Products({products}) {
const productsList=products.map(product=><Product key={product._id} product={product}/>)
  return (
    <div className="container  category-wrapper mt-5">
      <div className="row g-3  bg-white d-flex justify-content-center align-items-center mb-2 ">
      {productsList}
      </div>
    
    </div>
  );
}
