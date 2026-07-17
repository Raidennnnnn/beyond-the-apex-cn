import i18becgRGmvXk from "../../assets/images/i18becgRGmvXk.webp";
import i1XKKLjPmfJfsSH from "../../assets/images/i1XKKLjPmfJfsSH.webp";

const CounteringUndersteerOversteer = () => (
  <>
    <div className="manual_detail">
      <div className="content_header">
        <h1 className="bilingual-title"><span lang="en">Countering Understeer, Countering Oversteer</span><span className="bilingual-sep"> / </span><span lang="zh">抑制转向不足与转向过度</span></h1>
      </div>
      <div className="body">
        <h3 className="section-header bilingual-title"><span lang="en">● Countering Understeer</span><span className="bilingual-sep"> / </span><span lang="zh">● 抑制转向不足</span></h3>

        <h3 className="bilingual-title"><span lang="en">Understanding Why the Car Refuses to Turn</span><span className="bilingual-sep"> / </span><span lang="zh">弄清在何处转不过去</span></h3>

        <div className="bilingual">
          <p lang="en">
            Begin by identifying when understeer occurs—on corner entry, at the apex, or on exit.
          </p>
          <p lang="zh">
            从判断转向不足出现在弯道进入／剪接点附近／出弯哪一段开始。
          </p>
        </div>

        <div className="bilingual">
          <p lang="en">
            If it appears on entry, front-end grip needs to be increased. This can be achieved by softening the front springs and adjusting the dampers to allow more forward weight transfer, typically by reducing compression damping and controlling rebound. This helps load the front tires more effectively under braking.
          </p>
          <p lang="zh">
            若进弯出现转向不足，须最大限度确保前轮抓地力。使用较软弹簧；减振器为促进向前轮的载荷转移，试把回弹侧加硬、压缩侧做软。
          </p>
        </div>

        <div className="bilingual">
          <p lang="en">
            In addition to suspension setup, excessive LSD locking can also contribute to entry understeer. Reducing preload and deceleration locking can help improve rotation. In rear-wheel-drive cars, switching from a 2-way LSD to a 1-way type can reduce locking on deceleration and improve turn-in. On faster circuits, increasing front downforce can also help improve front-end grip.
          </p>
          <p lang="zh">
            底盘以外的因素，也可能是 LSD 作用过强。对策是降低锁定率与初始扭矩。后驱车若使用不论加速减速都作用的 2WAY，可改成减速时放开的 1WAY。高速弯则增加前部下压力、提高前轮抓地也有效。
          </p>
        </div>

        <div className="bilingual">
          <p lang="en">
            If understeer occurs near the apex, increasing negative camber can help maintain a better contact patch under load. Reducing rear toe-in can also make the car more willing to rotate, and in some cases increasing front track width can further improve front-end grip.
          </p>
          <p lang="zh">
            剪接点附近的转向不足，宜增加负外倾，使侧倾时轮胎接地面积不减。减少后部前束内以平衡抓地力等定位调整有效；可能的话加宽前轮距也有效果。
          </p>
        </div>

        <div className="bilingual">
          <p lang="en">
            If understeer appears on corner exit in rear-wheel-drive cars, it can be addressed by improving front-end response and rear traction balance. For example, by slightly lowering the front ride height and adjusting damper settings to support weight transfer. In front-wheel-drive cars, increasing LSD effectiveness can help improve traction and reduce power-related understeer, though excessive locking may worsen it.
          </p>
          <p lang="zh">
            出弯时成问题的后驱「推头」对策，是降低前部车高，或加硬前减振器回弹侧与后减振器压缩侧。反之若变成动力过度，则把后部做软一些；FF 车出弯加速出现转向不足时，则加强 LSD 作用。
          </p>
        </div>

        <h3 className="bilingual-title"><span lang="en">Suggested Suspension Settings</span><span className="bilingual-sep"> / </span><span lang="zh">悬架设定参考</span></h3>

        <p className="image">
          <img alt="" src={i1XKKLjPmfJfsSH} />
        </p>

        <h3 className="section-header bilingual-title"><span lang="en">● Countering Oversteer</span><span className="bilingual-sep"> / </span><span lang="zh">● 抑制转向过度</span></h3>

        <h3 className="bilingual-title"><span lang="en">The Trouble With Rear-Wheel Drives</span><span className="bilingual-sep"> / </span><span lang="zh">后驱车固有的烦恼</span></h3>

        <div className="bilingual">
          <p lang="en">
            Front-wheel-drive and all-wheel-drive cars are generally more resistant to oversteer, while rear-wheel-drive cars are more prone to it due to their drivetrain layout.
          </p>
          <p lang="zh">
            就 FF 车与 4WD 车而言，几乎不会为转向过度烦恼。转向过度多在后驱车上成为问题。
          </p>
        </div>

        <div className="bilingual">
          <p lang="en">
            If the aim is to maintain control of oversteer—for example in drifting—stiffer suspension can help make the car’s behavior more predictable. In contrast, for time attack or circuit driving, the focus should be on maintaining rear traction to ensure effective forward acceleration.
          </p>
          <p lang="zh">
            若以漂移为主、重视可控性，不如把前后悬架都做硬，以便准确控制车尾滑动量。但若是赛道计时攻击，则应瞄准最大限度确保推动车辆前进的牵引力来想对策。
          </p>
        </div>

        <div className="bilingual">
          <p lang="en">
            Unwanted oversteer typically results from a loss of rear tire grip under power, causing the car to rotate and reducing effective acceleration.
          </p>
          <p lang="zh">
            不希望出现的转向过度，多半原因是加油时后轮牵引力不足——驱动力不转化为加速而横向溜走。
          </p>
        </div>

        <div className="bilingual">
          <p lang="en">
            Spring rate and damping can be adjusted to help counter oversteer. Softening the rear springs can improve rear grip, while damper settings can be tuned to control how weight transfers, typically by reducing excessive rear instability. Reducing rear anti-roll bar stiffness can also help maintain traction by allowing more even load distribution across the rear tires. Increasing rear track width, where possible, can further improve stability. If the front suspension is too soft, weight can transfer forward too easily, so slightly increasing front stiffness can help maintain rear grip.
          </p>
          <p lang="zh">
            对策首先是调整弹簧刚度与减振器衰减力：把后弹簧刚度设软，再把减振器压缩侧做软、回弹侧做硬试试。把后防倾杆做软以增加内侧轮载荷也好。可能的话加宽后轮距。另一方面前部过软会引发大姿态变化、抽掉后部载荷；为确保后轮抓地，前部宜偏硬设定。
          </p>
        </div>

        <div className="bilingual">
          <p lang="en">
            If a rear wing or spoiler is fitted, increasing its angle can add downforce and improve rear stability, although this will usually come with a small reduction in top speed.
          </p>
          <p lang="zh">
            若装有尾翼等，可加大角度以增加后部下压力。但此时也不要忘记最高速度会牺牲。
          </p>
        </div>

        <h3 className="bilingual-title"><span lang="en">Suggested Suspension Settings</span><span className="bilingual-sep"> / </span><span lang="zh">悬架设定参考</span></h3>

        <p className="image">
          <img alt="" src={i18becgRGmvXk} />
        </p>
      </div>
    </div>
  </>
);

export default CounteringUndersteerOversteer;
