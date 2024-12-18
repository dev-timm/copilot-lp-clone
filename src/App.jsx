import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Error, Extensions, HomeLayout, Landing, Plans } from './pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: 'extensions',
        element: <Extensions />,
      },
      {
        path: 'plans',
        element: <Plans />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
