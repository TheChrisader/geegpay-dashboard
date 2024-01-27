import TrendUp from "./icon/trendUp";
import TrendDown from "./icon/trendDown";

const Report = ({ report }) => {
  return (
    <div className="w-[239px] min-w-[200px] max-[1400px]:min-w-[140px] max-[1300px]:min-w-[200px] flex-1 h-[179px] bg-mainWhite p-4 outline outline-1 outline-lightBorder rounded-[14px]">
      <div className="flex flex-col gap-[10px]">
        <div className="flex items-center -mt-[2px] -mr-[2px] justify-between">
          <report.Icon />
          <report.Trend />
        </div>
        <div className="flex flex-col gap-[5px] ">
          <span className="font-medium text-lg leading-[26px] text-reportTitle">
            {report.title}
          </span>
          <span className="font-semibold text-2xl text-darkerText">
            {report.total}
          </span>
        </div>
        <div className="flex gap-[10px] items-center max-[450px]:justify-between">
          <div
            className="flex gap-1 items-center py-1 px-2 rounded-full"
            style={{
              backgroundColor:
                report.outlook === "positive" ? "#34CAA51F" : "#ED544E1F",
            }}
          >
            {report.outlook === "positive" ? <TrendUp /> : <TrendDown />}
            <span
              className="text-xs font-medium"
              style={{
                color: report.outlook === "positive" ? "#34CAA5" : "#ED544E",
              }}
            >
              23,5%
            </span>
          </div>
          <span
            className={`font-inter font-normal text-sm leading-[16.94px] text-reportMonth whitespace-nowrap max-[1415px]:whitespace-normal max-[1345px]:-mt-3 max-[1300px]:-mt-0`}
          >
            vs. previous month
          </span>
        </div>
      </div>
    </div>
  );
};

export default Report;
