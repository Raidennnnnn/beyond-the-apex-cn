import i10tnciEQ2O72cE from "../../assets/images/i10tnciEQ2O72cE.webp";
import i1womWn7G59vrz from "../../assets/images/i1womWn7G59vrz.webp";
import i1IY6TQtXhSRMcc from "../../assets/images/i1IY6TQtXhSRMcc.webp";

const KuttaZhukovskysTheorem = () => (
  <>
    <div className="manual_detail">
      <div className="content_header">
        <h1 className="bilingual-title"><span lang="en">4-4 : Kutta–Zhukovsky&apos;s Theorem</span><span className="bilingual-sep"> / </span><span lang="zh">库塔–茹科夫斯基定理</span></h1>
        <h2 className="bilingual-title"><span lang="en">Circulation theory of lift</span><span className="bilingual-sep"> / </span><span lang="zh">升力的环量理论</span></h2>
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
            基尔霍夫与瑞利假定不连续面在物体锐角部形成。其实这类不连续面可从物体表面任意处发生，也可把物体表面看作被涡层覆盖。实际上，这种想法与称为升力环量理论的升力理论密切相关。
          </p>
        </div>

        <h3 className="section-header bilingual-title"><span lang="en">● Kutta–Zhukovsky&apos;s Theorem</span><span className="bilingual-sep"> / </span><span lang="zh">库塔–茹科夫斯基定理</span></h3>

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
          </p>
          <p lang="zh">
            物体表面因黏性使流速发生大变化，因而涡丝可从表面任意处产生并构成覆盖物体的涡层。此时，覆盖物体的涡层整体强度称为「环量」。如此一来，绕体流动可分离为均匀流与环量流两类（环量的定义是沿任意平面曲线对流速作线积分所得的量）。
          </p>
        </div>

        <div className="bilingual">
          <p lang="en">
            As discussed above, consider a flow in which uniform flow and
            circulation are superimposed. On the upper side of the body, the
            circulation flow moves in the same direction as the freestream,
            increasing the local velocity. On the lower side, the circulation
            flow opposes the freestream, reducing the local velocity. According
            to Bernoulli&apos;s Theory, this results in lower pressure above and
            higher pressure below, producing an upward lift force (Fig. 4-4-1).
          </p>
          <p lang="zh">
            基于以上考察，假定存在均匀流与环量流并加以叠加：环量流上侧与均匀流方向相同，上侧流速增大；下侧两者方向相反，叠加后流速减小。于是由伯努利定理，环量流上部压力降低、下部升高，产生向上升力。（图4-4-1）
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
            这样的流场正与翼型周围流场类似：上面流速高、压力降，下面流速低、压力升。实际上翼型周围流场可作为均匀流与环量流的叠加来处理；一旦求得环量，便可按下式算出升力。（图4-4-2）
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
            图4-4-2：翼型周围流场也可视为均匀流与环量流的组合。
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
              升力 = 流体密度 × 均匀流流速 × 涡的环量（L = ρVΓ）
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
            这一理论由威廉·库塔与尼古拉·茹科夫斯基各自独立提出，称为库塔–茹科夫斯基定理。由该定理可知：无论物体形状如何，只要求得环量，该物体产生的升力便可求出。
          </p>
        </div>

        <h3 className="section-header bilingual-title"><span lang="en">● Kutta&apos;s Condition</span><span className="bilingual-sep"> / </span><span lang="zh">库塔条件</span></h3>

        <div className="bilingual">
          <p lang="en">
            From the Kutta–Zhukovsky Theory, lift can be determined if the
            circulation around a body is known. However, when applying this
            theory to an airfoil, an additional condition must be satisfied.
            Fluid motion is generally treated as smooth, but special
            consideration is required when the geometry includes sharp edges or
            when the flow could otherwise become discontinuous.
          </p>
          <p lang="zh">
            由库塔–茹科夫斯基定理可知，若知绕体环量，便可计算作用在物体上的升力。但将该定理应用于翼型时须注意一点：流体方程基本上是在「流动光滑」的前提下导出的，对尖锐形状或不连续流动通常需要特别考虑。
          </p>
        </div>

        <div className="bilingual">
          <p lang="en">
            For an airfoil, the trailing edge is typically sharp. Unless the
            flows over the upper and lower surfaces meet smoothly at this
            trailing edge, the Kutta–Zhukovsky Theory cannot be applied
            directly. This requirement is known as the Kutta Condition. By
            enforcing the Kutta Condition, a unique value of circulation is
            established, allowing the lift to be calculated.
          </p>
          <p lang="zh">
            以翼型为例，后缘形状尖锐。因此除非给定「翼型上、下面流动在后缘平滑合流」这一条件，否则不能把库塔–茹科夫斯基定理应用于翼型。后缘上、下流动平滑合流这一条件称为库塔条件。给出库塔条件后，才能确定环量，从而在数学上求得升力。
          </p>
        </div>

        <div className="bilingual">
          <p lang="en">
            When an airfoil is set at an angle of attack relative to the flow,
            the required circulation increases to satisfy the Kutta Condition.
            As the angle of attack increases, circulation increases
            accordingly, leading to greater lift.
          </p>
          <p lang="zh">
            顺便一提：相对来流给翼加上迎角时，迎角越大，为满足库塔条件所需的环量越大；环量自然增大，结果产生更大升力——这就是加大迎角升力增大的机制。
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
