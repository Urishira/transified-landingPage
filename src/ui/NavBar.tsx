import { useRef } from "react";
import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  IconButton,
  Image,
  Spacer,
  Stack,
  useDisclosure,
  useMediaQuery,
} from "@chakra-ui/react";
import { FaAlignLeft } from "react-icons/fa";
import { motion } from "framer-motion";
import NavLinks from "./NavLinks";
import { animateScroll as scroll } from "react-scroll";

const NavBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const btnRef = useRef(null);
  const [isMobile] = useMediaQuery("(max-width: 700px)");
  let content;
  if (!isMobile) {
    content = (
      <>
        <Spacer />
        <Stack
          spacing={[8, 6, 10, 20]}
          color="white"
          justify="flex-start"
          align="center"
          direction="row"
          fontWeight="semibold"
          w="100%"
        >
          <NavLinks />
        </Stack>
      </>
    );
  } else {
    content = (
      <>
        <IconButton
          aria-label="toggle menu"
          icon={<FaAlignLeft />}
          variant="ghost"
          color="gray.200"
          colorScheme="none"
          onClick={onOpen}
          ref={btnRef}
          ml="auto"
        />
        <Drawer
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay>
            <DrawerContent bg="brand.background">
              <DrawerCloseButton />
              <DrawerHeader color="gray.200">Menu</DrawerHeader>
              <DrawerBody>
                <Stack direction="column">
                  <NavLinks />
                </Stack>
              </DrawerBody>
            </DrawerContent>
          </DrawerOverlay>
        </Drawer>
      </>
    );
  }
  return (
    <Flex
      zIndex={1}
      position="sticky"
      py={[2, 4]}
      px={["20px", "30px"]}
      align="center"
      justify="center"
      top={0}
    >
      <Flex
        maxWidth={["40em", "70em", "80em", "95em"]}
        w="100vw"
        align="center"
      >
        <Box
          as={motion.div}
          whileTap={{ scale: 0.9 }}
          onClick={() => scroll.scrollToTop()}
          _hover={{
            cursor: "pointer",
          }}
        >
          <Image width={[150, 200]} src="/Logo.svg" />
        </Box>
        {content}
      </Flex>
    </Flex>
  );
};

export default NavBar;
