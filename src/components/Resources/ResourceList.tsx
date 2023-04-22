import { styled } from '@mui/system';
import { BallTriangle } from 'react-loader-spinner';
import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import ResourceCard from './ResourceCard';
import { Resources, Subject } from './types';
import { env } from '../../env'; // eslint-disable-line

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
  width: '65%',
  // margin: '2rem',
  borderRadius: '0.4rem',
  padding: '1.5rem 0.5rem',
  background: theme.palette.sectionBackgroundColor,
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'nowrap',
  overflowX: 'scroll',
  overflowY: 'scroll',
  marginTop: '1rem',
  '&::-webkit-scrollbar': {
    display: 'none',
  },
  '@media (max-width: 767px)': {
    margin: '1rem 0rem',
    padding: '1rem 0rem',
  },
}));

const ErrorMessage = styled('h2')(({ theme }) => ({
  color: theme.palette.titleColor,
  alignSelf: 'center',
  justifySelf: 'center',
  '@media (max-width: 1024px)': {
    fontSize: '0.6rem',
  },
}));

const ResourcesList = () => {
  // Helper functions
  const fetchResources = async () => {
    try {
      const res = await fetch(`${env.BACKEND_URL}/studymaterial/getall`);
      const data = await res.json();
      return data;
    } catch (err) {
      console.error(err); // eslint-disable-line
      throw new Error('An error occurred...');
    }
  };

  const [resources, setResources] = useState<Resources[]>([]);

  const { isError, isLoading, data } = useQuery({
    queryKey: ['studymaterials'],
    queryFn: fetchResources,
  });

  useEffect(() => {
    if (!isLoading && data) {
      setResources(data.response);
    }
  }, [data, isLoading, isError]);

  return (
    <>
      {isError && (<ErrorMessage>An Error Occurred...</ErrorMessage>)}
      {isLoading && (
        <BallTriangle
          height={70}
          width={70}
          radius={5}
          color="#007FEA"
          ariaLabel="ball-triangle-loading"
          visible
        />
      )}
      {resources.map((resource:Resources) => (
        <Content key={resource.category}>
          <Title>{resource.category}</Title>
          <Row>
            {resource.subjects.map((subject:Subject) => (
              <ResourceCard
                key={subject.name}
                subject={subject}
              />
            ))}
          </Row>
        </Content>
      ))}
    </>
  );
};

export default ResourcesList;
