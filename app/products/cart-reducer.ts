import { CartItem } from '@/app/products/cart-item';

export const initialCartItems: CartItem[] = [];

export type AddCartItemAction = { type: 'Add'; productId: string };
export type RemoveCartItemAction = { type: 'Remove'; productId: string };
export type UpdateCartItemAction = {
  type: 'Update';
  productId: string;
  quantity: number;
};
export type CartAction =
  | AddCartItemAction
  | RemoveCartItemAction
  | UpdateCartItemAction;

export function cartReducer(state: CartItem[], action: CartAction): CartItem[] {
  switch (action.type) {
    case 'Add': {
      return [...state, { productId: action.productId, quantity: 1 }];
    }
    case 'Remove': {
      return state.filter(item => item.productId !== action.productId);
    }
    case 'Update': {
      return state.map(item =>
        item.productId === action.productId
          ? { ...item, quantity: action.quantity }
          : item
      );
    }
    default: {
      return state;
    }
  }
}
