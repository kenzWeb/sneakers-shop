'use client';

import Link from 'next/link';
import type { ReactNode } from 'react';
import { Logo } from './Logo';

const links = {
  shop: [
    { href: '/catalog', label: 'All Sneakers' },
    { href: '/drops', label: 'New Drops' },
    { href: '/catalog?brand=Nike', label: 'Nike' },
    { href: '/catalog?brand=Jordan', label: 'Jordan' },
  ],
  support: [
    { href: '/about', label: 'About Us' },
    { href: '#', label: 'Contact' },
    { href: '#', label: 'FAQs' },
    { href: '#', label: 'Shipping' },
  ],
  legal: [
    { href: '#', label: 'Privacy Policy' },
    { href: '#', label: 'Terms of Service' },
    { href: '#', label: 'Returns' },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-white/10 mt-20">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <Logo />
            <p className="text-white/40 text-sm mt-4 max-w-xs">
              Your destination for limited edition sneakers. Authentic. Curated. Premium.
            </p>
          </div>
          <LinkColumn title="Shop" links={links.shop} />
          <LinkColumn title="Support" links={links.support} />
          <LinkColumn title="Legal" links={links.legal} />
        </div>
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/30 text-sm font-mono">© 2025 KICKS_LAB. All rights reserved.</p>
          <div className="flex gap-4">
            <SocialIcon href="#" icon="twitter" />
            <SocialIcon href="#" icon="instagram" />
            <SocialIcon href="#" icon="discord" />
          </div>
        </div>
      </div>
    </footer>
  );
}

function LinkColumn({ title, links }: { title: string; links: { href: string; label: string }[] }) {
  return (
    <div>
      <h4 className="text-white font-bold mb-4">{title}</h4>
      <ul className="space-y-2">
        {links.map((link) => (
          <li key={link.label}>
            <Link href={link.href} className="text-white/40 hover:text-white text-sm transition-colors">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function SocialIcon({ href, icon }: { href: string; icon: string }) {
  const icons: Record<string, ReactNode> = {
    twitter: <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />,
    instagram: <><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></>,
    discord: <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />,
  };
  return (
    <a href={href} className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 transition-colors">
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">{icons[icon]}</svg>
    </a>
  );
}

// updated logic 1766962559545
// updated logic 1766962559767
// updated logic 1766962559807
// updated logic 1766962560339
// updated logic 1766962560663
// updated logic 1766962561399
// updated logic 1766962561431
// updated logic 1766962561723
// updated logic 1766962562037