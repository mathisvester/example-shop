import Button from '@/app/_components/button';

export default function ProductCard({
  title,
  description,
  price,
  onAddCartItem,
  onChangeCartItem,
  quantity,
}: {
  title: string;
  description: string;
  price: number;
  onAddCartItem: () => void;
  onChangeCartItem: (quantity: number) => void;
  quantity: number;
}) {
  return (
    <div className="border border-slate-200 p-4 rounded bg-white flex flex-col">
      <h2 className="text-lg mb-2 font-medium text-slate-700 tracking-wide">
        {title}
      </h2>
      <p className="text-sm mb-4 text-slate-500 grow">{description}</p>
      <p className="text-xl font-medium text-slate-700 tracking-wide mb-4">
        ${price}
      </p>
      <ProductCardActions
        quantity={quantity}
        onAddCartItem={() => onAddCartItem()}
        onChangeCartItem={quantity => onChangeCartItem(quantity)}
      />
    </div>
  );
}

export function ProductCardActions({
  quantity,
  onAddCartItem,
  onChangeCartItem,
}: {
  quantity: number;
  onAddCartItem: () => void;
  onChangeCartItem: (quantity: number) => void;
}) {
  if (quantity < 1) {
    return (
      <div>
        <Button label="Add to cart" onClick={() => onAddCartItem()} />
      </div>
    );
  } else {
    return (
      <div className="flex items-center gap-4 grid-cols-3">
        <Button label="-" onClick={() => onChangeCartItem(--quantity)} />
        <span className="grow w-full text-center">{quantity}</span>
        <Button label="+" onClick={() => onChangeCartItem(++quantity)} />
      </div>
    );
  }
}
