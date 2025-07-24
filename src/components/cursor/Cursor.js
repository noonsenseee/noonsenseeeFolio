import React, {useEffect, useRef} from "react";
import {gsap, Linear} from "gsap";
import "./cursor.scss";

const Cursor = () => {
  const cursor = useRef(null);
  const follower = useRef(null);

  const moveCircle = e => {
    gsap.to(cursor.current, {
      x: e.clientX,
      y: e.clientY,
      duration: 0.1,
      ease: Linear.easeNone
    });
    gsap.to(follower.current, {
      x: e.clientX,
      y: e.clientY,
      duration: 0.3,
      ease: Linear.easeNone
    });
  };

  const onHover = () => {
    gsap.to(cursor.current, {scale: 0.5, duration: 0.3});
    gsap.to(follower.current, {scale: 3, duration: 0.3});
  };

  const onUnhover = () => {
    gsap.to(cursor.current, {scale: 1, duration: 0.3});
    gsap.to(follower.current, {scale: 1, duration: 0.3});
  };

  useEffect(() => {
    document.addEventListener("mousemove", moveCircle);

    document.querySelectorAll(".link").forEach(el => {
      el.addEventListener("mouseenter", onHover);
      el.addEventListener("mouseleave", onUnhover);
    });

    return () => {
      document.removeEventListener("mousemove", moveCircle);
    };
  }, []);

  return (
    <>
      <div className="cursor" ref={cursor}></div>
      <div className="cursor-follower" ref={follower}></div>
    </>
  );
};

export default Cursor;
