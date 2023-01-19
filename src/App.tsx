import { Outlet, Route, Routes } from 'react-router-dom';
import { styled } from '@mui/system';
import { ThemeProvider } from '@mui/material';
import {
  Suspense,
  useEffect, useMemo, useState,
} from 'react';
import router from './constants/routes';
import { darkTheme, lightTheme } from './config/themes';
import ThemingContext from './config/context';
import AppBar from './components/Navigations/AppBar';
import SideBar from './components/Navigations/SideBar';
import BottomBar from './components/Navigations/BottomBar';

const Structure = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  height: 'fit-content',
  width: '100vw',
  overflowX: 'hidden',
  '@media (max-width: 767px)': {
    flexDirection: 'column',
  },
});

const Page = styled('div')(({ theme }) => ({
  flex: 1,
  height: '100%',
  background: theme.palette.backgroundColor,
  animation: 'gradient 15s ease infinite',
  padding: '1.5rem 0rem',
  marginLeft: '225px',
  '@media (max-width: 767px)': {
    margin: '0',
    padding: '5.5rem 0 1rem 0',
  },
}));

const Layout = () => (
  <Structure>
    <AppBar />
    <SideBar />
    <Page>
      <Suspense fallback={(
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          width: '100%',
        }}
        >
          Loading....
        </div>
      )}
      >
        <Outlet />
      </Suspense>
    </Page>
    <BottomBar />
  </Structure>
);

const App = () => {
  const [theme, setTheme] = useState<string | null>('light');

  useEffect(() => {
    const prefTheme = localStorage.getItem('theme');
    setTheme(prefTheme ?? 'light');
  }, []);

  const themeMemo = useMemo(() => ({
    theme,
    setTheme,
  }), [theme]);

  return (
    <ThemingContext.Provider value={themeMemo}>
      <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
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
    </ThemingContext.Provider>
  );
};

export default App;
