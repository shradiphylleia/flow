import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import About from './About.jsx';
import NotFound from './NotFound.jsx';
import Symptoms from './Symptoms.jsx';
import Learn from '/Learn.jsx';
import Assist from './Assist.jsx'
import Recommendation from './Recommendation.jsx';

import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
  
  const router = createBrowserRouter([
        {
          path: "/",
          element: <App />
        },
        {
          path:"about",
          element:<About/>
        },
        {
          path: "symptoms",
          element: <Symptoms/>
        },
        {
          path:"recommendation",
          element:<Recommendation/>
        },
        {
          path:"learn",
          element:<Learn/>
        },
        {
          path:"assist",
          element:<Assist/>
        },
        {
          path:"*",
          element: <NotFound/>
        }
      ]);
      createRoot(document.getElementById("root")).render(
        <StrictMode>
          <RouterProvider router={router} />
        </StrictMode>
      );
