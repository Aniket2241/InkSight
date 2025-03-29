import { ToastContainer } from 'react-toastify';
import { RouterProvider, createBrowserRouter } from 'react-router-dom'; // Fixed import
import HomePage from './components/homepage';
import LandingPage from './components/LandingPage';
import './App.css';
import AddPost from './components/AddPost';

// Moved router creation outside of component to prevent recreation on every render
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />, // Render HomePage directly at root
  },
  {
    path: "/LandingPage",
    element: <LandingPage />,
  },
  {
    path:"/addpost",
    element:<AddPost/>
  }
]);

function App() {
  return (
    <>
      <ToastContainer position="top-center" />
      <RouterProvider router={router} /> {/* Fixed prop name */}
    </>
  );
}

export default App;