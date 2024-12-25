import axios from "axios";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { useNavigate } from "react-router-dom";

export const axiosSecure = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
});

const useAxiosSecure = () => {
  const { handleSignOut } = useContext(AuthContext);
  const navigate = useNavigate()
  useEffect(()=>{
    axiosSecure.interceptors.response.use(
        (res) => {
          return res;
        },
        async (error) => {
          console.log("error caught from axios secure", error.response);
          if (error.response.status === 401 || error.response.status === 403) {
            handleSignOut()
            navigate('/login')
          }
        }
      );
  },[handleSignOut])
  return axiosSecure
};

export default useAxiosSecure;
