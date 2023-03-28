import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import Pagination from "../../components/pagination";
import Button from "../../components/button";
import SearchField from "../../components/search-field";
import HeaderManagment from "../../layout/header-managment";
import Statistics from "../../layout/Statistics";
import { fetchproducts } from "../../states/slices/productsSlice";
import ProductsTable from "../../components/products-table";
import { fetchCategory } from "../../states/slices/categorySlice";

function ProductManagment() {
  const products = useSelector((store) => store.products);
  const productsCount = useSelector((store) => store.products.data.count);
  const dispatch = useDispatch();

  const category = useSelector((store)=>store.category)

  const [active, setActive] = useState("1");

  const [paginationParams, setPaginationParams] = useSearchParams({
    _page: 1,
    _limit: 5,
  });

  const [searchParams, setSearchParams] = useState("");

  useEffect(() => {
    dispatch(fetchproducts(paginationParams));
  }, []);

  useEffect(() => {
    dispatch(fetchCategory());
  }, []);


  const searchHandler = (e) => {
    setSearchParams(e.target.value);
  };

  return (
    <div className="flex">
      <HeaderManagment />
      <div className="flex flex-col flex-1 mx-5 gap-5">
        <Statistics />
        <div className="flex justify-between">
          <SearchField
            className="p-1 w-96 text-sm bg-transparent outline-0"
            placeholder="جستجو ..."
            // searchParams={searchParams}
            // setSearchParams = {setSearchParams}
            onchange={searchHandler}
          />
          <Button
            type="submit"
            className="group relative flex w-full justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            افزودن کالا
          </Button>
        </div>
        {products.status === "success" ? (
          <ProductsTable
            tbodyData={products.data.productsData}
            categoryData={category.data.categoryData}
            
            // searchParams={searchParams}
          />
        ) : (
          ""
        )}
        <Pagination
          params={paginationParams}
          count={productsCount}
          active={active}
          setActive={setActive}
        />
      </div>
    </div>
  );
}

export default ProductManagment;
