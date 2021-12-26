/*Importing CSS*/
import "./vidya.css"

/*Importing Posts-desc*/
import Jptrdesc from "../../components/posts_desc/just_predict_the_remainder/Jptrdesc"
import Vrdesc from "../../components/posts_desc/voltage_regulator/Vrdesc"
import Cbiupdesc from "../../components/posts_desc/Controlling_brightness_of_image_using_photoresistor/Cbiupdesc"

export default function Vidya() {
    return (
    <>
    <div className="vidya">
        <h1 className="main_heading"><span>Vidya</span> by VigyannVeshi</h1>
        <Cbiupdesc/>
        <Vrdesc/>
        <Jptrdesc/>
    </div>
    </>
    )
}