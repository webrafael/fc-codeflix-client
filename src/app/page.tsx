import { Inter } from 'next/font/google';
import Header from './components/Header';

import { Banner } from './components/Banner';
import { MoveRow } from './components/MoveRow';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <div className='relative h-full bg-gradient-to-b from-transparent to-black to-[75%] pb-8'>
      <Header />
      <main className='scrollbar-hide relative overflow-y-scroll p-8 pb-20 lg:px-16'>
        <Banner />
        <MoveRow sectionTitle='Trending Now' />
        <MoveRow sectionTitle='Top Rated' />
        <MoveRow sectionTitle='Action Movies' />
      </main>
    </div>
  );
}
