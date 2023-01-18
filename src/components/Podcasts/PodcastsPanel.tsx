import { styled } from '@mui/system';
import { podcasts } from '../../constants/dummy';
import PodcastCard from './PodcastsCard';
import { Podcast, TabPanelProps } from './types';

const Content = styled('div')({
  margin: '1rem',
  '@media (max-width: 767px)': {
    margin: '0rem',
  },
});

const TabGrid = styled('div')({
  margin: '1rem 0.5rem',
  borderRadius: '0.4rem',
  padding: '3rem 0.5rem',
  display: 'grid',
  justifyContent: 'center',
  gridTemplateColumns: 'repeat(auto-fit, minmax(28rem, max-content))',
  '@media (max-width: 767px)': {
    display: 'flex',
    flexDirection: 'column',
    padding: '1rem',
    justifyContent: 'center',
  },
});

const PodcastsPanel = ({ value, index }: TabPanelProps) => (
  <Content
    hidden={value !== index}
    id={`simple-tabpanel-${index}`}
    aria-labelledby={`simple-tab-${index}`}
  >
    {value === index && (
      <TabGrid>
        {podcasts.map((podcast:Podcast) => (
          <PodcastCard podcast={podcast} />
        ))}
      </TabGrid>
    )}
  </Content>
);

export default PodcastsPanel;
