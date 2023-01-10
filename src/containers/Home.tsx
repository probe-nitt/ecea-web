import { styled } from '@mui/material';
import About from '../components/Home/About';
import Contact from '../components/Home/Contact';
import Gallery from '../components/Home/Gallery';

const Wrapper = styled('div')({
  paddingBottom: '2rem',
});

const Banner = styled('div')({
  width: '100%',
  height: '200px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  '@media (max-width: 767px)': {
    marginLeft: 0,
    height: '180px',
  },
});

const Background = styled('img')({
  height: '220px',
  width: '100%',
  objectPosition: '70% 75%',
  position: 'absolute',
  objectFit: 'fill',
  '@media (max-width: 767px)': {
    marginLeft: 0,
    height: '200px',
  },
});

const Logo = styled('img')({
  height: '130px',
  position: 'absolute',
  display: 'block',
  '@media (max-width: 767px)': {
    marginLeft: 0,
    height: '120px',
  },

});

const Home = () => {
  const img = new URL('../assets/images/ecea.png', import.meta.url).href;
  return (
    <Wrapper>
      <Banner>
        <Background alt="logo" src="https://www.dennismacaspac.com/assets/images/giphy-2.gif" />
        <Logo src={img} />
      </Banner>
      <About />
      <Gallery />
      <Contact />
    </Wrapper>
  );
};

export default Home;
