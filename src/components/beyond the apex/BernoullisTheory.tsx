import i1yTJfAigsM3Mb from "../../assets/images/i1yTJfAigsM3Mb.webp";
import i1WwyjKz3eux9EE from "../../assets/images/i1WwyjKz3eux9EE.webp";
import i1MRWNEKVeblvuH from "../../assets/images/i1MRWNEKVeblvuH.webp";
import i1vk8yCphjQv from "../../assets/images/i1vk8yCphjQv.webp";
import i1ujqGZ28ibZj from "../../assets/images/i1ujqGZ28ibZj.webp";

const BernoullisTheory = () => (
  <>
    <div className="manual_detail">
      <div className="content_header">
        <h1>4-1 : Bernoulli&apos;s Theory / 伯努利定理</h1>
        <h2>
          Relativity of fluid pressure and speed / 流体压力与速度的相对关系
        </h2>
      </div>
      <div className="body">
        <div className="bilingual">
          <p lang="en">
            How does the air surrounding an automobile affect its performance?
            To answer this question, it is necessary to understand the
            principles of aerodynamics. In this section, we introduce the
            fundamentals of aerodynamics.
          </p>
          <p lang="zh">
            汽车周围的空气如何影响其性能？要回答这一问题，必须理解空气动力学原理。本节介绍空气动力学的基础知识。
          </p>
        </div>

        <h3 className="section-header">
          ● Molecular movement in the presence of flow (current) /
          有流动时分子的运动
        </h3>

        <div className="bilingual">
          <p lang="en">
            In the previous section, we explained that pressure is the same in
            all directions under an equilibrium state. From a macroscopic
            perspective, the countless molecules moving in a random manner
            collide uniformly in all directions. From an energy standpoint, the
            kinetic energy of the molecules is evenly distributed among the
            available directions. This is referred to as the law of
            equipartition of energy (hereafter, equipartition).
            <br />
            <br />
            However, when there is a net flow of molecules, this isotropic
            distribution no longer holds in the same way. More kinetic energy is
            associated with the direction of flow, while less is associated with
            directions perpendicular to it. As a result, pressure measurements
            depend on direction: The pressure in the flow direction is higher,
            while the pressure perpendicular to the flow is lower.
          </p>
          <p lang="zh">
            上一节我们说明，在平衡状态下，压力在各方向上相同。从宏观角度看，无数随机运动的分子在各方向上均匀碰撞。从能量角度看，分子动能在各可用方向上平均分配。这称为能量均分定律（以下简称均分）。
            <br />
            <br />
            然而，当分子存在净流动时，这种各向同性分配不再以同样方式成立。更多动能与流动方向相关，与流动垂直的方向则较少。因此，压力测量取决于方向：流动方向上的压力较高，垂直于流动方向的压力较低。
          </p>
        </div>

        <p className="image">
          <img alt="" src={i1yTJfAigsM3Mb} />
        </p>
        <div className="bilingual">
          <p className="caption" lang="en">
            Fig. 4-1-1: Movement of molecules. When there is a net flow,
            pressure varies with direction: It is highest in the direction of
            flow and lowest in the direction perpendicular to the flow.
          </p>
          <p className="caption" lang="zh">
            图4-1-1：分子的运动。存在净流动时，压力随方向变化：流动方向最高，垂直于流动方向最低。
          </p>
        </div>

        <div className="bilingual">
          <p lang="en">
            It should be noted that the total kinetic energy remains conserved
            when the direction or rate of flow changes. For example, when a flow
            develops from an initial equilibrium state, part of the randomly
            distributed thermal kinetic energy is converted into ordered motion
            associated with the flow. While the distribution of kinetic energy
            changes, the total energy remains the same. In other words, a change
            in flow redistributes kinetic energy between random motion and bulk
            motion, without changing the total amount of energy.
          </p>
          <p lang="zh">
            需要注意的是，流动方向或速率变化时，总动能仍守恒。例如，从初始平衡状态产生流动时，一部分随机分布的热动能转化为与流动相关的有序运动。动能分布虽变，总能量不变。换言之，流动变化只是在随机运动与整体运动之间重新分配动能，并不改变能量总量。
          </p>
        </div>

        <p className="image">
          <img alt="" src={i1WwyjKz3eux9EE} />
        </p>
        <div className="bilingual">
          <p className="caption" lang="en">
            Fig. 4-1-2: Dispersion of molecular kinetic energy.
          </p>
          <p className="caption" lang="zh">
            图4-1-2：分子动能的分配。
          </p>
        </div>

        <h3 className="section-header">
          ● Bernoulli&apos;s Theory / 伯努利定理
        </h3>

        <div className="bilingual">
          <p lang="en">
            Daniel Bernoulli&apos;s principle defines the relationship between
            flow velocity and pressure in a fluid, based on the conservation of
            energy. In an ideal flow, an increase in velocity corresponds to a
            decrease in pressure, and vice versa. It can be expressed
            mathematically as follows, where P is pressure, ρ is fluid density,
            and V is fluid velocity.
          </p>
          <p lang="zh">
            丹尼尔·伯努利原理基于能量守恒，定义了流体中流速与压力的关系。在理想流动中，速度增大对应压力减小，反之亦然。其数学表达如下，其中 P
            为压力，ρ 为流体密度，V 为流速。
          </p>
        </div>

        <p className="image">
          <img alt="" src={i1MRWNEKVeblvuH} />
        </p>

        <div className="bilingual">
          <p lang="en">
            Bernoulli recognized this relationship through the concept of vis
            viva (Latin for &quot;living force&quot;), an early precursor to the
            modern concept of kinetic energy. However, while he understood the
            qualitative relationship between velocity and pressure, he did not
            fully formalize it in its modern mathematical form. It was his
            contemporary Leonhard Euler who later provided the rigorous
            mathematical framework that gave Bernoulli&apos;s Theory its precise
            form.
          </p>
          <p lang="zh">
            伯努利通过「活力」（拉丁语 vis viva，意为「生命力」）这一概念认识到上述关系，它是现代动能概念的早期先驱。然而，尽管他理解速度与压力的定性关系，并未将其完全形式化为现代数学形式。后来，与他同时代的莱昂哈德·欧拉给出了严格的数学框架，使伯努利定理具备精确形式。
          </p>
        </div>

        <p className="image">
          <img alt="" src={i1vk8yCphjQv} />
        </p>
        <div className="bilingual">
          <p className="caption" lang="en">
            Fig. 4-1-3: Example of Bernoulli&apos;s Theory.
          </p>
          <p className="caption" lang="zh">
            图4-1-3：伯努利定理的示例。
          </p>
        </div>

        <h3 className="section-header">
          ● Lift-generating mechanism / 升力产生机制
        </h3>

        <div className="bilingual">
          <p lang="en">
            This section explains the mechanism by which an airfoil generates
            lift using Bernoulli&apos;s principle.
            <br />
            <br />
            Fig. 4-1-4 illustrates the streamlines around an airfoil. A
            streamline is a curve that is tangent to the local velocity vector
            at every point, representing the direction of flow. By definition,
            fluid does not cross streamlines; therefore, the flow between a pair
            of streamlines represents a consistent flow rate. The region
            occupied by the fluid is referred to as the flow field.
          </p>
          <p lang="zh">
            本节用伯努利原理说明翼型产生升力的机制。
            <br />
            <br />
            图4-1-4 绘出翼型周围的流线。流线是处处与当地速度矢量相切的曲线，表示流动方向。按定义，流体不穿越流线；因此，同一对流线之间的流量处处一致。流体所占据的区域称为流场。
          </p>
        </div>

        <p className="image">
          <img alt="" src={i1ujqGZ28ibZj} />
        </p>
        <div className="bilingual">
          <p className="caption" lang="en">
            Fig. 4-1-4: Lift-generating mechanism of an airfoil.
          </p>
          <p className="caption" lang="zh">
            图4-1-4：翼型的升力产生机制。
          </p>
        </div>

        <div className="bilingual">
          <p lang="en">
            Observing the flow field in Fig. 4-1-4, the streamlines ahead of the
            airfoil are evenly spaced, while those above the airfoil become more
            closely spaced. Because the flow does not cross streamlines, this
            indicates that the effective flow passage is reduced above the
            airfoil. Since the flow rate between the same streamlines remains
            constant, the velocity in this region must increase. Thus, the flow
            over the upper surface accelerates. According to Bernoulli&apos;s
            Theory, an increase in flow velocity is accompanied by a decrease in
            pressure. Therefore, the pressure above the airfoil is reduced.
            Conversely, if the flow beneath the airfoil expands, the velocity
            decreases and the pressure increases. This pressure difference
            between the upper and lower surfaces of the airfoil produces lift.
          </p>
          <p lang="zh">
            观察图4-1-4 的流场：翼型前方流线间距均匀，翼型上方流线则更密。由于流动不穿越流线，这表明翼型上方有效流道变窄。同一对流线之间流量不变，该区域速度必然增大。于是上表面流动加速。根据伯努利定理，流速增大伴随压力降低，故翼型上方压力减小。反之，若翼型下方流动扩张，速度降低、压力升高。上下表面的压力差便产生升力。
          </p>
        </div>
      </div>
    </div>
  </>
);

export default BernoullisTheory;
