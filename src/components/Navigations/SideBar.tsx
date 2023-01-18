import { Box, styled } from '@mui/system';
import { Divider } from '@mui/material';
import Logo from './Logo';
import navigations from '../../constants/navigations';
import { NavitemProps } from './types';
import NavBarItem from './NavBarItem';
import { socialIcons } from '../../constants/socialicons';
import DarkModeToggle from './DarkModeToggle';

const NavBarContent = styled('div')(({ theme }) => ({
  width: '227px',
  background: theme.palette.navBarBgColor,
  boxShadow: theme.palette.navBarShadow,
  height: '100%',
  position: 'fixed',
  overflowY: 'hidden',
  display: 'flex',
  zIndex: 1,
  flexDirection: 'column',
  alignItems: 'flex-start',
  '@media (max-width: 767px)': {
    display: 'none',
  },
}));

const NavList = styled('ul')({
  width: '100%',
  padding: 0,
  margin: '0.5rem 0 0.9rem 0',
  position: 'static',
});

const Text = styled('h2')(({ theme }) => ({
  paddingLeft: '1.6rem',
  margin: 0,
  paddingTop: '1rem',
  fontSize: '0.95rem',
  color: theme.palette.hintColor,
  fontWeight: 500,
}));

export const Line = () => (
  <Divider sx={{
    borderColor: 'dividerColor',
    boxShadow: '0 0 0.5rem 0 rgb(100, 100, 100)',
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
    <Text>Follow us on</Text>
    <NavList style={{ overflowY: 'scroll', marginBottom: 0 }}>
      {socialIcons.map((nav: NavitemProps) => <NavBarItem key={nav.path} {...nav} isHref />)}
    </NavList>
    <Box flex={1} />
    <Line />
    <DarkModeToggle />
  </NavBarContent>
);

export default SideBar;
