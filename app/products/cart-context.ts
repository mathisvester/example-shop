import { createContext, Dispatch } from 'react';
import { CartAction, initialCartItems } from '@/app/products/cart-reducer';
import { CartItem } from '@/app/products/cart-item';

export const CartContext = createContext<CartItem[]>(initialCartItems);
export const CartDispatchContext = createContext<Dispatch<CartAction>>(
  () => {}
);
