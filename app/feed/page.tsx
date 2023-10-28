import Link from 'next/link';

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

export default async function Feed() {
  await sleep(5000);
  const datas = [
    {
      id: 1,
      name: 'joão',
    },
    {
      id: 2,
      name: 'Maria',
    },
    {
      id: 3,
      name: 'Pedro',
    },
    {
      id: 4,
      name: 'Ana',
    },
  ];
  return (
    <>
      <h1>Página de feed!</h1>
      {datas.map((data) => {
        return (
          <>
            <Link key={data.id} href={`/photo/${data.id}`}>
              <h1>{data.name}</h1>
            </Link>
          </>
        );
      })}
      <Link href="/">Voltar para home</Link>
    </>
  );
}
