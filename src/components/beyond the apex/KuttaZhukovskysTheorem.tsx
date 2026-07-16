import i10tnciEQ2O72cE from "../../assets/images/i10tnciEQ2O72cE.webp";
import i1womWn7G59vrz from "../../assets/images/i1womWn7G59vrz.webp";
import i1IY6TQtXhSRMcc from "../../assets/images/i1IY6TQtXhSRMcc.webp";

const KuttaZhukovskysTheorem = () => (
  <>
    <div className="manual_detail">
      <div className="content_header">
        <h1>
          4-4 : Kutta–Zhukovsky&apos;s Theorem / 库塔–茹科夫斯基定理
        </h1>
        <h2>Circulation theory of lift / 升力的环量理论</h2>
      </div>
      <div className="body">
        <div className="bilingual">
          <p lang="en">
            Gustav Kirchhoff and John William Strutt hypothesized that a
            discontinuity surface forms near regions of sharp geometry, such as
            acute angles. However, such discontinuities can arise more generally
            from the flow over a body, and the surface of an object may be
            considered to be covered with vortex layers (or vortex sheets). In
            this sense, the generation of lift is closely related to circulation
            theory, which will be discussed in the following sections.
          </p>
          <p lang="zh">
            古斯塔夫·基尔霍夫与约翰·威廉·斯特拉特假定，锐角等尖锐几何附近会形成不连续面。然而，此类不连续更一般地可来自体表流动，物体表面可视为覆盖着涡层（或涡片）。就此而言，升力的产生与环量理论密切相关，将在后续各节讨论。
          </p>
        </div>

        <h3 className="section-header">
          ● Kutta–Zhukovsky&apos;s Theorem / 库塔–茹科夫斯基定理
        </h3>

        <div className="bilingual">
          <p lang="en">
            Flow velocity changes rapidly near the surface of an object due to
            viscosity, creating strong velocity gradients. These can be
            represented by vortex filaments, which together form a vortex layer
            (or vortex sheet) along the surface. The strength of this vortex
            layer is characterized by circulation. Based on this concept, the
            flow around a body can be expressed as a superposition of two
            idealized components: a uniform flow (freestream) and a circulation
            flow. From a mathematical standpoint, circulation is defined as the
            line integral of velocity along a closed curve surrounding the body.
            <br />
            <br />
            As discussed above, consider a flow in which uniform flow and
            circulation are superimposed. On the upper side of the body, the
            circulation flow moves in the same direction as the freestream,
            increasing the local velocity. On the lower side, the circulation
            flow opposes the freestream, reducing the local velocity. According
            to Bernoulli&apos;s Theory, this results in lower pressure above and
            higher pressure below, producing an upward lift force (Fig. 4-4-1).
          </p>
          <p lang="zh">
            由于黏性，物体表面附近流速迅速变化，形成强烈速度梯度。它们可用涡丝表示，并沿表面共同构成涡层（或涡片）。该涡层的强度以环量表征。据此，绕体流动可表达为两个理想化分量的叠加：均匀流（来流）与环量流。从数学上，环量定义为沿包围物体的闭合曲线对速度的线积分。
            <br />
            <br />
            如上所述，考虑均匀流与环量叠加的流动。在物体上侧，环量流与来流方向相同，增大当地速度；在下侧，环量流与来流相反，减小当地速度。根据伯努利定理，上侧压力降低、下侧压力升高，从而产生向上的升力（图4-4-1）。
          </p>
        </div>

        <p className="image">
          <img alt="" src={i10tnciEQ2O72cE} />
        </p>
        <div className="bilingual">
          <p className="caption" lang="en">
            Fig. 4-4-1: Flow field with overlapping uniform flow and circulation
            flow.
          </p>
          <p className="caption" lang="zh">
            图4-4-1：均匀流与环量流叠加的流场。
          </p>
        </div>

        <div className="bilingual">
          <p lang="en">
            This model closely resembles the flow field surrounding an airfoil.
            The airfoil geometry causes the flow velocity to increase over the
            upper surface, reducing pressure, while the lower surface
            experiences a decrease in velocity, increasing pressure. The flow
            field can be interpreted as a superposition of uniform flow and
            circulation. When circulation is present, the lift can be expressed
            as:
          </p>
          <p lang="zh">
            该模型与翼型周围流场十分相似。翼型几何使上表面流速增大、压力降低，而下表面流速减小、压力升高。流场可理解为均匀流与环量的叠加。存在环量时，升力可表示为：
          </p>
        </div>

        <p className="image">
          <img alt="" src={i1womWn7G59vrz} />
        </p>
        <div className="bilingual">
          <p className="caption" lang="en">
            Fig. 4-4-2: The flow field around an airfoil can be said to be a
            combination of uniform flow and circulation flow.
          </p>
          <p className="caption" lang="zh">
            图4-4-2：翼型周围流场可视为均匀流与环量流的组合。
          </p>
        </div>

        <div className="bilingual">
          <p lang="en">
            <b>
              Lift = Flow density × Velocity of uniform flow × Vortex
              circulation (L=ρVΓ)
            </b>
          </p>
          <p lang="zh">
            <b>
              升力 = 流体密度 × 均匀流速度 × 涡环量（L=ρVΓ）
            </b>
          </p>
        </div>

        <div className="bilingual">
          <p lang="en">
            This theory was introduced independently by Martin Wilhelm Kutta and
            Nikolai Zhukovsky, and is therefore known as the Kutta–Zhukovsky
            Theorem. It shows that the lift generated by a body in a flow is
            determined by the circulation around it.
          </p>
          <p lang="zh">
            该理论由马丁·威廉·库塔与尼古拉·茹科夫斯基各自独立提出，故称库塔–茹科夫斯基定理。它表明流动中物体产生的升力由绕体环量决定。
          </p>
        </div>

        <h3 className="section-header">
          ● Kutta&apos;s Condition / 库塔条件
        </h3>

        <div className="bilingual">
          <p lang="en">
            From the Kutta–Zhukovsky Theory, lift can be determined if the
            circulation around a body is known. However, when applying this
            theory to an airfoil, an additional condition must be satisfied.
            Fluid motion is generally treated as smooth, but special
            consideration is required when the geometry includes sharp edges or
            when the flow could otherwise become discontinuous.
            <br />
            <br />
            For an airfoil, the trailing edge is typically sharp. Unless the
            flows over the upper and lower surfaces meet smoothly at this
            trailing edge, the Kutta–Zhukovsky Theory cannot be applied
            directly. This requirement is known as the Kutta Condition. By
            enforcing the Kutta Condition, a unique value of circulation is
            established, allowing the lift to be calculated.
            <br />
            <br />
            When an airfoil is set at an angle of attack relative to the flow,
            the required circulation increases to satisfy the Kutta Condition.
            As the angle of attack increases, circulation increases
            accordingly, leading to greater lift.
          </p>
          <p lang="zh">
            由库塔–茹科夫斯基理论，若已知绕体环量，便可确定升力。但将该理论应用于翼型时，还需满足额外条件。流体运动通常按光滑处理，但当几何含锐缘、或流动否则可能变得不连续时，需特别考虑。
            <br />
            <br />
            对翼型而言，后缘通常尖锐。除非上下表面流动在此后缘平滑汇合，否则不能直接应用库塔–茹科夫斯基理论。这一要求称为库塔条件。施加库塔条件后，环量取唯一值，从而可计算升力。
            <br />
            <br />
            当翼型相对来流有迎角时，为满足库塔条件所需的环量增大。迎角增大，环量随之增大，升力也更大。
          </p>
        </div>

        <p className="image">
          <img alt="" src={i1IY6TQtXhSRMcc} />
        </p>
        <div className="bilingual">
          <p className="caption" lang="en">
            Fig. 4-4-3: Kutta&apos;s Condition and circulation.
          </p>
          <p className="caption" lang="zh">
            图4-4-3：库塔条件与环量。
          </p>
        </div>
      </div>
    </div>
  </>
);

export default KuttaZhukovskysTheorem;
