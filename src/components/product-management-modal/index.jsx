import React, { useState } from "react";
import Button from "../button";
import TextField from "../text-field";

export default function ProductManagementModal({ showModal, setShowModal }) {
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
            <div className="relative w-auto my-6 mx-auto w-1/2">
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
                <div className="relative p-6 flex-auto">
                  <form
                    className=" mt-8 space-y-6 flex flex-col "
                    // onSubmit={handelSubmit}
                    action="#"
                    method="POST"
                  >
                    <TextField
                      id="email-address"
                      lable="نام کاربری"
                      name="email"
                      type="text"
                      autoComplete="email"
                      required
                      className="relative block w-full rounded-md border-0 p-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      placeholder=""
                      //   onchange={usernameHandler}
                    />
                    <TextField
                      id="password"
                      lable="رمز عبور"
                      name="password"
                      type="password"
                      autoComplete="current-password"
                      required
                      className="relative block w-full rounded-md border-0 p-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      placeholder=""
                      //   onchange={passwordHandler}
                    />

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
