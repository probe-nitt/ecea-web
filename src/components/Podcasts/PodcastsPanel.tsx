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
  gridTemplateColumns: 'repeat(auto-fit, minmax(25rem, max-content))',
  '@media (max-width: 767px)': {
    padding: '1rem',
    gridTemplateColumns: 'repeat(auto-fit, minmax(21rem, max-content))',
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
