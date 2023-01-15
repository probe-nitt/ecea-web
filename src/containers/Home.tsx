import { styled } from '@mui/material';
import About from '../components/Home/About';
import Contact from '../components/Home/Contact';
import Gallery from '../components/Home/Gallery';

const Wrapper = styled('div')({
  paddingBottom: '2rem',
  '@media (max-width: 767px)': {
    padding: 0,
  },
});

const Banner = styled('div')({
  width: '100%',
  marginTop: '-1.5rem',
  height: '330px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  '@media (max-width: 767px)': {
    marginLeft: 0,
    height: '28vh',
  },
});

const Background = styled('img')({
  height: '100%',
  width: '100%',
  objectPosition: '20% 20%',
  objectFit: 'cover',
  '@media (max-width: 767px)': {
    marginLeft: 0,
    objectPosition: '0% 400%',
    height: '33.5vh',
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
  const img = new URL(
    '../assets/images/ecead.png',
    import.meta.url,
  ).href;
  return (
    <Wrapper>
      <Banner>
        <Background alt="logo" src="https://img.freepik.com/free-vector/technology-circuit-lines-shiny-banner_1017-33024.jpg" />
        <Logo src={img} />
      </Banner>
      <About />
      <Gallery />
      <Contact />
    </Wrapper>
  );
};

export default Home;
