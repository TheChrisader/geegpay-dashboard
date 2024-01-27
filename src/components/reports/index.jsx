import BoxRotate from "./icon/boxRotate";
import BoxTick from "./icon/boxTick";
import Cart from "./icon/cart";
import Coin from "./icon/coin";
import OrderTrend from "./icon/orderTrend";
import RefundTrend from "./icon/refundTrend";
import Report from "./report";

const reports = [
  {
    key: "ergyt63",
    Icon: BoxTick,
    Trend: OrderTrend,
    title: "Total Order",
    total: 350,
    outlook: "positive",
  },
  {
    key: "fv4t68s",
    Icon: BoxRotate,
    Trend: RefundTrend,
    title: "Total Refund",
    total: 270,
    outlook: "negative",
  },
  {
    key: "hdt56sl",
    Icon: Cart,
    Trend: RefundTrend,
    title: "Average Sales",
    total: 1567,
    outlook: "negative",
  },
  {
    key: "jujutsu",
    Icon: Coin,
    Trend: OrderTrend,
    title: "Total Income",
    total: "$350.000",
    outlook: "positive",
  },
];

const Reports = () => {
  return (
    <section className="flex flex-wrap gap-4 max-w-[488px] max-[1400px]:max-w-none">
      {reports.map((report) => {
        return <Report key={report.key} report={report} />;
      })}
    </section>
  );
};

export default Reports;
