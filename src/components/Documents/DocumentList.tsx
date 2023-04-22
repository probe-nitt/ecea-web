import { styled } from '@mui/system';
import { Link } from 'react-router-dom';
import { Document, DocumentListProps } from './types';

const Content = styled('div')({
  padding: '1rem 1rem',
});

const List = styled('ul')({
  padding: '0.5rem 0',
});

const ListElement = styled('h2')(({ theme }) => ({
  color: theme.palette.textColor,
  paddingBottom: '1rem',
  borderBottom: '1px solid',
  borderColor: theme.palette.textColor,
  fontSize: '1.1rem',
  listStyleType: 'none',
  marginBottom: '1rem',
}));

const DocumentList = ({ links }:DocumentListProps) => (
  <Content>
    <List>
      {links?.map((link:Document) => (
        <Link to={`/${link.document_url}`}>
          <ListElement>{link.name}</ListElement>
        </Link>
      ))}
    </List>
  </Content>
);

export default DocumentList;
