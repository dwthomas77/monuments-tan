import { style } from '@vanilla-extract/css';
import { vars } from '../../theme/themeBlue.css';

export const form = style({
    width: '100%',
});

export const formFieldset = style({
    padding: vars.spacing.largeSpacing,
    backgroundColor: vars.color.middleGround,
    color: vars.color.primaryContrast,
    border: `2px solid ${vars.color.primary}`,
    borderRadius: vars.shape.borderRadius,
});

export const formLegend = style({
    backgroundColor: vars.color.primary,
    color: vars.color.primaryContrast,
    padding: `${vars.spacing.smallSpacing} ${vars.spacing.largeSpacing}`,
    borderRadius: vars.shape.borderRadius,
});

export const formLabel = style({
    width: vars.dimensions.labelWidth,
    textAlign: 'right',
    //fontWeight: 'bold',
    marginRight: vars.spacing.mediumSpacing,
    color: vars.color.highContrast,
    letterSpacing: '1px',
});

export const formField = style({
    display: 'flex',
    alignItems: 'center',
    marginBottom: vars.spacing.mediumSpacing,
});

export const buttonFormField = style({
    marginTop: vars.spacing.largeSpacing,
    display: 'flex',
    justifyContent: 'flex-end',
});

export const fieldErrorMsg = style({
    color: vars.color.error,
    fontSize: '14px',
    marginTop: vars.spacing.smallSpacing,
    marginLeft: vars.spacing.smallSpacing,
});