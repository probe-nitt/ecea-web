import styled from '@emotion/styled';
import navigations from '../../constants/navigations';
import NavBarItem from './NavBarItem';
import { NavitemProps } from './types';

const BottomBarContent = styled('div')({
  display: 'none',
  position: 'fixed',
  width: '100%',
  bottom: 0,
  background: '#00001d',
  flexDirection: 'row',
  justifyContent: 'space-around',
  zIndex: 2,
  boxShadow: '0 0 0.25rem 0 rgb(100, 100, 100)',
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
