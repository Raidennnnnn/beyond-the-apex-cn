import i13fFsB1COd3pEE from "../../assets/images/i13fFsB1COd3pEE.webp";
import i1c25GFw42u3i from "../../assets/images/i1c25GFw42u3i.webp";

const Transmission = () => (
  <>
    <div className="manual_detail">
      <div className="content_header">
        <h1 className="bilingual-title"><span lang="en">Transmission</span><span className="bilingual-sep"> / </span><span lang="zh">变速箱</span></h1>
      </div>
      <div className="body">
        <div className="bilingual">
          <p lang="en">
            An engine operates at anywhere from several hundred to several thousand revolutions per minute. This is too fast to drive the wheels directly, so an intermediate mechanism is required. That role is handled by the transmission, which uses different gear ratios to deliver the appropriate balance of speed and torque to the wheels for any given situation.
          </p>
          <p lang="zh">
            发动机每分钟数百至数千转，直接驱动车轮过快，需中间变速装置。通过齿轮组合按情况取出速度与力，即变速箱（变速器）。
          </p>
        </div>

        <div className="bilingual">
          <p lang="en">
            To understand this, consider how gears interact. When a small gear drives a larger gear, the larger gear turns more slowly but with increased torque. Conversely, when a larger gear drives a smaller gear, the smaller gear spins faster but with reduced torque.
          </p>
          <p lang="zh">
            齿轮原理：小齿轮带大齿轮则大齿轮转得慢、力大；大齿轮带小齿轮则小齿轮转得快、力小。
          </p>
        </div>

        <div className="bilingual">
          <p lang="en">
            The transmission applies these principles to match the appropriate gear to the situation. A car requires the most torque when accelerating from a standstill, and far less to maintain a steady speed. As a result, initial acceleration uses a low gear ratio, which provides higher torque at the wheels to get the car moving.
          </p>
          <p lang="zh">
            车辆最需要大力的是起步；匀速高速只需小功率。起步用大减速比产生大转矩。
          </p>
        </div>

        <div className="bilingual">
          <p lang="en">
            A lower gear ratio multiplies torque but limits speed. In first gear, even at high rpm, vehicle speed is limited to only several tens of kilometers per hour. As the driver shifts up, gear ratios become progressively taller, allowing higher speeds with less torque multiplication. This range of gears lets the driver select the right balance for any driving condition.
          </p>
          <p lang="zh">
            大减速比转矩大但车速受限，故一挡全油门时速仅数十公里。变速箱用多组齿轮逐渐减小减速比，按路况调节速度与力。
          </p>
        </div>

        <div className="bilingual">
          <p lang="en">
            In a production car, the transmission’s gear ratios are combined with a final drive gear located between the transmission and the drive wheels. This final drive determines the overall gear ratio. Gear ratios have a significant effect on a car’s performance, and in circuit racing, selecting ratios suited to the course can be critical to improving lap times.
          </p>
          <p lang="zh">
            实车将变速箱与驱动轮前的主减速器（终传）组合成总传动比。传动比对特性影响大，赛道选合适齿比是提升圈速的关键。
          </p>
        </div>

        <p className="image">
          <img alt="" src={i13fFsB1COd3pEE} />
        </p>

        <h3 className="section-header bilingual-title"><span lang="en">● The Final Drive</span><span className="bilingual-sep"> / </span><span lang="zh">● 主减速器（终传）</span></h3>

        <div className="bilingual">
          <p lang="en">
            The gear that provides the final stage of power transfer to the drive wheels is known as the final drive. It is the last step in reducing engine speed to a usable level at the wheels, and in longitudinal layouts, it also redirects the flow of power by 90 degrees.
          </p>
          <p lang="zh">
            发动机与驱动轮之间最后一级减速齿轮即主减速器，再次降低转速传给轮胎；纵置发动机还负责将动力转向90°。
          </p>
        </div>

        <div className="bilingual">
          <p lang="en">
            The final drive operates independently of the transmission gear selection, and changing its ratio is an effective way to alter a car’s behavior. In performance cars, a numerically higher final drive ratio is often used to improve acceleration, while a lower ratio can reduce engine speed and improve fuel economy.
          </p>
          <p lang="zh">
            与变速箱独立，更换较易，是改变车辆特性的重要手段。运动车常增大齿比提加速（最高速降）；重视油耗则减小齿比降转速。
          </p>
        </div>

        <p className="image">
          <img alt="" src={i1c25GFw42u3i} />
        </p>

        <h3 className="section-header bilingual-title"><span lang="en">● Types of Two-Pedal Transmission</span><span className="bilingual-sep"> / </span><span lang="zh">● 两脚板变速箱种类</span></h3>

        <h3 className="bilingual-title"><span lang="en">AT [Automatic Transmission]</span><span className="bilingual-sep"> / </span><span lang="zh">AT［自动变速器］</span></h3>

        <div className="bilingual">
          <p lang="en">
            A common type of transmission uses a torque converter, a form of fluid coupling, to shift gears automatically based on vehicle speed and engine rpm. The system relies on planetary gearsets controlled by hydraulic pressure. It offers smooth, seamless gear changes, though fluid losses within the system can reduce fuel efficiency.
          </p>
          <p lang="zh">
            以液力变矩器（流体离合器）连接发动机，按车速与转速自动换挡。内部多用行星齿轮、液压控制。换挡平顺，但液压滑移与损失使油耗略不利。
          </p>
        </div>

        <h3 className="bilingual-title"><span lang="en">CVT [Continuously Variable Transmission]</span><span className="bilingual-sep"> / </span><span lang="zh">CVT［无级变速器］</span></h3>

        <div className="bilingual">
          <p lang="en">
            A continuously variable transmission does not shift through fixed gears like a conventional transmission. Instead, it uses a pair of variable-diameter pulleys connected by a metal belt or chain to continuously vary the gear ratio. The result is exceptionally smooth operation with no shift shock, while allowing the engine to operate near its most efficient range under a wide range of conditions.
          </p>
          <p lang="zh">
            亦称无段变速、连续可变变速：不用固定齿比，而用金属带或链条连接两个可变直径皮带轮，连续改变传动比。几乎无换挡冲击，可在多种工况保持较优发动机转速。
          </p>
        </div>

        <h3 className="bilingual-title"><span lang="en">DCT [Dual Clutch Transmission]</span><span className="bilingual-sep"> / </span><span lang="zh">DCT［双离合变速器］</span></h3>

        <div className="bilingual">
          <p lang="en">
            A dual-clutch transmission is essentially a manual transmission with its operation automated through the use of two clutches. Odd and even gears are split across two shafts, and by preselecting the next gear and switching clutches, it delivers shift speeds that can exceed those of a conventional manual. Unlike traditional automatics, which rely on planetary gearsets and a torque converter, a DCT can operate efficiently at higher engine speeds and is well suited to high-performance applications. It is a transmission type used in both sports cars and efficiency-focused models.
          </p>
          <p lang="zh">
            用两个离合器自动化操作的手动变速箱。奇偶挡分轴，预选下一挡后切换离合器，换挡可快于传统手动。AT行星齿轮有转速上限，DCT可配高转速发动机，运动车与节能车均有采用。
          </p>
        </div>
      </div>
    </div>
  </>
);

export default Transmission;
