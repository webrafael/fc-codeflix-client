import Image from 'next/image';

export default function Logo() {
  return <Image src='/logo.svg' alt='netflix' width={120} height={120} />;
}
