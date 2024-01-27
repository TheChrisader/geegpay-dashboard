import { useEffect, useState } from "react";
import { Progress } from "../ui/progress";

const Ranking = ({ ranking, index }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setProgress(ranking?.progress);
    }, (index + 1) * 250);
    return () => clearTimeout(timer);
  });

  return (
    <div className="w-[452px] flex flex-col gap-5 max-[1417px]:w-[412px] max-[1400px]:w-[352px] max-[1000px]:w-full">
      <div className="flex flex-col">
        <span className="font-semibold text-lg leading-[26px] text-rankingTitle mb-[17px]">
          {ranking.title}
        </span>
        <Progress
          className="mb-[15px]"
          color={ranking.color}
          value={progress}
        />
        <div className="flex items-center justify-between">
          <span className="font-normal text-darkerThin text-lg leading-[26px] ">
            {ranking.amount}
          </span>
          <span className="font-normal text-darkerThin text-lg leading-[26px] ">
            +{ranking.percent}%
          </span>
        </div>
      </div>
    </div>
  );
};

export default Ranking;
