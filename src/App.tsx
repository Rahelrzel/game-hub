import { Grid, GridItem, Show, Text } from "@chakra-ui/react";
import NavBar from "./components/navBar";
import GameGrid from "./components/gameGride";
import GenresList from "./components/GenresList";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav"  "main"`,
        lg: `"nav nav " "aside main"`,
      }}
    >
      <GridItem area={"nav"}>
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area={"aside"}>
          <GenresList />
        </GridItem>
      </Show>
      <GridItem area={"main"}>
        <GameGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
