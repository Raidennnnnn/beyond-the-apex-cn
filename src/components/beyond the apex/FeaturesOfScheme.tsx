import i1vZ6190jRFeNdB from "../../assets/images/i1vZ6190jRFeNdB.webp";
import i1EJDxWhnuntS from "../../assets/images/i1EJDxWhnuntS.webp";
import i1tq8jF6qqGz3uB from "../../assets/images/i1tq8jF6qqGz3uB.webp";
import i1o5XBWlYYhjiG from "../../assets/images/i1o5XBWlYYhjiG.webp";

const FeaturesOfScheme = () => (
  <>
    <div className="manual_detail">
      <div className="content_header">
        <h1>5-3 : Features of Scheme / 数值格式的特征</h1>
        <h2>
          Monotonicity and high accuracy cannot be compatible / 单调性与高精度无法兼得
        </h2>
      </div>
      <div className="body">
        <div className="bilingual">
          <p lang="en">
            There are several ways to define the numerical flux, and the practitioner must choose an appropriate scheme. This choice is not arbitrary, as different schemes have different levels of accuracy and stability, which directly affect the quality of the simulation. As stated by the Lax Equivalence Theorem, a scheme must be both consistent and stable to ensure convergence. If an inappropriate scheme is used, errors can grow and the solution may diverge. Let us now briefly examine how differences in numerical schemes can affect the results. 
            <br />
          </p>
          <p lang="zh">
            数值流束的定义方式有多种，从业者须选择适当的格式。此选择并非任意，因不同格式的精度与稳定性各异，直接影响仿真质量。如 Lax 等价定理所述，格式须既相容又稳定方能保证收敛。若采用不当格式，误差可能增大，解亦可能发散。下面简要考察数值格式差异如何影响结果。
          </p>
        </div>

        <h3 className="section-header">● The scheme of primary approximation / 一阶近似格式</h3>

        <div className="bilingual">
          <p lang="en">
            To complement missing information in a computer, the simplest approach is to approximate changes in physical quantities using a straight line. When a linear function is used for this purpose, the scheme is said to have first-order (primary) accuracy. First-order schemes have the advantage of preserving monotonicity, meaning they do not introduce non-physical oscillations. However, they also have the disadvantage of introducing numerical diffusion, which tends to smear or smooth sharp gradients in the solution. 
            <br />
          </p>
          <p lang="zh">
            为补全计算机中的缺失信息，最简做法是用直线近似物理量的变化。若为此采用线性函数，则称该格式具有一阶（初级）精度。一阶格式的优点在于保持单调性，即不引入非物理振荡。但其缺点是会引入数值扩散，往往使解中的陡梯度被抹平或平滑。
          </p>
        </div>

        <p className="image">
          <img alt="" src={i1vZ6190jRFeNdB} />
        </p>
        <div className="bilingual">
          <p className="caption" lang="en">
            Fig. 5-3-1: Calculation example of wave propagation and the first-order approximation scheme. The solution diffuses because the scheme of first-order approximation can't resolve the high frequency waves.
          </p>
          <p className="caption" lang="zh">
            图5-3-1：波传播与一阶近似格式的计算示例。由于一阶近似格式无法分辨高频波，解发生扩散。
          </p>
        </div>

        <h3 className="section-header">● The scheme of high-order accuracy / 高阶精度格式</h3>

        <div className="bilingual">
          <p lang="en">
            It is natural to assume that greater accuracy can be achieved by using information from more lattice elements and approximating with higher-order curves rather than simple linear expressions. In practice, higher-order schemes do provide more accurate solutions than standard first-order schemes. However, increasing the order also increases computational complexity, as more neighboring elements must be considered in the calculation. In addition, some high-order schemes can introduce non-physical oscillations (often referred to as numerical oscillations), which may reduce overall accuracy, especially near sharp gradients or discontinuities. 
            <br />
          </p>
          <p lang="zh">
            自然会想到，若取用更多格点信息、以高阶曲线而非简单线性式近似，便可获得更高精度。实践中，高阶格式确实比标准一阶格式给出更精确的解。然而，阶数提高也会增大计算复杂度，因须考虑更多相邻单元。此外，部分高阶格式可能引入非物理振荡（常称数值振荡），尤其在陡梯度或不连续面附近，反而降低整体精度。
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
            图5-3-2：二阶近似格式与波传播（流动）的计算示例。高阶精度波的传播速度（相位）随频率而异，故波形被破坏。
          </p>
        </div>

        <h3 className="section-header">● Godunov's Theorem / 戈杜诺夫定理</h3>

        <div className="bilingual">
          <p lang="en">
            A higher-order approximation scheme generally provides more accurate results over much of the flow field. However, it also has important drawbacks. In regions where the flow changes abruptly—such as across discontinuities—high-order schemes can produce non-physical oscillations, leading to instability and unrealistic values. In such cases, first-order schemes, which preserve monotonicity, often provide more reliable results. 
            <br />
            <br />
            This raises a natural question: why not construct a scheme that is both highly accurate and free of oscillations? The answer lies in Godunov's Theorem. This theorem states that linear numerical schemes that preserve monotonicity cannot be higher than first-order accurate. In other words, it is not possible to achieve both high-order accuracy and strict monotonicity at the same time. As a result, all practical schemes involve a trade-off between accuracy and stability. 
            <br />
          </p>
          <p lang="zh">
            高阶近似格式在流场大部分区域通常能给出更精确的结果，但也有重要缺点。在流动急剧变化之处——例如不连续面两侧——高阶格式可能产生非物理振荡，导致不稳定与非现实数值。此类情形下，保持单调性的一阶格式往往更可靠。
            <br />
            <br />
            由此自然产生疑问：何不构造既高精度又无振荡的格式？答案在于戈杜诺夫定理。该定理指出，保持单调性的线性数值格式不可能高于一阶精度。换言之，无法同时实现高阶精度与严格单调性。因此，一切实用格式都须在精度与稳定性之间取舍。
          </p>
        </div>

        <p className="image">
          <img alt="" src={i1tq8jF6qqGz3uB} />
        </p>
        <div className="bilingual">
          <p className="caption" lang="en">
            Fig. 5-3-3: According to Godunov's Theorem, any linear scheme with higher-order accuracy cannot preserve the monotonicity of the solution for problems such as the linear wave equation. For this reason, non-linear schemes were developed to overcome this limitation. One such approach is the TVD (Total Variation Diminishing) scheme (described in 5-4).
          </p>
          <p className="caption" lang="zh">
            图5-3-3：据戈杜诺夫定理，对线性波动方程等问题，任何具高阶精度的线性格式均无法保持解的单调性。为此发展了非线性格式以克服此局限，其中之一为 TVD（Total Variation Diminishing，总变差递减）格式（见5-4）。
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
            图5-3-4：针对不连续面等流动急剧变化时各格式的精度。
          </p>
        </div>
      </div>
    </div>
  </>
);

export default FeaturesOfScheme;
