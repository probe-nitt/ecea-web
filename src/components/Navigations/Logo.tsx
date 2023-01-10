import { styled } from '@mui/system';

const LogoImage = styled('img')({
  height: '3.5rem',
  objectFit: 'cover',
  padding: '1.2rem',
  '@media (max-width: 767px)': {
    height: '3rem',
    padding: '1rem',
  },
});

const Logo = () => {
  const img = new URL('../../assets/images/ecea.png', import.meta.url).href;
  return <LogoImage src={img} />;
};

export default Logo;
