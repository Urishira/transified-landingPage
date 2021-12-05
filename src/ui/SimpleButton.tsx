import React from "react";
import { Button, ButtonProps } from "@chakra-ui/button";

type Props = {} & ButtonProps;

export const SimpleButton: React.FC<Props> = ({ children, ...props }) => {
  return (
    <Button
      w="100%"
      letterSpacing="wide"
      maxH={["78px"]}
      maxW={["21.875em"]}
      borderRadius="50px"
      bgColor="brand.white"
      color="brand.secondary"
      textAlign="center"
      {...props}
    >
      {children}
    </Button>
  );
};
