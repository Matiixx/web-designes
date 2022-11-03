import React from "react";

interface MainContentProps {
  isNavBarOpened: boolean;
}

export const MainContent: React.FC<MainContentProps> = ({ isNavBarOpened }) => {
  return (
    <main className={isNavBarOpened === true ? "navbar-opened " : ""}></main>
  );
};
