import { style, globalStyle } from "@vanilla-extract/css";
import { vars } from "./theme/themeBlue.css";

globalStyle("body", {
  margin: 0,
  minHeight: "100vh",
  backgroundColor: vars.color.background,
  color: vars.color.interactiveContrast,
  fontFamily: "Noto Sans Georgian, sans-serif",
});

export const app = style({
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "flex-start",
  height: "calc(100vh - 80px)",
  backgroundColor: vars.color.background,
});

export const appNavColumn = style({
  width: vars.dimensions.leftColumnWidth,
  height: "100%",
});

export const appContentColumn = style({
  width: `calc(100% - ${vars.dimensions.leftColumnWidth})`,
});

export const appHeader = style({
  backgroundColor: vars.color.primary,
  color: vars.color.primaryContrast,
  display: "flex",
  padding: "0 0 0 25px",
});

export const fetchMonumentsButton = style({
  margin: "10px",
});

export const listWidget = style({
  height: "100%",
  width: "100%",
});
