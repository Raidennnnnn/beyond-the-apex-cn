import i1GYIArBtn1MycE from "../../assets/images/i1GYIArBtn1MycE.webp";
import i1KdhA2dQ50prz from "../../assets/images/i1KdhA2dQ50prz.webp";
import i1N9whh0p5O82cE from "../../assets/images/i1N9whh0p5O82cE.webp";
import i1OGFsbI1htoO from "../../assets/images/i1OGFsbI1htoO.webp";
import i1a2lI6y1YtRXSB from "../../assets/images/i1a2lI6y1YtRXSB.webp";

const TheDifferentialAndLSD = () => (
  <>
    <div className="manual_detail">
      <div className="content_header">
        <h1>The Differential and LSD / 差速器与限滑差速器</h1>
      </div>
      <div className="body">
        <h3 className="section-header">
          ● Differential / ● 差速器
        </h3>

        <div className="bilingual">
          <p lang="en">
            A differential is essential in vehicles with driven wheels on both the left and right sides. If a car only traveled in a straight line, it wouldn’t be necessary, but as soon as it turns, its role becomes clear.
            <br />
            <br />
            When cornering, the outside wheel travels a greater distance than the inside wheel. If both drive wheels were forced to rotate at the same speed, the inner wheel would resist and slip, making the car difficult to turn. The differential, a gearset integrated with the final drive and located between the drive wheels, allows them to rotate at different speeds to solve this problem.
            <br />
            <br />
            As shown in the diagram, engine power is transmitted through the final drive to the ring gear. The ring gear carries small pinion gears, which mesh with the side gears and transfer power to the left and right wheels.
            <br />
            <br />
            When the car is moving in a straight line, the rotation of the final drive turns the ring gear, and the pinion gears do not rotate on their own axes. Instead, they act as a unit, transmitting equal torque to both side gears. In this condition, the left and right wheels rotate at the same speed.
            <br />
            <br />
            However, when cornering, the inside wheel encounters greater resistance, and this is transmitted to the corresponding side gear. As a result, the pinion gears, which were rotating with the carrier without spinning on their axes, begin to rotate, allowing a difference in speed between the left and right wheels.
            <br />
            <br />
            In this condition, torque is still distributed through the differential, but the mechanism allows each wheel to rotate at the speed required to negotiate the corner smoothly.
          </p>
          <p lang="zh">
            å·¦å³åæé©±å¨è½®çè½¦è¾å¿éå·®éå¨ï¼å·®å¨é½¿è½®ï¼ãçº¯ç´çº¿ä¸å¿éï¼è½¬å¼¯æ¶ä½ç¨æ¾èï¼æ¥è¯­äº¦ç§°å·®å¨é½¿è½®æºæã
            <br />
            <br />
            è½¬å¼¯æ¶å¤è½®æ¯åè½®è·¯ç¨é¿ï¼é¡»åè®¸è½¬éå·®ï¼å¦ååè½®é»æ»ãè½¦é¾è½¬åãå·®éå¨å¨å·¦å³é©±å¨è½®ä¹é´ãä¸ä¸»åéå¨ä¸ä½ï¼å¸æ¶è¿ä¸å·®å¼ã
            <br />
            <br />
            åå¨æºå¨åç»ä¸»åéå¨å°ä»å¨é½¿è½®ï¼å°è¡æé½¿è½®ä¸ä¸¤ä¾§åè½´é½¿è½®å®åä¼ è³å·¦å³è½®ã
            <br />
            <br />
            ç´çº¿æ¶è¡æé½¿è½®éä»å¨é½¿è½®å¬è½¬ï¼å·¦å³ç­éãç­è½¬ç©ã
            <br />
            <br />
            è½¬å¼¯æ¶åè½®é»åç»åè½´ä¼ å°åè½´é½¿è½®ï¼è¡æé½¿è½®é¤å¬è½¬è¿èªè½¬ï¼è°èå·¦å³è½¬éå·®ï¼å°æ´å¤å¨ååç»å¤è½®ã
          </p>
        </div>

        <p className="image">
          <img alt="" src={i1N9whh0p5O82cE} />
        </p>

        <p className="image">
          <img alt="" src={i1KdhA2dQ50prz} />
        </p>

        <p className="image">
          <img alt="" src={i1GYIArBtn1MycE} />
        </p>

        <h3 className="section-header">
          ● Limited-Slip Differential / ● 限滑差速器（LSD）
        </h3>

        <div className="bilingual">
          <p lang="en">
            When cornering, a conventional differential has a drawback. If one drive wheel loses traction completely, the other wheel receives little usable drive force, and the wheel with no grip spins freely. This occurs because the differential allows the path of least resistance to dominate, sending torque to the slipping wheel. The same effect can be seen on ice or snow, where a loss of traction at one wheel causes it to spin while the other remains stationary.
            <br />
            <br />
            A limited-slip differential (LSD) is designed to limit this behavior when there is a significant difference in rotational speed between the left and right wheels. By restricting the speed difference between the side gears, it helps distribute torque more effectively. This can be achieved through several methods, including clutch-type systems, electronically controlled systems, and viscous fluid-based designs.
            <br />
            <br />
            In performance cars, LSDs are used not only to improve traction in low-grip conditions, but also to make better use of available power and enhance handling.
          </p>
          <p lang="zh">
            æ®éå·®éå¨å¨åä¾§å¤±å»éçåæ¶ï¼ä¼æå¨åéç»ç©ºè½¬è½®ï¼å¦ä¸ä¾§å ä¹æ é©±å¨åï¼æ³¥æ³éªå°å¸¸è§ãLSDå¨å·¦å³è½¬éå·®è¶è¿ä¸å®å¼æ¶éå¶å·®éï¼ä½¿ä¸¤ä¾§é½è½è·å¾é©±å¨åãæ¹å¼æå¤çç¦»åå¨ãçµå­æ§å¶ãé½¿è½®å®åè½´ååãç²æ§æµä½åªé»åç­ã
            <br />
            <br />
            è¿å¨è½¦åæ´å¤ä¸ºä¿é©±å¨åä¸æ¹åææ§èç¨ LSDï¼èéä»ä¸ºè±å°ã
          </p>
        </div>

        <p className="image">
          <img alt="" src={i1OGFsbI1htoO} />
        </p>

        <p className="image">
          <img alt="" src={i1a2lI6y1YtRXSB} />
        </p>

        <h3 className="section-header">
          ● Types of LSD / ● LSD 种类
        </h3>

        <h3>
          Torque-Sensitive Type / 转矩感应式
        </h3>

        <div className="bilingual">
          <p lang="en">
            This type of limited-slip differential uses specially designed gears. When a difference in torque arises between the left and right wheels, internal resistance increases, limiting the amount of slip. Because these systems can tightly control differences in wheel speed, they are effective in demanding conditions such as circuit driving, and their response is very quick. Common types include torque-sensitive designs such as Torsen and helical differentials, as well as clutch-type multi-plate systems.
          </p>
          <p lang="zh">
            特殊齿轮组合：左右转矩差增大时齿面阻力增加，限制打滑。限滑力强，适合赛道等高负荷，响应快。含多片离合器、Torsen、 helical 等。
          </p>
        </div>

        <h3>
          Speed-Sensitive Type / 转速感应式
        </h3>

        <div className="bilingual">
          <p lang="en">
            These systems restrict differential action using a highly viscous silicone fluid rather than gears. The most common is the viscous type, which relies on shear resistance in the fluid, although there are also designs that use fluid flow through small orifices to create resistance. These systems do not limit wheel speed difference as effectively as torque-biasing types, and their response is slower, but they can be easier to manage on low-traction surfaces.
          </p>
          <p lang="zh">
            用高粘度硅油而非齿轮限滑，代表为粘性 LSD，亦有油经小孔流动的孔板式。限滑力与响应弱于转矩式，但低附着路面更易驾驭。
          </p>
        </div>

        <h3>
          Active-Control Type / 主动控制式
        </h3>

        <div className="bilingual">
          <p lang="en">
            Electronically controlled systems use a computer to monitor sensor data and regulate the difference in drive-wheel speed. Many competition cars, particularly rally cars in the World Rally Championship, use these systems, and they have also been adopted in some production vehicles. Differential action is controlled by varying clutch pressure, typically through hydraulic or electromagnetic actuation.
          </p>
          <p lang="zh">
            电脑根据传感器主动控制限滑，拉力赛等常见，部分市售车亦有。通过液压或电磁离合器调节摩擦片压力。
          </p>
        </div>
      </div>
    </div>
  </>
);

export default TheDifferentialAndLSD;
