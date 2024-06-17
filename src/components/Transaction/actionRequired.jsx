import React from 'react'

export default function actionRequired() {
  return (
    <div className="flex justify-center flex-col items-center py-4 ">
              <img
                src={emptyUserDash}
                alt="No transaction"
              />
              <h2 className="py-8 font-inter text-[16px]">
                No transactions yet, Click below to start a new
                transaction.
              </h2>
              <Link
                to="/user/newtransaction"
                className="w-[16%] h-[20%] "
              >
                <button className="btn btn-form">
                  Let's get started
                </button>
              </Link>
            </div>
  )
}
