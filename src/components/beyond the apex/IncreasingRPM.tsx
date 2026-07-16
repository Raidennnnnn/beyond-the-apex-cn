import i1a2UqkOeHvPTEc from "../../assets/images/i1a2UqkOeHvPTEc.webp";
import i1aK5bUCZGCXiz from "../../assets/images/i1aK5bUCZGCXiz.webp";
import i1oictuyQLkQVuB from "../../assets/images/i1oictuyQLkQVuB.webp";
import i1opnFRwSEVAxO from "../../assets/images/i1opnFRwSEVAxO.webp";

const IncreasingRPM = () => (
  <>
    <div className="manual_detail">
      <div className="content_header">
        <h1>Increasing RPM / 提高转速</h1>
      </div>
      <div className="body">
        <div className="bilingual">
          <p lang="en">
            Engine output is a combination of torque and engine speed (power is proportional to torque × rpm). This means that improving an engine’s ability to operate at higher rpm can increase its potential output. The tuning required focuses on the cylinder head, with the key being improved intake and exhaust flow at high engine speeds. A common method is to replace the standard camshaft with a higher-lift, longer-duration profile. This may require reinforcing valvetrain components, but it can improve airflow and increase high-rpm power. Engines suited to higher rpm are often short-stroke designs, as they allow higher engine speeds with lower piston speeds than long-stroke engines.
          </p>
          <p lang="zh">
            功率等于扭矩×转速，高出力取决于能把发动机转得多高。调校以气缸盖周边为主，关键是高转速区进排气效率；主流是换用大凸轮角的竞技凸轮，并强化气门机构；端口扩大有类似效果，高转速功率可大幅提升。短行程机更适合高转速，长行程机低中转速扭矩更足。
          </p>
        </div>

        <p className="image">
          <img alt="" src={i1oictuyQLkQVuB} />
        </p>

        <div className="bilingual">
          <p lang="en">
            You can improve an engine’s ability to operate at high rpm and increase output by fitting a high-lift camshaft. However, this can reduce torque at low and medium engine speeds, and some highly tuned engines may idle poorly.
          </p>
          <p lang="zh">
            仅换高凸轮即可把特性变为高转速、高输出型；但低中转速扭矩会极细，纯赛车设定甚至可能无法怠速。
          </p>
        </div>

        <h3>
          Ports / 气道（端口）
        </h3>

        <div className="bilingual">
          <p lang="en">
            The intake and exhaust ports allow the air-fuel mixture to enter the engine and provide an exit for exhaust gases after combustion. Ideally, flow through the ports should be as smooth as possible, but production constraints often leave irregularities. Rough cast surfaces, passage shape and small distortions can all create flow resistance. By smoothing and reshaping these surfaces, airflow can be improved. Polishing the ports alone may improve high-rpm response slightly, but the full benefit is usually realized only when combined with more comprehensive cylinder head work, including port shaping and camshaft changes.
          </p>
          <p lang="zh">
            进排气气道是混合气进入与废气排出的通道，越顺滑越好；量产机因成本很少精加工，铸造面粗糙、孔径与变形都会形成阻力。研磨抛光可改善高转速感受；若配合换凸轮或缸盖平面研磨，效果更大。
          </p>
        </div>

        <p className="image">
          <img alt="" src={i1opnFRwSEVAxO} />
        </p>

        <h3>
          Camshaft / 凸轮轴
        </h3>

        <div className="bilingual">
          <p lang="en">
            The camshaft controls the opening and closing of the intake and exhaust valves. A high-lift camshaft uses larger cam lobes to increase valve lift and, often, longer duration, allowing the valves to stay open longer. This improves airflow at higher engine speeds, though it can reduce torque at low and medium rpm. As a result, power is increased in the higher rpm range. The more aggressive power delivery can make the car more difficult to manage, but it is a common method for extracting additional performance from a naturally aspirated engine.
          </p>
          <p lang="zh">
            凸轮轴控制气门开闭；高升程凸轮（高凸轮）把凸轮凸起做得更高，延长气门开启时间，效果类似扩大进排气口：低中转速扭矩变细，高转速功率显著提升，是自然吸气机高出力的经典手段。
          </p>
        </div>

        <p className="image">
          <img alt="" src={i1a2UqkOeHvPTEc} />
        </p>

        <div className="bilingual">
          <p lang="en">
            A standard camshaft on the right compared with a high-lift camshaft on the left. The taller cam lobes increase valve lift and often extend the duration, allowing the valves to remain open longer.
          </p>
          <p lang="zh">
            右为普通凸轮，左为高凸轮。凸台更高即可增大气门升程。
          </p>
        </div>

        <h3>
          Valves / 气门
        </h3>

        <div className="bilingual">
          <p lang="en">
            At the same time as port work and camshaft upgrades, increasing valve size can also be considered. This involves enlarging the intake and exhaust valves to allow greater airflow and improve breathing efficiency. However, larger valves add mass and are subject to greater inertia, so lightweight materials such as titanium are sometimes used to reduce this effect.
          </p>
          <p lang="zh">
            端口与凸轮升级时可考虑加大气门（大气门）：扩大进气门开度以增加进气量、提高充气效率。气门越大越重（惯性大），常改用钛合金超轻气门。
          </p>
        </div>

        <h3>
          Valve Spring / 气门弹簧
        </h3>

        <div className="bilingual">
          <p lang="en">
            High engine speeds can cause the valve springs to oscillate, leading to valve float, where the springs cannot keep pace with the camshaft. In engines tuned for higher output, upgrading the valve springs is important to maintain proper valve control. The need becomes greater when a high-lift camshaft is fitted, as standard springs may not cope with the increased lift and speed. In extreme cases, loss of valve control can lead to contact between the valve and piston. However, stiffer springs increase load on the valvetrain and can accelerate wear.
          </p>
          <p lang="zh">
            高转速下气门弹簧可能振荡（颤振），弹簧跟不上凸轮即气门浮置。强化弹簧必不可少，装高凸轮时尤甚；否则弹簧无法承受更大升程，严重时凸轮锁死或气门与活塞接触。
          </p>
        </div>

        <p className="image">
          <img alt="" src={i1aK5bUCZGCXiz} />
        </p>
      </div>
    </div>
  </>
);

export default IncreasingRPM;
