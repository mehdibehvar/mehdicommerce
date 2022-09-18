import { basketActionTypes, store } from "contexts/store";
import { get } from "lib";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
export default function PlaceOrderBasketItem({ product }) {
  const { dispatch } = useContext(store);
  const { image, name, price, slug, quantity, _id } = product;


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
      <td>{quantity}</td>
    </tr>
  );
}

