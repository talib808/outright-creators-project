import React, { useEffect, useRef, useState } from 'react';
import './pageone.css';

function Pageone() {
    const [loaded, setLoaded] = useState(false);
    const containerRef = useRef(null);
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setLoaded(true);
            observer.disconnect(); 
          }
        },
        { threshold: 0.1 } 
      );
  
      if (containerRef.current) {
        observer.observe(containerRef.current);
      }
  
      return () => {
        if (containerRef.current) {
          observer.unobserve(containerRef.current);
        }
      };
    }, []);
  
    useEffect(() => {
      const handleScroll = () => {
        const images = document.querySelectorAll(".App-logo");
        const title = document.querySelector(".title");
  
        images.forEach((img, index) => {
          if (window.scrollY > 50) {
            img.style.opacity = "0";
            if (index === 0 || index === 2) {
              img.style.transform = "translate(-100%, -100%)"; 
            } else if (index === 1 || index === 3) {
              img.style.transform = "translate(100%, -100%)"; 
            } else {
              img.style.transform = "translate(-100%, 100%)";
            }
          } else {
            img.style.opacity = "1";
            img.style.transform = "translate(0, 0)";
          }
        });
  
        if (window.scrollY > 50) {
          title.style.opacity = "0";
          title.style.transform = "translateY(-100%)";
        } else {
          title.style.opacity = "1";
          title.style.transform = "translateY(0)";
        }
      };
  
      window.addEventListener("scroll", handleScroll);
  
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);

  return (
  <>
   <div className="page">
        <div className="grid-container">
          <div className="image-container">
            <img
              src="https://clipground.com/images/skin-care-products-png-2.png"
              className="App-logo"
              alt="logo"
            />
          </div>
          <div className="image-container">
            <img
              src="https://clipground.com/images/skin-care-products-png-2.png"
              className="App-logo"
              alt="logo"
            />
          </div>
          <div className="title-container">
            <h1 className="title">Welcome to our store</h1>
          </div>
          <div className="image-container">
            <img
              src="https://clipground.com/images/skin-care-products-png-2.png"
              className="App-logo"
              alt="logo"
            />
          </div>
          <div className="image-container">
            <img
              src="https://clipground.com/images/skin-care-products-png-2.png"
              className="App-logo"
              alt="logo"
            />
          </div>
        </div>
      </div>
  </>
  );
};

export default Pageone;
