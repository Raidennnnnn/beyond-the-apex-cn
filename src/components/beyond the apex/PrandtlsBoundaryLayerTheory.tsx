import i1kR2ku84ubXpuH from "../../assets/images/i1kR2ku84ubXpuH.webp";
import i1Jf3bgeiHRU2b from "../../assets/images/i1Jf3bgeiHRU2b.webp";
import i1ETevz8cZfA5Ec from "../../assets/images/i1ETevz8cZfA5Ec.webp";

const PrandtlsBoundaryLayerTheory = () => (
  <>
    <div className="manual_detail">
      <div className="content_header">
        <h1 className="bilingual-title"><span lang="en">4-5 : Prandtl&apos;s Boundary Layer Theory</span><span className="bilingual-sep"> / </span><span lang="zh">普朗特边界层理论</span></h1>
        <h2 className="bilingual-title"><span lang="en">Friction only affects the vicinity of an object&apos;s surface</span><span className="bilingual-sep"> / </span><span lang="zh">摩擦仅作用于物体表面附近</span></h2>
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
            基尔霍夫与瑞利的阻力计算虽告失败，却已确实接近成功。这里介绍最终解决达朗贝尔悖论的普朗特边界层理论。
          </p>
        </div>

        <h3 className="section-header bilingual-title"><span lang="en">● Prandtl&apos;s Boundary Layer Theory</span><span className="bilingual-sep"> / </span><span lang="zh">普朗特边界层理论</span></h3>

        <div className="bilingual">
          <p lang="en">
            To accurately estimate drag, it is necessary to account for both
            pressure forces and frictional forces. Understanding friction
            requires a clear description of the flow conditions at the surface
            of the object. A key question is how the fluid behaves at the
            surface—whether it adheres to the surface or slips over it.
          </p>
          <p lang="zh">
            要估算阻力，压力之外如何处理摩擦力也很重要；要处理摩擦，须知道物体表面流动如何。然而进入
            20 世纪后仍属谜团的是：表面流速是否为 0、流体是否完全粘着，抑或带着一定速度在表面滑移——这些正是算出摩擦力所必须弄清的。
          </p>
        </div>

        <div className="bilingual">
          <p lang="en">
            Ludwig Prandtl addressed this problem by introducing the concept of
            the boundary layer. He showed that due to viscosity, the fluid
            velocity at the surface becomes zero (the no-slip condition), and
            that the effects of viscosity are confined to a thin region near the
            surface. Outside this region, the flow can be approximated as
            inviscid. This thin region is known as the boundary layer.
          </p>
          <p lang="zh">
            首次引入边界层概念并给出答案的，是路德维希·普朗特。他表明：因黏性影响，物体表面流速为
            0；摩擦影响仅及表面近旁，其外部流动基本不受黏性影响，可作非黏性流体处理。这一受黏性影响的表面近旁区域，现称为边界层。
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
            图4-5-1：翼型表面边界层的速度分布。边界层范围定义为物体表面近旁外部流速的
            99% 以下区域。
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
          </p>
          <p lang="zh">
            普朗特于 1904 年在题为「关于黏性极低流体的运动」的仅 8
            页论文中首次发表边界层概念。他把纳维–斯托克斯方程只应用于边界层这一特殊流动，导出作为其简化形式的边界层方程——远比完整纳维–斯托克斯方程易处理，使理论上、有时精度也较好的阻力计算成为可能。此外，其边界层理论也在一定程度上使流动分离位置可以预测。
          </p>
        </div>

        <div className="bilingual">
          <p lang="en">
            Boundary layer theory also made it possible to predict the point of
            flow separation (detachment). With these insights, D&apos;Alembert&apos;s
            Theory was effectively resolved by accounting for viscous effects
            near surfaces. Prandtl&apos;s 1904 paper greatly expanded the scope
            of fluid mechanics and is now regarded as one of the most important
            contributions in the field.
          </p>
          <p lang="zh">
            这样，达朗贝尔悖论便由普朗特边界层理论彻底解决。普朗特 1904
            年论文如此为流体力学带来新局面，被视为流体力学史上最重要的论文之一。
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
            图4-5-2：翼型的分离与分离点处边界层的速度分布。
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
            图4-5-3：在地面上行驶的交通工具，地面对其空力影响很大。实车行驶时地面近旁不会产生边界层，但风洞实验中风洞壁上会形成边界层；边界层是流速较慢的区域，在车底实质上会阻塞流道，造成与实车周围不同的流场。对靠车体与地面之间产生下压力的赛车而言，这是很大的问题，因此风洞需要模拟地面的移动带。移动带不仅为复现轮胎旋转，也是为防止风洞壁上产生边界层。
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
            边界层指物体近旁强烈受黏性影响的层；普朗特原本对其使用「边界层」与「过渡层」两个用语，本人更常使用后者，但学生们常用「边界层」，如今只留下「边界层」这一术语。
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
            普朗特对流体力学发展的贡献难以估量。除边界层理论外，他还陆续导出升力线理论、湍流混合长度假说、超声速激波理论等构成现今流体力学骨架的重要理论。在他门下还涌现出布拉修斯、卡门、贝茨、蒙克等在流体力学史上留名的优秀学者。
          </p>
        </div>
      </div>
    </div>
  </>
);

export default PrandtlsBoundaryLayerTheory;
