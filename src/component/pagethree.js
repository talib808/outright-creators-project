import React, { useEffect, useRef, useState } from 'react';
import './pagethree.css';

const Pagethree = () => {
  const showcaseRef = useRef(null);
  const [inView, setInView] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop = window.scrollY;

      if (currentScrollTop > lastScrollTop && currentScrollTop > 50) {
       
        setInView(true);
      } else if (currentScrollTop < lastScrollTop) {
      
        setInView(false);
      }

      setLastScrollTop(currentScrollTop);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollTop]);

  return (
    <div className="product-showcase" ref={showcaseRef}>
      <div className={`grid-containerr ${inView ? 'show' : ''}`}>
        <div className="text text-left">PURE</div>
        <div className="text text-right">CARE</div>
        <div className="image-container">
          <img
            src="https://clipground.com/images/skin-care-products-png-2.png"
            alt="Product"
            className="product-images product-image-1"
          />
          <img
            src="https://purepng.com/public/uploads/large/hand-zsm.png"
            alt="Product"
            className="product-images product-image-2"
          />
        </div>
      </div>
    </div>
  );
};

export default Pagethree;
