import Link from 'next/link';
import { PowerIcon } from '@heroicons/react/24/outline';
import NavLinks from './navlink';

export default function SideNav() {
  return (
    <div className="flex flex-col md:px-2 h-screen w-[250px] bg-slate-500 justify-between p-8">
        <NavLinks />

        <form
          action={async () => {
            'use server';
            //await signOut();
          }}
        >
          <button className="flex h-[48px] w-full grow self-end justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
            <PowerIcon className="w-6" />
            <div className="hidden md:block">Sign Out</div>
          </button>
        </form>
      </div>
  );
}