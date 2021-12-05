import React from "react";
import { Stack, Image } from "@chakra-ui/react";
import { SimpleButton, TextWrapper } from "../../ui";
import NavBar from "../../ui/NavBar";

export const Home = () => {
  return (
    <Stack
      w="100%"
      bgImage="./Frame.svg"
      bgPosition="center"
      bgRepeat="no-repeat"
      justify="space-between"
      alignItems="center"
      spacing="25px"
    >
      <NavBar />
      <TextWrapper
        titleStyle="h1"
        textAlign="center"
        title="Where electronic music becomes fantasy"
        paragraph="Find millions of songs on streaming to play
                                        with your friends. Totally free."
      />
      <SimpleButton>DOWNLOAD THE APP</SimpleButton>
      <Image src="./avatarbg.svg" />
    </Stack>
  );
};
