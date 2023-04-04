import { Text } from "@chakra-ui/react";
import useGames from '../hooks/useGames';


function GameGrid() {
  const {error, games} = useGames();
  console.log({games})
  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {games.map((game) => (
          <li>{game.name}</li>
        ))}
      </ul>
    </>
  );
}

export default GameGrid;
