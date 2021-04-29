import React, { useState, useEffect } from "react";

const Sidebar = (props) => {
  const Datetime = new Date();

  const [selectorone, setselectorone] = useState(false);
  const [selectortwo, setselectortwo] = useState(false);

  const get_date = (date) => {
    var yyyy = date.getFullYear().toString();
    var mm = (date.getMonth() + 1).toString();
    var dd = date.getDate().toString();
    var mmChars = mm.split("");
    var ddChars = dd.split("");
    return (
      yyyy +
      "-" +
      (mmChars[1] ? mm : "0" + mmChars[0]) +
      "-" +
      (ddChars[1] ? dd : "0" + ddChars[0])
    );
  };

  return (
    <>
      <div class="md:overflow-x-hidden overflow-x-scroll   w-full md:scale-100 mt-10 flex md:flex-col flex-row md:gap-0 gap-5">
        <div class="shadow-custom w-100 px-4  py-3  bg-white rounded-md ">
          <div class=" flex flex-grow md:flex-row flex-col items-center justify-between">
            <span class="text-md font-bold text-gray-800 dark:text-gray-400 ">
              Total Balance
            </span>
            <span
              onClick={() => {
                setselectorone(!selectorone);
              }}
              class=" px-4 py-2 text-xs text-white text-opacity-70 text-thin uppercase color rounded-xl dark:bg-indigo-300 dark:text-indigo-900"
            >
              <span className={selectorone ? "text-white font-bold" : ""}>
                USD
              </span>{" "}
              |
              <span className={!selectorone ? "text-white font-bold" : ""}>
                {" "}
                ETH
              </span>
            </span>
          </div>
          <span class="text-xs font-light text-gray-400 font-medium dark:text-gray-300">
            Today {get_date(Datetime)}
          </span>
          <div class="flex text-center md:mb-5 mx-5 text-2xl">
            {!selectorone &&
              (props.isConnected ? (
                <p class="flex-shrink mt-4 text-gray-600 dark:text-gray-300 font-bold">
                  Ξ {props.balance} Eth
                </p>
              ) : (
                <p class="font-medium text-lg text-center my-8 text-gray-300">
                  Please Connect Wallet
                </p>
              ))}
            {selectorone &&
              (props.isConnected ? (
                <p class="flex-shrink mt-4 text-gray-600 dark:text-gray-300 font-bold">
                  Ξ {props.balance} $
                </p>
              ) : (
                <p class="font-medium text-lg text-center my-8 text-gray-300">
                  Please Connect Wallet
                </p>
              ))}
          </div>
        </div>
        <div class="w-100 px-4  py-3  bg-white rounded-md shadow-custom ">
          <div class="flex md:flex-row flex-col items-center justify-between">
            <span class="text-md font-bold text-gray-800 dark:text-gray-400">
              Other Balance
            </span>
            <span
              onClick={() => {
                setselectortwo(!selectortwo);
              }}
              class="px-4 py-2 text-xs  text-white font-thin text-opacity-70 uppercase color rounded-xl dark:bg-indigo-300 dark:text-indigo-900"
            >
              <span className={selectortwo ? "text-white font-bold" : ""}>
                USD
              </span>{" "}
              |
              <span className={!selectortwo ? "text-white font-bold" : ""}>
                {" "}
                ETH
              </span>
            </span>
          </div>
          <span class="text-xs font-light text-gray-400 font-medium dark:text-gray-300">
            Today {get_date(Datetime)}
          </span>
          <div></div>

          <div>
            <div class="flex flex-col mx-0 mt-5 text-gray-700 dark:text-gray-200">
              <div className="my-2">
                <span className=" text-lg font-bold "> Mainnet</span>
                <div className=" text-sm">
                  {" "}
                  20.00232{" "}
                  <span className="text-primary font-medium">
                    (51.4 pending)
                  </span>{" "}
                </div>
              </div>
              <div className="my-2 md:block hidden ">
                <span className=" text-lg font-bold "> Mainnet</span>
                <div className=" text-sm">
                  {" "}
                  20.00232{" "}
                  <span className="text-primary font-medium">
                    (51.4 pending)
                  </span>{" "}
                </div>
              </div>
              <div className="my-2 md:block hidden">
                <span className=" text-lg font-bold "> Mainnet</span>
                <div className=" text-sm">
                  {" "}
                  20.00232{" "}
                  <span className="text-primary font-medium">
                    (51.4 pending)
                  </span>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;

// max-w-sm h-full mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800
