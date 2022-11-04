import React from "react";

interface NavBarLinkProps {
  text: string;
  imageUrl?: string;
}

export const NavBarLink: React.FC<NavBarLinkProps> = ({
  text,
  imageUrl = "https://images.unsplash.com/photo-1667416542628-59ea3acda78f",
}) => {
  return (
    <a className="nav-link">
      <h3>{text}</h3>
      <div className="image-container">
        <div className="background-scaling-container">
          <img src={imageUrl} />
        </div>
      </div>
    </a>
  );
};
