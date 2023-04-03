import { styled } from '@mui/system';
import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import PodcastCard from './PodcastsCard';
import { Podcast, TabPanelProps } from './types';
import { env } from '../../env';

const TabGrid = styled('div')({
  minHeight: '40vh',
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

const ErrorMessage = styled('h1')({
  alignSelf: 'center',
  justifySelf: 'center',
});

const PodcastsPanel = ({ value, index }: TabPanelProps) => {
  // Helper functions
  const fetchPodcasts = async () => {
    try {
      const res = await fetch(`${env.BACKEND_URL}/podcast/get/all`);
      const data = await res.json();
      return data;
    } catch (err) {
      console.error(err); // eslint-disable-line
      throw new Error('An error occurred...');
    }
  };

  const [podcasts, setPodcasts] = useState<Podcast[]>([]);

  // Query
  const { isError, isLoading, data } = useQuery({
    queryKey: ['podcasts'],
    queryFn: fetchPodcasts,
  });

  useEffect(() => {
    if (!isLoading && data) {
      setPodcasts(data.response);
    }
  }, [data, isLoading, isError]);

  return (
    <div
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
    >

      <TabGrid>
        {isError && (<ErrorMessage>An Error Occurred...</ErrorMessage>)}
        {/* Loading is handled in App.tsx already */}
        {value === index && data && (
        <>
          {podcasts.map((podcast:Podcast) => { // eslint-disable-line
            if (value === 'ALL' || value === podcast.type) {
              return (
                <PodcastCard podcast={podcast} />
              );
            }
          })}
        </>
        )}
      </TabGrid>
    </div>
  );
};

export default PodcastsPanel;
