const StorgeJobsApplied = ({ jobss }) => {
  const {
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    job_type,
    location,
    salary,
  } = jobss;
  return (
    <div className="w-full shadow-md p-8 mb-8 lg:flex justify-between items-center  ">
      <div className="lg:flex gap-8 items-center">
        <div className=" bg-slate-100 w-full lg:w-[240px] flex justify-center items-center px-2 h-[240px]">
          <img src={logo} alt="" />
        </div>
        <div>
          <h2 className="text-2xl font-extrabold">{job_title}</h2>
          <p className="text-2xl mt-2">{company_name}</p>
          <div className=" flex gap-6 mt-4">
            <button className="btn bg-white  border-[#7E90FE] text-[#7E90FE]">
              {remote_or_onsite}
            </button>
            <button className="btn bg-white border-[#7E90FE] text-[#7E90FE]">
              {job_type}
            </button>
          </div>

          <div className=" lg:flex gap-8 mt-6">
            <div className="flex gap-1">
              <img src="/src/assets/icons/location2.png" alt="" />
              <h2>{location} </h2>
            </div>
            <div className="flex gap-1">
              <img src="/src/assets/icons/money.png" alt="" />
              <h2>{salary} </h2>
            </div>
          </div>
        </div>
      </div>
      <div className=" ">
        <div className="">
          <button className="btn text-end mt-6 text-white text-xl font-bold bg-gradient-to-r from-[#7E90FE] to-[#9873FF]">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default StorgeJobsApplied;
