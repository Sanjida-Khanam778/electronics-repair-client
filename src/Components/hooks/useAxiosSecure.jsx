import axios from "axios";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

export const axiosSecure = axios.create({
  baseURL: 'https://electronics-repair-9c5bf.web.app',
  withCredentials: true,
});

const useAxiosSecure = () => {
  const { handleSignOut } = useContext(AuthContext);
  // const navigate = useNavigate()
  useEffect(()=>{
    axiosSecure.interceptors.response.use(
        (res) => {
          return res;
        },
        async (error) => {
          console.log("error caught from axios secure", error.response);
          if (error.response.status === 401 || error.response.status === 403) {
            handleSignOut()
            // navigate('/login')
          }
        }
      );
  },[handleSignOut])
  return axiosSecure
};

export default useAxiosSecure;
