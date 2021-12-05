import React from "react";
import { ContentWrapper, SimpleButton, Title } from "../../ui";

export const DownloadSecction = () => {
  return (
    <ContentWrapper spacing="2rem" h="100vh">
      <Title textStyle="h3"> High-res electronic music. </Title>
      <Title textStyle="h3">
        Underground & indie artists you’ve never heard before.
      </Title>
      <Title textStyle="h3">People like you sharing the same passion. </Title>
      <Title textStyle="h3">Save your tracks and play them offline. </Title>
      <SimpleButton>DOWNLOAD THE APP </SimpleButton>
    </ContentWrapper>
  );
};
