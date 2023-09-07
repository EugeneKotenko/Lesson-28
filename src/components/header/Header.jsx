import React from "react";
import MenuItem from "./MenuItem.jsx";
import "./header.scss";

const Header = () => {
  return (
    <header className="header">
      <MenuItem title="Головна" />
      <MenuItem title="Питання" />
      <MenuItem title="Матеріали" />
      <MenuItem title="Контакти" />
    </header>
  );
};

export default Header;
