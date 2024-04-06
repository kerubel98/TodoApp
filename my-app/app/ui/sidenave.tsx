import Link from 'next/link';
import { PowerIcon } from '@heroicons/react/24/outline';
import NavLinks from './navlink';
import Userprofile from './userprofile';

export default function SideNav() {
  return (
    <div className="flex flex-col md:py-2 h-screen w-14 md:w-[300px] bg-blue-400 space-y-4 justify-between">
        <div className='w-full'>
        <Link
        className="flex h-42 md:h-20 items-start justify-start rounded-md md:justify-center"
        href="/"
      >
        <Userprofile/>
      </Link>
        <NavLinks />
        </div>
       
        <form
          action={async () => {
            'use server';
            //await signOut();
          }}
        >
          <button className="flex h-[48px] w-full grow self-end justify-center gap-2 rounded-md p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
            <PowerIcon className="w-6" />
            <div className="hidden md:block">Sign Out</div>
          </button>
        </form>
      </div>
  );
}