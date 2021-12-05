import React from "react";
import { StackProps, VStack, ImageProps } from "@chakra-ui/react";
import { Paragraph, Title } from ".";
import { Image } from "@chakra-ui/react";

type Props = {
  imgAlbum?: string;
  albumName: string;
  artistName?: string;
  wid?: boolean;
} & StackProps &
  ImageProps;

export const ChakraCard: React.FC<Props> = ({
  imgAlbum,
  albumName,
  artistName,
  wid,
  ...props
}) => {
  return (
    <VStack {...props} w="100%" h="100%" maxH="367px">
      <Image maxWidth={[wid ? "617px" : "367px"]} src={imgAlbum} />
      <Title>{albumName}</Title>
      <Paragraph>{artistName}</Paragraph>
    </VStack>
  );
};
