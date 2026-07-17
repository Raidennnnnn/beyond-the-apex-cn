import i1e2eQMrK0TclEE from "../../assets/images/i1e2eQMrK0TclEE.webp";

const LimitedSlipDifferentialTuning = () => (
  <>
    <div className="manual_detail">
      <div className="content_header">
        <h1 className="bilingual-title"><span lang="en">Limited Slip Differential</span><span className="bilingual-sep"> / </span><span lang="zh">限滑差速器</span></h1>
      </div>
      <div className="body">
        <div className="bilingual">
          <p lang="en">
            A limited-slip differential (LSD) helps ensure effective transmission of power to the road and improves traction during cornering. Of the various types available, mechanical LSDs that use multi-plate clutches offer a high level of control over the locking characteristics. This allows them to be tuned to suit drivetrain layout, vehicle characteristics, driving style and course conditions. The drawback is that the higher loads placed on the components can increase wear, requiring more frequent oil changes and maintenance.
          </p>
          <p lang="zh">
            追求快速过弯时，能把发动机功率可靠传到路面的限滑差速器（LSD）可谓必需品；在众多 LSD 中，差动限制效果最大的是利用多片离合器压紧力的所谓「机械式」。其很大优点是可自由设定作用强度与开始作用前的响应，从而按驱动布局等车辆特性、驾驶风格或赛道布局获得最佳牵引力。另一方面，在发挥很大差动限制力的同时，内部零件负荷也高，换油与大修等定期维护不可或缺。
          </p>
        </div>

        <p className="image">
          <img alt="" src={i1e2eQMrK0TclEE} />
        </p>

        <div className="bilingual">
          <p className="caption" lang="en">
            Mechanical LSDs offer a high degree of adjustability in controlling the speed difference between the drive wheels, but they are more specialized components and are not commonly fitted as standard on most vehicles.
          </p>
          <p className="caption" lang="zh">
            发挥最大差动限制力的「机械式 LSD」，多作为赛车零件后装专用件。
          </p>
        </div>

        <h3 className="bilingual-title"><span lang="en">Locking Factor</span><span className="bilingual-sep"> / </span><span lang="zh">锁定率</span></h3>

        <div className="bilingual">
          <p lang="en">
            The locking factor describes the extent to which a limited-slip differential restricts the speed difference between the drive wheels. In a standard open differential, the locking factor is effectively zero, allowing the wheels to rotate independently, while 100 percent represents full lock, forcing both wheels to turn at the same speed. The higher the locking factor, the greater the restriction on speed difference. However, a higher setting is not always better. The locking effect must be matched to the drivetrain layout, vehicle characteristics and driving conditions. If set too high, it can increase understeer and reduce cornering performance. In many cases, a moderate locking level offers a good balance, but optimal settings depend on the application.
          </p>
          <p lang="zh">
            表示 LSD 本身作用强度的数值即锁定率：0% 为原厂开放差速器，100% 为直连差速锁死；值越高差动限制效果越大。但并非单纯越高越好，与驱动方式、车高、轮距等也密切相关，理想值随目标性格而变。超过理想值抬高锁定率，会出现强烈初期转向不足等，过弯性能会明显受损。一般认为约 50% 前后较易驾驭且能获得足够 LSD 效果，但仍宜反复试错找出最优值。
          </p>
        </div>

        <h3 className="bilingual-title"><span lang="en">Initial Torque</span><span className="bilingual-sep"> / </span><span lang="zh">初始扭矩</span></h3>

        <div className="bilingual">
          <p lang="en">
            Initial torque refers to the preload applied to the clutch plates inside the differential. Changing the initial torque affects how quickly and how strongly the LSD begins to lock. Higher preload provides more immediate locking and can improve traction under acceleration, while lower preload allows smoother engagement and easier drivability. Tuning often involves adjusting initial torque, but excessive preload can reduce cornering performance and, in front-wheel-drive vehicles, increase torque steer. More recently, setups combining lower initial torque with higher locking characteristics under load have become more common.
          </p>
          <p lang="zh">
            初始扭矩指压紧差速器壳内摩擦片的压力（预压）。调高或调低可改变 LSD 锁止所需时间：调高则对油门操作反应更快、瞬间锁止；调低则较温和地锁止、更易驾驶。调校上以提高扭矩为基本，但转向性受损、FF 车扭矩转向变强等缺点也不可忽视。近来低扭矩也能发挥较高 LSD 效果的产品也在增多。
          </p>
        </div>

        <h3 className="section-header bilingual-title"><span lang="en">● Types of Mechanical LSD</span><span className="bilingual-sep"> / </span><span lang="zh">● 机械式 LSD 的种类</span></h3>

        <h3>
          1-WAY / 1WAY
        </h3>

        <div className="bilingual">
          <p lang="en">
            This type of LSD operates only under acceleration. Because it does not engage off-throttle, it allows the inside wheel to rotate more freely on corner entry, similar to an open differential, resulting in smoother turn-in. This type of LSD is well suited to front-wheel-drive cars, which are prone to understeer, although it can produce a noticeable change in handling depending on throttle input.
          </p>
          <p lang="zh">
            仅在油门踏下时作用的 LSD。收油时不工作，因而可活用原厂差速器的内轮差补偿，进弯更顺畅。尤其适合转向不足强的 FF 车，但油门开／关时的举动差异会很明显。
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
            油门踏下与松开时均有效的 LSD。会产生偏强的初期转向不足，但减速时能维持稳定姿态，因而可更果断进弯。响应出色，可积极踩油门把车「踩弯」。
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
            兼具 1WAY 与 2WAY 双方特性的 LSD：加速方向保持 LSD 效果，减速方向减弱作用，也兼顾进弯的易转性。可说是不太显「脾气」、全能好用的 LSD。
          </p>
        </div>
      </div>
    </div>
  </>
);

export default LimitedSlipDifferentialTuning;
