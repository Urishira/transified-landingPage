import React from "react";
import { Button, ButtonProps } from "@chakra-ui/react";
type Props = ButtonProps;

export const CircleButton: React.FC<Props> = ({ ...props }) => {
  return (
    <Button
      borderRadius="50px"
      w="100%"
      h="100%"
      maxW="90px"
      maxH="90px"
      zIndex={100}
      {...props}
      pos="relative"
    ></Button>
  );
};
