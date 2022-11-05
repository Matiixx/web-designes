import { createRef, useEffect } from "react";

function scale(
  number: number,
  inMin: number,
  inMax: number,
  outMin: number,
  outMax: number
) {
  return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}

export const Footer = () => {
  const footerRef = createRef<HTMLDivElement>();
  const footerBackgroundRef = createRef<HTMLDivElement>();

  const handleScrollFooter = (event: Event) => {
    const newRadius = scale(
      footerRef?.current?.getBoundingClientRect().top || 0,
      window.innerHeight * 0.1,
      window.innerHeight * 0.9,
      0,
      50
    );

    // footerBackgroundRef.current?.style.backgrounRad;
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScrollFooter);

    () => {
      window.removeEventListener("scroll", handleScrollFooter);
    };
  });

  return (
    <div className="footer-container" ref={footerRef}>
      <div className="footer-background-radius" ref={footerBackgroundRef}>
        <div className="footer-content">
          <h1>Sign up for our newsletter</h1>
        </div>
      </div>
    </div>
  );
};
