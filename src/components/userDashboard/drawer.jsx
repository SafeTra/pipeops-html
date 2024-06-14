
import React, { useState } from 'react';
import { Button, Drawer } from 'antd';
import { Homebtn, StatusTag } from './button';
import {DeactivateModal} from '../dashboardComponents/shared';
import StaffEditModal from './StaffEditModal';

export const BasicDrawer = ({openDrawer, onClose}) => {
  console.log(openDrawer)

  return (
    <>
      <Drawer title="Transaction Details" onClose={onClose} open={openDrawer}>
        <div className='space-y-10'>
          <div className='w-full'>
            <p className='font-[400] text-[14px] font-Rob'>Data</p>
            <p className='font-[500] text-[24px] font-Rob'>+#35,000.00</p>
          </div>

          <div className='w-full space-y-4'>
            <div className='flex justify-between items-center w-full'>
              <span className='font-Rob font-[400] text-[#333333] text-[14px]'>Recipient</span>
              <span className='font-Rob font-[500] text-[14px]'>868484839384</span>
            </div>
            <div className='flex justify-between items-center w-full'>
              <span className='font-Rob font-[400] text-[#333333] text-[14px]'>Transaction ID</span>
              <span className='font-Rob font-[500] text-[14px]'>868484839384</span>
            </div>
            <div className='flex justify-between items-center w-full'>
              <span className='font-Rob font-[400] text-[#333333] text-[14px]'>Service</span>
              <span className='font-Rob font-[500] text-[14px]'>868484839384</span>
            </div>
            <div className='flex justify-between items-center w-full'>
              <span className='font-Rob font-[400] text-[#333333] text-[14px]'>Transaction Type</span>
              <span className='font-Rob font-[500] text-[14px]'>868484839384</span>
            </div>
            <div className='flex justify-between items-center w-full'>
              <span className='font-Rob font-[400] text-[#333333] text-[14px]'>Transaction Means</span>
              <span className='font-Rob font-[500] text-[14px]'>868484839384</span>
            </div>
            <div className='flex justify-between items-center w-full'>
              <span className='font-Rob font-[400] text-[#333333] text-[14px]'>Status</span>
              <span className='font-Rob font-[500] text-[14px]'><StatusTag status={['Successful']}/></span>
            </div>
          </div>

          <div className='flex justify-center items-center '>
            <Homebtn text={'Generate Receipt'}/>
          </div>          
        </div>

      </Drawer>
    </>
  );
};


export const StaffDrawer = ({openDrawer, onClose}) => {

  const [isEditModal, setEditStaffModal] = useState(false);
  const [isDeactivaeModal, setDeactivateModal] = useState(false);

  return (
    <>
      <Drawer title="Account Info" onClose={onClose} width={650} open={openDrawer}>
        <div className='space-y-10'>
          <div className='w-full'>
            <p className='font-[500] text-[24px] font-Rob'>Adekunle Bamidele <StatusTag status={['Active']}/></p>
            <p className='font-[400] text-[14px] font-Rob'>kdjlakjdlj@gmail.com</p>
          </div>

          <div className='space-x-6'>
            <button onClick={()=>{setEditStaffModal(true)}} className='border rounded-lg border-[#CFCFCF] py-3 px-6'> <img className='inline pr-2' src='/images/edit.svg' alt='icon'/>Edit Access</button>
            <button className='border rounded-lg border-[#CFCFCF] py-3 px-6' onClick={()=>{setDeactivateModal(true)}}> <img className='inline pr-2' src='/images/close-circle.svg' alt='icon'/>Deactivate</button>

            <StaffEditModal title={'staff'} openModal={isEditModal} handleOk={()=>setEditStaffModal(false)} handleCancel={()=>setEditStaffModal(false)}></StaffEditModal>
            <DeactivateModal title={'staff'} openModal={isDeactivaeModal} handleOk={()=>setDeactivateModal(false)} handleCancel={()=>setDeactivateModal(false)}></DeactivateModal>
          </div>

          <div>
            <p className='bg-[#F7F7F7] font-Rob font-[500] text-[14px] p-2'>Personal Information</p>

            <div className='w-full space-y-4 grid grid-cols-2 p-2'>
              <div className='flex items-center w-full gap-2'>
                <span className='font-Rob font-[400] text-[#333333] text-[14px]'>Full Name: </span>
                <span className='font-Rob font-[500] text-[14px]'>868484839384</span>
              </div>
              <div className='flex items-center w-full gap-2'>
                <span className='font-Rob font-[400] text-[#333333] text-[14px]'>Mobile Number: </span>
                <span className='font-Rob font-[500] text-[14px]'>868484839384</span>
              </div>
              <div className='flex items-center w-full gap-2'>
                <span className='font-Rob font-[400] text-[#333333] text-[14px]'>Email: </span>
                <span className='font-Rob font-[500] text-[14px]'>868484839384</span>
              </div>
              <div className='flex items-center w-full gap-2'>
                <span className='font-Rob font-[400] text-[#333333] text-[14px]'>Gender: </span>
                <span className='font-Rob font-[500] text-[14px]'>868484839384</span>
              </div>

          </div> 
          </div>

          <div>
            <p className='bg-[#F7F7F7] font-Rob font-[500] text-[14px] p-2'>Home Address</p>

            <div className='w-full space-y-4 grid grid-cols-2 p-2'>
              <div className='flex items-center w-full gap-2'>
                <span className='font-Rob font-[500] text-[14px]'>Estate gate Kola street, Ikeja, Lagos, Nigeria</span>
              </div>

          </div> 
          </div>

           <div>
            <p className='bg-[#F7F7F7] font-Rob font-[500] text-[14px] p-2'>Activation Date</p>

            <div className='w-full space-y-4 grid grid-cols-2 p-2'>
              <div className='flex items-center w-full gap-2'>
                <span className='font-Rob font-[500] text-[14px]'>27-10-2022</span>
              </div>

          </div> 
          </div>        
        </div>

      </Drawer>
    </>
  );
};



export const OtherDrawer = () => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Button type="primary" onClick={showDrawer}>
        Open
      </Button>
      <Drawer title="Basic Drawer" onClose={onClose} open={open}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </>
  );
};