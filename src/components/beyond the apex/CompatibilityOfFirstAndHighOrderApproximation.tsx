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
            According to Godunov&apos;s Theorem, it is not possible for a linear scheme to be both high-order accurate and strictly monotonic. In other words, some degree of oscillation cannot be completely eliminated in such schemes. Therefore, instead of trying to remove oscillations entirely, alternative approaches are used to control them while maintaining as much accuracy as possible.
          </p>
          <p lang="zh">
            据戈杜诺夫定理，格式「高精度」与「解不振动」无法兼得；即便对高阶精度直接下功夫，也无法消除解振动的可能。因此要不使解振动又得到高精度结果，须另想办法。这里介绍这些方法。
          </p>
        </div>

        <h3 className="section-header">● TVD</h3>

        <div className="bilingual">
          <p lang="en">
            First-order approximation schemes are diffusive and less accurate, but they preserve monotonicity and do not produce oscillations. In contrast, higher-order schemes provide greater accuracy in smooth regions, but can generate non-physical oscillations when applied to flows with abrupt changes, such as discontinuities. Each approach therefore has its own advantages and disadvantages. A natural idea is to combine the strengths of both methods, using higher-order accuracy in smooth regions while preserving monotonicity near discontinuities. This concept led to the development of TVD (Total Variation Diminishing).
          </p>
          <p lang="zh">
            一阶精度解容易扩散、精度不高，但不振动、能保持单调性；高阶精度通常更高，但求解不连续面等急剧变化流动时，解可能振动并招致非现实数值或不稳定。二者各有长短。于是产生想法：若能随流动只发挥各自长处，是否可得更好结果——由此实际构想出的便是 TVD 法。
          </p>
        </div>

        <div className="bilingual">
          <p lang="en">
            TVD (Total Variation Diminishing) combines first-order and higher-order approximations. It is designed to prevent an increase in the total variation of the solution, thereby avoiding non-physical oscillations. In smooth regions of the flow, TVD uses higher-order approximations to achieve greater accuracy. In regions with sharp gradients or discontinuities, it switches to first-order behavior to preserve monotonicity. In this way, TVD adapts to the local flow conditions, maintaining stability while retaining as much accuracy as possible.
          </p>
          <p lang="zh">
            TVD 法可谓一阶与高阶精度的混合法。它设法使解整体变差不增加，自行判定流动变化剧烈程度：大部分流动用高阶精度计算，在急剧变化处切换为一阶以维持单调性。
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
            图5-4-1：TVD 法
          </p>
        </div>

        <div className="bilingual">
          <p lang="en">
            There are other techniques, in addition to TVD, that are used to reduce oscillations arising from high-order approximation schemes. One approach is to introduce artificial (numerical) viscosity, which stabilizes the solution by damping non-physical oscillations. Another widely used method is MUSCL (Monotonic Upstream-Centered Schemes for Conservation Laws), which improves accuracy while maintaining stability.
          </p>
          <p lang="zh">
            抑制高阶格式振动的手法除 TVD 外还有若干，代表性的如人为加入数值粘性，以及 MUSCL 法等。
          </p>
        </div>

        <div className="bilingual">
          <p lang="en">
            Schemes such as TVD, which maintain high-order accuracy in smooth regions while capturing sharp changes in discontinuous regions without introducing non-physical oscillations, are commonly referred to as high-resolution schemes.
          </p>
          <p lang="zh">
            像 TVD 法这样在流动平滑处维持高阶精度、又能鲜明捕捉不连续等的格式，一般称为高分辨率格式。
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
            图5-4-2：采用 TVD 更能得到接近真值的结果。
          </p>
        </div>

        <h3 className="section-header">● Evaluation of TVD / TVD 的评价</h3>

        <div className="bilingual">
          <p lang="en">
            Diagram 5-4-2 compares results obtained using a TVD scheme with those from first-order and higher-order approximation schemes. Unlike higher-order schemes, TVD avoids non-physical oscillations such as overshoot and undershoot. At the same time, compared with first-order schemes, it reduces excessive numerical diffusion, resulting in a more accurate representation of sharp gradients. In particular, the TVD solution remains closer to the true (exact) solution than the other schemes.
          </p>
          <p lang="zh">
            图5-4-2 是用一阶与高阶格式解比较 TVD 法计算结果的例子。TVD 法不像高阶格式那样出现过冲、下冲等非物理振动；又比一阶格式更能抑制解的扩散；且与二者相比，TVD 解都更接近真值（严格解）。
          </p>
        </div>

        <div className="bilingual">
          <p lang="en">
            However, because TVD schemes require additional calculations to adapt to local flow conditions, they generally incur a higher computational cost and longer computation time.
          </p>
          <p lang="zh">
            不过 TVD 法需要对流场变化作判定，因此会多花一些计算时间。
          </p>
        </div>

        <div className="bilingual">
          <p lang="en">
            TVD is effective for handling discontinuities, such as shock waves, and are widely used in simulations of compressible flows.
          </p>
          <p lang="zh">
            TVD 法对求解冲击波等不连续面有效，故在可压缩流体仿真中尤其广泛使用。在汽车上，发动机系统的空气流动须按可压缩流体处理。
          </p>
        </div>
      </div>
    </div>
  </>
);

export default CompatibilityOfFirstAndHighOrderApproximation;
