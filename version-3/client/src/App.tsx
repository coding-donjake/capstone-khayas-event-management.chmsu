import React from 'react';
import { createBrowserRouter, createRoutesFromElements, Outlet, Route, RouterProvider } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import UsersPage from './pages/UsersPage';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Outlet />}>
        <Route index element={<LandingPage />} />
        <Route path='/admin' element={<LoginPage />} />
        <Route path='/admin/dashboard' element={<DashboardPage />} />
        <Route path='/admin/users' element={<UsersPage />} />
      </Route>
    )
  )

  return (
    <RouterProvider router={router} />
  );
}

export default App;
