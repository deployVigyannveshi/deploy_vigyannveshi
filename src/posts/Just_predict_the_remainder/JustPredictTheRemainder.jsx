/*Importing CSS (comman)*/
import "../post.css";
import "../../utilities.css";

/*Importing CSS (post-specific)*/
import "./JustPredictTheRemainder.css";

/*Importing pdf file for the post */
import pdf from "../Just_predict_the_remainder/files/Just_Predict_the_Remainder.pdf";
/*Importing images */
import featured_img from "../Just_predict_the_remainder/images/featured_img.png";
import idea from "../Just_predict_the_remainder/images/idea.png";
import pf from "../Just_predict_the_remainder/images/pf.png";
import q1 from "../Just_predict_the_remainder/images/q1.png";
import a11 from "../Just_predict_the_remainder/images/a11.png";
import a12 from "../Just_predict_the_remainder/images/a12.png";
import q2 from "../Just_predict_the_remainder/images/q2.png";
import a21 from "../Just_predict_the_remainder/images/a21.png";
import a22 from "../Just_predict_the_remainder/images/a22.png";
import doubt from "../Just_predict_the_remainder/images/doubt.png";
import q3 from "../Just_predict_the_remainder/images/q3.png";
import a31 from "../Just_predict_the_remainder/images/a31.png";
import a32 from "../Just_predict_the_remainder/images/a32.png";

export default function JustPredictTheRemainder() {
  return (
    <>
      <div className="main">
        <div className="main_post">
          {/* To be edited */}
          <h1>Just Predict the Remainder</h1>
          <div className="featured_image">
            <img src={featured_img} alt="Just_Predict_the _Remainder" />
          </div>
          <div className="disclaimer">
            <h2>Disclaimer:</h2>
            <p>
              I haven't taken any external reference for these problems, it's
              one of the few ideas that struck my mind while solving Taylor's
              Series problems given by my Mathematics Teacher. It's a part of
              the syllabus of Engineering Mathematics for First-Year Engineering
              Students. I hope my idea, helps the reader. You can download it as
              a pdf for future use.
              <br />
              <br />
              <a id="pdfDownload" href={pdf} download>
                {" "}
                <svg
                  className="download_icon"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 512"
                >
                  <path d="M369.9 97.9L286 14C277 5 264.8-.1 252.1-.1H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V131.9c0-12.7-5.1-25-14.1-34zM332.1 128H256V51.9l76.1 76.1zM48 464V48h160v104c0 13.3 10.7 24 24 24h104v288H48zm250.2-143.7c-12.2-12-47-8.7-64.4-6.5-17.2-10.5-28.7-25-36.8-46.3 3.9-16.1 10.1-40.6 5.4-56-4.2-26.2-37.8-23.6-42.6-5.9-4.4 16.1-.4 38.5 7 67.1-10 23.9-24.9 56-35.4 74.4-20 10.3-47 26.2-51 46.2-3.3 15.8 26 55.2 76.1-31.2 22.4-7.4 46.8-16.5 68.4-20.1 18.9 10.2 41 17 55.8 17 25.5 0 28-28.2 17.5-38.7zm-198.1 77.8c5.1-13.7 24.5-29.5 30.4-35-19 30.3-30.4 35.7-30.4 35zm81.6-190.6c7.4 0 6.7 32.1 1.8 40.8-4.4-13.9-4.3-40.8-1.8-40.8zm-24.4 136.6c9.7-16.9 18-37 24.7-54.7 8.3 15.1 18.9 27.2 30.1 35.5-20.8 4.3-38.9 13.1-54.8 19.2zm131.6-5s-5 6-37.3-7.8c35.1-2.6 40.9 5.4 37.3 7.8z" />
                </svg>
                Download PDF
              </a>
              <br />
              <br />
              The above method can be used to verify long divisions,
              readers(From lower classes) may remember it as a trick, skipping
              the complete idea. I will begin by Stating Taylor's Series/Theorem
              and the Division Algorithm and then move on to the idea.
              <br />
              Knowledge share=(knowledge)^2.
              <br />
              Suggestions, Critics as well as Complements are welcomed.
            </p>
          </div>
          <div className="idea">
            <h2>Idea:</h2>
            <img src={idea} alt="Taylors-Series and Division-Algorithm" />
          </div>
          <div className="pf">
            <h2>Applying it to polynomial functions:</h2>
            <img src={pf} alt="Polynomial-Function-defination" />
            <p>
              Since polynomial functions have a domain of x belonging to all
              real numbers and are differentiable for all values of x; We can
              apply the above idea. The first two problems are based on the
              application of Taylor's Series to polynomial functions.
            </p>
          </div>
          <div className="q1">
            <img src={q1} alt="Question-1" />
            <img src={a11} alt="Using short-cut" />
            <p>The way in which the shortcut is observed:</p>
            <img src={a12} alt="The way we get the short-cut" />
          </div>
          <div className="q2">
            <img src={q2} alt="Question-2" />
            <img src={a21} alt="Answer with short-cut observed" />
            <img src={a22} alt="Answer with Taylor-Series" />
          </div>
          <div className="doubt">
            <p>
              An Elegant doubt that came to my mind, which may strike the
              reader's mind as well.
            </p>
            <img src={doubt} alt="Elegant-doubt" />
          </div>
          <div className="app_f">
            <h2>Applying it to other functions:</h2>
            <p>
              Since many functions like Trigonometric, inverse trigonometric,
              logarithmic, exponential can be expressed using Taylor's Series. I
              have tried an approach that may give the remainder of [f(x)
              /(x-a)] or [f(x)/(x+a)], provided f(x) and its corresponding
              derivates are defined for x=(a) and x=(-a) respectively. The third
              problem is based on the above idea.
            </p>
            <img src={q3} alt="Question-3" />
            <img src={a31} alt="Answer with short-cut observed" />
            <img src={a32} alt="Answer with Taylor-Series" />
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
