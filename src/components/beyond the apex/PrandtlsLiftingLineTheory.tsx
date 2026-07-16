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
        <h1>
          4-6 : Prandtl&apos;s Lifting Line Theory / 普朗特升力线理论
        </h1>
        <h2>
          Wingtip vortex generation on finite wings / 有限翼展上的翼尖涡生成
        </h2>
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
            经由马丁·威廉·库塔与尼古拉·茹科夫斯基的工作，升力的环量理论得以确立，使二维流动中的升力可被准确计算。然而真实机翼处于三维流动中，环量沿翼展变化，二维理论不能直接套用。因此需要新的框架来描述三维流场中的升力。
          </p>
        </div>

        <h3 className="section-header">
          ● Flow around a limited wingspan / 有限翼展周围的流动
        </h3>

        <div className="bilingual">
          <p lang="en">
            As explained earlier, an airfoil can be considered as a wing of
            infinite span. In such a case, the circulation is uniform along the
            span, and the lift per unit span remains constant. Therefore, the
            Kutta–Zhukovsky Theory can be directly applied to this idealized
            two-dimensional condition.
          </p>
          <p lang="zh">
            如前所述，翼型可视为无限翼展的机翼。此时环量沿翼展均匀，单位翼展升力保持恒定。因此库塔–茹科夫斯基理论可直接应用于这一理想二维条件。
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
            然而实际机翼翼展有限。在翼尖附近，空气倾向于从翼下高压区流向翼上低压区。于是压力分布不同于无限翼展机翼，单位翼展升力向翼尖减小。这种横向流动在尾迹中产生旋转运动，形成向下游延伸的尾涡。翼尖处形成的涡称为翼尖涡。
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
            图4-6-1：有限翼展机翼周围的流动。
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
            图4-6-2：无限翼展与有限翼展机翼的环量与升力。
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
            图4-6-3：翼尖涡。
          </p>
        </div>

        <h3 className="section-header">
          ● Prandtl&apos;s Lifting Line Theory / 普朗特升力线理论
        </h3>

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
            <br />
            <br />
            The theory for finite wings was later formalized by Ludwig Prandtl,
            who also developed the Boundary Layer Theory. Prandtl&apos;s Lifting
            Line Theory closely resembled Lanchester&apos;s model but provided
            the necessary mathematical framework, leading to its acceptance and
            widespread use.
          </p>
          <p lang="zh">
            弗雷德里克·兰彻斯特利用亥姆霍兹的涡丝概念，建立了有限翼展机翼周围流动的早期模型。他提出机翼周围存在环量，且在翼尖处涡丝向下游弯折形成尾涡。在他看来，有限翼周流由上游均匀流、沿翼的涡片以及自翼尖向下游延伸的涡丝组成。将这些要素结合，兰彻斯特认为可解释有限翼升力。但他未给出完整数学表述，当时理论亦未获充分认可。
            <br />
            <br />
            有限翼理论后来由同时发展边界层理论的普朗特加以形式化。普朗特升力线理论与兰彻斯特模型十分相近，但提供了必要的数学框架，因而被接受并广泛使用。
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
            普朗特的模型用沿翼展分布的附着涡表示有限翼，并有尾涡丝向下游延伸。这一理想化——称为升力线——把机翼当作一条环量线，在周围流动中诱导速度场。
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
            普朗特升力线理论使计算有限翼展机翼的升力分布及相关气动力矩成为可能。它还确立了诱导阻力的存在，由尾涡产生的下洗所引起。由此表明，诱导阻力随翼展（或展弦比）增大而减小。
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
            图4-6-5：兰彻斯特所绘机翼周围的涡
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
            <br />
            <br />
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
            如图4-6-3
            所示，当空气从翼下高压区流向翼上低压区时产生翼尖涡。形成这些涡需要能量，该能量取自整体气动系统，最终增加燃油消耗。翼尖涡诱导的下洗改变机翼周围压力场，产生与升力相关的阻力，即诱导阻力。此外，下洗降低有效迎角，从而降低机翼产生的有效升力（图4-6-5）。
            <br />
            <br />
            翼端板用于减弱翼尖涡。这些气动装置限制翼尖高、低压区间的流动，从而减小涡强。然而此类涡并不限于机翼。只要存在垂直于主流方向的压力梯度，流体就会沿该梯度运动，产生纵向涡。在汽车应用中，车身周围会形成类似涡结构并贡献阻力。常见例子是车后尾迹中产生的涡，如图4-6-6 所示。
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
            图4-6-6：由汽车底盘产生的纵向涡。
          </p>
        </div>
      </div>
    </div>
  </>
);

export default PrandtlsLiftingLineTheory;
