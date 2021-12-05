import { Link as CharkaLink, LinkProps, FlexProps } from "@chakra-ui/react";
type Props = LinkProps & FlexProps;

export const ChakraLink: React.FC<Props> = ({ children, ...props }) => {
  return (
    <>
      <CharkaLink
        justifyContent="space-between"
        color="brand.white"
        transitionDuration="1"
        transition="ease-in"
        _hover={{
          textDecor: "none",
          color: "gray.200",
          transition: "ease-in-out",
          transitionDuration: "0.4",
        }}
        {...props}
      >
        {children}
      </CharkaLink>
    </>
  );
};
