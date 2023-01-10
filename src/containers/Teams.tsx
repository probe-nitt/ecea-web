import styled from '@emotion/styled';
import TeamsList from '../components/Teams/TeamsList';
import { teams } from '../constants/dummy';

const Layout = styled('div')({
  display: 'flex',
  paddingBottom: '6rem',
  flexDirection: 'column',
  h1: {
    textAlign: 'center',
    paddingBottom: '1.5rem',
    fontSize: '2.5rem',
  },
});

const Teams = () => (
  <Layout>
    <h1>Our Team</h1>
    <TeamsList teams={teams} />
  </Layout>
);

export default Teams;
