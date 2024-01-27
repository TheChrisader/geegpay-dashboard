import { useRef, useEffect, useContext } from "react";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { useState } from "react";
import { weeklyData, monthlyData } from "./data.js";
import { BarChart } from "./barchart";
import ThemeContext from "@/context/themeContext";

Chart.register(CategoryScale);

export default function SalesChart({ timeframe }) {
  const chartRef = useRef(null);
  const isDark = useContext(ThemeContext).theme;
  const backgroundColor = isDark ? "#12eec94e" : "#34CAA51A";
  const hoverColor = isDark ? "rgba(29, 243, 190, 1)" : "rgba(52, 202, 165, 1)";
  const hoverFade = isDark ? "rgba(29, 243, 190, 0)" : "rgba(52, 202, 165, 0)";

  const getData = () => {
    if (timeframe === "Monthly") return monthlyData;

    return weeklyData;
  };

  const data = getData();

  const [chartData, setChartData] = useState({
    labels: data.map((data) => data.date),
    datasets: [
      {
        data: data.map((data) => data.gain),
        barThickness: 30,
        backgroundColor: backgroundColor,
        borderRadius: 50,
      },
    ],
  });

  useEffect(() => {
    setChartData({
      labels: data.map((data) => data.date),
      datasets: [
        {
          ...chartData.datasets[0],
          data: data.map((data) => data.gain),
        },
      ],
    });
  }, [timeframe]); //eslint-disable-line

  useEffect(() => {
    const chart = chartRef.current;

    setChartData({
      ...chartData,
      datasets: [
        {
          ...chartData.datasets[0],
          backgroundColor: (ctx) => {
            const grad = chart.ctx.createLinearGradient(0, 120, 0, 250);
            grad.addColorStop(0, hoverColor);
            grad.addColorStop(1, hoverFade);
            if (ctx.active) return grad;
            return backgroundColor;
          },
        },
      ],
    });
  }, []); //eslint-disable-line

  return (
    <div className="max-h-[289px] max-[590px]:overflow-x-auto max-[590px]:overflow-y-hidden scrollbar-change">
      <BarChart
        innerRef={chartRef}
        chartData={chartData}
        timeframe={timeframe}
      />
    </div>
  );
}
