import {
  FaAndroid,
  FaApple,
  FaLinux,
  FaXbox,
  FaPlaystation,
  FaWindows,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { Platform } from "../hooks/usegame";
import { HStack, Icon, Text } from "@chakra-ui/react";
import { IconType } from "react-icons";

interface Props {
  platforms: Platform[];
}
const PlatformIconList = ({ platforms }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    windows: FaWindows,
    android: FaAndroid,
    xbox: FaXbox,
    nintendo: SiNintendo,
    web: BsGlobe,
    ios: MdPhoneIphone,
    linux: FaLinux,
    mac: FaApple,
  };
  return (
    <HStack>
      {platforms.map((platform) => (
        <Icon as={iconMap[platform.slug]} />
      ))}
    </HStack>
  );
};

export default PlatformIconList;
