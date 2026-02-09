import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
    Box,
    Collapse,
    Drawer,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    ListSubheader,
    Paper,
    Popper,
    Toolbar,
    Tooltip,
} from '@mui/material';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { NAV_ITEMS } from '../../routes';
import type { NavItem } from '../../utils/types';

const DRAWER_WIDTH = 240;
const COLLAPSED_WIDTH = 64;

export function SideNav({ collapsed }: { collapsed: boolean }) {
    const location = useLocation();
    const navigate = useNavigate();
    const [open, setOpen] = useState<Record<string, boolean>>({});
    const [popoutAnchor, setPopoutAnchor] = useState<null | HTMLElement>(null);
    const [isHoveringPopout, setIsHoveringPopout] = useState(false);

    useEffect(() => {
        // Expand parent menus if a child route is active
        NAV_ITEMS.forEach((item) => {
            if (item.children) {
                item.children.forEach((child) => {
                    if (location.pathname === child.path) {
                        setOpen((prev) => ({ ...prev, [item.label]: true }));
                    }
                });
            }
        });
    }, [location]);

    const toggle = (label: string) => {
        setOpen((prev) => ({ ...prev, [label]: !prev[label] }));
    };

    const handleKeyDown = (event: React.KeyboardEvent, item: NavItem) => {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            if (item.children) {
                toggle(item.label);
            } else if (item.path) {
                navigate(item.path);
            }
        }

        if (event.key === 'ArrowRight' && item.children) {
            setOpen((prev) => ({ ...prev, [item.label]: true }));
        }

        if (event.key === 'ArrowLeft' && item.children) {
            setOpen((prev) => ({ ...prev, [item.label]: false }));
        }
    };

    return (
        <Drawer
            variant='permanent'
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

                            return (
                                <Box key={item.label}>
                                    <ListItemButton
                                        onClick={() => (collapsed ? null : toggle(item.label))}
                                        onMouseEnter={(e) => collapsed && setPopoutAnchor(e.currentTarget)}
                                        onMouseLeave={() =>
                                            collapsed &&
                                            setTimeout(() => {
                                                if (!isHoveringPopout) setPopoutAnchor(null);
                                            }, 300)
                                        }
                                        onKeyDown={(e) => handleKeyDown(e, item)}
                                        sx={{ justifyContent: collapsed ? 'center' : 'flex-start', px: collapsed ? 2 : 3 }}
                                    >
                                        <ListItemIcon sx={{ minWidth: 0, mr: collapsed ? 0 : 2, justifyContent: 'center' }}>
                                            <item.icon />
                                        </ListItemIcon>

                                        {!collapsed && <ListItemText primary={item.label} />}

                                        {collapsed ? null : expanded ? <ExpandLess /> : <ExpandMore />}
                                    </ListItemButton>

                                    {/* Popout menu for collapsed state */}
                                    {collapsed && (
                                        <Popper
                                            open={Boolean(popoutAnchor)}
                                            anchorEl={popoutAnchor}
                                            placement='right-start'
                                            onMouseEnter={() => setIsHoveringPopout(true)}
                                            onMouseLeave={() => {
                                                setIsHoveringPopout(false);
                                                setPopoutAnchor(null);
                                            }}
                                            disablePortal={false}
                                        >
                                            <Paper elevation={4}>
                                                <List dense>
                                                    <ListSubheader>{item.label}</ListSubheader>
                                                    {item.children.map((child) => (
                                                        <ListItemButton
                                                            key={child.path}
                                                            selected={location.pathname === child.path}
                                                            onClick={() => navigate(child.path!)}
                                                            onKeyDown={(e) => handleKeyDown(e, item)}
                                                        >
                                                            <ListItemIcon>
                                                                <child.icon />
                                                            </ListItemIcon>
                                                            <ListItemText primary={child.label} />
                                                        </ListItemButton>
                                                    ))}
                                                </List>
                                            </Paper>
                                        </Popper>
                                    )}

                                    {/* Collapsible submenu for expanded state */}
                                    {!collapsed && (
                                        <Collapse in={expanded && !collapsed} timeout='auto' unmountOnExit>
                                            <List component='div' disablePadding>
                                                {item.children.map((child) => {
                                                    const childActive = location.pathname === child.path;

                                                    return (
                                                        <ListItemButton
                                                            key={child.path}
                                                            selected={childActive}
                                                            onClick={() => navigate(child.path!)}
                                                            onKeyDown={(e) => handleKeyDown(e, item)}
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

                                                            <ListItemText primary={child.label} />
                                                        </ListItemButton>
                                                    );
                                                })}
                                            </List>
                                        </Collapse>
                                    )}
                                </Box>
                            );
                        }

                        // Normal single-level item
                        const button = (
                            <ListItemButton
                                key={item.label}
                                selected={active}
                                onClick={() => navigate(item.path!)}
                                sx={{ justifyContent: collapsed ? 'center' : 'flex-start', px: collapsed ? 2 : 3 }}
                            >
                                <ListItemIcon sx={{ minWidth: 0, mr: collapsed ? 0 : 2, justifyContent: 'center' }}>
                                    <item.icon />
                                </ListItemIcon>

                                {!collapsed && <ListItemText primary={item.label} />}
                            </ListItemButton>
                        );

                        return collapsed ? (
                            <Tooltip key={item.path} title={item.label} followCursor>
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
