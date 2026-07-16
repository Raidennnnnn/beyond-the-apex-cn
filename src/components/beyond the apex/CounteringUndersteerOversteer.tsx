import i18becgRGmvXk from "../../assets/images/i18becgRGmvXk.webp";
import i1XKKLjPmfJfsSH from "../../assets/images/i1XKKLjPmfJfsSH.webp";

const CounteringUndersteerOversteer = () => (
  <>
    <div className="manual_detail">
      <div className="content_header">
        <h1>Countering Understeer, Countering Oversteer / 抑制转向不足与转向过度</h1>
      </div>
      <div className="body">
        <h3 className="section-header">
          ● Countering Understeer / ● 抑制转向不足
        </h3>

        <h3>
          Understanding Why the Car Refuses to Turn / 弄清在何处推头
        </h3>

        <div className="bilingual">
          <p lang="en">
            Begin by identifying when understeer occurs—on corner entry, at the apex, or on exit.
            <br />
            <br />
            If it appears on entry, front-end grip needs to be increased. This can be achieved by softening the front springs and adjusting the dampers to allow more forward weight transfer, typically by reducing compression damping and controlling rebound. This helps load the front tires more effectively under braking.
            <br />
            <br />
            In addition to suspension setup, excessive LSD locking can also contribute to entry understeer. Reducing preload and deceleration locking can help improve rotation. In rear-wheel-drive cars, switching from a 2-way LSD to a 1-way type can reduce locking on deceleration and improve turn-in. On faster circuits, increasing front downforce can also help improve front-end grip.
            <br />
            <br />
            If understeer occurs near the apex, increasing negative camber can help maintain a better contact patch under load. Reducing rear toe-in can also make the car more willing to rotate, and in some cases increasing front track width can further improve front-end grip.
            <br />
            <br />
            If understeer appears on corner exit in rear-wheel-drive cars, it can be addressed by improving front-end response and rear traction balance. For example, by slightly lowering the front ride height and adjusting damper settings to support weight transfer. In front-wheel-drive cars, increasing LSD effectiveness can help improve traction and reduce power-related understeer, though excessive locking may worsen it.
          </p>
          <p lang="zh">
            先判断转向不足出现在进弯、弯心还是出弯。
            <br />
            <br />
            进弯推头需增加前端抓地：前弹簧软、减衰伸侧硬、压缩侧软以促进前移荷重；也可检查 LSD 是否过强、前束与外倾等。
            <br />
            <br />
            弯心或出弯则需结合油门、差速与后轴设定综合调整。
          </p>
        </div>

        <h3>
          Suggested Suspension Settings / 悬架设定参考
        </h3>

        <p className="image">
          <img alt="" src={i1XKKLjPmfJfsSH} />
        </p>

        <h3 className="section-header">
          ● Countering Oversteer / ● 抑制转向过度
        </h3>

        <h3>
          The Trouble With Rear-Wheel Drives / 后驱常见烦恼
        </h3>

        <div className="bilingual">
          <p lang="en">
            Front-wheel-drive and all-wheel-drive cars are generally more resistant to oversteer, while rear-wheel-drive cars are more prone to it due to their drivetrain layout.
            <br />
            <br />
            If the aim is to maintain control of oversteer—for example in drifting—stiffer suspension can help make the car’s behavior more predictable. In contrast, for time attack or circuit driving, the focus should be on maintaining rear traction to ensure effective forward acceleration.
            <br />
            <br />
            Unwanted oversteer typically results from a loss of rear tire grip under power, causing the car to rotate and reducing effective acceleration.
            <br />
            <br />
            Spring rate and damping can be adjusted to help counter oversteer. Softening the rear springs can improve rear grip, while damper settings can be tuned to control how weight transfers, typically by reducing excessive rear instability. Reducing rear anti-roll bar stiffness can also help maintain traction by allowing more even load distribution across the rear tires. Increasing rear track width, where possible, can further improve stability. If the front suspension is too soft, weight can transfer forward too easily, so slightly increasing front stiffness can help maintain rear grip.
            <br />
            <br />
            If a rear wing or spoiler is fitted, increasing its angle can add downforce and improve rear stability, although this will usually come with a small reduction in top speed.
          </p>
          <p lang="zh">
            FF 与四驱很少为甩尾苦恼，转向过度多出现在后驱。若以漂移为主、重视可控性，前后悬架都可偏硬以精确控制车尾滑动；赛道计时则应优先出弯牵引，通过弹簧、LSD、外倾与下压力等让车尾稳定加速。
          </p>
        </div>

        <h3>
          Suggested Suspension Settings / 悬架设定参考
        </h3>

        <p className="image">
          <img alt="" src={i18becgRGmvXk} />
        </p>
      </div>
    </div>
  </>
);

export default CounteringUndersteerOversteer;
