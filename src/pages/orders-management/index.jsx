import React from "react";
import { fetchProductService } from "../../api/services/Products";
import Table from "../../components/table";
import HeaderManagment from "../../layout/header-managment";
import Statistics from "../../layout/Statistics";

function OrderManagment() {
  return (
    <div className="flex">
      <HeaderManagment />
      <div className="flex flex-col flex-1 mx-5">
        <Statistics />
        <Table/>
      </div>
    </div>
  );
}

export default OrderManagment;
