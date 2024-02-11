import { styled } from '@mui/system';
import { Blog } from './types';

const Card = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignSelf: 'center',
  border: '1px solid #6AE1DD',
  gap: '0.1rem',
  margin: '1rem 1.2rem',
  position: 'relative',
  height: '8rem',
  padding: '0.5rem',
  borderRadius: '0.4rem',
  alignItems: 'center',
  ':hover': {
    boxShadow: theme.palette.cardHoverShadow,
    transform: 'scale(1.02)',
  },
}));

const BlogContent = styled('div')(({ theme }) => ({
  flex: 2,
  display: 'flex',
  flexDirection: 'column',
  alignSelf: 'flex-start',
  textOverflow: 'ellipsis',
  padding: '1 0.5rem',
  width: '100%',
  h1: {
    textAlign: 'start',
    padding: 0,
    margin: '0.5rem 0 0.2rem 0',
    fontSize: '1.3rem',
  },
  h5: {
    textAlign: 'start',
    margin: '0.1rem',
    fontSize: '0.6rem',
    padding: '0.1rem',
    color: theme.palette.textColor,
  },
  div: {
    display: 'flex',
    gap: '0.65rem',
    marginTop: '1rem',
    alignItems: 'center',
    h5: {
      textAlign: 'start',
      margin: '0rem',
      fontSize: '0.85rem',
      color: theme.palette.textColor,
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'wrap',
    },
  },
  '@media (max-width: 767px)': {
    padding: '0rem',
    h1: {
      margin: '0.2rem 0',
      fontSize: '0.9rem',
    },
    h5: {
      height: '2.5rem',
      overflow: 'hidden',
      fontSize: '0.5rem',
    },
  },
}));

interface BlogProps {
  blog: Blog
}

const BlogCard = ({ blog }:BlogProps) => (
  <a href={blog.link} target="_blank" rel="noreferrer">
    <Card>
      <BlogContent>
        <h1>{blog.title}</h1>
        <div style={{ overflow: 'hidden' }}>
          <h5 style={{ textOverflow: 'ellipsis', overflow: 'hidden' }}>{blog.description.slice(0, 100).concat('...')}</h5>
        </div>
      </BlogContent>
    </Card>
  </a>
);
export default BlogCard;
