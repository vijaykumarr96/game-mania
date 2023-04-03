import { HStack, Image, Text, useColorMode } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
function Navbar() {
  return (
    <HStack justifyContent={'space-between'} paddingRight={"20px"}>
      <Image src={logo} boxSize={"60px"} />
      <ColorModeSwitch />
    </HStack>
  );
}

export default Navbar;
