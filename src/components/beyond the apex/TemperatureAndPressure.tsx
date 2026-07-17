import i1OQB5sYY29G6b from "../../assets/images/i1OQB5sYY29G6b.webp";
import i1kCFcgNNhPQ18c from "../../assets/images/i1kCFcgNNhPQ18c.webp";
import i1s1Tz3PyNwGvW from "../../assets/images/i1s1Tz3PyNwGvW.webp";
import i1ppFCGaA1kesdH from "../../assets/images/i1ppFCGaA1kesdH.webp";

const TemperatureAndPressure = () => (
  <>
    <div className="manual_detail">
      <div className="content_header">
        <h1>3-1 : Temperature and Pressure / 温度与压力</h1>
        <h2>
          Molecular motion causes temperature and pressure /
          温度与压力的本质是分子运动
        </h2>
      </div>
      <div className="body">
        <div className="bilingual">
          <p lang="en">
            Today, it is understood that heat, temperature and pressure arise
            from molecular motion. This understanding was developed in the 19th
            century and became widely accepted in the 20th century. To properly
            understand efficiency and energy loss in engines and aerodynamics
            (or fluid dynamics), which will be discussed later, it is useful to
            first examine molecular motion in relation to temperature and
            pressure.
          </p>
          <p lang="zh">
            如今人们已普遍认识到，热、温度与压力都源自分子运动。这一认识在
            19
            世纪逐渐成形，并在
            20
            世纪获得广泛承认。要正确理解稍后将讨论的发动机效率与能量损失，以及空气力学（流体力学），宜先从温度与压力出发，弄清分子运动的含义。
          </p>
        </div>

        <h3 className="section-header">
          ● Erratic molecular activity in an enclosed space /
          密闭空间中无序运动的分子
        </h3>

        <div className="bilingual">
          <p lang="en">
            Let us visualize a gas enclosed in a sealed container. From a
            macroscopic point of view, the temperature and pressure may appear
            stable. This condition is referred to as an equilibrium state.
            However, from a microscopic perspective, countless gas molecules are
            in constant, random motion within the container. Some molecules move
            slowly, while others move at much higher speeds. These molecules
            continuously collide with one another and with the walls of the
            container, changing their velocities as they move.
          </p>
          <p lang="zh">
            设想将气体封闭在密封容器中。从宏观角度看，温度与压力似乎均匀稳定——这种状态称为平衡状态。但从能观测分子运动的微观视角看，容器内有无数气体分子在无序地飞舞：有的很慢，有的极快；它们彼此碰撞，也不断撞击容器壁，并随之改变速度。
          </p>
        </div>

        <p className="image">
          <img alt="" src={i1OQB5sYY29G6b} />
        </p>
        <div className="bilingual">
          <p className="caption" lang="en">
            Fig. 3-1-1: Gas inside a sealed container in an equilibrium state.
          </p>
          <p className="caption" lang="zh">
            图3-1-1：平衡状态下密封容器中的气体。
          </p>
        </div>

        <h3 className="section-header">
          ● Temperature is a numeric measure of the average kinetic energy of
          each molecule / 温度是每个分子平均动能的数值度量
        </h3>

        <div className="bilingual">
          <p lang="en">
            Inside the container, there are countless gas molecules moving at
            various speeds. From an energy perspective, these molecules possess
            a range of kinetic energies. Temperature is a measure of the average
            kinetic energy of the molecules in random motion. It can be
            expressed mathematically as follows:
          </p>
          <p lang="zh">
            容器内有无数以不同速度运动的气体分子。从能量角度看，它们具有各种大小的动能。温度正是这些无序运动分子平均动能的度量，可用下式表示：
          </p>
        </div>

        <div className="bilingual">
          <p lang="en">
            <b>Average kinetic energy per molecule = 3/2 kT</b>
          </p>
          <p lang="zh">
            <b>每个分子的平均动能 = 3/2 kT</b>
          </p>
        </div>

        <div className="bilingual">
          <p lang="en">
            “T” represents the absolute temperature and “k” is the Boltzmann
            constant. It is a universal proportional constant, independent of
            temperature, density, pressure, quantity or type of gas. This
            equation links the mechanical measure of kinetic energy with the
            thermal measure of temperature, with the Boltzmann constant serving
            as the bridge between these two domains.
          </p>
          <p lang="zh">
            其中 T 为绝对温度，k
            为玻尔兹曼常数——它是与气体温度、密度、压力、量及种类无关的普适比例常数。该式将动能这一力学量与温度这一热学量用等号相连，而玻尔兹曼常数正是连接这两大领域的桥梁。
          </p>
        </div>

        <p className="image">
          <img alt="" src={i1kCFcgNNhPQ18c} />
        </p>
        <div className="bilingual">
          <p className="caption" lang="en">
            Fig. 3-1-2: Boltzmann constant links the measure of mechanics and
            thermodynamics.
          </p>
          <p className="caption" lang="zh">
            图3-1-2：玻尔兹曼常数连接力学量与热力学量。
          </p>
        </div>

        <h3 className="section-header">
          ● Pressure is the average value of force from moving molecules /
          压力是运动分子冲击力的平均值
        </h3>

        <div className="bilingual">
          <p lang="en">
            Referring again to Fig. 3-1-1, gas molecules continuously collide
            with the walls of the container. Some molecules move at high speeds,
            while others move more slowly. Some strike the wall nearly
            perpendicular to the surface, while others collide at an angle. As a
            result, each molecule transfers a different amount of momentum to
            the wall with each collision.
          </p>
          <p lang="zh">
            再看图 3-1-1：容器壁上不断有气体分子碰撞。有的速度快，有的慢；有的近乎垂直撞壁，有的斜向碰撞。因此，每一个分子的冲击力都不相同。
          </p>
        </div>

        <div className="bilingual">
          <p lang="en">
            However, when we measure pressure, we are effectively determining
            the average effect of countless molecular collisions with the
            container walls. In an equilibrium state, this average force per
            unit area is the same in all directions and at all points. In other
            words, although the molecules move randomly and at a range of
            speeds, the resulting pressure is uniformly distributed from a
            macroscopic perspective.
          </p>
          <p lang="zh">
            但我们作为压力观测到的，其实是无数分子无序运动所产生冲击力的平均值。须把握的是：在平衡状态下，这一平均值无论从哪个方向测量都相同，不会因测量方向而改变。也就是说，容器内无数气体分子尽管完全无序飞舞，从宏观看，冲击力最终在各个方向上均匀分配。
          </p>
        </div>

        <div className="images">
          <dl className="image_list">
            <dd>
              <img alt="" src={i1s1Tz3PyNwGvW} />
            </dd>
            <dd className="caption">
              <div className="bilingual">
                <p lang="en">
                  Fig. 3-1-3: Pressure is the average value of force from moving
                  molecules.
                </p>
                <p lang="zh">
                  图3-1-3：压力是运动分子冲击力的平均值。
                </p>
              </div>
            </dd>
          </dl>

          <dl className="image_list">
            <dd>
              <img alt="" src={i1ppFCGaA1kesdH} />
            </dd>
            <dd className="caption">
              <div className="bilingual">
                <p lang="en">
                  Fig. 3-1-4: In an equilibrium state, pressure value is constant
                  in all directions.
                </p>
                <p lang="zh">
                  图3-1-4：平衡状态下，各方向测得的压力相同。
                </p>
              </div>
            </dd>
          </dl>
        </div>
      </div>
    </div>
  </>
);

export default TemperatureAndPressure;
