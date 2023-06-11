import React from 'react'
import sidebarImg from '../assets/images/bg-sidebar-desktop.svg'
import { Container } from 'postcss'

const MultiStepForm = () => {

    const steps = [
        {
            "step": "step 1",
            "info": "your info"
        },
        {
            "step": "step 2",
            "info": "select plan"
        },
        {
            "step": "step 3",
            "info": "add-ons"
        },
        {
            "step": "step 4",
            "info": "summary"
        },
    ]

    return (
        <section className='w-full min-h-screen h-full flex justify-center items-center bg-[#eff4fe]'>
            <div className='w-fit h-fit p-5 bg-white rounded-xl'>

                {/* **************** SideBar ************** */}
                <div className='relative'>
                    <img className='-z-10' src={sidebarImg} alt="sidebarDesktop" />
                    <div className='absolute top-0 left-0 z-10 pl-6 pt-6 text-white uppercase flex flex-col gap-5'>
                        {
                            steps.map((items, index) => (
                                <div key={index} className='flex items-center gap-5'>
                                    <p className='w-10 h-10 pb-0.5 border border-white rounded-full flex justify-center items-center text-xl font-semibold'>{index + 1}</p>
                                    <div>
                                        <p className='font-light'>{items.step}</p>
                                        <p className='font-bold'>{items.info}</p>
                                    </div>
                                </div>
                            ))
                        }

                    </div>
                </div>
                <div></div>
            </div>
        </section>
    )
}

export default MultiStepForm