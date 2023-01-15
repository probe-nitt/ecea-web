import { Icon } from '@mui/material';
import { styled, useTheme } from '@mui/system';
import { MdPlayArrow } from 'react-icons/md';
import { Podcast } from './types';

const Card = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  gap: '1rem',
  width: '27rem',
  margin: '1rem 1.2rem',
  padding: '0.5rem',
  borderRadius: '0.4rem',
  alignItems: 'center',
  boxShadow: theme.palette.PodcastCardShadow,
  ':hover': {
    transform: 'scale(1.02)',
  },
  '@media (max-width: 767px)': {
    width: '95%',
    margin: '1rem auto',
  },
}));

const PodcastImage = styled('img')({
  flex: 1,
  borderRadius: '0.4rem',
  height: '9rem',
  objectFit: 'fill',
  aspectRatio: '0.95',
  '@media (max-width: 767px)': {
    height: '8rem',
  },
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
    margin: '0.5rem 0',
    fontSize: '1.4rem',
  },
  h5: {
    textAlign: 'start',
    margin: '0rem',
    fontSize: '0.8rem',
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
    padding: '0rem',
    h1: {
      fontSize: '1rem',
    },
    h5: {
      fontSize: '0.7rem',
    },
  },
}));

const PodcastIcon = styled(Icon)(({ theme }) => ({
  padding: '0.4rem',
  borderRadius: '50%',
  cursor: 'pointer',
  boxShadow: theme.palette.navBarShadow,
  background: theme.palette.titleColor,
}));

interface PodcastProps {
  podcast: Podcast
}

const PodcastCard = ({ podcast }:PodcastProps) => {
  const theme = useTheme();
  return (
    <Card>
      <PodcastImage src={podcast.image} />
      <PodcastContent>
        <h1>{podcast.presenterName}</h1>
        <h5>{podcast.presenterDescription}</h5>
        <div>
          <PodcastIcon style={{
            color: theme.palette.navBarBgColor,
          }}
          >
            <MdPlayArrow />
          </PodcastIcon>
          <h5>Listen Now</h5>

        </div>
      </PodcastContent>
    </Card>
  );
};

export default PodcastCard;
