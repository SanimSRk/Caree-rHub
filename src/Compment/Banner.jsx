const Banner = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content w-[85%] mx-auto flex-col lg:flex-row-reverse">
          <img src="/user.png" className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-3xl lg:text-7xl leading-normal font-extrabold">
              One Step Closer To Your{' '}
              <span className="text-[#7E90FE]"> Dream Job</span>{' '}
            </h1>
            <p className="py-6">
              Explore thousands of job opportunities with all the information
              you need. Its your future. Come find it. Manage all your job
              application from start to finish.
            </p>
            <button className="btn mt-6 text-white text-xl font-bold bg-gradient-to-r from-[#7E90FE] to-[#9873FF]">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
