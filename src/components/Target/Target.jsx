import React from "react";
import Step from "../Step/Step";
import "./Target.css";

export default function Target(props) {
  const { target } = props;
  return (
    <ul className="target">
      {target.steps.map((step, id) => (
        <Step
          step={step}
          onStartStep={() => props.onStartStep(props.targetId, id)}
          onDoneStep={() => props.onDoneStep(props.targetId, id)}
          onResumeStep={() => props.onResumeStep(props.targetId, id)}
          onPauseStep={() => props.onPauseStep(props.targetId, id)}
          key={step.name}
        />
      ))}
      <Step step={target} key={target.name} />
    </ul>
  );
}
