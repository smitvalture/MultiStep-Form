import React, { useState } from 'react'
import sidebarImg from '../assets/images/bg-sidebar-desktop.svg'
import { Container } from 'postcss'
import Personal_Info from './steps/Personal_Info'
import Select_Plan from './steps/Select_Plan'
import Add_Ons from './steps/Add_Ons'
import Finish_Up from './steps/Finish_Up'

const MultiStepForm = () => {


    // function handleNext() {
    //   setActiveStep((prevStep) => prevStep + 1);
    // }

    // function handlePrevious() {
    //   setActiveStep((prevStep) => prevStep - 1);
    // }

    const steps = [
        {
            "step": "step 1",
            "info": "your info",
            "title": "Personal info",
            "des": "Please provide your name, email address, and phone number.",
        },
        {
            "step": "step 2",
            "info": "select plan",
            "title": "Select your plan",
            "des": "You have the option of monthly or yearly billing.",
        },
        {
            "step": "step 3",
            "info": "add-ons",
            "title": "Pick add-ons",
            "des": "Add-ons help enhance your gaming experience.",
        },
        {
            "step": "step 4",
            "info": "summary",
            "title": "Finishing up",
            "des": "Double-check everything looks 0K before confirming.",
        },
    ]

    const [page, setPage] = useState(0)
    const [error, setError] = useState({
        eName: "",
        eEmail: "",
        ePhone: "",
    })
    const [inputs, setInputs] = useState({
        name: "",
        email: "",
        phone: "",
    })

    const [activeStep, setActiveStep] = useState(0);

    function handleubmit(e) {
        e.preventDefault();

        let hasError = false;

        if (!inputs.name) {
            setError((prevError) => ({ ...prevError, eName: "Name is required" }));
            hasError = true;
        } else {
            setError((prevError) => ({ ...prevError, eName: "" }));
        }

        if (!inputs.email) {
            setError((prevError) => ({ ...prevError, eEmail: "Valid email is required" }));
            hasError = true;
        } else {
            setError((prevError) => ({ ...prevError, eEmail: "" }));
        }

        if (!inputs.phone) {
            setError((prevError) => ({ ...prevError, ePhone: "Valid phone is required" }));
            hasError = true;
        } else {
            setError((prevError) => ({ ...prevError, ePhone: "" }));
        }

        if (!hasError) {
            setPage((current) => current + 1);
            setActiveStep((prevStep) => prevStep + 1);
        }
    }

    return (
        <section className='w-full min-h-screen h-full flex justify-center items-center bg-[#eff4fe] font-Ubuntu'>
            <div className='w-fit h-fit p-5 bg-white rounded-xl drop-shadow-xl flex gap-8'>

                {/* **************** SideBar ************** */}
                <div className='relative'>
                    <img className='-z-10' src={sidebarImg} alt="sidebarDesktop" />
                    <div className='absolute top-0 left-0 z-10 pl-6 pt-6 text-white uppercase flex flex-col gap-5'>
                        {
                            steps.map((items, index) => (
                                <div key={index} className='flex items-center gap-5'>
                                    <p className={`w-10 h-10 pb-0.5 border duration-500 border-white ${index === activeStep ? 'bg-[#c3e0fa] text-black' : ''} rounded-full flex justify-center items-center text-xl font-semibold`}>{index + 1}</p>
                                    <div>
                                        <p className='font-light'>{items.step}</p>
                                        <p className='font-bold'>{items.info}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <form onSubmit={handleubmit} noValidate className='px-10 pt-5 pb-3 w-[550px] flex flex-col justify-between'>

                    <div>
                        <h1 className='font-bold text-3xl'>{steps[page]?.title}</h1>
                        <p className='text-gray-400 text-sm'>{steps[page]?.des}</p>
                    </div>

                    {
                        (page === 0) ?
                            <Personal_Info
                                eName={error.eName}
                                eEmail={error.eEmail}
                                ePhone={error.ePhone}
                                valueName={inputs.name}
                                changeName={(e) => {
                                    setInputs((prevState) => ({
                                        ...prevState,
                                        name: e.target.value,
                                    }));
                                    setError((prevError) => ({ ...prevError, eName: "" }));
                                }}

                                valueEmail={inputs.email}
                                changeEmail={(e) => {
                                    setInputs((prevState) => ({
                                        ...prevState,
                                        email: e.target.value,
                                    }));
                                    setError((prevError) => ({ ...prevError, eEmail: "" }));
                                }}

                                valuePhone={inputs.phone}
                                changePhone={(e) => {
                                    setInputs((prevState) => ({
                                        ...prevState,
                                        phone: e.target.value,
                                    }));
                                    setError((prevError) => ({ ...prevError, ePhone: "" }));
                                }}

                            />

                            : (page === 1) ? <Select_Plan />
                                : (page === 2) ? <Add_Ons />
                                    : <Finish_Up />
                    }

                    <div></div>
                    <div></div>

                    {/* ******************* navigation Button ******************* */}
                    <div className='flex justify-between'>
                        <div>
                            <button onClick={() => { setPage((current) => current - 1); setActiveStep((prevStep) => prevStep - 1); }} hidden={page === 0} className='text-gray-500 hover:text-black font-medium' type='button'>Go Back</button>
                        </div>
                        <div>
                            <button hidden={page === 3} className='h-8 px-4 py-0.5 bg-[#162c57] hover:bg-[#1f3d79] text-white rounded-lg' type="submit">Next Step</button>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default MultiStepForm