import React, { createRef, useState } from "react";
import { NavBarLink } from "./NavBarLink";

function scale(
  number: number,
  inMin: number,
  inMax: number,
  outMin: number,
  outMax: number
) {
  return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}

export default function NavBar({ isOpened }: { isOpened: boolean }) {
  const navBarWrapperRef = createRef<HTMLDivElement>();

  const [translate, setTranslate] = useState(0);

  let navBarWrapperStyle = {
    transform:
      isOpened === true
        ? `translateX(${translate}px) translateY(0) scale(1)`
        : "translateY(70%) scale(0.9)",
  };

  function handleMouseMove(e: any) {
    const fullNavBarWidth = navBarWrapperRef?.current?.scrollWidth || 0;
    const windowWidth = document.body.clientWidth;
    const mouseCoords = { x: e.clientX, y: e.clientY };
    const calcTranslate = scale(
      mouseCoords.x,
      0,
      windowWidth,
      -50,
      fullNavBarWidth - windowWidth + 50
    );
    setTranslate(-calcTranslate);
  }

  return (
    <nav
      className={isOpened === true ? "opened" : "closed"}
      onMouseMove={handleMouseMove}
    >
      <div
        className="navbar-wrapper"
        ref={navBarWrapperRef}
        style={navBarWrapperStyle}
      >
        <NavBarLink
          text="Join us"
          imageUrl="https://images.unsplash.com/photo-1667416542628-59ea3acda78f"
        />
        <NavBarLink
          text="Contact"
          imageUrl="https://images.unsplash.com/photo-1667397310500-ea7acb680dd1"
        />
        <NavBarLink
          text="About"
          imageUrl="https://images.unsplash.com/photo-1667339406244-24977ed6e1ca"
        />
        <NavBarLink
          text="Work"
          imageUrl="https://images.unsplash.com/photo-1667325688507-6e2e670bd140"
        />
        <NavBarLink
          text="Join us"
          imageUrl="https://images.unsplash.com/photo-1667401764371-0758e8cab928"
        />
      </div>
    </nav>
  );
}
