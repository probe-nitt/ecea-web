import { Grid } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useQuery } from '@tanstack/react-query';
import { BallTriangle } from 'react-loader-spinner';
import { useEffect, useState } from 'react';
import { styled } from '@mui/system';
import { Team } from './types';
import TeamCard from './TeamsCard';
import { env } from '../../env'; // eslint-disable-line

const years = [
  '2023',
  '2022',
  '2021',
];

const Layout = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

});

const DropDown = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'stretch',
  h4: {
    color: theme.palette.textColor,
    fontSize: '1.2rem',
    margin: '0.2rem',
    paddingRight: '0.3rem',
  },
  '@media (max-width: 767px)': {
    h4: {
      fontSize: '0.9rem',
    },
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

const TeamsList = () => {
  // Helper functions
  const fetchTeams = async () => {
    try {
      const res = await fetch(`${env.BACKEND_URL}/team/getall`);
      const data = await res.json();
      return data;
    } catch (err) {
      console.error(err); // eslint-disable-line
      throw new Error('An error occurred...');
    }
  };

  const [year, setYear] = useState('2023');

  const [teams, setTeams] = useState<Team[]>([]);

  // Query
  const { isError, isLoading, data } = useQuery({
    queryKey: ['podcasts'],
    queryFn: fetchTeams,
  });

  useEffect(() => {
    if (!isLoading && data) {
      setTeams(data.response);
    }
  }, [data, isLoading, isError]);

  return (
    <Layout>
      <DropDown>
        <h4>ECE Association Core Members Of</h4>
        <FormControl
          variant="standard"
          sx={{
            mb: '2rem',
            minWidth: '120',
          }}
        >
          <Select
            style={{ fontFamily: 'Josefin Sans Light' }}
            value={year}
            onChange={(event) => setYear(event.target.value)}
          >
            {years.map((y:string) => (
              <MenuItem
                key={y}
                value={y}
              >
                {y}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </DropDown>
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
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={1}
        sx={{
          maxWidth: '90%',
        }}
      >
        {teams.map((member:Team) => (

          <TeamCard key={member.rollnumber} member={member} />

        ))}
      </Grid>
    </Layout>
  );
};

export default TeamsList;
