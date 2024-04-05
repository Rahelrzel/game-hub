import { Text } from "@chakra-ui/react";
import UseGame from "../hooks/usegame";

const GameGrid = () => {
  const { games, error } = UseGame();

  console.log(games);

  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GameGrid;
