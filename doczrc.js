import { colors } from "./packages/tokens/lib";

module.exports = {
  title: "Sportsbet",
  menu: ["Tokens", "Utils", "Components"],
  typescript: true,
  codeSandbox: false,
  wrapper: ".config/docz/wrapper",
  themeConfig: {
    mode: "dark",
    colors: {
      primary: colors.brand,
      link: colors.brand,
      background: "transparent",
      text: colors.text,
      sidebarBg: colors.neutral[90],
      sidebarBorder: colors.neutral[50],
      codeBg: colors.neutral[40],
      theadBg: colors.neutral[60],
      tableColor: null
    },
    logo: {
      src:
        "data:image/png;base64,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",
      width: 150
    },
    styles: {
      body: {
        fontFamily: "inherit",
        backgroundColor: "transparent"
      },
      h1: {
        fontFamily: "inherit",
        letterSpacing: "unset"
      },
      h2: {
        fontFamily: "inherit",
        letterSpacing: "unset",
        fontWeight: 600
      },
      h3: {
        fontWeight: 600
      }
    }
  }
};
