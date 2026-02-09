import ChatIcon from '@mui/icons-material/Chat';
import ForumIcon from '@mui/icons-material/Forum';
import HomeIcon from '@mui/icons-material/Home';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import SmsIcon from '@mui/icons-material/Sms';
import type { NavItem } from './utils/types';

export const NAV_ITEMS: NavItem[] = [
    {
        label: 'Home',
        path: '/',
        icon: HomeIcon,
    },
    {
        label: 'Chat',
        icon: ForumIcon,
        children: [
            { label: 'JSON', path: '/json', icon: ChatIcon },
            { label: 'Streaming', path: '/stream', icon: SmsIcon },
        ],
    },
    {
        label: 'Knowledge Base',
        path: '/knowledge-base',
        icon: MenuBookIcon,
    },
];
