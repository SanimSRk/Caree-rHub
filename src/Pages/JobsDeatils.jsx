import { useLoaderData, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import { saveApplaction } from '../uitly/LockalStroges';

const JobsDeatils = () => {
  const jobs = useLoaderData();

  const { id } = useParams();
  const intId = parseInt(id);
  const job = jobs.find(job => job.id === intId);
  const {
    job_description,
    job_responsibility,
    educational_requirements,
    experiences,
    salary,
    job_title,
    contact_information,
  } = job;

  const handileClicked = intId => {
    saveApplaction(intId);
    toast.success('Successfully applied');
  };

  return (
    <div>
      <div className="mt-10 text-center">
        <h2 className="text-5xl font-extrabold">Jobs Details</h2>
      </div>
      <section className="my-[100px]">
        <div className=" lg:flex gap-5 w-[85%] mx-auto">
          <div className="lg:w-2/3">
            <h2>
              <span className=" font-bold ">Job Description:</span>
              {job_description}{' '}
            </h2>
            <h2 className="my-6 ">
              <span className=" font-bold ">Job Responsibility</span>:
              {job_responsibility}{' '}
            </h2>
            <h2 className="font-bold mb-3">Educational Requirements:</h2>
            <p>{educational_requirements}</p>
            <h2 className="font-bold my-3">Experiences:</h2>
            <p>{experiences}</p>
          </div>
          <div className="lg:w-1/3">
            <div className=" bg-slate-50 p-7">
              <div className="border-b-2 pb-4">
                <h2 className="font-bold">Jobs Details</h2>
              </div>
              <div className="mt-2">
                <div className="flex gap-4">
                  <img src="/src/assets/icons/money.png" alt="" />
                  <h2>
                    <span className="font-bold">Salary :</span> {salary} (Per
                    Month)
                  </h2>
                </div>
                <div className="flex mt-4 gap-4">
                  <img src="/src/assets/icons/accounts.png" alt="" />
                  <h2>
                    <span className="font-bold">Job Title :</span>
                    {job_title}
                  </h2>
                </div>
                <div className="border-b-2 pb-4">
                  <h2 className="font-bold mt-8">Contact Information</h2>
                </div>
                <div className="flex mt-4 gap-2">
                  <img src="/src/assets/icons/phone.png" alt="" />
                  <h2>
                    <span className="font-bold">Phone :</span>
                    {contact_information.phone}
                  </h2>
                </div>
                <div className="flex mt-4 gap-2">
                  <img src="/src/assets/icons/email.png" alt="" />
                  <h2>
                    <span className="font-bold">Email:</span>
                    {contact_information.email}
                  </h2>
                </div>
                <div className="flex mt-4 gap-2">
                  <img src="/src/assets/icons/Location.png" alt="" />
                  <h2>
                    <span className="font-bold">Address :</span>
                    {contact_information.address}
                  </h2>
                </div>
              </div>
            </div>
            <div className="mt-6">
              <button
                onClick={() => handileClicked(intId)}
                className="btn w-full text-white font-bold bg-gradient-to-r from-[#7E90FE] to-[#9873FF] "
              >
                Apply Now
              </button>
            </div>
            ;
          </div>
        </div>
      </section>
      <ToastContainer />
    </div>
  );
};

export default JobsDeatils;
