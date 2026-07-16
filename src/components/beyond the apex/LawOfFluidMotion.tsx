import i1bT6llHzAKW3SH from "../../assets/images/i1bT6llHzAKW3SH.webp";
import i1NNWLuVS4mA4b from "../../assets/images/i1NNWLuVS4mA4b.webp";
import i136hqvq2ju3C from "../../assets/images/i136hqvq2ju3C.webp";
import i1sPE1s0qTX9UuB from "../../assets/images/i1sPE1s0qTX9UuB.webp";

const LawOfFluidMotion = () => (
  <>
    <div className="manual_detail">
      <div className="content_header">
        <h1>4-2 : Law of Fluid Motion / 流体运动定律</h1>
        <h2>
          The meaning of the equation of fluid motion / 流体运动方程的含义
        </h2>
      </div>
      <div className="body">
        <h3 className="section-header">
          ● Euler Equation—without considering viscosity /
          欧拉方程——不考虑黏性
        </h3>

        <div className="bilingual">
          <p lang="en">
            The first to derive the equation of motion for fluids was Leonhard
            Euler, who also provided the mathematical framework for
            Bernoulli&apos;s Theory. This development was fundamental to the
            advancement of hydrodynamics. The equation of motion he derived is
            known as the Euler Equation and is shown below.
          </p>
          <p lang="zh">
            最早推导流体运动方程的是莱昂哈德·欧拉，他也给出了伯努利定理的数学框架。这一发展对流体力学的进步具有根本意义。他所导出的运动方程称为欧拉方程，如下所示。
          </p>
        </div>

        <p className="image">
          <img alt="" src={i1bT6llHzAKW3SH} />
        </p>

        <div className="bilingual">
          <p lang="en">
            The left-hand side of the equation represents the convective
            (advective) acceleration of the fluid, describing the effect of
            motion within the flow field. The right-hand side represents the
            pressure gradient, which drives the flow. In simple terms, the Euler
            equation states that fluid motion is governed by pressure gradients.
            <br />
            <br />
            A familiar example of a pressure gradient is a meteorological
            pressure distribution chart. During the winter season in Japan,
            cold, dry air flows in from the Eurasian continent because the
            pressure is higher to the west and lower to the east. When the
            isobars (lines of equal pressure) are closely spaced, the pressure
            gradient is steep and winds are strong. When the isobars are widely
            spaced, the gradient is mild and winds are weaker. This intuitive
            understanding of flow is what the Euler Equation expresses in a
            mathematical form.
          </p>
          <p lang="zh">
            方程左侧表示流体的对流（平流）加速度，描述流场中运动的影响。右侧表示驱动流动的压力梯度。简言之，欧拉方程表明：流体运动由压力梯度支配。
            <br />
            <br />
            熟悉的压力梯度例子是气象气压分布图。日本冬季，西高东低的气压使干冷空气从欧亚大陆流入。等压线（等压力线）间距密时，压力梯度陡、风力强；间距疏时，梯度缓、风力弱。欧拉方程正是把这种对流动的直观理解写成数学形式。
          </p>
        </div>

        <p className="image">
          <img alt="" src={i1NNWLuVS4mA4b} />
        </p>
        <div className="bilingual">
          <p className="caption" lang="en">
            Fig. 4-2-1: Pressure gradient.
          </p>
          <p className="caption" lang="zh">
            图4-2-1：压力梯度。
          </p>
        </div>

        <div className="bilingual">
          <p lang="en">
            Leonhard Euler made major contributions to aerodynamics (fluid
            dynamics). One of his most important achievements was formulating
            the fluid behavior described qualitatively by Bernoulli&apos;s
            Theory within a rigorous physical and mathematical framework. In
            particular, the continuity equation and the Euler equation are
            recognized as fundamental results in fluid dynamics. These were
            developed in the mid-18th century and laid the foundation for the
            quantitative analysis of fluid flow.
          </p>
          <p lang="zh">
            莱昂哈德·欧拉对空气动力学（流体动力学）贡献卓著。其最重要成就之一，是把伯努利定理定性描述的流体行为纳入严格的物理与数学框架。尤其是连续性方程与欧拉方程，被公认为流体动力学的基本成果。它们在 18
            世纪中叶建立，为流体流动的定量分析奠定了基础。
          </p>
        </div>

        <h3 className="section-header">
          ● Navier-Stokes Equation—with consideration to viscosity /
          纳维–斯托克斯方程——考虑黏性
        </h3>

        <div className="bilingual">
          <p lang="en">
            The Euler Equation expresses the relationship between fluid motion
            and pressure, but it does not account for viscosity, an important
            property of real fluids. The equation of motion that includes
            viscous effects was developed in the 19th century by Claude-Louis
            Navier and George Gabriel Stokes. This formulation is known as the
            Navier–Stokes Equation and is expressed as follows.
          </p>
          <p lang="zh">
            欧拉方程表达流体运动与压力的关系，但未计入真实流体的重要性质——黏性。包含黏性效应的运动方程由克劳德–路易·纳维与乔治·加布里埃尔·斯托克斯在
            19 世纪建立，称为纳维–斯托克斯方程，表达如下。
          </p>
        </div>

        <p className="image">
          <img alt="" src={i136hqvq2ju3C} />
        </p>

        <div className="bilingual">
          <p lang="en">
            Identical to the Euler Equation, the left-hand side represents the
            convective (advective) acceleration of the fluid. The first term on
            the right-hand side is the pressure term, expressing the pressure
            gradient. The additional term is the viscous (diffusion) term,
            representing the effects of viscosity. In simple terms, the
            Navier–Stokes Equation states that fluid motion is driven by
            pressure gradients, with viscosity influencing the transport of
            momentum. The form of the Navier–Stokes Equation described here
            applies to incompressible flow and does not account for changes in
            density.
          </p>
          <p lang="zh">
            与欧拉方程相同，左侧表示流体的对流（平流）加速度。右侧第一项为压力项，表达压力梯度；额外一项为黏性（扩散）项，表示黏性效应。简言之，纳维–斯托克斯方程表明：流体运动由压力梯度驱动，黏性影响动量输运。此处所述形式适用于不可压缩流动，不考虑密度变化。
          </p>
        </div>

        <div className="bilingual">
          <p lang="en">
            For both the Euler Equation and the Navier–Stokes Equation, general
            analytical solutions are not available except in limited cases.
            These equations can be solved exactly only for specific, simplified
            flows. To analyze general flow fields, numerical methods and
            computer simulations are required. The Navier–Stokes Equation is not
            only central to fluid dynamics but also an important problem in
            mathematics, particularly in the study of nonlinear partial
            differential equations. In 2000, the Clay Mathematics Institute
            announced the Millennium Prize Problems, offering a one million
            dollar prize for each unsolved problem. One of these is the
            Navier–Stokes existence and smoothness problem, which asks whether
            solutions always exist and remain well-behaved under general
            conditions.
          </p>
          <p lang="zh">
            对欧拉方程与纳维–斯托克斯方程而言，除少数情形外，一般解析解并不存在。它们仅能对特定、简化的流动精确求解。要分析一般流场，需要数值方法与计算机仿真。纳维–斯托克斯方程不仅是流体动力学的核心，也是数学中的重要问题，尤其关乎非线性偏微分方程。2000
            年，克莱数学研究所公布千年大奖问题，每道未解问题悬赏百万美元。其中之一便是纳维–斯托克斯方程的存在性与光滑性问题，即在一般条件下解是否总存在且性态良好。
          </p>
        </div>

        <p className="image">
          <img alt="" src={i1sPE1s0qTX9UuB} />
        </p>
        <div className="bilingual">
          <p className="caption" lang="en">
            Computer-generated solution to the Navier-Stokes Equation.
          </p>
          <p className="caption" lang="zh">
            纳维–斯托克斯方程的计算机生成解。
          </p>
        </div>
      </div>
    </div>
  </>
);

export default LawOfFluidMotion;
