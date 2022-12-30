import { styled } from '@mui/system';
import { Divider } from '@mui/material';
import Logo from './Logo';
import navigations from '../../constants/navigations';
import { NavitemProps } from './types';
import NavBarItem from './NavBarItem';
import { socialIcons } from '../../constants/socialicons';

const NavBarContent = styled('div')({
  width: '230px',
  background: '#00001d',
  height: '100vh',
  position: 'fixed',
  overflowY: 'auto',
  display: 'flex',
  zIndex: 2,
  boxShadow: '0 0 0.5rem 0 rgb(100, 100, 100)',
  flexDirection: 'column',
  alignItems: 'flex-start',
  '@media (max-width: 767px)': {
    display: 'none',
  },
});

const NavList = styled('ul')({
  width: '100%',
  padding: 0,
  margin: '0.55rem 0',
  position: 'static',
});

const Text = styled('div')({
  paddingLeft: '2rem',
  paddingTop: '1.2rem',
  paddingBottom: '0.1rem',
  fontSize: '1.1rem',
  color: 'white',
  fontWeight: 500,
});

const Line = () => (
  <Divider sx={{
    borderColor: 'rgb(100, 100, 100)',
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
    <NavList>
      {socialIcons.map((nav: NavitemProps) => <NavBarItem key={nav.path} {...nav} isHref />)}
    </NavList>
  </NavBarContent>
);

export default SideBar;
