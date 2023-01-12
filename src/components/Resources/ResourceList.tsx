import { styled } from '@mui/system';
import ResourceCard from './ResourceCard';
import { Resources, Subject } from './types';

const Content = styled('div')(({ theme }) => ({
  margin: '2rem 0.5rem',
  borderRadius: '0.4rem',
  padding: '1.5rem 0.5rem',
  background: theme.palette.sectionBgColor,
  '@media (max-width: 767px)': {
    margin: '3rem 0rem',
  },
}));

const Title = styled('h6')(({ theme }) => ({
  margin: '1.5rem 1rem 1.5rem 2rem',
  fontWeight: 900,
  fontSize: '1.35rem',
  color: theme.palette.subTitleColor,
  '@media (max-width: 767px)': {
    fontSize: '1.3rem',
    textAlign: 'center',
    margin: '1rem 0rem',
  },
}));

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
    marginTop: '2rem',
    padding: '0.2rem 0rem',
  },
});

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
