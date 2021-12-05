import React from "react";
import { Stack, StackProps } from "@chakra-ui/react";

type DirectionArrayProp = Array<
  "row" | "column" | "row-reverse" | "column-reverse"
>;
type Props = { id?: string; direcction?: DirectionArrayProp } & StackProps;

export const ContentWrapper: React.FC<Props> = ({
  direcction = ["column"],
  children,
  ...props
}) => {
  return (
    <Stack
      spacing={["50px"]}
      bgColor="brand.secondary"
      h={["50vh", "50%", "100vh"]}
      alignItems="center"
      justifyContent="center"
      direction={direcction}
      {...props}
    >
      {children}
    </Stack>
  );
};
