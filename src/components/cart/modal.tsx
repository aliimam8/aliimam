'use client';

import { ShoppingCartIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import Price from 'src/components/price';
import { DEFAULT_OPTION } from 'src/lib/constants';
import type { Cart } from 'src/lib/shopify/types';
import { createUrl } from 'src/lib/utils';
import { DeleteItemButton } from './delete-item-button';
import { EditItemQuantityButton } from './edit-item-quantity-button';

type MerchandiseSearchParams = {
  [key: string]: string;
};

export default function CartModal({ cart }: { cart: Cart | undefined }) {
  const [isOpen, setIsOpen] = useState(false);
  const quantityRef = useRef(cart?.totalQuantity);

  const closeCart = () => setIsOpen(false);

  useEffect(() => {
    // Open cart modal when quantity changes.
    if (cart?.totalQuantity !== quantityRef.current) {
      // But only if it's not already open (quantity also changes when editing items in cart).
      if (!isOpen) {
        setIsOpen(true);
      }

      // Always update the quantity reference
      quantityRef.current = cart?.totalQuantity;
    }
  }, [isOpen, cart?.totalQuantity, quantityRef]);

  return (
    <>
      <div className="mx-auto mt-40 max-w-3xl px-4 sm:px-6 md:max-w-5xl ">
      <h1 className="my-10 mt-40 text-center font-bold text-2xl sm:text-4xl">
         My Cart
        </h1>

        {!cart || cart.lines.length === 0 ? (
          <div className="mt-20 flex w-full flex-col items-center justify-center overflow-hidden">
            <ShoppingCartIcon className="h-16" />
            <p className="mt-6 text-center text-2xl font-bold">Your cart is empty.</p>
          </div>
        ) : (
          <div className="flex h-full flex-col justify-between overflow-hidden p-1">
            <ul className="flex-grow overflow-auto py-4">
              {cart.lines.map((item, i) => {
                const merchandiseSearchParams = {} as MerchandiseSearchParams;

                item.merchandise.selectedOptions.forEach(({ name, value }) => {
                  if (value !== DEFAULT_OPTION) {
                    merchandiseSearchParams[name.toLowerCase()] = value;
                  }
                });

                const merchandiseUrl = createUrl(
                  `/product/${item.merchandise.product.handle}`,
                  new URLSearchParams(merchandiseSearchParams)
                );

                return (
                  <li
                    key={i}
                    className="flex w-full flex-col border-b border-slate-200 dark:border-slate-800"
                  >
                    <div className="relative flex w-full flex-row justify-between px-1 py-4">
                      <div className="absolute z-40 -mt-2 ml-[55px]">
                        <DeleteItemButton item={item} />
                      </div>
                      <Link
                        href={merchandiseUrl}
                        onClick={closeCart}
                        className="z-30 flex flex-row space-x-4"
                      >
                        <div className="bg-neutral-300 dark:bg-neutral-900 dark:hover:bg-neutral-800 relative h-16 w-16 cursor-pointer overflow-hidden rounded-md border border-slate-200 dark:border-slate-800">
                          <Image
                            className="h-full w-full object-cover"
                            width={64}
                            height={64}
                            alt={
                              item.merchandise.product.featuredImage.altText ||
                              item.merchandise.product.title
                            }
                            src={item.merchandise.product.featuredImage.url}
                          />
                        </div>

                        <div className="flex flex-1 flex-col text-base">
                          <span className="leading-tight">{item.merchandise.product.title}</span>
                          {item.merchandise.title !== DEFAULT_OPTION ? (
                            <p className="text-neutral-500 dark:text-neutral-400 text-sm">
                              {item.merchandise.title}
                            </p>
                          ) : null}
                        </div>
                      </Link>
                      <div className="flex h-16 flex-col justify-between">
                        <Price
                          className="flex justify-end space-y-2 text-right text-sm"
                          amount={item.cost.totalAmount.amount}
                          currencyCode={item.cost.totalAmount.currencyCode}
                        />
                        <div className="ml-auto flex h-9 flex-row items-center rounded-full border border-slate-200 dark:border-slate-800">
                          <EditItemQuantityButton item={item} type="minus" />
                          <p className="w-6 text-center">
                            <span className="w-full text-sm">{item.quantity}</span>
                          </p>
                          <EditItemQuantityButton item={item} type="plus" />
                        </div>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
            <div className="text-neutral-500  dark:text-neutral-400 py-4 text-sm">
              <div className="mb-3 flex items-center justify-between border-b border-slate-200 pb-1 dark:border-slate-800">
                <p>Taxes</p>
                <Price
                  className="text-right text-lg text-black dark:text-white"
                  amount={cart.cost.totalTaxAmount.amount}
                  currencyCode={cart.cost.totalTaxAmount.currencyCode}
                />
              </div>
              <div className="mb-3 flex items-center justify-between border-b border-slate-200 pb-1 pt-1 dark:border-slate-800">
                <p>Shipping</p>
                <p className="text-right">Calculated at checkout</p>
              </div>
              <div className="mb-3 flex items-center justify-between border-b border-slate-200 pb-1 pt-1 dark:border-slate-800">
                <p>Total</p>
                <Price
                  className="text-right text-bold text-lg"
                  amount={cart.cost.totalAmount.amount}
                  currencyCode={cart.cost.totalAmount.currencyCode}
                />
              </div>
            </div>
            <div className="flex items-center justify-center">
              <a
                href={cart.checkoutUrl}
                className="w-[200px] rounded-full  bg-aired p-3 text-center text-sm font-medium text-white opacity-90 hover:opacity-100"
              >
                Proceed to Checkout
              </a>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
