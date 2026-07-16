const SuspensionSettings2 = () => (
  <>
    <div className="manual_detail">
      <div className="content_header">
        <h1>Suspension ② / 悬架 ②</h1>
      </div>
      <div className="body">
        <h3 className="section-header">
          ● Wheel Alignment: Camber Angle / ● 车轮定位：外倾角
        </h3>

        <h3>
          The Positive Effect of Negative Camber / 负外倾对转向有利
        </h3>

        <div className="bilingual">
          <p lang="en">
            Camber angle is one of the most commonly adjusted alignment settings. Negative camber occurs when the tops of the wheels tilt inward when viewed from the front, while positive camber means the tops tilt outward.
            <br />
            <br />
            During cornering, body roll causes the car to lean toward the outside of the turn. By applying negative camber, the tire can maintain a larger contact patch under load, improving grip. In most cases, “increasing camber” refers to adding more negative camber.
            <br />
            <br />
            However, negative camber has drawbacks in straight-line driving. Because the tire is not fully upright, it can be more sensitive to road irregularities and may reduce straight-line traction. It can also increase rolling resistance and contribute to uneven tire wear, while reducing the effective contact patch during braking. The more extreme the camber setting, the greater these trade-offs, so adjustments should be made carefully.
            <br />
            <br />
            When setting negative camber, it is important to consider how load is distributed between the front and rear during cornering. If the front axle carries a higher load, increasing negative camber at the front relative to the rear can help maintain grip and reduce understeer.
            <br />
            <br />
            Positive camber is rarely used in performance driving, as it generally reduces grip and stability.
          </p>
          <p lang="zh">
            正面看，胎面上端内收为负外倾，下端内收为正外倾。弯中车身外倾，预置负外倾可在转弯时让轮胎更垂直于地面、获得牵引。
          </p>
        </div>

        <h3 className="section-header">
          ● Wheel Alignment/Toe Angle / ● 车轮定位：前束角
        </h3>

        <h3>
          A Shallow Angle with a Deep Effect on Stability / 影响稳定性的细微角度
        </h3>

        <div className="bilingual">
          <p lang="en">
            Toe angle is the angle of the wheels when viewed from above. It plays an important role in stability, particularly when load shifts between the left and right sides during cornering. As load transfers to the outside wheel, its angle influences how the car responds, making toe settings an important factor in overall balance.
            <br />
            <br />
            Toe-in refers to the front of the wheels pointing inward, while toe-out means they point outward. In general, front toe-out and rear toe-in tend to promote more responsive turn-in, while front toe-in and rear toe-out increase stability but can reduce agility. Small amounts of front toe-out are often used to improve steering response during cornering.
            <br />
            <br />
            Toe angle is closely related to factors such as wheelbase, track width, camber and power. It is usually one of the final adjustments made, often to fine-tune handling characteristics after other settings have been established. Because excessive toe increases rolling resistance and tire wear, adjustments are typically kept very small. Changes to rear toe in particular can have a significant effect on stability, so front settings are usually adjusted first, with only minor changes made at the rear.
          </p>
          <p lang="zh">
            俯视时前轮夹角；内八字为前束内，外八字为前束外。弯中载荷向外侧轮转移，外侧轮朝向强烈影响稳定；前束内常增直线稳定，前束外常增灵敏但可能不稳。
          </p>
        </div>

        <h3 className="section-header">
          ● Anti-Roll Bar/Stabilizer Stiffness / ● 防倾杆刚度
        </h3>

        <h3>
          A Final Tweak / 最后调味
        </h3>

        <div className="bilingual">
          <p lang="en">
            An anti-roll bar is a torsion spring that connects the left and right suspension arms. It works by resisting differences in suspension movement between the two sides, reducing body roll during cornering and helping maintain a more consistent contact patch. Its stiffness can be described in terms similar to a spring rate, and increasing front bar stiffness generally sharpens response but can also affect balance.
            <br />
            <br />
            When adjusting an anti-roll bar, it is important to maintain an appropriate relationship with the suspension springs. If the bar is too stiff relative to the springs, it can transfer load too aggressively and may cause the inside wheel to unload or lift, reducing traction.
            <br />
            <br />
            Handling balance can also be influenced by adjusting front and rear anti-roll bar stiffness. However, these changes are typically used to fine-tune behavior after spring and damper settings have been established, as large adjustments can make the setup more difficult to control. Anti-roll bars are best treated as a final tuning tool rather than the primary means of adjustment.
          </p>
          <p lang="zh">
            防倾杆用扭杆弹簧连接左右下摆臂，一侧压缩时另一侧产生回正力，抑制侧倾、改善接地；刚度与弹簧类似可更换调节，通常作最后微调。
          </p>
        </div>
      </div>
    </div>
  </>
);

export default SuspensionSettings2;
