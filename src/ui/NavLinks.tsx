import { Link } from "react-scroll";
import { CustomButton } from "./CustomButton";

import NextLink from "next/link";
import { ChakraLink } from "./ChakraLink";
import { SimpleButton } from "./SimpleButton";
import { Flex } from "@chakra-ui/react";

const NavLinks = () => {
  return (
    <>
      <ChakraLink as="li" listStyleType="none">
        <Link to="home" spy={true} smooth={true} duration={500} offset={-86}>
          Home
        </Link>
      </ChakraLink>
      <ChakraLink as="li" listStyleType="none">
        <Link to="about" spy={true} smooth={true} duration={500} offset={-60}>
          About Transified
        </Link>
      </ChakraLink>
      <ChakraLink target="_blank">Plans</ChakraLink>
      <ChakraLink target="_blank">Download</ChakraLink>
      <Flex
        width="100%"
        maxW={350}
        justifyContent="space-between"
        alignContent="center"
        alignItems="center"
      >
        <ChakraLink target="_blank">Log In</ChakraLink>
        <SimpleButton maxW="242px">SING UP</SimpleButton>
      </Flex>
    </>
  );
};

export default NavLinks;
