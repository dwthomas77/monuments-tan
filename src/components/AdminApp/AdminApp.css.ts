import { style } from "@vanilla-extract/css";
import { vars } from "../../theme/themeBlue.css";

export const adminApp = style({
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "flex-start",
  height: "calc(100vh - 80px)",
  backgroundColor: vars.color.background,
});

export const adminLeftColumn = style({
  width: vars.dimensions.leftAdminWiddth,
  padding: "20px",
  boxSizing: "border-box",
});
