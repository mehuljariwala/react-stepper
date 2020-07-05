import React from "react";
import Stepper from "./Stepper";

export default function App() {
  const [current, setCurrent] = React.useState(0);
  const steps = [{ label: "Introduction" }, { label: "Profile Setup" }];
  const handleNext = () => setCurrent(Math.min(current + 1, steps.length));
  const handlePrevious = () => setCurrent(Math.max(current - 1, 0));
  const handleReset = () => setCurrent(0);
  return (
    <div>
      <Stepper
        stepperActive={current}
        steps={steps}
        stepperTextPos="down"
        stepperIcon="*"
      />
      {current === 0 ? (
        <div>This is Introduction Page</div>
      ) : current === 1 ? (
        <div>This is Profile Page</div>
      ) : null}

      {current === steps.length ? (
        <div>
          <span>Finished</span>
          <button onClick={handleReset}>{"Reset"}</button>
        </div>
      ) : (
        <>
          <button onClick={handlePrevious} disabled={current === 0}>
            {"Prev"}
          </button>
          {current === steps.length - 1 ? (
            <button onClick={handleNext}>{"Finish"}</button>
          ) : (
            <button onClick={handleNext}>{"Next"}</button>
          )}
        </>
      )}
    </div>
  );
}
