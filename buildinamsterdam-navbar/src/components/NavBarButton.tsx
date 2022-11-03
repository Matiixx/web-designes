import React from "react";

interface NavBarButtonProps {
  toggleNavBar: React.Dispatch<React.SetStateAction<boolean>>;
}

const NavBarButton: React.FC<NavBarButtonProps> = ({ toggleNavBar }) => {
  return (
    <button
      id="nav-toggle"
      onClick={() => toggleNavBar((value) => !value)}
    ></button>
  );
};

export default NavBarButton;
