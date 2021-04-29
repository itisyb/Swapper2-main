import React from "react";

const sidebar2 = () => {
  return (
    <>
      <div className="">
        <div class="max-w-100  h-full  overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
          <div className="mt-20 text-center mx-10 mt-5 mb-2 rounded-2xl">
            <div>
              <form>
                <fieldset
                  className="border-1 rounded-md h-12"
                  style={{ "border-color": "#5A46D6" }}
                >
                  <legend className="text-left text-sm font-medium">
                    From
                  </legend>

                  <div class="border-2  w-full h-100 border-0 group focus:border-red-500 wrapper">
                    <select
                      id="to-list"
                      className="outline-none w-full border-0 bg-white h-full group-focus:text-yellow-300"
                    >
                      <option value="A">A</option>
                      <option value="B">B</option>
                      <option value="C">C</option>
                    </select>
                  </div>
                </fieldset>
              </form>
            </div>
          </div>
          <div className="text-center">
            <svg
              width="8"
              height="20"
              viewBox="0 0 8 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="4.33772"
                y1="14.3223"
                x2="4.33772"
                y2="0.582697"
                stroke="#5A46D6"
                stroke-width="1.19175"
              />
              <path
                d="M4.44258 19.8763C4.39632 19.9536 4.28431 19.9536 4.23805 19.8763L0.851355 14.2164C0.803823 14.137 0.861049 14.0361 0.953619 14.0361L7.72702 14.0361C7.81959 14.0361 7.87682 14.137 7.82928 14.2164L4.44258 19.8763Z"
                fill="#5A46D6"
              />
            </svg>
            <svg
              width="8"
              height="21"
              viewBox="0 0 8 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="3.84978"
                y1="6.30759"
                x2="3.84978"
                y2="20.0472"
                stroke="#5A46D6"
                stroke-width="1.19175"
              />
              <path
                d="M3.74492 0.753729C3.79118 0.67642 3.90319 0.67642 3.94945 0.753729L7.33615 6.41354C7.38368 6.49298 7.32645 6.59391 7.23388 6.59391L0.46048 6.59391C0.36791 6.59391 0.310683 6.49298 0.358216 6.41354L3.74492 0.753729Z"
                fill="#5A46D6"
              />
            </svg>
          </div>
          <div className="text-center mx-10 rounded-2xl">
            <form>
              <fieldset
                className="border-1 rounded-md h-12"
                style={{ "border-color": "#5A46D6" }}
              >
                <legend className="text-left font-medium  text-sm">To</legend>

                <div class="border-2  w-full h-full border-0 group focus:border-red-500 wrapper">
                  <select
                    id="to-list"
                    className="outline-none w-full border-0 bg-white h-full group-focus:text-yellow-300"
                  >
                    <option value="A">A</option>
                    <option value="B">B</option>
                    <option value="C">C</option>
                  </select>
                </div>
              </fieldset>
            </form>
          </div>

          <div className="text-center  mx-10 ml-11 my-10 rounded-xl">
            <div className="absolute   text-sm -mt-2 ml-3 font-medium bg-white z-10 ">
              Amount
            </div>
            <div class="overflow-hidden  h-12  flex  outline-none">
              <input
                type="text"
                class="px-4 py-2 rounded-l-lg"
                placeholder="Enter the Amount"
                style={{ "border-color": "#5A46D6" }}
              />
              <button class="border-transparent flex w-full items-center justify-center px-4  rounded-r-lg b color text-white font-bold text-lg">
                <span>Swap</span>
              </button>
            </div>
          </div>
          <div className="text-center mx-auto my-10">
            <span className="text-sm text-center">
              Estimated time for completion: 6 cycles
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default sidebar2;

// display: flex;
// flex-direction: column;
// align-items: flex-start;
// padding: 0px 0px 0px 9.53398px;

// position: absolute;
// width: 357px;
// height: 69px;
// left: 727px;
// top: 499.65px;

// border: 2px solid #5A46D6;
// box-sizing: border-box;
// border-radius: 8px;
