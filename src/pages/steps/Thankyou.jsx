import React from 'react'
import icon from '../../assets/images/icon-thank-you.svg'

const Thankyou = () => {
    return (
        <div className='w-full h-full flex flex-col justify-center items-center'>
            <img src={icon} alt="Thankyou icon" />
            <h4 className='mt-6 text-3xl font-bold'>Thank you!</h4>
            <p className='mt-3 w-full md:w-fit px-3 md:px-0 text-gray-500 text-center'>Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com.</p>
        </div>
    )
}

export default Thankyou