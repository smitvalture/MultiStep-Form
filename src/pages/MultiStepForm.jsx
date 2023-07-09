import React, { useEffect, useState } from 'react'
import sidebarImg from '../assets/images/bg-sidebar-desktop.svg'
import Personal_Info from './steps/Personal_Info'
import Select_Plan from './steps/Select_Plan'
import Add_Ons from './steps/Add_Ons'
import Finish_Up from './steps/Finish_Up'

const MultiStepForm = () => {

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
        ePlan: "",
    })
    const [inputs, setInputs] = useState({
        name: "",
        email: "",
        phone: "",
    })
    const [yearToggle, setYearToggle] = useState(false)
    const [plans, setPlans] = useState({
        arcade: 9,
        advance: 12,
        pro: 15,
        selectedPlan: 0,
    })
    const [activePlan, setActivePlan] = useState("")


    useEffect(() => {
        console.log(plans.selectedPlan);
    }, [plans.selectedPlan])

    function handleActivePlan(select) {
        setActivePlan(select)
    }



    function handlePlans() {
        setYearToggle((curr) => !curr);
        if (!yearToggle) {
            setPlans({
                arcade: 90,
                advance: 120,
                pro: 150,
            });
        } else {
            setPlans({
                arcade: 9,
                advance: 12,
                pro: 15,
            });
        }
    }



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
            setError((prevError) => ({ ...prevError, eEmail: "Email is required" }));
            hasError = true;
        } else if (!/^\S+@\S+\.\S+$/.test(inputs.email)) {
            setError((prevError) => ({ ...prevError, eEmail: "Enter valid email" }));
            hasError = true;
        } else {
            setError((prevError) => ({ ...prevError, eEmail: "" }));
        }

        if (!inputs.phone) {
            setError((prevError) => ({ ...prevError, ePhone: "Phone is required" }));
            hasError = true;
        } else {
            setError((prevError) => ({ ...prevError, ePhone: "" }));
        }



        if (page === 1) {

            if (activePlan === "arc") {
                setPlans({
                    ...plans,
                    selectedPlan: plans.arcade,
                })
            } else if (activePlan === "adv") {
                setPlans({
                    ...plans,
                    selectedPlan: plans.advance,
                })
            } else if (activePlan === "pro") {
                setPlans({
                    ...plans,
                    selectedPlan: plans.pro,
                })
            } else if (!activePlan || activePlan === "") {
                // setError()
                hasError = true;
            }
        }







        if (!hasError) {
            setPage((current) => current + 1);
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
                                    <p className={`w-10 h-10 pb-0.5 border duration-500 border-white ${index === page ? 'bg-[#c3e0fa] text-black' : ''} rounded-full flex justify-center items-center text-xl font-semibold`}>{index + 1}</p>
                                    <div>
                                        <p className='font-light opacity-75'>{items.step}</p>
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

                            : (page === 1) ? <Select_Plan
                                onclickArc={() => handleActivePlan("arc")}
                                onclickAdv={() => handleActivePlan("adv")}
                                onclickPro={() => handleActivePlan("pro")}
                                activePlan={activePlan}
                                costArc={plans.arcade}
                                costAdv={plans.advance}
                                costPro={plans.pro}
                                onclickToggle={() => handlePlans()}
                                toggle={yearToggle}
                            />
                                : (page === 2) ? <Add_Ons />
                                    : <Finish_Up />
                    }

                    <div></div>
                    <div></div>

                    {/* ******************* navigation Button ******************* */}
                    <div className='flex justify-between'>
                        <div>
                            <button onClick={() => { setPage((current) => current - 1) }} hidden={page === 0} className='text-gray-500 hover:text-black font-medium' type='button'>Go Back</button>
                        </div>
                        <div>
                            <button className={`h-8 px-4 py-0.5 text-white rounded-lg ${page === 3 ? "bg-[#4841f5] hover:bg-[#908bf7]" : "bg-[#162c57] hover:bg-[#27457f]"}`} type="submit">{page === 3 ? "Confirm" : "Next Step"}</button>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default MultiStepForm