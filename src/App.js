import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router';
import './App.css';
import Root from './components/root';
import AboutPage from './pages/aboutPage';
import ContactPage from './pages/contactPage';

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Root />} >
    <Route index element={<></>} />
    <Route path='/about' element={<AboutPage />} />
    <Route path='/contact' element={<ContactPage />} />
  </Route>
));

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
