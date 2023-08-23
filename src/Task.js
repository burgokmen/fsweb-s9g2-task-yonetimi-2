import React from "react";
//import { format } from "date-fns";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import { differenceInDays } from "date-fns";
import { tr } from "date-fns/locale";

const Task = ({ taskObj, onComplete }) => {
  //const formattedDate = format(new Date(taskObj.deadline), "dd.MM.yyyy");

  const result = differenceInDays(new Date(taskObj.deadline), new Date());
  const resultNew = formatDistanceToNow(
    new Date(taskObj.deadline),
    new Date(),
    { addSuffix: true, locale: tr }
  );

  let backgroundColor;
  if (result <= 3) {
    backgroundColor = "#ffd9d4";
  } else {
    backgroundColor = "transparent";
  }

  return (
    <div className="task">
      <h3>{taskObj.title}</h3>
      <div className="deadline">
        son teslim:
        <span style={{ backgroundColor }}>{resultNew}</span>
      </div>
      <p>{taskObj.description}</p>
      <div>
        {taskObj.people.map((p) => (
          <span className="pill" key={p}>
            {p}
          </span>
        ))}
      </div>
      {onComplete && (
        <button onClick={() => onComplete(taskObj.id)}>Tamamlandı</button>
      )}
    </div>
  );
};

export default Task;
