import React, { useMemo, useState } from "react";
import StarIcon from "@mui/icons-material/Star";
import ArrowIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LogoutIcon from "@mui/icons-material/PowerSettingsNew";
import classNames from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";

const menuItems = [
  { id: 1, label: "Home", icon: HomeIcon, link: "/" },
  { id: 2, label: "Information", icon: InfoIcon, link: "/info" },
  { id: 3, label: "Facebook", icon: FacebookIcon, link: "/fb" },
  { id: 4, label: "Github", icon: GitHubIcon, link: "/github" },
  { id: 45, label: "LinkedIn", icon: LinkedInIcon, link: "/linkedin" },
];

const Sidebar = () => {
  const [toggle, setToggle] = useState(false);
  const [isCollapse, setIsCollpase] = useState(false);
  const router = useRouter();

  const activeMenu = useMemo(
    () => menuItems.find((menu) => menu.link === router.pathname),
    [router.pathname]
  );

  const wrapperClass = classNames(
    "h-screen px-4 pt-8 pb-4 bg-[#F3F4F6] flex justify-between flex-col",
    {
      ["w-80"]: !toggle,
      ["w-20"]: toggle,
    }
  );

  const getNavItemClasses = (menu) => {
    return classNames(
      "flex items-center cursor-pointer hover:bg-light-lighter rounded w-full overflow-hidden whitespace-nowrap",
      {
        ["bg-gray-300"]: activeMenu.id === menu.id,
      }
    );
  };

  const onMouseOver = () => {
    setIsCollpase(true);
  };

  const onMouseleave = () => {
    setIsCollpase(false);
  };

  const handleSidebartoggle = () => {
    setToggle(!toggle);
  };
  return (
    <div
      className={wrapperClass}
      onMouseEnter={onMouseOver}
      onMouseLeave={onMouseleave}
      style={{ transition: "width 300ms cubic-bezier(0.2, 0, 0, 1) 0s" }}
    >
      <div className="flex flex-col">
        <div className="flex items-center justify-between relative">
          <div className="flex items-center justify-center pl-1 gap-4">
            <StarIcon className="w-8 h-8" />
            <span
              className={classNames("text-lg font-medium text-center", {
                "hidden ": toggle,
              })}
            >
              Karthik
            </span>
          </div>
          {isCollapse && (
            <button
              className={classNames(
                "p-3 rounded bg-light-lighter absolute right-0 bg-slate-200",
                { "rotate-180": toggle }
              )}
              onClick={handleSidebartoggle}
            >
              <ArrowIcon />
            </button>
          )}
        </div>
        <div className="flex flex-col items-start mt-24">
          {menuItems.map(({ icon: Icon, ...menu }) => {
            const classes = getNavItemClasses(menu);
            return (
              <div className={classes} key={menu.id}>
                <Link
                  href={menu.link}
                  className="flex py-4 px-3 items-center w-full h-full"
                >
                  <div style={{ width: "2.5rem" }}>
                    <Icon />
                  </div>
                  {!toggle && (
                    <span
                      className={classNames(
                        "text-md font-medium text-text-light"
                      )}
                    >
                      {menu.label}
                    </span>
                  )}
                </Link>
              </div>
            );
          })}
        </div>
      </div>
      <div className={`${getNavItemClasses({})} px-3 py-4`}>
        <div style={{ width: "2.5rem" }}>
          <LogoutIcon />
        </div>
        {!toggle && (
          <span className={classNames("text-md font-medium text-text-light")}>
            Logout
          </span>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
