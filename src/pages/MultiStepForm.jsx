import React, { useEffect, useState } from 'react';
import sidebarImg from '../assets/images/bg-sidebar-desktop.svg';
import Personal_Info from './steps/Personal_Info';
import Select_Plan from './steps/Select_Plan';
import Add_Ons from './steps/Add_Ons';
import Finish_Up from './steps/Finish_Up';
import Thankyou from './steps/Thankyou';

const MultiStepForm = () => {
    const steps = [
        {
            step: 'step 1',
            info: 'your info',
            title: 'Personal info',
            des: 'Please provide your name, email address, and phone number.',
        },
        {
            step: 'step 2',
            info: 'select plan',
            title: 'Select your plan',
            des: 'You have the option of monthly or yearly billing.',
        },
        {
            step: 'step 3',
            info: 'add-ons',
            title: 'Pick add-ons',
            des: 'Add-ons help enhance your gaming experience.',
        },
        {
            step: 'step 4',
            info: 'summary',
            title: 'Finishing up',
            des: 'Double-check everything looks OK before confirming.',
        },
    ];

    const [page, setPage] = useState(0);
    const [error, setError] = useState({
        eName: '',
        eEmail: '',
        ePhone: '',
    });
    const [inputs, setInputs] = useState({
        name: '',
        email: '',
        phone: '',
    });
    const [yearToggle, setYearToggle] = useState(false);
    const [plans, setPlans] = useState({
        arcade: 9,
        advance: 12,
        pro: 15,
        selectedPlan: 0,
    });
    const [activePlan, setActivePlan] = useState('');

    const [addonPlans, setAddonPlans] = useState({
        online: 1,
        large: 2,
        custome: 2,
    });
    const [selectedAddOns, setSelectedAddOns] = useState([]);
    const [selectedPlanName, setSelectedPlanName] = useState('');
    const [selectedPlanCost, setSelectedPlanCost] = useState(0);

    const [planCost, setPlanCost] = useState(0);
    const [totalCost, setTotalCost] = useState(0);

    // useEffect(() => {
    //     console.log("total:", totalCost);
    //     console.log("plan:", planCost);
    //     console.log("addons:", selectedAddOns);
    // }, [totalCost, planCost]);

    useEffect(() => {
        if (yearToggle) {
            setAddonPlans({
                online: 10,
                large: 20,
                custome: 20,
            });
        } else {
            setAddonPlans({
                online: 1,
                large: 2,
                custome: 2,
            });
        }
    }, [yearToggle]);

    function handleActivePlan(select) {
        setActivePlan(select);
        if (select === 'arc') {
            setSelectedPlanName('Arcade');
            setSelectedPlanCost(plans.arcade);
        } else if (select === 'adv') {
            setSelectedPlanName('Advance');
            setSelectedPlanCost(plans.advance);
        } else if (select === 'pro') {
            setSelectedPlanName('Pro');
            setSelectedPlanCost(plans.pro);
        }
    }

    function handlePlans() {
        setYearToggle((curr) => !curr);
        if (!yearToggle) {
            setPlans({
                arcade: 90,
                advance: 120,
                pro: 150,
                selectedPlan: 0,
            });
        } else {
            setPlans({
                arcade: 9,
                advance: 12,
                pro: 15,
                selectedPlan: 0,
            });
        }
    }
    const handleAddOnSelection = (addOn) => {
        const isSelected = selectedAddOns.includes(addOn);
        let updatedSelection = [];

        if (isSelected) {
            updatedSelection = selectedAddOns.filter((item) => item !== addOn);
        } else {
            updatedSelection = [...selectedAddOns, addOn];
        }

        setSelectedAddOns(updatedSelection);
    };


    function handleubmit(e) {
        e.preventDefault();

        let hasError = false;

        if (!inputs.name) {
            setError((prevError) => ({ ...prevError, eName: 'Name is required' }));
            hasError = true;
        } else {
            setError((prevError) => ({ ...prevError, eName: '' }));
        }

        if (!inputs.email) {
            setError((prevError) => ({ ...prevError, eEmail: 'Email is required' }));
            hasError = true;
        } else if (!/^\S+@\S+\.\S+$/.test(inputs.email)) {
            setError((prevError) => ({ ...prevError, eEmail: 'Enter valid email' }));
            hasError = true;
        } else {
            setError((prevError) => ({ ...prevError, eEmail: '' }));
        }

        if (!inputs.phone) {
            setError((prevError) => ({ ...prevError, ePhone: 'Phone is required' }));
            hasError = true;
        } else {
            setError((prevError) => ({ ...prevError, ePhone: '' }));
        }

        if (page === 1) {
            if (!activePlan || activePlan === '') {
                hasError = true;
            } else {
                let selectedPlanCost = 0;
                if (activePlan === 'arc') {
                    selectedPlanCost = plans.arcade;
                } else if (activePlan === 'adv') {
                    selectedPlanCost = plans.advance;
                } else if (activePlan === 'pro') {
                    selectedPlanCost = plans.pro;
                }
                setPlanCost(selectedPlanCost)
                setTotalCost(selectedPlanCost)
            }
        }


        if (page === 2) {
            //console.log(selectedAddOns);
            if (selectedAddOns.length === 1 && selectedAddOns[0] === "online") {
                setTotalCost(prev => prev + addonPlans.online);
            } else if (selectedAddOns.length === 1 && selectedAddOns[0] === ("large" || "custome")) {
                setTotalCost(prev => prev + addonPlans.large);
            } else if (
                selectedAddOns.includes("online") &&
                selectedAddOns.includes("large" || "custome") &&
                selectedAddOns.length === 2
            ) {
                setTotalCost(prev => prev + addonPlans.large + addonPlans.online);
            } else if (
                selectedAddOns.includes("online") &&
                selectedAddOns.includes("large") &&
                selectedAddOns.includes("custome") &&
                selectedAddOns.length === 3
            ) {
                setTotalCost(prev => prev + (2 * addonPlans.large) + addonPlans.online);
            }

        }

        if (!hasError) {
            if (page >= 0 && page <= 3) {
                setPage((current) => current + 1);
            }
        }
    }

    return (
        <section className="w-full min-h-screen h-full flex justify-center items-center bg-[#eff4fe] font-Ubuntu">
            <div className="w-fit h-fit p-5 bg-white rounded-xl drop-shadow-xl flex gap-8">
                {/* **************** SideBar ************** */}
                <div className="relative">
                    <img className="-z-10" src={sidebarImg} alt="sidebarDesktop" />
                    <div className="absolute top-0 left-0 z-10 pl-6 pt-6 text-white uppercase flex flex-col gap-5">
                        {steps.map((items, index) => (
                            <div key={index} className="flex items-center gap-5">
                                <p
                                    className={`w-10 h-10 border duration-500 border-white ${index === page || (index === 3 && page === 3) ? 'bg-[#c3e0fa] text-black' : ''} rounded-full flex justify-center items-center text-xl font-semibold`}
                                >
                                    {index + 1}
                                </p>
                                <div>
                                    <p className="font-light opacity-75">{items.step}</p>
                                    <p className="font-bold">{items.info}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <form onSubmit={handleubmit} noValidate className="px-10 pt-5 pb-3 w-[550px] flex flex-col justify-between">
                    <div className='space-y-1'>
                        <h1 className="font-bold text-3xl">{steps[page]?.title}</h1>
                        <p className="text-gray-400 text-sm">{steps[page]?.des}</p>
                    </div>

                    {page === 0 ? (
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
                                setError((prevError) => ({ ...prevError, eName: '' }));
                            }}
                            valueEmail={inputs.email}
                            changeEmail={(e) => {
                                setInputs((prevState) => ({
                                    ...prevState,
                                    email: e.target.value,
                                }));
                                setError((prevError) => ({ ...prevError, eEmail: '' }));
                            }}
                            valuePhone={inputs.phone}
                            changePhone={(e) => {
                                setInputs((prevState) => ({
                                    ...prevState,
                                    phone: e.target.value,
                                }));
                                setError((prevError) => ({ ...prevError, ePhone: '' }));
                            }}
                        />
                    ) : page === 1 ? (
                        <Select_Plan
                            onclickArc={() => handleActivePlan('arc')}
                            onclickAdv={() => handleActivePlan('adv')}
                            onclickPro={() => handleActivePlan('pro')}
                            activePlan={activePlan}
                            costArc={plans.arcade}
                            costAdv={plans.advance}
                            costPro={plans.pro}
                            onclickToggle={() => handlePlans()}
                            toggle={yearToggle}
                        />
                    ) : page === 2 ? (
                        <Add_Ons
                            toggle={yearToggle}
                            addonPlans={addonPlans}
                            onclickArc={() => handleAddOnSelection('online')}
                            onclickAdv={() => handleAddOnSelection('large')}
                            onclickPro={() => handleAddOnSelection('custome')}
                            selectedAddOns={selectedAddOns}
                        />
                    ) : page === 3 ? (
                        <Finish_Up
                            toggle={yearToggle}
                            planName={selectedPlanName}
                            planCost={selectedPlanCost}
                            costArc={plans.arcade}
                            costAdv={plans.advance}
                            costPro={plans.pro}
                            selectedAddOns={selectedAddOns}
                            online={selectedAddOns.includes("online")}
                            large={selectedAddOns.includes("large")}
                            custome={selectedAddOns.includes("custome")}
                            addonPlans={addonPlans}
                            total={totalCost}
                            onclick={() => { setPage(1); setTotalCost(0); setPlanCost(0) }}
                        />
                    ) : <Thankyou />}

                    <div></div>
                    <div></div>

                    {/* ******************* navigation Button ******************* */}
                    <div className='flex justify-between'>
                        <div>
                            <button onClick={() => {
                                if (page === 2) {
                                    setTotalCost(0);
                                    setSelectedAddOns([]);
                                }
                                if (page === 3) {
                                    setTotalCost(planCost);
                                    setSelectedAddOns([]);
                                }
                                setPage((current) => current - 1);
                            }} hidden={page === 0 || page === 4} className='text-gray-500 hover:text-black duration-300 font-medium' type='button'>Go Back</button>
                        </div>
                        <div>
                            <button className={`h-8 px-4 py-0.5 text-white rounded-lg ${page === 3 ? "bg-[#4841f5] hover:bg-[#908bf7]" : "bg-[#162c57] hover:bg-[#27457f]"}`} hidden={page === 4} type="submit">{page === 3 ? "Confirm" : "Next Step"}</button>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default MultiStepForm