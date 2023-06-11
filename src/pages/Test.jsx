import React, { useState } from 'react';

const Test = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    step1: { name: '', email: '' },
    step2: { address: '', city: '', country: '' },
    // ... additional steps
  });

  const handleInputChange = (e, step) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [step]: {
        ...prevState[step],
        [name]: value,
      },
    }));
  };

  const handleNextStep = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const handlePrevStep = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  const handleSubmit = () => {
    // Perform form submission logic with formData
    console.log('Form submitted:', formData);
  };

  const renderStep1 = () => {
    const { name, email } = formData.step1;

    return (
      <div>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => handleInputChange(e, 'step1')}
          placeholder="Enter your name"
        />
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => handleInputChange(e, 'step1')}
          placeholder="Enter your email"
        />
        <button onClick={handleNextStep}>Next</button>
      </div>
    );
  };

  const renderStep2 = () => {
    const { address, city, country } = formData.step2;

    return (
      <div>
        <input
          type="text"
          name="address"
          value={address}
          onChange={(e) => handleInputChange(e, 'step2')}
          placeholder="Enter your address"
        />
        <input
          type="text"
          name="city"
          value={city}
          onChange={(e) => handleInputChange(e, 'step2')}
          placeholder="Enter your city"
        />
        <input
          type="text"
          name="country"
          value={country}
          onChange={(e) => handleInputChange(e, 'step2')}
          placeholder="Enter your country"
        />
        <button onClick={handlePrevStep}>Previous</button>
        <button onClick={handleNextStep}>Next</button>
      </div>
    );
  };

  const renderStep3 = () => {
    // Render step 3 fields and inputs
    // ...
    return (
      <div>
        <button onClick={handlePrevStep}>Previous</button>
        <button onClick={handleSubmit}>Submit</button>
      </div>
    );
  };

  // Render the appropriate step based on the currentStep state
  const renderCurrentStep = () => {
    switch (currentStep) {
      case 1:
        return renderStep1();
      case 2:
        return renderStep2();
      case 3:
        return renderStep3();
      // Add cases for additional steps
      default:
        return null;
    }
  };

  return <div>{renderCurrentStep()}</div>;
};

export default Test;
