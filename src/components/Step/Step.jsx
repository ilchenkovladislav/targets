import React from "react";
import "./Step.css";

export default function Step(props) {
  const { step } = props;

  const liClasses = `step ${
    step.isDone ? "step--done" : step.isPause ? "step--pause" : ""
  }`.trim();

  let btns = [];

  if (step.isDone) {
    btns = [
      <button className="step__resume" onClick={props.onResumeStep} key="btn1">
        Возобновить
      </button>,
    ];
  } else {
    if (step.isStart) {
      btns = [
        <button onClick={props.onPauseStep} className="step__pause" key="btn2">
          {step.isPause ? "Продолжить" : "Пауза"}
        </button>,
        <button className="step__done" onClick={props.onDoneStep} key="btn3">
          Завершить
        </button>,
      ];
    } else {
      btns = [
        <button className="step__start" onClick={props.onStartStep} key="btn4">
          Начать
        </button>,
      ];
    }
  }

  return (
    <li key={step.name} className={liClasses}>
      <span>{step.name}</span>
      <div className="step__btns">{btns}</div>
    </li>
  );
}
