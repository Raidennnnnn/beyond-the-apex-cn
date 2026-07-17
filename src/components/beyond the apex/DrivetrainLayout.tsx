import i1L0U8clVua8fO from "../../assets/images/i1L0U8clVua8fO.webp";
import i1csviZykYklJSB from "../../assets/images/i1csviZykYklJSB.webp";
import i1nZEeGZrbpIX8c from "../../assets/images/i1nZEeGZrbpIX8c.webp";
import i1uEgWHnxHauESB from "../../assets/images/i1uEgWHnxHauESB.webp";
import i1x7rw2AtpPtHb from "../../assets/images/i1x7rw2AtpPtHb.webp";

const DrivetrainLayout = () => (
  <>
    <div className="manual_detail">
      <div className="content_header">
        <h1 className="bilingual-title"><span lang="en">Drivetrain Layout</span><span className="bilingual-sep"> / </span><span lang="zh">驱动布局</span></h1>
      </div>
      <div className="body">
        <div className="bilingual">
          <p lang="en">
            The drivetrain layout refers to the position of the engine—typically the heaviest component—and the wheels it drives. Each layout has its own advantages and disadvantages, and even in highly tuned sports cars it remains a major factor influencing handling and behavior. Changing the layout itself is rarely practical, but careful tuning can enhance its strengths while minimizing its weaknesses. A well-developed setup that works with the drivetrain, suspension and aerodynamics can produce a level of performance beyond standard expectations.
          </p>
          <p lang="zh">
            由车中最重的发动机搭载位置，以及把发动机功率传到路面的驱动轮位置所决定的，就是驱动布局。不同布局各有优劣，在运动驾驶中也是直接关系到行驶性能与操控性的重要因素。改变布局本身很难，但应尽量发挥该布局的优点、抑制缺点，以通向更快的行驶。从悬架到传动系、空气动力学，综合把握所有要素、在高维度上取得平衡的设定，应能带来与原厂截然不同的跑法。
          </p>
        </div>

        <h3>
          FR / FR
        </h3>

        <div className="bilingual">
          <p lang="en">
            With a well-balanced weight distribution, an FR (front-engine, rear-wheel-drive) car can offer excellent cornering performance and stability.
          </p>
          <p lang="zh">
            若赋予最佳前后配重，可兼顾出色的旋回性能与稳定性。
          </p>
        </div>

        <div className="bilingual">
          <p lang="en">
            To improve speed, it is important to increase rear traction so that the car remains stable under acceleration. At the same time, the front should be tuned to avoid excessive understeer, allowing the car to follow the intended line even as load shifts rearward during acceleration.
          </p>
          <p lang="zh">
            若考虑速度，应追求加油时不易甩尾、提高后轮牵引力的设定。另一方面前部在加油时载荷减少，须重视对策「推头」——无法沿目标线路行驶的转向不足。
          </p>
        </div>

        <p className="image">
          <img alt="" src={i1uEgWHnxHauESB} />
        </p>

        <h3>
          FF / FF
        </h3>

        <div className="bilingual">
          <p lang="en">
            In an FF (front-engine, front-wheel-drive) car, the front tires handle both steering and drive, but the rear setup is equally important. On high-speed courses, the rear should be tuned for stability, while on tighter, more technical layouts, it can be set to allow greater rotation when lifting off the throttle, aiding cornering. FF cars often use 1-way LSDs, which engage primarily under acceleration.
          </p>
          <p lang="zh">
            FF 车容易只盯着既驱动又转向的前轮，但后部也须充分关照。基本是：高速赛道重视稳定性、让车尾粘住；细弯连续时则让收油等时车尾更易滑动，做成能敏锐转向的车。LSD 原则上用仅在油门踏下时作用的 1WAY。
          </p>
        </div>

        <p className="image">
          <img alt="" src={i1L0U8clVua8fO} />
        </p>

        <h3>
          MR / MR
        </h3>

        <div className="bilingual">
          <p lang="en">
            Positioning the engine near the center of the car provides balanced weight distribution, improving acceleration and braking performance. Turn-in is sharp, but at the limit the lighter load on the front can lead to understeer. When grip is exceeded, the rear can break away quickly and be more difficult to control. When tuning, attention should be given to maintaining front-end grip on corner entry and improving traction on corner exit. Front and rear downforce must also be carefully balanced.
          </p>
          <p lang="zh">
            发动机装在车中央，加减速有利；转向也敏锐，但极限区前轮载荷变少，倾向转向不足。车尾滑移时的速度也快。应最优先确保过弯初期的旋回性能，其次意识出弯牵引力。前后下压力也须均衡调整。
          </p>
        </div>

        <p className="image">
          <img alt="" src={i1csviZykYklJSB} />
        </p>

        <h3>
          RR / RR
        </h3>

        <div className="bilingual">
          <p lang="en">
            A rear-engine, rear-wheel-drive layout offers strong traction under acceleration and stability under braking. However, with relatively low load on the front, initial understeer can occur during corner entry. At the limit, the rear-biased weight distribution can cause rapid rotation, leading to sudden oversteer. Tuning this layout typically focuses on improving front-end response and stability during corner entry.
          </p>
          <p lang="zh">
            重发动机装在后部，在两驱车中加减速性能最出色；但过弯时前轮载荷比 MR 更少，易显出强转向不足。进一步越过极限时，重尾像摆锤一样瞬间转为转向过度。宜采用在过弯初期切实确保旋回性能的设定。
          </p>
        </div>

        <p className="image">
          <img alt="" src={i1x7rw2AtpPtHb} />
        </p>

        <h3>
          4WD / 4WD
        </h3>

        <div className="bilingual">
          <p lang="en">
            The behavior of a 4WD (AWD) car varies depending on its underlying layout, but in general, its high stability can make turn-in more difficult. Traction when accelerating out of corners is typically very strong, so tuning often focuses on improving front-end response and corner entry. Differential setups can vary, though a common approach is to use a milder locking effect at the front and a stronger locking effect at the rear.
          </p>
          <p lang="zh">
            举动随基础车的驱动方式而异，但稳定性高、因而难转弯是基本特性。出弯稳定性本就优秀，应意识重视过弯初期转向性的设定；此时前后驱动力分配也是重要因素。所装 LSD 原则上前：1WAY、后：2WAY。
          </p>
        </div>

        <p className="image">
          <img alt="" src={i1nZEeGZrbpIX8c} />
        </p>
      </div>
    </div>
  </>
);

export default DrivetrainLayout;
