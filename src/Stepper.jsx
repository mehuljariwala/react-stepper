import React from "react";
import PropTypes from "prop-types";
import "./style.css";

function Stepper({ steps, stepperIcon, stepperTextPos, stepperActive }) {
  const current = stepperActive;
  return (
    <div className="stepper__main">
      <div className="stepper-container">
        {steps.map((step, key) => {
          const done = key < current;
          const currentStep = key === current;
          const doneClassName = done ? "stepper__circle_done" : "";
          const currentClassName = currentStep ? "stepper__step__current" : "";
          return (
            <React.Fragment key={key}>
              <div className="stepper__item">
                <div
                  className={`stepper__circle ${doneClassName} ${currentClassName}`}
                >
                  {done ? stepperIcon : ""}
                </div>
                <span
                  className={`${
                    stepperTextPos === "up"
                      ? "stepper__title__up"
                      : "stepper__title__down"
                  } ${currentStep ? "stepper__title__active" : ""}`}
                >
                  {step.label}
                </span>
              </div>
              {steps.length - 1 !== key && (
                <div
                  className={`stepper__line ${
                    done ? "stepper__line__done" : ""
                  }`}
                ></div>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}

Stepper.defaultProps = {
  steps: [
    {
      label: "Simple1",
    },
    {
      label: "Simple2",
    },
  ],
  stepperIcon: "✓",
  stepperTextPos: "up",
  stepperActive: 0,
};

Stepper.propTypes = {
  steps: PropTypes.array,
};
export default Stepper;
