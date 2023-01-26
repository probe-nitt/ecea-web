import { useState } from 'react';
import { styled } from '@mui/material';

const Wrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  padding: '5rem',
  borderRadius: '10px',
  background: theme.palette.sectionBgColor,
  p: {
    margin: '0.3rem',
    color: theme.palette.textColor,
    fontSize: '1.1rem',
  },
}));

const Topic = styled('h1')(({ theme }) => ({
  padding: '0rem 0.25rem 0.2rem 0',
  fontSize: '2.5rem',
  color: theme.palette.titleColor,
  '@media (max-width: 767px)': {
    fontSize: '1.5rem',
  },
}));

const Form = styled('form')({
  display: 'flex',
  flexDirection: 'column',
});

const Click = styled('button')(({ theme }) => ({
  background: 'none',
  textDecoration: 'underline',
  fontFamily: 'Josefin Sans Light, sans-serif',
  textDecorationColor: theme.palette.textColor,
  cursor: 'pointer',
  border: 'none',
  color: theme.palette.textColor,
}));

const Button = styled('button')(({ theme }) => ({
  border: 'none',
  backgroundColor: theme.palette.titleColor,
  cursor: 'pointer',
  borderRadius: '0.5rem',
  padding: '10px',
  margin: '20px',

  fontWeight: 'bold',
  ':hover': { boxShadow: theme.palette.ResourceCardHoverShadow },
}));

const Information = styled('input')(({ theme }) => ({
  margin: '0.5rem 0rem',
  padding: '0.5rem',
  background: 'none',
  borderLeft: '0rem',
  borderRight: '0rem',
  borderTop: '0rem',
  outline: 'none',
  color: theme.palette.subTitleColor,
}));

const RegisterPage = (props:any) => {
  const { onFormSwitch } = props;
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [name, setName] = useState<string>('');

  const submitDetails = (e:any) => {
    e.preventDefault();
  };
  return (
    <Wrapper>
      <Topic>Register</Topic>
      <Form onSubmit={submitDetails}>
        <Information value={name} onChange={(e) => setName(e.target.value)} type="name" placeholder="FullName" id="name" name="name" />
        <Information value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="roll@nitt.edu" id="email" name="email" />
        <Information value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="password" id="password" name="password" />
        <Button type="submit"> Register</Button>
      </Form>
      <p>
        Already have an account?
        <Click onClick={() => onFormSwitch('loginPage')}>
          <p>Login</p>
        </Click>
      </p>
    </Wrapper>
  );
};
export default RegisterPage;
