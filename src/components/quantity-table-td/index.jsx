import React, { useState } from "react";

function QuantityTableTD({ id, value, editProductArr, setEditProductArr}) {
  const [productTd, setProductTd ] = useState(false);
  
    const productChangeHandler = (e) =>{
        setEditProductArr(arr => [...arr, {id: id,item: e.target.value,}]);
        console.log(editProductArr)
    }

  return (
    <td>
        {productTd ? (
        <input type="text" defaultValue={value} onBlur={(e)=>productChangeHandler(e)}></input>
      ) : (
        <div onClick={()=>{setProductTd(true)}}>
          {new Intl.NumberFormat("fa-IR", {
            style: "currency",
            currency: "IRR",
          }).format(value)}
        </div>
      )}
    </td>
  );
}

export default QuantityTableTD;
