import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import OrdersTable from "../../components/orders-table";
import HeaderManagment from "../../layout/header-managment";
import Statistics from "../../layout/Statistics";
import { fetchOrders } from "../../states/slices/ordersSlice";

function OrderManagment() {

const {orders} = useSelector(store => store)
const dispatch = useDispatch();

useEffect(()=>{
  dispatch(fetchOrders())
},[])

  return (
    <div className="flex">
      <HeaderManagment />
      <div className="flex flex-col flex-1 mx-5">
        <Statistics />
        {orders.status ==="success"? <OrdersTable tbodyData={orders.data}/>:""}
        
      </div>
    </div>
  );
}

export default OrderManagment;
