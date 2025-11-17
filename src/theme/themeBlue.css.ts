import colors from './colors';
import { createTheme } from '@vanilla-extract/css';

export const [themeClass, vars] = createTheme({
  color: {
    primary: colors.primary,
    primaryContrast: colors.primaryConstrast,
    background: colors.background,
    middleGround: colors.middleGround,
    foreground: colors.foreground,
    lowContrast: colors.lowContrast,
    highContrast: colors.highContrast,
    error: colors.error,
    errorActive: colors.errorActive,
    success: colors.success,
    interactive: colors.interactive,
    interactivePlus1: colors.interactivePlus1,
    interactivePlus2: colors.interactivePlus2,
    interactiveMinus1: colors.interactiveMinus1,
    interactiveMinus2: colors.interactiveMinus2,
    interactiveContrast: colors.interactiveContrast,
    interactiveDisabled: colors.interactiveDisabled,
  },
  shape: {
    borderRadius: '4px',
  },
  dimensions: {
    leftColumnWidth: '350px',
    leftAdminWiddth: '500px',
    labelWidth: '100px',
  },
  spacing: {
    listItemYPadding: '10px',
    listItemXPadding: '15px',
    listHeaderXPadding: '10px',
    smallSpacing: '5px',
    mediumSpacing: '10px',
    largeSpacing: '20px',
  }
});