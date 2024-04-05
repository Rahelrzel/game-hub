import { SimpleGrid, Skeleton, Text } from "@chakra-ui/react";
import UseGame from "../hooks/usegame";
import GameCard from "./gameCard";
import GameCardSkeleton from "./gameCardSkeleton";

const GameGrid = () => {
  const { games, error, isLoading } = UseGame();

  const skeletons = [1, 2, 3, 4, 5, 6];
  console.log(games);

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        spacing={"10"}
        padding={10}
      >
        {isLoading &&
          skeletons.map((Skeleton) => <GameCardSkeleton key={Skeleton} />)}
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
