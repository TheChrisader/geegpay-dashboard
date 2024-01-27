import OrderTable from "./orderTable";

const Orders = () => {
  return (
    <section className="w-[806px] h-[422px] bg-mainWhite flex flex-col gap-[14px] px-5 py-[18px] rounded-[14px] outline outline-1 outline-lightBorder max-[1400px]:flex-1 max-[1400px]:h-fit max-[1400px]:w-full ">
      <div className=" w-[766px] flex items-center justify-between max-[1400px]:w-full ">
        <span className=" text-lg leading-[26px] font-semibold text-darkText ">
          Last Orders
        </span>
        <a
          href="#"
          className="font-medium text-mainGreen text-lg leading-[26px] text-center "
        >
          See All
        </a>
      </div>
      <OrderTable />
    </section>
  );
};

export default Orders;
