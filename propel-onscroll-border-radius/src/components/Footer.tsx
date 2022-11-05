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
    if (footerRef.current && footerBackgroundRef.current) {
      const newRadius = scale(
        footerRef.current.getBoundingClientRect().top < window.innerHeight &&
          footerRef.current.getBoundingClientRect().top >= 0
          ? footerRef.current.getBoundingClientRect().top
          : 0,
        window.innerHeight * 0.1,
        window.innerHeight * 0.9,
        0,
        50
      );
      footerBackgroundRef.current.style.borderRadius = `${newRadius}% ${newRadius}% 0 0`;
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScrollFooter);

    return () => {
      window.removeEventListener("scroll", handleScrollFooter);
    };
  });

  return (
    <div className="footer-container" ref={footerRef}>
      <div className="footer-background-radius" ref={footerBackgroundRef}>
        <div className="footer-content">
          <h1>Sign up for our newsletter</h1>
          <form onSubmit={(e) => e.preventDefault()}>
            <input className="input-email" type="email" placeholder="Email" />
            <input className="submit-btn" type="submit" value="Submit" />
          </form>
          <div className="footer-nav">
            <div>
              <h3>Discover</h3>
              <a>Careers</a>
              <a>News</a>
              <a>Outboard motor</a>
              <a>Inboard motor</a>
            </div>
            <div>
              <h3>Propel</h3>
              <a>About</a>
              <a>Contact</a>
              <a>Support</a>
              <a>Media</a>
            </div>
            <div>
              <h3>Social</h3>
              <a>Instagram</a>
              <a>Twitter</a>
              <a>LinkedIn</a>
            </div>
            <div>
              <h3>Legal</h3>
              <a>Cookie notice</a>
              <a>Privacy policy</a>
              <a>Terms of service</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
