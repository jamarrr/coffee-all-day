'use client';

import {
  NavigationMenu,
  NavigationMenuLink,
} from '@/components/ui/navigation-menu';
import Image from 'next/image';
import Link from 'next/link';
import CompanyIcon from '../CompanyIcon';

export default function Header() {
  return (
    <div className="w-full py-6 pl-4 pr-6 flex justify-between absolute">
      <p className="text-xl font-semibold">
        <CompanyIcon />
      </p>
      <NavigationMenu className="flex gap-10">
        <Link href="/" legacyBehavior passHref>
          <NavigationMenuLink>Home</NavigationMenuLink>
        </Link>
        <Link href="/#about" legacyBehavior passHref>
          <NavigationMenuLink>About Us</NavigationMenuLink>
        </Link>
        <Link href="/shop" legacyBehavior passHref>
          <NavigationMenuLink>Shop</NavigationMenuLink>
        </Link>
        <Link href="/#contact" legacyBehavior passHref>
          <NavigationMenuLink>Contact Us</NavigationMenuLink>
        </Link>
      </NavigationMenu>
    </div>
  );
}
