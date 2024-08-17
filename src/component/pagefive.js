
// import "./pagefive.css";
// function Pagefive() {
 
//   return (
//     <>
//       <div className="product-pagee">
//       <div className="background-gif">
//         <div className="product-image-containerr">
//           <img
//             src="https://clipground.com/images/skin-care-products-png-2.png"
//             alt="Product"
//             className="product-imagee"
//           />
//         </div>
//         <div className="text-containe">
//           <h2 className="textt">Skin Glow</h2>
//         </div>
//       </div>
//     </div>


//     </>
//   );
// }

// export default Pagefive;


import React, { useEffect, useRef, useState } from "react";
import "./pagefive.css";

function Pagefive() {
  const productImageRef = useRef(null);
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
      <div className="product-pagee">
        <div className="background-gif">
          <div className={`product-image-containerr ${inView ? "scrolled" : ""}`}>
            <img
              src="https://clipground.com/images/skin-care-products-png-2.png"
              alt="Product"
              className="product-imagee"
              ref={productImageRef}
            />
          </div>
          <div className="text-containe">
            <h2 className="textt">Skin Glow</h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default Pagefive;
