import { styled } from '@mui/system';
import Logo from './Logo';

const AppBarContent = styled('div')(({ theme }) => ({
  display: 'none',
  width: '100%',
  background: '#00001d',
  height: 'fit-content',
  overflowY: 'auto',
  flexDirection: 'column',
  zIndex: 2,
  backgroundColor: theme.palette.navBarBgColor,
  position: 'fixed',
  boxShadow: theme.palette.navBarShadow,
  alignItems: 'flex-start',
  '@media (max-width: 767px)': {
    display: 'flex',
  },
}));

const AppBar = () => (
  <AppBarContent>
    <Logo />
  </AppBarContent>
);

export default AppBar;
