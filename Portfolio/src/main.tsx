import React from 'react'
import ReactDOM from 'react-dom/client'

import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";

import "./assets/tailwind.css"

import HomeOld from './routes/HomeOld';
import Home from './routes/Home';
import About from './routes/About';
import Learning from './routes/Learning';
import Projects from './routes/Projects';
import Contact from './routes/Contact';
import Container from './components/Container';

import robots from '/robots.txt'

const router = createBrowserRouter([
  {
    element: <Container />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: 'about',
        element: <About />
      },
      {
        path: 'learning',
        element: <Learning />
      },
      {
        path: 'projects',
        element: <Projects />
      },
      {
        path: 'contact',
        element: <Contact />
      },
      {
        path: 'robots.txt',
        element: robots
      },
      {
        path: '*',
        element: <Navigate to="/" replace />
      }
    ]
  },
])

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/service-worker.js')
      .then(registration => {
        console.log('Service Worker registered with scope:', registration.scope);
      })
      .catch(error => {
        console.error('Service Worker registration failed:', error);
      });
  });
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <div>
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>,
)
