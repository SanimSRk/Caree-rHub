import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getStrogesApplaction } from '../uitly/LockalStroges';
import StorgeJobsApplied from '../Compment/StorgeJobsApplied';

const Applied = () => {
  const Jobs = useLoaderData();
  const [appliedJobs, setAppliedjobs] = useState([]);
  const [displyJobs, setDisplyJobs] = useState([]);

  const handileJobsdFilter = filters => {
    if (filters === 'All') {
      setDisplyJobs(appliedJobs);
    } else if (filters === 'Remote') {
      const remoteJobs = appliedJobs.filter(
        job => job.remote_or_onsite === 'Remote'
      );
      setDisplyJobs(remoteJobs);
    } else if (filters === 'Onsite') {
      const onsiteJobs = appliedJobs.filter(
        jobs => jobs.remote_or_onsite === 'Onsite'
      );
      setDisplyJobs(onsiteJobs);
    }
  };
  useEffect(() => {
    const strogeJobs = getStrogesApplaction();
    if (Jobs.length > 0) {
      const jobsApplieds = Jobs.filter(job => strogeJobs.includes(job.id));

      setAppliedjobs(jobsApplieds);
      setDisplyJobs(jobsApplieds);
    }
  }, []);

  return (
    <div>
      <div className="text-center mt-7">
        <h2 className="text-3xl lg:text-6xl font-extrabold">Applied jobs</h2>
      </div>
      <div className="my-[130px] w-[80%] mx-auto ">
        <div className=" text-end mb-[60px]">
          <details className="dropdown">
            <summary className="m-1 btn text-xl font-bold">
              Filter By{' '}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
            </summary>

            <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
              <li onClick={() => handileJobsdFilter('All')}>
                {' '}
                <a>All</a>
              </li>
              <li onClick={() => handileJobsdFilter('Remote')}>
                {' '}
                <a>Remote</a>
              </li>
              <li onClick={() => handileJobsdFilter('Onsite')}>
                {' '}
                <a>Onsite</a>
              </li>
            </ul>
          </details>
        </div>
        {displyJobs.map(jobss => (
          <StorgeJobsApplied key={jobss.id} jobss={jobss}></StorgeJobsApplied>
        ))}
      </div>
    </div>
  );
};

export default Applied;
