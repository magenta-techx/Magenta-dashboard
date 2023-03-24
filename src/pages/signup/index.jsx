import { useState, useEffect } from "react";
import MagentaLogo from "../../assets/logo";
import { ItemContext } from "../../contextApi/stateMang.contextApi";
import { onboardingSteps } from "../utils";
import CheckCircle from "./micro/CheckCircle";
import AttachDocuments from "./sign-up pages/AttachDocuments";
import CompanyDetails from "./sign-up pages/CompanyDetails";
import SetPassword from "./sign-up pages/SetPassword";
import UserDetails from "./sign-up pages/UserDetails";

const Onboarding = () => {
  const [steps, setSteps] = useState(onboardingSteps);
  const [currentStep, setCurrentStep] = useState(0);
  const [user, setUser] = useState({});

  const { showNav, setShowNav , setShowFooter} = ItemContext();
  // setShowNav(false)

  useEffect(() => {
    setShowNav(false);
    setShowFooter(false)

  }, []);


  const moveToNext = () => {
    setCurrentStep(currentStep + 1);

    if (currentStep === steps.length - 1) {
      setCurrentStep(steps.length - 1);
    }
  };

  const markStepAsCompleted = (stepIndex) => {
    const newSteps = steps.map((step, index) => {
      return index === stepIndex ? { ...step, completed: true } : step;
    });

    setSteps(newSteps);
    moveToNext();
  };

  return (
    <div className="onboarding min-h-screen flex w-[100%]">
      <aside className="bg-[#EEE8F8] w-[40%] p-[48px] lg:flex flex-col gap-20 hidden">
        <MagentaLogo />

        <ul className="flex flex-col gap-10">
          {steps.map((step, index) => (
            <li key={index} className="flex items-start gap-[20px]">
              <div className="icon">
                <CheckCircle
                  checkedState={
                    step.completed
                      ? "completed"
                      : index === currentStep
                      ? "active"
                      : "inactive"
                  }
                />
              </div>
              <div className="info">
                <p className="text-[#4E00AD] text-[18px]">{step?.title}</p>
                <span className="text-[#8652C7] mt-1">{step?.description}</span>
              </div>
            </li>
          ))}
        </ul>
      </aside>
      <main className="bg-white flex justify-center  lg:w-[60%] items-center h-fit flex-col gap-10 overflow-y-hidden">
        {/* Onboarding Pages */}
        {currentStep === 0 && (
          <UserDetails
            markAsComplete={() => markStepAsCompleted(currentStep)}
          />
        )}
        {currentStep === 1 && (
          <SetPassword
            markAsComplete={() => markStepAsCompleted(currentStep)}
          />
        )}
        {currentStep === 2 && (
          <CompanyDetails
            markAsComplete={() => markStepAsCompleted(currentStep)}
          />
        )}
        {currentStep === 3 && (
          <AttachDocuments
            markAsComplete={() => markStepAsCompleted(currentStep)}
          />
        )}

        {/* Indicator Steps */}
        <div className="indicators flex gap-3 items-center">
          {[...Array(steps.length)].map((_, index) => {
            return index === currentStep ? (
              <div
                className="indicator w-[8px] h-[8px] rounded-full bg-[#4E00AD]"
                key={index}
              />
            ) : (
              <div
                className="indicator w-[8px] h-[8px] rounded-full bg-[#EFAFEB]"
                key={index}
              />
            );
          })}
        </div>
      </main>
    </div>
  );
};

export default Onboarding;
