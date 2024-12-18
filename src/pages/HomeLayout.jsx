import { Outlet } from 'react-router-dom';
import { Navbar, SubNav } from '../components';

const HomeLayout = () => {
  return (
    <>
      <Navbar />
      <SubNav />
      <Outlet />
    </>
  );
};

export default HomeLayout;
