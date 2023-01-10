import { styled } from '@mui/system';
import { navBarShadow } from '../../themes/colors';
import Logo from './Logo';

const AppBarContent = styled('div')({
  display: 'none',
  width: '100%',
  background: '#00001d',
  height: 'fit-content',
  overflowY: 'auto',
  flexDirection: 'column',
  zIndex: 2,
  position: 'fixed',
  boxShadow: navBarShadow,
  alignItems: 'flex-start',
  '@media (max-width: 767px)': {
    display: 'flex',
  },
});

const AppBar = () => (
  <AppBarContent>
    <Logo />
  </AppBarContent>
);

export default AppBar;
