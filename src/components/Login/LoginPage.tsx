import { useState } from 'react';
import { styled } from '@mui/material';

const Wrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  padding: '5rem',
  borderRadius: '10px',
  background: theme.palette.sectionBgColor,
  p: {
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
  marginTop: '20px',
  color: theme.palette.textColor,
  fontSize: '1.1rem',
}));

const Button = styled('button')(({ theme }) => ({
  border: 'none',
  backgroundColor: theme.palette.titleColor,
  cursor: 'pointer',
  borderRadius: '0.5rem',
  marginTop: '20px',
  padding: '10px',

  fontWeight: 'bold',
  ':hover': { boxShadow: theme.palette.LoginTabHoverShadow },

}));

const Button1 = styled('button')(({ theme }) => ({
  border: 'none',
  backgroundColor: theme.palette.DLoginColor,
  cursor: 'pointer',
  borderRadius: '0.5rem',
  marginTop: '20px',
  padding: '10px',

  fontWeight: 'bold',
  ':hover': { boxShadow: theme.palette.DLoginHoverShadow },

}));

const Information = styled('input')(({ theme }) => ({
  margin: '0.5rem 0rem',
  padding: '0.5rem',
  background: 'none',
  color: theme.palette.subTitleColor,
  borderLeft: '0rem',
  borderRight: '0rem',
  borderTop: '0rem',
  outline: 'none',
}));
const LoginPage = (props:any) => {
  const { onFormSwitch } = props;
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const submitDetails = (e:any) => {
    e.preventDefault();
  };
  return (
    <Wrapper>
      <Topic> Login </Topic>
      <Form className="login-form" onSubmit={submitDetails}>
        <Information value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="roll@nitt.edu" id="email" name="email" />
        <Information value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="password" id="password" name="password" />
        <Button type="submit">Log In</Button>
      </Form>

      <Button1>
        <img src="https://aaveg.in/22/assets/images/dauth.png" alt="DAuth Logo" height={15} />
        Login with DAuth
      </Button1>

      <Click>Forgotten your password?</Click>
      <p>
        Dont have an account?
        <Click onClick={() => onFormSwitch('registerPage')}>Register</Click>
      </p>
    </Wrapper>
  );
};
export default LoginPage;
