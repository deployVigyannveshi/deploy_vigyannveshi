/*Importing CSS */
import "../post_desc.css";
/*Importing Link */
import { Link } from "react-router-dom";
/*Importing Share options */
// import ShareOptions from "../ShareOptions";

/*To be edited */
/*Importing Featured Image */
import featured_img from "../../../posts/Just_predict_the_remainder/images/featured_img.png";
export default function Jptrdesc() {
  return (
    <>
      <div className="post">
        <div className="featured_img">
          <img src={featured_img} alt="Just_Predict_the _remainder" />
        </div>
        <div className="postInfo">
          <Link className="post_link" to="/just_predict_the_remainder">
            <span>Just Predict the Remainder</span>
          </Link>
          <p>
            While solving Talyor's series during my first-year of Engineering,
            an idea struck my mind. Here's an application of the same, which can
            predict the remainder of some typical long divisons in seconds&nbsp;
            <Link className="read_more" to="/just_predict_the_remainder">
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
