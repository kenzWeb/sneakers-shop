'use client';

import type { ReactNode } from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { ScrollProgress, NoiseOverlay, MeshBackground } from '@/components/visuals';
import { CartDrawer } from '@/components/cart';
import { SearchModal } from '@/components/search';

interface MainLayoutProps {
  children: ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <>
      <ScrollProgress />
      <NoiseOverlay />
      <MeshBackground />
      <Navbar />
      <CartDrawer />
      <SearchModal />
      <main className="min-h-screen pt-16">{children}</main>
      <Footer />
    </>
  );
}
