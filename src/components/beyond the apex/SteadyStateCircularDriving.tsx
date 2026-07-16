import i1qF8X2JMMTihhB from "../../assets/images/i1qF8X2JMMTihhB.webp";
import i14qXV8L6Qy1C from "../../assets/images/i14qXV8L6Qy1C.webp";
import i1T4hMVk6SYMKuB from "../../assets/images/i1T4hMVk6SYMKuB.webp";
import i1IsEFFVshrl5EE from "../../assets/images/i1IsEFFVshrl5EE.webp";
import i1f2PameuAauJ8c from "../../assets/images/i1f2PameuAauJ8c.webp";

const SteadyStateCircularDriving = () => (
  <>
    <div className="manual_detail">
      <div className="content_header">
        <h1>2-2 : Steady-state Circular Driving / 车辆的定常圆周行驶</h1>
        <h2>
          Cornering depends on the moment balance of the front and rear tires /
          车辆的转向取决于前后轮力矩的平衡
        </h2>
      </div>
      <div className="body">
        <h3 className="section-header">
          ● Definition of steering balance / 转向特性的定义
        </h3>

        <div className="bilingual">
          <p lang="en">
            When a car is driven at a constant steering angle and speed, it will trace a circular path with a fixed radius. This condition is known as steady-state circular driving and is commonly used in vehicle dynamics. Observing a car under steady-state conditions can reveal the fundamental properties of its motion.
            <br />
            <br />
            For example, imagine a car in steady-state circular driving as the speed is gradually increased. If the front tires generate relatively less cornering effect as the car accelerates, the turning radius will increase with speed (the driving line expands). As a result, the steering angle must be increased to maintain the original circular path.
            <br />
            <br />
            Conversely, if the front tires generate relatively more cornering effect as the car accelerates, the turning radius will decrease (the driving line contracts), so the steering angle must be reduced to maintain the original path. Requiring additional steering input as speed increases is called understeer (US), while requiring less steering input is called oversteer (OS). When the turning radius can be maintained without influence from changes in speed, the condition is referred to as neutral steer (NS). These behaviors are known as the steering characteristics of the vehicle. It should be noted that a vehicle exhibiting oversteer can reach a turning radius of zero at a certain speed (Fig. 2-2-2). A zero turning radius corresponds to a spin, and the speed at which this occurs is called the critical stability speed.
          </p>
          <p lang="zh">
            以一定舵角与一定速度行驶的车辆，会描出固定半径的圆。这一状态称为定常圆周行驶，是车辆动力学中常用的条件。观察定常状态下的车辆运动，有助于把握其基本运动特性。
            <br />
            <br />
            例如，设想车辆已在定常圆周行驶，再逐渐提高车速。若加速时前轮产生的转向效果相对变弱，转弯半径会随车速增大（行驶轨迹外扩），要保持原圆就必须加大舵角。
            <br />
            <br />
            反之，若前轮转向效果相对增强，转弯半径会随车速减小（轨迹内收），就必须减小舵角才能保持原路径。车速升高时需要追加转向输入的特性称为不足转向（US）；需要减少转向输入的称为过度转向（OS）；转弯半径基本不受车速增减影响而保持一定的称为中性转向（NS）。这些统称为车辆的转向特性。需要注意：过度转向车辆在某一车速下转弯半径可变为零（图 2-2-2）。半径为零对应自旋，到达该状态的车速称为稳定极限速度。
          </p>
        </div>

        <p className="image">
          <img alt="" src={i1qF8X2JMMTihhB} />
        </p>
        <div className="bilingual">
          <p className="caption" lang="en">
            Fig. 2-2-1: Changes in vehicle sweep when speed is increased.
          </p>
          <p className="caption" lang="zh">
            图2-2-1：提高车速时车辆轨迹的变化。
          </p>
        </div>

        <p className="image">
          <img alt="" src={i14qXV8L6Qy1C} />
        </p>
        <div className="bilingual">
          <p className="caption" lang="en">
            Fig. 2-2-2: Correlation of speed and turning radius under stable steering angle.
          </p>
          <p className="caption" lang="zh">
            图2-2-2：实际舵角一定时，不同转向特性下速度与转弯半径的关系。
          </p>
        </div>

        <p className="image">
          <img alt="" src={i1T4hMVk6SYMKuB} />
        </p>
        <div className="bilingual">
          <p className="caption" lang="en">
            Chart 2-2-1: Steering Characteristics.
          </p>
          <p className="caption" lang="zh">
            表2-2-1：转向特性一览。
          </p>
        </div>

        <h3 className="section-header">
          ● Relation of steering characteristics and slip angle /
          转向特性与侧偏角的关系
        </h3>

        <div className="bilingual">
          <p lang="en">
            There is an important relationship between the front and rear tire slip angles (β_front and β_rear) and the steering characteristics of a vehicle. Refer to Chart 2-2-1. Under steady-state circular driving, if β_front is greater than β_rear, the vehicle exhibits understeer; if β_front equals β_rear, it exhibits neutral steer; and if β_front is less than β_rear, it exhibits oversteer. This relationship holds even when lateral forces are not strictly proportional to slip angle or when additional lateral effects are present. It is a geometric relationship that remains valid under steady-state circular conditions.
          </p>
          <p lang="zh">
            前后轮胎侧偏角（β前轮、β后轮）与车辆转向特性之间有重要关系。参见表 2-2-1：在定常圆周行驶中，若 β前轮＞β后轮，表现为不足转向；β前轮＝β后轮，为中性转向；β前轮＜β后轮，为过度转向。这一关系即使在侧向力并不严格与侧偏角成正比、或另有其他侧向作用时仍然成立——它是定常圆周条件下由几何关系决定的。
          </p>
        </div>

        <p className="image">
          <img alt="" src={i1IsEFFVshrl5EE} />
        </p>
        <div className="bilingual">
          <p className="caption" lang="en">
            Fig. 2-2-3: Steering characteristic changes according to the difference in slip angle of the front and rear tires.
          </p>
          <p className="caption" lang="zh">
            图2-2-3：车辆转向特性可由前后轮胎侧偏角之差来判断。
          </p>
        </div>

        <div className="bilingual">
          <p lang="en">
            When discussing cornering and suspension movement, the motion of a vehicle is often described in terms of three rotational axes, as shown in Fig. 2-2-4. The first is rotation about the longitudinal axis (x-axis), known as roll. The second is rotation about the lateral axis (y-axis), known as pitch. The third is rotation about the vertical axis (z-axis), known as yaw. These terms are used frequently and are important to keep in mind.
          </p>
          <p lang="zh">
            讨论转弯与悬架运动时，常把车辆运动按图 2-2-4 所示的三个旋转轴来描述：绕纵向轴（x 轴）的旋转称为侧倾（roll）；绕横向轴（y 轴）的称为俯仰（pitch）；绕竖直轴（z 轴）的称为横摆（yaw）。这些术语会反复出现，宜记住。
          </p>
        </div>

        <p className="image">
          <img alt="" src={i1f2PameuAauJ8c} />
        </p>
        <div className="bilingual">
          <p className="caption" lang="en">
            Fig. 2-2-4: The three rotational movements that occur on a vehicle.
          </p>
          <p className="caption" lang="zh">
            图2-2-4：车辆上出现的三种旋转运动。
          </p>
        </div>
      </div>
    </div>
  </>
);

export default SteadyStateCircularDriving;
