import { Link } from 'react-router-dom';

const FeaturedJobs = ({ job }) => {
  const {
    id,
    logo,
    job_title,
    location,
    salary,
    remote_or_onsite,
    job_type,
    company_name,
  } = job;
  return (
    <div className="shadow-md p-10">
      <img src={logo} alt="" />
      <h2 className="mt-8 text-2xl font-extrabold">{job_title}</h2>
      <p className="mt-2">{company_name}</p>
      <div className=" flex gap-6 my-4 ">
        <button className="btn bg-white  border-[#7E90FE] text-[#7E90FE]">
          {remote_or_onsite}
        </button>
        <button className="btn bg-white border-[#7E90FE] text-[#7E90FE]">
          {job_type}
        </button>
      </div>
      <div className=" lg:flex gap-8 ">
        <div className="flex gap-1">
          <img src="/src/assets/icons/location2.png" alt="" />
          <h2>{location} </h2>
        </div>
        <div className="flex gap-1">
          <img src="/src/assets/icons/money.png" alt="" />
          <h2>{salary} </h2>
        </div>
      </div>
      <div>
        <Link to={`/job/${id}`}>
          <button className="btn mt-6 text-white text-xl font-bold bg-gradient-to-r from-[#7E90FE] to-[#9873FF]">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default FeaturedJobs;
