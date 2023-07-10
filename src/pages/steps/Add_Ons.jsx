import React, { useState } from 'react';
import checkIcon from '../../assets/images/icon-checkmark.svg';

const Add_Ons = ({ toggle, addonPlans, onclickArc, onclickAdv, onclickPro, selectedAddOns, handleAddOnSelection }) => {


  return (
    <div className="w-full h-full flex gap-4 flex-col justify-center items-center">
      <div
        onClick={onclickArc}
        className={`cursor-pointer select-none w-full h-fit flex gap-4 md:gap-6 justify-between items-center px-4 py-3 md:p-5 rounded-md border-[1.8px] border-gray-300 hover:border-purple-300 ${selectedAddOns.includes('online') ? 'bg-[#f7f8ff]' : ''}`}
      >
        <div
          className={`w-5 h-4 md:h-5 p-1 flex justify-center items-center rounded border-gray-400 ${selectedAddOns.includes('online') ? 'bg-[#4840f5] border-transparent' : 'border-[1.5px]'}`}
        >
          {selectedAddOns.includes('online') && <img src={checkIcon} alt="checkmark" />}
        </div>
        <div className="w-full md:w-3/4 h-full">
          <h4 className="md:text-lg font-semibold">Online Service</h4>
          <p className="text-xs whitespace-nowrap md:text-sm text-gray-400">Access to multiplayer games</p>
        </div>
        <p className="text-sm text-purple-600 font-semibold">
          +${addonPlans.online}/{toggle ? 'yr' : 'mo'}
        </p>
      </div>



      <div
        onClick={onclickAdv}
        className={`cursor-pointer select-none w-full h-fit flex gap-4 md:gap-6 justify-between items-center px-4 py-3 md:p-5 rounded-md border-[1.8px] border-gray-300 hover:border-purple-300 ${selectedAddOns.includes('large') ? 'bg-[#f7f8ff]' : ''}`}
      >
        <div
          className={`w-5 h-4 md:h-5 p-1 flex justify-center items-center rounded border-gray-400 ${selectedAddOns.includes('large') ? 'bg-[#4840f5] border-transparent' : 'border-[1.5px]'}`}
        >
          {selectedAddOns.includes('large') && <img src={checkIcon} alt="checkmark" />}
        </div>
        <div className="w-full md:w-3/4 h-full">
          <h4 className="md:text-lg font-semibold">Larger Storage</h4>
          <p className="text-xs whitespace-nowrap md:text-sm text-gray-400">Extra 1TB of cloud save</p>
        </div>
        <p className="text-sm text-purple-600 font-semibold">
          +${addonPlans.large}/{toggle ? 'yr' : 'mo'}
        </p>
      </div>



      <div
        onClick={onclickPro}
        className={`cursor-pointer select-none w-full h-fit flex gap-4 md:gap-6 justify-between items-center px-4 py-3 md:p-5 rounded-md border-[1.8px] border-gray-300 hover:border-purple-300 ${selectedAddOns.includes('custome') ? 'bg-[#f7f8ff]' : ''}`}
      >
        <div
          className={`w-5 h-4 md:h-5 p-1 flex justify-center items-center rounded border-gray-400 ${selectedAddOns.includes('custome') ? 'bg-[#4840f5] border-transparent' : 'border-[1.5px]'}`}
        >
          {selectedAddOns.includes('custome') && <img src={checkIcon} alt="checkmark" />}
        </div>
        <div className="w-full md:w-3/4 h-full">
          <h4 className="md:text-lg font-semibold">Customizable Profile</h4>
          <p className="text-xs whitespace-nowrap md:text-sm text-gray-400">Customize theme on your profile</p>
        </div>
        <p className="text-sm text-purple-600 font-semibold">
          +${addonPlans.custome}/{toggle ? 'yr' : 'mo'}
        </p>
      </div>
    </div>
  );
};

export default Add_Ons;
