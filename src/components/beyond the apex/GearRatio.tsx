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
            改变主减速齿轮的齿数比，即可把发动机功率偏向最高速或偏向加速——即改变主减速比。尤其把主减速比改得更「短」（低齿）时，尖峰的高转速·高输出型发动机更易发挥性能，可期待加速明显提升。
          </p>
        </div>

        <h3>
          Long Gear Ratio / 高齿化（长齿比）
        </h3>

        <div className="bilingual">
          <p lang="en">
            This type of setup is suited to increasing a car’s top speed, as it allows higher road speeds at lower engine rpm. It can also offer advantages in fuel efficiency. The downside is that it takes longer to reach the engine’s effective power band, which reduces acceleration. It can be more difficult to produce strong power when exiting tight corners, and overall acceleration will be reduced.
          </p>
          <p lang="zh">
            能以较低发动机转速拉高车速，在重视极速的场合有利，油耗方面也有好处。另一方面，要把转速拉进功率／扭矩带需要时间，加速变慢难免。紧弯出弯等难以拉出有效功率·扭矩，很难获得足够加速力。
          </p>
        </div>

        <p className="image">
          <img alt="" src={i1cd2JuFzcMQ37c} />
        </p>

        <h3>
          Short Gear Ratio / 低齿化（短齿比）
        </h3>

        <div className="bilingual">
          <p lang="en">
            With a shorter gear ratio, the engine will run at higher rpm even in higher gears such as third and fourth. While top speed is reduced, this makes it easier to access the engine’s power and improves acceleration. It allows the driver to take better advantage of performance when accelerating out of corners, making it well suited to technical courses with many tight bends. The main drawback is the increased risk of over-revving due to the more responsive nature of the drivetrain.
          </p>
          <p lang="zh">
            即便在三、四挡等相对高的挡位也更容易维持高转速，最高速会牺牲，但更易拉出有效功率·扭矩，可提高加速。过弯时也能充分发挥发动机性能做出出弯加速，与以紧弯为主的技术型赛道匹配极佳。不过油门操作时发动机跟脚更敏锐，须更注意超转速。
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
            一般所谓变速箱调校，是指做成密齿比（使相邻挡位齿比更接近），更易维持有效功率带，加速也会大幅提升；但与主减速组合不当会更容易超转速，并需要更频繁换挡。
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
            把手动变速箱各挡齿比拉近即密齿变速箱。比率越窄，升挡时发动机转速跌落越小，越能高效拉出功率。尤其适合因装高凸轮而使功率带变窄的自然吸气发动机。一般会按赛道布局等，连同与主减速比的匹配一并设定。
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
            与高齿化同样，一般市售车重视油耗、以压低发动机转速为目的，把各挡齿比设得较大。结果是升挡后发动机功率也较温和地传到路面，加速力会牺牲。通常难以把一至五／六挡全部设成宽齿，多是起步·加速用的一、二挡用密齿，三挡以上用宽齿，按发动机特性与赛道布局等组合密齿与宽齿。
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
