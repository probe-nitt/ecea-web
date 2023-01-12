import { styled } from '@mui/system';
import TeamsList from '../components/Teams/TeamsList';
import { teams } from '../constants/dummy';

const Layout = styled('div')(({ theme }) => ({
  display: 'flex',
  padding: '2rem 0.5rem',
  flexDirection: 'column',
  h1: {
    color: theme.palette.titleColor,
    textAlign: 'center',
    paddingBottom: '0.75rem',
    fontSize: '2.5rem',
  },
  '@media (max-width: 767px)': {
    padding: '2rem 0rem',
  },
}));

const Teams = () => (
  <Layout>
    <h1>Our Team</h1>
    <TeamsList teams={teams} />
  </Layout>
);

export default Teams;
