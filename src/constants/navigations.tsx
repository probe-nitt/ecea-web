import { MdOutlinePodcasts } from 'react-icons/md';
import {
  VscOrganization, VscHome,
} from 'react-icons/vsc';
import { TbBooks, TbLogin, TbSettings } from 'react-icons/tb';

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
    label: 'Settings',
    path: 'settings',
    element: <TbSettings />,
  },
  {
    label: 'Login',
    path: 'login',
    element: <TbLogin />,
  },
];
export default navigations;
