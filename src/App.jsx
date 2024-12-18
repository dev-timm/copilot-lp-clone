import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Extensions, HomeLayout, Landing, Plans } from './pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
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
