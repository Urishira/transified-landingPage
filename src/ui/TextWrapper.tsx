import React from "react";
import { Stack, StackProps, Text } from "@chakra-ui/layout";
import { Title, PropsTitle } from "./Title";
import { Paragraph } from "./Paragraph";

export type PropsTextWrapper = {
  title: string;
  paragraph: string;
  titleStyle: "h1" | "h2" | "h3" | "h4";
} & StackProps &
  PropsTitle;

export const TextWrapper: React.FC<PropsTextWrapper> = ({
  title,
  paragraph,
  titleStyle,
  ...props
}) => {
  
  return (
    <Stack
      w="100%"
      maxW={["945px"]}
      direction="column"
      justify="center"
      alignContent="space-between"
      alignItems="center"
      {...props}
    >
      <Title textStyle={titleStyle} {...props}>
        {title}
      </Title>

      <Paragraph>{paragraph}</Paragraph>
    </Stack>
  );
};
