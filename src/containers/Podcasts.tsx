import { styled } from '@mui/system';
import PodcastsTab from '../components/Podcasts/PodcastsTab';

const Wrapper = styled('div')(({ theme }) => ({
  padding: '2rem 1.5rem',
  h1: {
    color: theme.palette.titleColor,
    fontSize: '2.5rem',
    textAlign: 'center',
    marginBottom: '4rem',
  },
  '@media (max-width: 767px)': {
    padding: '0.2rem',
  },
}));

const Podcasts = () => (
  <Wrapper>
    <h1>Podcasts</h1>
    <PodcastsTab />
  </Wrapper>
);

export default Podcasts;
