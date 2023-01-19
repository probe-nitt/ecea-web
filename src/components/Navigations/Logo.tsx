import { useTheme } from '@mui/material';
import { styled } from '@mui/system';

const LogoImage = styled('img')({
  height: '3.4rem',
  objectFit: 'cover',
  padding: '1.2rem 1rem',
  '@media (max-width: 767px)': {
    height: '3rem',
    padding: '1rem',
  },
});

const Logo = () => {
  const theme = useTheme();
  const img = new URL(
    `../../assets/images/ecea-${theme.palette.mode}.png`,
    import.meta.url,
  ).href;
  return <LogoImage alt="ecea-logo" src={img} />;
};

export default Logo;
