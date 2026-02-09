import { createTheme } from '@mui/material/styles';
import { deepmerge } from '@mui/utils';
import { baseTheme } from './base-theme';

/**
 * Light theme configuration for the application, extending the base theme with light-specific settings.
 * This theme is designed to provide a bright and clean user interface, suitable for well-lit environments.
 * It includes customizations for primary and secondary colors, background, text, and component styles to ensure
 */

let lightTheme = deepmerge(
    baseTheme,
    createTheme({
        palette: {
            mode: 'light' as const,
            primary: {
                main: '#1A9DBF', // turquoise water
                dark: '#1587A3',
                light: '#4CCFE3',
            },
            secondary: {
                main: '#F4C27A', // warm sand
                dark: '#D9A45A',
                light: '#FFE1B3',
            },
            success: {
                main: '#4FAF7B', // palm green
            },
            warning: {
                main: '#E6A93D', // sunlit amber
            },
            error: {
                main: '#D9534F', // lava red
            },
            background: {
                default: '#FAF9F6', // sand-white
                paper: '#FFFFFF',
            },
            text: {
                primary: '#2A2A2A',
                secondary: '#5A5A5A',
            },
            divider: '#D8D5CC',
            // Custom colors
            accent: {
                main: '#FF8F6B', // coral sunrise
            },
        },
    }),
);

// Create the completed lightTheme by merging the baseTheme with the light-specific overrides
lightTheme = createTheme(lightTheme, {
    components: {
        MuiAccordionDetails: {
            styleOverrides: {
                root: {
                    backgroundColor: lightTheme.palette.background.paper,
                    '& textarea': {
                        backgroundColor: lightTheme.palette.background.paper,
                        border: `1px solid ${lightTheme.palette.text.primary}`,
                        color: lightTheme.palette.text.primary,
                    },
                },
            },
        },
        MuiAccordionSummary: {
            styleOverrides: {
                root: {
                    backgroundColor: `${lightTheme.palette.background.paper} !important`,
                    color: lightTheme.palette.text.primary,
                    '&.accordion-inner': {
                        backgroundColor: `${lightTheme.palette.background.paper} !important`,
                        color: lightTheme.palette.text.primary,
                    },
                },
            },
        },
        MuiAppBar: {
            styleOverrides: {
                root: {
                    backgroundColor: lightTheme.palette.brand.base,
                    color: lightTheme.palette.brand.reverse,
                    '& .MuiIconButton-root': {
                        color: lightTheme.palette.brand.reverse,
                        '&:hover': {
                            backgroundColor: lightTheme.palette.brand.dark,
                        },
                    },
                    '& .MuiButton-root': {
                        backgroundColor: lightTheme.palette.primary.main,
                        color: lightTheme.palette.primary.contrastText,
                    },
                },
            },
        },
        MuiAutoComplete: {
            styleOverrides: {
                root: {
                    '& .MuiAutocomplete-inputRoot.Mui-disabled.Mui-error .MuiOutlinedInput-notchedOutline': {
                        border: `1px solid ${lightTheme.palette.error.main}`,
                    },
                },
                groupLabel: {
                    '& .MuiAutocomplete-option': {
                        '&[aria-selected="true"]': {
                            backgroundColor: lightTheme.palette.action.selected,
                            '&.Mui-focused': {
                                backgroundColor: lightTheme.palette.action.hover,
                            },
                        },
                    },
                },
                groupUl: {
                    '& .MuiAutocomplete-option': {
                        '&[aria-selected="true"]': {
                            backgroundColor: lightTheme.palette.action.selected,
                            '&.Mui-focused': {
                                backgroundColor: lightTheme.palette.action.hover,
                            },
                        },
                    },
                },
                option: {
                    color: lightTheme.palette.text.primary,
                    '&:hover': {
                        backgroundColor: `${lightTheme.palette.action.hover} !important`,
                    },
                    '&[aria-selected="true"]': {
                        backgroundColor: lightTheme.palette.action.selected,
                        '&.Mui-focused': {
                            backgroundColor: `${lightTheme.palette.action.hover} !important`,
                        },
                    },
                },
                popupIndicator: {
                    color: lightTheme.palette.text.primary,
                },
            },
        },
        MuiCardHeader: {
            styleOverrides: {
                title: {
                    color: lightTheme.palette.text.primary,
                },
            },
        },
        MuiCheckbox: {
            styleOverrides: {
                root: {
                    color: lightTheme.palette.text.primary,
                },
            },
        },
        MuiDialog: {
            styleOverrides: {
                paper: {
                    backgroundColor: `${lightTheme.palette.background.paper} !important`,
                    '& .MuiDialogTitle-root': {
                        color: lightTheme.palette.text.primary,
                    },
                },
                root: {
                    '& .MuiDialogContent-root > div': {
                        color: lightTheme.palette.background.paper,
                    },
                },
            },
        },
        MuiDivider: {
            styleOverrides: {
                root: {
                    backgroundColor: lightTheme.palette.divider,
                    color: lightTheme.palette.divider,
                },
            },
        },
        MuiListItem: {
            styleOverrides: {
                root: {
                    color: lightTheme.palette.text.primary,
                    selected: {
                        backgroundColor: `${lightTheme.palette.action.selected} !important`,
                    },
                },
            },
        },
        MuiListItemButton: {
            styleOverrides: {
                root: {
                    '&.Mui-selected': {
                        backgroundColor: `${lightTheme.palette.action.selected} !important`,
                    },
                },
            },
        },
        MuiListItemText: {
            styleOverrides: {
                root: {
                    color: lightTheme.palette.text.primary,
                },
            },
        },
        MuiListSubheader: {
            styleOverrides: {
                root: {
                    borderBottom: `1px solid ${lightTheme.palette.divider}`,
                },
            },
        },
        MuiPaper: {
            styleOverrides: {
                root: {
                    backgroundColor: lightTheme.palette.background.paper,
                    '&.MuiAccordion-root': {
                        backgroundColor: lightTheme.palette.background.paper,
                    },
                    '&.MuiAccordion-rounded': {
                        borderBottom: `1px solid ${lightTheme.palette.divider}`,
                    },
                },
            },
        },
    },
});

export { lightTheme };
