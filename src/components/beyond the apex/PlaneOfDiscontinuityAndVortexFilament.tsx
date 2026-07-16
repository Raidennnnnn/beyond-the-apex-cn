import i1tlEkFW2SA1L from "../../assets/images/i1tlEkFW2SA1L.webp";
import i1kkmWFpm5WplhH from "../../assets/images/i1kkmWFpm5WplhH.webp";
import i1d3svmSexzVS from "../../assets/images/i1d3svmSexzVS.webp";
import i1vq93qGLgFmvEE from "../../assets/images/i1vq93qGLgFmvEE.webp";
import i1Ujg3qaQujjiG from "../../assets/images/i1Ujg3qaQujjiG.webp";

const PlaneOfDiscontinuityAndVortexFilament = () => (
  <>
    <div className="manual_detail">
      <div className="content_header">
        <h1>
          4-3 : Plane of Discontinuity and Vortex Filament / 不连续面与涡丝
        </h1>
        <h2>
          Avoidance strategy of equation of fluid motion /
          绕开流体运动方程的策略
        </h2>
      </div>
      <div className="body">
        <div className="bilingual">
          <p lang="en">
            Although the Euler Equation and the Navier–Stokes Equation correctly
            describe fluid motion, their mathematical complexity makes direct
            analytical solutions impractical for most real flows. As a result,
            alternative approaches were developed to analyze fluid behavior
            without relying on exact solutions of these equations.
          </p>
          <p lang="zh">
            尽管欧拉方程与纳维–斯托克斯方程正确描述流体运动，其数学复杂性使直接解析求解对多数真实流动不切实际。因此，人们发展了不依赖这些方程精确解的替代方法来分析流体行为。
          </p>
        </div>

        <h3 className="section-header">
          ● D&apos;Alembert&apos;s Paradox / 达朗贝尔悖论
        </h3>

        <div className="bilingual">
          <p lang="en">
            Jean le Rond d&apos;Alembert, who was acquainted with both Daniel
            Bernoulli and Leonhard Euler, attempted to determine the theoretical
            drag on a circular cylinder placed in a two-dimensional uniform
            flow. However, the result he obtained was zero, even though in
            reality drag is never zero. There were no errors in his
            calculations, and others who repeated the analysis arrived at the
            same result. This contradiction became known as D&apos;Alembert&apos;s
            Paradox.
            <br />
            <br />
            With modern understanding, it is clear that his result was
            consistent with the assumptions used. Because viscosity was not
            considered, the flow around the cylinder is perfectly symmetric
            under steady, inviscid conditions. As a result, the pressure
            distribution in front of and behind the cylinder is also symmetric,
            and the forces cancel, yielding zero drag.
            <br />
            <br />
            At the time, the effects of viscosity were not yet fully understood.
            The paradox was resolved in 1904 by Ludwig Prandtl through the
            introduction of the boundary layer concept, which showed how viscous
            effects near the surface lead to flow separation and the generation
            of drag.
          </p>
          <p lang="zh">
            与丹尼尔·伯努利和莱昂哈德·欧拉都相识的让·勒朗·达朗贝尔，试图求出置于二维均匀流中的圆柱的理论阻力。然而他得到的结果为零，尽管现实中阻力绝不为零。其计算并无错误，他人重复分析也得到相同结果。这一矛盾被称为达朗贝尔悖论。
            <br />
            <br />
            以现代理解看，该结果与所用假设一致。因未计入黏性，在定常、无黏条件下圆柱周围流动完全对称。于是前后压力分布亦对称，力相互抵消，阻力为零。
            <br />
            <br />
            当时黏性效应尚未被充分理解。1904 年，路德维希·普朗特通过引入边界层概念解决了该悖论，说明表面附近的黏性效应如何导致流动分离并产生阻力。
          </p>
        </div>

        <p className="image">
          <img alt="" src={i1tlEkFW2SA1L} />
        </p>
        <div className="bilingual">
          <p className="caption" lang="en">
            Fig. 4-3-1: D&apos;Alembert&apos;s Paradox.
          </p>
          <p className="caption" lang="zh">
            图4-3-1：达朗贝尔悖论。
          </p>
        </div>

        <div className="bilingual">
          <p lang="en">
            The concepts of vortex filaments and discontinuity surfaces led to
            the development of several key theories of lift, including
            circulation theory, boundary layer theory and lifting-line theory,
            all of which will be discussed in the sections that follow. In
            hydrodynamics, a vortex differs from the common image of a simple
            spiral. A vortex is defined as a rotational motion of the fluid,
            characterized by local rotation (vorticity), and does not
            necessarily correspond to a visible spiral form.
          </p>
          <p lang="zh">
            涡丝与不连续面的概念催生了若干关键升力理论，包括环量理论、边界层理论与升力线理论，将在后续各节讨论。在流体力学中，「涡」不同于常见的简单螺旋形象。涡被定义为流体的旋转运动，以局部旋转（涡量）为特征，并不一定对应可见的螺旋形态。
          </p>
        </div>

        <h3 className="section-header">
          ● The concept of vortex filament and the plane of discontinuity /
          涡丝与不连续面的概念
        </h3>

        <div className="bilingual">
          <p lang="en">
            Hermann von Helmholtz was one of the first to place the study of
            fluid motion on a rigorous mathematical foundation. By developing
            the theory of vortices, he provided a deeper understanding of flow
            behavior and established principles that would influence later
            developments in fluid dynamics.
          </p>
          <p lang="zh">
            赫尔曼·冯·亥姆霍兹是最早将流体运动研究置于严格数学基础之上的人之一。通过发展涡理论，他加深了对流动行为的理解，并确立了影响后来流体动力学发展的原则。
          </p>
        </div>

        <p className="image">
          <img alt="" src={i1kkmWFpm5WplhH} />
        </p>
        <div className="bilingual">
          <p className="caption" lang="en">
            Fig. 4-3-2: Concept of vortex filament and vortex layer. To
            illustrate the concept, vortex filaments are often drawn with a
            finite size; however, their cross-sectional area is, in theory,
            infinitesimal.
          </p>
          <p className="caption" lang="zh">
            图4-3-2：涡丝与涡层的概念。为便于示意，涡丝常画成有限尺寸；但理论上其截面积为无穷小。
          </p>
        </div>

        <div className="bilingual">
          <p lang="en">
            Consider a fluid element flowing from left to right, as shown in
            Fig. 4-3-2. When the surface of the fluid element is subjected to
            shear stress (a force that causes deformation; see 2-1), a velocity
            difference develops across the element. As a result, the fluid
            element begins to rotate, generating vorticity. If this rotational
            motion is viewed in cross-section, it can be represented as
            infinitesimal filament-like structures. These are referred to as
            vortex filaments. A collection of such vortex filaments forms what
            is known as a vortex layer (or vortex sheet).
          </p>
          <p lang="zh">
            如图4-3-2 所示，考虑从左向右流动的流体微元。当微元表面受到剪切应力（导致变形的力；见
            2-1）时，微元两侧出现速度差。于是微元开始旋转，产生涡量。若从截面观察这种旋转运动，可表示为无穷小的丝状结构，称为涡丝。许多涡丝的集合称为涡层（或涡片）。
          </p>
        </div>

        <p className="image">
          <img alt="" src={i1d3svmSexzVS} />
        </p>
        <div className="bilingual">
          <p className="caption" lang="en">
            Fig. 4-3-3: Difference in force from high and low velocities on a
            discontinuous surface.
          </p>
          <p className="caption" lang="zh">
            图4-3-3：不连续面上高、低速侧的力差。
          </p>
        </div>

        <div className="bilingual">
          <p lang="en">
            By introducing the concept of vortex filaments, as illustrated in
            Fig. 4-3-3, flows with sharp velocity changes can be treated
            mathematically. These include discontinuity surfaces that arise when
            streams of different velocities meet, as well as boundary layers
            where fluid velocity changes rapidly near a surface. Such flows can
            be interpreted as being composed of the rotational motion of
            infinitesimal fluid elements, allowing them to be analyzed using the
            same mathematical framework developed for vortices.
            <br />
            <br />
            When Hermann von Helmholtz introduced the concepts of vortex
            filaments and vortex layers, it opened the possibility of resolving
            D&apos;Alembert&apos;s Paradox. Following this, Gustav Kirchhoff and
            John William Strutt attempted to calculate the drag on a flat plate.
            According to D&apos;Alembert&apos;s Paradox, the drag force on a body
            in inviscid, symmetric flow is zero. However, Kirchhoff and Rayleigh
            introduced the idea of a discontinuity surface (or wake) forming
            behind the plate. In this region, the flow velocity differs from
            that of the surrounding fluid, breaking the symmetry assumed in
            inviscid flow and allowing for a nonzero drag force. Their approach,
            however, did not produce accurate results, as the pressure
            distribution in the wake region was not correctly modeled.
            Nevertheless, their work represented an important step forward, as
            it moved away from ideal symmetric flow assumptions and toward a
            more realistic understanding of drag.
          </p>
          <p lang="zh">
            如图4-3-3
            所示，引入涡丝概念后，速度急剧变化的流动便可用数学处理。这包括不同速度气流相遇形成的不连续面，以及表面附近流速迅速变化的边界层。此类流动可理解为由无穷小流体微元的旋转运动组成，因而可用为涡所建立的同一数学框架来分析。
            <br />
            <br />
            亥姆霍兹提出涡丝与涡层概念后，解决达朗贝尔悖论成为可能。随后，古斯塔夫·基尔霍夫与约翰·威廉·斯特拉特（瑞利）试图计算平板阻力。按达朗贝尔悖论，无黏对称流动中物体阻力为零。但基尔霍夫与瑞利引入了板后形成不连续面（或尾迹）的想法。该区域内流速与周围流体不同，打破无黏流动所假定的对称性，从而允许非零阻力。然而，由于尾迹区压力分布未能正确建模，他们的方法并未给出准确结果。尽管如此，这项工作仍是重要一步：它离开了理想对称流动假定，迈向对阻力更现实的理解。
          </p>
        </div>

        <p className="image">
          <img alt="" src={i1vq93qGLgFmvEE} />
        </p>
        <div className="bilingual">
          <p className="caption" lang="en">
            Fig. 4-3-4: Applying the vortex filament (vortex layer) concept to
            the flow velocity of the discontinuous surface.
          </p>
          <p className="caption" lang="zh">
            图4-3-4：将涡丝（涡层）概念应用于不连续面的流速。
          </p>
        </div>

        <p className="image">
          <img alt="" src={i1Ujg3qaQujjiG} />
        </p>
        <div className="bilingual">
          <p className="caption" lang="en">
            Fig. 4-3-5: Conceptual diagram of a flow field around a flat plane
            (surface). If the discontinuous planes of the front and back edges
            of a flat plane could be assumed to exist, then D&apos;Alembert&apos;s
            Paradox would not come into play.
          </p>
          <p className="caption" lang="zh">
            图4-3-5：平板（表面）周围流场的概念图。若可假定平板前、后缘存在不连续面，则达朗贝尔悖论便不会成立。
          </p>
        </div>
      </div>
    </div>
  </>
);

export default PlaneOfDiscontinuityAndVortexFilament;
