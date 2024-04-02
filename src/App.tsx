import { Grid, GridItem, Show, Text } from "@chakra-ui/react";
import NavBar from "./components/navBar";

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
        <GridItem area={"aside"} bg={"purple"}>
          asid
        </GridItem>
      </Show>
      <GridItem area={"main"} bg={"pink"}>
        main
      </GridItem>
    </Grid>
  );
}

export default App;
