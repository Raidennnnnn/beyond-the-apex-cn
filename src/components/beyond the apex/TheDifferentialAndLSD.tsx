import i1GYIArBtn1MycE from "../../assets/images/i1GYIArBtn1MycE.webp";
import i1KdhA2dQ50prz from "../../assets/images/i1KdhA2dQ50prz.webp";
import i1N9whh0p5O82cE from "../../assets/images/i1N9whh0p5O82cE.webp";
import i1OGFsbI1htoO from "../../assets/images/i1OGFsbI1htoO.webp";
import i1a2lI6y1YtRXSB from "../../assets/images/i1a2lI6y1YtRXSB.webp";

const TheDifferentialAndLSD = () => (
  <>
    <div className="manual_detail">
      <div className="content_header">
        <h1 className="bilingual-title"><span lang="en">The Differential and LSD</span><span className="bilingual-sep"> / </span><span lang="zh">差速器与限滑差速器</span></h1>
      </div>
      <div className="body">
        <h3 className="section-header bilingual-title"><span lang="en">● Differential</span><span className="bilingual-sep"> / </span><span lang="zh">● 差速器</span></h3>

        <div className="bilingual">
          <p lang="en">
            A differential is essential in vehicles with driven wheels on both the left and right sides. If a car only traveled in a straight line, it wouldn’t be necessary, but as soon as it turns, its role becomes clear.
          </p>
          <p lang="zh">
            左右均有驱动轮的车辆必需差速器（差动齿轮）。纯直线不必需，转弯时作用显著，日语亦称差动齿轮机构。
          </p>
        </div>

        <div className="bilingual">
          <p lang="en">
            When cornering, the outside wheel travels a greater distance than the inside wheel. If both drive wheels were forced to rotate at the same speed, the inner wheel would resist and slip, making the car difficult to turn. The differential, a gearset integrated with the final drive and located between the drive wheels, allows them to rotate at different speeds to solve this problem.
          </p>
          <p lang="zh">
            转弯时外轮比内轮路程长，须允许转速差，否则内轮阻滞、车难转向。差速器在左右驱动轮之间、与主减速器一体，吸收这一差异。
          </p>
        </div>

        <div className="bilingual">
          <p lang="en">
            As shown in the diagram, engine power is transmitted through the final drive to the ring gear. The ring gear carries small pinion gears, which mesh with the side gears and transfer power to the left and right wheels.
          </p>
          <p lang="zh">
            发动机动力经主减速器到从动齿轮（齿圈），小行星齿轮与两侧半轴齿轮啮合传至左右轮。
          </p>
        </div>

        <div className="bilingual">
          <p lang="en">
            When the car is moving in a straight line, the rotation of the final drive turns the ring gear, and the pinion gears do not rotate on their own axes. Instead, they act as a unit, transmitting equal torque to both side gears. In this condition, the left and right wheels rotate at the same speed.
          </p>
          <p lang="zh">
            直线时行星齿轮随从动齿轮公转而不自转，左右等速、等转矩。
          </p>
        </div>

        <div className="bilingual">
          <p lang="en">
            However, when cornering, the inside wheel encounters greater resistance, and this is transmitted to the corresponding side gear. As a result, the pinion gears, which were rotating with the carrier without spinning on their axes, begin to rotate, allowing a difference in speed between the left and right wheels.
          </p>
          <p lang="zh">
            转弯时内轮阻力经半轴传到半轴齿轮，行星齿轮除公转还自转，调节左右转速差。
          </p>
        </div>

        <div className="bilingual">
          <p lang="en">
            In this condition, torque is still distributed through the differential, but the mechanism allows each wheel to rotate at the speed required to negotiate the corner smoothly.
          </p>
          <p lang="zh">
            由此内侧分配较少、外侧较多，使各轮以所需转速顺利过弯。
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

        <h3 className="section-header bilingual-title"><span lang="en">● Limited-Slip Differential</span><span className="bilingual-sep"> / </span><span lang="zh">● 限滑差速器（LSD）</span></h3>

        <div className="bilingual">
          <p lang="en">
            When cornering, a conventional differential has a drawback. If one drive wheel loses traction completely, the other wheel receives little usable drive force, and the wheel with no grip spins freely. This occurs because the differential allows the path of least resistance to dominate, sending torque to the slipping wheel. The same effect can be seen on ice or snow, where a loss of traction at one wheel causes it to spin while the other remains stationary.
          </p>
          <p lang="zh">
            普通差速器在单侧失去附着力时，会把动力送给空转轮，另一侧几乎无驱动力，泥泞雪地常见。
          </p>
        </div>

        <div className="bilingual">
          <p lang="en">
            A limited-slip differential (LSD) is designed to limit this behavior when there is a significant difference in rotational speed between the left and right wheels. By restricting the speed difference between the side gears, it helps distribute torque more effectively. This can be achieved through several methods, including clutch-type systems, electronically controlled systems, and viscous fluid-based designs.
          </p>
          <p lang="zh">
            LSD在左右转速差超过一定值时限制差速，使两侧都能获得驱动力。方式有多片离合器、电子控制、齿轮啮合轴向力、粘性流体剪阻力等。
          </p>
        </div>

        <div className="bilingual">
          <p lang="en">
            In performance cars, LSDs are used not only to improve traction in low-grip conditions, but also to make better use of available power and enhance handling.
          </p>
          <p lang="zh">
            运动车型更多为保驱动力与改善操控而用 LSD，而非仅为脱困。
          </p>
        </div>

        <p className="image">
          <img alt="" src={i1OGFsbI1htoO} />
        </p>

        <p className="image">
          <img alt="" src={i1a2lI6y1YtRXSB} />
        </p>

        <h3 className="section-header bilingual-title"><span lang="en">● Types of LSD</span><span className="bilingual-sep"> / </span><span lang="zh">● LSD 种类</span></h3>

        <h3 className="bilingual-title"><span lang="en">Torque-Sensitive Type</span><span className="bilingual-sep"> / </span><span lang="zh">转矩感应式</span></h3>

        <div className="bilingual">
          <p lang="en">
            This type of limited-slip differential uses specially designed gears. When a difference in torque arises between the left and right wheels, internal resistance increases, limiting the amount of slip. Because these systems can tightly control differences in wheel speed, they are effective in demanding conditions such as circuit driving, and their response is very quick. Common types include torque-sensitive designs such as Torsen and helical differentials, as well as clutch-type multi-plate systems.
          </p>
          <p lang="zh">
            特殊齿轮组合：左右转矩差增大时齿面阻力增加，限制打滑。限滑力强，适合赛道等高负荷，响应快。含多片离合器、Torsen、螺旋齿轮（Helical）等。
          </p>
        </div>

        <h3 className="bilingual-title"><span lang="en">Speed-Sensitive Type</span><span className="bilingual-sep"> / </span><span lang="zh">转速感应式</span></h3>

        <div className="bilingual">
          <p lang="en">
            These systems restrict differential action using a highly viscous silicone fluid rather than gears. The most common is the viscous type, which relies on shear resistance in the fluid, although there are also designs that use fluid flow through small orifices to create resistance. These systems do not limit wheel speed difference as effectively as torque-biasing types, and their response is slower, but they can be easier to manage on low-traction surfaces.
          </p>
          <p lang="zh">
            用高粘度硅油而非齿轮限滑，代表为粘性 LSD，亦有油经小孔流动的孔板式。限滑力与响应弱于转矩式，但低附着路面更易驾驭。
          </p>
        </div>

        <h3 className="bilingual-title"><span lang="en">Active-Control Type</span><span className="bilingual-sep"> / </span><span lang="zh">主动控制式</span></h3>

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
