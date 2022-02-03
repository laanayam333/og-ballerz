import prisma from '@/lib/prisma';

export default function Home({ players }) {
  console.log(players);
  return (
    <div className="text-black text-2xl">
      {players.map((player) => (
        <p key={player.id}>
          {player.firstname} {player.lastname}
        </p>
      ))}
    </div>
  );
}

export async function getStaticProps() {
  const players = await prisma.player.findMany({});

  return {
    props: {
      players,
    },
    revalidate: 60,
  };
}
