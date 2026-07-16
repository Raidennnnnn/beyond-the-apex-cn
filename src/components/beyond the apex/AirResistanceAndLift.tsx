import i13kfAkmJz4BX7c from "../../assets/images/i13kfAkmJz4BX7c.webp";
import i15rJZ9jJZ4l3b from "../../assets/images/i15rJZ9jJZ4l3b.webp";
import i1MaCF17fZj7JuB from "../../assets/images/i1MaCF17fZj7JuB.webp";
import i1a3FfBxQ3evFz from "../../assets/images/i1a3FfBxQ3evFz.webp";

const AirResistanceAndLift = () => (
  <>
    <div className="manual_detail">
      <div className="content_header">
        <h1>Air Resistance and Lift / 空气阻力与升力</h1>
      </div>
      <div className="body">
        <div className="bilingual">
          <p lang="en">
            At high speed, the effect of air resistance becomes significant, often feeling as if an invisible force is limiting further acceleration.
            <br />
            <br />
            Once a car exceeds around 80 km/h (50 mph), aerodynamic drag becomes a major factor. Beyond this point, drag increases with the square of speed, meaning that if speed doubles, drag increases fourfold, and if speed triples, it increases ninefold. Rolling resistance from the tires also plays a role, though it is less significant at higher speeds. When aerodynamic drag balances the engine’s output, the car reaches its effective top speed. For race cars, sports cars and even efficiency-focused road cars, reducing air resistance is a key objective.
            <br />
            <br />
            Lower, more streamlined cars generally experience less aerodynamic drag, and smooth, flowing shapes allow air to pass more efficiently over the body. Flush surfaces with minimal protrusions further reduce resistance.
            <br />
            <br />
            However, many low-drag shapes can generate lift, as airflow over the body can accelerate relative to the air beneath it. This reduces the normal force on the tires and can affect stability. Reducing lift often increases drag, so aerodynamic design involves balancing these competing factors.
            <br />
            <br />
            Crosswinds must also be considered, as they can disturb straight-line stability. Effective aerodynamic design requires balancing drag, lift and yaw stability.
          </p>
          <p lang="zh">
            é«éè¡é©¶æ¶ç©ºæ°é»åå½±åæå¤§ï¼éåº¦è¶é«è¶åæä¸å µçä¸è§çå¢é»ç¢åè¿ã
            <br />
            <br />
            çº¦80 km/hèµ·ç©ºæ°é»åä¸å¯å¿½è§ï¼ä¹åä¸éåº¦å¹³æ¹ææ­£æ¯ï¼éåº¦2åé»åçº¦4åï¼3åçº¦9åãè½®èæ»å¨é»åäº¦å­å¨ï¼ä½åå¨æºæ æ³å²ç ´ç©ºæ°å¢æ¶å³è¾¾å®éæé«è½¦éãèµè½¦ãè·è½¦ä¹è³èæ²¹è½¦é½é¡»éé»ã
            <br />
            <br />
            è½¦é«ä½ãæµçº¿ææ¥å½¢æå©ï¼è¡¨é¢æ å¤ä½å¸èµ·ï¼é½å¹³é¢ï¼ä¹éé»ã
            <br />
            <br />
            ä½ä½é»å¤å½¢å¸¸ä¼¼æºç¿¼ï¼ä¸é¨æ°æµå¿«äºä¸é¨ï¼äº§çååãåå°ä¸ååï¼é¡»ä¸éé»æè¡¡ãæ¨ªé£äº¦å½±åç´çº¿ç¨³å®ï¼ç©ºæ°å¨åå­¦é¡»ç»ç­¹é»åãååä¸æ¨ªæåç©ã
          </p>
        </div>

        <h3>
          Frontal Surface Area   [Frontal Area] / 迎风面积
        </h3>

        <div className="bilingual">
          <p lang="en">
            Frontal area is the silhouette of a car when viewed from the front. The larger this area, the greater the aerodynamic drag. Reducing frontal area is one reason sports cars tend to have lower profiles, while boxier vehicles and minivans typically have higher drag due to their larger frontal area.
          </p>
          <p lang="zh">
            正面投影轮廓。面积越大受风越多、阻力越大。跑车低矮亦是为减小迎风面积；厢式车与 MPV 先天不利。
          </p>
        </div>

        <p className="image">
          <img alt="" src={i1MaCF17fZj7JuB} />
        </p>

        <h3>
          Cd – Drag Coefficient   [Constant Drag] / Cd——空气阻力系数
        </h3>

        <div className="bilingual">
          <p lang="en">
            The drag coefficient (Cd) is a measure of how smoothly air flows over an object. It is generally treated as a fixed value for a given shape, though it can vary with conditions such as speed and airflow. Aerodynamic drag depends on both Cd and frontal area. As a result, a car with a higher Cd but small frontal area may still have relatively low drag, while a vehicle with a larger frontal area can experience higher drag even with a lower Cd.
          </p>
          <p lang="zh">
            表示气流绕物体流动的顺畅程度，为形状系数，与速度无关。实际阻力＝Cd×迎风面积。Cd高但面积小的跑车阻力可仍低，反之亦然。
          </p>
        </div>

        <p className="image">
          <img alt="" src={i15rJZ9jJZ4l3b} />
        </p>

        <h3>
          Cl – Lift Coefficient / Cl——升力系数
        </h3>

        <div className="bilingual">
          <p lang="en">
            The lift coefficient (Cl) is a value that represents the aerodynamic force acting on a car in the vertical direction as it moves through the air. Positive values indicate lift, while negative values indicate downforce. Generating downforce typically increases drag, so achieving stability involves balancing front and rear downforce to suit the car’s characteristics.
          </p>
          <p lang="zh">
            高速气流在垂直方向作用于车体的系数。正值为升力，负值为下压力。获得下压力常增阻力，须前后下压力平衡以稳态。
          </p>
        </div>

        <p className="image">
          <img alt="" src={i13kfAkmJz4BX7c} />
        </p>

        <h3>
          CYM – Coefficient of Yawing Moment / CYM——横摆力矩系数
        </h3>

        <div className="bilingual">
          <p lang="en">
            The Yaw Moment Coefficient represents the tendency of a car to rotate about its vertical axis under aerodynamic forces. In real driving, airflow does not always strike the car head-on, and crosswinds can create a yawing moment that tries to turn the vehicle. A lower yaw moment coefficient generally indicates better stability in crosswinds. Taller vehicles with a higher center of gravity and larger side area are typically more affected.
          </p>
          <p lang="zh">
            风不总从前方来，侧风等会在垂直轴产生试图使车偏转的横摆力矩，妨碍直线性。CYM 小则抗侧风好；一般高重心、高大车身不利。
          </p>
        </div>

        <p className="image">
          <img alt="" src={i1a3FfBxQ3evFz} />
        </p>
      </div>
    </div>
  </>
);

export default AirResistanceAndLift;
