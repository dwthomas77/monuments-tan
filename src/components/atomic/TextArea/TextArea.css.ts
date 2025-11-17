import { style } from '@vanilla-extract/css';
import { vars } from '../../../theme/themeBlue.css';

export const textAreaBase = style({
  padding: vars.spacing.smallSpacing,
  borderRadius: vars.shape.borderRadius,
  border: `1px solid ${vars.color.lowContrast}`,
  fontSize: '16px',
  color: vars.color.highContrast,
  backgroundColor: vars.color.background,
  outline: "none",
  ":active": {
    border: `1px solid ${vars.color.interactivePlus1}`,
    outline: "none",
  },
  ":focus": {
    border: `1px solid ${vars.color.interactivePlus1}`,
    outline: "none",
  },
  ":focus-visible": {
    border: `1px solid ${vars.color.interactivePlus1}`,
    outline: "none",
  },
});

export const textAreaError = style([textAreaBase, {
    border: `1px solid ${vars.color.error}`,
    ":active": {
    border: `1px solid ${vars.color.errorActive}`,
    outline: "none",
  },
  ":focus": {
    border: `1px solid ${vars.color.errorActive}`,
    outline: "none",
  },
  ":focus-visible": {
    border: `1px solid ${vars.color.errorActive}`,
    outline: "none",
  },
}]);