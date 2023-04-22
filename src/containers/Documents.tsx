import { styled } from '@mui/material';
import { env } from '../env'; // eslint-disable-line
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import DocumentList from '../components/Documents/DocumentList';
import { DocumentsResponse } from './types';

const Wrapper = styled('div')({
  paddingBottom: '2rem',
  marginTop: '-1.5rem',
  '@media (max-width: 767px)': {
    padding: 0,
  },
});

const Banner = styled('div')({
  width: '100%',
  height: 'max-content',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  '@media (max-width: 767px)': {
    marginLeft: 0,
    height: 'max-content',
  },
});

const Background = styled('img')({
  height: '20.5rem',
  width: '100%',
  objectFit: 'cover',
  '@media (max-width: 767px)': {
    marginLeft: 0,
    height: '17rem',
  },
});

const Title = styled('h1')(({ theme }) => ({
  color: theme.palette.titleColor,
  padding: '1rem',
  margin: '2rem 0',
}));

const Documents = () => {
  const { subjectId } = useParams();

  // Helper functions
  const fetchDocuments = async () => {
    try {
      const res = await fetch(`${env.BACKEND_URL}/studymaterial/get/${subjectId}`);
      const data = await res.json();
      return data;
    } catch (err) {
      console.error(err); // eslint-disable-line
      throw new Error('An error occurred...');
    }
  };

  const [documents, setDocuments] = useState<DocumentsResponse>();

  const { isError, isLoading, data } = useQuery({
    queryKey: ['documents'],
    queryFn: fetchDocuments,
  });

  useEffect(() => {
    if (!isLoading && data) {
      setDocuments(data.response);
    }
  }, [data, isLoading, isError]);

  return (
    <Wrapper>
      <Banner>
        <Background alt="bg" src={documents?.image_url} />
      </Banner>
      <Title>{documents?.name}</Title>
      <DocumentList links={documents?.materials} />
    </Wrapper>
  );
};

export default Documents;
