'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation({
  totalCartItemsQuantity,
}: {
  totalCartItemsQuantity: number;
}) {
  return (
    <nav className="flex px-4 md:px-8 bg-white py-5 border-b border-slate-200">
      <ul className="flex gap-4">
        <li>
          <NavigationItem href="/" label="Home" />
        </li>
        <li>
          <NavigationItem href="/products" label="Products" />
        </li>
      </ul>
      <ul className="flex gap-4 ms-auto">
        <li>
          <NavigationItem
            href="/cart"
            label={`Cart (${totalCartItemsQuantity})`}
          />
        </li>
        <li>
          <NavigationItem href="/login" label="Login" />
        </li>
      </ul>
    </nav>
  );
}

function NavigationItem({ href, label }: { href: string; label: string }) {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      className={`uppercase tracking-wide py-1 text-sm ${pathname === href ? 'text-slate-700' : 'text-slate-500 hover:text-slate-700'}`}>
      {label}
    </Link>
  );
}
