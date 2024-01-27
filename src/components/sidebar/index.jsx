import Submenu from "./submenu";
import ArrowRight from "./icons/arrowRight";
import Category from "./icons/category";
import Logo from "./icons/logo";
import Settings from "./icons/settings";
import Logout from "./icons/logout";
import TrendUp from "./icons/trendUp";
import Profile from "./icons/profile";
import Box from "./icons/box";
import Discount from "./icons/discount";
import Info from "./icons/info";
import { Switch } from "../ui/switch";
import { Button } from "../ui/button";
import SelectedLink from "./icons/selectedLink";
import { useState, useEffect } from "react";
import useMediaQuery from "@/hooks/useMediaQuery";

Switch.display = "Switch";
const mainMenu = [Category, TrendUp, Profile, Box, Discount, Info, Switch];

ArrowRight.action = "collapse";
Settings.action = "settings";
Logout.action = "logout";
const subMenu = [ArrowRight, Settings, Logout];

const Sidebar = ({ toggle }) => {
  const [coordinate, setCoordinate] = useState(84.5);
  const [collapsed, setCollapsed] = useState(false);

  const shouldCollapse = useMediaQuery("(max-width: 1180px)");

  const handleClickOutside = (e) => {
    const click = e.clientX;
    if (click > 80) {
      setCollapsed(true);
    }
  };

  useEffect(() => {
    if (shouldCollapse) {
      setCollapsed(true);
    } else {
      setCollapsed(false);
    }
  }, [shouldCollapse]);

  return (
    <>
      <Button
        size="unstyled"
        variant="unstyled"
        style={{ display: `${collapsed ? "block" : "none"}` }}
        className="absolute -left-10 top-[70px] transition-[left] cursor-pointer hover:-left-5 bob-about hover:animate-none"
      >
        <Logo
          role="button"
          onClick={() => {
            setCollapsed(false);
          }}
        />
      </Button>
      <nav
        onClick={(e) => {
          handleClickOutside(e);
        }}
        className={`${
          collapsed ? "hide" : "show"
        } w-[80px] max-h-[876px] h-screen border-r flex flex-col justify-between pt-5 pb-[22px] border-sidebarBorder bg-sidebar max-[1400px]:h-screen max-[1180px]:sticky max-[1180px]:top-0 max-[1180px]:z-20 max-[1180px]:overlay-screen`}
      >
        <div className="relative flex flex-col gap-5">
          <Button
            variant="unstyled"
            size="unstyled"
            onClick={() => {
              setCollapsed(!collapsed);
            }}
          >
            <Logo />
          </Button>

          <SelectedLink
            style={{ transform: `translateY(${coordinate - 14.5}px)` }}
          />
          <Submenu
            icons={mainMenu}
            toggle={toggle}
            link
            selectLink={setCoordinate}
          />
        </div>
        <Submenu setCollapsed={setCollapsed} icons={subMenu} />
      </nav>
    </>
  );
};

export default Sidebar;
