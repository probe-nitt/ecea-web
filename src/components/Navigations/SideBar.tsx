import { styled } from '@mui/system';
import { Divider } from '@mui/material';
import { SlLogin } from 'react-icons/sl';
import Logo from './Logo';
import { navigations } from '../../constants/navigations';
import { NavitemProps } from './types';
import NavBarItem from './NavBarItem';
import DarkModeToggle from './DarkModeToggle';
import { socialIcons } from '../../constants/socialicons';

const NavBarContent = styled('div')(({ theme }) => ({
  width: '225px',
  background: theme.palette.barBackgroundColor,
  boxShadow: theme.palette.tabShadow,
  height: '100%',
  position: 'fixed',
  display: 'flex',
  zIndex: 2,
  flexDirection: 'column',
  alignItems: 'flex-start',
  overflowY: 'scroll',
  marginBottom: 0,
  '@media (max-width: 767px)': {
    display: 'none',
  },
}));

const NavList = styled('ul')({
  width: '100%',
  padding: 0,
  margin: '0.65rem 0',
  position: 'static',
});

const Text = styled('h5')(({ theme }) => ({
  padding: '1rem 0rem 0.1rem 1.2rem',
  margin: 0,
  fontSize: '0.95rem',
  color: theme.palette.hintColor,
  fontWeight: 500,
}));

export const Line = () => (
  <Divider sx={{
    borderColor: 'dividerColor',
    boxShadow: '0 0 0rem 0 rgb(150, 150, 150)',
    width: '100%',
  }}
  />
);

const SideBar = () => (
  <NavBarContent>
    <Logo />
    <Line />
    <NavList>
      {navigations.map((nav: NavitemProps) => <NavBarItem key={nav.path} {...nav} />)}
    </NavList>
    <Line />
    <Text>General</Text>
    <NavList>
      <NavBarItem key="login" label="Login" element={<SlLogin />} path="/login" />
      <DarkModeToggle />
    </NavList>
    <Line />
    <Text>Follow Us On</Text>
    <NavList>
      {socialIcons.map((nav: NavitemProps) => <NavBarItem key={nav.path} {...nav} />)}
    </NavList>
  </NavBarContent>
);

export default SideBar;
