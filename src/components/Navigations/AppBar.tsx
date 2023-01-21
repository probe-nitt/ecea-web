import { Box } from '@mui/material';
import { styled } from '@mui/system';
import DarkModeToggle from './DarkModeToggle';
import Logo from './Logo';

const AppBarContent = styled('div')(({ theme }) => ({
  display: 'none',
  width: '100%',
  background: '#00001d',
  height: 'fit-content',
  overflowY: 'auto',
  flexDirection: 'row',
  zIndex: 2,
  backgroundColor: theme.palette.barBackgroundColor,
  position: 'fixed',
  boxShadow: theme.palette.tabShadow,
  alignItems: 'flex-start',
  '@media (max-width: 767px)': {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
}));

const AppBar = () => (
  <AppBarContent>
    <Logo />
    <Box flex={1} />
    <Box marginRight={1}>
      <DarkModeToggle />
    </Box>
  </AppBarContent>
);

export default AppBar;
