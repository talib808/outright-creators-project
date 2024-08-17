
import React, { useEffect, useRef, useState } from "react";
import "./pagetwo.css";

function Pagetwo() {
  const imageRef = useRef(null);
  const [scrollDirection, setScrollDirection] = useState(null);
  const lastScrollTop = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop = window.scrollY;
      if (currentScrollTop > lastScrollTop.current) {
       
        setScrollDirection("down");
      } else if (currentScrollTop < lastScrollTop.current) {
       
        setScrollDirection("up");
      }
      lastScrollTop.current = currentScrollTop;
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="pageone">
        <div className="navbar">
          <div className="nav-left">
            <a href="#home">HOME</a>
            <a href="#about">ABOUT</a>
            <a href="#gallery">GALLERY</a>
            <a href="#menu">MENU</a>
            <a href="#contact">CONTACT</a>
          </div>
          <div className="nav-right">
            <a href="#logo">I CARE YOU</a>
          </div>
        </div>
        <div className="main-content">
          <h1 className="h1">
            TAKE CARE OF <br /> YOUR &nbsp; &nbsp; &nbsp; SKIN
            <img
              src="https://png.pngtree.com/png-clipart/20211116/original/pngtree-cosmetic-lotion-mockup-png-image_6934675.png"
              alt="product"
              className={`main-image ${scrollDirection === 'down' ? 'hide' : ''}`}
              ref={imageRef}
            />
          </h1>
        </div>
      </div>
    </>
  );
}

export default Pagetwo;
