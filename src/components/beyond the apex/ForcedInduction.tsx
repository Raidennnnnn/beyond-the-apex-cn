import i17B3PNFugtKThB from "../../assets/images/i17B3PNFugtKThB.webp";
import i1pajaNoJhZbu from "../../assets/images/i1pajaNoJhZbu.webp";

const ForcedInduction = () => (
  <>
    <div className="manual_detail">
      <div className="content_header">
        <h1>Forced Induction / 强制进气</h1>
      </div>
      <div className="body">
        <div className="bilingual">
          <p lang="en">
            An increase in the amount of air flowing into an engine will result in an increase in power. The simplest way to achieve this is by increasing engine displacement.
          </p>
          <p lang="zh">
            发动机吸入空气越多，功率提升空间越大。最直接方法是增大排量。
          </p>
        </div>

        <div className="bilingual">
          <p lang="en">
            However, a similar effect can be achieved without increasing displacement through a process known as forced induction. This involves compressing more air into the engine, allowing a greater mass of air—and therefore fuel—to enter the combustion chamber. Devices that perform this function are generally classified into two types: superchargers and turbochargers.
          </p>
          <p lang="zh">
            但不改变排量也可获得类似效果，即强制进气：将更多空气压入发动机，使更多空气（及燃油）进入燃烧室。装置大致分机械增压与涡轮增压两类。
          </p>
        </div>

        <div className="bilingual">
          <p lang="en">
            The amount of pressure added when the intake air is compressed is known as “boost,” and increasing boost generally increases power. One unit of atmospheric pressure is approximately one bar (about 1 kg/cm²). If the boost pressure is 1 bar (gauge), the total intake pressure becomes about 2 bar absolute—one bar of atmospheric pressure plus one bar of boost—effectively doubling the air density entering the engine under ideal conditions.
          </p>
          <p lang="zh">
            压缩进气时的附加压力称增压压力（boost）。大气压约1 bar（约1 kg/cm²）。增压1 bar时，绝对进气压力约2 bar，理想条件下进入发动机的空气约加倍。
          </p>
        </div>

        <div className="bilingual">
          <p lang="en">
            The drawback of forced induction is that as boost pressure increases, cylinder pressure and thermal stress on engine components rise accordingly. For this reason, engines equipped with turbochargers or superchargers are typically reinforced, and the compression ratio is often lowered to reduce the risk of abnormal combustion such as knock.
          </p>
          <p lang="zh">
            增压越高，缸压与部件热负荷越大，故增压发动机常强化内部件并降低压缩比以抑制爆震。
          </p>
        </div>

        <div className="bilingual">
          <p lang="en">
            When air is compressed, its temperature increases, which reduces its density and limits the amount of oxygen entering the engine. This effect becomes more pronounced under heavy load or in hot conditions, reducing potential power output. As a result, intercoolers are commonly used to cool the compressed air and restore density, improving performance and efficiency.
          </p>
          <p lang="zh">
            空气压缩会升温、密度下降，高负荷或夏季更明显，限制输出。亦有「进气温度每升1度约损失约1ps」之说，故中冷器冷却增压空气已成常规。
          </p>
        </div>

        <div className="bilingual">
          <p lang="en">
            Turbochargers take time to build boost, as they are driven by exhaust energy and there is a delay before sufficient pressure is generated. On the other hand, superchargers, which are driven directly by the engine’s crankshaft, do not suffer from this delay, but they consume some engine power because of this mechanical drive.
          </p>
          <p lang="zh">
            涡轮增压靠排气驱动，建立增压有滞后（涡轮迟滞）；机械增压由曲轴驱动，无迟滞但消耗部分发动机功率。
          </p>
        </div>

        <div className="bilingual">
          <p lang="en">
            Engines that combine the advantages of both systems—using a supercharger at low engine speeds and a turbocharger at higher speeds—have recently attracted attention.
          </p>
          <p lang="zh">
            近年也有低转速用机械增压、高转速用涡轮，兼顾两者优点的增压发动机。
          </p>
        </div>

        <h3>
          Superchargers / 机械增压器
        </h3>

        <div className="bilingual">
          <p lang="en">
            A supercharger is a compressor, usually driven by a belt connected to the crankshaft, that compresses air before it enters the engine. Because it is driven directly by the crankshaft, it provides strong boost at low engine speeds and offers quicker throttle response compared with a turbocharger. A supercharger also tends to perform well in vehicles with automatic transmissions. The illustration here shows a “Roots” type supercharger, but several other types exist, including Lysholm (twin-screw) compressors and scroll-type designs.
          </p>
          <p lang="zh">
            由曲轴经皮带等驱动压缩机，压缩空气供入发动机。低转速增压效果好、油门响应快，与自动变速箱相性也好。图示为罗茨鼓风机型，另有螺杆型、涡旋型等。
          </p>
        </div>

        <p className="image">
          <img alt="" src={i1pajaNoJhZbu} />
        </p>

        <h3>
          Turbochargers / 涡轮增压器
        </h3>

        <div className="bilingual">
          <p lang="en">
            Named “turbo” after the turbine that drives its compressor, a turbocharger uses exhaust gases to spin the turbine and compress intake air. Because it recovers energy from the exhaust, it does not draw power directly from the engine as a supercharger does, improving efficiency at higher engine speeds. However, at low engine speeds where exhaust flow is limited, the turbine may not reach operating speed, and it takes time to build boost as the turbine “spools up” during acceleration. This momentary delay in response is known as “turbo lag.” Various technologies have been developed to reduce this effect, and they continue to evolve. In Europe, turbochargers are increasingly used with smaller engines to improve fuel economy.
          </p>
          <p lang="zh">
            “涡轮”即涡轮机：利用排气压力驱动涡轮带动压缩机增压。回收排气能量，高转速区不像机械增压那样增加驱动损失。但低转速排气能量不足时涡轮难起转，加速时需时间建立增压，即涡轮迟滞。欧洲亦常见小排量涡轮以兼顾油耗。
          </p>
        </div>

        <p className="image">
          <img alt="" src={i17B3PNFugtKThB} />
        </p>
      </div>
    </div>
  </>
);

export default ForcedInduction;
