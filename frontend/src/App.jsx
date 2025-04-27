import React from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import ProfilePage from "./pages/ProfilePage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import RegisterPage from "./pages/RegisterPage.jsx";
import AdminDashboardPage from "./pages/AdminDashboardPage.jsx";
import Navbar from "./components/common/Navbar.jsx";
import AdminLoginPage from "./pages/AdminLoginPage.jsx";
import OAuth2RedirectHandler from "./pages/OAuth2RedirectHandler.jsx";
import FeedbacksPage from "./pages/FeedbacksPage.jsx";
import UserProfilePage from "./pages/UserProfilePage.jsx";

// Layout component with Navbar
const DefaultLayout = () => (
  <>
      <Navbar />
    <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <Outlet />
    </div>
  </>
);

const Home = () => <div>cooking posts</div>;
const Profile = () => <ProfilePage />;
const Login = () => <LoginPage />;
const SignUp = () => <RegisterPage />;
const AdminDashboard = () => <AdminDashboardPage />;


const App = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50">
        <Routes>
            <Route path="/admin-dashboard" element={<AdminDashboard />} />
            <Route path="/admin-login" element={<AdminLoginPage />} />

            <Route element={<DefaultLayout />}>
                <Route path="/" element={<Home />} />
                <Route
                    path="/login/oauth2/code/google"
                    element={<OAuth2RedirectHandler />}
                />
                <Route path="/profile" element={<Profile />} />
                <Route path="/feedbacks" element={<FeedbacksPage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/user-profile/:id" element={<UserProfilePage />} />
            </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
