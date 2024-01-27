const SelectedLink = ({ style }) => {
  return (
    <div
      style={style}
      className={`w-[3px] h-[20px] bg-darkestText rounded-tl rounded-bl absolute transition-transform right-0 ease-spring duration-500`}
    ></div>
  );
  //   return (
  //     <svg
  //       width="3"
  //       height="21"
  //       viewBox="0 0 3 21"
  //       fill="none"
  //       xmlns="http://www.w3.org/2000/svg"
  //       className={`absolute transition-transform right-0 ease-spring duration-500`}
  //       style={style}
  //     >
  //       <path
  //         d="M6.53467e-06 3.02509C7.11773e-06 1.42129 1.40951 0.182713 3 0.388889V21C1.34315 21 4.88293e-07 19.6569 1.09063e-06 18L6.53467e-06 3.02509Z"
  //         fill="#0D062D"
  //       />
  //     </svg>
  //   );
};

export default SelectedLink;
