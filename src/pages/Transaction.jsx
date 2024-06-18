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

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true); // Set loading to true before making the request
        const endpoint = urlMap[table];
        const res = await axios.get(`https://safetra-be.onrender.com/api/v1/transaction${endpoint}`, {
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (res && res.status === 200) {
          const dataArray = res?.data?.data;
          setData(dataArray);
          console.log(res.data)
          setLoading(false);
        }
      } catch (err) {
        console.log(err.message);
        setLoading(false);
      }
    };

    fetchData();
  }, [table]);

  return (
    <DashboardContainer childClassName='w-full' bgClr="white" title='My Transactions'>
      <div className="flex justify-between max-sm:flex-col">
        <Link to="/user/transaction" className="flex justify-center items-center">
          <div className="rounded-full inline-block shadow-md py-4 px-3">
            <img src={arrow_left} alt="Prev Page" />
          </div>
        </Link>

        <Link to="/user/new-transaction" className="h-[20%] ">
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
              <Link to="/user/newtransaction" className="w-[16%] h-[20%]">
                <button className="btn btn-form">Let's get started</button>
              </Link>
            </div>
          ) : (
            <div>
              {data.map((transaction, index) => (
                <div key={index} className="transaction-item">
                  {/* Render transaction details here */}
                  <p>{transaction.detail}</p> {/* Replace 'detail' with the actual transaction property */}
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
