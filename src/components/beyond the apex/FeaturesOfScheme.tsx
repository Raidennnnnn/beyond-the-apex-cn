import i1vZ6190jRFeNdB from "../../assets/images/i1vZ6190jRFeNdB.webp";
import i1EJDxWhnuntS from "../../assets/images/i1EJDxWhnuntS.webp";
import i1tq8jF6qqGz3uB from "../../assets/images/i1tq8jF6qqGz3uB.webp";
import i1o5XBWlYYhjiG from "../../assets/images/i1o5XBWlYYhjiG.webp";

const FeaturesOfScheme = () => (
  <>
    <div className="manual_detail">
      <div className="content_header">
        <h1 className="bilingual-title"><span lang="en">5-3 : Features of Scheme</span><span className="bilingual-sep"> / </span><span lang="zh">数值格式的特征</span></h1>
        <h2 className="bilingual-title"><span lang="en">Monotonicity and high accuracy cannot be compatible</span><span className="bilingual-sep"> / </span><span lang="zh">单调性与高精度无法兼得</span></h2>
      </div>
      <div className="body">
        <div className="bilingual">
          <p lang="en">
            There are several ways to define the numerical flux, and the practitioner must choose an appropriate scheme. This choice is not arbitrary, as different schemes have different levels of accuracy and stability, which directly affect the quality of the simulation. As stated by the Lax Equivalence Theorem, a scheme must be both consistent and stable to ensure convergence. If an inappropriate scheme is used, errors can grow and the solution may diverge. Let us now briefly examine how differences in numerical schemes can affect the results.
          </p>
          <p lang="zh">
            数值流束的决定方法有多种，做 CFD 者必须选择适当格式；当然并非任意格式皆可。所用格式不同，数值流束精度便不同，仿真精度也受影响。又如 Lax 等价定理所示，格式不当则误差随计算推进增大，甚至发散。这里简要说明格式差异如何影响结果。
          </p>
        </div>

        <h3 className="section-header bilingual-title"><span lang="en">● The scheme of primary approximation</span><span className="bilingual-sep"> / </span><span lang="zh">一阶近似格式</span></h3>

        <div className="bilingual">
          <p lang="en">
            To complement missing information in a computer, the simplest approach is to approximate changes in physical quantities using a straight line. When a linear function is used for this purpose, the scheme is said to have first-order (primary) accuracy. First-order schemes have the advantage of preserving monotonicity, meaning they do not introduce non-physical oscillations. However, they also have the disadvantage of introducing numerical diffusion, which tends to smear or smooth sharp gradients in the solution.
          </p>
          <p lang="zh">
            补全计算机所缺信息时，最先想到的是把物理量变化作直线近似。用一次式作直线近似时，格式精度为一阶。一阶格式的长处是能维持单调性，短处是解容易扩散。
          </p>
        </div>

        <p className="image">
          <img alt="" src={i1vZ6190jRFeNdB} />
        </p>
        <div className="bilingual">
          <p className="caption" lang="en">
            Fig. 5-3-1: Calculation example of wave propagation and the first-order approximation scheme. The solution diffuses because the scheme of first-order approximation can&apos;t resolve the high frequency waves.
          </p>
          <p className="caption" lang="zh">
            图5-3-1：一阶精度格式与波传播（流动）的计算例。一阶格式无法分辨高频波，故解发生扩散。
          </p>
        </div>

        <h3 className="section-header bilingual-title"><span lang="en">● The scheme of high-order accuracy</span><span className="bilingual-sep"> / </span><span lang="zh">高阶精度格式</span></h3>

        <div className="bilingual">
          <p lang="en">
            It is natural to assume that greater accuracy can be achieved by using information from more lattice elements and approximating with higher-order curves rather than simple linear expressions. In practice, higher-order schemes do provide more accurate solutions than standard first-order schemes. However, increasing the order also increases computational complexity, as more neighboring elements must be considered in the calculation. In addition, some high-order schemes can introduce non-physical oscillations (often referred to as numerical oscillations), which may reduce overall accuracy, especially near sharp gradients or discontinuities.
          </p>
          <p lang="zh">
            若不用一次式作直线近似，而是从更多格子取信息（物理量）、用高次曲线近似，便可得到更高精度结果。实际上高阶精度格式通常比一阶精度更好；但阶次越高，所用格子与物理量越多，计算量必然增大。此外高阶格式有时会使解振动，反而精度变差。
          </p>
        </div>

        <p className="image">
          <img alt="" src={i1EJDxWhnuntS} />
        </p>
        <div className="bilingual">
          <p className="caption" lang="en">
            Fig. 5-3-2: A calculation example of a second-order approximation scheme and wave propagation (flow). The wave form is broken because the high-order accuracy wave is different from the speed (phase) of the wave propagation from the frequency.
          </p>
          <p className="caption" lang="zh">
            图5-3-2：二阶精度格式与波传播（流动）的计算例。高阶精度波随频率不同传播速度（相位）不同，故波形被破坏。
          </p>
        </div>

        <h3 className="section-header bilingual-title"><span lang="en">● Godunov&apos;s Theorem</span><span className="bilingual-sep"> / </span><span lang="zh">戈杜诺夫定理</span></h3>

        <div className="bilingual">
          <p lang="en">
            A higher-order approximation scheme generally provides more accurate results over much of the flow field. However, it also has important drawbacks. In regions where the flow changes abruptly—such as across discontinuities—high-order schemes can produce non-physical oscillations, leading to instability and unrealistic values. In such cases, first-order schemes, which preserve monotonicity, often provide more reliable results.
          </p>
          <p lang="zh">
            在流场大部分区域，高阶精度格式更容易得到精度更好的结果；但其缺点是：用不连续面等急剧变化的流动做计算时，解会变得振动，有时招致非现实数值或不稳定。此类流场下，能维持单调性的一阶精度格式往往结果更好。
          </p>
        </div>

        <div className="bilingual">
          <p lang="en">
            This raises a natural question: why not construct a scheme that is both highly accurate and free of oscillations? The answer lies in Godunov&apos;s Theorem. This theorem states that linear numerical schemes that preserve monotonicity cannot be higher than first-order accurate. In other words, it is not possible to achieve both high-order accuracy and strict monotonicity at the same time. As a result, all practical schemes involve a trade-off between accuracy and stability.
          </p>
          <p lang="zh">
            或许会想到：用不振动的高精度格式不就行了？但遗憾的是，数学上已阐明：格式「高精度」与「解单调（不解振动）」无法兼得——这就是戈杜诺夫（Godunov）定理。据该定理，不存在同时满足二者的格式；无论如何下功夫，也无法做出如此称心的高阶精度格式。
          </p>
        </div>

        <p className="image">
          <img alt="" src={i1tq8jF6qqGz3uB} />
        </p>
        <div className="bilingual">
          <p className="caption" lang="en">
            Fig. 5-3-3: According to Godunov&apos;s Theorem, any linear scheme with higher-order accuracy cannot preserve the monotonicity of the solution for problems such as the linear wave equation. For this reason, non-linear schemes were developed to overcome this limitation. One such approach is the TVD (Total Variation Diminishing) scheme (described in 5-4).
          </p>
          <p className="caption" lang="zh">
            图5-3-3：据戈杜诺夫定理，对线性波动方程，任何具高阶精度的格式都无法维持解的单调性（梯度符号不变）。为解决此问题构建了若干方法，其一即下一节的 TVD 法。
          </p>
        </div>

        <p className="image">
          <img alt="" src={i1o5XBWlYYhjiG} />
        </p>
        <div className="bilingual">
          <p className="caption" lang="en">
            Fig. 5-3-4: The accuracy for dramatic changes in flow, such as a surface of discontinuity.
          </p>
          <p className="caption" lang="zh">
            图5-3-4：针对不连续面等急剧流动变化时各格式的精度。
          </p>
        </div>
      </div>
    </div>
  </>
);

export default FeaturesOfScheme;
