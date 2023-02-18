import {
  MdOutlineDarkMode, MdOutlineExplore, MdOutlinePodcasts,
} from 'react-icons/md';
import {
  VscOrganization, VscHome,
} from 'react-icons/vsc';
import { TbBooks } from 'react-icons/tb';
import { SlLogin, SlSettings } from 'react-icons/sl';

export const navigations = [
  {
    label: 'Home',
    path: '',
    element: <VscHome />,
  },
  {
    label: 'Explore',
    path: 'explore',
    element: <MdOutlineExplore />,
  },
  {
    label: 'Podcasts',
    path: 'podcasts',
    element: <MdOutlinePodcasts />,
  },
  {
    label: 'Resources',
    path: 'resources',
    element: <TbBooks />,
  },
  {
    label: 'Teams',
    path: 'teams',
    element: <VscOrganization />,
  },
];

export const accounts = [
  {
    label: 'Login',
    path: '/login',
    element: <SlLogin />,
  },
  {
    label: 'Settings',
    path: '/settings',
    element: <SlSettings />,
  },
];

export const generals = [
  {
    label: 'DarkMode',
    path: '#',
    element: <MdOutlineDarkMode />,
  },
];
