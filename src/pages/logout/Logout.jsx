import React from 'react';
import css from './Logout.module.css';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  const logoutFn = () => {
    localStorage.clear();
    sessionStorage.clear();
    navigate('/login', { replace: true });
  };
  return (
    <div className={css.logout}>
      <h3 className={css.heading}>Are You Sure About It?</h3>
      <div className={css.btns}>
        <button className={css.btn} onClick={logoutFn}>
          Yes
        </button>
        <button className={css.btn} onClick={() => navigate('/dashboard')}>
          No
        </button>
      </div>
    </div>
  );
};

export default Logout;
