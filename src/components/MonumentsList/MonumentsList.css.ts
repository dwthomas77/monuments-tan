import { style } from '@vanilla-extract/css';
import { vars } from '../../theme/themeBlue.css';

export const nav = style({
    width: `calc(${vars.dimensions.leftColumnWidth} - 14px)`,
    borderRadius: vars.shape.borderRadius,
    margin: '5px',
    border: `2px solid ${vars.color.foreground}`,
});

export const navList = style({
    padding: 0,
    margin: 0,
});

export const navItem = style({
    listStyleType: 'none',
    cursor: 'pointer',
    backgroundColor: vars.color.interactive,
    ':hover': {
        backgroundColor: vars.color.interactivePlus1,
    },
    color: vars.color.interactiveContrast,
    padding: `${vars.spacing.listItemYPadding} ${vars.spacing.listItemXPadding}`,
});

export const activeNavItem = style([navItem, {
    backgroundColor: vars.color.interactivePlus2,
    ':hover': {
        backgroundColor: vars.color.interactivePlus2,
    },
}]);

export const navGroup = style({
    backgroundColor: vars.color.middleGround,
    padding: `${vars.spacing.listItemYPadding} ${vars.spacing.listHeaderXPadding}`,
});