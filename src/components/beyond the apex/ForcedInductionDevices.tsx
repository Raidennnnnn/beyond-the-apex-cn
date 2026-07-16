import i1LeKuGPfpM5sEc from "../../assets/images/i1LeKuGPfpM5sEc.webp";
import i1eMPSB3scycCTB from "../../assets/images/i1eMPSB3scycCTB.webp";
import i1eh9zHkOkBQdz from "../../assets/images/i1eh9zHkOkBQdz.webp";
import i1tpMyCCVciLob from "../../assets/images/i1tpMyCCVciLob.webp";

const ForcedInductionDevices = () => (
  <>
    <div className="manual_detail">
      <div className="content_header">
        <h1>Forced Induction Devices / 强制进气装置</h1>
      </div>
      <div className="body">
        <div className="bilingual">
          <p lang="en">
            Increasing boost pressure or fitting a larger forced-induction system is an effective way to increase engine output without changing displacement. When combined with mechanical tuning, even greater gains can be achieved. However, forced induction places higher loads on engine components than naturally aspirated setups, so supporting modifications are essential. While naturally aspirated engines often rely on higher compression ratios, forced-induction engines typically use lower static compression to reduce the risk of knock under boost. Turbocharged engines can also suffer from lag, so measures are often taken to improve response.
          </p>
          <p lang="zh">
            提高增压压力或换更大增压器，可在不改排量的情况下较容易获得类似扩排量的效果；与机械调校结合可进一步放大功率。但对发动机应力超过自然吸气，需相应对策；增压机往往要降压缩比以抑制异常燃烧与过大爆震力。
          </p>
        </div>

        <h3>
          Boost Pressure / 涡轮增压压力
        </h3>

        <div className="bilingual">
          <p lang="en">
            Boost pressure is a measure of the pressure increase provided by a turbocharger or supercharger, and is expressed in units such as kg/cm², kPa or psi. The higher the boost pressure, the greater the potential power output. However, as more air is forced into the engine, additional fuel is required, so the ECU must be calibrated accordingly and fuel delivery may need to be upgraded. It is also important to reinforce engine internals to cope with the increased loads from higher combustion pressures.
          </p>
          <p lang="zh">
            涡轮增压器压缩空气的程度即增压（boost）压力，常用 kg/cm² 表示；数值越高可榨取更多功率，但需匹配喷油量、ECU 燃油图、更大喷油嘴，以及能承受更大爆震的内部强化。
          </p>
        </div>

        <h3>
          High-Flow Turbine / 高流量涡轮
        </h3>

        <div className="bilingual">
          <p lang="en">
            This refers to a turbocharger with a larger compressor wheel, increasing airflow and potential output. A process known as “cutback” can be used to reduce the mass of the turbine blades, lowering rotational inertia and allowing boost to build more quickly. This helps improve power while minimizing any loss in response.
          </p>
          <p lang="zh">
            扩大压缩机叶轮以输送更多空气；常分解原装涡轮只换叶轮。“切削”可减轻叶轮惯量，增压建立更快，在较少牺牲响应的情况下提高输出。
          </p>
        </div>

        <p className="image">
          <img alt="" src={i1eMPSB3scycCTB} />
        </p>

        <h3>
          Increasing Turbine Size / 大容量涡轮
        </h3>

        <div className="bilingual">
          <p lang="en">
            This involves replacing the standard turbocharger with a larger unit, as turbo size sets the potential airflow and power limit. While this can deliver a significant increase in output, a larger turbo generally responds more slowly. Unless the engine can produce sufficient exhaust energy, low-rpm torque may be reduced and boost may only build at higher rpm, which can make the power delivery more difficult to manage.
          </p>
          <p lang="zh">
            更换更大本体，涡轮尺寸决定流量与功率上限；可大幅提升功率，但转动大涡轮响应变差，排量或发动机潜力不足时低转速扭矩细、高转速才起压，需权衡。
          </p>
        </div>

        <p className="image">
          <img alt="" src={i1tpMyCCVciLob} />
        </p>

        <h3>
          Supercharger / 机械增压器
        </h3>

        <div className="bilingual">
          <p lang="en">
            The principle behind a supercharger is similar to that of a turbocharger: it forces compressed air into the engine to increase output. Like turbochargers, it can be fitted to a naturally aspirated engine as a means of increasing power. Because a supercharger is driven directly by the engine, it delivers boost with little delay, making it well suited to situations that require immediate throttle response.
          </p>
          <p lang="zh">
            与涡轮一样把压缩空气压入发动机；也可 bolt-on 于自然吸气发动机，较易获得大幅功率。结构上油门几乎无迟滞，在技术型赛道优势尤其明显。
          </p>
        </div>

        <p className="image">
          <img alt="" src={i1eh9zHkOkBQdz} />
        </p>

        <h3>
          Intercooler / 中冷器
        </h3>

        <div className="bilingual">
          <p lang="en">
            The intercooler plays an important role in a turbocharged engine, cooling the air heated during compression and improving charge density. Intercoolers are standard on many production vehicles, but increasing their size can improve cooling performance. However, an oversized intercooler can increase flow resistance and pressure drop, reducing boost pressure and response if not properly matched to the system.
          </p>
          <p lang="zh">
            冷却被涡轮压缩的高温进气，提高充气密度与功率。量产车已普遍配备，加大可提升冷却效率；但过大使空气在中冷器内停留更久，产生压力损失，有时会使增压下降一成至两成。
          </p>
        </div>

        <p className="image">
          <img alt="" src={i1LeKuGPfpM5sEc} />
        </p>
      </div>
    </div>
  </>
);

export default ForcedInductionDevices;
