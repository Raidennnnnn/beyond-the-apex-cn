import i1GaS0wlqUwTdz from "../../assets/images/i1GaS0wlqUwTdz.webp";
import i1g0AMihtMeNNcc from "../../assets/images/i1g0AMihtMeNNcc.webp";

const SuspensionSettings1 = () => (
  <>
    <div className="manual_detail">
      <div className="content_header">
        <h1 className="bilingual-title"><span lang="en">Suspension ①</span><span className="bilingual-sep"> / </span><span lang="zh">悬架 ①</span></h1>
      </div>
      <div className="body">
        <h3 className="section-header bilingual-title"><span lang="en">● Ride Height/Spring Rate</span><span className="bilingual-sep"> / </span><span lang="zh">● 车高调节／弹簧刚度</span></h3>

        <h3 className="bilingual-title"><span lang="en">Changing Your Car’s Behavior</span><span className="bilingual-sep"> / </span><span lang="zh">可自由改变车辆性格</span></h3>

        <div className="bilingual">
          <p lang="en">
            On smooth, flat surfaces, lowering the ride height reduces the center of gravity, helping to limit pitch during acceleration and braking, as well as body roll in cornering. This can improve overall performance. Vehicle behavior can also be fine-tuned by adjusting the front and rear ride heights independently. For example, setting the front slightly lower than the rear can increase front-end grip on corner entry and improve turn-in response. In front-wheel-drive cars, this can also help counter front-end lift under acceleration.
          </p>
          <p lang="zh">
            若不受路面凹凸影响，车高越低重心越低，过弯侧倾与加减速俯仰越被抑制，运动性能越高。前后车高不同也可优化举动变化：例如相对后部把前部车高调低，进弯制动时能把前轮更强压向路面，使转向更顺畅。FF 车上还能抑制出弯加速时的抬头，更易施加牵引力。
          </p>
        </div>

        <div className="bilingual">
          <p lang="en">
            Spring rate has a major influence on how a car responds. It is often assumed that stiffer springs are always better, but this is not the case. Increasing stiffness can reduce unwanted motions such as pitch, yaw and roll, much like lowering ride height, but excessive stiffness can cause the tires to lose contact with the road over bumps, reducing traction. For this reason, spring rate must be carefully matched to the intended use.
          </p>
          <p lang="zh">
            弹簧刚度对运动性能影响也很大。一般认为弹簧越硬越好，其实未必。与降低车高类似，加硬能抑制侧倾、俯仰、横摆等妨碍行驶的运动，但过硬会增大路面反力，损害轮胎接地、牵引力变差。应最优先平衡硬度与柔韧。
          </p>
        </div>

        <div className="bilingual">
          <p lang="en">
            It also plays a key role in handling balance. Increasing front spring stiffness tends to promote understeer, while increasing rear stiffness can promote oversteer. However, these effects are closely linked to damper settings, so both must be considered together when tuning the suspension.
          </p>
          <p lang="zh">
            弹簧刚度对操控特性影响也大。基本上前部刚度高则倾向转向不足，后部高则倾向转向过度。但此处减振器衰减力也会起作用，须把二者复合起来考虑设定。
          </p>
        </div>

        <p className="image">
          <img alt="" src={i1g0AMihtMeNNcc} />
        </p>

        <div className="bilingual">
          <p className="caption" lang="en">
            Centre of gravity
          </p>
          <p className="caption" lang="zh">
            重心高度
          </p>
        </div>

        <h3 className="section-header bilingual-title"><span lang="en">● Damping Force</span><span className="bilingual-sep"> / </span><span lang="zh">● 减振器衰减力</span></h3>

        <h3 className="bilingual-title"><span lang="en">Controlling Spring Compression and Extension</span><span className="bilingual-sep"> / </span><span lang="zh">压缩侧、回弹侧灵活设定</span></h3>

        <div className="bilingual">
          <p lang="en">
            Shock absorbers control the rate at which suspension springs compress and rebound under load, and the force they generate is known as damping. This damping force is created by resistance in the fluid and gas inside the damper as the piston moves. Higher damping slows spring movement more quickly, while lower damping allows movement to continue for longer.
          </p>
          <p lang="zh">
            控制受载弹簧伸缩速度的是减振器，其抑制力称为衰减力。衰减力由减振器内封入的油或气体中活塞上下运动时产生的阻力形成；衰减力高则弹簧伸缩很快平息，低则不易平息。
          </p>
        </div>

        <div className="bilingual">
          <p lang="en">
            Compression and rebound damping can be adjusted independently, allowing more precise control over a car’s behavior. Increasing compression damping resists rapid suspension movement, helping to reduce dive under braking and roll in cornering. However, excessive stiffness can reduce compliance over bumps and make it harder for the tires to maintain consistent contact with the road. Increasing rebound damping helps control how quickly the suspension returns after being compressed, stabilizing the car after larger weight transfers. For example, it can limit excessive front-end lift during acceleration, helping maintain front tire contact.
          </p>
          <p lang="zh">
            基本上压缩侧与回弹侧设定不同，按设定可改变举动与操控性。提高压缩侧，可抑制制动点头、旋回侧倾等姿态变化的速度，但底盘会变「撑」，凹凸处易跳、也不易活用载荷转移。另一方面回弹侧衰减力对平息大举动变化有效：例如提高回弹侧，可防止出弯加油时前悬架伸长，保持前轮接地。
          </p>
        </div>

        <div className="bilingual">
          <p lang="en">
            Handling can also be adjusted by varying compression and rebound damping between the front and rear. Reducing front compression damping allows weight to transfer forward more quickly under braking, increasing front grip and helping to reduce understeer. At the rear, reducing rebound damping can make the car more willing to rotate, while increasing it tends to stabilize the rear and promote understeer. As a general guideline, compression damping is usually set first, followed by rebound.
          </p>
          <p lang="zh">
            操控特性也可通过前后回弹／压缩衰减力调整来改变。减弱前部压缩侧，进弯时向前的载荷转移量增加，可减弱转向不足。回弹侧方面，要加强转向过度则减弱后部衰减力，要加强转向不足则提高后部，是基本做法。程序上先定出压缩侧设定，再设定回弹侧，是正道。
          </p>
        </div>

        <p className="image">
          <img alt="" src={i1GaS0wlqUwTdz} />
        </p>

        <div className="bilingual">
          <p className="caption" lang="en">
            Front and rear damping force (for spring compression).
          </p>
          <p className="caption" lang="zh">
            前后衰减力（压缩侧）
          </p>
        </div>
      </div>
    </div>
  </>
);

export default SuspensionSettings1;
