import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { ToastContainer } from "react-toastify";
import { RouterProvider } from "react-router-dom";
import router from "./routes/Router";
import AuthProvider from "./Provider/AuthProvider";
import SignalProvider from "./Provider/SignalProvider";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <SignalProvider>
      <AuthProvider>
        <ToastContainer position="top-center"></ToastContainer>
        <RouterProvider router={router} />
      </AuthProvider>
    </SignalProvider>
  </StrictMode>
);
