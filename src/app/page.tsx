import { Inter } from 'next/font/google';
import Header from './components/Header';

import { Banner } from './components/Banner';
import { MoveRow } from './components/MoveRow';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <div className='relative h-full overflow-hidden bg-gradient-to-b from-transparent to-black to-[75%] lg:h-[140vh]'>
      <Header />
      <main className='relative pb-24 pl-4 lg:pl-16'>
        <Banner />
        <MoveRow sectionTitle='Trending Now' />
        <MoveRow sectionTitle='Top Rated' />
        <MoveRow sectionTitle='Action Movies' />
      </main>
    </div>
  );
}
