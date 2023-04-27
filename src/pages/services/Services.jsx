import axios from 'axios';
import React, { useEffect, useState } from 'react';
import css from './Services.module.css';

const headers = {
  'x-auth-token': `${window.localStorage.getItem('token')}`,
};

const Services = () => {
  const [services, setServices] = useState([]);
  // console.log(headers);

  useEffect(() => {
    axios
      .get('https://www.cyber7work.com/api/v1/admin/services', { headers })
      .then((res) => {
        // console.log(res.data.data);
        setServices(res.data.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [services]);

  return (
    <div className={css.services}>
      <h2 className={css.heading}>Service List</h2>
      <table>
        <tr>
          <th>Service Provider</th>
          <th>Service Area</th>
          <th>Service Type</th>
        </tr>
        {services.map((val, key) => {
          return (
            <tr key={key}>
              <td>{val.provider_name}</td>
              <td>{val.area_serve}</td>
              <td>{val.service_type}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default Services;
