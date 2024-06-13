const ApiHandler = () => {

  const fetchData = async (api, use = 'user') => {
    const response = await fetch(`https://safetra-crz3.onrender.com/api/${use}/${api}`);
    if (!response.ok) throw new Error('Network response was not ok');
    const data = await response.json();

    return data;
  };

  return { fetchData };
};

export default ApiHandler;