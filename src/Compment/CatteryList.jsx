import { useEffect, useState } from 'react';
import Category from './Category';

const CatteryList = () => {
  const [cattery, setCattery] = useState([]);
  useEffect(() => {
    fetch('categories.json')
      .then(res => res.json())
      .then(data => setCattery(data));
  }, []);
  return (
    <div className="w-[85%] mx-auto mt-[130px]">
      <div className="lg:w-2/3 mx-auto text-center">
        <h2 className="text-5xl font-extrabold ">Job Category List</h2>
        <p className="mt-4">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="mt-6 lg:grid-cols-4 grid grid-cols-1 gap-5 ">
        {cattery.map(data => (
          <Category key={data.id} data={data}></Category>
        ))}
      </div>
    </div>
  );
};

export default CatteryList;
