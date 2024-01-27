import { useEffect, useState } from "react";
import Orders from "../orders";
import Rankings from "../rankings";
import Reports from "../reports";
import Sales from "../sales";
import useMediaQuery from "@/hooks/useMediaQuery";

const Main = () => {
  const shouldCollapse = useMediaQuery("(max-width: 1180px)");
  const [barWidth, setBarWidth] = useState("");

  useEffect(() => {
    if (shouldCollapse) {
      setBarWidth(0);
    } else {
      setBarWidth(80);
    }
  }, [shouldCollapse]);

  return (
    <main
      className="p-5 max-w-[1440px] flex flex-col mx-auto gap-5 overflow-auto scrollbar-change"
      style={{
        width: `calc(100vw - ${barWidth}px)`,
        height: `calc(100vh - 90px)`,
      }}
    >
      <div className="flex gap-5 max-[1400px]:flex-col">
        <Sales />
        <Reports />
      </div>
      <div className="flex gap-[26px] max-[1000px]:flex-col">
        <Orders />
        <Rankings />
      </div>
    </main>
  );
};

export default Main;
