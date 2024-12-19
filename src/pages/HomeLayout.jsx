import { Outlet } from 'react-router-dom';
import { Navbar, SubNav } from '../components';

const HomeLayout = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <SubNav />
        <Outlet />
      </main>
    </>
  );
};

export default HomeLayout;
