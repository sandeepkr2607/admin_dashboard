import React, { useState } from 'react';
import css from './Login.module.css';

import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import { FaCity } from 'react-icons/fa';

import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { styled } from '@mui/material/styles';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
// import { response } from 'express';

const CssTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: '#0288d1',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#0288d1',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#0288d1',
    },
    '&:hover fieldset': {
      borderColor: '#0288d1',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#0288d1',
    },
  },
});

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const [error, setError] = useState('');
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
        if ((err.response.status = 401)) {
          toast('Invalid Credentials!', {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'light',
          });
        } else console.log(err.message);
      });
  };

  // console.log(error);
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
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <CssTextField
              label="Password"
              type="password"
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
            {/* {error && <h4> {error}</h4>} */}
            <button type="submit" className={css.btn} onClick={LoginFunc}>
              Submit
            </button>
          </form>
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* Same as */}
      <ToastContainer />
    </>
  );
};

export default Login;
