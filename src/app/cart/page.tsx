import { cookies } from 'next/headers';
import { CartModalD } from 'src/components/cart/modal';
import { getCart } from 'src/lib/shopify';

import { type Metadata } from "next"

export const metadata: Metadata = {
  title: "Cart",
  description: "Explore the latest news and updates from the community",
}

export default async function Cart() {
  const cartId = cookies().get('cartId')?.value;
  let cart;

  if (cartId) {
    cart = await getCart(cartId);
  }

  return <CartModalD cart={cart} />;
}
