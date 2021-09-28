/*Importing reacts needs */
/*Importing CSS (comman)*/
import "../post.css";
import "../../utilities.css";
/*Importing CSS (post_specific)*/
import "../voltage_regulator/voltage_regulator.css";

/*Importing PDF*/
import pdf from "../voltage_regulator/files/5_simple_steps_to_create_2_in_1_Voltage.pdf";

/*Importing images */
/*Components*/
import components from "../voltage_regulator/images/components.png";
import tools from "../voltage_regulator/images/tools.png";
/*steps*/
import step1 from "../voltage_regulator/images/step1.png";
import step2 from "../voltage_regulator/images/step2.png";
import step3 from "../voltage_regulator/images/step3.png";
import step4 from "../voltage_regulator/images/step4.png";
import step5 from "../voltage_regulator/images/step5.png";

/*Importing Featured image*/
import featured_image from "../voltage_regulator/images/featured_img.svg";

export default function VoltageRegulator() {
  return (
    <>
      <div className="main">
        <div className="main_post">
          <h1>5 simple steps to create 2 in 1 Voltage-Regulator</h1>
          <div className="featured_image">
            <img src={featured_image} alt="voltage regulator" />
          </div>
          <div className="disclaimer">
            <h2>Disclaimer:</h2>
            <p>
              "Necessity is the mother of all Inventions", This voltage
              regulator circuit was a necessity in one of my projects(I will
              make sure to add the same project on completion, the need was to
              use a 12.6v battery to supply power to microcontroller(9v-DC),
              Motor-Driver(~equal to battery voltage),Motor-driver-logic(5v) and
              some extra components(5v)).It is the most basic possible circuit,
              and can still be improved to a very good extent as per the user's
              needs(consider the datasheet attached for improvement
              possibilities).I do hope to improve the circuit further ahead and
              will surely update the content, as and when I improve it. The
              datasheet and other references added are taken from internet, I
              have just attached it as a reference for the reader. They are neither created nor owned by me.
              <br />
               Datasheet Reference:&nbsp;
               <br />
              <a href="https://www.alldatasheet.com/datasheet-pdf/pdf/22676/STMICROELECTRONICS/7805CV.html">
                https://www.alldatasheet.com/datasheet-pdf/pdf/22676/STMICROELECTRONICS/7805CV.html
              </a>
              <br />
              <br />
              The tips are added to help the reader. I hope my idea, helps the
              reader. You can also download the content of the post as a pdf for
              future use:
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
              Knowledge share=(knowledge)^2.
              <br />
              Suggestions, Critics as well as Complements are welcomed.
            </p>
          </div>
          <div className="requirements">
            <h2>Requirements:</h2>
            <h3>Tools:</h3>
            <img src={tools} alt="Voltage_regulator" />
            <p>
              <span className="scarlet_red">Tip 1:</span> As a beginner it is
              always better to use fine tip soldering-iron. I personally use the
              one as shown above(fine-tip), moreover there is better temperature
              control in it. It comes within INR (500), prices may vary
              according to market inflations. Initially I had purchased the
              (flat-tip), and it was quite difficult to solder in cases of
              fine-soldering. For soldering this circuit, preferably use the
              fine solder.
              <br />
              <br />
              <span className="scarlet_red">Tip 2:</span> As a beginner, a
              simple digital multimeter is sufficient, which comes around INR
              (180) in local market, prices may vary according to market
              inflations. It will be an essential tool for testing.
              <br />
              <br />
              <span className="scarlet_red">Tip 3:</span> Safety first, before
              starting the soldering process, please use the goggles (no
              specialised goggles needed any clear safety goggles will do). It
              is needed because, there are risks of solder spitting out. While
              soldering use either use an exhaust fan or solder at places where
              there is an excellent ventilation of air. It is necessary, because
              the direct exposure to fumes is hazardous. I often use a cloth
              mask while soldering.
              <br />
              <br />
              <span className="scarlet_red">Tip 4:</span> Preferable use a lead
              free solder, although it needs a slightly higher temperature to melt but it is safe. You can read more about it at reference:
              <a href="https://blog.matric.com/lead-vs-lead-free-solder-in-pcb-manufacturing">
                https://blog.matric.com/lead-vs-lead-free-solder-in-pcb-manufacturing
              </a>
              <br />
              <br />
              <span className="scarlet_red">Tip 5:</span> After completing the
              soldering wash your hands thoroughly with water and soap.
              <br />
              <br />
              You can read the soldering safety guidelines
              <br />
              Reference:{" "}
              <a href="https://safety.eng.cam.ac.uk/safe-working/copy_of_soldering-safety">
                https://safety.eng.cam.ac.uk/safe-working/copy_of_soldering-safety
              </a>
              <br />
              <br />
            </p>
            <h3>Components:</h3>
            <img src={components} alt="Voltage_regulator" />
            <p>
              <span className="scarlet_red">Tip 6:</span> While purchasing the
              IC's naming them as number '7809' itself is sufficient to be
              specified to the retailer. In case of need of specific variations
              reference:
              <a href="https://forum.allaboutcircuits.com/threads/whats-the-difference-between-lm7805-and-lm7805cv.25673/">
                https://forum.allaboutcircuits.com/threads/whats-the-difference-between-lm7805-and-lm7805cv.25673/
              </a>
              <br />
              <br />
              <span className="scarlet_red">Tip 7:</span> DC-power jack female
              plug barrel connector(2.1mm inner radius and 5.5mm outer radius)
              is used to give input to circuit. I have used it as per my
              necessities. Instead of this component, you may use another
              2-Poled PCB screw-terminal or header pins or just solder wires
              directly to input.
              <br />
              <br />
              <span className="scarlet_red">Tip 8:</span> The switch shown
              actually had 3 pins. I have removed a pin excluding the common
              and another pin from any side as per convenience to solder it to
              PCB.
              <br />
              <br />
              <span className="scarlet_red">Tip 9:</span> The solid jumper wires
              used were a part of a set of breadboard solid jumper. They are
              necessary to jump over the ground rail of solder. You may use
              normal wires instead of these.
            </p>
          </div>
          <div className="procedure">
            <h2>Procedure:</h2>
            <h3>Step 1:</h3>
            <img src={step1} alt="Step1" />
            <br />
            <p>
              Refer fig: 1a for circuit diagram, Mark lines with a black marker
              on the PCB Board where you will be needing to bridge rails with
              solder for connection as seen fig: 1b. The circle - marked region
              depicts the positioning of the components, wherein the outer
              circle colour depicts voltage of the component and inner colour
              depicts the component itself. You need not mark the circles, they are shown to avoid soldering around this region.
            </p>
            <br />
            <h3>Step 2:</h3>
            <img src={step2} alt="Step2" />
            <p>
              Now mark lines with marker on opposite face [Non printed side]
              also, as seen in fig: 2b, and increase the hole size such that the
              components can easily fit into the holes. We also need to increase
              the size of holes on [Printed side]as seen in fig: 2a.
            </p>
            <br />
            <h3>Step 3:</h3>
            <img src={step3} alt="Step3" />
            <p>
              In order to create a solder rail, first fill the holes with
              solder as seen in fig: 3a, then after completing it, join in
              between two squares until you connect them together, i.e., solder
              in between as shown in fig: 3b.
            </p>
            <br />
            <h3>Step 4:</h3>
            <img src={step4} alt="Step4" />
            <p>
              Place the components on the PCB and solder them one by one
              referring fig: 4a and fig: 4b
              <br />
              <br />
              <span className="scarlet_red">Tip 10:</span> The IC's polarity is
              in order "input, ground, output", considering the written-side
              facing towards you. Here in fig: 4a, the green jumper wire is used
              for output of IC.
              <br />
              <br />
              <span className="scarlet_red">Tip 11:</span> In case you use the
              DC-power jack female plug barrel connector, to find the
              polarity, supply a DC input to it and use a multimeter, such that
              connection yields a positive multimeter voltage. The terminal connected via positive probe of multimeter is the positive terminal, and one connected to negative probe is the negative terminal.
              <br />
              <br />
              <span className="scarlet_red">Tip 12:</span> Take care that you
              don't mis-solder, incase of minute gaps between the two soldering
              areas.
            </p>
            <br />
            <h3>Step 5:</h3>
            <img src={step5} alt="Step5" />
            <p>
              After soldering the components, bend or cut any extra protrudings
              as seen in fig: 5a. Now firmly fix the switch, 2-poled-PCB
              screw-terminal and the DC-power jack female plug barrel connector
              if they still wobble even after soldering, using the glue gun. The
              circuit is ready. You can provide an input (~12v) to the circuit and check its output using multimeter.
              <br />
              <br />
              <span className="scarlet_red">Tip 13:</span> While adding hot glue
              make sure it doesn't adhere any moving parts such as the switch or
              the screws or the input of DC-power jack female plug barrel
              connector.
              <br />
              <br />
              <span className="scarlet_red">Tip 14:</span> Your creativity is
              always appreciated, I haven't used the capacitors in the circuit,
              still the circuit works quite fine in my case. If you desire to
              add capacitors refer the data sheet referenced above.
              <br />
            </p>
          </div>
          <div className="conclusion">
            <br />
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
