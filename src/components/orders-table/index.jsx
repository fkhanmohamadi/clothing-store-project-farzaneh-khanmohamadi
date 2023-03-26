import React from "react";

function OrdersTable({tbodyData}) {
  return (
    <div>
      <div className="flex flex-col">
        <div className="overflow-x-auto">
          <div className="p-1.5 w-full inline-block align-middle">
            <div className="overflow-hidden border rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                <tr>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-xs text-right font-bold text-left text-gray-500 uppercase "
                                    >
                                        ردیف
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-xs text-right font-bold text-left text-gray-500 uppercase "
                                    >
                                        نام کاربر
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-xs text-right font-bold text-left text-gray-500 uppercase "
                                    >
                                        مجموع مبلغ
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-xs text-right font-bold text-left text-gray-500 uppercase "
                                    >
                                        زمان ثبت سفارش
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                                    >
                                        بررسی سفارش
                                    </th>
                                </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {tbodyData.map((row, index) => {
                    return (
                      <tr key={index}>
                        <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                                        {row.id}
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                    {row.firstname + ' '+ row.lastname}
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                    {row.totalPrice}
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                    {new Intl.DateTimeFormat('fa-IR').format(row.createdAt)}
                                    </td>                               
                                    <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                                        <a
                                            className="text-green-500 hover:text-green-700"
                                            href="#"
                                        >
                                            ویرایش سفارش
                                        </a>
                                    </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrdersTable;
