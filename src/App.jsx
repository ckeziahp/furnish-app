import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import LandingPage from './pages/landing'
import About from './pages/about'
import Collection from'./pages/collection'
import ContactUs from'./pages/contactUs'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LandingPage />
    },
    {
      path:"About",
      element: <About/>
    },
    {
      path:"collection",
      element: <Collection/>
    },
    {
      path: "contact-us",
      element: <ContactUs/>
    }
  ]);

  return <RouterProvider router={router} />;
    }



export default App


