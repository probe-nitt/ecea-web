import styled from '@emotion/styled';
import navigations from '../../constants/navigations';
import { navBarBgColor, navBarShadow } from '../../themes/colors';
import NavBarItem from './NavBarItem';
import { NavitemProps } from './types';

const BottomBarContent = styled('div')({
  display: 'none',
  position: 'fixed',
  width: '100%',
  bottom: 0,
  background: navBarBgColor,
  flexDirection: 'row',
  justifyContent: 'space-evenly',
  zIndex: 2,
  padding: '0.3rem 0',
  boxShadow: navBarShadow,
  '@media (max-width: 767px)': {
    display: 'flex',
  },
});

const BottomBar = () => (
  <BottomBarContent>
    {navigations.map((nav: NavitemProps) => <NavBarItem key={nav.label} {...nav} />)}
  </BottomBarContent>
);

export default BottomBar;
