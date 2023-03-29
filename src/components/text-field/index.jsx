import React from "react";

function TextField({id,lable,name,type,autoComplete,required,className,placeholder,onchange}) {
  return (
    <div className="flex flex-col space-y-3"> 
      <label htmlFor={id}>
                {lable}
      </label>
      <input
        id = {id}
        name = {name}
        type = {type}
        autoComplete ={autoComplete}
        required 
        className = {className}
        placeholder ={placeholder}
        onChange={onchange}
      />
    </div>
  );
}

export default TextField;
