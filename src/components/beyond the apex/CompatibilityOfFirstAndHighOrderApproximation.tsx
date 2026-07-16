import i1kBp6hCiyjm47c from "../../assets/images/i1kBp6hCiyjm47c.webp";
import i1RMOVZ6f1mmD from "../../assets/images/i1RMOVZ6f1mmD.webp";

const CompatibilityOfFirstAndHighOrderApproximation = () => (
  <>
    <div className="manual_detail">
      <div className="content_header">
        <h1>
          5-4 : Compatibility of First-Order Approximation and High-Order Approximation / 一阶近似与高阶近似的兼容
        </h1>
        <h2>
          How to make both first-order approximation and high-order approximation compatible / 如何兼顾一阶近似与高阶近似
        </h2>
      </div>
      <div className="body">
        <div className="bilingual">
          <p lang="en">
            According to Godunov's Theorem, it is not possible for a linear scheme to be both high-order accurate and strictly monotonic. In other words, some degree of oscillation cannot be completely eliminated in such schemes. Therefore, instead of trying to remove oscillations entirely, alternative approaches are used to control them while maintaining as much accuracy as possible.
          </p>
          <p lang="zh">
            据戈杜诺夫定理，线性格式无法既具高阶精度又严格保持单调性。换言之，此类格式中一定程度的振荡无法完全消除。因此，与其试图彻底去除振荡，不如采用其他途径加以控制，同时尽可能保持精度。
          </p>
        </div>

        <h3 className="section-header">● TVD</h3>

        <div className="bilingual">
          <p lang="en">
            First-order approximation schemes are diffusive and less accurate, but they preserve monotonicity and do not produce oscillations. In contrast, higher-order schemes provide greater accuracy in smooth regions, but can generate non-physical oscillations when applied to flows with abrupt changes, such as discontinuities. Each approach therefore has its own advantages and disadvantages. A natural idea is to combine the strengths of both methods, using higher-order accuracy in smooth regions while preserving monotonicity near discontinuities. This concept led to the development of TVD (Total Variation Diminishing). 
            <br />
            <br />
            TVD (Total Variation Diminishing) combines first-order and higher-order approximations. It is designed to prevent an increase in the total variation of the solution, thereby avoiding non-physical oscillations. In smooth regions of the flow, TVD uses higher-order approximations to achieve greater accuracy. In regions with sharp gradients or discontinuities, it switches to first-order behavior to preserve monotonicity. In this way, TVD adapts to the local flow conditions, maintaining stability while retaining as much accuracy as possible.
          </p>
          <p lang="zh">
            一阶近似格式具有扩散性、精度较低，但能保持单调性且不产生振荡。相比之下，高阶格式在平滑区域精度更高，但用于含不连续面等急剧变化的流动时，可能产生非物理振荡。两种途径各有优劣。自然的思路是结合二者长处：在平滑区域采用高阶精度，在不连续面附近保持单调性。这一构想促成了 TVD（Total Variation Diminishing，总变差递减）的发展。
            <br />
            <br />
            TVD 将一阶与高阶近似相结合，旨在防止解的总变差增大，从而避免非物理振荡。在流动平滑区域，TVD 采用高阶近似以提高精度；在陡梯度或不连续面区域，则切换为一阶行为以保持单调性。如此，TVD 随局部流动条件自适应，在保持稳定的同时尽可能保留精度。
          </p>
        </div>

        <p className="image">
          <img alt="" src={i1kBp6hCiyjm47c} />
        </p>
        <div className="bilingual">
          <p className="caption" lang="en">
            Fig. 5-4-1 TVD
          </p>
          <p className="caption" lang="zh">
            图5-4-1：TVD
          </p>
        </div>

        <div className="bilingual">
          <p lang="en">
            There are other techniques, in addition to TVD, that are used to reduce oscillations arising from high-order approximation schemes. One approach is to introduce artificial (numerical) viscosity, which stabilizes the solution by damping non-physical oscillations. Another widely used method is MUSCL (Monotonic Upstream-Centered Schemes for Conservation Laws), which improves accuracy while maintaining stability.
          </p>
          <p lang="zh">
            除 TVD 外，还有其他技术用于抑制高阶近似格式引起的振荡。一种做法是引入人工（数值）粘性，通过阻尼非物理振荡来稳定解。另一广泛采用的方法是 MUSCL（Monotonic Upstream-Centered Schemes for Conservation Laws，守恒律单调上游中心格式），在保持稳定的同时提高精度。
          </p>
        </div>

        <div className="bilingual">
          <p lang="en">
            Schemes such as TVD, which maintain high-order accuracy in smooth regions while capturing sharp changes in discontinuous regions without introducing non-physical oscillations, are commonly referred to as high-resolution schemes.
          </p>
          <p lang="zh">
            像 TVD 这样在平滑区域保持高阶精度、又能在不连续区域捕捉急剧变化且不引入非物理振荡的格式，通常称为高分辨率格式。
          </p>
        </div>

        <p className="image">
          <img alt="" src={i1RMOVZ6f1mmD} />
        </p>
        <div className="bilingual">
          <p className="caption" lang="en">
            Fig. 5-4-2: The results obtained are much closer to the true value when using TVD
          </p>
          <p className="caption" lang="zh">
            图5-4-2：采用 TVD 所得结果更接近真值。
          </p>
        </div>

        <h3 className="section-header">● Evaluation of TVD / TVD 的评价</h3>

        <div className="bilingual">
          <p lang="en">
            Diagram 5-4-2 compares results obtained using a TVD scheme with those from first-order and higher-order approximation schemes. Unlike higher-order schemes, TVD avoids non-physical oscillations such as overshoot and undershoot. At the same time, compared with first-order schemes, it reduces excessive numerical diffusion, resulting in a more accurate representation of sharp gradients. In particular, the TVD solution remains closer to the true (exact) solution than the other schemes. 
            <br />
            <br />
            However, because TVD schemes require additional calculations to adapt to local flow conditions, they generally incur a higher computational cost and longer computation time.
          </p>
          <p lang="zh">
            图5-4-2 将 TVD 格式的结果与一阶及高阶近似格式的结果相比较。与高阶格式不同，TVD 避免了过冲、下冲等非物理振荡。同时，相较一阶格式，它减轻了过度的数值扩散，使陡梯度得到更准确的表示。尤其值得注意的是，TVD 解比其他格式更接近真值（精确解）。
            <br />
            <br />
            然而，TVD 格式须额外计算以适应局部流动条件，因此通常计算成本更高、耗时更长。
          </p>
        </div>

        <div className="bilingual">
          <p lang="en">
            TVD is effective for handling discontinuities, such as shock waves, and are widely used in simulations of compressible flows.
          </p>
          <p lang="zh">
            TVD 适于处理冲击波等不连续面，在可压缩流动仿真中应用广泛。
          </p>
        </div>
      </div>
    </div>
  </>
);

export default CompatibilityOfFirstAndHighOrderApproximation;
