import i1qS7EtVc60Jo from "../../assets/images/i1qS7EtVc60Jo.webp";
import i13GFypvqVuaidH from "../../assets/images/i13GFypvqVuaidH.webp";
import i1lPj904OqTzDW from "../../assets/images/i1lPj904OqTzDW.webp";
import i19QfOZQxlTlt from "../../assets/images/i19QfOZQxlTlt.webp";
import i1gJIO9cjA3TrEE from "../../assets/images/i1gJIO9cjA3TrEE.webp";
import i1Z3h7EjW4DrQ8E from "../../assets/images/i1Z3h7EjW4DrQ8E.webp";

const PrandtlsLiftingLineTheory = () => (
  <>
    <div className="manual_detail">
      <div className="content_header">
        <h1 className="bilingual-title"><span lang="en">4-6 : Prandtl&apos;s Lifting Line Theory</span><span className="bilingual-sep"> / </span><span lang="zh">普朗特升力线理论</span></h1>
        <h2 className="bilingual-title"><span lang="en">Wingtip vortex generation on finite wings</span><span className="bilingual-sep"> / </span><span lang="zh">有限翼展上的翼尖涡生成</span></h2>
      </div>
      <div className="body">
        <div className="bilingual">
          <p lang="en">
            Through the work of Martin Wilhelm Kutta and Nikolai Zhukovsky, the
            circulation theory of lift was established, enabling accurate
            calculation of lift in two-dimensional flow. However, real wings
            operate in three-dimensional flow, where the distribution of
            circulation varies along the span. As such, two-dimensional theory
            cannot be directly applied. A new framework was therefore required
            to describe lift in three-dimensional flow fields.
          </p>
          <p lang="zh">
            经库塔与茹科夫斯基，升力的环量理论诞生，二维流动中的升力得以准确计算。但实际机翼周围流动一般为三维，不能把二维翼型理论原样套用，因而需要构建三维流场中机翼的升力理论。
          </p>
        </div>

        <h3 className="section-header bilingual-title"><span lang="en">● Flow around a limited wingspan</span><span className="bilingual-sep"> / </span><span lang="zh">有限翼展周围的流动</span></h3>

        <div className="bilingual">
          <p lang="en">
            As explained earlier, an airfoil can be considered as a wing of
            infinite span. In such a case, the circulation is uniform along the
            span, and the lift per unit span remains constant. Therefore, the
            Kutta–Zhukovsky Theory can be directly applied to this idealized
            two-dimensional condition.
          </p>
          <p lang="zh">
            此前出现过「翼型」一词；翼型也可说是具有无限长翼展的机翼。这种无限翼展翼在翼展任意位置环量大小相同、升力一定，因而可直接应用库塔–茹科夫斯基定理。
          </p>
        </div>

        <div className="bilingual">
          <p lang="en">
            However, an actual wing has a finite span. Near the wingtip, air
            tends to move from the high-pressure region beneath the wing to the
            lower-pressure region above it. As a result, the pressure
            distribution differs from that of an infinite-span wing, and the
            lift per unit span decreases toward the tip. This crossflow
            generates a rotational motion in the wake, forming a trailing vortex
            that extends downstream. The vortex formed at the wingtip is known
            as a wingtip vortex.
          </p>
          <p lang="zh">
            但实际机翼翼展有限。因此在翼端，流动试图从高压下面绕到低压上面，翼面压力分布不同于无限翼展翼，越靠近翼端升力越低。这样从高压侧绕到低压侧的流动成为纵涡并向下游流去；以翼端为起点产生的涡称为翼端涡。
          </p>
        </div>

        <p className="image">
          <img alt="" src={i1qS7EtVc60Jo} />
        </p>
        <div className="bilingual">
          <p className="caption" lang="en">
            Fig. 4-6-1: Flow around the wing with limited wingspan.
          </p>
          <p className="caption" lang="zh">
            图4-6-1：有限翼展翼周围的流动。
          </p>
        </div>

        <p className="image">
          <img alt="" src={i13GFypvqVuaidH} />
        </p>
        <div className="bilingual">
          <p className="caption" lang="en">
            Fig. 4-6-2: Circulation and lift of wings with an infinite wingspan
            and limited wingspan.
          </p>
          <p className="caption" lang="zh">
            图4-6-2：无限翼展翼与有限翼展翼的环量与升力。
          </p>
        </div>

        <p className="image">
          <img alt="" src={i1lPj904OqTzDW} />
        </p>
        <div className="bilingual">
          <p className="caption" lang="en">
            Fig. 4-6-3: Wingtip vortex.
          </p>
          <p className="caption" lang="zh">
            图4-6-3：翼端涡。
          </p>
        </div>

        <h3 className="section-header bilingual-title"><span lang="en">● Prandtl&apos;s Lifting Line Theory</span><span className="bilingual-sep"> / </span><span lang="zh">普朗特升力线理论</span></h3>

        <div className="bilingual">
          <p lang="en">
            Frederick Lanchester developed an early model of flow around a
            finite-span wing using Hermann von Helmholtz&apos;s concept of
            vortex filaments. He proposed that circulation exists around the
            wing and that, at the wingtips, the vortex filaments bend
            downstream, forming trailing vortices. In his view, the flow around
            a finite wing consists of a uniform upstream flow, a vortex sheet
            along the wing, and vortex filaments extending downstream from the
            wingtips. By combining these elements, Lanchester suggested that
            lift for a finite wing could be explained. However, he did not
            provide a complete mathematical formulation, and his theory was not
            fully accepted at the time.
          </p>
          <p lang="zh">
            英国的兰彻斯特用亥姆霍兹的涡丝概念为有限翼展翼周围流动建模。他认为翼周围由涡丝产生环量，涡丝在翼端向下游弯折并出现新的环量；亦即有限翼展翼周围流动由「上游均匀流」「沿翼端方向排列的涡层」「自翼端向下游延伸的涡丝束」构成，合成这些流动即可求有限翼升力。但他未能给出数学上严格的表达，其理论在学术上未获承认。
          </p>
        </div>

        <div className="bilingual">
          <p lang="en">
            The theory for finite wings was later formalized by Ludwig Prandtl,
            who also developed the Boundary Layer Theory. Prandtl&apos;s Lifting
            Line Theory closely resembled Lanchester&apos;s model but provided
            the necessary mathematical framework, leading to its acceptance and
            widespread use.
          </p>
          <p lang="zh">
            最终首次完成有限翼展翼理论的，是提出边界层理论的普朗特。他所提出的有限翼展翼升力理论与兰彻斯特模型酷似，但成功完成了兰彻斯特未能做到的工作：为该模型给出严格数学表达。
          </p>
        </div>

        <div className="bilingual">
          <p lang="en">
            Ludwig Prandtl&apos;s model represents a finite wing by a bound
            vortex distributed along the span, with trailing vortex filaments
            extending downstream. This idealization—known as the lifting
            line—treats the wing as a line of circulation that induces a
            velocity field in the surrounding flow.
          </p>
          <p lang="zh">
            普朗特构想：把无限多个无限弱的涡丝沿翼展方向成束配置在翼面，各涡丝再向下游弯折。这种无限弱涡丝称为升力线。
          </p>
        </div>

        <p className="image">
          <img alt="" src={i19QfOZQxlTlt} />
        </p>
        <div className="bilingual">
          <p className="caption" lang="en">
            Fig. 4-6-4: Conceptual diagram of the Lifting Line Theory.
          </p>
          <p className="caption" lang="zh">
            图4-6-4：升力线理论的概念图。
          </p>
        </div>

        <div className="bilingual">
          <p lang="en">
            Prandtl&apos;s Lifting Line Theory made it possible to calculate the
            lift distribution and the associated aerodynamic moments for a wing
            of finite span. It also established the existence of induced drag,
            generated by the downwash created by the trailing vortices. From
            this, it was shown that induced drag decreases as the wingspan (or
            aspect ratio) increases.
          </p>
          <p lang="zh">
            借助普朗特升力线理论，可算出有限翼能产生的升力与力矩。同时，由翼端涡引起的下洗所产生的阻力——诱导阻力——的存在得以明确；并在理论上阐明：翼展（展弦比）越大，诱导阻力越小。
          </p>
        </div>

        <p className="image">
          <img alt="" src={i1gJIO9cjA3TrEE} />
        </p>
        <div className="bilingual">
          <p className="caption" lang="en">
            Fig. 4-6-5: Lanchester&apos;s illustration of the vortex around the
            wing
          </p>
          <p className="caption" lang="zh">
            图4-6-5：有限翼展翼周围的流场
          </p>
        </div>

        <div className="bilingual">
          <p lang="en">
            As shown in Fig. 4-6-3, wingtip vortices are produced when air flows
            from the high-pressure region beneath the wing to the lower-pressure
            region above it. The formation of these vortices requires energy,
            which is drawn from the overall aerodynamic system and ultimately
            increases fuel consumption. The downwash induced by the wingtip
            vortices alters the pressure field around the wing, generating drag
            associated with lift, known as induced drag. In addition, the
            downwash reduces the effective angle of attack, which lowers the
            effective lift generated by the wing (Fig. 4-6-5).
          </p>
          <p lang="zh">
            翼端涡如图4-6-3，因高压下面流向低压上面而产生。产生翼端涡需要持续能量，而这能量终究来自发动机，造成无用油耗。实际上翼端涡通过下洗影响翼的压力场，产生由压力引起的阻力；因升力而诱导出流动所产生的阻力，故称诱导阻力。普朗特还指出翼端涡会使升力减小——因涡的下洗使实质迎角（有效迎角）变小。（图4-6-5）
          </p>
        </div>

        <div className="bilingual">
          <p lang="en">
            Wing end plates are used to reduce wingtip vortices. These
            aerodynamic devices limit the flow between the high- and
            low-pressure regions at the wingtip, thereby reducing vortex
            strength. However, such vortices are not limited to wings. Whenever
            there is a pressure gradient perpendicular to the primary flow
            direction, fluid will move along that gradient, generating
            longitudinal vortices. In automotive applications, similar vortical
            structures form around the vehicle body, contributing to drag. A
            common example is the vortices generated in the wake behind a car,
            as shown in Fig. 4-6-6.
          </p>
          <p lang="zh">
            为抑制翼端涡而出现的是翼端板：它分隔翼负压面与高压面的流动，抑制翼端处流动回旋。但翼端涡并非只从翼产生。与翼端涡机制相同，只要主流方向的垂直方向存在压力梯度，就会沿该梯度产生流动并形成纵涡。因此汽车车体也会产生与翼端涡同类的纵涡并带来阻力；例如图4-6-6
            车后尾迹中的涡就是典型纵涡。
          </p>
        </div>

        <p className="image">
          <img alt="" src={i1Z3h7EjW4DrQ8E} />
        </p>
        <div className="bilingual">
          <p className="caption" lang="en">
            Fig. 4-6-6: Longitudinal vortex generated from a car&apos;s chassis.
          </p>
          <p className="caption" lang="zh">
            图4-6-6：由汽车车体产生的纵涡。
          </p>
        </div>
      </div>
    </div>
  </>
);

export default PrandtlsLiftingLineTheory;
