import { useContext } from "react";
import ThemeContext from "@/context/themeContext";
import { Bar } from "react-chartjs-2";

export const BarChart = ({ innerRef, chartData, timeframe }) => {
  const isDark = useContext(ThemeContext).theme;

  const gridColor = isDark ? "#413d49" : "#eaeaea";
  const tickColor = isDark ? "#9e90b9" : "#9e9e9e";
  const tooltipColor = isDark ? "#393d69" : "#090C2C";

  return (
    <div className="max-h-[289px] w-full relative max-[590px]:w-[510px]">
      <Bar
        ref={innerRef}
        data={chartData}
        height={800}
        // width={300}
        options={{
          responsive: true,
          maintainAspectRatio: false,
          transitions: {
            active: 400,
          },
          layout: {
            padding: {
              left: 0,
            },
          },
          scales: {
            x: {
              grid: {
                display: false,
              },
              border: {
                display: false,
              },
              ticks: {
                color: tickColor,
                font: {
                  family: "'Plus Jakarta Sans', 'Inter', 'sans-serif'",
                  size: 14,
                  weight: 600,
                  lineHeight: 1.6,
                },
              },
            },
            y: {
              grid: {
                color: gridColor,
                drawTicks: false,
              },
              border: {
                dash: [5, 2],
                display: false,
              },
              ticks: {
                color: tickColor,
                font: {
                  family: "'Plus Jakarta Sans', 'Inter', 'sans-serif'",
                  weight: 600,
                  lineHeight: 1.3,
                },
                callback: function (val) {
                  if (
                    val !== 5000 &&
                    val !== 50000 &&
                    this.getLabelForValue(val).includes("5")
                  ) {
                    return;
                  }
                  return "   " + this.getLabelForValue(val).replace(/,/g, ".");
                },
              },
              max: timeframe === "Weekly" ? 20000 : 50000,
            },
          },
          plugins: {
            legend: {
              display: false,
            },
            tooltip: {
              yAlign: "bottom",
              displayColors: false,
              padding: {
                x: 15,
                y: 4,
              },
              backgroundColor: tooltipColor,
              callbacks: {
                label: function (context) {
                  return ("$" + context.formattedValue).replace(/,/g, ".");
                },
                title: function () {
                  return "";
                },
              },
            },
          },
        }}
      />
    </div>
  );
};
