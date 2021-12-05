import { extendTheme } from "@chakra-ui/react";

const fonts = {
  Solanel: "Solanel",
};

const colors = {
  brand: { background: "#A468FF", white: "#fff", secondary: "#000" },
};

const styles = {
  global: {
    body: {
      color: colors.brand.secondary,
      fonts: "16px",
    },
  },
};

const textStyles = {
  h1: {
    fontSize: ["1.5rem", "3.5rem", "5.25rem"],
    fontWeight: "bold",
    lineHeight: "102.68%",
    color: "white",
  },
  h2: {
    fontSize: ["2rem", "4.5rem", "5.75rem"],
    fontWeight: "600",
    lineHeight: "102.68%",
    color: "white",
    textAlign: "center",
  },
  h3: {
    fontSize: ["2rem", "3.054rem", "4.25rem"],
    fontWeight: "500",
    textAlign: "center",
    color: "white",
  },
  h4: {
    fontSize: ["2rem", "5.25rem", "7.625rem"],
    fontWeight: "bold",
    lineHeight: "102.68%",
    color: "white",
  },
};

const theme = extendTheme({ styles, fonts, colors, textStyles });

export default theme;

