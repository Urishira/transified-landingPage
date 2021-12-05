import { HStack } from "@chakra-ui/react";
import React from "react";
import { ChakraCard, ContentWrapper, Title } from "../../ui";

export const AlbumsPreview = () => {
  const arrImg = [
    "https://images.unsplash.com/photo-1548707519-d9908cfebe7a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1427&q=80",
    ,
    "https://images.unsplash.com/photo-1636840138199-1ed5e1fd6cd1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    ,
    "https://images.unsplash.com/photo-1624010640869-d3220339a853?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    ,
    "https://images.unsplash.com/photo-1637529106317-8d55b6ad6e40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  ];
  const arr2 = [arrImg[0], arrImg[2], arrImg[4]];
  return (
    <ContentWrapper>
      <Title>Want to give it a try?</Title>
      <HStack>
        {arrImg.map((item) => (
          <ChakraCard
            imgAlbum={item}
            albumName="John O’Callaghan"
            artistName="John O"
          />
        ))}
      </HStack>
      <HStack>
        {arr2.map((item) => (
          <ChakraCard wid imgAlbum={item} albumName="John O’Callaghan" />
        ))}
      </HStack>
    </ContentWrapper>
  );
};
