import { Grid } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState } from 'react';
import { styled } from '@mui/system';
import { Team } from './types';
import TeamCard from './TeamsCard';

interface TeamProps {
  teams: Team[]
}

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

const TeamsList = ({ teams }:TeamProps) => {
  const [year, setYear] = useState('2023');
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
