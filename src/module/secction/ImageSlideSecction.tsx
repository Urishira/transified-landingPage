import React from "react";
import { ContentWrapper, FramerSlide, TextWrapper } from "../../ui";

export const ImageSlideSecction = () => {
  return (
    <ContentWrapper h="100vh" bgImage="./background.svg">
      <ContentWrapper
        bgColor="brand.secondary"
        w={["50%", "100%"]}
        maxW="1389px"
        maxH="950px"
        overflow="hidden"
        position="absolute"
      >
        <TextWrapper
          mt={3}
          titleStyle="h1"
          title="Armada Music"
          paragraph="Get inside to find tracks and music videos that
you won’t see anywhere."
        />
        <FramerSlide />
      </ContentWrapper>
    </ContentWrapper>
  );
};
