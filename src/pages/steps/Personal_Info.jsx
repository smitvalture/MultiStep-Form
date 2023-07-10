import React from 'react'

const Personal_Info = ({ eName, eEmail, ePhone, valueName, valueEmail, valuePhone, changeName, changeEmail, changePhone }) => {
    return (
        <>
            {/* ***************** Name Input field ******************* */}
            <div className='flex flex-col gap-6'>
                <div className='flex flex-col gap-1.5'>
                    <div className='flex justify-between'>
                        <h2 className='font-bold'>Name</h2>
                        <p className='font-semibold text-red-500'>{eName}</p>
                    </div>
                    <input className={`w-full h-12 border-2 border-gray-400 placeholder:font-medium ${eName ? "bg-red-100 text-red-500 border-red-500 focus:outline-red-500" : ""} rounded-lg px-4`} required value={valueName} onChange={changeName} placeholder='e.g. Stephen King' type="text" name="name" id={1} />
                </div>
                <div className='flex flex-col gap-1.5'>
                    <div className='flex justify-between'>
                        <h2 className='font-bold'>Email Address</h2>
                        <p className='font-semibold text-red-500'>{eEmail}</p>
                    </div>
                    <input className={`w-full h-12 border-2 border-gray-400 placeholder:font-medium ${eEmail ? "bg-red-100 text-red-500 border-red-500 focus:outline-red-500" : ""} rounded-lg px-4`} required value={valueEmail} onChange={changeEmail} placeholder='e.g. stephenking@lorem.com' type="email" name="email" id={2} />
                </div>
                <div className='flex flex-col gap-1.5'>
                    <div className='flex justify-between'>
                        <h2 className='font-bold'>Phone Number</h2>
                        <p className='font-semibold text-red-500'>{ePhone}</p>
                    </div>
                    <input className={`w-full h-12 border-2 border-gray-400 placeholder:font-medium ${ePhone ? "bg-red-100 text-red-500 border-red-500 focus:outline-red-500" : ""} rounded-lg px-4`} required value={valuePhone} onChange={changePhone} placeholder='e.g. +91 91231 12121' type="tel" name="phone" id={3} />
                </div>
            </div>
        </>
    )
}

export default Personal_Info