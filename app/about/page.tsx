'use client';

import { motion } from 'framer-motion';
import { StatCard, ValueCard, TeamMember } from '@/components/about';

const stats = [
  { value: '50K+', label: 'Happy Customers' },
  { value: '200+', label: 'Exclusive Drops' },
  { value: '99%', label: 'Authenticity Rate' },
  { value: '24/7', label: 'Support' },
];

const values = [
  { icon: <AuthIcon />, title: 'Authenticity First', description: 'Every sneaker is verified by our expert team. No fakes, ever.' },
  { icon: <CubeIcon />, title: 'Curated Selection', description: 'We handpick only the most coveted and limited releases.' },
  { icon: <BoltIcon />, title: 'Fast Shipping', description: 'Get your kicks delivered within 2-3 business days worldwide.' },
  { icon: <ShieldIcon />, title: 'Secure Payments', description: 'Your transactions are protected with bank-level encryption.' },
];

const team = [
  { name: 'Alex Chen', role: 'Founder & CEO', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400' },
  { name: 'Maya Johnson', role: 'Head of Curation', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400' },
  { name: 'Marcus Williams', role: 'Lead Authenticator', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400' },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen py-24 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <HeroSection />
        <StatsSection stats={stats} />
        <ValuesSection values={values} />
        <TeamSection team={team} />
      </div>
    </div>
  );
}

function HeroSection() {
  return (
    <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-20">
      <p className="text-cyber-purple font-mono text-sm uppercase tracking-widest mb-2">Our Story</p>
      <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">About KICKS_LAB</h1>
      <p className="text-white/60 max-w-2xl mx-auto text-lg leading-relaxed">
        Born from a passion for sneaker culture, KICKS_LAB is the ultimate destination for collectors
        and enthusiasts seeking the rarest and most exclusive footwear on the planet.
      </p>
    </motion.div>
  );
}

function StatsSection({ stats }: { stats: { value: string; label: string }[] }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
      {stats.map((stat, i) => <StatCard key={stat.label} {...stat} index={i} />)}
    </div>
  );
}

function ValuesSection({ values }: { values: { icon: React.ReactNode; title: string; description: string }[] }) {
  return (
    <section className="mb-20">
      <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-3xl font-bold text-white text-center mb-10">
        Why Choose Us
      </motion.h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {values.map((value, i) => <ValueCard key={value.title} {...value} index={i} />)}
      </div>
    </section>
  );
}

function TeamSection({ team }: { team: { name: string; role: string; image: string }[] }) {
  return (
    <section>
      <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-3xl font-bold text-white text-center mb-10">
        Meet The Team
      </motion.h2>
      <div className="grid sm:grid-cols-3 gap-6">
        {team.map((member, i) => <TeamMember key={member.name} {...member} index={i} />)}
      </div>
    </section>
  );
}

function AuthIcon() { return <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>; }
function CubeIcon() { return <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>; }
function BoltIcon() { return <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>; }
function ShieldIcon() { return <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>; }
