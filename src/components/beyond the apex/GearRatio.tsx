import i1GSnulOQ2QWZ from "../../assets/images/i1GSnulOQ2QWZ.webp";
import i1aR4c0ERxMNU8c from "../../assets/images/i1aR4c0ERxMNU8c.webp";
import i1b0kiG2R0akHz from "../../assets/images/i1b0kiG2R0akHz.webp";
import i1cd2JuFzcMQ37c from "../../assets/images/i1cd2JuFzcMQ37c.webp";

const GearRatio = () => (
  <>
    <div className="manual_detail">
      <div className="content_header">
        <h1>Gear Ratio / 齿轮比</h1>
      </div>
      <div className="body">
        <h3 className="section-header">
          ● Final Gear Ratio / ● 主减速比
        </h3>

        <div className="bilingual">
          <p lang="en">
            Altering the final drive ratio allows you to favor acceleration or top speed. For example, with a high-revving engine that produces most of its power at higher rpm, using a shorter final drive ratio can make the performance easier to access and improve acceleration.
          </p>
          <p lang="zh">
            改变主减速比可在最高速度与加速之间取舍。对高转速、峰值功率靠后的发动机，采用更“短”的主减速比更易发挥性能，加速可明显提升。
          </p>
        </div>

        <h3>
          Long Gear Ratio / 长传动比（高速齿）
        </h3>

        <div className="bilingual">
          <p lang="en">
            This type of setup is suited to increasing a car’s top speed, as it allows higher road speeds at lower engine rpm. It can also offer advantages in fuel efficiency. The downside is that it takes longer to reach the engine’s effective power band, which reduces acceleration. It can be more difficult to produce strong power when exiting tight corners, and overall acceleration will be reduced.
          </p>
          <p lang="zh">
            较低转速即可达到较高车速，有利于极速与油耗；但需更久才能把发动机拉进功率带，加速变慢，紧弯出弯难以获得足够加速。
          </p>
        </div>

        <p className="image">
          <img alt="" src={i1cd2JuFzcMQ37c} />
        </p>

        <h3>
          Short Gear Ratio / 短传动比（低速齿）
        </h3>

        <div className="bilingual">
          <p lang="en">
            With a shorter gear ratio, the engine will run at higher rpm even in higher gears such as third and fourth. While top speed is reduced, this makes it easier to access the engine’s power and improves acceleration. It allows the driver to take better advantage of performance when accelerating out of corners, making it well suited to technical courses with many tight bends. The main drawback is the increased risk of over-revving due to the more responsive nature of the drivetrain.
          </p>
          <p lang="zh">
            三、四挡等较高挡位也能维持高转速，牺牲最高速但更易处于有效功率区，加速更好；紧弯出弯尤有利。油门响应更敏锐，需注意超速转速。
          </p>
        </div>

        <p className="image">
          <img alt="" src={i1b0kiG2R0akHz} />
        </p>

        <h3 className="section-header">
          ● Transmission Gear Ratio / ● 变速箱齿比
        </h3>

        <div className="bilingual">
          <p lang="en">
            Transmission tuning generally involves bringing the gear ratios closer together, creating a close-ratio setup. This makes it easier to keep the engine within its powerband and improves acceleration. However, depending on the final drive ratio, it can increase the likelihood of over-revving, and more frequent gear changes will be required.
          </p>
          <p lang="zh">
            变速箱调校多指拉近相邻挡位比（密齿比），便于保持发动机在功率带内，加速显著提升；但与主减速配合不当易超速挡，换挡更频繁。
          </p>
        </div>

        <h3>
          Close Ratio / 密齿比
        </h3>

        <div className="bilingual">
          <p lang="en">
            A manual transmission with a close gear ratio has smaller steps between gears. The closer the ratios, the smaller the drop in engine rpm during upshifts, allowing the engine to stay within its powerband and use its output more effectively. This type of gearing is particularly suited to naturally aspirated engines with narrower powerbands, such as those using high-lift camshafts. It is typically set up to suit the course layout, in combination with the selected final drive ratio.
          </p>
          <p lang="zh">
            各挡齿比更接近，升挡时转速跌落更小，利于持续输出；尤其适合窄功率带的高凸轮自然吸气机，并需与主减速、赛道布局匹配。
          </p>
        </div>

        <p className="image">
          <img alt="" src={i1aR4c0ERxMNU8c} />
        </p>

        <h3>
          Wide Ratio / 宽齿比
        </h3>

        <div className="bilingual">
          <p lang="en">
            A wide gear ratio setup is commonly used in production cars, where fuel efficiency and lower engine rpm are priorities. In this case, the gaps between gears are larger. As a result, engine rpm drops more when shifting up, reducing the available power and affecting acceleration. In practice, gear ratios are often a mix of close and wide spacing to suit the engine’s characteristics and intended use. For example, lower gears may be closer together for acceleration, while higher gears are spaced wider to reduce rpm during cruising.
          </p>
          <p lang="zh">
            量产车为油耗常把齿比拉宽、降低转速；升挡后动力输出更柔和，加速受损。通常不会全挡宽齿，而是一、二挡密齿、三挡以上宽齿等按发动机与赛道组合。
          </p>
        </div>

        <p className="image">
          <img alt="" src={i1GSnulOQ2QWZ} />
        </p>
      </div>
    </div>
  </>
);

export default GearRatio;
