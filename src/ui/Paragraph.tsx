import React from "react";
import { Text, TextProps } from "@chakra-ui/layout";

type Props = TextProps;

export const Paragraph: React.FC<Props> = ({ children, ...props }) => {
  return (
    <Text
      w={["50%", "100%"]}
      maxW={["825px"]}
      textAlign="center"
      fontSize={["16px", "32px", "42px"]}
      {...props}
    >
      {children}
    </Text>
  );
};
