import { styled } from '@mui/system';
import BlogsTab from '../components/Blogs/BlogsTab';

const Wrapper = styled('div')(({ theme }) => ({
  padding: '1rem 1.5rem',
  margin: '0 3rem',
  h1: {
    color: theme.palette.titleColor,
    fontSize: '2.7rem',
    textAlign: 'center',
  },
  h4: {
    color: theme.palette.textColor,
    fontSize: '1.2rem',
    margin: '4rem 5rem',
  },
  '@media (max-width: 767px)': {
    padding: '0.2rem',
    margin: '0.7rem',
    h4: {
      fontSize: '1rem',
      margin: '3.5rem 1rem',
    },
  },
}));

const Blogs = () => (
  <Wrapper>
    <h1>Blogs</h1>
    <h4>
      Welcome to the official Blogs section of Probe, NIT Trichy.
      Explore a diverse array of topics through our insightful articles,
      covering technology, society, science, and more.
      Stay informed, inspired, and engaged as you navigate through
      our collection of thoughtfully curated posts.
      Whether you are seeking expert opinions, analyses, or practical tips,
      our blog is your go-to destination for enriching content and new perspectives
    </h4>
    <BlogsTab />
  </Wrapper>
);

export default Blogs;
