import Ranking from "./ranking";
import { rankings } from "./rankingsData";

const Rankings = () => {
  return (
    <section className="w-[488px] h-[542px] flex flex-col gap-5 px-5 py-[16px] bg-mainWhite rounded-[8px] max-[1417px]:w-[452px] max-[1400px]:w-fit max-[1000px]:w-full">
      <div className=" w-[452px] flex items-center justify-between max-[1417px]:w-[412px] max-[1400px]:w-[352px] max-[1000px]:w-full">
        <span className=" text-lg leading-[26px] font-semibold text-darkText ">
          Top Platform
        </span>
        <a
          href="#"
          className="font-medium text-mainGreen text-lg leading-[26px] text-center "
        >
          See All
        </a>
      </div>

      {rankings.map((ranking, i) => {
        return <Ranking key={ranking.key} index={i} ranking={ranking} />;
      })}
    </section>
  );
};

export default Rankings;
