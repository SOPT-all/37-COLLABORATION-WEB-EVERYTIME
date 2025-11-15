import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="w-full h-screen flex flex-col justify-center">
      <Outlet />
    </div>
  );
};

export default Layout;