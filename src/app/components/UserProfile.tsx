import Image from 'next/image';
import React from 'react';

export const UserProfile = () => {
  const profileName = 'Kids';
  return (
    <div className='flex items-center space-x-4 md:space-x-8'>
      <p className='hidden cursor-not-allowed lg:inline'>{profileName}</p>
      <Image
        src='/profile.png'
        alt={`${profileName}`}
        width={35}
        height={35}
        className='cursor-pointer rounded'
      />
    </div>
  );
};
