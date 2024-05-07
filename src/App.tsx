import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/navBar";
import GameGrid from "./components/gameGride";
import GenresList from "./components/GenresList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  return (
    <Grid
      templateAreas={{
        base: `"nav"  "main"`,
        lg: `"nav nav " "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px",
      }}
    >
      <GridItem area={"nav"}>
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area={"aside"} paddingX={5}>
          <GenresList
            selectedGenre={selectedGenre}
            onSelecteGenre={(genre) => setSelectedGenre(genre)}
          />
        </GridItem>
      </Show>
      <GridItem area={"main"}>
        <GameGrid selectedGenre={selectedGenre} />
      </GridItem>
    </Grid>
  );
}

export default App;
