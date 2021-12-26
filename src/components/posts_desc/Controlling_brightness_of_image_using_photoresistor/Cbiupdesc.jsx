/*Importing CSS */
import "../post_desc.css";
/*Importing Link */
import { Link } from "react-router-dom";
/*Importing Share options */
// import ShareOptions from "../ShareOptions";

/*To be edited */
/*Importing Featured Image */
import featured_img from "../../../posts/Controlling_brightness_of_image_using_photoresistor/images/featured_img.svg";
export default function Cbiupdesc() {
  return (
    <>
      <div className="post">
        <div className="featured_img">
          <img src={featured_img} alt="Controlling_brightness_of_a_image_using_photoresistor" />
        </div>
        <div className="postInfo">
          <Link className="post_link" to="/controlling_brightness_of_image_using_photoresistor">
            <span>Controlling brightness of a image using photoresistor</span>
          </Link>
          <p>
            The project depicts interaction of Arduino (microcontroller) with front-end (basic HTML page) using NodeJS, wherein the voltage in a voltage-divider network having photoresistor is sampled and used to control brightness of a image on the webpage &nbsp;
            <Link className="read_more" to="/controlling_brightness_of_image_using_photoresistor">
              ...Read More
            </Link>
          </p>
          {/* To be edited */}
          {/* <ShareOptions/> */}
        </div>
      </div>
    </>
  );
}
