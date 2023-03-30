import React from "react";

function FileField({id,lable,name,type,required,className,onchange}) {
  return (
    <div className="flex flex-col space-y-3"> 
      <label htmlFor={id}>
                {lable}
      </label>
      <input
        id = {id}
        name = {name}
        type = {type}
        required 
        className = {className}
        onChange={onchange}
      />
    </div>
  );
}

export default FileField;
