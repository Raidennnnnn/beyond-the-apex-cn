import i12gNdfgjRRNFO from "../../assets/images/i12gNdfgjRRNFO.webp";
import i1zVFWHtR7 from "../../assets/images/i1zVFWHtR7.webp";
import i12Yj1ufIEHJAG from "../../assets/images/i12Yj1ufIEHJAG.webp";
import i1d7huRdQg0G2z from "../../assets/images/i1d7huRdQg0G2z.webp";

const VibrationOfSprungAndUnsprungMass = () => (
  <>
    <div className="manual_detail">
      <div className="content_header">
        <h1 className="bilingual-title"><span lang="en">2-6 : Vibration of Sprung Mass and Unsprung Mass</span><span className="bilingual-sep"> / </span><span lang="zh">簧上质量与簧下质量的振动</span></h1>
        <h2 className="bilingual-title"><span lang="en">A theory not to be ignored in suspension tuning</span><span className="bilingual-sep"> / </span><span lang="zh">悬架调校中不可忽视的理论</span></h2>
      </div>
      <div className="body">
        <div className="bilingual">
          <p lang="en">
            Vertical vibration has a direct impact on ride comfort and the tire’s road-holding ability. Excessive vibration can make the ride uncomfortable and may reduce tire contact with the road to the point of losing traction. To avoid this, the springs and dampers of the suspension must be carefully tuned. This section introduces the basics of vertical vibration, a subject that is essential for proper suspension tuning.
          </p>
          <p lang="zh">
            车辆的上下振动是影响乘坐舒适性与轮胎接地性的重要问题。车身振动过大不仅恶化乘坐感，还会扰乱轮胎接地面以至失去抓地，因此必须适当调校弹簧与阻尼器。这里介绍悬架调校中应了解的上下振动特征。
          </p>
        </div>

        <h3 className="section-header bilingual-title"><span lang="en">● Mode of vibration</span><span className="bilingual-sep"> / </span><span lang="zh">振动模态</span></h3>

        <div className="bilingual">
          <p lang="en">
            Sprung mass refers to the total mass supported by the suspension, while unsprung mass refers to the mass located between the suspension and the tires. Here, we focus on the bouncing and pitching motion of the sprung mass, as well as the vertical motion of the unsprung mass.
          </p>
          <p lang="zh">
            簧上质量是悬架所支承的质量；簧下质量是悬架与轮胎的质量。这里考察簧上质量的弹跳振动与俯仰振动，以及簧下质量的上下振动。
          </p>
        </div>

        <div className="bilingual">
          <p lang="en">
            Fig. 2-6-1 shows a simplified model in which the front and rear wheels support the entire vehicle. In this model, the sprung mass can move vertically (up and down), and each unsprung mass at the front and rear can also move vertically. This results in four independent motions, or four degrees of freedom, and therefore four natural frequencies. The primary resonance is the bounce mode, in which the front and rear sprung mass move in phase. The secondary resonance is the pitch mode, in which the front and rear move out of phase. The tertiary and quaternary resonances correspond to the vertical vibration modes of the front and rear unsprung masses.
          </p>
          <p lang="zh">
            为更简洁地理解车辆振动，用图 2-6-1 这样前后两轮支承车身的模型来思考。该模型中可位移方向为：簧上质量前后各一个上下方向（共 2），前后簧下质量各一个上下方向（共 2），合计 4 个方向，自由度为 4，固有频率也有 4 个。一次共振是前后簧上质量同相（前轮伸长时后轮也伸、前轮压缩时后轮也压）的弹跳共振；二次共振是前后簧上质量反相的俯仰共振；三次与四次则是簧下质量（轮胎）的共振。
          </p>
        </div>

        <p className="image">
          <img alt="" src={i12gNdfgjRRNFO} />
        </p>
        <div className="bilingual">
          <p className="caption" lang="en">
            Fig. 2-6-1: Simplified vibration model with the body supported by front and rear wheels. There are four directions for displacement.
          </p>
          <p className="caption" lang="zh">
            图2-6-1：前后两轮支承车身的上下振动模型。可位移部分共四个。
          </p>
        </div>

        <p className="image">
          <img alt="" src={i1zVFWHtR7} />
        </p>
        <div className="bilingual">
          <p className="caption" lang="en">
            Fig. 2-6-2: Mode of vibration.
          </p>
          <p className="caption" lang="zh">
            图2-6-2：车辆的振动模态。
          </p>
        </div>

        <h3 className="section-header bilingual-title"><span lang="en">● Suspension tuning and its effects on the mode of vibration</span><span className="bilingual-sep"> / </span><span lang="zh">悬架调校对振动模态的影响</span></h3>

        <div className="bilingual">
          <p lang="en">
            Body vibration has a negative impact on tire road holding and overall ride comfort, and should be minimized as much as possible. Vibration of the sprung mass also affects aerodynamic performance, especially in competition vehicles.
          </p>
          <p lang="zh">
            车身共振会恶化轮胎接地性与乘坐舒适，应尽量抑制。簧上质量振动还会影响车身空气动力学性能，对赛车尤为重要。
          </p>
        </div>

        <div className="bilingual">
          <p lang="en">
            It should be noted that vibration of the sprung and unsprung masses exhibits distinct characteristics; understanding these is useful for suspension tuning.
          </p>
          <p lang="zh">
            簧上与簧下质量的上下振动有如下性质，记住它们对悬架调校会有帮助。
          </p>
        </div>

        <div className="bilingual">
          <p lang="en">
            <b>
              1) Increasing damping force helps reduce vibration of the sprung mass near its resonance frequency; however, it can increase vibration at other frequencies. (See Fig. 2-6-3, top graph.)
            </b>
          </p>
          <p lang="zh">
            <b>
              1）增大阻尼力时，对簧上质量共振频率附近振动的抑制效果很大，但在共振点以外的区域振动会增加。（见图 2-6-3 上图。）
            </b>
          </p>
        </div>

        <div className="bilingual">
          <p lang="en">
            <b>
              2) Increasing damping force can shift the resonance frequency of the sprung mass slightly upward. (See Fig. 2-6-3, top graph.)
            </b>
          </p>
          <p lang="zh">
            <b>
              2）增大阻尼力时，簧上质量共振频率会略微升高。（见图 2-6-3 上图。）
            </b>
          </p>
        </div>

        <div className="bilingual">
          <p lang="en">
            <b>
              3) Changing the sprung mass or spring rate affects the resonance of the sprung mass, but has little influence on the resonance of the unsprung mass. (See Fig. 2-6-3, middle graph.)
            </b>
          </p>
          <p lang="zh">
            <b>
              3）改变簧上质量或弹簧弹性时，簧上共振变化很大，簧下共振几乎不变。（见图 2-6-3 中图。）
            </b>
          </p>
        </div>

        <div className="bilingual">
          <p lang="en">
            <b>
              4) Changing the unsprung mass or the vertical stiffness of the tire affects the resonance of the unsprung mass, but has little influence on the vibration of the sprung mass. (See Fig. 2-6-3, bottom graph.)
            </b>
          </p>
          <p lang="zh">
            <b>
              4）改变簧下质量或轮胎垂直刚度时，簧下共振变化很大，簧上振动几乎不变。（见图 2-6-3 下图。）
            </b>
          </p>
        </div>

        <p className="image">
          <img alt="" src={i12Yj1ufIEHJAG} />
        </p>
        <div className="bilingual">
          <p className="caption" lang="en">
            Fig. 2-6-3: Influence of suspension algorithm on vertical vibration.
          </p>
          <p className="caption" lang="zh">
            图2-6-3：悬架诸元对上下振动的影响。
          </p>
        </div>

        <h3 className="section-header bilingual-title"><span lang="en">● Pitching control</span><span className="bilingual-sep"> / </span><span lang="zh">俯仰控制</span></h3>

        <div className="bilingual">
          <p lang="en">
            When a car is driven in a straight line, the input from the road surface to the rear wheels is delayed by a time corresponding to the wheelbase divided by the vehicle speed. By tuning the resonance frequency of the sprung mass at the rear slightly higher than at the front, the rear response can better align with the front, allowing the vibrations to converge and helping to reduce pitching motion.
          </p>
          <p lang="zh">
            直线行驶时，路面对后轮的输入会滞后“轴距÷车速”的时间。若将后轮簧上共振频率设定得略高于前轮，后轮振动收敛就能赶上前轮，从而抑制俯仰。
          </p>
        </div>

        <p className="image">
          <img alt="" src={i1d7huRdQg0G2z} />
        </p>
        <div className="bilingual">
          <p className="caption" lang="en">
            Fig. 2-6-4: Control of pitching motion. Pitching can be minimized by increasing the rear sprung mass resonance frequency.
          </p>
          <p className="caption" lang="zh">
            图2-6-4：俯仰运动的抑制。注意提高后轴簧上共振频率更有利于抑制俯仰。
          </p>
        </div>
      </div>
    </div>
  </>
);

export default VibrationOfSprungAndUnsprungMass;
