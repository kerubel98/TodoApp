'use client';

import {
  HomeIcon,
  BoltIcon,
  DocumentDuplicateIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';


const links = [
  { name: 'Home', href: '/dashboard', icon: HomeIcon },
  {name: 'Task manger', href: '/dashboard/invoices',icon: BoltIcon}, 
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <div>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              'flex h-[40px] gap-8 items-center rounded-md px-3 text-sm font-medium hover:bg-blue-100 hover:text-sky-600 mb-6 ',
              {
                'bg-blue-100 text-blue-600': pathname === link.href,
              },
            )}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </div>
  );
}
