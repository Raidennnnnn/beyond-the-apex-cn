import i1EApAeIvqC82cc from "../../assets/images/i1EApAeIvqC82cc.webp";
import i1PN7KZ1AwVKRhH from "../../assets/images/i1PN7KZ1AwVKRhH.webp";
import i1WPcdNkMutoC from "../../assets/images/i1WPcdNkMutoC.webp";
import i1tdCIMuYKxaqSH from "../../assets/images/i1tdCIMuYKxaqSH.webp";
import i1yCrqoh3eHJYb from "../../assets/images/i1yCrqoh3eHJYb.webp";

const DrivetrainsAndWeightDistribution = () => (
  <>
    <div className="manual_detail">
      <div className="content_header">
        <h1 className="bilingual-title"><span lang="en">Drivetrains and Weight Distribution</span><span className="bilingual-sep"> / </span><span lang="zh">驱动形式与重量分配</span></h1>
      </div>
      <div className="body">
        <div className="bilingual">
          <p lang="en">
            Like size and weight, the drivetrain is another fundamental vehicle specification. Drivetrain layouts are typically described by two-letter combinations that indicate the engine position and the driven wheels, using “front,” “mid,” and “rear,” with the engine location listed first and the driven wheels second. Common layouts include FF (front-engine, front-wheel drive), FR (front-engine, rear-wheel drive), MR (mid-engine, rear-wheel drive), and RR (rear-engine, rear-wheel drive). This classification is important because the location of the engine—often the heaviest single component—and the wheels it drives have a major influence on weight distribution, traction, and overall vehicle dynamics.
          </p>
          <p lang="zh">
            与车身尺寸一样，“驱动形式”也是基本规格，由发动机位置与驱动轮决定，一般记为 FF、FR、MR、RR。车上最重的发动机放在何处、驱动哪组车轮，是决定重量平衡的关键因素。
          </p>
        </div>

        <div className="bilingual">
          <p lang="en">
            In cars with good weight balance, the engine’s power can be transmitted more effectively to the driven wheels, improving traction during acceleration and at launch. Braking performance also benefits, as balanced weight distribution helps maintain stability and control under deceleration.
          </p>
          <p lang="zh">
            重量平衡良好的车能更高效地把动力传到驱动轮，起步与加速更有利；制动时也不易过度前倾，减速更可靠。
          </p>
        </div>

        <div className="bilingual">
          <p lang="en">
            The most significant advantage, however, is in cornering. A well-balanced car distributes load more evenly across all four tires, improving grip and predictability. In contrast, poor weight balance can lead to uneven load transfer under lateral forces, increasing the risk of instability and loss of control.
          </p>
          <p lang="zh">
            重量平衡对过弯影响最大：离心力使车不稳，平衡不佳者提高弯速可能甩尾甚至失控。
          </p>
        </div>

        <div className="bilingual">
          <p lang="en">
            An idealized weight distribution is often described as 50:50 between the front and rear axles, as well as balanced left to right. This helps maximize the available grip at all four tires and promotes predictable handling. In practice, FR layouts can approach this balance more easily than other configurations. FF vehicles—along with many all-wheel-drive systems derived from FF layouts—tend to be front-heavy, while RR vehicles are typically rear-heavy. Many modern FF cars use transverse (sideways) engine layouts to improve packaging and partially mitigate front weight bias.
          </p>
          <p lang="zh">
            理想为前后、左右均约50:50。发动机前置、后轮驱动的 FR 较易接近。FF（及 FF 基础四驱）易头重，RR 易尾重。部分 FF 为改善配重将横置发动机纵置。
          </p>
        </div>

        <div className="bilingual">
          <p lang="en">
            That said, weight distribution alone does not determine performance. Through suspension tuning, tire selection, and driving technique, some of the disadvantages can be reduced. However, layout still matters: MR configurations are often favored in high-performance and racing applications because they allow for more centralized mass and superior balance, which can provide an advantage over even well-balanced FR cars.
          </p>
          <p lang="zh">
            重量平衡的劣势并非绝对，调校与驾驶可部分弥补；但 MR 赛车能胜均衡 FR，原因也在于此。
          </p>
        </div>

        <h3 className="section-header bilingual-title"><span lang="en">● Types of Drivetrains</span><span className="bilingual-sep"> / </span><span lang="zh">● 驱动形式种类</span></h3>

        <h3 className="bilingual-title"><span lang="en">FR [Front-Engine, Rear-Wheel Drive]</span><span className="bilingual-sep"> / </span><span lang="zh">FR［前置发动机、后轮驱动］</span></h3>

        <div className="bilingual">
          <p lang="en">
            This is a conventional layout, with the engine located at the front and the drive wheels at the rear. Vehicles with this configuration can achieve a relatively balanced weight distribution, contributing to stable and predictable handling. In addition to good handling characteristics, this layout offers clear steering feedback, as the front wheels are dedicated to steering while the rear wheels handle propulsion. However, traction can be a limitation on low-grip surfaces, as the driven rear wheels may have less load under certain conditions, making it more difficult to transmit power effectively.
          </p>
          <p lang="zh">
            将发动机置于乘员舱前方、驱动后轮的传统布局，最容易实现前后约50:50的理想重量分配。除出色的操控外，转向轮与驱动轮分离，转向手感没有怪癖也是优点。不过因路面状况不同，牵引力有时不易充分发挥。
          </p>
        </div>

        <p className="image">
          <img alt="" src={i1EApAeIvqC82cc} />
        </p>

        <h3 className="bilingual-title"><span lang="en">FF [Front-Engine, Front-Wheel Drive]</span><span className="bilingual-sep"> / </span><span lang="zh">FF［前置发动机、前轮驱动］</span></h3>

        <div className="bilingual">
          <p lang="en">
            This layout places both the engine and the driven wheels at the front. By concentrating the engine and transmission in the front, packaging efficiency is improved, allowing for a larger cabin and more usable interior space. However, this configuration typically results in a front-heavy weight distribution. Because the front wheels are responsible for both steering and delivering drive power, the available tire grip must be shared between turning and acceleration during cornering. This can limit performance and lead to understeer at higher loads. For these reasons, this layout is generally less suited to very high-powered applications, though it remains widely used due to its practicality, cost efficiency, and space advantages.
          </p>
          <p lang="zh">
            以前置发动机驱动前轮的方式。将沉重的发动机与变速箱都收在前舱内，适合打造宽敞乘员舱，但重量分配会偏向前部。加之前轮兼负驱动与转向，过弯时需在转向与驱动之间分配轮胎抓地力。总体而言不太适合高功率车型。
          </p>
        </div>

        <p className="image">
          <img alt="" src={i1yCrqoh3eHJYb} />
        </p>

        <h3 className="bilingual-title"><span lang="en">MR [Mid-Engine, Rear-Wheel Drive]</span><span className="bilingual-sep"> / </span><span lang="zh">MR［中置发动机、后轮驱动］</span></h3>

        <div className="bilingual">
          <p lang="en">
            This layout places the engine near the center of the car, driving the rear wheels. By concentrating mass close to the vehicle’s center of gravity, it reduces the yaw moment of inertia, allowing for quicker and more responsive changes in direction. This contributes to sharp and precise cornering performance. It also promotes good traction balance between the front and rear tires during acceleration and braking. For these reasons, this layout is widely used in high-performance sports cars and race vehicles.
          </p>
          <p lang="zh">
            将发动机置于前后轮之间并驱动后轮，亦称“中置（midship）”。发动机靠近车身中央，缩短相对重心的距离，可发挥锋利的过弯性能。加速、减速时前后轮胎也能发挥最大抓地力。是最利于行驶的纯正跑车、赛车的定番驱动布局。
          </p>
        </div>

        <p className="image">
          <img alt="" src={i1PN7KZ1AwVKRhH} />
        </p>

        <h3 className="bilingual-title"><span lang="en">RR [Rear-Engine, Rear-Wheel Drive]</span><span className="bilingual-sep"> / </span><span lang="zh">RR［后置发动机、后轮驱动］</span></h3>

        <div className="bilingual">
          <p lang="en">
            A rear-wheel-drive layout has the engine mounted in the rear overhang behind the wheels. This layout concentrates weight at the rear of the vehicle, pressing the rear wheels onto the road surface and improving traction and acceleration. However, it reduces load on the front wheels, which can make turn-in less responsive and lead to understeer when first entering a corner. Also, because of the heavy rear weight bias, if the rear end breaks away it can do so abruptly, requiring a high level of driving skill to recover.
          </p>
          <p lang="zh">
            将发动机安装在后悬、后轮后方并驱动后轮。重量集中于后部，使后轮更紧贴路面，牵引力与加速更有利。但前轮载荷变小，入弯初期易出现转向不足；后部偏重时一旦车尾甩出往往很突然，救车需要较高驾驶技术。
          </p>
        </div>

        <p className="image">
          <img alt="" src={i1WPcdNkMutoC} />
        </p>

        <h3 className="bilingual-title"><span lang="en">4WD [Four-Wheel Drive]</span><span className="bilingual-sep"> / </span><span lang="zh">4WD［四轮驱动］</span></h3>

        <div className="bilingual">
          <p lang="en">
            This configuration delivers power to all four wheels. Despite the increased weight, this layout is well suited for standing starts and acceleration due to its high level of traction. However, its stability can make it less responsive when turning. It is possible to adapt most drivetrains into four-wheel drive, but the base layout still has a strong influence on overall handling. Generally, either the front or rear wheels act as the primary drive wheels, with torque distributed to the others when slip is detected.
          </p>
          <p lang="zh">
            基本上由前后左右四轮驱动。除机构带来的重量增加外，是最适合起步与加速的驱动布局。不过因稳定性高，有时也会显得不易转弯。FF、FR、MR、RR 等均可四驱化，但以何种布局为基底，操控差异很大。一般以前后轮之一为主驱动轮，再按该轮打滑程度向另一端分配扭矩。
          </p>
        </div>

        <p className="image">
          <img alt="" src={i1tdCIMuYKxaqSH} />
        </p>
      </div>
    </div>
  </>
);

export default DrivetrainsAndWeightDistribution;
