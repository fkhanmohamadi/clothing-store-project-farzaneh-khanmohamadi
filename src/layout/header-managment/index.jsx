import React from "react";
import ImageField from "../../components/img";
import {
  ArrowRightOnRectangleIcon,
  BanknotesIcon,
  Cog6ToothIcon,
  RectangleGroupIcon,
  TruckIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";
import HeaderManagmentList from "../../components/header-mangment-list";

function HeaderManagment() {
  return (
    <div className="flex">
      <div className="flex flex-col h-screen p-3 bg-white mx-5 my-2 shadow-lg w-60">
          <div className="flex flex-col items-center space-y-2 pb-10 border-b border-gray-200">
            <div className="w-20 h-20 flex items-center justify-center border border-gray-200 p-2 rounded-full shadow-lg">
              <ImageField
                className="mx-auto h-12 w-auto"
                src="./logo-2.gif"
                alt="logo"
              />
            </div>
            <h2 className="text-lg font-bold text-gray-600">پنل مدیریت</h2>
          </div>
          <div className="flex-1">
            <ul className="flex flex-col gap-5 py-4 text-sm border-b border-gray-200">
              <HeaderManagmentList href="#" title="مدیریت سفارش ها">
                <TruckIcon className="h-5 w-5 text-pink-600" />
              </HeaderManagmentList>
              <HeaderManagmentList href="#" title="مدیریت کالا ها">
                <RectangleGroupIcon className="h-5 w-5 text-pink-600" />
              </HeaderManagmentList>
              <HeaderManagmentList href="#" title="مدیریت انبار">
                <BanknotesIcon className="h-5 w-5 text-pink-600" />
              </HeaderManagmentList>
              <HeaderManagmentList href="#" title="مدیریت کاربران">
                <UsersIcon className="h-5 w-5 text-pink-600" />
              </HeaderManagmentList>
            </ul>
            <ul className="flex flex-col gap-5 py-4 text-sm ">
              <HeaderManagmentList href="#" title="تنظیمات">
                <Cog6ToothIcon className="h-5 w-5 text-pink-600" />
              </HeaderManagmentList>
              <HeaderManagmentList href="#" title="خروج">
                <ArrowRightOnRectangleIcon className="h-5 w-5 text-pink-600" />
              </HeaderManagmentList>
            </ul>
        </div>
      </div>
      <div className="container mx-auto mt-12">
        <div className="grid grid-cols-1 gap-6 mb-6 lg:grid-cols-3">
          <div className="w-full px-4 py-5 bg-white rounded-lg shadow">
            <div className="text-sm font-medium text-gray-500 truncate">
              Total users
            </div>
            <div className="mt-1 text-3xl font-semibold text-gray-900">
              12,00
            </div>
          </div>
          <div className="w-full px-4 py-5 bg-white rounded-lg shadow">
            <div className="text-sm font-medium text-gray-500 truncate">
              Total Profit
            </div>
            <div className="mt-1 text-3xl font-semibold text-gray-900">
              $ 450k
            </div>
          </div>
          <div className="w-full px-4 py-5 bg-white rounded-lg shadow">
            <div className="text-sm font-medium text-gray-500 truncate">
              Total Orders
            </div>
            <div className="mt-1 text-3xl font-semibold text-gray-900">20k</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderManagment;
