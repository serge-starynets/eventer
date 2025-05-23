'use client';

import Image from 'next/image';
import Link from 'next/link';
import Logo from '@/images/eventer.png';
import { Button } from '@nextui-org/react';
import { usePathname } from 'next/navigation';
import { signout } from '@/actions/signout';

const links = [
  { route: '/dashboard', name: 'Home' },
  { route: '/dashboard/events', name: 'Events' },
  { route: '/dashboard/guests', name: 'Guests' },
  { route: '/dashboard/activity', name: 'Activity' },
  { route: '/dashboard/settings', name: 'Settings' },
];

const isActive = (path: string, route: string) => {
  // all routes other than auth routes include "/dashboard"
  // so handle that first
  if (route === '/dashboard') {
    return path === '/dashboard';
  } else {
    return path.includes(route);
  }
};

const Side = () => {
  const path = usePathname();
  const activeClass = 'bg-primary hover:bg-primary';

  return (
    <div className="w-full h-full px-3 relative">
      <div className="mb-12">
        <figure className="w-[80px] pt-4">
          <Image src={Logo} alt="eventer" />
        </figure>
      </div>
      <div>
        {links.map((link) => (
          <div className="w-full" key={link.route}>
            <Link href={link.route}>
              <div
                className={`w-full h-full py-2 px-2 hover:bg-content1 rounded-lg ${
                  isActive(path, link.route) ? activeClass : ''
                }`}
              >
                {link.name}
              </div>
            </Link>
          </div>
        ))}
      </div>
      <div className="absolute bottom-0 w-full left-0 px-4">
        <Button fullWidth variant="ghost" onClick={() => signout()}>
          Sign Out
        </Button>
      </div>
    </div>
  );
};

export default Side;
