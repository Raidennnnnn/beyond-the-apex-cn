const DrivetrainSettings = () => (
  <>
    <div className="manual_detail">
      <div className="content_header">
        <h1>Drivetrain / 传动系统</h1>
      </div>
      <div className="body">
        <h3 className="section-header">
          ● LSD / ● LSD
        </h3>

        <h3>
          Changing the Limit Changes Maneuverability / 锁止特性改变可驾性
        </h3>

        <div className="bilingual">
          <p lang="en">
            Initial torque refers to the preload applied to the LSD (Limited-Slip Differential), influencing how quickly it begins to act. Higher preload causes the differential to engage more readily, improving traction under acceleration, while lower preload allows a more gradual response.
            <br />
            <br />
            In general, increasing initial torque can accentuate the inherent handling characteristics of a drivetrain layout. In rear-wheel-drive cars, it can make oversteer more pronounced, while in front-wheel-drive cars it can increase understeer. Although traction may improve, this can make cornering more demanding, so initial torque should be adjusted to suit the desired handling balance.
            <br />
            <br />
            Another adjustable parameter is how the LSD behaves under acceleration and deceleration. The acceleration setting determines how strongly the differential locks when throttle is applied. A higher setting increases locking force, improving traction and helping the car accelerate out of corners more effectively. However, it can also accentuate the car’s handling characteristics, making it more difficult to guide the car precisely on corner exit.
            <br />
            <br />
            The deceleration setting controls how strongly the LSD locks when the throttle is released. A higher setting increases stability during braking and corner entry, allowing later braking and a more controlled approach to the turn. However, it can also make the car harder to rotate, and is generally better suited to drivers who are able to manage the resulting understeer.
          </p>
          <p lang="zh">
            初始扭矩决定 LSD 开始作用的时机；调高则油门响应快、更易锁止，调低则更柔和。提高初始扭矩会强化驱动形式固有性格：后驱更易甩尾，前驱更易推头，需权衡。
          </p>
        </div>

        <h3 className="section-header">
          ● Gear Ratio / ● 齿比
        </h3>

        <h3>
          Maintaining Power with a Close Ratio / 密齿比利于保持功率带
        </h3>

        <div className="bilingual">
          <p lang="en">
            Race cars operate on a wide range of circuits, from tight, technical layouts to tracks with long high-speed straights. To extract the best performance, gear ratios often need to be adjusted to suit the course. This typically involves changes to both the transmission ratios and the final drive.
            <br />
            <br />
            On tracks with many low- and medium-speed corners, acceleration out of turns is more important than top speed. In these cases, a close-ratio transmission helps keep the engine within its powerband, improving responsiveness between gears.
            <br />
            <br />
            On circuits with long straights, a setup favoring higher top speed is preferred, using wider spacing in the higher gears. This type of arrangement is known as a wide-ratio setup.
            <br />
            <br />
            The final drive ratio determines how the entire transmission behaves. A shorter (numerically higher) final drive improves acceleration but reduces top speed, while a longer (numerically lower) final drive increases top speed at the expense of acceleration. As a starting point, adjusting the final drive is the simplest way to tune gearing. Ideally, the engine should approach its rev limit in top gear near the end of the longest straight.
          </p>
          <p lang="zh">
            从连续弯到长直道的赛道各异，可通过变速箱与主减速齿比把发动机特性适配到场地。低中速弯多的赛道重视出弯加速，宜用密齿比保持转速；长直道多的则放宽高挡齿比追求极速。主减速比决定整套传动“性格”：数值更大加速更强、极速更低，反之亦然。
          </p>
        </div>
      </div>
    </div>
  </>
);

export default DrivetrainSettings;
