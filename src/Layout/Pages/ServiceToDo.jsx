import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import axios from 'axios';
import ServiceStatus from '../../Components/ServiceStatus';

const ServiceToDo = () => {
    const [services, setServices] = useState([]);
  const { user } = useContext(AuthContext);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    fetchServiceData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user?.email]);
  const fetchServiceData = async () => {
    const { data } = await axios.get(
      `${import.meta.env.VITE_API_URL}/myServicesToDo/${user?.email}`
    );
    setServices(data);
    console.log(data);
  };
    return (
        <div>
            {
                services.map(service=><ServiceStatus key={service._id} service={service}></ServiceStatus>)
            }
        </div>
    );
};

export default ServiceToDo;