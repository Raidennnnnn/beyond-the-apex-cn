import i1GaS0wlqUwTdz from "../../assets/images/i1GaS0wlqUwTdz.webp";
import i1g0AMihtMeNNcc from "../../assets/images/i1g0AMihtMeNNcc.webp";

const SuspensionSettings1 = () => (
  <>
    <div className="manual_detail">
      <div className="content_header">
        <h1>Suspension ① / 悬架 ①</h1>
      </div>
      <div className="body">
        <h3 className="section-header">
          ● Ride Height/Spring Rate / ● 车高/弹簧刚度
        </h3>

        <h3>
          Changing Your Car’s Behavior / 自由改变车辆性格
        </h3>

        <div className="bilingual">
          <p lang="en">
            On smooth, flat surfaces, lowering the ride height reduces the center of gravity, helping to limit pitch during acceleration and braking, as well as body roll in cornering. This can improve overall performance. Vehicle behavior can also be fine-tuned by adjusting the front and rear ride heights independently. For example, setting the front slightly lower than the rear can increase front-end grip on corner entry and improve turn-in response. In front-wheel-drive cars, this can also help counter front-end lift under acceleration.
            <br />
            <br />
            Spring rate has a major influence on how a car responds. It is often assumed that stiffer springs are always better, but this is not the case. Increasing stiffness can reduce unwanted motions such as pitch, yaw and roll, much like lowering ride height, but excessive stiffness can cause the tires to lose contact with the road over bumps, reducing traction. For this reason, spring rate must be carefully matched to the intended use.
            <br />
            <br />
            It also plays a key role in handling balance. Increasing front spring stiffness tends to promote understeer, while increasing rear stiffness can promote oversteer. However, these effects are closely linked to damper settings, so both must be considered together when tuning the suspension.
          </p>
          <p lang="zh">
            无凹凸的理想路面，车高越低重心越低，弯中侧倾与加减速俯仰越小，性能越高；前后不同车高可优化行为，例如前低后高可在进弯制动时更压前胎、转向更顺；FF 则需注意出弯加速时的抬头等。
          </p>
        </div>

        <p className="image">
          <img alt="" src={i1g0AMihtMeNNcc} />
        </p>

        <div className="bilingual">
          <p lang="en">
            Centre of gravity
          </p>
          <p lang="zh">
            重心高度
          </p>
        </div>

        <h3 className="section-header">
          ● Damping Force / ● 减衰力
        </h3>

        <h3>
          Controlling Spring Compression and Extension / 压缩侧与回弹侧灵活设定
        </h3>

        <div className="bilingual">
          <p lang="en">
            Shock absorbers control the rate at which suspension springs compress and rebound under load, and the force they generate is known as damping. This damping force is created by resistance in the fluid and gas inside the damper as the piston moves. Higher damping slows spring movement more quickly, while lower damping allows movement to continue for longer.
            <br />
            <br />
            Compression and rebound damping can be adjusted independently, allowing more precise control over a car’s behavior. Increasing compression damping resists rapid suspension movement, helping to reduce dive under braking and roll in cornering. However, excessive stiffness can reduce compliance over bumps and make it harder for the tires to maintain consistent contact with the road. Increasing rebound damping helps control how quickly the suspension returns after being compressed, stabilizing the car after larger weight transfers. For example, it can limit excessive front-end lift during acceleration, helping maintain front tire contact.
            <br />
            <br />
            Handling can also be adjusted by varying compression and rebound damping between the front and rear. Reducing front compression damping allows weight to transfer forward more quickly under braking, increasing front grip and helping to reduce understeer. At the rear, reducing rebound damping can make the car more willing to rotate, while increasing it tends to stabilize the rear and promote understeer. As a general guideline, compression damping is usually set first, followed by rebound.
          </p>
          <p lang="zh">
            减震器控制弹簧在载荷下的压缩与回弹速度，其阻力为减衰力，由油/气中活塞运动产生。压缩与回弹可分别设定，从而改变姿态与操控；例如加大压缩侧可抑制点头等。
          </p>
        </div>

        <p className="image">
          <img alt="" src={i1GaS0wlqUwTdz} />
        </p>

        <div className="bilingual">
          <p lang="en">
            Front and rear damping force (for spring compression).
          </p>
          <p lang="zh">
            前后减衰力（压缩侧）
          </p>
        </div>
      </div>
    </div>
  </>
);

export default SuspensionSettings1;
