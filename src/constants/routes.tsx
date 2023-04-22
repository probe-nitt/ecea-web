import { lazy } from 'react';
import Documents from '../containers/Documents';

const Home = lazy(() => import ('../containers/Home'));
const Podcasts = lazy(() => import('../containers/Podcasts'));
const Resources = lazy(() => import('../containers/Resources'));
const Teams = lazy(() => import('../containers/Teams'));

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
  {
    path: '/resources/:subjectId',
    element: <Documents />,
  },
];

export default router;
