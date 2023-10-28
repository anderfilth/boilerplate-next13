import Link from 'next/link';

export const Main = () => {
  return (
    <>
      <h1>Olá, estou usando next!</h1>
      <Link href="/feed">Feed</Link>
    </>
  );
};
