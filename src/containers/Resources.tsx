import { styled } from '@mui/system';
import ResourcesList from '../components/Resources/ResourceList';
// import SearchBar from '../components/Resources/SearchBar';
import { resources } from '../constants/dummy';

const Wrapper = styled('div')({
  paddingBottom: '2rem',
  h1: {
    fontSize: '2.2rem',
    textAlign: 'center',
    marginBottom: '4rem',
  },
});

const Resources = () => (
  <Wrapper>
    <h1>Core Resources</h1>
    {/* <SearchBar /> */}
    <ResourcesList resources={resources} />
  </Wrapper>
);

export default Resources;
