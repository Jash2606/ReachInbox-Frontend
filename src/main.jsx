import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter , RouterProvider  } from 'react-router-dom'
import Login from './Login/login.jsx'
import { Provider } from 'react-redux'
import store from "./app/store";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  { 
    path: "/",
    element: <App />,
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
