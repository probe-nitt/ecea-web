import { Switch } from '@mui/material';
import { styled } from '@mui/system';
import { useContext } from 'react';
import ThemingContext, { ThemeContextType } from '../../config/context';

const Navitem = styled('li')({
  listStyleType: 'none',
  margin: '0.35rem -0.65rem',
  '@media (max-width: 767px)': {
    margin: '0.1rem 0 0rem 0',
  },
});

const NavitemLink = styled('div')(({ theme }) => ({
  fontSize: '1rem',
  display: 'flex',
  fontWeight: 'bold',
  alignItems: 'center',
  gap: '0.3rem',
  padding: '0.7rem 0 0.7rem 1.2rem',
  margin: '0 0.2rem 0 0.25rem',
  cursor: 'pointer',
  color: theme.palette.navInActiveColor,
  background: theme.palette.navInActiveBgColor,
  borderRadius: '0.8rem',
  span: {
    fontSize: '0.9rem',
  },
  '@media (max-width: 767px)': {
    flexDirection: 'column',
    gap: '0rem',
    padding: '0.2rem 0rem 0rem 0',
    margin: '0',
    span: {
      fontSize: '0.6rem',
    },
  },
}));

const DarkModeSwitch = styled(Switch)(({ theme }) => ({
  width: 40,
  height: 24,
  padding: 7,
  '& .MuiSwitch-switchBase': {
    margin: '3.8px 1px 2px -2px',
    padding: 0,
    transform: 'translate(5px,-1px)',
    '&.Mui-checked': {
      color: theme.palette.textColor,
      transform: 'translate(18px,-1.2px)',
      '& .MuiSwitch-thumb:before': {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="10" width="12" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          theme.palette.navActiveColor,
        )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
      },
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.navActiveColorMobile,
      },
    },
  },
  '& .MuiSwitch-thumb': {
    backgroundColor: theme.palette.titleColor,
    width: 18,
    height: 18,
    '&:before': {
      content: '\'\'',
      position: 'absolute',
      width: '100%',
      height: '100%',
      left: 0,
      top: 0,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="12" width="12" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
        '#fff',
      )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
    },
  },
  '& .MuiSwitch-track': {
    opacity: 1,
    backgroundColor: '#aab4be',
    borderRadius: 20 / 2,
  },
}));

const DarkModeToggle = () => {
  const { theme, setTheme } = useContext<ThemeContextType>(ThemingContext);
  return (
    <Navitem>
      <NavitemLink>
        <DarkModeSwitch
          checked={theme === 'dark'}
          onChange={() => {
            const chosenTheme = theme === 'dark' ? 'light' : 'dark';
            setTheme(chosenTheme);
            localStorage.setItem('theme', chosenTheme);
          }}
        />
        <span>Dark-Mode</span>
      </NavitemLink>
    </Navitem>
  );
};

export default DarkModeToggle;
