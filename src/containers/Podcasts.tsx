import { styled } from '@mui/system';
import PodcastsTab from '../components/Podcasts/PodcastsTab';

const Wrapper = styled('div')(({ theme }) => ({
  padding: '1rem 1.5rem',
  margin: '0 3rem',
  h1: {
    color: theme.palette.titleColor,
    fontSize: '2.7rem',
    textAlign: 'center',
  },
  h4: {
    color: theme.palette.textColor,
    fontSize: '1.2rem',
    margin: '4rem 5rem',
  },
  '@media (max-width: 767px)': {
    padding: '0.2rem',
    margin: '0.7rem',
    h4: {
      fontSize: '1rem',
      margin: '3.5rem 1rem',
    },
  },
}));

const Podcasts = () => (
  <Wrapper>
    <h1>Podcasts</h1>
    <h4>
      All it needs a small TRIGGER!
      Welcome to the official Podcast of Probe,
      NIT Trichy, the annual national technical
      symposium of Department of Electronics and
      Communication Engineering, NIT Tiruchirappalli.
      This podcast hosts interviews of respectable figures in the fields of
      electronics, communication and STEM in general.
      Stay tuned to find new perspectives about latest developments in technology and society.
    </h4>
    <PodcastsTab />
  </Wrapper>
);

export default Podcasts;
