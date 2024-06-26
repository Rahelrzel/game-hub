import { Game } from "../hooks/usegame";
import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import PlatformIconList from "./platformIconList";
import CriticScor from "./criticScor";
import { getCroppedImageUrl } from "../services/image-url";

interface props {
  game: Game;
}
const GameCard = ({ game }: props) => {
  return (
    <Card>
      <Image src={getCroppedImageUrl(game.background_image)} />
      <CardBody>
        <Heading fontSize={"2xl"}>{game.name}</Heading>
        <HStack justifyContent={"space-between"}>
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScor score={game.metacritic}></CriticScor>
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
