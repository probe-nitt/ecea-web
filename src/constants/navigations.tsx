import {
  MdOutlineDarkMode, MdOutlinePodcasts,
} from 'react-icons/md';
import {
  VscOrganization, VscHome,
} from 'react-icons/vsc';
import { TbBooks } from 'react-icons/tb';

const navigations = [
  {
    label: 'Home',
    path: '',
    element: <VscHome />,
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

export const generals = [
  {
    label: 'DarkMode',
    path: '#',
    element: <MdOutlineDarkMode />,
  },
];
export default navigations;
