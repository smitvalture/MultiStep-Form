import React from 'react'

const Finish_Up = ({ onclick, toggle, planName, planCost, selectedAddOns, online, large, custome, addonPlans, total }) => {

  return (
    <div className='w-full h-full pt-2 md:pt-10 flex flex-col gap-5 justify-start items-center'>
      <div className='w-full h-fit p-5 bg-purple-50 rounded-md flex gap-2 md:gap-6 flex-col justify-center'>

        <div className='w-full flex items-center justify-between'>
          <div>
            <h3 className='font-semibold text-purple-950'>{planName} {toggle ? "(Yearly)" : "(Monthly)"}</h3>
            <button type='button' onClick={onclick} className='text-xs text-gray-500 underline hover:text-gray-800 duration-300' >Change</button>
          </div>
          <p className='font-semibold'>${planCost}/{toggle ? "yr" : "mo"}</p>
        </div>

        {selectedAddOns.length != 0 && <hr className='border border-gray-300' />}

        {selectedAddOns.length != 0 &&
          <div className='w-full flex flex-col gap-3'>

            {online &&
              <div className='w-full h-fit flex items-center justify-between'>
                <p className='text-gray-500 text-sm'>Online service</p>
                <p className="text-sm text-gray-600 font-semibold">
                  +${addonPlans.online}/{toggle ? 'yr' : 'mo'}
                </p>
              </div>
            }

            {large &&
              <div className='w-full h-fit flex items-center justify-between'>
                <p className='text-gray-500 text-sm'>Larger storage</p>
                <p className="text-sm text-gray-600 font-semibold">
                  +${addonPlans.large}/{toggle ? 'yr' : 'mo'}
                </p>
              </div>
            }

            {custome &&
              <div className='w-full h-fit flex items-center justify-between'>
                <p className='text-gray-500 text-sm'>Customizable Profile</p>
                <p className="text-sm text-gray-600 font-semibold">
                  +${addonPlans.custome}/{toggle ? 'yr' : 'mo'}
                </p>
              </div>
            }

          </div>
        }
      </div>


      <div className='w-full px-6 flex justify-between items-center'>
        <p className='text-gray-500 text-sm font-medium'>Total (per {toggle ? 'year' : 'month'})</p>
        <p className='text-purple-800 font-semibold'>+${total}/{toggle ? 'yr' : 'mo'}</p>
      </div>
    </div>
  )
}

export default Finish_Up