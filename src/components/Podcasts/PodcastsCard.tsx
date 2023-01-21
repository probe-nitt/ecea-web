import { Icon } from '@mui/material';
import { styled, useTheme } from '@mui/system';
import { MdPlayArrow } from 'react-icons/md';
import { Podcast } from './types';

const Card = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignSelf: 'center',
  gap: '0.1rem',
  margin: '1rem 1.2rem',
  position: 'relative',
  height: '8rem',
  padding: '0.25rem',
  borderRadius: '0.4rem',
  alignItems: 'center',
  boxShadow: theme.palette.cardShadow,
  ':hover': {
    boxShadow: theme.palette.cardHoverShadow,
    transform: 'scale(1.02)',
  },
  '@media (max-width: 1000px)': {
    width: '100%',
    height: '8.5rem',
    gap: '0.5rem',
    margin: '1rem 0',
  },
}));

const PodcastImage = styled('img')({
  flex: 1,
  borderRadius: '0.2rem',
  height: '100%',
  aspectRatio: '1/1',
  objectFit: 'fill',
});

const PodcastContent = styled('div')(({ theme }) => ({
  flex: 2,
  display: 'flex',
  flexDirection: 'column',
  alignSelf: 'flex-start',
  padding: '0 1rem',
  width: '100%',
  h1: {
    textAlign: 'start',
    padding: 0,
    margin: '0.5rem 0 0.2rem 0',
    fontSize: '1rem',
  },
  h5: {
    textAlign: 'start',
    margin: '0rem',
    fontSize: '0.6rem',
    color: theme.palette.textColor,
  },
  div: {
    display: 'flex',
    gap: '0.65rem',
    marginTop: '1rem',
    alignItems: 'center',
    h5: {
      textAlign: 'start',
      margin: '0rem',
      fontSize: '0.85rem',
      color: theme.palette.textColor,
    },
  },
  '@media (max-width: 767px)': {
    padding: '0.5rem',
    h1: {
      margin: '0.2rem 0',
      fontSize: '0.9rem',
    },
    h5: {
      fontSize: '0.7rem',
    },
    div: {
      margin: '0.45rem 0.65rem 0',
      flexDirection: 'row-reverse',
      h5: {

        fontSize: '0.75rem',
      },
    },
  },
}));

const PodcastIcon = styled(Icon)(({ theme }) => ({
  padding: '0.4rem',
  height: '1.5rem',
  width: '1.5rem',
  position: 'absolute',
  bottom: 10,
  right: 10,
  borderRadius: '50%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  cursor: 'pointer',
  boxShadow: theme.palette.tabShadow,
  background: theme.palette.titleColor,
}));

interface PodcastProps {
  podcast: Podcast
}

const PodcastCard = ({ podcast }:PodcastProps) => {
  const theme = useTheme();
  return (
    <Card>
      <PodcastImage alt={podcast.image} src={podcast.image} />
      <PodcastContent>
        <h1>{podcast.presenterName}</h1>
        <h5>{podcast.presenterDescription}</h5>
        <div>
          <PodcastIcon style={{
            color: theme.palette.backgroundColor,
          }}
          >
            <MdPlayArrow />
          </PodcastIcon>

        </div>
      </PodcastContent>
    </Card>
  );
};

export default PodcastCard;
