import { styled } from '@mui/material';
import About from '../components/Home/About';
import Contact from '../components/Home/Contact';
import Gallery from '../components/Home/Gallery';

const Wrapper = styled('div')({
  paddingBottom: '2rem',
  marginTop: '-1.5rem',
  '@media (max-width: 767px)': {
    padding: 0,
  },
});

const Banner = styled('div')({
  width: '100%',
  height: 'max-content',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  '@media (max-width: 767px)': {
    marginLeft: 0,
    height: 'max-content',
  },
});

const Background = styled('img')({
  height: '20.5rem',
  width: '100%',
  objectPosition: '20% 20%',
  objectFit: 'cover',
  '@media (max-width: 767px)': {
    marginLeft: 0,
    height: '17rem',
  },
});

const Logo = styled('img')({
  height: '9rem',
  position: 'absolute',
  '@media (max-width: 767px)': {
    marginLeft: 0,
    height: '6rem',
    width: '100%',
    objectFit: 'scale-down',
  },

});

const Home = () => {
  const img = new URL(
    '../assets/images/ecead.png',
    import.meta.url,
  ).href;
  return (
    <Wrapper>
      <Banner>
        <Background alt="bg" src="https://img.freepik.com/free-vector/technology-circuit-lines-shiny-banner_1017-33024.jpg" />
        <Logo alt="logo" src={img} />
      </Banner>
      <About />
      <Gallery />
      <Contact />
    </Wrapper>
  );
};

export default Home;
