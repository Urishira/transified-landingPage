import { Image, ImageProps } from "@chakra-ui/image";

import React from "react";

type Props = { maxWidth?: string | string[] } & ImageProps;

export const CustomImage: React.FC<Props> = ({
  maxWidth = ["500px", "650px", "750px"],
  ...props
}) => {
  return <Image w={["50%", "75%", "50%"]} maxW={maxWidth} {...props} />;
};
