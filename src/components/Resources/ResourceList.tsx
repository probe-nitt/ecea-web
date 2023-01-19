import { styled } from '@mui/system';
import ResourceCard from './ResourceCard';
import { Resources, Subject } from './types';

const Content = styled('div')({
  '@media (max-width: 767px)': {
    margin: '3rem 0rem',
  },
});

const Title = styled('h6')(({ theme }) => ({
  margin: '5rem 1rem 1.5rem 2rem',
  fontWeight: 900,
  fontSize: '1.4rem',
  color: theme.palette.subTitleColor,
  '@media (max-width: 767px)': {
    fontSize: '1.3rem',
    margin: '0.2rem 1rem',
  },
}));

const Row = styled('div')(({ theme }) => ({
  margin: '2rem 0.5rem',
  borderRadius: '0.4rem',
  padding: '1.5rem 0.5rem',
  background: theme.palette.sectionBackgroundColor,
  alignItems: 'stretch',
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'nowrap',
  overflowX: 'auto',
  overflowY: 'hidden',
  marginTop: '1rem',
  '&::-webkit-scrollbar': {
    display: 'none',
  },
  '@media (max-width: 767px)': {
    margin: '1rem 0rem',
    padding: '1rem 0rem',
  },
}));

interface ResourceProps {
  resources: Resources[]
}
const ResourcesList = ({ resources }:ResourceProps) => (
  <>
    {resources.map((resource:Resources) => (
      <Content key={resource.subjectCategory}>
        <Title>{resource.subjectCategory}</Title>
        <Row>
          {resource.subjects.map((subject:Subject) => (
            <ResourceCard
              key={subject.subjectName}
              subject={subject}
            />
          ))}
        </Row>
      </Content>
    ))}
  </>
);

export default ResourcesList;
