import { cookies } from 'next/headers';
import { CartModalD } from 'src/components/cart/modal';
import { getCart } from 'src/lib/shopify';

export default async function Cart() {
  const cartId = cookies().get('cartId')?.value;
  let cart;

  if (cartId) {
    cart = await getCart(cartId);
  }

  return <CartModalD cart={cart} />;
}
