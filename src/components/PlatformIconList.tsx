import {
  FaWindows,
  FaApple,
  FaXbox,
  FaPlaystation,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { Platform } from "../hooks/useGames";
import { HStack, Icon, Text } from "@chakra-ui/react";
import { IconType } from "react-icons";

interface Props {
  platforms: Platform[];
}

function PlatformIconList({ platforms }: Props) {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    mac: FaApple,
    nintendo: SiNintendo,
    xbox: FaXbox,
    ios: MdPhoneIphone,
    playstation: FaPlaystation,
    web: BsGlobe,
    linux: FaLinux,
    android: FaAndroid,
  };
  return (
    <HStack color={"gray.600"} marginY={2}>
      {platforms.map((platform) => {
        return (
          <>
            {/* <Text>{platform.name}</Text> */}
            <Icon as={iconMap[platform.slug]} />
          </>
        );
      })}
    </HStack>
  );
}

export default PlatformIconList;
