import { useState } from "react";
import SalesChart from "./salesChart";
import TimeframeOptions from "./timeframeOptions";

const Sales = () => {
  const [timeframe, setTimeframe] = useState("Monthly");

  return (
    <section className="w-[807px] h-[374px] flex flex-col gap-4 px-5 py-4 bg-mainWhite rounded-[14px] border border-lightBorder max-[1400px]:w-full max-[1400px]:h-fit">
      <div className="flex w-[766px] m-[-2px] justify-between items-center max-[1400px]:w-full">
        <span className="font-semibold text-lg leading-[26px] text-darkText">
          Sales Trends
        </span>
        <div className="h-[37px] flex gap-[10px] items-center">
          <span className="font-medium text-sm text-darkerText m-[3px] leading-[22px]">
            Sort by:
          </span>
          <TimeframeOptions setDate={setTimeframe}>
            <span className="font-normal text-xs text-darkerText">
              {timeframe}
            </span>
            <svg
              width="20"
              height="21"
              viewBox="0 0 20 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mr-[-3px]"
            >
              <path
                d="M3.72456 7.14131C3.94645 6.91942 4.29367 6.89925 4.53835 7.0808L4.60845 7.14131L9.99984 12.5324L15.3912 7.14131C15.6131 6.91942 15.9603 6.89925 16.205 7.0808L16.2751 7.14131C16.497 7.3632 16.5172 7.71042 16.3356 7.9551L16.2751 8.02519L10.4418 13.8585C10.2199 14.0804 9.87267 14.1006 9.62799 13.919L9.5579 13.8585L3.72456 8.02519C3.48048 7.78112 3.48048 7.38539 3.72456 7.14131Z"
                className="fill-darkestText"
              />
            </svg>
          </TimeframeOptions>
        </div>
      </div>
      <SalesChart timeframe={timeframe} />
    </section>
  );
};

export default Sales;
