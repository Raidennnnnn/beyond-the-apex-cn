import i1nArCjPg11myb from "../../assets/images/i1nArCjPg11myb.webp";
import i15lXiPnf3Pp9EE from "../../assets/images/i15lXiPnf3Pp9EE.webp";
import i11zaMR6StyOC from "../../assets/images/i11zaMR6StyOC.webp";
import i1Dvk8qAorWpkuB from "../../assets/images/i1Dvk8qAorWpkuB.webp";

const TheWorldOfCFD = () => (
  <>
    <div className="manual_detail">
      <div className="content_header">
        <h1>5-1 : The World of CFD / CFD的世界</h1>
        <h2>
          CFD, a world of discretisation / CFD，离散化的世界
        </h2>
      </div>
      <div className="body">
        <div className="bilingual">
          <p lang="en">
            The previous section&apos;s introduction to aerodynamics should have made it clear that a full understanding of flow fields requires solving fluid equations such as the Navier–Stokes Equations. In the latter part of the 20th century, advances in computing made it possible to solve these equations numerically.
          </p>
          <p lang="zh">
            前项介绍了空气力学理论，但那些是为绕开纳维–斯托克斯方程而采取的策略。要更准确地了解流场，仍须求解这类流体方程。在此背景下，用计算机数值求解流体方程的方法不断发展——这就是 Computational Fluid Dynamics（计算流体力学、数值流体力学），通称 CFD。
          </p>
        </div>

        <div className="bilingual">
          <p lang="en">
            This field is known as Computational Fluid Dynamics (CFD), or numerical fluid dynamics. CFD has become an essential tool in automotive development, although it is not widely known outside the field. To understand the basics of how CFD works, we briefly examine the underlying theoretical concepts.
          </p>
          <p lang="zh">
            CFD 如今已是汽车开发不可或缺的工具，但其机制对一般人几乎无人知晓。这里简洁介绍 CFD 相关理论概念。
          </p>
        </div>

        <h3 className="section-header">● Approximation / 近似</h3>

        <div className="bilingual">
          <p lang="en">
            The real world can be viewed as a continuous (analog) system, in which physical quantities vary smoothly in space and time. In fluid dynamics, fluids are typically modeled as continuous media with properties defined at every point in this continuum. Computers, however, operate digitally and can only handle discrete values with finite resolution. As a result, CFD represents the continuous flow field by dividing space and time into small, discrete elements. Despite this discretization, the objective of CFD is to approximate the behavior of the continuous real world as accurately as possible. To achieve this, physical processes that cannot be directly resolved must be modeled and incorporated through appropriate assumptions and approximations.
          </p>
          <p lang="zh">
            现实世界是模拟的：光滑连续，任意时间、空间一点都存在某种物理信息。计算机则是数字的，只能处理不连续、跳跃的值，所能保存的信息有限。因此 CFD 也不得不把本应光滑的时间与空间分割成不连续对象。尽管如此，CFD 仍希望尽可能表现接近现实的光滑世界，于是对计算机不具备的信息加以建模并补全。
          </p>
        </div>

        <p className="image">
          <img alt="" src={i1nArCjPg11myb} />
        </p>
        <div className="bilingual">
          <p className="caption" lang="en">
            Fig. 5-1-1: The difference between the real world and the world of CFD.
          </p>
          <p className="caption" lang="zh">
            图5-1-1：现实世界与 CFD 世界的差异。
          </p>
        </div>

        <div className="bilingual">
          <p lang="en">
            How, then, is the missing information represented? One approach is to connect known data points with straight lines and assume that the values between them vary linearly. Alternatively, higher-order models can be used, where the variation between points is represented by smooth curves.This process of representing unknown values based on known data while preserving the essential behavior is called approximation, and the resulting value is referred to as an approximate value. In CFD, these approximation methods are implemented through numerical schemes.
          </p>
          <p lang="zh">
            那么如何补全没有信息的部分？可简单用直线连接计算机已有的信息，把空白处当作直线变化；也可用曲线模型把空白处当作曲线变化。这样虽与本真不同，却在不丧失其性质的程度上加以简化——称为近似；由此得到的、对真值足够接近的值称为近似值。CFD 中把上述近似手法称为格式（scheme）。
          </p>
        </div>

        <p className="image">
          <img alt="" src={i15lXiPnf3Pp9EE} />
        </p>
        <div className="bilingual">
          <p className="caption" lang="en">
            Fig. 5-1-2: Complement missing data from computers
          </p>
          <p className="caption" lang="zh">
            图5-1-2：补全计算机所不具备的信息。
          </p>
        </div>

        <h3 className="section-header">● The Lax Equivalence Theorem / Lax 等价定理</h3>

        <div className="bilingual">
          <p lang="en">
            Since computers cannot represent every point in space and time, CFD results are inherently approximate. However, if the difference from the true value is sufficiently small, it is acceptable in practice. For example, if the average flow velocity is 30 m/s, a difference on the order of 0.000001 m/s is negligible. In the same way, small numerical differences in simulation results are not a concern as long as they remain within an acceptable tolerance. In technical terms, a simulation is considered acceptable when the solution has converged.
          </p>
          <p lang="zh">
            计算机无法持有现实世界全部时间与空间信息，故 CFD 计算结果只能是近似值。但若与真值的误差足够小，实用上便无问题。例如某流场平均流速为 30 m/s 时，通常不必在意 0.000001 量级；对解析流动的人而言，30 m/s 与 30.000001 m/s 实质可视为相同。因此无意义的微小量级可忽略，仿真误差只要小于所需精度即可。用稍专业的话说：仿真计算结果若对真值「收敛」即可。
          </p>
        </div>

        <div className="bilingual">
          <p lang="en">
            An important concept related to this is the Lax Equivalence Theorem, demonstrated by Peter Lax. This theorem states that for a well-posed linear initial value problem, a numerical scheme converges if, and only if, it is both consistent and stable. In other words, the relationship between consistency and stability determines convergence. Refer to Fig. 5-1-4 for the definitions of consistency, stability and convergence.
          </p>
          <p lang="zh">
            这里介绍重要定理：由彼得·拉克斯证明的 Lax 等价定理。该定理指出：「收敛的唯一格式是稳定且相容的格式。」亦即「稳定性＋相容性＝收敛性」。「相容性」「稳定性」含义见图5-1-4，「收敛性」见 Tips。
          </p>
        </div>

        <p className="image">
          <img alt="" src={i11zaMR6StyOC} />
        </p>
        <div className="bilingual">
          <p className="caption" lang="en">
            Fig. 5-1-3
          </p>
          <p className="caption" lang="zh">
            图5-1-3
          </p>
        </div>

        <p className="image">
          <img alt="" src={i1Dvk8qAorWpkuB} />
        </p>
        <div className="bilingual">
          <p className="caption" lang="en">
            Fig. 5-1-4 Conformability and stability. The &quot;true value&quot; referred to here is the solution obtained from an analytical solution of the governing partial differential equations of fluid flow.
          </p>
          <p className="caption" lang="zh">
            图5-1-4：相容性与稳定性。此处「真值」指对流体偏微分方程作解析求解所得之解。
          </p>
        </div>

        <div className="bilingual">
          <p lang="en">
            The Lax Equivalence Theorem states that for a well-posed linear initial value problem, a numerical scheme converges if and only if it is both stable and consistent. In other words, when a scheme satisfies these two conditions, the numerical (difference) solution approaches the exact solution of the original differential equation as the grid spacing becomes sufficiently small.
          </p>
          <p lang="zh">
            「收敛」意味着：把空间步长不断细化时，即便沿时间推进计算，也能把计算误差变得任意小。做 CFD 时并非任意格式皆可；若不满足相容性与稳定性，计算便不收敛，得不到正确解。
          </p>
        </div>
      </div>
    </div>
  </>
);

export default TheWorldOfCFD;
