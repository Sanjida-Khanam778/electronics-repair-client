import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Title = () => {
  const location = useLocation();

  useEffect(() => {
    const pageTitles = {
      "/": "Home | ElectroCare",
      "/allServices": "All Services | ElectroCare",
      "/add-service": "Add Service | ElectroCare",
      "/service-to-do": "Service To Do | ElectroCare",
      "/booked-service": "My Booking | ElectroCare",
      "/login": "Login | ElectroCare",
      "/register": "Register | ElectroCare",
    };

    const getDynamicTitle = (pathname) => {
      if (pathname.startsWith("/manage-service/")) {
        const email = pathname.split("/")[2]; 
        return `Manage Service for ${email} | ElectroCare`;
      }
      if (pathname.startsWith("/updateService/")) {
        const id = pathname.split("/")[2]; 
        return `Update Service for ${id} | ElectroCare`;
      }
      if (pathname.startsWith("/serviceDetails/")) {
        const id = pathname.split("/")[2]; 
        return `Service Details for ${id} | ElectroCare`;
      }
      return pageTitles[pathname] || "Details | ElectroCare";
    };

    const currentTitle = getDynamicTitle(location.pathname);
    document.title = currentTitle;
  }, [location.pathname]);

  return null;
};

export default Title;
