import React from "react";
import { Box } from "@chakra-ui/layout";
import { Home } from "./home/Home";
import { DownloadSecction } from "./secction/DownloadSecction";
import { PresentationSecctionOne } from "./secction/PresentationSecctionOne";
import { ImageSlideSecction } from "./secction/ImageSlideSecction";
import { AlbumsPreview } from "./secction/AlbumsPreview";

export const Landing = () => {
  return (
    <Box
      maxW="100vw"
      alignItems="center"
      bgColor="brand.black"
      color="brand.white"
      spacing="25"
    >
      <Home />
      <DownloadSecction />
      <PresentationSecctionOne />
      <ImageSlideSecction />
      <AlbumsPreview />
    </Box>
  );
};
