'use client';
import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

import { type Menu } from '@/lib/types';

const FooterSectionHeader = ({ header }: { header: string }) => {
  return <h3 className="tracki uppercase dark:dark:text-gray-50">{header}</h3>;
};

const FooterMenuItem = ({ item }: { item: Menu }) => {
  const pathname = usePathname();
  const [active, setActive] = useState(pathname === item.path);

  useEffect(() => {
    setActive(pathname === item.path);
  }, [pathname, item.path]);

  return (
    <li>
      <Link
        href={item.path}
        className={clsx(
          'block text-lg underline-offset-4 hover:text-black hover:underline dark:hover:text-neutral-300 md:inline-block md:text-sm',
          {
            'text-black dark:text-neutral-300': active,
          }
        )}
      >
        {item.title}
      </Link>
    </li>
  );
};

export default function FooterMenu({
  header,
  menu,
}: {
  header: string;
  menu: Menu[];
}) {
  if (!menu.length) return null;

  return (
    <nav className="space-y-3">
      <FooterSectionHeader header={header} />
      <ul className="space-y-1">
        {menu.map((item: Menu) => {
          return <FooterMenuItem key={item.title} item={item} />;
        })}
      </ul>
    </nav>
  );
}
