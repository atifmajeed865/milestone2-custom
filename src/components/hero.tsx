import "../style/hero.css";
import Image from "next/image";
import React from "react";

function Hero() {
  return (
    <div className="header-container">
      <div className="header-boxes-con">
        {/* left */}
        <Image
          src={"/picture-removebg-preview.png"}
          alt="profile"
          height={200}
          width={200}
          className="header-image"
        />
        {/* right */}
        <div className="hero-right-div">
          <h1 className="title-hero">I'm Atif Majeed Front-end Developer</h1>
          <p className="des-hero">
            I am a frontend developer with expertise in Next.js and Tailwind
            CSS, passionate about building modern, fast, and scalable web
            applications.
          </p>
          <button className="hero-btn">HIRE ME</button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
