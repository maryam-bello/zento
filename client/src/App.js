import React from "react";
import LandingPage from "./pages/landingPage/LandingPage";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import SignupForm from "./pages/authPages/SignupForm";
import LoginForm from "./pages/authPages/LoginForm";
import Dashboard from "./pages/dashboard/Dashboard";
import Today from "./pages/Today";
import Upcoming from "./pages/Upcoming";
import Completed from "./pages/Completed";
import { TaskProvider } from "./context/TaskContext";

const App = () => {
  return (
    <>
    <TaskProvider>
      <Routes>
        <Route index element={<LandingPage />} />
        <Route path="/signup-form" element={<SignupForm />} />
        <Route path="/login-form" element={<LoginForm />} />
        
          <Route path="/" element={<Layout />}>
            <Route path="dashboard" element={<Dashboard />} />

            <Route path="today" element={<Today />} />
            <Route path="upcoming" element={<Upcoming />} />
            <Route path="completed" element={<Completed />} />
          </Route>
          {/* <Route path="*" element={<NotFound />} /> */}
       
      </Routes>
       </TaskProvider>
    </>
  );
};

export default App;
