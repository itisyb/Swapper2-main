import React, { useState, useEffect } from "react";
import Sidebar from "./panels/sidebar";
import Sidebar2 from "./panels/sidebar2";
import Tables from "./panels/Tables";
import "./panels/sidebar.css";
import CardScroll from "./Cards";
const Page = (props) => {
  return (
    <>
      <div className="w-auto mx-300xl">
        <div className="md:grid md:grid-cols-2 md:mt-20">
          <div className=" md:block hidden">
            <Sidebar isConnected={props.isConnected} balance={props.balance} />
          </div>
          <div className="md:hidden block overflow-x-scroll flex flex-row mt-10">
            <CardScroll
              title={"Total Balance"}
              isConnected={props.isConnected}
              balance={props.balance}
            />
            <CardScroll
              title={"Other Balance"}
              isConnected={props.isConnected}
              balance={props.balance}
            />
            <CardScroll
              title={"Other Balance"}
              isConnected={props.isConnected}
              balance={props.balance}
            />
          </div>
          <Sidebar2 />
        </div>
        <div className="my-20 w-100 py-8 container rounded-lg shadow-custom dark:bg-gray-800">
          <div className="px-8">
            <div className=" flex justify-left ">
              <span className="font-medium text-left text-lg mb-2">
                Transaction
              </span>
            </div>
            <div className=" pb-3">
              <Tables walletAddress={props.walletAddress} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
