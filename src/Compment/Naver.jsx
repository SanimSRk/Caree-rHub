import { NavLink } from 'react-router-dom';

const Naver = () => {
  const links = (
    <>
      <li>
        <NavLink to={'/'}>Home</NavLink>{' '}
      </li>
      <li>
        <NavLink to={'/Statistics'}>Statistics</NavLink>{' '}
      </li>
      <li>
        <NavLink to={'/Applied'}>Applied Jobs</NavLink>{' '}
      </li>
      <li>
        <NavLink to={'/Blogs'}>Blogs</NavLink>{' '}
      </li>
    </>
  );
  return (
    <div className="">
      <div className="navbar justify-around fixed h-16 flex z-10 shadow-lg  bg-base-100">
        <div className=" ">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 gap-4"
            >
              {links}
            </ul>
          </div>
          <a className="btn btn-ghost lg:text-3xl font-extrabold">CareerHub</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-4">{links}</ul>
        </div>
        <div className="">
          <a className=" btn text-white lg:text-xl font-bold bg-gradient-to-r from-[#7E90FE] to-[#9873FF]">
            Star Applying
          </a>
        </div>
      </div>
    </div>
  );
};

export default Naver;
