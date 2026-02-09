import { createTheme } from '@mui/material/styles';
import { deepmerge } from '@mui/utils';
import { baseTheme } from './base-theme';

/**
 * Dark theme configuration for the application, extending the base theme with dark-specific settings.
 * This theme is designed to provide a dark and visually appealing user interface, suitable for low-light environments.
 * It includes customizations for primary and secondary colors, background, text, and component styles to ensure
 */

let darkTheme = deepmerge(
    baseTheme,
    createTheme({
        palette: {
            mode: 'dark' as const,
            primary: {
                main: '#4CCFE3', // moonlit aqua
                dark: '#3AB5C8',
                light: '#7EE4F2',
            },
            secondary: {
                main: '#D9A45A', // warm sand by firelight
                dark: '#B8863F',
                light: '#F4C27A',
            },
            success: {
                main: '#6BD9A0',
            },
            warning: {
                main: '#E6B85C',
            },
            error: {
                main: '#E06A67',
            },
            background: {
                default: '#0D1A24', // deep Pacific blue-black
                paper: '#15232E', // volcanic rock shadow
            },
            text: {
                primary: '#F2F5F7',
                secondary: '#A9B7C0',
            },
            divider: '#2A3A45',
            // Custom colors
            accent: {
                main: '#FF7A59', // sunset coral
            },
        },
    }),
);

// Create the completed darkTheme by merging the baseTheme with the dark-specific overrides
darkTheme = createTheme(darkTheme, {
    components: {
        MuiAccordionDetails: {
            styleOverrides: {
                root: {
                    backgroundColor: darkTheme.palette.background.paper,
                    '& textarea': {
                        backgroundColor: darkTheme.palette.background.paper,
                        border: `1px solid ${darkTheme.palette.text.primary}`,
                        color: darkTheme.palette.text.primary,
                    },
                },
            },
        },
        MuiAccordionSummary: {
            styleOverrides: {
                root: {
                    backgroundColor: `${darkTheme.palette.background.paper} !important`,
                    color: darkTheme.palette.text.primary,
                    '&.accordion-inner': {
                        backgroundColor: `${darkTheme.palette.background.paper} !important`,
                        color: darkTheme.palette.text.primary,
                    },
                },
            },
        },
        MuiAppBar: {
            styleOverrides: {
                root: {
                    backgroundColor: darkTheme.palette.brand.base,
                    color: darkTheme.palette.brand.reverse,
                    '& .MuiIconButton-root': {
                        color: darkTheme.palette.brand.reverse,
                        '&:hover': {
                            backgroundColor: darkTheme.palette.brand.dark,
                        },
                    },
                    '& .MuiButton-root': {
                        backgroundColor: darkTheme.palette.primary.main,
                        color: darkTheme.palette.primary.contrastText,
                    },
                },
            },
        },
        MuiAutoComplete: {
            styleOverrides: {
                root: {
                    '& .MuiAutocomplete-inputRoot.Mui-disabled.Mui-error .MuiOutlinedInput-notchedOutline': {
                        border: `1px solid ${darkTheme.palette.error.main}`,
                    },
                },
                groupLabel: {
                    '& .MuiAutocomplete-option': {
                        '&[aria-selected="true"]': {
                            backgroundColor: darkTheme.palette.action.selected,
                            '&.Mui-focused': {
                                backgroundColor: darkTheme.palette.action.hover,
                            },
                        },
                    },
                },
                groupUl: {
                    '& .MuiAutocomplete-option': {
                        '&[aria-selected="true"]': {
                            backgroundColor: darkTheme.palette.action.selected,
                            '&.Mui-focused': {
                                backgroundColor: darkTheme.palette.action.hover,
                            },
                        },
                    },
                },
                option: {
                    color: darkTheme.palette.text.primary,
                    '&:hover': {
                        backgroundColor: `${darkTheme.palette.action.hover} !important`,
                    },
                    '&[aria-selected="true"]': {
                        backgroundColor: darkTheme.palette.action.selected,
                        '&.Mui-focused': {
                            backgroundColor: `${darkTheme.palette.action.hover} !important`,
                        },
                    },
                },
                popupIndicator: {
                    color: darkTheme.palette.text.primary,
                },
            },
        },
        MuiCardHeader: {
            styleOverrides: {
                title: {
                    color: darkTheme.palette.text.primary,
                },
            },
        },
        MuiCheckbox: {
            styleOverrides: {
                root: {
                    color: darkTheme.palette.text.primary,
                },
            },
        },
        MuiDialog: {
            styleOverrides: {
                paper: {
                    backgroundColor: `${darkTheme.palette.background.paper} !important`,
                    '& .MuiDialogTitle-root': {
                        color: darkTheme.palette.text.primary,
                    },
                },
                root: {
                    '& .MuiDialogContent-root > div': {
                        color: darkTheme.palette.background.paper,
                    },
                },
            },
        },
        MuiDivider: {
            styleOverrides: {
                root: {
                    backgroundColor: darkTheme.palette.divider,
                    color: darkTheme.palette.divider,
                },
            },
        },
        MuiListItem: {
            styleOverrides: {
                root: {
                    color: darkTheme.palette.text.primary,
                    selected: {
                        backgroundColor: `${darkTheme.palette.action.selected} !important`,
                    },
                },
            },
        },
        MuiListItemButton: {
            styleOverrides: {
                root: {
                    '&.Mui-selected': {
                        backgroundColor: `${darkTheme.palette.action.selected} !important`,
                    },
                },
            },
        },
        MuiListItemText: {
            styleOverrides: {
                root: {
                    color: darkTheme.palette.text.primary,
                },
            },
        },
        MuiListSubheader: {
            styleOverrides: {
                root: {
                    borderBottom: `1px solid ${darkTheme.palette.divider}`,
                },
            },
        },
        MuiPaper: {
            styleOverrides: {
                root: {
                    backgroundColor: darkTheme.palette.background.paper,
                    '&.MuiAccordion-root': {
                        backgroundColor: darkTheme.palette.background.paper,
                    },
                    '&.MuiAccordion-rounded': {
                        borderBottom: `1px solid ${darkTheme.palette.divider}`,
                    },
                },
            },
        },
    },
});

export { darkTheme };
