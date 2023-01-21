import { styled } from '@mui/system';
import { Subject } from './types';

const Card = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  width: 'fit-content',
  fontWeight: 900,
  padding: '0.8rem',
  borderRadius: '0.5rem',
  flexBasis: '14rem',
  flexGrow: 0,
  flexShrink: 0,
  background: theme.palette.cardColor,
  boxShadow: theme.palette.cardShadow,
  margin: '0.75rem 1rem',
  cursor: 'pointer',
  ':hover': {
    boxShadow: theme.palette.cardHoverShadow,
    transform: 'scale(1.02)',
  },
  '@media (max-width: 767px)': {
    margin: '1rem',
  },
}));

const Image = styled('img')({
  aspectRatio: '1/2',
  height: '12.5rem',
  borderRadius: '0.5rem',

});

const Title = styled('h5')(({ theme }) => ({
  textAlign: 'center',
  margin: '0.75rem',
  fontSize: '0.82rem',
  fontWeight: 'bolder',
  color: theme.palette.textColor,
  '@media (max-width: 767px)': {
    margin: '0.5rem',
    fontSize: '0.7rem',
  },
}));

interface SubjectProps {
  subject: Subject
}
const ResourceCard = ({ subject }:SubjectProps) => (
  <Card>
    <Image src={subject.subjectImage} />
    <Title>{subject.subjectName}</Title>
  </Card>
);

export default ResourceCard;
