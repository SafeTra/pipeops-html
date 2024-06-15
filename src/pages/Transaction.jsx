import { Box, CircularProgress, TextField } from "@mui/material";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { arrow_left } from "../assets";
import axios from "axios";
import { emptyUserDash } from "../assets";

const url = 'https://safetra-crz3.onrender.com/api/user/transaction';

const Transaction = () => {
  const [table, setTable] = useState("Action Required");
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    const post = async () => {
      try {
        setLoading(true); // Set loading to true before making the request
        const postData = {
          process: "tp_transaction_history",
          action_check: `${table}_history`,
        };
        const res = await axios.post(url, JSON.stringify(postData), {
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (res && res.status === 200) {
          const dataArray = res?.data?.data;
          setData(dataArray);
          setLoading(false);
        }
      } catch (err) {
        console.log(err.message);
        setLoading(false);
      }
    };

    post();
  }, [table]);

  return (
    <div className="space-y-4">
                    <div className="flex justify-between px-6">
                    <Link to='/user/transaction' className="flex justify-center items-center">
      <div className="rounded-full inline-block shadow-md bg-white py-4 px-3">
        <img src={arrow_left} alt="Prev Page" />
      </div>
      </Link>

                    <Link to='/user/newtransaction' className="w-[16%] h-[20%] " >
                    <button className="btn btn-form" >New Transaction</button></Link>
                    </div>

      <div className="px-8 space-x-1">
        <button
          onClick={() => setTable("All")}
          className={` text-[#18181B] ${table === "All" && "border-b border-b-[#FB923C] text-[#18181B]"
          } py-[12px] font-int font-[500] text-[16px] text-[#18181B] px-8 `}
        >
          All
        </button>
        <button
          onClick={() => setTable("Action Required")}
          className={` text-[#18181B] ${table === "Action Required" && "border-b border-b-[#FB923C] text-[#18181B]"
            } py-[12px] font-int font-[500] text-[16px] text-[#18181B] px-8 `}
        >
          Action Required
        </button>
        <button
          onClick={() => setTable("Pending")}
          className={` text-[#18181B] ${table === "Pending" && "border-b border-b-[#FB923C] text-[#18181B]"
          } py-[12px] font-int font-[500] text-[16px] text-[#18181B] px-8 `}
        >
          Pending
        </button>
        <button
          onClick={() => setTable("Completed")}
          className={` text-[#18181B] ${table === "Completed" && "border-b border-b-[#FB923C] text-[#18181B]"
          } py-[12px] font-int font-[500] text-[16px] text-[#18181B] px-8 `}
        >
          Completed
        </button>
        
      </div>
   
      {data && (
        <div className="bg-white p-6 shadow-lg">
          <div>
            <h3 className="font-int font-[600] text-[23px]">
              {table} 
            </h3>
          </div>
          {table=="Action Required" ? (
        
        <div className="flex justify-center flex-col items-center py-4 ">
        <img src={emptyUserDash} alt=""  className="w-[350px]"/>
        <h2 className="py-8 font-inter text-[16px]">No transactions yet, Click below to start a new transaction.</h2>
        <Link to='/user/newtransaction' className="w-[16%] h-[20%] " >
        <button className="btn btn-form" >Let's get started</button></Link>
        </div>
    
      ) : (
        ""
      )}
       

          {loading ? (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                minHeight: "300px",
              }}
            >
              <CircularProgress color="primary" size={70} />
            </Box>
          ) : (
           <div>
            <h2>not getting data</h2>
           </div>
            // <MyDataGrid data={data} type={table} />
          )}
        </div>
      )}

      
    </div>
  );
};

export default Transaction;
