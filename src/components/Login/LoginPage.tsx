import { useState } from 'react';
import { styled } from '@mui/material';

const Wrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  padding: '5rem',
  borderRadius: '10px',
  background: theme.palette.sectionBgColor,
  p: {
    marginTop: '1rem',
    marginBottom: '0rem',
    color: theme.palette.textColor,
    fontSize: '1rem',
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
  textDecorationColor: theme.palette.textColor,
  cursor: 'pointer',
  fontFamily: 'Josefin Sans Light, sans-serif',
  border: 'none',
  margin: '0.2rem',
  color: theme.palette.textColor,
  fontSize: '1.1rem',
}));

const Tap = styled('button')(({ theme }) => ({
  border: 'none',
  backgroundColor: theme.palette.titleColor,
  cursor: 'pointer',
  borderRadius: '0.5rem',
  padding: '10px',
}));

const Information = styled('input')(({ theme }) => ({
  margin: '0.5rem 0rem',
  padding: '0.5rem',
  background: 'none',
  color: theme.palette.subTitleColor,
  borderRadius: '0.5rem',
}));
const LoginPage = (props:any) => {
  const { onFormSwitch } = props;
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const submitDetails = (e:any) => {
    e.preventDefault();
  };
  return (
    <Wrapper>
      <Topic> Login </Topic>
      <Form className="login-form" onSubmit={submitDetails}>
        <Information value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="roll@nitt.edu" id="email" name="email" />
        <Information value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="password" id="password" name="password" />
        <Tap type="submit">Log In</Tap>
      </Form>
      <p>
        Or
      </p>
      <Click>Login with DAuth</Click>
      <Click>Forgotten your password?</Click>
      <p>
        Dont have an account?
        <Click onClick={() => onFormSwitch('registerPage')}>Register</Click>
      </p>
    </Wrapper>
  );
};
export default LoginPage;
