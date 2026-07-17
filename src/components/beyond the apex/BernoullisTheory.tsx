import i1yTJfAigsM3Mb from "../../assets/images/i1yTJfAigsM3Mb.webp";
import i1WwyjKz3eux9EE from "../../assets/images/i1WwyjKz3eux9EE.webp";
import i1MRWNEKVeblvuH from "../../assets/images/i1MRWNEKVeblvuH.webp";
import i1vk8yCphjQv from "../../assets/images/i1vk8yCphjQv.webp";
import i1ujqGZ28ibZj from "../../assets/images/i1ujqGZ28ibZj.webp";

const BernoullisTheory = () => (
  <>
    <div className="manual_detail">
      <div className="content_header">
        <h1 className="bilingual-title"><span lang="en">4-1 : Bernoulli&apos;s Theory</span><span className="bilingual-sep"> / </span><span lang="zh">伯努利定理</span></h1>
        <h2 className="bilingual-title"><span lang="en">Relativity of fluid pressure and speed</span><span className="bilingual-sep"> / </span><span lang="zh">流体压力与速度的相对关系</span></h2>
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
            汽车的空气动力学特性对油耗、加速性能与行驶稳定性等影响很大。尤其在赛车上，空力对整车运动性能的贡献比例高，往往左右胜负，因此不仅专家、赛车爱好者之间也会热议。下面开始解说汽车空气力学。
          </p>
        </div>

        <h3 className="section-header bilingual-title"><span lang="en">● Molecular movement in the presence of flow (current)</span><span className="bilingual-sep"> / </span><span lang="zh">有流动时分子的运动</span></h3>

        <div className="bilingual">
          <p lang="en">
            In the previous section, we explained that pressure is the same in
            all directions under an equilibrium state. From a macroscopic
            perspective, the countless molecules moving in a random manner
            collide uniformly in all directions. From an energy standpoint, the
            kinetic energy of the molecules is evenly distributed among the
            available directions. This is referred to as the law of
            equipartition of energy (hereafter, equipartition).
          </p>
          <p lang="zh">
            前项 3-1 说明：平衡状态下，压力无论从哪个方向测量都相同。无数无序运动的分子，从宏观看其碰撞力在各方向均匀分配；从能量框架看，就是各方向分子动能等量分配——称为能量均分定律。
          </p>
        </div>

        <div className="bilingual">
          <p lang="en">
            However, when there is a net flow of molecules, this isotropic
            distribution no longer holds in the same way. More kinetic energy is
            associated with the direction of flow, while less is associated with
            directions perpendicular to it. As a result, pressure measurements
            depend on direction: The pressure in the flow direction is higher,
            while the pressure perpendicular to the flow is lower.
          </p>
          <p lang="zh">
            但有流动时，能量均分定律不再成立：分子动能更多地分配给流动方向，其他方向则相应减少。在流动中测压时，沿流动方向最高，垂直于流动方向最低。
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
            图4-1-1：分子的运动。分子运动存在流动时，流动方向压力最高，垂直于流动方向最低。
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
            须注意：流动变化前后，分子动能总和不变。例如从某一平衡状态产生流动时，平衡状态与流动中的分子总动能大小相同。
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

        <h3 className="section-header bilingual-title"><span lang="en">● Bernoulli&apos;s Theory</span><span className="bilingual-sep"> / </span><span lang="zh">伯努利定理</span></h3>

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
            流速变化使分子能量分配改变时，流速与压力关系如何——丹尼尔·伯努利给出的伯努利定理正说明这一点。其数学表达如下。
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
            其中 P 为压力，ρ 为流体密度，V 为流速。伯努利从「活力」这一通向现今能量概念的想法意识到流速与压力的关系，但据说他本人并未准确理解压力与速度的关系。为伯努利定理给出正确数学表达的，是他青梅竹马、挚友莱昂哈德·欧拉。
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

        <h3 className="section-header bilingual-title"><span lang="en">● Lift-generating mechanism</span><span className="bilingual-sep"> / </span><span lang="zh">升力产生机制</span></h3>

        <div className="bilingual">
          <p lang="en">
            This section explains the mechanism by which an airfoil generates
            lift using Bernoulli&apos;s principle.
          </p>
          <p lang="zh">
            这里用伯努利定理说明翼型产生升力的机制。
          </p>
        </div>

        <div className="bilingual">
          <p lang="en">
            Fig. 4-1-4 illustrates the streamlines around an airfoil. A
            streamline is a curve that is tangent to the local velocity vector
            at every point, representing the direction of flow. By definition,
            fluid does not cross streamlines; therefore, the flow between a pair
            of streamlines represents a consistent flow rate. The region
            occupied by the fluid is referred to as the flow field.
          </p>
          <p lang="zh">
            图4-1-4 以流线绘出翼型周围流场。流线是以流体速度矢量为切线的曲线，亦即流动的路径。由定义可知流动不穿越流线；因此被同一对流线夹住的区域流量处处相同。流体存在的场称为流场。
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
            在图4-1-4 的流场中，翼型前方流线等间隔，上面流线间距变窄。流动不穿越流线，故上面可视为流道被收窄；同一对流线夹住的流量又不变，因此上面流速必须加快。于是由伯努利定理，上面压力按流速平方成比例降低。反之，若下面流线间距变宽，流速下降、压力上升。这样产生的上下压力差，就是升力的本质。
          </p>
        </div>
      </div>
    </div>
  </>
);

export default BernoullisTheory;
