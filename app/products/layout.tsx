'use client';

import { CartContext, CartDispatchContext } from '@/app/products/cart-context';
import Navigation from '@/app/_components/navigation';
import { useReducer } from 'react';
import { cartReducer, initialCartItems } from '@/app/products/cart-reducer';

export default function ProductsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [cartItems, dispatch] = useReducer(cartReducer, initialCartItems);
  const totalCartItemsQuantity = cartItems.reduce(
    (acc, value) => acc + value.quantity,
    0
  );

  return (
    <CartContext.Provider value={cartItems}>
      <CartDispatchContext.Provider value={dispatch}>
        <Navigation totalCartItemsQuantity={totalCartItemsQuantity} />
        <main className="p-4 md:p-8 ">{children}</main>
      </CartDispatchContext.Provider>
    </CartContext.Provider>
  );
}
