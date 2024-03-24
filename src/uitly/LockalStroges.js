const getStrogesApplaction = () => {
  const getApplaction = localStorage.getItem('job-applaction');
  if (getApplaction) {
    return JSON.parse(getApplaction);
  }
  return [];
};
const saveApplaction = id => {
  const storgeApplactions = getStrogesApplaction();
  const isexist = storgeApplactions.find(jobId => jobId === id);

  if (!isexist) {
    storgeApplactions.push(id);
    localStorage.setItem('job-applaction', JSON.stringify(storgeApplactions));
  }
};
export { getStrogesApplaction, saveApplaction };
