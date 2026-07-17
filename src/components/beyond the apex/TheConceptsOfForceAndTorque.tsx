import i1QBv4PtsGeGNb from "../../assets/images/i1QBv4PtsGeGNb.webp";
import i1oAx5mRwrCELEc from "../../assets/images/i1oAx5mRwrCELEc.webp";
import i1ICYWgMIbJfsuB from "../../assets/images/i1ICYWgMIbJfsuB.webp";
import i1eHrk2MZMRpFz from "../../assets/images/i1eHrk2MZMRpFz.webp";

const TheConceptsOfForceAndTorque = () => (
  <>
    <div className="manual_detail">
      <div className="content_header">
        <h1>1-1 : The Concepts of Force and Torque / 力与力矩的概念</h1>
        <h2>The definitions and differences between the two / 两者的定义与区别</h2>
      </div>
      <div className="body">
        <div className="bilingual">
          <p lang="en">
            Whenever a car is in motion, multiple forces are at work, including torque. Understanding how those forces interact is the first step to understanding how a vehicle behaves.
          </p>
          <p lang="zh">
            行驶中的汽车会受到多种力的作用，其中也包括力矩。理解这些力如何相互作用，是理解车辆行为的第一步。
          </p>
        </div>

        <h3 className="section-header">● The definition of force / 力的定义</h3>

        <div className="bilingual">
          <p lang="en">
            The tires, suspension and engine all generate forces when a vehicle is in motion. These forces arise in different ways and may appear to represent different kinds of output. However, they can all be described using the same fundamental relationship, known as the equation of motion: F=ma (Force = mass × acceleration). Despite their different origins, they are governed by the same underlying principle.
          </p>
          <p lang="zh">
            轮胎、悬架与发动机在车辆行驶时都会产生力。这些力来源各异，看起来似乎代表不同种类的输出。然而，它们都可以用同一基本关系——运动方程 F=ma（力＝质量×加速度）来描述。尽管起源不同，它们遵循的是同一底层原理。
          </p>
        </div>

        <div className="bilingual">
          <p lang="en">
            The equation of motion shows that force is associated with the acceleration of a mass, meaning that force is what changes the speed or direction of an object. Conversely, if the speed or direction of a mass changes, some form of force must be acting on it.
          </p>
          <p lang="zh">
            运动方程表明，力与质量的加速相关：力就是改变物体速度或方向的作用。反过来说，只要质量的速度或方向发生了变化，就一定有某种力在作用。
          </p>
        </div>

        <div className="bilingual">
          <p lang="en">
            For example, the frictional force generated between the road surface and the tires alters both the speed and direction of the vehicle. At the same time, the damping force within the suspension reduces oscillations, controlling the motion of the car and its tires.
          </p>
          <p lang="zh">
            例如，路面与轮胎之间产生的摩擦力会改变车辆的速度与方向；与此同时，悬架中的阻尼力则减小振动，控制车身与轮胎的运动。
          </p>
        </div>

        <p className="image">
          <img alt="" src={i1QBv4PtsGeGNb} />
        </p>
        <div className="bilingual">
          <p className="caption" lang="en">
            Fig. 1-1-1: Although the forces acting on a car may appear different, they can all be described using the same fundamental principles of physics.
          </p>
          <p className="caption" lang="zh">
            图1-1-1：作用在车上的各种力看起来形式不同，但都可以用同一套基本物理原理来描述。
          </p>
        </div>

        <p className="image">
          <img alt="" src={i1oAx5mRwrCELEc} />
        </p>
        <div className="bilingual">
          <p className="caption" lang="en">
            Fig. 1-1-2: Force is an interaction that changes an object’s speed or direction of motion.
          </p>
          <p className="caption" lang="zh">
            图1-1-2：力是改变物体运动速度或方向的作用。
          </p>
        </div>

        <div className="bilingual">
          <p lang="en">
            The various forces that a car produces can all be calculated by the equation:
            <br />
            <b>F = ma (Force = Mass × Acceleration)</b>
            <br />
            Force is a phenomenon that affects the speed of a mass.
          </p>
          <p lang="zh">
            汽车产生的各种力都可以用这个式子计算：
            <br />
            <b>F = ma（力＝质量×加速度）</b>
            <br />
            力是影响质量速度的现象。
          </p>
        </div>

        <h3 className="section-header">● The definition of torque / 力矩的定义</h3>

        <div className="bilingual">
          <p lang="en">
            When you turn the steering wheel, a car changes direction because the tires generate a force in a direction perpendicular to the line of travel. A car’s rotational motion caused by such a force is called yaw. In a similar way, when a force causes rotational motion of an object about an axis, the effect is called torque. The amount of torque depends on the magnitude of the force applied multiplied by the distance from the axis of rotation. This can be mathematically represented as M = L × F, where torque equals force multiplied by its moment arm.
          </p>
          <p lang="zh">
            转动方向盘时，汽车改变方向，是因为轮胎在相对前进方向垂直的方向上产生了力。由这种力引起的车辆旋转运动称为横摆（yaw）。同理，当力使物体绕某一轴产生旋转运动时，这一作用称为力矩。力矩的大小取决于所施力的大小乘以到旋转轴的距离，数学上可表示为 M = L × F，即力矩等于力乘以其力臂。
          </p>
        </div>

        <div className="bilingual">
          <p lang="en">
            Let us consider the actual acting torque during the turning of a car. If the rotational axis is at the center of gravity of the vehicle, the torque produced by the front wheels is determined by [the distance of the front wheels from the center of gravity] × [the lateral force produced by the front wheels]. During the same turn, the rear wheels also produce torque, determined by [the distance of the rear wheels from the center of gravity] × [the lateral force produced by the rear wheels]. This generates an opposing moment that balances the front-wheel torque, ensuring the vehicle maintains a controlled rate of turn.
          </p>
          <p lang="zh">
            来看汽车转弯时实际作用的力矩。若把车辆重心设为旋转轴，则前轮产生的力矩由「重心到前轮的距离 × 前轮产生的横向力」决定。同一转弯中，后轮也会产生力矩，由「重心到后轮的距离 × 后轮产生的横向力」决定。这会产生与前轮力矩相反的力矩，从而平衡前轮力矩，使车辆保持受控的转弯角速度。
          </p>
        </div>

        <p className="image">
          <img alt="" src={i1ICYWgMIbJfsuB} />
        </p>
        <div className="bilingual">
          <p className="caption" lang="en">
            Fig. 1-1-3: Relationship between front and rear tire forces and the vehicle’s rotational motion. A car begins to turn when the forces acting on the front and rear tires create a net rotational effect about the center of gravity.
          </p>
          <p className="caption" lang="zh">
            图1-1-3：前后轮力矩与车辆旋转运动的关系。若前轮力矩大于后轮力矩，汽车即可开始过弯。
          </p>
        </div>

        <div className="bilingual">
          <p lang="en">
            Torque is the force that causes the rotational movement of an object.
            <br />
            <b>M = L × F (Torque = Length from the rotational axis × Force)</b>
          </p>
          <p lang="zh">
            力矩是使物体产生旋转运动的作用。
            <br />
            <b>M = L × F（力矩＝到旋转轴的距离 × 力）</b>
          </p>
        </div>

        <div className="bilingual">
          <p lang="en">
            For example, during actual cornering, turning the steering wheel causes the front tires to generate lateral force, creating a yawing moment that initiates the vehicle’s rotation. As the car approaches the apex of the corner, the forces at the front and rear tires reach a balance, and the vehicle follows a steady, stable path through the turn. Once the apex is passed, unwinding the steering wheel reduces the lateral force at the front tires. At the same time, the rear tires continue to generate lateral force, and the balance of moments shifts. This change reduces the vehicle’s yaw rate and allows it to settle, bringing the rotation to an end as the car exits the corner.
          </p>
          <p lang="zh">
            以实际过弯为例：转动方向盘时，前轮产生横向力，形成启动车辆旋转的横摆力矩。接近弯心（apex）时，前后轮胎上的力达到平衡，车辆沿稳定路径通过弯道。过弯心后回正方向盘，前轮横向力减小；与此同时后轮仍在产生横向力，力矩平衡随之改变。这一变化降低车辆的横摆角速度，使其回稳，并在出弯时结束旋转。
          </p>
        </div>

        <p className="image">
          <img alt="" src={i1eHrk2MZMRpFz} />
        </p>
        <div className="bilingual">
          <p className="caption" lang="en">
            Fig. 1-1-4.
          </p>
          <p className="caption" lang="zh">
            图1-1-4。
          </p>
        </div>

        <div className="bilingual">
          <p lang="en">
            Fig. 1-1-4 shows the forces generated at the front and rear wheels of a Nissan GT-R NISMO GT3 (left) and a Nissan DeltaWing (right). Let us assume that the rotational axis of the vehicle is at the center of gravity. Next, notice that the distances from the center of gravity to the front and rear wheels are different for each vehicle. We can now see that, to balance the yaw moment generated by the front and rear wheels, the forces required at the front and rear wheels must also differ. The center of gravity of the DeltaWing is positioned far toward the rear, so the grip forces required at the front and rear tires are significantly different. In practice, the front tires are extremely narrow, measuring only about 10 cm in width. In comparison, the center of gravity of the GT-R NISMO GT3 is located closer to the middle of the car, so the forces required at the front and rear tires are more evenly distributed.
          </p>
          <p lang="zh">
            图1-1-4 表示日产 GT-R NISMO GT3（左）与日产三角洲翼（DeltaWing，右）前后轮产生的力。假定车辆旋转轴在重心。可以看到，各车重心到前后轮的距离不同；因此，要使前后轮产生的横摆力矩平衡，前后轮所需的力大小也必然不同。三角洲翼的重心极度偏后，前后轮胎所需抓地力差异很大；实际上前轮使用宽度仅约 10 cm 的极窄轮胎。相比之下，GT-R NISMO GT3 的重心更靠近车身中部，前后轮胎所需的力分布也更均匀。
          </p>
        </div>
      </div>
    </div>
  </>
);

export default TheConceptsOfForceAndTorque;
