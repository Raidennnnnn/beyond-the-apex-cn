import i11jEI0SEJaNU8E from "../../assets/images/i11jEI0SEJaNU8E.webp";
import i1luHsu1YOOuucE from "../../assets/images/i1luHsu1YOOuucE.webp";
import i1oTSLSlHrOGOz from "../../assets/images/i1oTSLSlHrOGOz.webp";
import i1vcM7H1D6yAY from "../../assets/images/i1vcM7H1D6yAY.webp";

const FineTuning = () => (
  <>
    <div className="manual_detail">
      <div className="content_header">
        <h1>Fine-Tuning / 精细调校</h1>
      </div>
      <div className="body">
        <div className="bilingual">
          <p lang="en">
            Upgrading the engine control unit (ECU) and improving exhaust flow are common first steps in increasing engine performance. These changes provide a foundation for more extensive modifications, such as internal engine tuning or adding forced induction. While the gains may be modest, they can improve throttle response and overall drivability. The additional stress on the engine is generally small when these modifications are properly implemented.
          </p>
          <p lang="zh">
            更换发动机电脑、提升进排气效率，是增强发动机基础实力的手段，也是后续发动机本体机械调校或加装涡轮等正式改装的基础。虽难指望大幅增功率，效果却体现在无压迫感的利落爬升与响应提升；对发动机负荷相对较小，反而可在高负荷时保护发动机，耐久方面也有利。
          </p>
        </div>

        <h3>
          Engine Control Unit (ECU) / 电脑（ECU）
        </h3>

        <div className="bilingual">
          <p lang="en">
            Updating the control maps stored in the ECU is known as ECU tuning, or chip tuning. Parameters such as ignition timing, air-fuel ratio, fuel delivery and, where applicable, variable valve timing can be adjusted. ECU tuning is often required when increasing boost pressure, or when making changes to the intake, exhaust or other engine components.
          </p>
          <p lang="zh">
            一般是改写存储发动机控制信息的 ROM（只读存储器）数据，也称「ROM 调校」。除点火正时外，还可改空燃比、喷油量与喷油时机等。提高涡轮增压压力、更换进排气零件，或对发动机本体动手时，都需要这种 ROM 调校。
          </p>
        </div>

        <p className="image">
          <img alt="" src={i1luHsu1YOOuucE} />
        </p>

        <h3>
          Spark Plugs / 火花塞
        </h3>

        <div className="bilingual">
          <p lang="en">
            A strong spark is essential to ignite the air-fuel mixture in the combustion chamber. Under sustained high load, standard spark plugs can be exposed to elevated temperatures, placing them under greater thermal stress. This makes it important to select appropriate spark plugs when an engine is tuned for higher output. Increased combustion temperatures can raise the risk of abnormal combustion, such as pre-ignition. To manage this, spark plugs with a suitable heat range—often a colder rating for higher-output engines—are used.
          </p>
          <p lang="zh">
            要在燃烧室内可靠点燃混合气并正常燃烧，需要足够强的火花。即便发动机仍为原厂状态，用原厂火花塞持续高负荷运转也会过热。输出经调校提高后，爆炸力增大使燃烧室温度上升，更易引发异常燃烧（早燃），须提高火花塞耐热性，选用热值更高（更冷型）的火花塞。
          </p>
        </div>

        <p className="image">
          <img alt="" src={i1oTSLSlHrOGOz} />
        </p>

        <h3>
          Air Filter / 空气滤清器
        </h3>

        <div className="bilingual">
          <p lang="en">
            The standard air filter is designed to protect the engine from dust and other impurities, but it can introduce some resistance to airflow. It is therefore common to switch to a low-resistance air filter designed for performance use. Rather than significantly increasing power, this change improves throttle response during acceleration and helps airflow at higher rpm. Increased intake noise is also a typical result.
          </p>
          <p lang="zh">
            空气滤清器用于去除吸入空气中的灰尘与异物，但原厂件阻力大，对输出不利，宜换用低阻力的竞赛用滤清器。与其说增功率，不如说对高转速响应与加速时的跟脚感更有效，进气声也会变大。
          </p>
        </div>

        <p className="image">
          <img alt="" src={i11jEI0SEJaNU8E} />
        </p>

        <h3>
          Exhaust System / 排气系统
        </h3>

        <div className="bilingual">
          <p lang="en">
            By reducing exhaust restriction, the engine can rev more freely and throttle response becomes sharper. Turbocharged engines, which rely on exhaust energy, can also benefit from improved flow, although gains from a muffler change alone are usually modest. However, changing exhaust components will affect the engine’s torque characteristics, so it is important to have a clear understanding of the intended outcome.
          </p>
          <p lang="zh">
            降低排气阻力后，发动机爬升与油门响应会明显更利落。尤其对利用排气能量的涡轮发动机，功率提升效果大，仅做排气尾段调校有时可期待约一成至两成输出提升。但更换零件会改变扭矩特性，须按发动机调校目标判断需要何种特性。
          </p>
        </div>

        <p className="image">
          <img alt="" src={i1vcM7H1D6yAY} />
        </p>

        <h3>
          Engine Oil / 发动机机油
        </h3>

        <div className="bilingual">
          <p lang="en">
            High-output engines place greater demands on their components, particularly internal parts, making high-performance engine oil essential. Engine oil acts as a lubricant, a cooling medium and a sealing aid. If it cannot maintain an adequate film, pressure in the cylinders can be reduced and performance will suffer. Insufficient lubrication between moving metal parts can also lead to accelerated wear or seizure. Oil viscosity is an important factor, as it influences friction losses. Synthetic oils that maintain stable performance under demanding conditions are now widely used.
          </p>
          <p lang="zh">
            尤其对内部各处应力很大的高输出发动机，高性能机油不可或缺。除润滑外还负责冷却与保持气密；一旦油膜破裂，气缸压缩泄漏、功率下降，高速运动的金属件润滑跟不上而咬死也不罕见。产生摩擦损失的粘度也很关键，如今广泛采用低粘度、在严苛工况下仍能稳定发挥的化学合成油。
          </p>
        </div>
      </div>
    </div>
  </>
);

export default FineTuning;
