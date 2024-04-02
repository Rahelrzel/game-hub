import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.jpeg";
import ColorModeSwitch from "./colorModeSwitch";

const NavBar = () => {
  return (
    <HStack justifyContent={"space-between"} padding={"10px"}>
      <Image src={logo} boxSize="40px" />
      <ColorModeSwitch />
    </HStack>
  );
};
export default NavBar;
