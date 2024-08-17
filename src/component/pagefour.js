// import React from "react";
// import "./pagefour.css";

// function Pagefour() {
//   return (
//     <>
//       <div className="pagetwo">
//         <div className="product-container">
//           <div className="product-card">
//             <img
//               src="https://png.pngtree.com/png-clipart/20211116/original/pngtree-cosmetic-lotion-mockup-png-image_6945018.png"
//               alt="RADIANCE SERUM"
//               className="product-image"
//             />
//             <div className="product-info">
//               <h1 className="product-name">RADIANCE SERUM</h1>
//               <button className="order-button">ORDER NOW</button>
//               <a href="#learnmore" className="learn-more">Learn More</a>
//             </div>
//           </div>
//           <div className="product-card">
//             <img
//               src="https://png.pngtree.com/png-clipart/20211116/original/pngtree-cosmetic-lotion-mockup-png-image_6934675.png"
//               alt="ANTI-AGING DUO"
//               className="product-image"
//             />
//             <div className="product-info">
//               <span className="best-buy">BEST BUY</span>
//               <h1 className="product-name">ANTI-AGING DUO</h1>
//               <button className="order-button">ORDER NOW</button>
//               <a href="#learnmore" className="learn-more">Learn More</a>
//             </div>
//           </div>
//           <div className="product-card">
//             <img
//               src="https://png.pngtree.com/png-clipart/20211116/original/pngtree-cosmetic-lotion-mockup-png-image_6945018.png"
//               alt="RESURFACING SERUM"
//               className="product-image"
//             />
//             <div className="product-info">
//               <h1 className="product-name">RESURFACING SERUM</h1>
//               <button className="order-button">ORDER NOW</button>
//               <a href="#learnmore" className="learn-more">Learn More</a>
//             </div>
//           </div>
//           <div className="product-card">
//             <img
//               src="https://www.ynsmedspa.com/testing1/wp-content/uploads/2016/09/Group3.png"
//               alt="RADIANCE SERUM"
//               className="product-image"
//             />
//             <div className="product-info">
//               <h1 className="product-name">RADIANCE SERUM</h1>
//               <button className="order-button">ORDER NOW</button>
//               <a href="#learnmore" className="learn-more">Learn More</a>
//             </div>
//           </div>
//           <div className="product-card">
//             <img
//               src="https://gallery.yopriceville.com/var/resizes/Free-Clipart-Pictures/Cosmetic-PNG/Cosmetic_Cream_PNG_Clipart_Picture.png?m=1507172109"
//               alt="ANTI-AGING DUO"
//               className="product-image"
//             />
//             <div className="product-info">
//               <span className="best-buy">BEST BUY</span>
//               <h1 className="product-name">ANTI-AGING DUO</h1>
//               <button className="order-button">ORDER NOW</button>
//               <a href="#learnmore" className="learn-more">Learn More</a>
//             </div>
//           </div>
//           <div className="product-card">
//             <img
//               src="https://www.pngarts.com/files/11/Makeup-Cosmetics-PNG-High-Quality-Image.png"
//               alt="RESURFACING SERUM"
//               className="product-image"
//             />
//             <div className="product-info">
//               <h1 className="product-name">RESURFACING SERUM</h1>
//               <button className="order-button">ORDER NOW</button>
//               <a href="#learnmore" className="learn-more">Learn More</a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Pagefour;

import React, { useEffect, useRef, useState } from "react";
import "./pagefour.css";

function Pagefour() {
  const secondImageRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    let lastScrollTop = 0;

    const handleScroll = () => {
      const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (currentScrollTop > lastScrollTop && currentScrollTop > 50) {
        // Scrolling down
        setInView(true);
      } else if (currentScrollTop < lastScrollTop) {
        // Scrolling up
        setInView(false);
      }
      lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop; // For Mobile or negative scrolling
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="pagetwo">
        <div className={`product-container ${inView ? "scrolled" : ""}`}>
          <div className="product-card">
            <img
              src="https://png.pngtree.com/png-clipart/20211116/original/pngtree-cosmetic-lotion-mockup-png-image_6945018.png"
              alt="RADIANCE SERUM"
              className="product-image"
            />
            <div className="product-info">
              <h1 className="product-name">RADIANCE SERUM</h1>
              <button className="order-button">ORDER NOW</button>
              <a href="#learnmore" className="learn-more">Learn More</a>
            </div>
          </div>
          <div className="product-card">
            <img
              ref={secondImageRef}
              src="https://png.pngtree.com/png-clipart/20211116/original/pngtree-cosmetic-lotion-mockup-png-image_6934675.png"
              alt="ANTI-AGING DUO"
              className={`product-image second-image ${inView ? "in-view" : ""}`}
            />
            <div className="product-info">
              <span className="best-buy">BEST BUY</span>
              <h1 className="product-name">ANTI-AGING DUO</h1>
              <button className="order-button">ORDER NOW</button>
              <a href="#learnmore" className="learn-more">Learn More</a>
            </div>
          </div>
          <div className="product-card">
            <img
              src="https://png.pngtree.com/png-clipart/20211116/original/pngtree-cosmetic-lotion-mockup-png-image_6945018.png"
              alt="RESURFACING SERUM"
              className="product-image"
            />
            <div className="product-info">
              <h1 className="product-name">RESURFACING SERUM</h1>
              <button className="order-button">ORDER NOW</button>
              <a href="#learnmore" className="learn-more">Learn More</a>
            </div>
          </div>
          <div className="product-card">
            <img
              src="https://www.ynsmedspa.com/testing1/wp-content/uploads/2016/09/Group3.png"
              alt="RADIANCE SERUM"
              className="product-image"
            />
            <div className="product-info">
              <h1 className="product-name">RADIANCE SERUM</h1>
              <button className="order-button">ORDER NOW</button>
              <a href="#learnmore" className="learn-more">Learn More</a>
            </div>
          </div>
          <div className="product-card">
            <img
              src="https://gallery.yopriceville.com/var/resizes/Free-Clipart-Pictures/Cosmetic-PNG/Cosmetic_Cream_PNG_Clipart_Picture.png?m=1507172109"
              alt="ANTI-AGING DUO"
              className="product-image"
            />
            <div className="product-info">
              <span className="best-buy">BEST BUY</span>
              <h1 className="product-name">ANTI-AGING DUO</h1>
              <button className="order-button">ORDER NOW</button>
              <a href="#learnmore" className="learn-more">Learn More</a>
            </div>
          </div>
          <div className="product-card">
            <img
              src="https://www.pngarts.com/files/11/Makeup-Cosmetics-PNG-High-Quality-Image.png"
              alt="RESURFACING SERUM"
              className="product-image"
            />
            <div className="product-info">
              <h1 className="product-name">RESURFACING SERUM</h1>
              <button className="order-button">ORDER NOW</button>
              <a href="#learnmore" className="learn-more">Learn More</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Pagefour;
