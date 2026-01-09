// components/Navbar.js
'use client';

import { AppBar, Container, Toolbar, Typography } from '@mui/material';
import Link from 'next/link';
import { usePathname } from 'next/navigation'; // for App Router
import './navbar.css';

interface NavbarProps {
  basePath?: string; // optional, default to root
}

export default function Navbar({ basePath = '' }: NavbarProps) {
  const pathname = usePathname(); // highlights active page

  const links = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
  ];

  return (
    <nav className="sticky flex items-center justify-center shadow-sm bg-white px-4 py-2 w-auto min-h-[4.5rem] h-auto z-50">
      {links.map((link) => {
        const fullPath = basePath + link.href;

        return (
          <Link
            key={fullPath}
            href={fullPath}
            className="navbar-menu"
            suppressHydrationWarning
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
}
