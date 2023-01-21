import { styled } from '@mui/system';
import SocialIcons from './SocialIcons';
import { Team } from './types';

const Card = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  height: 'fit-content',
  padding: '1.5rem 2.25rem 2.5rem 2.25rem',
  borderRadius: '0.4rem',
  alignItems: 'center',
  boxShadow: theme.palette.cardShadow,
  margin: '0.75rem 1rem',
  img: {
    borderRadius: '50%',
    boxShadow: theme.palette.cardShadow,
    width: '11rem',
    heigth: '11rem',
    margin: '2rem 0rem',
  },
  h3: {
    color: theme.palette.textColor,
    textAlign: 'center',
    fontFamily: 'Josefin Sans Bold',
    margin: '0.1rem 0 0.15rem 0',
    fontWeight: 'bold',
  },
  h5: {
    margin: '0.1rem 0 1.5rem 0',
    fontWeight: 400,
    color: theme.palette.titleColor,
  },
  span: {
    color: theme.palette.titleColor,
  },
  '@media (min-width: 767px)': {
    ':hover': {
      background: theme.palette.activeBackgroundColor,
      boxShadow: theme.palette.cardHoverShadow,
      h5: {
        color: theme.palette.sectionBackgroundColor,
      },
      h3: {
        color: theme.palette.sectionBackgroundColor,
      },
      img: {
        borderColor: '#0000',
        boxShadow: theme.palette.cardShadow,
      },
      span: {
        color: theme.palette.sectionBackgroundColor,
      },
    },
  },
  '@media (max-width: 767px)': {
    width: '100%',
    margin: '1rem 0',
    padding: '2rem 2.25rem 2.5rem 2.25rem',
  },
}));

interface TeamProps {
  member: Team
}

const TeamCard = ({ member }:TeamProps) => (
  <Card>
    <img alt={member.name} src={member.image_url} />
    <h3>{member.name}</h3>
    <h5>
      {`${member.team} ${member.role}`}
    </h5>
    <span>
      <SocialIcons />
    </span>
  </Card>
);

export default TeamCard;
