import { createBrowserRouter } from "react-router-dom";
import Home from "../layout/Pages/Home";
import Login from "../Layout/Pages/Login";
import Register from "../Layout/Pages/Register";
import MainLayout from "../Layout/MainLayout";
import ErrorPage from "../Layout/Pages/ErrorPage";
import AllServices from "../Layout/Pages/AllServices";
import AddService from "../Layout/Pages/AddService";
import ManageService from "../Layout/Pages/ManageService";
import BookedService from "../Layout/Pages/BookedService";
import ServiceToDo from "../Layout/Pages/ServiceToDo";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: '/allServices',
          element: <AllServices></AllServices>
        },
        {
          path: '/add-service',
          element: <AddService></AddService>
        },
        {
          path: 'manage-service',
          element: <ManageService></ManageService>
        },
        {
          path: 'booked-service',
          element: <BookedService></BookedService>
        },
        {
          path: 'service-to-do',
          element: <ServiceToDo></ServiceToDo>
        },
        {
          path: 'login',
          element: <Login></Login>
        },
        {
          path: 'register',
          element: <Register></Register>
        },
        
    ]
  },
  {
    path: '*',
    element: <ErrorPage></ErrorPage>
  }
]);

export default router;
