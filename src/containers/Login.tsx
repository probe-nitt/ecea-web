import { useState } from 'react';
import { styled } from '@mui/material';
import LoginPage from '../components/Login/LoginPage';
import RegisterPage from '../components/Login/RegisterPage';

const Wrapper = styled('div')({
  height: '100vh',
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  '@media (max-width: 767px)': {
    padding: 0,
  },
});

const Login = () => {
  const [currentForm, setCurrentForm] = useState('loginPage');

  const toggleForm = (formName: any) => {
    setCurrentForm(formName);
  };
  return (
    <Wrapper>
      {
        currentForm === 'loginPage' ? <LoginPage onFormSwitch={toggleForm} /> : <RegisterPage onFormSwitch={toggleForm} />
      }
    </Wrapper>
  );
};
export default Login;
