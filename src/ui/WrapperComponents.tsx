import React from "react";
import { Stack, StackProps } from "@chakra-ui/react";

type Props = {} & StackProps;

export const WrapperComponents: React.FC<Props> = ({ children, ...props }) => {
  return (
    <Stack bgColor="brand.secondary" spacing="50px" {...props}>
      {children}
    </Stack>
  );
};
