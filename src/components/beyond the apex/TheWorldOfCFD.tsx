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
            The previous section's introduction to aerodynamics should have made it clear that a full understanding of flow fields requires solving fluid equations such as the Navier–Stokes Equations. In the latter part of the 20th century, advances in computing made it possible to solve these equations numerically. 
            <br />
            <br />
            This field is known as Computational Fluid Dynamics (CFD), or numerical fluid dynamics. CFD has become an essential tool in automotive development, although it is not widely known outside the field. To understand the basics of how CFD works, we briefly examine the underlying theoretical concepts.
          </p>
          <p lang="zh">
            上一节对空气动力学的介绍应当已经说明，要完整理解流场，需要求解诸如 Navier–Stokes 方程之类的流体方程。20 世纪后半叶，计算技术的进步使这些方程得以数值求解。
            <br />
            <br />
            这一领域称为计算流体力学（Computational Fluid Dynamics，CFD），或称数值流体力学。CFD 已成为汽车开发中不可或缺的工具，但在业界之外却鲜为人知。为理解 CFD 的基本工作原理，此处简要介绍其背后的理论概念。
          </p>
        </div>

        <h3 className="section-header">● Approximation / 近似</h3>

        <div className="bilingual">
          <p lang="en">
            The real world can be viewed as a continuous (analog) system, in which physical quantities vary smoothly in space and time. In fluid dynamics, fluids are typically modeled as continuous media with properties defined at every point in this continuum. Computers, however, operate digitally and can only handle discrete values with finite resolution. As a result, CFD represents the continuous flow field by dividing space and time into small, discrete elements. Despite this discretization, the objective of CFD is to approximate the behavior of the continuous real world as accurately as possible. To achieve this, physical processes that cannot be directly resolved must be modeled and incorporated through appropriate assumptions and approximations. 
            <br />
          </p>
          <p lang="zh">
            现实世界可视为连续（模拟）系统，物理量在空间与时间中平滑变化。在流体动力学中，流体通常被建模为连续介质，其性质在该连续体的每一点上都有定义。然而，计算机以数字方式运行，只能处理分辨率有限的离散值。因此，CFD 通过将空间与时间划分为细小的离散单元来表示连续流场。尽管存在这种离散化，CFD 的目标仍是尽可能准确地近似连续现实世界的行为。为此，无法直接分辨的物理过程必须通过适当的假设与近似加以建模并纳入计算。
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
            <br />
          </p>
          <p lang="zh">
            那么，缺失的信息如何表示？一种做法是用直线连接已知数据点，并假定其间数值呈线性变化。亦可采用高阶模型，用平滑曲线表示点与点之间的变化。这种在保留本质行为的前提下、依据已知数据表示未知值的过程称为近似，所得结果称为近似值。在 CFD 中，这些近似方法通过数值格式实现。
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
            图5-1-2：补全计算机所缺失的数据。
          </p>
        </div>

        <h3 className="section-header">● The Lax Equivalence Theorem / Lax 等价定理</h3>

        <div className="bilingual">
          <p lang="en">
            Since computers cannot represent every point in space and time, CFD results are inherently approximate. However, if the difference from the true value is sufficiently small, it is acceptable in practice. For example, if the average flow velocity is 30 m/s, a difference on the order of 0.000001 m/s is negligible. In the same way, small numerical differences in simulation results are not a concern as long as they remain within an acceptable tolerance. In technical terms, a simulation is considered acceptable when the solution has converged. 
            <br />
            <br />
            An important concept related to this is the Lax Equivalence Theorem, demonstrated by Peter Lax. This theorem states that for a well-posed linear initial value problem, a numerical scheme converges if, and only if, it is both consistent and stable. In other words, the relationship between consistency and stability determines convergence. Refer to Fig. 5-1-4 for the definitions of consistency, stability and convergence.
          </p>
          <p lang="zh">
            由于计算机无法表示空间与时间的每一点，CFD 结果本质上是近似的。然而，若与真值的差异足够小，在实践中便可接受。例如，若平均流速为 30 m/s，0.000001 m/s 量级的差异可忽略不计。同样，只要仿真结果中的微小数值差异处于可接受容差之内，便无需担忧。从技术上说，当解已收敛时，仿真即被视为可接受。
            <br />
            <br />
            与此相关的一个重要概念是 Peter Lax 所证明的 Lax 等价定理。该定理指出：对于适定的线性初值问题，数值格式收敛的充要条件是它既相容又稳定。换言之，相容性与稳定性共同决定收敛性。相容性、稳定性与收敛性的定义见图5-1-4。
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
            Fig. 5-1-4 Conformability and stability. The "true value" referred to here is the solution obtained from an analytical solution of the governing partial differential equations of fluid flow.
          </p>
          <p className="caption" lang="zh">
            图5-1-4：相容性与稳定性。此处所称「真值」，指对流体控制偏微分方程作解析求解所得之解。
          </p>
        </div>

        <div className="bilingual">
          <p lang="en">
            The Lax Equivalence Theorem states that for a well-posed linear initial value problem, a numerical scheme converges if and only if it is both stable and consistent. In other words, when a scheme satisfies these two conditions, the numerical (difference) solution approaches the exact solution of the original differential equation as the grid spacing becomes sufficiently small.
          </p>
          <p lang="zh">
            Lax 等价定理指出：对于适定的线性初值问题，数值格式当且仅当既稳定又相容时才收敛。换言之，当格式满足这两项条件时，随着网格间距充分缩小，数值（差分）解将趋近原微分方程的精确解。
          </p>
        </div>
      </div>
    </div>
  </>
);

export default TheWorldOfCFD;
