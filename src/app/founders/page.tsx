import type { Metadata } from 'next';
import FoundersHero from '@/components/FoundersHero';
import Founders from '@/components/Founders';

export const metadata: Metadata = {
  title: 'Founders | CACHEBUGS',
  description: 'Meet the founders of CACHEBUGS - Nikhil Yadav (Founder), Ayush Bajpai (Co-Founder), and Ayush Mishra (Co-Founder). Elite developers building the future.',
};

export default function FoundersPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Header */}
      <FoundersHero />

      {/* Founders Section */}
      <Founders />
    </div>
  );
}

