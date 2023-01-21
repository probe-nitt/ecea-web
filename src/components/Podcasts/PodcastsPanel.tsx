import { styled } from '@mui/system';
import { podcasts } from '../../constants/dummy';
import PodcastCard from './PodcastsCard';
import { Podcast, TabPanelProps } from './types';

const TabGrid = styled('div')({
  margin: '0rem 0.5rem',
  borderRadius: '0.4rem',
  padding: '2.5rem 0rem',
  display: 'grid',
  justifyContent: 'center',
  gridTemplateColumns: 'repeat(auto-fit, minmax(21.5rem, max-content))',
  '@media (max-width: 767px)': {
    display: 'flex',
    flexDirection: 'column',
    padding: '1rem',
    justifyContent: 'center',
  },
});

const PodcastsPanel = ({ value, index }: TabPanelProps) => (
  <div
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
  </div>
);

export default PodcastsPanel;
