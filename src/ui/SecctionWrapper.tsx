import React from "react";
import { Stack, StackProps } from "@chakra-ui/react";

type Props = {} & StackProps;

export const SecctionWrapper: React.FC<Props> = ({ children, ...props }) => {
  return (
    <Stack h="100%" {...props}>
      {children}
    </Stack>
  );
};
