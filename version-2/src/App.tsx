import React from 'react';
import { createBrowserRouter, createRoutesFromElements, Outlet, Route, RouterProvider } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Outlet />}>
        <Route index element={<LandingPage />} />
        <Route path='/admin' element={<LoginPage />} />
        <Route path='/dashboard' element={<DashboardPage />} />
      </Route>
    )
  )

  return (
    <RouterProvider router={router} />
  );
}

export default App;
