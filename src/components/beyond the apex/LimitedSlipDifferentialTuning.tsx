import i1e2eQMrK0TclEE from "../../assets/images/i1e2eQMrK0TclEE.webp";

const LimitedSlipDifferentialTuning = () => (
  <>
    <div className="manual_detail">
      <div className="content_header">
        <h1>Limited Slip Differential / 限滑差速器</h1>
      </div>
      <div className="body">
        <div className="bilingual">
          <p lang="en">
            A limited-slip differential (LSD) helps ensure effective transmission of power to the road and improves traction during cornering. Of the various types available, mechanical LSDs that use multi-plate clutches offer a high level of control over the locking characteristics. This allows them to be tuned to suit drivetrain layout, vehicle characteristics, driving style and course conditions. The drawback is that the higher loads placed on the components can increase wear, requiring more frequent oil changes and maintenance.
          </p>
          <p lang="zh">
            快速过弯要把动力可靠传到路面，限滑差速器（LSD）几乎是必需品；差动限制最强的是利用多片离合器压紧的“机械式”LSD，可自由设定作用强度与响应，匹配驱动布局、驾驶风格与赛道。
          </p>
        </div>

        <p className="image">
          <img alt="" src={i1e2eQMrK0TclEE} />
        </p>

        <div className="bilingual">
          <p lang="en">
            Mechanical LSDs offer a high degree of adjustability in controlling the speed difference between the drive wheels, but they are more specialized components and are not commonly fitted as standard on most vehicles.
          </p>
          <p lang="zh">
            机械式 LSD 多作为赛车部件后装，并非量产标配。
          </p>
        </div>

        <h3>
          Locking Factor / 锁定率
        </h3>

        <div className="bilingual">
          <p lang="en">
            The locking factor describes the extent to which a limited-slip differential restricts the speed difference between the drive wheels. In a standard open differential, the locking factor is effectively zero, allowing the wheels to rotate independently, while 100 percent represents full lock, forcing both wheels to turn at the same speed. The higher the locking factor, the greater the restriction on speed difference. However, a higher setting is not always better. The locking effect must be matched to the drivetrain layout, vehicle characteristics and driving conditions. If set too high, it can increase understeer and reduce cornering performance. In many cases, a moderate locking level offers a good balance, but optimal settings depend on the application.
          </p>
          <p lang="zh">
            锁定率表示 LSD 限制左右轮速差的程度：0% 为开放式差速器，100% 为完全锁死。并非越高越好，与驱动形式、车高、轮距等相关；过高会导致进弯强烈转向不足等。一般约 50% 较易驾驭。
          </p>
        </div>

        <h3>
          Initial Torque / 初始扭矩
        </h3>

        <div className="bilingual">
          <p lang="en">
            Initial torque refers to the preload applied to the clutch plates inside the differential. Changing the initial torque affects how quickly and how strongly the LSD begins to lock. Higher preload provides more immediate locking and can improve traction under acceleration, while lower preload allows smoother engagement and easier drivability. Tuning often involves adjusting initial torque, but excessive preload can reduce cornering performance and, in front-wheel-drive vehicles, increase torque steer. More recently, setups combining lower initial torque with higher locking characteristics under load have become more common.
          </p>
          <p lang="zh">
            初始扭矩是差速器内摩擦片预紧力；调高则油门响应更快、瞬间锁止，调低则更温和、易驾。调校常提高初始扭矩，但会损转向性或使 FF 扭矩转向加剧等。
          </p>
        </div>

        <h3 className="section-header">
          ● Types of Mechanical LSD / ● 机械式 LSD 种类
        </h3>

        <h3>
          1-WAY / 1WAY
        </h3>

        <div className="bilingual">
          <p lang="en">
            This type of LSD operates only under acceleration. Because it does not engage off-throttle, it allows the inside wheel to rotate more freely on corner entry, similar to an open differential, resulting in smoother turn-in. This type of LSD is well suited to front-wheel-drive cars, which are prone to understeer, although it can produce a noticeable change in handling depending on throttle input.
          </p>
          <p lang="zh">
            仅在加速时作用；收油时不工作，保留内轮差速，进弯更顺，适合转向不足明显的 FF；油门开/关时性格差异大。
          </p>
        </div>

        <h3>
          2-WAY / 2WAY
        </h3>

        <div className="bilingual">
          <p lang="en">
            A 2-way LSD operates under both acceleration and deceleration. This provides strong locking characteristics, which can increase understeer on entry but improves stability under braking. It also offers predictable response and allows the driver to influence the car’s direction using the throttle.
          </p>
          <p lang="zh">
            加速与减速均作用；进弯可能更偏转向不足，但制动时姿态稳定，可更果断入弯，响应好，适合积极踩油门过弯。
          </p>
        </div>

        <h3>
          1.5-WAY / 1.5WAY
        </h3>

        <div className="bilingual">
          <p lang="en">
            This type of LSD combines characteristics of both 1-way and 2-way systems. It provides full locking under acceleration, while offering reduced locking during deceleration to allow smoother turn-in. This gives a balanced setup, retaining traction while improving corner entry behavior compared with a full 2-way system.
          </p>
          <p lang="zh">
            兼具 1WAY 与 2WAY：加速方向全力锁止，减速方向减弱以利进弯，兼顾易驾与全能。
          </p>
        </div>
      </div>
    </div>
  </>
);

export default LimitedSlipDifferentialTuning;
