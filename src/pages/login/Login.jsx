import React, { useState } from 'react';
import css from './Login.module.css';

import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import { FaCity } from 'react-icons/fa';

import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { styled } from '@mui/material/styles';

const CssTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: '#8be2fd',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#8be2fd',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#8be2fd',
    },
    '&:hover fieldset': {
      borderColor: '#8be2fd',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#8be2fd',
    },
  },
});

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const LoginFunc = async (e) => {
    e.preventDefault();
    console.log(email, password, rememberMe);
    await axios
      .post('https://www.cyber7work.com/api/v1/admin/login', {
        email: email,
        password: password,
        rememberMe: rememberMe,
      })
      .then((response) => {
        console.log(response);
        localStorage.setItem('token', response.data.token);
        navigate('/dashboard');
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <>
      <div className={css.login}>
        <div className={css.top}>
          <FaCity className={css.logo} />
          <h2 className={css.title}>My City</h2>
        </div>
        <div className={css.bottom}>
          <form
            className={css.form}
            component="form"
            noValidate
            autoComplete="off"
          >
            <h3 className={css.form_title}>Login</h3>
            <CssTextField
              label="Email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <CssTextField
              label="Password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <FormControlLabel
              control={<Checkbox className={css.checkbox} />}
              label="Remember Me"
              id="rememberMe"
              value={rememberMe}
              onChange={() => setRememberMe(!rememberMe)}
            />
            <button type="submit" className={css.btn} onClick={LoginFunc}>
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
