import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar";
import Bell from "./icons/bell";
import Calendar from "./icons/calendar";
import Search from "./search";

import AlertMenu from "./alertMenu";
import ProfileDropdown from "./profileDropdown";

const Header = () => {
  return (
    <header className="w-full flex items-center gap-[22px] px-5 pt-[18px] pb-[17px] border-b border-b-headerBottom max-[390px]:gap-2">
      <div className="flex items-center justify-between w-full">
        <span className="flex my-[10px] font-semibold text-xl text-darkText">
          Dashboard
        </span>
        <Search />
      </div>

      <div className="flex gap-5 items-center max-[450px]:gap-2">
        <div className="flex gap-5 items-center max-[450px]:gap-2">
          <div className="flex items-center px-4 py-[9px] max-[1030px]:hidden">
            <div className="flex items-center gap-[10px]">
              <Calendar />
              <span className="whitespace-nowrap font-medium text-[14px] text-darkText font-inter">
                November 15, 2023
              </span>
            </div>
          </div>
          <AlertMenu>
            <Bell />
          </AlertMenu>
        </div>
        <ProfileDropdown>
          <div className="flex items-center gap-2 mb-[-1px] ml-[-3px]">
            <Avatar>
              <AvatarImage src="/assets/user_avatar.png" alt="Profile Avatar" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="flex flex-col gap-[5px] justify-center items-stretch max-[450px]:hidden">
              <span className="font-inter font-normal text-base leading-[19.36px] m-[-2px] text-darkText text-right">
                Justin Bergson
              </span>
              <span className="font-inter font-normal text-sm leading-[16.94px] mt-[2px] text-emailText text-right">
                Justin@gmail.com
              </span>
            </div>
          </div>

          <div className="flex items-center justify-center size-5">
            <svg
              width="14"
              height="8"
              viewBox="0 0 14 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.198412 0.206748C0.43891 -0.0438557 0.815252 -0.0666378 1.08045 0.138402L1.15643 0.206748L7 6.29553L12.8436 0.206748C13.0841 -0.0438557 13.4604 -0.0666378 13.7256 0.138402L13.8016 0.206748C14.0421 0.457352 14.064 0.849506 13.8672 1.12585L13.8016 1.20502L7.47901 7.79325C7.23851 8.04386 6.86217 8.06664 6.59697 7.8616L6.52099 7.79325L0.198412 1.20502C-0.0661372 0.929352 -0.0661372 0.482412 0.198412 0.206748Z"
                className="fill-darkestText"
              />
            </svg>
          </div>
        </ProfileDropdown>
      </div>
    </header>
  );
};

export default Header;
