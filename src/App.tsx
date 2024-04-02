import { Grid, GridItem, Show } from "@chakra-ui/react";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav"  "main"`,
        lg: `"nav nav " "asid main"`,
      }}
    >
      <GridItem area={"nav"} bg={"purple"}>
        nav
      </GridItem>

      <GridItem area={"main"} bg={"pink"}>
        main
      </GridItem>
      <Show above="lg">
        <GridItem area={"aside"} bg={"purple"}>
          asid
        </GridItem>
      </Show>
    </Grid>
  );
}

export default App;
