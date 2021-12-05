import React from "react";
import { TextProps, Text } from "@chakra-ui/layout";

export type PropsTitle = TextProps;

export const Title: React.FC<PropsTitle> = ({ children, ...props }) => {
  return <Text {...props}>{children}</Text>;
};
