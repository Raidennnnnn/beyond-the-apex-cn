import i1Acv5I3iLwGpW from "../../assets/images/i1Acv5I3iLwGpW.webp";
import i1gcMtlnD2w678E from "../../assets/images/i1gcMtlnD2w678E.webp";
import i13LGlvKhGo9AG from "../../assets/images/i13LGlvKhGo9AG.webp";

const CarResponseToSteeringAngle = () => (
  <>
    <div className="manual_detail">
      <div className="content_header">
        <h1>
          2-3 : A Car&apos;s Response to Changes in Steering Angle /
          舵角变化时的车辆响应
        </h1>
        <h2>
          Automotive motion is an oscillation phenomenon /
          车辆运动也是一种振动现象
        </h2>
      </div>
      <div className="body">
        <h3 className="section-header">● Turn-in mechanism / 入弯机制</h3>

        <div className="bilingual">
          <p lang="en">
            Observation of a car in steady-state circular driving reveals the fundamental characteristics of vehicular motion. It also shows how the car responds to changes in steering angle, which is an important aspect of vehicle dynamics.
            <br />
            <br />
            Using Fig. 2-3-1, let us examine the turn-in process step by step. (1) When the steering wheel is turned while the car is traveling straight, the vehicle’s inertia tends to keep it moving in a straight line. At that instant, a slip angle develops between the direction in which the front tires are pointed and the actual direction of motion, generating cornering force. Because this force is produced through tire deformation, there is a slight time delay. (2) The generation of cornering force at the front initiates yaw motion; however, at that moment, the rear tires continue along the original path due to inertia. (3) After a short delay, a slip angle develops at the rear tires as well, producing cornering force. (4) Once the front and rear cornering forces stabilize, the yaw rate becomes steady and the vehicle enters a stable turn.
            <br />
            <br />
            It is important to understand that yaw motion does not occur simultaneously with steering input; there is a slight delay due to the vehicle’s moment of inertia and the time required for the tires to generate cornering force.
          </p>
          <p lang="zh">
            观察定常圆周行驶，可以把握车辆运动的基本特性；舵角变化时车辆如何响应，同样是车辆动力学中不可忽视的问题。
            <br />
            <br />
            借助图 2-3-1，逐步看入弯过程。(1) 直线行驶中转动方向盘时，惯性使车辆仍倾向直行；前轮朝向与实际运动方向出现差值，产生侧偏角并形成侧偏力。该力由轮胎变形产生，因此有轻微时间延迟。(2) 前轮侧偏力使横摆运动开始，但此时后轮因惯性仍大致沿原路径前进。(3) 稍后再过片刻，后轮也产生侧偏角与侧偏力。(4) 前后侧偏力都稳定后，横摆角速度落在某一值上，车辆进入稳定转弯。
            <br />
            <br />
            要理解的是：横摆并非与转向输入同时发生；因车辆转动惯量与轮胎产生侧偏力所需时间，两者之间存在轻微延迟（相位差）。
          </p>
        </div>

        <p className="image">
          <img alt="" src={i1Acv5I3iLwGpW} />
        </p>
        <div className="bilingual">
          <p className="caption" lang="en">
            Fig. 2-3-1: Turn-in mechanism.
          </p>
          <p className="caption" lang="zh">
            图2-3-1：入弯机制。
          </p>
        </div>

        <h3 className="section-header">
          ● Steering characteristics and car response /
          转向特性与车辆响应
        </h3>

        <div className="bilingual">
          <p lang="en">
            The response of a car to steering input depends on its steering characteristics and speed. Fig. 2-3-2 illustrates how a vehicle responds to a pulse input (a sharp steering input followed by a return). A car with understeer, when driven above a certain speed, may show an initial transient instability before gradually settling into a steady state. A car with neutral steer remains stable and settles quickly into a steady state. In contrast, a car with oversteer, if driven above its critical stability speed, will become unstable and can develop into a spin. These responses are summarized in Chart 2-3-1.
            <br />
            <br />
            Cars with understeer or neutral steer tend to return to a stable condition, whereas a car with oversteer may lose stability once its speed exceeds the critical stability speed.
          </p>
          <p lang="zh">
            车辆对转向输入的响应取决于转向特性与车速。图 2-3-2 示意脉冲转向（快速打舵再回正）时的响应：不足转向车辆在某一车速以上可能先出现短暂振荡，再逐渐收敛到稳态；中性转向车辆稳定，较快进入稳态；过度转向车辆若超过稳定极限速度，响应会发散并可能自旋。这些响应归纳见表 2-3-1。
            <br />
            <br />
            不足转向或中性转向倾向于回到稳定状态；过度转向一旦超过稳定极限速度，则可能失去稳定性。
          </p>
        </div>

        <p className="image">
          <img alt="" src={i1gcMtlnD2w678E} />
        </p>
        <div className="bilingual">
          <p className="caption" lang="en">
            Fig. 2-3-2: Graph representing vehicle&apos;s swept path and yaw rate under pulse steering condition.
          </p>
          <p className="caption" lang="zh">
            图2-3-2：脉冲转向时车辆行驶轨迹与横摆角速度的历程。
          </p>
        </div>

        <p className="image">
          <img alt="" src={i13LGlvKhGo9AG} />
        </p>
        <div className="bilingual">
          <p className="caption" lang="en">
            Chart 2-3-1: Response summary of vehicles with different steering characteristics: understeer (US), neutral steer (NS), and oversteer (OS). A vehicle with oversteer can become unstable and may spin when its speed exceeds the critical stability speed.
          </p>
          <p className="caption" lang="zh">
            表2-3-1：不同转向特性（不足转向 US、中性转向 NS、过度转向 OS）下的响应概要。过度转向车辆超过稳定极限速度时可能失稳并自旋。
          </p>
        </div>

        <h3 className="section-header">
          ● Applying oscillation theory to vehicle motion /
          将振动理论应用于车辆运动
        </h3>

        <div className="bilingual">
          <p lang="en">
            In Sections 1-5, we examined how system response varies with damping ratio. When the damping ratio is less than 1, the system is underdamped and the response becomes oscillatory. When the ratio exceeds 1, the system is overdamped and returns to equilibrium without oscillation. At a damping ratio of exactly 1, the system is critically damped, achieving the fastest return to equilibrium without overshoot.
            <br />
            <br />
            These same principles apply beyond a simple mass–spring–damper model. Although a vehicle is far more complex, its motion can be interpreted through the same framework. Damping ratio and natural frequency remain the key descriptors, and in that sense, overall vehicle behavior can be understood as an oscillatory system.
            <br />
            <br />
            As shown in Fig. 2-3-2, a vehicle’s yaw response can also be described in terms of damping. A car exhibiting understeer typically shows a stable, well-damped response, with yaw motion settling smoothly after a disturbance. A neutrally balanced car lies near the boundary between oscillatory and non-oscillatory behavior, analogous to a critically damped system. By contrast, a car prone to oversteer may display a lightly damped—or even unstable—response at higher speeds, where yaw motion can grow rather than decay. Yaw damping refers to the forces and moments that resist this rotational motion about the vertical axis.
          </p>
          <p lang="zh">
            在 1-5 中我们看过系统响应如何随阻尼比变化：阻尼比小于 1 为不足阻尼，响应呈振荡；大于 1 为过阻尼，无振荡地回到平衡；恰为 1 为临界阻尼，以最快方式无超调地回到平衡。
            <br />
            <br />
            这些原理并不限于简单的质量–弹簧–阻尼模型。车辆虽更复杂，其运动仍可用同一框架解读：阻尼比与固有频率仍是关键描述量，整体车辆行为也可理解为一个振动系统。
            <br />
            <br />
            如图 2-3-2，车辆横摆响应也可用阻尼来描述。不足转向通常表现为稳定、阻尼良好，扰动后横摆平滑收敛；中性转向接近振荡与非振荡的边界，类似临界阻尼；倾向过度转向的车辆在较高车速下可能阻尼偏弱甚至失稳，横摆会增长而非衰减。横摆阻尼指抵抗绕竖直轴旋转的力与力矩。
          </p>
        </div>
      </div>
    </div>
  </>
);

export default CarResponseToSteeringAngle;
