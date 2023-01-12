import Home from '../containers/Home';
import Podcasts from '../containers/Podcasts';
import Resources from '../containers/Resources';
import Teams from '../containers/Teams';

const router = [
  {
    path: '',
    element: <Home />,
  },
  {
    path: 'teams',
    element: <Teams />,
  },
  {
    path: 'resources',
    element: <Resources />,
  },
  {
    path: 'podcasts',
    element: <Podcasts />,
  },
];

export default router;
