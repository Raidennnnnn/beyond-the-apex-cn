import i1L0U8clVua8fO from "../../assets/images/i1L0U8clVua8fO.webp";
import i1csviZykYklJSB from "../../assets/images/i1csviZykYklJSB.webp";
import i1nZEeGZrbpIX8c from "../../assets/images/i1nZEeGZrbpIX8c.webp";
import i1uEgWHnxHauESB from "../../assets/images/i1uEgWHnxHauESB.webp";
import i1x7rw2AtpPtHb from "../../assets/images/i1x7rw2AtpPtHb.webp";

const DrivetrainLayout = () => (
  <>
    <div className="manual_detail">
      <div className="content_header">
        <h1>Drivetrain Layout / 驱动形式布局</h1>
      </div>
      <div className="body">
        <div className="bilingual">
          <p lang="en">
            The drivetrain layout refers to the position of the engine—typically the heaviest component—and the wheels it drives. Each layout has its own advantages and disadvantages, and even in highly tuned sports cars it remains a major factor influencing handling and behavior. Changing the layout itself is rarely practical, but careful tuning can enhance its strengths while minimizing its weaknesses. A well-developed setup that works with the drivetrain, suspension and aerodynamics can produce a level of performance beyond standard expectations.
          </p>
          <p lang="zh">
            驱动布局由最重的发动机位置与驱动轮决定，各有优劣，直接影响运动性能与操控。布局难改，但可通过悬架、LSD、空力等尽量发挥优点、抑制缺点。
          </p>
        </div>

        <h3>
          FR / FR
        </h3>

        <div className="bilingual">
          <p lang="en">
            With a well-balanced weight distribution, an FR (front-engine, rear-wheel-drive) car can offer excellent cornering performance and stability.
            <br />
            <br />
            To improve speed, it is important to increase rear traction so that the car remains stable under acceleration. At the same time, the front should be tuned to avoid excessive understeer, allowing the car to follow the intended line even as load shifts rearward during acceleration.
          </p>
          <p lang="zh">
            配重均衡时 FR 可兼顾弯速与稳定。要更快需提高油门时后轮牵引、减少甩尾；前端在加油时减载，需重视抑制推头（转向不足）。
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
            前轮既转向又驱动，但后轮同样重要：高速赛道宜让车尾稳定粘地；连续小弯可让收油时车尾更易摆动以加快转向。LSD 常用 1WAY（仅加速锁止）。
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
            发动机居中，加减速有利，转向敏锐；极限时前轮载荷少易转向不足，车尾一旦滑移速度很快。优先保证进弯旋转，再兼顾出弯牵引，前后下压力也要均衡。
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
            发动机后置，两驱车加减速性能突出；但进弯前端载荷更少，易强转向不足，越限后重尾像摆锤瞬间转为转向过度。进弯初期旋转性能是关键。
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
            随基础布局表现不同，但高稳定性往往使进弯变钝；出弯本就稳定，应侧重进弯旋转，前后扭矩分配很重要；常见前 1WAY、后 2WAY LSD。
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
