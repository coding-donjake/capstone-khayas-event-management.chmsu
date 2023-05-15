import React from 'react';
import { createBrowserRouter, createRoutesFromElements, Outlet, Route, RouterProvider } from 'react-router-dom';
import LandingPage from './pages/LandingPage';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Outlet />}>
        <Route index element={<LandingPage />} />
      </Route>
    )
  )

  return (
    <RouterProvider router={router} />
  );
}

export default App;
