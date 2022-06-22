
export default function Breadcrumb({product}) {
    const {category,brand}=product
  return (
    <div className="row bg-white">
    <div className="col-sm-12 ">
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb custom-breadcrumb-sp mb-0">
                <li className="breadcrumb-item">
                    <a href="#">خانه</a>
                </li>
                <li className="breadcrumb-item custom-breadcrumb-item-sp active" aria-current="page">{category}</li>
                <li className="breadcrumb-item custom-breadcrumb-item-sp active" aria-current="page">{brand}</li>
            </ol>
        </nav>
    </div>
</div>
  )
}
