import { styled } from '@mui/system';
import navigations from '../../constants/navigations';
import NavBarItem from './NavBarItem';
import { NavitemProps } from './types';

const BottomBarContent = styled('ul')(({ theme }) => ({
  display: 'none',
  position: 'fixed',
  width: '100%',
  bottom: 0,
  marginBottom: 0,
  background: theme.palette.barBackgroundColor,
  flexDirection: 'row',
  justifyContent: 'space-around',
  zIndex: 2,
  padding: '0.3rem 0',
  boxShadow: theme.palette.tabShadow,
  '@media (max-width: 767px)': {
    display: 'flex',
  },
}));

const BottomBar = () => (
  <BottomBarContent>
    {navigations.map((nav: NavitemProps) => <NavBarItem key={nav.label} {...nav} />)}
  </BottomBarContent>
);

export default BottomBar;
