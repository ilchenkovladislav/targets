import React, { useState } from "react";
import Target from "../Target/Target";
import "./TargetsList.css";

export default function TargetsList(props) {
  const { targets } = props;
  const [data, setData] = useState(targets);

  const onStartStep = (targetId, stepId) => {
    let newData = [...data];
    newData[targetId].steps[stepId].isStart = true;
    newData[targetId].steps[stepId].timestart = Date.now();
    setData(newData);
  };

  const onDoneStep = (targetId, stepId) => {
    let newData = [...data];
    newData[targetId].steps[stepId].isDone = true;
    newData[targetId].steps[stepId].timeend = Date.now();
    setData(newData);
  };

  const onResumeStep = (targetId, stepId) => {
    let newData = [...data];
    newData[targetId].steps[stepId].isDone = false;
    newData[targetId].steps[stepId].timeend = null;
    setData(newData);
  }

  const onPauseStep = (targetId, stepId) => {
    let newData = [...data];
    newData[targetId].steps[stepId].isPause = !newData[targetId].steps[stepId].isPause;
    setData(newData);
  };

  return (
    <ul className="targets__list">
      {data.map((target, id) => {
        return (
          <li key="{data.name}">
            <Target
              onStartStep={onStartStep}
              onDoneStep={onDoneStep}
              onResumeStep={onResumeStep}
              onPauseStep={onPauseStep}
              targetId={id}
              target={target}
            />
          </li>
        );
      })}
    </ul>
  );
}
