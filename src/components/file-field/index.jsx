import React from "react";

function FileField({ id, lable, name, onchange }) {
  return (
    <div className="flex flex-col space-y-3">
      <label htmlFor={id}>{lable}</label>
      <input id={id} name={name} type="file" onChange={onchange} />
    </div>
  );
}

export default FileField;
