import React, { useState } from 'react'
import iconArcade from '../../assets/images/icon-arcade.svg'
import iconAdavnced from '../../assets/images/icon-advanced.svg'
import iconPro from '../../assets/images/icon-pro.svg'

const Select_Plan = ({ onclickAdv, onclickArc, onclickPro, activePlan, onclickToggle, toggle, costArc, costAdv, costPro }) => {


  return (
    <div className='w-full h-full grid gap-x-5 grid-cols-3 place-items-center'>
      <div onClick={onclickArc} className={`cursor-pointer w-full h-4/6 flex flex-col justify-between duration-300 border-[1.8px] rounded-md border-gray-300 ${activePlan === "arc" ? "border-purple-900" : "hover:border-[#9894ec]"} p-5`}>
        <img className='w-fit' src={iconArcade} alt="icon" />
        <div className='space-y-0.5'>
          <h4 className='text-lg font-semibold'>Arcade</h4>
          <p className='text-gray-400/80'>${costArc}/{toggle ? "yr" : "mo"}</p>
          {toggle && <p className='text-purple-900 text-sm'>2 months free</p>}
        </div>
      </div>
      <div onClick={onclickAdv} className={`cursor-pointer w-full h-4/6 flex flex-col justify-between duration-300 border-[1.8px] rounded-md border-gray-300 ${activePlan === "adv" ? "border-purple-900" : "hover:border-[#9894ec]"} p-5`}>
        <img className='w-fit' src={iconAdavnced} alt="icon" />
        <div className='space-y-0.5'>
          <h4 className='text-lg font-semibold'>Advanced</h4>
          <p className='text-gray-400/80'>${costAdv}/{toggle ? "yr" : "mo"}</p>
          {toggle && <p className='text-purple-900 text-sm'>2 months free</p>}
        </div>
      </div>
      <div onClick={onclickPro} className={`cursor-pointer w-full h-4/6 flex flex-col justify-between duration-300 border-[1.8px] rounded-md border-gray-300 ${activePlan === "pro" ? "border-purple-900" : "hover:border-[#9894ec]"} p-5`}>
        <img className='w-fit' src={iconPro} alt="icon" />
        <div className='space-y-0.5'>
          <h4 className='text-lg font-semibold'>Pro</h4>
          <p className='text-gray-400/80'>${costPro}/{toggle ? "yr" : "mo"}</p>
          {toggle && <p className='text-purple-900 text-sm'>2 months free</p>}
        </div>
      </div>
      <div className='col-span-3 w-full h-full flex justify-center items-start'>
        <div className='w-full h-10 flex justify-center items-center bg-purple-50 rounded-md'>
          <div className='w-full flex gap-4 justify-center items-center'>
            <p className={`font-medium duration-500 ${!toggle ? "text-purple-950" : "text-gray-400"}`}>Monthly</p>
            <div onClick={onclickToggle} className={`cursor-pointer duration-500 w-14 h-6 bg-purple-950 rounded-full p-1 flex ${toggle ? "pl-9" : ""} items-center`}>
              <div className='h-4 w-4 bg-white rounded-full'></div>
            </div>
            <p className={`font-medium duration-500 ${toggle ? "text-purple-950" : "text-gray-400"}`}>Yearly</p>
          </div>
        </div>
      </div>
    </div >
  )
}

export default Select_Plan