import Image from 'next/image';

type MovieProps = {
  sectionTitle: string;
};

type MovieCardProps = {
  index: number;
};

const MovieCard = ({ index }: MovieCardProps) => (
  <div
    className='group relative h-28 min-w-[200px] transform bg-gradient-to-t from-transparent to-black transition duration-200 ease-in md:h-48 md:min-w-[260px] md:hover:scale-110 lg:h-52 lg:min-w-[400px]'
    key={index}
  >
    <Image
      src={`/item_${index}.png`}
      fill={true}
      alt='MAID'
      className='rounded'
    />
  </div>
);

export function MoveRow({ sectionTitle }: MovieProps) {
  return (
    <div className='flex-col space-y-4'>
      <div className='flex'>
        <h2 className='-ml-2 inline-flex items-center text-2xl font-bold'>
          {sectionTitle}
        </h2>
      </div>
      <div className='scrollbar-hide -ml-8 flex space-x-4 overflow-x-scroll p-6'>
        {[1, 2, 3, 4, 5, 1, 2, 3, 4, 5].map((index) => (
          <MovieCard key={index} index={index} />
        ))}
      </div>
    </div>
  );
}
