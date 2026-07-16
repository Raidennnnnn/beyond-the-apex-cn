import i12gNdfgjRRNFO from "../../assets/images/i12gNdfgjRRNFO.webp";
import i1zVFWHtR7 from "../../assets/images/i1zVFWHtR7.webp";
import i12Yj1ufIEHJAG from "../../assets/images/i12Yj1ufIEHJAG.webp";
import i1d7huRdQg0G2z from "../../assets/images/i1d7huRdQg0G2z.webp";

const VibrationOfSprungAndUnsprungMass = () => (
  <>
    <div className="manual_detail">
      <div className="content_header">
        <h1>
          2-6 : Vibration of Sprung Mass and Unsprung Mass /
          簧上质量与簧下质量的振动
        </h1>
        <h2>
          A theory not to be ignored in suspension tuning /
          悬架调校中不可忽视的理论
        </h2>
      </div>
      <div className="body">
        <div className="bilingual">
          <p lang="en">
            Vertical vibration has a direct impact on ride comfort and the tire’s road-holding ability. Excessive vibration can make the ride uncomfortable and may reduce tire contact with the road to the point of losing traction. To avoid this, the springs and dampers of the suspension must be carefully tuned. This section introduces the basics of vertical vibration, a subject that is essential for proper suspension tuning.
          </p>
          <p lang="zh">
            上下振动直接影响乘坐舒适性与轮胎接地能力。振动过大不仅让乘坐不适，还可能扰乱轮胎接地面以至失去抓地。为此必须仔细调校悬架的弹簧与阻尼器。本节介绍悬架调校所必需的上下振动基础。
          </p>
        </div>

        <h3 className="section-header">● Mode of vibration / 振动模态</h3>

        <div className="bilingual">
          <p lang="en">
            Sprung mass refers to the total mass supported by the suspension, while unsprung mass refers to the mass located between the suspension and the tires. Here, we focus on the bouncing and pitching motion of the sprung mass, as well as the vertical motion of the unsprung mass.
            <br />
            <br />
            Fig. 2-6-1 shows a simplified model in which the front and rear wheels support the entire vehicle. In this model, the sprung mass can move vertically (up and down), and each unsprung mass at the front and rear can also move vertically. This results in four independent motions, or four degrees of freedom, and therefore four natural frequencies. The primary resonance is the bounce mode, in which the front and rear sprung mass move in phase. The secondary resonance is the pitch mode, in which the front and rear move out of phase. The tertiary and quaternary resonances correspond to the vertical vibration modes of the front and rear unsprung masses.
          </p>
          <p lang="zh">
            簧上质量是悬架所支承的总质量；簧下质量是悬架与轮胎之间的质量。这里关注簧上质量的弹跳与俯仰，以及簧下质量的上下运动。
            <br />
            <br />
            图 2-6-1 是前后两轮支承整车的简化模型。簧上质量可上下运动，前后簧下质量也可各自上下运动，共四个独立方向，即四个自由度、四个固有频率。一次共振为弹跳模态：前后簧上质量同相运动；二次共振为俯仰模态：前后反相运动；三次与四次共振对应前后簧下质量的上下振动模态。
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
            图2-6-1：前后两轮支承车身的简化上下振动模型。可位移方向共四个。
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
            图2-6-2：振动模态。
          </p>
        </div>

        <h3 className="section-header">
          ● Suspension tuning and its effects on the mode of vibration /
          悬架调校对振动模态的影响
        </h3>

        <div className="bilingual">
          <p lang="en">
            Body vibration has a negative impact on tire road holding and overall ride comfort, and should be minimized as much as possible. Vibration of the sprung mass also affects aerodynamic performance, especially in competition vehicles.
            <br />
            <br />
            It should be noted that vibration of the sprung and unsprung masses exhibits distinct characteristics; understanding these is useful for suspension tuning.
          </p>
          <p lang="zh">
            车身振动不利于轮胎接地与乘坐舒适，应尽量抑制。簧上质量振动还会影响空气动力学表现，对赛车尤为重要。
            <br />
            <br />
            簧上与簧下质量的振动各有特点；理解这些特性有助于悬架调校。
          </p>
        </div>

        <div className="bilingual">
          <p lang="en">
            <b>
              1) Increasing damping force helps reduce vibration of the sprung mass near its resonance frequency; however, it can increase vibration at other frequencies. (See Fig. 2-6-3, top graph.)
            </b>
            <br />
            <br />
            <b>
              2) Increasing damping force can shift the resonance frequency of the sprung mass slightly upward. (See Fig. 2-6-3, top graph.)
            </b>
            <br />
            <br />
            <b>
              3) Changing the sprung mass or spring rate affects the resonance of the sprung mass, but has little influence on the resonance of the unsprung mass. (See Fig. 2-6-3, middle graph.)
            </b>
            <br />
            <br />
            <b>
              4) Changing the unsprung mass or the vertical stiffness of the tire affects the resonance of the unsprung mass, but has little influence on the vibration of the sprung mass. (See Fig. 2-6-3, bottom graph.)
            </b>
          </p>
          <p lang="zh">
            <b>
              1）增大阻尼力有助于抑制簧上质量在共振频率附近的振动，但在其他频率上可能增大振动。（见图 2-6-3 上图。）
            </b>
            <br />
            <br />
            <b>
              2）增大阻尼力可使簧上质量共振频率略微升高。（见图 2-6-3 上图。）
            </b>
            <br />
            <br />
            <b>
              3）改变簧上质量或弹簧刚度，会显著影响簧上共振，对簧下共振影响很小。（见图 2-6-3 中图。）
            </b>
            <br />
            <br />
            <b>
              4）改变簧下质量或轮胎纵向刚度，会显著影响簧下共振，对簧上振动影响很小。（见图 2-6-3 下图。）
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
            图2-6-3：悬架参数对上下振动的影响。
          </p>
        </div>

        <h3 className="section-header">● Pitching control / 俯仰控制</h3>

        <div className="bilingual">
          <p lang="en">
            When a car is driven in a straight line, the input from the road surface to the rear wheels is delayed by a time corresponding to the wheelbase divided by the vehicle speed. By tuning the resonance frequency of the sprung mass at the rear slightly higher than at the front, the rear response can better align with the front, allowing the vibrations to converge and helping to reduce pitching motion.
          </p>
          <p lang="zh">
            直线行驶时，路面对后轮的输入会滞后“轴距÷车速”的时间。将后轴簧上共振频率调得略高于前轴，后轮响应更易与前轮对齐，振动得以收敛，从而有助于抑制俯仰。
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
            图2-6-4：俯仰运动的抑制。提高后轴簧上共振频率更有利于减小俯仰。
          </p>
        </div>
      </div>
    </div>
  </>
);

export default VibrationOfSprungAndUnsprungMass;
