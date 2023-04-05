import React, { useState } from "react";
import Button from "../button";
import TextField from "../text-field";
import FileField from "../file-field";
import OptionField from "../dropdown";

export default function ProductManagementModal({
  showModal,
  setShowModal,
  categoryData,
  subcategoryData,
}) {
  // const handelSubmit = async (e) => {
  //     e.preventDefault();
  //     try{
  //       const result = await loginService(loginData)
  //        Cookies.set("token",result.accessToken)
  //        navigate('/ordersmanagment')
  //     }catch(error){
  //       console.log(error)
  //     }

  //   };

  return (
    <>
      {showModal ? (
        <>
          <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="w-1/2 relative my-6 mx-auto">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-center justify-between py-2 px-4 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-l ">افزودن/ویرایش کالا</h3>
                  <Button
                    className="p-1 border-0 text-red-500 text-xl"
                    onclick={() => setShowModal(false)}
                  >
                    x
                  </Button>
                </div>
                {/*body*/}
                <div className="relative px-6 py-4 flex-auto">
                  <form
                    className=" mt-2 space-y-6 flex flex-col "
                    // onSubmit={handelSubmit}
                    action="#"
                    method="POST"
                  >
                    <TextField
                      id="Product-name"
                      lable="نام کالا"
                      name="Product-name"
                      type="text"
                      required
                      className="relative block w-full rounded-md border-0 p-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      placeholder=""
                      //   onchange={usernameHandler}
                    />
                    <div className="flex justify-between">
                      <FileField
                        id="product-thumbnail"
                        lable="تصویر کالا"
                        name="product-thumbnail"
                        //   onchange={passwordHandler}
                      />
                      <FileField
                        id="product-img"
                        lable="سایر تصاویر کالا"
                        name="product-img"
                        //   onchange={passwordHandler}
                      />
                    </div>
                    <div className="w-full flex justify-between">
                      <TextField
                        id="Product-price"
                        lable="قیمت کالا"
                        name="Product-price"
                        type="text"
                        required
                        className="relative block rounded-md border-0 p-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        placeholder=""
                        //   onchange={usernameHandler}
                      />
                      <TextField
                        id="Product-quantity"
                        lable="تعداد کالا"
                        name="Product-quantity"
                        type="text"
                        required
                        className="relative block rounded-md border-0 p-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        placeholder=""
                        //   onchange={usernameHandler}
                      />
                    </div>
                    <div className="flex justify-between">
                      <div className="flex flex-col">
                        <label htmlFor="product-brand">برند کالا</label>
                        <select id="product-brand" name="product-brand">
                          <OptionField value={1}>1</OptionField>
                          <OptionField value={2}>2</OptionField>
                          <OptionField value={3}>3</OptionField>
                        </select>
                      </div>
                      <div className="flex flex-col">
                        <label htmlFor="product-category">دسته بندی کالا</label>
                        <select id="product-category" name="product-category">
                          {categoryData.map((row, index) => {
                            return <OptionField value={row.id}>{row.name}</OptionField>;
                          })}
                        </select>
                      </div>
                      <div className="flex flex-col">
                        <label htmlFor="product-subcategory">
                          زیر دسته بندی کالا
                        </label>
                        <select
                          id="product-subcategory"
                          name="product-subcategory"
                        >
                          {subcategoryData.map((row, index) => {
                            return <OptionField value={row.id}>{row.name}</OptionField>;
                          })}
                        </select>
                      </div>
                    </div>

                    <div>
                      <Button
                        type="submit"
                        className="group relative flex w-full justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        onclick={() => setShowModal(false)}
                      >
                        ذخیره
                      </Button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
