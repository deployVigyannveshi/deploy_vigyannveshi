/*Importing CSS */
import "../post_desc.css";
/*Importing Link */
import { Link } from "react-router-dom";
/*Importing Share options */
// import ShareOptions from "../ShareOptions";

/*To be edited */
/*Importing Featured Image */
import featured_img from "../../../posts/voltage_regulator/images/featured_img.png";
export default function Vrdesc() {
  return (
    <>
      <div className="post">
        <div className="featured_img">
          <img src={featured_img} alt="Circuit-Diagram"/>
        </div>
        <div className="postInfo">
          <Link className="post_link" to="/5_simple_steps_to_create_2_in_1_Voltage-Regulator">
            <span>5 simple steps to create 2 in 1 Voltage-Regulator</span>
          </Link>
          <p>
            Many a times we have a single power supply of high voltage and need to distribute lower voltages to other circuits. The circuit gives three output 5v-(DC), 9v-(DC) and the supply voltage-(DC) &nbsp;
            <Link className="read_more" to="/5_simple_steps_to_create_2_in_1_Voltage-Regulator">
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
