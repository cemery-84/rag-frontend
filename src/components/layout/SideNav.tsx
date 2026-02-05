import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
    Box,
    Collapse,
    Drawer,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Toolbar,
    Tooltip,
} from '@mui/material';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { NAV_ITEMS } from '../../routes';

const DRAWER_WIDTH = 240;
const COLLAPSED_WIDTH = 64;

export function SideNav({ collapsed }: { collapsed: boolean }) {
    const location = useLocation();
    const navigate = useNavigate();
    const [open, setOpen] = useState<Record<string, boolean>>({});

    const toggle = (label: string) => {
        setOpen((prev) => ({
            ...prev,
            [label]: !prev[label],
        }));
    };

    return (
        <Drawer
            variant="permanent"
            sx={{
                flexShrink: 0,
                transition: 'width 0.25s ease',
                whiteSpace: 'nowrap',
                width: collapsed ? COLLAPSED_WIDTH : DRAWER_WIDTH,
                ['& .MuiDrawer-paper']: {
                    boxSizing: 'border-box',
                    overflowX: 'hidden',
                    transition: 'width 0.25s ease',
                    width: collapsed ? COLLAPSED_WIDTH : DRAWER_WIDTH,
                },
            }}
        >
            <Toolbar />
            <Box sx={{ overflow: 'auto' }}>
                <List>
                    {NAV_ITEMS.map((item) => {
                        const active = location.pathname === item.path;

                        // Parent with children
                        if (item.children) {
                            const expanded = open[item.label] || false;

                            const parentButton = (
                                <ListItemButton
                                    onClick={() =>
                                        collapsed ? null : toggle(item.label)
                                    }
                                    sx={{
                                        justifyContent: collapsed
                                            ? 'center'
                                            : 'flex-start',
                                        px: collapsed ? 2 : 3,
                                    }}
                                >
                                    <ListItemIcon
                                        sx={{
                                            minWidth: 0,
                                            mr: collapsed ? 0 : 2,
                                            justifyContent: 'center',
                                        }}
                                    >
                                        <item.icon />
                                    </ListItemIcon>

                                    {!collapsed && (
                                        <ListItemText primary={item.label} />
                                    )}

                                    {collapsed ? null : expanded ? (
                                        <ExpandLess />
                                    ) : (
                                        <ExpandMore />
                                    )}
                                </ListItemButton>
                            );

                            return (
                                <Box key={item.label}>
                                    {collapsed ? (
                                        <Tooltip
                                            title={item.label}
                                            placement="right"
                                        >
                                            {parentButton}
                                        </Tooltip>
                                    ) : (
                                        parentButton
                                    )}

                                    <Collapse
                                        in={expanded && !collapsed}
                                        timeout="auto"
                                        unmountOnExit
                                    >
                                        <List component="div" disablePadding>
                                            {item.children.map((child) => {
                                                const childActive =
                                                    location.pathname ===
                                                    child.path;

                                                return (
                                                    <ListItemButton
                                                        key={child.path}
                                                        selected={childActive}
                                                        onClick={() =>
                                                            navigate(child.path)
                                                        }
                                                        sx={{ pl: 6 }}
                                                    >
                                                        <ListItemIcon
                                                            sx={{
                                                                minWidth: 0,
                                                                mr: 2,
                                                            }}
                                                        >
                                                            <child.icon />
                                                        </ListItemIcon>

                                                        <ListItemText
                                                            primary={
                                                                child.label
                                                            }
                                                        />
                                                    </ListItemButton>
                                                );
                                            })}
                                        </List>
                                    </Collapse>
                                </Box>
                            );
                        }

                        // Normal single-level item
                        const button = (
                            <ListItemButton
                                key={item.label}
                                selected={active}
                                onClick={() => navigate(item.path)}
                                sx={{
                                    justifyContent: collapsed
                                        ? 'center'
                                        : 'flex-start',
                                    px: collapsed ? 2 : 3,
                                }}
                            >
                                <ListItemIcon
                                    sx={{
                                        minWidth: 0,
                                        mr: collapsed ? 0 : 2,
                                        justifyContent: 'center',
                                    }}
                                >
                                    <item.icon />
                                </ListItemIcon>

                                {!collapsed && (
                                    <ListItemText primary={item.label} />
                                )}
                            </ListItemButton>
                        );

                        return collapsed ? (
                            <Tooltip
                                key={item.path}
                                title={item.label}
                                placement="right"
                            >
                                {button}
                            </Tooltip>
                        ) : (
                            <Box key={item.path}>{button}</Box>
                        );
                    })}
                </List>
            </Box>
        </Drawer>
    );
}
