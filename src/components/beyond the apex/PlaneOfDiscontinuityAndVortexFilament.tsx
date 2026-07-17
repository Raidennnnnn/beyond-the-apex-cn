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
            欧拉方程与纳维–斯托克斯方程虽准确表达流体运动，但因数学难度，对实际流动几乎无法直接应用，局面陷入僵局。于是出现了不依赖这些方程、另寻路径解析流动的动向。这里介绍达朗贝尔悖论与克服它的尝试。
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
          </p>
          <p lang="zh">
            与伯努利、欧拉有交流的达朗贝尔，求出了置于二维定常流中圆柱的阻力（与流速平行、方向相反的力）理论解，结果却是阻力为
            0。实际流动中阻力绝不会为 0；但他的计算本身找不到错误，谁重算多少次结果仍是阻力为
            0。此后约 160 年间，这成为流体力学上的重大问题，称为达朗贝尔悖论。
          </p>
        </div>

        <div className="bilingual">
          <p lang="en">
            With modern understanding, it is clear that his result was
            consistent with the assumptions used. Because viscosity was not
            considered, the flow around the cylinder is perfectly symmetric
            under steady, inviscid conditions. As a result, the pressure
            distribution in front of and behind the cylinder is also symmetric,
            and the forces cancel, yielding zero drag.
          </p>
          <p lang="zh">
            以现代知识看，他的计算本身并无错误，而是未计入黏性所必然得到的结果。不考虑黏性的定常流动中，圆柱前后流动对称，压力也前后对称，彼此抵消，阻力便为
            0。
          </p>
        </div>

        <div className="bilingual">
          <p lang="en">
            At the time, the effects of viscosity were not yet fully understood.
            The paradox was resolved in 1904 by Ludwig Prandtl through the
            introduction of the boundary layer concept, which showed how viscous
            effects near the surface lead to flow separation and the generation
            of drag.
          </p>
          <p lang="zh">
            当时尚无纳维–斯托克斯方程，黏性效应的处理方法也还不甚明了。达朗贝尔悖论彻底消解，是在
            1904 年普朗特提出边界层概念之时（4-5 将进一步详述）。
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
            涡丝与不连续面的概念，此后将发展为升力环量理论、边界层理论、升力线理论。另须说明：流体力学中定义的「涡」，与一般人想象的漩涡不同——它指流体的刚体式旋转运动，是一种「运动形态」。
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
            不直接求解流体运动方程、却为数学处理流体运动开辟道路的，首先是德国的赫尔曼·亥姆霍兹。他发展涡的概念，提出了新的流动概念。
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
            图4-3-2：涡丝、涡层的概念。为便于说明，图中涡丝画成仿佛有大小，但实际涡丝截面积为无穷小。
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
            如图4-3-2，考虑从左向右流动的微小流体微元。一般若微元表面受剪切应力（使物体受剪切的力；见
            2-1），各面移动速度就会不同，微元因而趋于旋转成为涡。这样形成的截面积无穷小的概念性涡丝称为涡丝，涡丝连成的幕称为涡层。
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
            图4-3-3：上下流速不同的不连续面上产生的力。
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
          </p>
          <p lang="zh">
            引入涡丝概念后，如图4-3-3，速度不同的流动合流时形成的速度不连续面（连续值突然变化的面），以及物体附近流速剧烈变化的区域（边界层），便可作数学处理——这些流动可视为由微小流体微元的旋转构成，因而可与已有数学表达的涡同样对待。
          </p>
        </div>

        <div className="bilingual">
          <p lang="en">
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
            亥姆霍兹引入涡丝、涡层概念后，困扰一个世纪的达朗贝尔悖论忽然有了解决希望。不连续面概念发表后不久，基尔霍夫与瑞利便用它尝试计算平板阻力。按达朗贝尔悖论平板阻力应为
            0；但若假定从前、后缘伸出不连续面，则可把平板背面视为低流速区，悖论事实上便不存在。结果他们把板后压力估得过高，抗力计算失败，但努力方向无疑是正确的。
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
            图4-3-4：将涡丝（涡层）应用于流速不连续面。
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
            图4-3-5：平板周围流场概念图。若假定从前、后缘伸出不连续面，则背面可视为低流速区，达朗贝尔悖论事实上便不存在。
          </p>
        </div>
      </div>
    </div>
  </>
);

export default PlaneOfDiscontinuityAndVortexFilament;
