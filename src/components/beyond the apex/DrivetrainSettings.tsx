const DrivetrainSettings = () => (
  <>
    <div className="manual_detail">
      <div className="content_header">
        <h1 className="bilingual-title"><span lang="en">Drivetrain</span><span className="bilingual-sep"> / </span><span lang="zh">传动系统</span></h1>
      </div>
      <div className="body">
        <h3 className="section-header">
          ● LSD / ● LSD
        </h3>

        <h3 className="bilingual-title"><span lang="en">Changing the Limit Changes Maneuverability</span><span className="bilingual-sep"> / </span><span lang="zh">作用方式也会改变操控性</span></h3>

        <div className="bilingual">
          <p lang="en">
            Initial torque refers to the preload applied to the LSD (Limited-Slip Differential), influencing how quickly it begins to act. Higher preload causes the differential to engage more readily, improving traction under acceleration, while lower preload allows a more gradual response.
          </p>
          <p lang="zh">
            初始扭矩是决定 LSD 开始作用时机的扭矩值：调高则对油门操作反应更快、LSD 更易锁止；调低则作用更温和。
          </p>
        </div>

        <div className="bilingual">
          <p lang="en">
            In general, increasing initial torque can accentuate the inherent handling characteristics of a drivetrain layout. In rear-wheel-drive cars, it can make oversteer more pronounced, while in front-wheel-drive cars it can increase understeer. Although traction may improve, this can make cornering more demanding, so initial torque should be adjusted to suit the desired handling balance.
          </p>
          <p lang="zh">
            提高 LSD 初始扭矩后，一般会强化该车驱动方式固有的操控特性：后驱车提高扭矩则转向过度、前驱车提高扭矩则转向不足倾向变强；两种情况都能获得强牵引力，但进弯变难这一坏处也会更突出。设定时须清楚意识所追求的操控。
          </p>
        </div>

        <div className="bilingual">
          <p lang="en">
            Another adjustable parameter is how the LSD behaves under acceleration and deceleration. The acceleration setting determines how strongly the differential locks when throttle is applied. A higher setting increases locking force, improving traction and helping the car accelerate out of corners more effectively. However, it can also accentuate the car’s handling characteristics, making it more difficult to guide the car precisely on corner exit.
          </p>
          <p lang="zh">
            另一项须注意的设定是加速侧与减速侧的调整。加速侧调整油门踏下时的 LSD 作用：调强则驱动力增加，可更快通过弯道；但同时操控特性变化的倾向也变强，还要求尽快把车头转向出弯方向的驾驶技术。
          </p>
        </div>

        <div className="bilingual">
          <p lang="en">
            The deceleration setting controls how strongly the LSD locks when the throttle is released. A higher setting increases stability during braking and corner entry, allowing later braking and a more controlled approach to the turn. However, it can also make the car harder to rotate, and is generally better suited to drivers who are able to manage the resulting understeer.
          </p>
          <p lang="zh">
            另一方面减速侧设定是收油时 LSD 的作用方式：调强则进弯制动时姿态更稳，可把制动保留到极限、果断杀入；但转向性会明显受损（更难转弯），偏向上手设定，消除初期转向不足的技巧不可或缺。
          </p>
        </div>

        <h3 className="section-header bilingual-title"><span lang="en">● Gear Ratio</span><span className="bilingual-sep"> / </span><span lang="zh">● 齿比</span></h3>

        <h3 className="bilingual-title"><span lang="en">Maintaining Power with a Close Ratio</span><span className="bilingual-sep"> / </span><span lang="zh">密齿比利于维持功率带</span></h3>

        <div className="bilingual">
          <p lang="en">
            Race cars operate on a wide range of circuits, from tight, technical layouts to tracks with long high-speed straights. To extract the best performance, gear ratios often need to be adjusted to suit the course. This typically involves changes to both the transmission ratios and the final drive.
          </p>
          <p lang="zh">
            从弯道连续的山路到拥有长直道的赛道，车辆行驶的舞台各不相同。此时改变传动系齿比，就能以最适合该舞台的形式拉出发动机特性。齿比变更受变速箱本身齿比与主减速齿比双方影响。
          </p>
        </div>

        <div className="bilingual">
          <p lang="en">
            On tracks with many low- and medium-speed corners, acceleration out of turns is more important than top speed. In these cases, a close-ratio transmission helps keep the engine within its powerband, improving responsiveness between gears.
          </p>
          <p lang="zh">
            例如低中速弯连续的赛道，比起极速延伸更重视出弯加速力。此时宜把变速箱各挡齿比拉近，使功率带更易维持。这种齿比称为密齿比。
          </p>
        </div>

        <div className="bilingual">
          <p lang="en">
            On circuits with long straights, a setup favoring higher top speed is preferred, using wider spacing in the higher gears. This type of arrangement is known as a wide-ratio setup.
          </p>
          <p lang="zh">
            相反，若是长直道决定胜负的赛道，可把五、六挡等高挡齿比做小（＝拉开齿比），做成极速能延伸的设定。这种齿比称为宽齿比。
          </p>
        </div>

        <div className="bilingual">
          <p lang="en">
            The final drive ratio determines how the entire transmission behaves. A shorter (numerically higher) final drive improves acceleration but reduces top speed, while a longer (numerically lower) final drive increases top speed at the expense of acceleration. As a starting point, adjusting the final drive is the simplest way to tune gearing. Ideally, the engine should approach its rev limit in top gear near the end of the longest straight.
          </p>
          <p lang="zh">
            另一方面主减速齿比左右整套变速箱的性格。同一变速箱下，主减速比做低则偏加速重视（到达最高速度下降），做高则偏提高最高速度（加速性能下降）。起初可不改各挡齿比，只改主减速比；以直道尽头最终挡是否切实到达红线区（是否拉满）为大致标准即可。
          </p>
        </div>
      </div>
    </div>
  </>
);

export default DrivetrainSettings;
