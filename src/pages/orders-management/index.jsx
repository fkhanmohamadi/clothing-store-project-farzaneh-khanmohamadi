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

function OrdersManagment() {

  const orders = useSelector((store) => store.orders);
  const ordersCount = useSelector((store) => store.orders.data.count);
  
  const dispatch = useDispatch();

  const [active, setActive] = useState("1");
  const [delivered, setDelivered] = useState(false);

  const [paginationParams, setPaginationParams] = useSearchParams({
    _page: 1,
    _limit: 5,
    delivered,
  });

  const [searchParams, setSearchParams] = useState("");

  useEffect(() => {
    dispatch(fetchOrders(paginationParams));
  }, []);

  useEffect(() => {
    dispatch(fetchOrders(paginationParams));
  }, [paginationParams]);

  const searchHandler = (e) => {

    setSearchParams(e.target.value);

    console.log(searchParams);

    setPaginationParams({
      _page: 1,
      _limit: 5,
      delivered,
      name: searchParams,
    });
    dispatch(fetchOrders(paginationParams));
  };

  const handelDeliveredChenge = (e)=>{
    setDelivered(e.target.value==="true"?true:false);
    setPaginationParams({_page: 1,_limit: 5,delivered:e.target.value})
    // dispatch(fetchOrders({_page: 1,_limit: 5,delivered:e.target.value}));
}

console.log("object")
  return (
    <div className="flex">
      <HeaderManagment />
      <div className="flex flex-col flex-1 mx-5 gap-5">
        <Statistics />
        <div className="flex justify-between">
          <SearchField
            className="p-1 w-96 text-sm bg-transparent outline-0"
            placeholder="جستجو ..."
            onchange={searchHandler}
          />
          <RadioField onchanged={handelDeliveredChenge} delivered={delivered}/>
        </div>
        {orders.status === "success" ? (
          <OrdersTable
            tbodyData={orders.data.ordersData}
            searchParams={searchParams}
          />
        ) : (
          ""
        )}
        <Pagination
          params={paginationParams}
          count={ordersCount}
          active={active}
          setActive={setActive}
          funName={fetchOrders}
        />
      </div>
    </div>
  );
}

export default OrdersManagment;
