import React from "react";
import MenuButton from "./MenuButton";
import {
  HomeIcon,
  MailIcon,
  ListUnorderedIcon,
  PersonIcon,
  TriangleDownIcon
} from "@primer/octicons-react";

const Sidebar = () => {
  return (
    <div>
      <div className="mt-2">
        <MenuButton name="Home" icon={<HomeIcon />} />
      </div>
      <div className="mt-2">
        <MenuButton name="Messages" icon={<MailIcon />} />
      </div>
      <div className="mt-2">
        <MenuButton name="Lists" icon={<ListUnorderedIcon />} />
      </div>
      <div className="mt-2">
        <MenuButton name="Profile" icon={<PersonIcon />} />
      </div>
      <div className="mt-2">
        <MenuButton name="More" icon={<TriangleDownIcon />} />
      </div>
    </div>
  );
};

export default Sidebar;
