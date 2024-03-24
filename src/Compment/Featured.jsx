import { useEffect, useState } from 'react';
import FeaturedJobs from './FeaturedJobs';

const Featured = () => {
  const [jobs, setJobs] = useState([]);
  const [dataLength, setDataLength] = useState(4);
  useEffect(() => {
    fetch('jobs.json')
      .then(res => res.json())
      .then(data => setJobs(data));
  }, []);
  return (
    <div>
      <section className="w-[85%] mx-auto my-[130px]">
        <div className="lg:w-2/3 mx-auto text-center ">
          <h2 className="text-5xl font-extrabold mb-4">Featured Jobs</h2>
          <p>
            Explore thousands of job opportunities with all the information you
            need. Its your future
          </p>
        </div>
        <div className="mt-8 grid lg:grid-cols-2 grid-cols-1 gap-6">
          {jobs.slice(0, dataLength).map(job => (
            <FeaturedJobs key={job.id} job={job}></FeaturedJobs>
          ))}
        </div>
        <div className={dataLength === jobs.length && 'hidden'}>
          <div className="text-center">
            <button
              onClick={() => setDataLength(jobs.length)}
              className="btn  mt-10  text-white text-xl font-bold bg-gradient-to-r from-[#7E90FE] to-[#9873FF]"
            >
              See All Jobs
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Featured;
