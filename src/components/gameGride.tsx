import { SimpleGrid, Text } from "@chakra-ui/react";
import UseGame from "../hooks/usegame";
import GameCard from "./gameCard";

const GameGrid = () => {
  const { games, error } = UseGame();

  console.log(games);

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        spacing={10}
        padding={10}
      >
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
