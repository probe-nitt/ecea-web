import { styled } from '@mui/system';
import { Blog } from './types';

const Card = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignSelf: 'center',
  gap: '0.1rem',
  margin: '1rem 1.2rem',
  position: 'relative',
  height: '8rem',
  padding: '0.25rem',
  borderRadius: '0.4rem',
  alignItems: 'center',
  boxShadow: theme.palette.cardShadow,
  ':hover': {
    boxShadow: theme.palette.cardHoverShadow,
    transform: 'scale(1.02)',
  },
  '@media (max-width: 1000px)': {
    width: '100%',
    height: '8.5rem',
    gap: '0.5rem',
    margin: '1rem 0',
  },
}));

const BlogContent = styled('div')(({ theme }) => ({
  flex: 2,
  display: 'flex',
  flexDirection: 'column',
  alignSelf: 'flex-start',
  padding: '1 1rem',
  width: '100%',
  h1: {
    textAlign: 'start',
    padding: 0,
    margin: '0.5rem 0 0.2rem 0',
    fontSize: '1rem',
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
    padding: '0.5rem',
    h1: {
      margin: '0.2rem 0',
      fontSize: '0.9rem',
    },
    h5: {
      overflow: 'clip',
      fontSize: '0.7rem',
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
