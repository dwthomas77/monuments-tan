import { style } from '@vanilla-extract/css';
import { vars } from '../../../theme/themeBlue.css';

export const button = style({
  backgroundColor: vars.color.interactive,
  color: vars.color.interactiveContrast,
  border: 'none',
  borderRadius: '4px',
  padding: '12px 16px',
  cursor: 'pointer',
  transition: 'background-color 0.2s ease',

  ':hover': {
    backgroundColor: vars.color.interactivePlus1,
  },

  ':disabled': {
    backgroundColor: vars.color.interactiveMinus2,
    cursor: 'not-allowed',
  },
});