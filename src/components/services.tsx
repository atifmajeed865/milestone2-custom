import "../style/services.css";
import { FaLaptopCode } from "react-icons/fa";
import { GiSoundOn } from "react-icons/gi";
import { FaMicrophoneAlt } from "react-icons/fa";
import { PiGameControllerFill } from "react-icons/pi";
import { MdCameraAlt } from "react-icons/md";

function Services() {
  return (
    <main className="main">
      <div className="ser-container">
        {/* top */}
        <div className="top-div-ser">
          <h2 className="title-ser">My Services</h2>
          <p className="des-ser">
            I specialize in building fast, responsive, and scalable web
            applications using Next.js and Tailwind CSS to create seamless user
            experiences.
          </p>
        </div>
        {/* bottom */}
        <div className="boxes-con">
          <div className="box">
            <FaLaptopCode className="ser-icons" />
            <h3 className="h">Web Development</h3>
            <span>Blog, E-Commerce</span>
          </div>
          <div className="box">
            <GiSoundOn className="ser-icons" />
            <h3 className="h">Song</h3>
            <span>Music, Base system</span>
          </div>
          <div className="box">
            <FaMicrophoneAlt className="mic" />
            <h3 className="h">Sound Design</h3>
            <span>Voice Over, Beat Making</span>
          </div>
          <div className="box">
            <PiGameControllerFill className="ser-icons" />
            <h3 className="h">Game Design</h3>
            <span>Character Design, Props & Objects</span>
          </div>
          <div className="box">
            <MdCameraAlt className="ser-icons" />
            <h3 className="h">Photography</h3>
            <span>Portrait, Product Photography</span>
          </div>
          <div className="box">
            <h3 className="h">Advertising</h3>
            <p className="p">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit
              Obcaecati dolorem libero rerum provident
            </p>
            <span className="spa">ORDER NOW!</span>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Services;
