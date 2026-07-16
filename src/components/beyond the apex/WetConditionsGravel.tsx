import i11svyRXsDZo4 from "../../assets/images/i11svyRXsDZo4.webp";
import i1wOyrjys9MMcuB from "../../assets/images/i1wOyrjys9MMcuB.webp";

const WetConditionsGravel = () => (
  <>
    <div className="manual_detail">
      <div className="content_header">
        <h1>Wet Conditions, Gravel / 湿地、砂石</h1>
      </div>
      <div className="body">
        <h3 className="section-header">
          ● Wet Conditions / ● 湿地
        </h3>

        <h3>
          Get the Best Out of Your Tires / 发挥轮胎性能
        </h3>

        <div className="bilingual">
          <p lang="en">
            In wet conditions, the coefficient of friction (μ) of the road surface is reduced, lowering overall grip. To compensate, several setup changes can be made.
            <br />
            <br />
            Spring rates, damping, and anti-roll bar stiffness are typically reduced compared with dry conditions to improve compliance and help the tires maintain contact with the surface. In some cases, rear anti-roll bar stiffness may be reduced significantly to improve stability. Excessively stiff suspension can reduce grip in low-traction conditions, making the car more prone to sudden loss of control, whereas a softer setup allows the tires to follow the surface more effectively. Camber angles are often reduced slightly compared to dry settings to maintain a larger contact patch during acceleration and braking. Where aerodynamic adjustment is available, increasing downforce at both the front and rear can help improve stability and grip in wet conditions.
            <br />
            <br />
            One of the simplest wet-weather adjustments is tire pressure. In heavy rain, slightly increasing pressure can help reduce the risk of hydroplaning by encouraging water to be cleared more effectively from the contact patch. In lighter rain, a small reduction in pressure can improve grip. Adjusting front and rear pressures is a quick way to fine-tune balance and is often one of the first changes made.
            <br />
            <br />
            If engine tuning is possible, the focus should be on smooth, usable low- and mid-range torque rather than peak power. Greater reliance on electronic control systems can also improve performance in wet conditions, with traction control and braking systems playing a significant role in maintaining stability.
          </p>
          <p lang="zh">
            雨天路面摩擦系数 μ 降低，总抓地大减。基本思路：弹簧、减衰、防倾杆比干地明显变软（有时拆除后防倾杆）；过硬不易接地，极限时易突然滑移。硬设定适合高总抓地的干地，低 μ 时需软设定换接地与渐进性。同时可选湿地胎纹、略增胎压、柔和 LSD 等。
          </p>
        </div>

        <h3>
          Suggested Suspension Settings / 悬架设定参考
        </h3>

        <p className="image">
          <img alt="" src={i1wOyrjys9MMcuB} />
        </p>

        <h3 className="section-header">
          ● Gravel / ● 砂石
        </h3>

        <h3>
          Improving Control / 提高可控性
        </h3>

        <div className="bilingual">
          <p lang="en">
            When setting up a car for gravel driving, the priority is flexibility and control. Unpaved surfaces are unpredictable, and even small changes in line can expose the car to different levels of grip. As cars pass, they also disturb the surface by kicking up dust, sand and loose gravel, further reducing consistency for those behind. A setup that is optimized purely for maximum performance on a smooth surface will lack the compliance needed to cope with these constant changes.
            <br />
            <br />
            One approach for loose surfaces is to use a setup that encourages rotation when the driver lifts off the throttle, while remaining more neutral under power. This allows the car’s attitude to be influenced by throttle input, making it easier to guide through corners. Such a balance can be achieved through differential settings that provide locking both on and off throttle, combined with careful adjustment of brake bias.
            <br />
            <br />
            Understeer and oversteer can be managed using similar principles to those used on paved surfaces, although the setup will typically be softer and more compliant. Ride height should be set according to surface conditions—while a lower center of gravity is beneficial, rough terrain and obstacles require sufficient clearance to avoid damage. On courses with jumps, aerodynamic balance should help keep the car stable in the air. Engine tuning should prioritize responsiveness over peak power.
            <br />
            <br />
            In general, achieving speed on gravel requires adapting core driving techniques to lower-grip conditions rather than applying the same approach used on a circuit.
          </p>
          <p lang="zh">
            砂石路面最重要的是灵活可控：路况多变，略改线 μ 就变，前车还会刨起石子。追求极限高抓的赛道设定难以应对。思路是留足悬架行程、偏软阻尼，允许车身移动以吸收冲击，用油门与转向修正轨迹，而非靠硬设定硬扛。
          </p>
        </div>

        <h3>
          Suggested Suspension Settings / 悬架设定参考
        </h3>

        <p className="image">
          <img alt="" src={i11svyRXsDZo4} />
        </p>
      </div>
    </div>
  </>
);

export default WetConditionsGravel;
