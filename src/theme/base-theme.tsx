import { createTheme } from '@mui/material';

/**
 * Base theme for the application.
 * This controls global theming settings. Primarily dimensional styles
 * like spacing, border radius, and typography.
 *
 * It also defines colors that are global across both light and dark themes*
 */

declare module '@mui/material/styles' {
    interface Palette {
        accent: Palette['primary'];
        brand: {
            base: string;
            dark: string;
            light: string;
            reverse: string;
            disabled: string;
        };
    }

    interface PaletteOptions {
        accent?: PaletteOptions['primary'];
        brand?: {
            base?: string;
            dark?: string;
            light?: string;
            reverse?: string;
            disabled?: string;
        };
    }
}

// Default Shadow set to none
const shadowsTheme = createTheme();
const defaultShadow: string = 'none';
shadowsTheme.shadows.push(defaultShadow);

// Default border radius
const borderRadiusSmall: string = '6px';
const borderRadiusMedium: string = '12px';

const defaultBorderRadius: string = borderRadiusSmall;
const defaultTopOnlyBorderRadius: string = `${borderRadiusSmall} ${borderRadiusSmall} 0 0`;
const defaultBottomOnlyBorderRadius: string = `0 0 ${borderRadiusSmall} ${borderRadiusSmall}`;

let baseTheme = createTheme({
    palette: {
        divider: 'rgba(0, 0, 0, 0.12)',
        // custom variables
        brand: {
            base: '#1A9DBF', // turquoise water
            dark: '#0D1A24', // deep ocean
            light: '#F4C27A', // warm sand
            reverse: '#F2F5F7', // warm golden sand
            disabled: '#A9B7C0', // muted misty blue-gray
        },
    },
    shadows: [...shadowsTheme.shadows],
    typography: {
        fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
        fontSize: 16,
        htmlFontSize: 16,
        h1: {
            fontSize: '96px',
            fontWeight: 300,
            lineHeight: '112px',
            letterSpacing: '-1.5px',
        },
        h2: {
            fontSize: '60px',
            fontWeight: 300,
            lineHeight: '72px',
            letterSpacing: '-0.5px',
        },
        h3: {
            fontSize: '48px',
            fontWeight: 400,
            lineHeight: '56px',
        },
        h4: {
            fontSize: '34px',
            fontWeight: 400,
            lineHeight: '40px',
            letterSpacing: '0.25px',
        },
        h5: {
            fontSize: '24px',
            fontWeight: 400,
            lineHeight: '32px',
        },
        h6: {
            fontSize: '20px',
            fontWeight: 500,
            lineHeight: '32px',
            letterSpacing: '0.15px',
        },
        subtitle1: {
            fontSize: '16px',
            fontWeight: 400,
            lineHeight: '28px',
            letterSpacing: '0.15px',
        },
        subtitle2: {
            fontSize: '14px',
            fontWeight: 500,
            lineHeight: '22px',
            letterSpacing: '0.1px',
        },
        body1: {
            fontSize: '16px',
            fontWeight: 400,
            lineHeight: '24px',
            letterSpacing: '0.15px',
        },
        body2: {
            fontSize: '14px',
            fontWeight: 400,
            lineHeight: '20px',
            letterSpacing: '0.17px',
        },
        caption: {
            fontSize: '12px',
            fontWeight: 400,
            lineHeight: '20px',
            letterSpacing: '0.4px',
        },
        overline: {
            fontSize: '12px',
            fontWeight: 400,
            lineHeight: '32px',
            letterSpacing: '1px',
            textTransform: 'uppercase',
        },
    },
});

// Create the final theme with components
baseTheme = createTheme(baseTheme, {
    components: {
        MuiAccordion: {
            styleOverrides: {
                root: {
                    marginBottom: '1px',
                    boxShadow: `${defaultShadow} !important`,
                    '&before': {
                        opacity: 0,
                    },
                    '&.accordion-inner': {
                        boxShadow: defaultShadow,
                        border: 'none',
                    },
                    '&:first-of-type, &:first-of-type .MuiSummary-root': {
                        // Add for sub-accordion summary
                        borderRadius: `${defaultTopOnlyBorderRadius} !important`,
                    },
                    [`
                        &:last-of-type,
                        &:last-of-type .MuiCollapse-root,
                        &:last-of-type .MuiCollapse-root .MuiAccordionDetails-root
                    `]: {
                        // Add for sub-accordion details
                        borderRadius: `${defaultBottomOnlyBorderRadius} !important`,
                    },
                },
            },
        },
        MuiAccordionDetails: {
            styleOverrides: {
                root: {
                    '&.accordion-inner': {
                        borderRadius: '0',
                        padding: '0',
                    },
                    '& textarea': {
                        borderRadius: `${defaultBorderRadius} !important`,
                    },
                },
            },
        },
        MuiAccordionSummary: {
            styleOverrides: {
                root: {
                    minHeight: '50px',
                    '&.Mui-expanded': {
                        minHeight: '50px',
                    },
                    '&.accordion-inner': {
                        borderRadius: '0',
                        boxShadow: defaultShadow,
                        padding: '0',
                    },
                },
                content: {
                    margin: '0',
                    '&.Mui-expanded': {
                        margin: '0',
                    },
                },
                expandIconWrapper: {
                    color: 'inherit !important',
                    '&.Mui-expanded': {
                        colors: 'inherit !important',
                    },
                },
            },
        },
        MuiAutoComplete: {
            styleOverrides: {
                groupLabel: {
                    fontSize: '12px !important',
                    padding: '0 5px',
                },
                option: {
                    fontSize: '12px',
                },
                paper: {
                    borderRadius: '0',
                },
                popper: {
                    boxShadow: defaultShadow,
                },
                popupIndicator: {
                    '&:hover': {
                        backgroundColor: 'transparent',
                    },
                },
                tag: {
                    margin: '6px',
                },
            },
        },
        MuiAppBar: {
            defaultProps: {
                elevation: 0,
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: borderRadiusSmall,
                    boxShadow: defaultShadow,
                    '&.hover': {
                        boxShadow: defaultShadow,
                    },
                },
            },
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    borderRadius: borderRadiusMedium,
                    boxShadow: defaultShadow,
                    width: '100%',
                    '&.hover': {
                        transition: '300ms linear',
                    },
                },
            },
        },
        MuiCheckbox: {
            styleOverrides: {
                root: {
                    borderRadius: defaultBorderRadius,
                    '& input': {
                        borderRadius: `${defaultBorderRadius} !important`,
                    },
                },
            },
        },
        MuiChip: {
            styleOverrides: {
                root: {
                    fontWeight: 400,
                },
            },
        },
        MuiContainer: {
            styleOverrides: {
                root: {
                    '&.pageContainer': {
                        [baseTheme.breakpoints.down(680)]: {
                            marginTop: '56px',
                        },
                    },
                },
            },
        },
        MuiCssBaseline: {
            styleOverrides: {
                nav: {
                    '& .MuiListItem-root .MuiListItemText-root': {
                        marginLeft: '1px',
                        ' & .MuiTypography-root': {
                            fontWeight: 700,
                        },
                    },
                    '& .MuiCollapse-root .MuiListItem-root': {
                        paddingLeft: '35px',
                    },
                    '& .MuiListItem-root': {
                        marginBottom: '6px',
                    },
                },
            },
        },
        MuiDialog: {
            styleOverrides: {
                paper: {
                    boxShadow: defaultShadow,
                    borderRadius: borderRadiusSmall,
                },
                root: {
                    boxShadow: defaultShadow,
                    '& .MuiDialog-paper': {
                        borderRadius: borderRadiusSmall,
                    },
                    '& .MuiDialogTitle-root': {
                        borderRadius: defaultTopOnlyBorderRadius,
                    },
                    '& .MuiDialogContent-root .MuiFormGroup-root': {
                        padding: '1.5%',
                    },
                    '& .MuiDialogActions-root': {
                        borderRadius: defaultBottomOnlyBorderRadius,
                    },
                },
            },
        },
        MuiDialogActions: {
            styleOverrides: {
                root: {
                    justifyContent: 'flex-end',
                },
            },
        },
        MuiDivider: {
            styleOverrides: {
                root: {
                    boxShadow: defaultShadow,
                },
            },
        },
        MuiLink: {
            styleOverrides: {
                root: {
                    cursor: 'pointer',
                    width: '100%',
                    display: 'flex',
                    alignContent: 'center',
                    '& .MuiSvgIcon-root': {
                        color: 'inherit',
                    },
                },
            },
        },
        MuiListItemButton: {
            styleOverrides: {
                root: {
                    '&.Mui-selected': {
                        boxShadow: defaultShadow,
                    },
                },
            },
        },
        MuiMenu: {
            styleOverrides: {
                paper: {
                    backgroundImage: 'none',
                    borderRadius: '0',
                },
            },
        },
        MuiMenuItem: {
            styleOverrides: {
                root: {
                    fontSize: '14px',
                    lineHeight: '150%',
                    padding: '0 10px',
                },
            },
        },
        MuiPaper: {
            styleOverrides: {
                root: {
                    borderRadius: defaultBorderRadius,
                    backgroundImage: 'none !important',
                    [`
                        &.MuiAccordion-rounded:last-of-type,
                        &:last-of-type .MuiButtonBase-root.MuiAccordionSummary-root[aria-expanded="false"]
                    `]: {
                        borderRadius: `${defaultBottomOnlyBorderRadius} !important`,
                        borderBottom: 'none',
                    },
                    [`
                        &.MuiAccordion-rounded:first-of-type,
                        &:first-of-type .MuiButtonBase-root.MuiAccordionSummary-root
                    `]: {
                        borderRadius: `${defaultTopOnlyBorderRadius} !important`,
                    },
                    [`
                        &.MuiAccordion-root,
                        &.MuiAccordion-root.Mui-expanded
                    `]: {
                        margin: '0',
                    },
                    '&.MuiDrawer-paper': {
                        border: 'none',
                        borderRadius: '0',
                    },
                    '&.MuiAppBar-root': {
                        borderRadius: '0px !important',
                    },
                },
                rounded: {
                    '&.MuiMenu-paper': {
                        borderRadius: '0px !important',
                    },
                },
            },
        },
    },
});

export { baseTheme };
