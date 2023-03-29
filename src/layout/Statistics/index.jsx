import { RectangleGroupIcon, ShoppingBagIcon, UsersIcon } from "@heroicons/react/24/outline";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import StatisticsList from "../../components/statistics-list";
import { fetchOrders } from "../../states/slices/ordersSlice";
import { fetchproducts } from "../../states/slices/productsSlice";

function Statistics() {

  const dispatch = useDispatch();
  
  const [paginationParams, setPaginationParams] = useSearchParams({
    _page: 1,
    _limit: 5,
    delivered: false,
  });

  const ordersCount = useSelector((store) => store.orders.data.count);
  const productsCount = useSelector((store) => store.products.data.count);

  useEffect(() => {
    dispatch(fetchOrders(paginationParams));
    dispatch(fetchproducts(paginationParams));
  }, []);
  
  return (
    <div className="container mt-5">
      <div className="grid grid-cols-1 gap-6 mb-6 lg:grid-cols-3">
        <StatisticsList title="تعداد کاربران" count="1">
          <UsersIcon className="w-5 h-5 text-cyan-400" />
        </StatisticsList>
        <StatisticsList title="تعداد کالاها" count={productsCount}>
          <RectangleGroupIcon className="w-5 h-5 text-cyan-400" />
        </StatisticsList>
        <StatisticsList title="تعداد سفارشات" count={ordersCount}>
          <ShoppingBagIcon className="w-5 h-5 text-cyan-400" />
        </StatisticsList>
      </div>
    </div>
  );
}

export default Statistics;
