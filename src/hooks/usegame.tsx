import useData from "./useData";
import { Genre } from "./useGenres";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}
export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

const UseGame = (
  selectedGenre: Genre | null,
  selectedPaltform: Platform | null
) =>
  useData<Game>(
    "/games",
    { params: { genres: selectedGenre?.id, platform: selectedPaltform?.id } },
    [selectedGenre?.id, selectedPaltform?.id]
  );

export default UseGame;
