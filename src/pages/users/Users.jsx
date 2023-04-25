import axios from 'axios';
import React, { useEffect, useState } from 'react';
import css from './Users.module.css';

const headers = {
  'x-auth-token': `${window.localStorage.getItem('token')}`,
};

const Users = () => {
  const [users, setUsers] = useState([]);
  // console.log(headers);

  useEffect(() => {
    axios
      .get('https://www.cyber7work.com/api/v1/admin/users', { headers })
      .then((res) => {
        setUsers(res.data.data);
        // console.log(res.data.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [users]);

  return (
    <div className={css.users}>
      <h2 className={css.heading}>Users List</h2>
      <table>
        <tr>
          <th>Name</th>
          <th>Address</th>
          <th>Gender</th>
        </tr>
        {users.map((val, key) => {
          return (
            <tr key={key}>
              <td className={css.name}>
                {val.fullName ? val.fullName : 'Anonymous'}
              </td>
              <td>{val.address?.Name}</td>
              <td>{val.gender}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default Users;
