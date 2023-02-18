import { styled } from '@mui/system';
import { Subject } from './types';

const Card = styled('div')(({ theme }) => ({
  display: 'inline-block',
  fontWeight: 900,
  padding: '0.8rem',
  borderRadius: '0.5rem',
  background: theme.palette.cardColor,
  boxShadow: theme.palette.cardShadow,
  margin: '0.75rem 0.75rem',
  cursor: 'pointer',
  div: {
    display: 'flex',
    flexDirection: 'column',
    width: '15rem',
    height: '16rem',
  },
  ':hover': {
    boxShadow: theme.palette.cardHoverShadow,
    transform: 'scale(1.02)',
  },
  '@media (max-width: 767px)': {
    margin: '1rem 0.75rem',
  },
}));

const Image = styled('img')({
  width: '100%',
  flex: 1,
  height: '10rem',
  aspectRatio: '1/1',
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
    <div>
      <Image src={subject.subjectImage} />
      <Title>{subject.subjectName}</Title>
    </div>
  </Card>
);

export default ResourceCard;
