import { basketActionTypes, store } from "contexts/store";
import { get } from "lib";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
export default function BasketItem({ product }) {
  const { dispatch } = useContext(store);
  const { image, name, price, slug, quantity, _id } = product;
  const handleUpdateBasket = async (product, value) => {
    const data = await get(`/api/products/${_id}`);
    if (data.countInStock >= value) {
      dispatch({
        type: basketActionTypes.update_basket,
        payload: { ...product, quantity: value },
      });
    } else {
      window.alert(
        `درخواست شما بیشتر از موجودی انبار است.تعداد ${countInStock}از این محصول در انبار وجود دارد`
      );
    }
  };
  function handleRemoveProduct(product) {
    dispatch({
      type: basketActionTypes.remove_from_basket,
      payload: product._id,
    });
  }
  return (
    <tr>
      <th scope="row">
        <Image
          src={image}
          alt={name}
          className="rounded-3 border"
          width={100}
          height={100}
          layout="fixed"
        />
      </th>
      <td>
        <Link href={`product/${slug}`}>
          <a>{name}</a>
        </Link>
      </td>
      <td>{price}</td>
      <td>
        <select
          value={quantity}
          onChange={(e) => handleUpdateBasket(product, e.target.value)}
        >
          {[...Array(product.countInStock).keys()].map((x) => (
            <option key={x + 1} value={x + 1}>
              {x + 1}
            </option>
          ))}
        </select>
      </td>
      <td>
        <button
          onClick={() => handleRemoveProduct(product)}
          type="button"
          className="btn btn-outline-danger"
        >
          X
        </button>
      </td>
    </tr>
  );
}
///keys() returns an Array Iterator object with the keys of an array:
/// for(i=1,i<product.countinstock,i++){return <option key={i} value={i}></option>}
