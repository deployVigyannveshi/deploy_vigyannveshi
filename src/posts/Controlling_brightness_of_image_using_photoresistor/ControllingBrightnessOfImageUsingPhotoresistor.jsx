/*Importing CSS (comman)*/
import "../post.css";
import "../../utilities.css";

/*Importing CSS (post-specific)*/
import "./ControllingBrightnessOfImageUsingPhotoresistor.css";

/*Importing images */
import featured_img from "../Controlling_brightness_of_image_using_photoresistor/images/featured_img.svg";

/*Importing videos*/
import video from "../Controlling_brightness_of_image_using_photoresistor/videos/Controlling_brightness_of_image_using_photoresistor.mp4";

export default function ControllingBrightnessOfImageUsingPhotoresistor() {
  return (
    <>
      <div className="main">
        <div className="main_post">
          {/* To be edited */}
          <h1>Controlling brightness of a image using photoresistor</h1>
          <div className="featured_image">
            <img
              src={featured_img}
              alt="Controlling brightness of a image using photoresistor"
            />
          </div>
          <div className="disclaimer">
            <h2>Disclaimer:</h2>
            <p>
              The project is created only for education and learning purpose,
              and not with any economic intentions. The image used in the
              project is taken from{" "}
              <a href="http://www.chitrr.com/downloads/butterfly/">
                http://www.chitrr.com/downloads/butterfly/
              </a>{" "}
              , and the credits of the image, belong to the photographer. If
              there are any copyrights issues regarding the image, please
              contact: <br />
              <a href="mailto:mailtovigyannveshi@gmail.com">
                mailtovigyannveshi@gmail.com
              </a>
            </p>
          </div>
          <div className="acknowledgements">
            <h2>Acknowledgements:</h2>
            <p>
              <strong>Special Thanks to:</strong> <br /> <br />{" "}
              <strong>God</strong>
              , who helped me to rise every time, I
              encountered difficulties in the duration of the project. <br /> <br />
              <strong>Chitresh Sinha</strong>, the photographer who captured the
              image, used in the project taken from Reference:&nbsp;
              <a href="http://www.chitrr.com/downloads/butterfly/">
                http://www.chitrr.com/downloads/butterfly/
              </a>
              <br />
              <br />
              <strong>Adam Thomas (Youtube)</strong> &nbsp;
              <a href="https://www.youtube.com/watch?v=gQYsUjT-IBo&t=4s">
                https://www.youtube.com/watch?v=gQYsUjT-IBo&t=4s
              </a>
              , from whom I was able to understand the concept to interact
              Arduino via serial - port with Nodejs using (serialport module)
              and then transfering the data to the front-end using (socket.io
              module) in the best way possible, which served the crux to
              complete the project.
            </p>
          </div>
          <div className="doityourself">
            <h2>Do it yourself:</h2>
            <video src={video} controls></video>
            <br />
            <p>
              The repository contains all software resources used. Kindly read
              the Readme of the repository for the procedure, working, and for
              further study. <br /> Reference:{" "}
              <a href="https://github.com/vigyannveshi/controlling_brightness_of_image_using_photoresistor">
                https://github.com/vigyannveshi/controlling_brightness_of_image_using_photoresistor
              </a>{" "}
              <br /> You can also simulate the circuit to understand role of
              Arduino on tinkercad. <br /> Reference:{" "}
              <a href="https://www.tinkercad.com/things/0x8DoxWbNPq">
                https://www.tinkercad.com/things/0x8DoxWbNPq
              </a>
            </p>
          </div>
          <div className="conclusion">
            <p>
              I hope that I have something new for the reader, you can add your
              doubts or queries to me via gmail at
              <a href="mailto:mailtovigyannveshi@gmail.com">
                &nbsp; mailtovigyannveshi@gmail.com
              </a>
              .&nbsp;Till then "Seek Science behind Substances to get Simplified
              Solution".
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
