import { styled } from '@mui/system';
import { useContext } from 'react';
import { MdDarkMode, MdLightMode } from 'react-icons/md';
import ThemingContext, { ThemeContextType } from '../../config/context';

const Navitem = styled('div')({
  listStyleType: 'none',
  margin: '0.6rem 0 0 -0.2rem',
  '@media (max-width: 767px)': {
    margin: '0.1rem 0.5rem 0 0',
    position: 'relative',
  },
});

const NavitemLink = styled('div')(({ theme }) => ({
  fontSize: '1rem',
  display: 'flex',
  fontWeight: 'bold',
  alignItems: 'center',
  gap: '0.5rem',
  padding: '0.2rem 0 0.7rem 1.2rem',
  margin: '0 0.2rem 0 0.25rem',
  cursor: 'pointer',
  color: theme.palette.inactiveColor,
  background: theme.palette.inactiveBackgroundColor,
  borderRadius: '0.8rem',
  span: {
    fontSize: '0.9rem',
  },
  '@media (max-width: 767px)': {
    flexDirection: 'column',
    gap: '0rem',
    padding: '0.2rem 0rem 0rem 0',
    margin: '0',
    float: 'right',
  },
}));

const NavitemTitle = styled('span')({
  fontSize: '0.9rem',
  marginTop: '0.2rem',
  '@media (max-width: 767px)': {
    display: 'none',
  },
});

const DarkModeSwitch = styled('button')(({ theme }) => ({
  width: 27,
  height: 27,
  padding: 7,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  background: theme.palette.activeBackgroundColor,
  boxShadow: theme.palette.tabShadow,
  color: theme.palette.activeColor,
  borderRadius: '50%',
  border: '1px solid transparent',
  cursor: 'pointer',
}));

const DarkModeToggle = () => {
  const { theme, setTheme } = useContext<ThemeContextType>(ThemingContext);
  return (
    <Navitem>
      <NavitemLink>
        <DarkModeSwitch
          onClick={() => {
            const chosenTheme = theme === 'dark' ? 'light' : 'dark';
            setTheme(chosenTheme);
            localStorage.setItem('theme', chosenTheme);
          }}
        >
          {theme !== 'light' ? <MdLightMode /> : <MdDarkMode />}
        </DarkModeSwitch>
        <NavitemTitle>
          {theme === 'light' ? 'Dark' : 'Light'}
          mode
        </NavitemTitle>
      </NavitemLink>
    </Navitem>
  );
};

export default DarkModeToggle;
