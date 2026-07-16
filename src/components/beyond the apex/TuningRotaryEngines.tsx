import i11lGz57fmSsfC from "../../assets/images/i11lGz57fmSsfC.webp";
import i1FbRH5Rwc47Ib from "../../assets/images/i1FbRH5Rwc47Ib.webp";
import i1Qzcc5UAZ1h08c from "../../assets/images/i1Qzcc5UAZ1h08c.webp";
import i1aIlIZWpcha8SB from "../../assets/images/i1aIlIZWpcha8SB.webp";

const TuningRotaryEngines = () => (
  <>
    <div className="manual_detail">
      <div className="content_header">
        <h1>Rotary Engines / 转子发动机</h1>
      </div>
      <div className="body">
        <div className="bilingual">
          <p lang="en">
            One of the main aims when tuning a rotary engine is to improve intake airflow. This is achieved by enlarging and reshaping the intake ports, allowing more air-fuel mixture into the combustion chamber. The effect is similar in principle to fitting a more aggressive camshaft in a reciprocating engine, although the resulting power characteristics can differ significantly. For example, peripheral porting, often used in competition rotary engines, can greatly reduce low-rpm torque and make normal driving difficult. In rotary engines, the exhaust ports are positioned close to the turbocharger, allowing exhaust energy to drive the turbine efficiently. By combining porting and turbo tuning, overall performance can be increased.
          </p>
          <p lang="zh">
            转子发动机调校重点是提高进气效率：扩大、整形进气口以送入更多混合气，效果类似往复机装高凸轮，但端口位置与形状会显著改变功率曲线与性格。例如竞技用“周边进气口”低速扭矩极小，日常极难驾驭。
          </p>
        </div>

        <p className="image">
          <img alt="" src={i1Qzcc5UAZ1h08c} />
        </p>

        <div className="bilingual">
          <p lang="en">
            One of the greatest advantages of tuning a rotary engine is its good compatibility with turbochargers. Porting and turbo tuning can be combined to give excellent power and ease of operation
          </p>
          <p lang="zh">
            转子机与涡轮匹配优异；端口调校加涡轮是兼顾大功率与易驾性的定番组合。
          </p>
        </div>

        <h3>
          Balancing / 平衡
        </h3>

        <div className="bilingual">
          <p lang="en">
            Compared with a reciprocating engine, a rotary engine has a simpler structure and fewer moving parts. Improving the precision of these components and carefully reassembling the engine can enhance performance and consistency. A critical part of this process is the setting of the seals. The rotor’s apex seals serve a role similar to piston rings, and consistent clearances help maintain smooth operation and proper compression. If the seals are not set correctly, power can be lost and, in severe cases, engine damage may occur.
          </p>
          <p lang="zh">
            结构比往复机简单、零件少，提高精度并仔细组装即可发挥潜力。关键是“密封组”作业：把相当于活塞环的apex密封调整到相同间隙重装，转子可在壳体内保持正确压缩并极为顺滑地转动；反之间隙不当会严重损失功率。
          </p>
        </div>

        <h3>
          Side Porting / 侧面进气（Side port）
        </h3>

        <div className="bilingual">
          <p lang="en">
            By increasing the size of the intake ports in the side housing, airflow can enter the engine more easily, increasing the total charge and improving power. This produces a similar effect to fitting a more aggressive camshaft in a reciprocating engine.
          </p>
          <p lang="zh">
            扩大侧面壳体进气口径，可更早、更多地吸入混合气以提高功率，类似往复机高凸轮效果。
          </p>
        </div>

        <p className="image">
          <img alt="" src={i1aIlIZWpcha8SB} />
        </p>

        <h3>
          Bridge Porting / 桥式端口（Bridge port）
        </h3>

        <div className="bilingual">
          <p lang="en">
            This is one method of modifying the side port, known as a bridge port. The name comes from the “bridged” section left between the enlarged port openings.
            <br />
            <br />
            The bridge is retained rather than creating a single large opening because, at extreme port sizes, support is needed to maintain proper sealing. Without it, the apex seal could lose support as it passes over the port, leading to reduced sealing and potential damage.
          </p>
          <p lang="zh">
            侧面端口的一种，削出的形状像桥而得名。两个端口之间保留“桥”，是因为端口扩到极限时仍需留出 apex 密封通过的轨迹。
          </p>
        </div>

        <p className="image">
          <img alt="" src={i1FbRH5Rwc47Ib} />
        </p>

        <h3>
          Peripheral Porting / 周边进气（Peripheral port）
        </h3>

        <div className="bilingual">
          <p lang="en">
            This is a method of tuning a rotary engine in which the intake ports are relocated from the side housing to the rotor housing. This allows the air-fuel mixture to enter more directly, significantly increasing power at higher rpm. However, it also reduces low-speed efficiency, resulting in a substantial loss of low-end torque. The result is a more extreme powerband, with strong high-rpm output but reduced drivability at lower engine speeds.
          </p>
          <p lang="zh">
            用特殊粘接剂封住侧面进气口，改在转子壳体上部开口，混合气更直接进入转子室，高转速可输出巨大功率；但失去侧面端口在低/常用转速分段送气的功能，低速扭矩几乎消失，与高速爆发力形成鲜明对比。
          </p>
        </div>

        <p className="image">
          <img alt="" src={i11lGz57fmSsfC} />
        </p>

        <h3>
          Combination Porting / 组合端口（Combination port）
        </h3>

        <div className="bilingual">
          <p lang="en">
            Also known as “cross-porting,” this technique combines side porting (or bridge porting) with peripheral porting, leveraging the strengths of each—side ports for better low-end response and peripheral ports for increased high-rpm performance.
          </p>
          <p lang="zh">
            亦称 cross-port，把侧面（或桥式）与周边端口组合：低转速用侧面、高转速用周边，顺序切换，兼顾两者优点。
          </p>
        </div>
      </div>
    </div>
  </>
);

export default TuningRotaryEngines;
