import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from '../hooks/useGames';
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";


function GameGrid() {
  const {error, games, loading} = useGames();

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={{sm:1, md:2, lg:3}} padding={"10"} spacing={10}>
      {loading && [...Array(6)].map(skeleton => <GameCardSkeleton key={skeleton}/>)}
        {games.map((game) => (
         <GameCard key={game.id} game={game}/>
        ))}
      </SimpleGrid>
    </>
  );
}

export default GameGrid;
