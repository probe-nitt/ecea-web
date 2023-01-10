import { Box, styled } from '@mui/system';
import { Divider } from '@mui/material';
import Logo from './Logo';
import navigations from '../../constants/navigations';
import { NavitemProps } from './types';
import NavBarItem from './NavBarItem';
import { socialIcons } from '../../constants/socialicons';
import textColor, { dividerColor, navBarBgColor, navBarShadow } from '../../themes/colors';

const NavBarContent = styled('div')({
  width: '225px',
  background: navBarBgColor,
  boxShadow: navBarShadow,
  height: '100vh',
  position: 'fixed',
  overflowY: 'auto',
  display: 'flex',
  zIndex: 1,
  flexDirection: 'column',
  alignItems: 'flex-start',
  '@media (max-width: 767px)': {
    display: 'none',
  },
});

const NavList = styled('ul')({
  width: '100%',
  padding: 0,
  margin: '0.5rem 0 0.9rem 0',
  position: 'static',
});

const Text = styled('h2')({
  paddingLeft: '1.6rem',
  margin: 0,
  paddingTop: '1rem',
  fontSize: '0.95rem',
  color: textColor,
  fontWeight: 500,
});

const Line = () => (
  <Divider sx={{
    borderColor: dividerColor,
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
    {/* <NavList>
      {generals.map((nav: NavitemProps) => <NavBarItem key={nav.path} {...nav} />)}
    </NavList>
    <Line /> */}
    <Text>Follow us on</Text>
    <NavList>
      {socialIcons.map((nav: NavitemProps) => <NavBarItem key={nav.path} {...nav} isHref />)}
    </NavList>
    <Box flex={1} />
  </NavBarContent>
);

export default SideBar;
