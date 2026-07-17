import i1LeKuGPfpM5sEc from "../../assets/images/i1LeKuGPfpM5sEc.webp";
import i1eMPSB3scycCTB from "../../assets/images/i1eMPSB3scycCTB.webp";
import i1eh9zHkOkBQdz from "../../assets/images/i1eh9zHkOkBQdz.webp";
import i1tpMyCCVciLob from "../../assets/images/i1tpMyCCVciLob.webp";

const ForcedInductionDevices = () => (
  <>
    <div className="manual_detail">
      <div className="content_header">
        <h1 className="bilingual-title"><span lang="en">Forced Induction Devices</span><span className="bilingual-sep"> / </span><span lang="zh">强制进气装置</span></h1>
      </div>
      <div className="body">
        <div className="bilingual">
          <p lang="en">
            Increasing boost pressure or fitting a larger forced-induction system is an effective way to increase engine output without changing displacement. When combined with mechanical tuning, even greater gains can be achieved. However, forced induction places higher loads on engine components than naturally aspirated setups, so supporting modifications are essential. While naturally aspirated engines often rely on higher compression ratios, forced-induction engines typically use lower static compression to reduce the risk of knock under boost. Turbocharged engines can also suffer from lag, so measures are often taken to improve response.
          </p>
          <p lang="zh">
            提高增压压力或加大增压器本身尺寸，可不改发动机本体、较容易获得与扩大排量相同的效果；与机械调校结合，还可期待更强的功率提升。但对发动机施加的应力超过自然吸气，对策不可或缺。自然吸气以高压缩为增功率关键，增压发动机则反而要降低压缩比，防止异常燃烧与爆炸力增大导致零件破损。涡轮增压还易产生迟滞，须设法避免响应极端恶化。
          </p>
        </div>

        <h3 className="bilingual-title"><span lang="en">Boost Pressure</span><span className="bilingual-sep"> / </span><span lang="zh">涡轮增压压力</span></h3>

        <div className="bilingual">
          <p lang="en">
            Boost pressure is a measure of the pressure increase provided by a turbocharger or supercharger, and is expressed in units such as kg/cm², kPa or psi. The higher the boost pressure, the greater the potential power output. However, as more air is forced into the engine, additional fuel is required, so the ECU must be calibrated accordingly and fuel delivery may need to be upgraded. It is also important to reinforce engine internals to cope with the increased loads from higher combustion pressures.
          </p>
          <p lang="zh">
            表示涡轮增压器吸入并压缩多少空气的数值即增压（boost）压力，单位用压力「kg/cm²」表示；该值越高越能拉出功率。但同时需要与大量空气匹配的燃料，须由电脑做燃油调整，并换用能大量喷油的喷油嘴等。发动机内部也须具备承受增大爆炸力的强度。
          </p>
        </div>

        <h3 className="bilingual-title"><span lang="en">High-Flow Turbine</span><span className="bilingual-sep"> / </span><span lang="zh">高流量涡轮</span></h3>

        <div className="bilingual">
          <p lang="en">
            This refers to a turbocharger with a larger compressor wheel, increasing airflow and potential output. A process known as “cutback” can be used to reduce the mass of the turbine blades, lowering rotational inertia and allowing boost to build more quickly. This helps improve power while minimizing any loss in response.
          </p>
          <p lang="zh">
            扩大压缩空气的压缩机叶轮，以获得更大风量的涡轮；基本上是拆开原厂涡轮，只更换压缩机叶轮。经「切削（cutback）」处理减轻涡轮惯性重量，特点是增压能迅速建立，几乎不牺牲响应即可提高输出。
          </p>
        </div>

        <p className="image">
          <img alt="" src={i1eMPSB3scycCTB} />
        </p>

        <h3 className="bilingual-title"><span lang="en">Increasing Turbine Size</span><span className="bilingual-sep"> / </span><span lang="zh">大容量涡轮</span></h3>

        <div className="bilingual">
          <p lang="en">
            This involves replacing the standard turbocharger with a larger unit, as turbo size sets the potential airflow and power limit. While this can deliver a significant increase in output, a larger turbo generally responds more slowly. Unless the engine can produce sufficient exhaust energy, low-rpm torque may be reduced and boost may only build at higher rpm, which can make the power delivery more difficult to manage.
          </p>
          <p lang="zh">
            尺寸决定输出上限的涡轮本体，从原厂换成更大尺寸的调校。可期待飞跃性功率提升，另一方面为转动大涡轮而响应变差。若没有能产生大量排气能量的排量，或发动机本身潜力不足，低转速扭矩会变细、仅高转速才有涡轮效果等难驾驭特性，也须一并考虑。
          </p>
        </div>

        <p className="image">
          <img alt="" src={i1tpMyCCVciLob} />
        </p>

        <h3 className="bilingual-title"><span lang="en">Supercharger</span><span className="bilingual-sep"> / </span><span lang="zh">机械增压器</span></h3>

        <div className="bilingual">
          <p lang="en">
            The principle behind a supercharger is similar to that of a turbocharger: it forces compressed air into the engine to increase output. Like turbochargers, it can be fitted to a naturally aspirated engine as a means of increasing power. Because a supercharger is driven directly by the engine, it delivers boost with little delay, making it well suited to situations that require immediate throttle response.
          </p>
          <p lang="zh">
            把压缩空气压入发动机以获得功率，原理与涡轮增压相同；提高增压压力也可进一步增功率。与涡轮一样可螺栓安装于自然吸气发动机，较易拉出大幅功率。结构上油门响应无迟滞，在技术型赛道优势尤其明显。
          </p>
        </div>

        <p className="image">
          <img alt="" src={i1eh9zHkOkBQdz} />
        </p>

        <h3 className="bilingual-title"><span lang="en">Intercooler</span><span className="bilingual-sep"> / </span><span lang="zh">中冷器</span></h3>

        <div className="bilingual">
          <p lang="en">
            The intercooler plays an important role in a turbocharged engine, cooling the air heated during compression and improving charge density. Intercoolers are standard on many production vehicles, but increasing their size can improve cooling performance. However, an oversized intercooler can increase flow resistance and pressure drop, reducing boost pressure and response if not properly matched to the system.
          </p>
          <p lang="zh">
            冷却经涡轮压缩后变热的空气，提高发动机充气效率并带来功率提升的零件即中冷器。市售车也已普遍装备；加大尺寸提高效率可获得更高冷却效果。但过大的中冷器会使压缩空气在内部停留更久、增压压力下降——称为压力损失，有时甚至可使增压降低约 10～20%。
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
