import React from "react";
import {
  ContentWrapper,
  CustomImage,
  TextWrapper,
  Title,
  WrapperComponents,
} from "../../ui";

export const PresentationSecctionOne = () => {
  return (
    <WrapperComponents>
      <ContentWrapper direcction={["column", "column", "column", "row"]}>
        <TextWrapper
          titleStyle="h2"
          textAlign={["center", "center", "left"]}
          title="Listen to your favorite 
tracks with your friends."
          paragraph="Friends play a key role in our lives, so...
why keep your favorite tunes to yourself? Jump into Transified Network and bring on the music."
        />
        <CustomImage src="screen1.svg" />
      </ContentWrapper>
      <ContentWrapper
        direcction={[
          "column-reverse",
          "column-reverse",
          "column-reverse",
          "row-reverse",
        ]}
      >
        <TextWrapper
          titleStyle="h2"
          textAlign={["center", "center", "left"]}
          title="Discover thousands of
mixes. Just for you."
          paragraph="Sometimes getting in touch with new music can be somewhat challenging. Experience new tracks at every corner in Transified."
        />
        <CustomImage src="screen2.svg" />
      </ContentWrapper>
      <ContentWrapper pt="25px" direcction={["column"]} alignContent="center">
        <TextWrapper
          titleStyle="h2"
          textAlign="center"
          title="Watch exclusive music videos"
          paragraph="Access exclusive music videos with super audio and video quality. "
        />
        <CustomImage src="screen3.svg" maxWidth="1000" />
      </ContentWrapper>
      <ContentWrapper h="100vh">
        <Title textStyle="h4" textAlign="center">
          What else is for me to transify?
        </Title>
      </ContentWrapper>
    </WrapperComponents>
  );
};
