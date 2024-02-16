'use client';

import ProductCard from '@/app/products/product-card';
import { Product } from '@/app/products/product';
import { useContext, useEffect, useState } from 'react';
import { CartContext, CartDispatchContext } from '@/app/products/cart-context';

export default function Page() {
  const [products, setProducts] = useState<Product[]>([]);
  const cartItems = useContext(CartContext);
  const dispatch = useContext(CartDispatchContext);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  function addCartItem(productId: string) {
    dispatch({
      type: 'Add',
      productId,
    });
  }

  function removeCartItem(productId: string) {
    dispatch({
      type: 'Remove',
      productId,
    });
  }

  function changeCartItem(productId: string, quantity: number) {
    if (quantity < 1) {
      removeCartItem(productId);
    } else {
      dispatch({
        type: 'Update',
        productId,
        quantity,
      });
    }
  }

  const productListItems = products.map(product => {
    const cartItem = cartItems.find(item => item.productId === product.id);
    const quantity = cartItem?.quantity ?? 0;

    return (
      <ProductCard
        key={product.id}
        title={product.title}
        description={product.description}
        price={product.price}
        onAddCartItem={() => addCartItem(product.id)}
        onChangeCartItem={quantity => changeCartItem(product.id, quantity)}
        quantity={quantity}></ProductCard>
    );
  });

  return (
    <div>
      <h1 className="text-2xl font-medium tracking-wide text-slate-700 mb-6">
        Products
      </h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {productListItems}
      </div>
    </div>
  );
}
