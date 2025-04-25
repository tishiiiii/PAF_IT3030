import React from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

// Layout component with Navbar
const DefaultLayout = () => (
  <>
    <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <Outlet />
    </div>
  </>
);

const Home = () => <div>cooking posts</div>;

const App = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50">
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/" element={<Home />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
