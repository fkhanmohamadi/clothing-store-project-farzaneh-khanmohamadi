import { RectangleGroupIcon, ShoppingBagIcon, UsersIcon } from "@heroicons/react/24/outline";
import React from "react";
import StatisticsList from "../../components/statistics-list";

function Statistics() {
  return (
    <div className="container mt-5">
      <div className="grid grid-cols-1 gap-6 mb-6 lg:grid-cols-3">
        <StatisticsList title="تعداد کاربران" count="12,00">
          <UsersIcon className="w-5 h-5 text-cyan-400" />
        </StatisticsList>
        <StatisticsList title="تعداد کالاها" count="12,00">
          <RectangleGroupIcon className="w-5 h-5 text-cyan-400" />
        </StatisticsList>
        <StatisticsList title="تعداد سفارشات" count="12,00">
          <ShoppingBagIcon className="w-5 h-5 text-cyan-400" />
        </StatisticsList>
      </div>
    </div>
  );
}

export default Statistics;
