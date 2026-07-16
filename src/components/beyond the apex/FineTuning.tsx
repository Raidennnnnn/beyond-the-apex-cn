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
            更换发动机控制单元（ECU）和提升排气效率，是增强发动机基础性能的常见第一步，也是后续发动机机械调校或加装涡轮增压等深度改装的基础。虽难以带来大幅马力提升，但可带来更利落的转速爬升与油门响应；对发动机负荷增加相对较小，高负荷时反而有助于保护发动机。
          </p>
        </div>

        <h3>
          Engine Control Unit (ECU) / 发动机控制单元（ECU）
        </h3>

        <div className="bilingual">
          <p lang="en">
            Updating the control maps stored in the ECU is known as ECU tuning, or chip tuning. Parameters such as ignition timing, air-fuel ratio, fuel delivery and, where applicable, variable valve timing can be adjusted. ECU tuning is often required when increasing boost pressure, or when making changes to the intake, exhaust or other engine components.
          </p>
          <p lang="zh">
            改写存储在 ECU 中的控制程序，俗称“ROM 调校”或芯片调校。可调整点火时刻、空燃比、喷油量与喷油时机等；涡轮增压增压提高，或更换进排气部件、改动发动机本体后，通常都需要进行 ROM 调校。
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
            要在燃烧室内可靠点燃混合气，需要足够强的火花。即便原装发动机，长时间高负荷运转也会使火花塞过热；输出提高后燃烧室温度上升，异常燃烧（早燃）风险增大，需选用更高热值（更冷型）的火花塞。
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
            空气滤清器用于滤除灰尘等异物，但原装件进气阻力较大，不利于输出。换用低阻力竞技型滤清器，主要改善高转速响应与加速时的油门跟脚感，进气声也会变大。
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
            降低排气阻力可使发动机转速爬升更轻快、油门响应更敏锐。尤其依赖排气能量的涡轮增压发动机，仅更换排气部件有时可带来约一成至两成输出提升。但排气改装会改变扭矩特性，需明确调校目标。
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
            高输出发动机对内部零件应力大，高性能机油不可或缺。机油负责润滑、冷却与密封；油膜不足会导致气缸压力下降、动力损失，高速运动件润滑不良还可能烧蚀。粘度影响摩擦损失，如今多采用低粘度且在严苛工况下仍稳定的合成油。
          </p>
        </div>
      </div>
    </div>
  </>
);

export default FineTuning;
