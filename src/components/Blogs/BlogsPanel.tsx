import { styled } from '@mui/system';
import { blogs } from '../../constants/dummy';
import BlogCard from './BlogsCard';
import { Blog, TabBlogProps } from './types';

const TabGrid = styled('div')({
  margin: '0rem 0.5rem',
  borderRadius: '0.4rem',
  padding: '2.5rem 0rem',
  display: 'grid',
  justifyContent: 'center',
  gridTemplateColumns: 'repeat(auto-fit, minmax(21.5rem, max-content))',
  '@media (max-width: 767px)': {
    display: 'flex',
    flexDirection: 'column',
    padding: '1rem',
    justifyContent: 'center',
  },
});

const BlogsPanel = ({ value, index }: TabBlogProps) => (
  <div
    hidden={value !== index}
    id={`simple-tabpanel-${index}`}
    aria-labelledby={`simple-tab-${index}`}
  >
    {value === index && (
      <TabGrid>
        {blogs.map((blog:Blog) => (
          <BlogCard blog={blog} />
        ))}
      </TabGrid>
    )}
  </div>
);

export default BlogsPanel;
