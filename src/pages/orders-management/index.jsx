import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import OrdersTable from "../../components/orders-table";
import RadioField from "../../components/radio-field";
import SearchField from "../../components/search-field";
import HeaderManagment from "../../layout/header-managment";
import Statistics from "../../layout/Statistics";
import { fetchOrders } from "../../states/slices/ordersSlice";

function OrderManagment() {
  const { orders } = useSelector((store) => store);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchOrders());
  }, []);

  return (
    <div className="flex">
      <HeaderManagment />
      <div className="flex flex-col flex-1 mx-5 gap-5">
        <Statistics />
        <div className="flex justify-between">
          <SearchField
            className="p-1 w-96 text-sm bg-transparent outline-0"
            placeholder="جستجو ..."
          />
          <RadioField />
        </div>
        {orders.status === "success" ? (<OrdersTable tbodyData={orders.data} />) : ("")}
      </div>
    </div>
  );
}

export default OrderManagment;
