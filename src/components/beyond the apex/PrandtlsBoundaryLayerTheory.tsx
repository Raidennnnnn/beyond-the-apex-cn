import i1kR2ku84ubXpuH from "../../assets/images/i1kR2ku84ubXpuH.webp";
import i1Jf3bgeiHRU2b from "../../assets/images/i1Jf3bgeiHRU2b.webp";
import i1ETevz8cZfA5Ec from "../../assets/images/i1ETevz8cZfA5Ec.webp";

const PrandtlsBoundaryLayerTheory = () => (
  <>
    <div className="manual_detail">
      <div className="content_header">
        <h1>
          4-5 : Prandtl&apos;s Boundary Layer Theory / 普朗特边界层理论
        </h1>
        <h2>
          Friction only affects the vicinity of an object&apos;s surface /
          摩擦仅作用于物体表面附近
        </h2>
      </div>
      <div className="body">
        <div className="bilingual">
          <p lang="en">
            Although the drag calculations of Gustav Kirchhoff and John William
            Strutt were not successful, they were on the right track. Here, we
            introduce Ludwig Prandtl&apos;s boundary layer theory, which
            ultimately resolved D&apos;Alembert&apos;s Paradox.
          </p>
          <p lang="zh">
            尽管基尔霍夫与斯特拉特的阻力计算并未成功，方向却是正确的。这里介绍最终解决达朗贝尔悖论的路德维希·普朗特边界层理论。
          </p>
        </div>

        <h3 className="section-header">
          ● Prandtl&apos;s Boundary Layer Theory / 普朗特边界层理论
        </h3>

        <div className="bilingual">
          <p lang="en">
            To accurately estimate drag, it is necessary to account for both
            pressure forces and frictional forces. Understanding friction
            requires a clear description of the flow conditions at the surface
            of the object. A key question is how the fluid behaves at the
            surface—whether it adheres to the surface or slips over it.
            <br />
            <br />
            Ludwig Prandtl addressed this problem by introducing the concept of
            the boundary layer. He showed that due to viscosity, the fluid
            velocity at the surface becomes zero (the no-slip condition), and
            that the effects of viscosity are confined to a thin region near the
            surface. Outside this region, the flow can be approximated as
            inviscid. This thin region is known as the boundary layer.
          </p>
          <p lang="zh">
            要准确估计阻力，必须同时计入压力与摩擦力。理解摩擦需要清楚描述物体表面处的流动状态。关键问题是：流体在表面如何表现——附着于表面，还是沿表面滑移。
            <br />
            <br />
            路德维希·普朗特通过引入边界层概念解决了这一问题。他表明，由于黏性，表面处流体速度变为零（无滑移条件），且黏性效应局限于表面附近的薄层。在该区域之外，流动可近似为无黏。这一薄层即称为边界层。
          </p>
        </div>

        <p className="image">
          <img alt="" src={i1kR2ku84ubXpuH} />
        </p>
        <div className="bilingual">
          <p className="caption" lang="en">
            Fig. 4-5-1: Boundary layer velocity distribution of an airfoil
            surface. The range of the boundary layer is defined as less than 99
            percent of the fluid velocity outside the object&apos;s surface
            vicinity.
          </p>
          <p className="caption" lang="zh">
            图4-5-1：翼型表面的边界层速度分布。边界层范围定义为物体表面附近外流速度的
            99% 以内。
          </p>
        </div>

        <div className="bilingual">
          <p lang="en">
            In 1904, Ludwig Prandtl published a short paper titled
            &quot;Flüssigkeitsbewegung bei sehr kleiner Reibung&quot; (Fluid
            Flow at Very Low Friction), in which he introduced the concept of
            the boundary layer. He applied the Navier–Stokes Equation
            specifically within this thin viscous region near a surface, leading
            to the development of the boundary layer equations—a simplified form
            of the Navier–Stokes Equations. These equations are far more
            tractable and enabled more accurate and practical estimation of
            drag.
            <br />
            <br />
            Boundary layer theory also made it possible to predict the point of
            flow separation (detachment). With these insights, D&apos;Alembert&apos;s
            Theory was effectively resolved by accounting for viscous effects
            near surfaces. Prandtl&apos;s 1904 paper greatly expanded the scope
            of fluid mechanics and is now regarded as one of the most important
            contributions in the field.
          </p>
          <p lang="zh">
            1904
            年，普朗特发表短文《Flüssigkeitsbewegung bei sehr kleiner
            Reibung》（极小摩擦下的流体流动），提出边界层概念。他将纳维–斯托克斯方程专门应用于表面附近这一薄黏性区，从而发展出边界层方程——纳维–斯托克斯方程的简化形式。这些方程远更易处理，使阻力估计更准确、更实用。
            <br />
            <br />
            边界层理论还使预测流动分离（脱离）点成为可能。有了这些认识，通过计入表面附近的黏性效应，达朗贝尔悖论得到有效解决。普朗特 1904
            年的论文极大地拓展了流体力学的范围，现被视为该领域最重要的贡献之一。
          </p>
        </div>

        <p className="image">
          <img alt="" src={i1Jf3bgeiHRU2b} />
        </p>
        <div className="bilingual">
          <p className="caption" lang="en">
            Fig. 4-5-2: Point of exfoliation on an airfoil and velocity
            distribution in the boundary layer.
          </p>
          <p className="caption" lang="zh">
            图4-5-2：翼型上的分离点与边界层内的速度分布。
          </p>
        </div>

        <p className="image">
          <img alt="" src={i1ETevz8cZfA5Ec} />
        </p>
        <div className="bilingual">
          <p className="caption" lang="en">
            Fig. 4-5-3: A vehicle operating on land is strongly influenced by
            the ground in terms of aerodynamics. In real outdoor conditions, the
            air relative to the moving vehicle results in minimal boundary layer
            development on the ground beneath it. However, in a wind tunnel,
            boundary layers form along the tunnel floor. Within this boundary
            layer, the flow velocity is reduced, effectively restricting the
            airflow beneath the vehicle. This creates a flow field that differs
            significantly from real-world conditions. For race cars, which are
            designed to generate downforce through airflow between the vehicle
            floor and the ground, this discrepancy becomes a critical issue. To
            address this, wind tunnels employ a moving belt system to simulate
            the relative motion of the road surface. The moving belt not only
            replicates the rotation of the tires but also reduces the boundary
            layer effect on the tunnel floor, allowing for a more accurate
            representation of real driving conditions.
          </p>
          <p className="caption" lang="zh">
            图4-5-3：陆地行驶的车辆在空气动力学上受地面强烈影响。真实户外条件下，相对运动车辆的空气在其下方地面上几乎不形成边界层。然而在风洞中，隧道底板会形成边界层；层内流速降低，实际上限制了车底气流，造成与真实条件显著不同的流场。对依赖车底与地面间气流产生下压力的赛车而言，这一差异至关重要。为此，风洞采用移动带系统模拟路面相对运动。移动带不仅复现轮胎旋转，还减弱隧道底板边界层效应，从而更准确地再现真实行驶条件。
          </p>
        </div>

        <div className="bilingual">
          <p lang="en">
            Originally, Ludwig Prandtl used two terms to describe his concept:
            &quot;boundary layer&quot; and &quot;transition layer.&quot; In
            fact, he often used the latter more frequently. However, his
            students and later researchers adopted the term &quot;boundary
            layer,&quot; and it is this phrase that has remained in common use.
          </p>
          <p lang="zh">
            最初，普朗特用两个词描述其概念：「边界层」与「过渡层」。事实上他更常使用后者。然而其学生与后来研究者采用了「边界层」一词，这一用语沿用至今。
          </p>
        </div>

        <div className="bilingual">
          <p lang="en">
            Ludwig Prandtl&apos;s contribution to fluid mechanics cannot be
            overstated. In addition to boundary layer theory, he introduced
            lifting-line theory, the mixing-length hypothesis and the theory of
            supersonic shock waves, all of which became foundational principles
            of modern fluid dynamics. Prandtl&apos;s influence also extended
            through his students, including Paul Richard Heinrich Blasius,
            Theodore von Kármán and Max Munk, each of whom became highly
            influential figures in the field.
          </p>
          <p lang="zh">
            普朗特对流体力学的贡献怎么强调都不为过。除边界层理论外，他还提出升力线理论、混合长度假说与超声速激波理论，均成为现代流体动力学的基础原理。其影响也通过学生延续，包括保罗·理查德·海因里希·布拉修斯、西奥多·冯·卡门与马克斯·蒙克等，各自成为该领域极具影响的人物。
          </p>
        </div>
      </div>
    </div>
  </>
);

export default PrandtlsBoundaryLayerTheory;
