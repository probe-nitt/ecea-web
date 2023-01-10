/* eslint-disable react/destructuring-assignment */
import { styled } from '@mui/system';
import textColor, {
  ResourceCardColor, ResourceCardHoverShadow, ResourceCardShadow,
} from '../../themes/colors';
import { Subject } from './types';

const Card = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  maxWidth: '14rem',
  fontWeight: 900,
  padding: '0.8rem',
  borderRadius: '0.5rem',
  flexBasis: '14rem',
  flexGrow: 0,
  flexShrink: 0,
  backgroundColor: ResourceCardColor,
  boxShadow: ResourceCardShadow,
  margin: '0.75rem 1rem',
  cursor: 'pointer',
  ':hover': {
    boxShadow: ResourceCardHoverShadow,
    transform: 'scale(1.02)',
  },
  '@media (max-width: 767px)': {
    maxWidth: '12.5rem',
    height: '12.5rem',
    margin: '0.75rem 0.75rem',
  },
});

const Image = styled('img')({
  width: '100%',
  height: '14rem',
  borderRadius: '0.5rem',

});

const Title = styled('h4')({
  textAlign: 'center',
  margin: '0.75rem',
  fontSize: '0.82rem',
  fontWeight: 'bolder',
  color: textColor,
  '@media (max-width: 767px)': {
    margin: '0.5rem',
    fontSize: '0.7rem',
  },
});

interface SubjectProps {
  subject: Subject
}
const ResourceCard = (props:SubjectProps) => (
  <Card>
    <Image src={props.subject.subjectImage} />
    <Title>{props.subject.subjectName}</Title>
  </Card>
);

export default ResourceCard;
