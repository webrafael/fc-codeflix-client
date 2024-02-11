'use client';
import { UseScroll } from '../hooks/UseScroll';
import { Logo } from './Logo';
import { NavLinks } from './NavLinks';
import { UserProfile } from './UserProfile';

export default function Header() {
  const isScrolled = UseScroll();
  return (
    <div
      className={`
      ${isScrolled && 'bg-black'}
      fixed top-0 z-50 flex w-full items-center justify-between bg-gradient-to-t from-transparent to-black p-2 px-4 transition-all lg:px-16 lg:py-4`}
    >
      <div className='flex items-center space-x-2 md:space-x-4'>
        <Logo />
        <NavLinks />
      </div>

      <UserProfile />
    </div>
  );
}
