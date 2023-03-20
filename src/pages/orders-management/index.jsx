import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import OrdersTable from "../../components/orders-table";
import Pagination from "../../components/pagination";
import RadioField from "../../components/radio-field";
import SearchField from "../../components/search-field";
import HeaderManagment from "../../layout/header-managment";
import Statistics from "../../layout/Statistics";
import { fetchOrders } from "../../states/slices/ordersSlice";

function OrderManagment() {
  const orders = useSelector((store) => store.orders);
  const ordersCount = useSelector((store) => store.orders.data.count);
  const dispatch = useDispatch();

  const [active, setActive] = useState("1");
  const [searchParams, setSearchParams] = useSearchParams({
    _page: 1,
    _limit: 5,
  });


  useEffect(() => {
    dispatch(fetchOrders(searchParams));
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
        {orders.status === "success" ? (<OrdersTable tbodyData={orders.data.ordersData} />) : ("")}
        <Pagination
                params={searchParams}
                count={ordersCount}
                active={active}
                setActive={setActive}/>
      </div>
    </div>
  );
}

export default OrderManagment;
