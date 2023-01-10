import Home from '../containers/Home';
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
    element: <Resources />,
  },
];

export default router;
