const Category = ({ data }) => {
  const { logo, category_name, availability } = data;
  return (
    <div className="shadow-md p-10">
      <img src={logo} alt="" />
      <h2 className="text-2xl font-bold mt-4">{category_name}</h2>
      <p className="mt-3">{availability}</p>
    </div>
  );
};

export default Category;
