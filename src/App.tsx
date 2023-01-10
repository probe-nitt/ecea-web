import { Outlet, Route, Routes } from 'react-router-dom';
import { styled } from '@mui/system';
import { ThemeProvider } from '@mui/material/styles';
import AppBar from './components/Navigations/AppBar';
import SideBar from './components/Navigations/SideBar';
import BottomBar from './components/Navigations/BottomBar';
import router from './constants/routes';
import { pageBgColor } from './themes/colors';
import theme from './themes/themes';

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
  height: 'fit-content',
  background: pageBgColor,
  animation: 'gradient 15s ease infinite',
  padding: '1.5rem',
  marginLeft: '230px',
  '@media (max-width: 767px)': {
    margin: '4.5rem 0',
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
  <ThemeProvider theme={theme}>
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
  </ThemeProvider>
);

export default App;
