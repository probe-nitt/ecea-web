/* eslint-disable react/destructuring-assignment */
import { styled } from '@mui/system';
import textColor from '../../themes/colors';
import ResourceCard from './ResourceCard';
import { Resources, Subject } from './types';

const Content = styled('div')({
  margin: '4rem 1rem',
  '@media (max-width: 767px)': {
    margin: '3rem 0rem',
  },
});

const Title = styled('h3')({
  marginLeft: '1rem',
  fontWeight: 'bolder',
  fontSize: '1.35em',
  color: textColor,
  '@media (max-width: 767px)': {
    fontSize: '1.2em',
  },
});

const Row = styled('div')({
  alignItems: 'stretch',
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'nowrap',
  overflowX: 'auto',
  overflowY: 'hidden',
  marginTop: '1rem',
  padding: '1rem 0.5rem',
  '&::-webkit-scrollbar': {
    display: 'none',
  },
  '@media (max-width: 767px)': {
    marginTop: '0.75rem',
    padding: '0.1rem 0rem',
  },
});

interface ResourceProps {
  resources: Resources[]
}
const ResourcesList = (props:ResourceProps) => (
  <>
    {props.resources.map((resource:Resources) => (
      <Content>
        <Title>{resource.subjectCategory}</Title>
        <Row>
          {resource.subjects.map((subject:Subject) => <ResourceCard subject={subject} />)}
        </Row>
      </Content>
    ))}
  </>
);

export default ResourcesList;
