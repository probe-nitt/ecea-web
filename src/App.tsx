import { Outlet, Route, Routes } from 'react-router-dom';
import { styled } from '@mui/system';
import AppBar from './components/Navigations/AppBar';
import SideBar from './components/Navigations/SideBar';
import BottomBar from './components/Navigations/BottomBar';
import router from './constants/routes';

const Structure = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  height: '100vh',
  width: '100vw',
  '@media (max-width: 767px)': {
    flexDirection: 'column',
  },
});

const Page = styled('div')({
  flex: 1,
  height: '100%',
  backgroundColor: '#00001d',
  padding: '1.5rem',
  marginLeft: '230px',
  '@media (max-width: 767px)': {
    margin: 0,
  },
});

const Layout = () => (
  <Structure>
    <AppBar />
    <SideBar />
    <Page>
      <Outlet />
    </Page>
    <BottomBar />
  </Structure>
);

const App = () => (
  <Routes>
    <Route path="" element={<Layout />}>
      {router.map((nav) => (
        <Route
          key={nav.path}
          path={nav.path}
          element={nav.element}
        />
      ))}
    </Route>
  </Routes>
);

export default App;
