import { ToastContainer } from 'react-toastify';
import { RouterProvider, createBrowserRouter } from 'react-router-dom'; 
import HomePage from './components/homepage';
import LandingPage from './components/LandingPage';
import './App.css';
import AddPost from './components/AddPost';
import Dashboard from './components/Dashboard';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />, 
  },
  {
    path: "/LandingPage",
    element: <LandingPage />,
  },
  {
    path:"/addpost",
    element:<AddPost/>
  },
  {
    path:"/dashboard",
    element:<Dashboard/>
  }
]);

function App() {
  return (
    <>
      <ToastContainer position="top-center" />
      <RouterProvider router={router} />
    </>
  );
}

export default App;