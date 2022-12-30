import { styled } from '@mui/system';

const LogoImage = styled('img')({
  height: '3.6rem',
  objectFit: 'cover',
  padding: '1.2rem',
});

const Logo = () => {
  const img = new URL('../../assets/ecea.png', import.meta.url).href;
  return <LogoImage src={img} />;
};

export default Logo;
