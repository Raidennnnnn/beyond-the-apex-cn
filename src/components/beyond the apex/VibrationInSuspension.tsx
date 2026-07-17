import i1RFW6QLvGZT8SH from "../../assets/images/i1RFW6QLvGZT8SH.webp";
import i1j1dvHo7ujFiG from "../../assets/images/i1j1dvHo7ujFiG.webp";
import i1yh5Pio2Jztu from "../../assets/images/i1yh5Pio2Jztu.webp";

const VibrationInSuspension = () => (
  <>
    <div className="manual_detail">
      <div className="content_header">
        <h1 className="bilingual-title"><span lang="en">1-8 : Vibration in Suspension</span><span className="bilingual-sep"> / </span><span lang="zh">悬架上产生的振动</span></h1>
        <h2 className="bilingual-title"><span lang="en">Vibration in a multi-degree freedom system</span><span className="bilingual-sep"> / </span><span lang="zh">多自由度系统的振动</span></h2>
      </div>
      <div className="body">
        <div className="bilingual">
          <p lang="en">
            To simplify the discussion, we have examined the fundamentals of vibration using a basic model that combines the elements of a spring, mass and damper. However, an actual vehicle is a vibration system made up of multiple interacting elements. Before considering vibration control, such as suspension tuning, let us first examine the basic characteristics of these elements within a vibration-control system.
          </p>
          <p lang="zh">
            为简化讨论，我们用弹簧、质量与阻尼器组合的基本模型考察了振动基础。然而，实际车辆是由多个相互作用元件组成的振动系统。在考虑悬架调校等振动控制之前，先把握这些元件在振动控制系统中的基本特性。
          </p>
        </div>

        <h3 className="section-header bilingual-title"><span lang="en">● Vibration characteristics of the suspension</span><span className="bilingual-sep"> / </span><span lang="zh">悬架的振动特性</span></h3>

        <div className="bilingual">
          <p lang="en">
            Although a vehicle suspension includes various mechanisms, it can be represented fundamentally as a vibration system consisting of mass, a spring and a damper, as shown in Fig. 1-8-1. The spring and damper located between the wheel and the vehicle body represent the suspension system, while the elements between the road surface and the wheel represent the tires.
          </p>
          <p lang="zh">
            尽管车辆悬架包含多种机构，本质上可表示为由图1-8-1 所示的质量、弹簧与阻尼器组成的振动系统。车轮与车身之间的弹簧与阻尼器代表悬架；路面与车轮之间的元件代表轮胎。
          </p>
        </div>

        <p className="image">
          <img alt="" src={i1RFW6QLvGZT8SH} />
        </p>
        <div className="bilingual">
          <p className="caption" lang="en">
            Fig. 1-8-1: Model of one wheel (quarter of the vehicle vibration). The tire, spring and damper each exhibit distinct vibration characteristics within the system.
          </p>
          <p className="caption" lang="zh">
            图1-8-1：单轮（1/4 车辆）振动模型。轮胎、弹簧与阻尼器在系统中各有不同的振动特性。
          </p>
        </div>

        <div className="bilingual">
          <p lang="en">
            Let us examine the vibration frequencies acting in this model (Fig. 1-8-2). At very low frequencies, near a stationary state, the displacement of the vehicle body closely follows the displacement of the road undulation, so the amplitude ratio is approximately 1. As the frequency is gradually increased, the amplitude also increases. At a certain frequency, the amplitude reaches a peak, corresponding to resonance of the upper mass supported by the spring. If the frequency is increased further, the amplitude decreases, but at another frequency it rises again as resonance occurs in the lower portion of the system, associated with the wheel and tire. Beyond this point, as the frequency continues to increase, the amplitude decreases once more and eventually approaches zero.
          </p>
          <p lang="zh">
            考察该模型中的振动频率（图1-8-2）。极低频、接近静止时，车身位移紧跟路面起伏位移，振幅比约等于 1。频率逐渐升高时振幅也增大；某一频率处振幅达到峰值，对应弹簧支承的上方质量（簧上）共振。继续升高频率，振幅减小，但在另一频率又因系统下部（车轮与轮胎，簧下）共振而再次上升。再往上，振幅再次减小并最终趋近于零。
          </p>
        </div>

        <p className="image">
          <img alt="" src={i1j1dvHo7ujFiG} />
        </p>
        <div className="bilingual">
          <p className="caption" lang="en">
            Fig. 1-8-2: Change as vibration frequency increases. Resonance of the body occurs at relatively low frequencies, while resonance of the wheel occurs at higher frequencies.
          </p>
          <p className="caption" lang="zh">
            图1-8-2：振动频率升高时的变化。车身共振出现在相对较低的频率；车轮共振出现在更高频率。
          </p>
        </div>

        <div className="bilingual">
          <p lang="en">
            Resonance occurred twice in the example above, but a vibration system may exhibit multiple resonant frequencies depending on how it can move. The number of independent ways in which a system can move is referred to as its degree of freedom. In this case, the tire and the vehicle body can each move vertically, resulting in two degrees of freedom and therefore two natural frequencies, which correspond to two resonant peaks.
          </p>
          <p lang="zh">
            上例中共振出现两次；振动系统可能有多个共振频率，取决于它能如何运动。系统独立运动方式的数量称为自由度。本例中，轮胎与车身各自可沿竖直方向运动，故有两个自由度、两个固有频率，对应两个共振峰。
          </p>
        </div>

        <div className="bilingual">
          <p lang="en">
            The first resonance is often referred to as the primary resonance, and the second as the secondary resonance. In practice, a system may have many modes of vibration, but in engineering, the lower-order resonances are typically of greatest importance, while higher-order resonances are often less significant. In this example, the resonance associated with the body is more important than that of the wheel and tire. This is because, even when similar amounts of energy are involved, lower-frequency vibrations tend to produce larger amplitudes and have a greater influence on the overall behavior of the system.
          </p>
          <p lang="zh">
            第一次共振常称一次共振，第二次称二次共振。实际中系统可有多种振型，但工程上通常最重视低阶共振，高阶共振往往次要。本例中，与车身相关的共振比车轮与轮胎的共振更重要——因为即便能量相近，低频振动往往振幅更大，对系统整体行为影响也更大。
          </p>
        </div>

        <p className="image">
          <img alt="" src={i1yh5Pio2Jztu} />
        </p>
        <div className="bilingual">
          <p className="caption" lang="en">
            Fig. 1-8-3: Performing the suspension evaluation of the Nissan GT-R at the Nürburgring involved testing the suspension across a range of vibration frequencies and analyzing the frequency response.
          </p>
          <p className="caption" lang="zh">
            图1-8-3：在纽博格林对日产 GT-R 进行悬架评估时，会在一系列振动频率下测试悬架并分析频率响应。
          </p>
        </div>
      </div>
    </div>
  </>
);

export default VibrationInSuspension;
