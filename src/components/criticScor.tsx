import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}
const CriticScor = ({ score }: Props) => {
  let color = score > 75 ? "green" : score > 60 ? "yellow" : "";
  return (
    <Badge
      colorScheme={color}
      fontSize={"14"}
      px={2}
      py={1}
      borderRadius={"5px"}
    >
      {score}
    </Badge>
  );
};

export default CriticScor;
