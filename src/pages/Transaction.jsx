import { Box, CircularProgress } from '@mui/material';
import { useState, useEffect } from 'react';
import { DashboardContainer } from "..";
import { Link } from 'react-router-dom';
import axios from 'axios';
import { arrow_left, emptyUserDash } from '../assets';

const urlMap = {
  'All': '/all-transactions',
  'Action Required': '/ongoing-transactions',
  'Pending': '/pending-transactions',
  'Completed': '/completed-transactions',
};

const Transaction = () => {
  const [table, setTable] = useState('Action Required');
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const token = localStorage.getItem('token');

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true); // Set loading to true before making the request
        const endpoint = urlMap[table];
        const url = `https://safetra-be.onrender.com/api/v1/transactions${endpoint}`;
        
        console.log(`Fetching data from: ${url}`); // Log the URL
        
        const res = await axios.get(url, {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
          },
        });

        if (res && res.status === 200) {
          setLoading(false);
          console.log("Data fetched successfully");
          console.log(res.data)
          setData(res.data || []);
        } else {
          setLoading(false);
          console.log("Failed to fetch data");
          setData([]); // Set data to an empty array if fetch fails
        }
      } catch (err) {
        setLoading(false);
        console.error(`Error: ${err.response ? err.response.data.message : err.message}`);
        setData([]); // Set data to an empty array in case of error
      } finally {
        setLoading(false);
      }
    };

    if (token) {
      fetchData();
    } else {
      console.log("No token found");
    }
  }, [table, token]);

  return (
    <DashboardContainer childClassName='w-full' bgClr="white" title='My Transactions'>
      <div className="flex justify-between max-sm:flex-col">
        <Link to="/user/transaction" className="flex justify-center items-center">
          <div className="rounded-full inline-block shadow-md py-4 px-3">
            <img src={arrow_left} alt="Prev Page" />
          </div>
        </Link>

        <Link to="/user/new-transaction" className="h-[20%]">
          <button className="btn btn-form">New Transaction</button>
        </Link>
      </div>

      <div className="px-8 space-x-1">
        <button
          onClick={() => setTable('All')}
          className={`text-[#18181B] ${table === 'All' && 'border-b border-b-[#FB923C]'} py-[12px] font-int font-[500] text-[16px] text-[#18181B] px-8`}
        >
          All
        </button>
        <button
          onClick={() => setTable('Action Required')}
          className={`text-[#18181B] ${table === 'Action Required' && 'border-b border-b-[#FB923C]'} py-[12px] font-int font-[500] text-[16px] text-[#18181B] px-8`}
        >
          Action Required
        </button>
        <button
          onClick={() => setTable('Pending')}
          className={`text-[#18181B] ${table === 'Pending' && 'border-b border-b-[#FB923C]'} py-[12px] font-int font-[500] text-[16px] text-[#18181B] px-8`}
        >
          Pending
        </button>
        <button
          onClick={() => setTable('Completed')}
          className={`text-[#18181B] ${table === 'Completed' && 'border-b border-b-[#FB923C]'} py-[12px] font-int font-[500] text-[16px] text-[#18181B] px-8`}
        >
          Completed
        </button>
      </div>

      {loading ? (
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '300px',
          }}
        >
          <CircularProgress color="primary" size={70} />
        </Box>
      ) : (
        <div className="p-6">
          <div>
            <h3 className="font-int font-[600] text-[23px]">
              {table}
            </h3>
          </div>
          {data.length === 0 ? (
            <div className="flex justify-center flex-col items-center py-4">
              <img src={emptyUserDash} alt="No transaction" />
              <h2 className="py-8 font-inter text-[16px]">
                No transactions yet, Click below to start a new transaction.
              </h2>
              <Link to="/user/new-transaction" className="w-[16%] h-[20%]">
                <button className="btn btn-form">Let's get started</button>
              </Link>
            </div>
          ) : (
            <div>
              {data.map((transaction, index) => (
                <div key={index} className="transaction-item p-4 border rounded-md mb-4">
                  <h4 className="font-bold text-lg">{transaction.transaction_title}</h4>
                  <p><strong>Party:</strong> {transaction.party}</p>
                  <p><strong>Price:</strong> {transaction.price} {transaction.currency}</p>
                  <p><strong>Status:</strong> {transaction.status}</p>
                  <p><strong>Description:</strong> {transaction.description}</p>
                  <p><strong>Initiated At:</strong> {transaction.initiated_at || "N/A"}</p>
                  <p><strong>Completed At:</strong> {transaction.completed_at || "N/A"}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </DashboardContainer>
  );
};

export default Transaction;
