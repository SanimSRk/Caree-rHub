import { Outlet } from 'react-router-dom';

import Naver from '../Compment/Naver';
import Footer from '../Compment/Footer';

const ManiLayout = () => {
  return (
    <div>
      <div className="h-16">
        <Naver></Naver>
      </div>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default ManiLayout;
