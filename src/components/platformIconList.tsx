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
import { HStack, Icon } from "@chakra-ui/react";
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
    <HStack margin={"10pxs"}>
      {platforms.map((platform) => (
        <Icon
          key={platform.id}
          as={iconMap[platform.slug]}
          color={"gray.500"}
        />
      ))}
    </HStack>
  );
};

export default PlatformIconList;
