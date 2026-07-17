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
            最早导出流体运动方程的，是正确定式化伯努利定理的欧拉。这对流体力学进步的意义远大于伯努利定理本身——因为解出运动方程就能算出流场。欧拉导出的流体运动方程称为欧拉方程，如下式。
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
          </p>
          <p lang="zh">
            左侧表达液体流动（加速）的效应；右侧称为压力项，表达压力梯度。概括地说，欧拉方程陈述的是：「流体运动由压力梯度支配」。
          </p>
        </div>

        <div className="bilingual">
          <p lang="en">
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
            压力梯度与当场流动流体的关系，好比斜面与在其上滚动的球：斜面相当于压力梯度，球相当于流体。斜面陡处球加速，斜面反向则减速；同样，液体在压力梯度陡处加速，在逆压力梯度处减速。欧拉方程不过是把人人都能直觉理解的流体性质写成数学；看似复杂的流动，其实也受它所揭示的简单法则支配。
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
            图4-2-1：压力梯度与流体的关系，类似斜面与球的关系。
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
            欧拉对空气力学（流体力学）贡献巨大。其重大功绩是把此前已知的流体性质（如伯努利定理）按物理原理正确定式化；尤其导出「连续性方程」与「欧拉方程」，是他在流体力学上最出色的业绩。他在 1753
            年论文中发表了这两式，由此打开了流体力学诸问题定量分析之路。
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
            欧拉方程为流体速度与压力关系给出了数学表达，但不含真实流体的黏性效应。计入黏性的运动方程由路易·纳维与乔治·斯托克斯在
            19 世纪中叶导出，称为纳维–斯托克斯方程，如下式。
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
            与欧拉方程相同，左侧是液体流动（加速）效应；右侧第一项为压力项，表达压力梯度；新加入的第二项称为黏性项或扩散项，表达黏性特性。概括地说：流体运动大体由压力梯度支配，但黏性也会影响运动。上式是不考虑密度变化的不可压缩纳维–斯托克斯方程。
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
            欧拉方程与纳维–斯托克斯方程至今都未发现一般解，因而只能直接适用于非常特殊、有限的流动。要从这些方程了解一般流场，目前只能用计算机数值求解。顺便一提，纳维–斯托克斯方程不仅是流体力学核心，也是非线性偏微分方程的典型数学问题。2000
            年美国克莱数学研究所为 7
            个未解数学问题各悬赏百万美元，称为千年大奖问题；其中之一便是证明纳维–斯托克斯方程解的存在与光滑性。
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
            用计算机求解的纳维–斯托克斯方程。
          </p>
        </div>
      </div>
    </div>
  </>
);

export default LawOfFluidMotion;
