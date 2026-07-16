import i190ba9ypQPN0SB from "../../assets/images/i190ba9ypQPN0SB.webp";
import i1GtJC1fZ13n4b from "../../assets/images/i1GtJC1fZ13n4b.webp";
import i1HqXPrzbTtXXcc from "../../assets/images/i1HqXPrzbTtXXcc.webp";

const FrequencyResponse = () => (
  <>
    <div className="manual_detail">
      <div className="content_header">
        <h1>1-7 : Frequency Response / 频率响应</h1>
        <h2>
          For the analysis of vehicle motion and suspension /
          用于车辆运动与悬架分析
        </h2>
      </div>
      <div className="body">
        <h3 className="section-header">
          ● Grasping the difference in response to frequency excitation /
          把握对频率激励的响应差异
        </h3>

        <div className="bilingual">
          <p lang="en">
            A response such as amplitude and phase difference as functions of excitation frequency is referred to as a frequency response. So far, we have discussed phase difference and amplitude separately as they relate to excitation frequency, but now we will examine how both the phase and amplitude of a vibration system vary with frequency.
          </p>
          <p lang="zh">
            振幅、相位差等响应随激励频率变化的关系，称为频率响应。此前我们分别讨论了相位差与振幅如何随激励频率变化；现在则同时考察振动系统的相位与振幅如何随频率变化。
          </p>
        </div>

        <div className="bilingual">
          <p lang="en">
            In the vibration analysis of a car, frequency response is often evaluated using a Bode Plot. Fig. 1-7-1 shows a Bode Plot. The graph at the top is called the magnitude plot, and it shows the magnitude (gain) of the response relative to the excitation frequency (input). The graph at the bottom is called the phase plot, and it shows the phase difference between the response and the input.
          </p>
          <p lang="zh">
            在汽车振动分析中，频率响应常用波特图（Bode Plot）评估。图1-7-1 即为一例。上方为幅值图，表示响应相对激励频率（输入）的幅值（增益）；下方为相位图，表示响应与输入之间的相位差。
          </p>
        </div>

        <div className="bilingual">
          <p lang="en">
            So far, we have considered a vibration system consisting of a spring and a mass. To make the model more realistic, consider a system with a damper added (Fig. 1-7-2). To begin, we will examine the case where the damping ratio is less than 1, that is, an underdamped system.
          </p>
          <p lang="zh">
            此前我们考虑的是弹簧与质量组成的振动系统。为使模型更贴近实际，加入阻尼器（图1-7-2）。先考察阻尼比小于 1 的情况，即欠阻尼系统。
          </p>
        </div>

        <p className="image">
          <img alt="" src={i190ba9ypQPN0SB} />
        </p>
        <div className="bilingual">
          <p className="caption" lang="en">
            Fig. 1-7-1: Bode Plot showing the frequency response of a vibration system consisting of a spring, damper and mass.
          </p>
          <p className="caption" lang="zh">
            图1-7-1：弹簧、阻尼器与质量组成的振动系统频率响应波特图。
          </p>
        </div>

        <h3 className="section-header">
          ● Capturing the damping system’s vibration through the Bode Plot /
          用波特图把握阻尼系统的振动
        </h3>

        <div className="bilingual">
          <p lang="en">
            With this model in mind, let us gradually increase the frequency of vibration from its stationary state. When the frequency is very low, the amplitude ratio is approximately 1, meaning the amplitude of the response matches that of the excitation. From there, as the frequency increases, the amplitude rises and the phase difference becomes larger. At a certain frequency, the amplitude reaches a maximum; this point is referred to as resonance. Beyond this point, further increases in frequency reduce the amplitude, eventually bringing it close to zero. At low frequencies, the excitation and the spring move in the same direction and with the same rhythm, so the phase difference is 0 degrees. At the natural frequency, the phase difference is −90 degrees, and at very high frequencies, it approaches −180 degrees.
          </p>
          <p lang="zh">
            带着这一模型，从静止状态起逐渐提高振动频率。频率很低时，振幅比约等于 1，即响应振幅与激励振幅一致。随后频率升高，振幅增大，相位差也变大。某一频率处振幅达到最大——这一点称为共振。再升高频率，振幅减小并趋近于零。低频时激励与弹簧同向、同节奏，相位差为 0°；固有频率处相位差为 −90°；极高频率时趋近 −180°。
          </p>
        </div>

        <p className="image">
          <img alt="" src={i1GtJC1fZ13n4b} />
        </p>
        <div className="bilingual">
          <p className="caption" lang="en">
            Fig. 1-7-2: This model consists of a spring, damper and weight. The damper is incorporated in parallel with the spring to limit the amplitude at resonance and prevent excessive vibration.
          </p>
          <p className="caption" lang="zh">
            图1-7-2：该模型由弹簧、阻尼器与重物组成。阻尼器与弹簧并联，以限制共振时的振幅并防止过度振动。
          </p>
        </div>

        <p className="image">
          <img alt="" src={i1HqXPrzbTtXXcc} />
        </p>
      </div>
    </div>
  </>
);

export default FrequencyResponse;
