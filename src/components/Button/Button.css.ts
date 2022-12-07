import { style, styleVariants } from "@vanilla-extract/css";
import { vars } from "../../styles/theme.css";

const baseButtonStyle = style({
    border: "none",
    borderRadius: 4,
    fontSize: "18px",
    padding: "8px 16px"
});

export const root = styleVariants({
    primary: [
      baseButtonStyle,
      {
        backgroundColor: vars.colors.primary,
        color: vars.colors.background
      }
    ],
    secondary: [
      baseButtonStyle,
      {
        backgroundColor: vars.colors.secondary,
        color: vars.colors.text.normal
      }
    ]
  });