import i1ZXUwqf4A9N2EE from "../../assets/images/i1ZXUwqf4A9N2EE.webp";
import i1PvElN7ftPwaz from "../../assets/images/i1PvElN7ftPwaz.webp";
import i16pruiYxfxYBz from "../../assets/images/i16pruiYxfxYBz.webp";

const PhaseDifference = () => (
  <>
    <div className="manual_detail">
      <div className="content_header">
        <h1 className="bilingual-title"><span lang="en">1-6 : Phase Difference</span><span className="bilingual-sep"> / </span><span lang="zh">相位差</span></h1>
        <h2 className="bilingual-title"><span lang="en">Phase difference is the difference in the rhythm of the vibration</span><span className="bilingual-sep"> / </span><span lang="zh">相位差是振动节奏的差异</span></h2>
      </div>
      <div className="body">
        <div className="bilingual">
          <p lang="en">
            When a vehicle interacts with the undulations of a road surface, the suspension reduces the amplitude of the input transmitted to the vehicle body. As a result, the motion experienced by the body is less severe than the undulations of the road.
          </p>
          <p lang="zh">
            车辆与路面起伏相互作用时，悬架会减小传至车身的输入振幅。因此，车身感受到的运动比路面起伏更缓和。
          </p>
        </div>

        <p className="image">
          <img alt="" src={i1ZXUwqf4A9N2EE} />
        </p>
        <div className="bilingual">
          <p className="caption" lang="en">
            Fig. 1-6-1: The undulation of an actual road surface and the resulting motion of the vehicle body through the suspension are closely related. Let us focus on this relationship. Reducing the amplitude transmitted to the body is of paramount importance, but understanding how quickly the body responds to road input is also crucial.
          </p>
          <p className="caption" lang="zh">
            图1-6-1：实际路面起伏与经悬架传到车身的运动密切相关。关注这一关系：减小传至车身的振幅至关重要，但理解车身对路面输入响应有多快同样关键。
          </p>
        </div>

        <div className="bilingual">
          <p lang="en">
            Where the undulation of the road is treated as an input, it is important to understand how much of the vehicle’s response is reduced. However, that is not the only factor—the speed of the response to the input is also important.
          </p>
          <p lang="zh">
            把路面起伏当作输入时，理解车辆响应被削弱了多少很重要。但这不是唯一因素——对输入的响应速度同样重要。
          </p>
        </div>

        <p className="image">
          <img alt="" src={i1PvElN7ftPwaz} />
        </p>
        <div className="bilingual">
          <p className="caption" lang="en">
            Fig. 1-6-2: German suspension maker KW’s 7-post rig (underfloor).
          </p>
          <p className="caption" lang="zh">
            图1-6-2：德国悬架厂商 KW 的七柱试验台（床下）。
          </p>
        </div>

        <h3 className="section-header bilingual-title"><span lang="en">● Difference of the rhythm of vibration</span><span className="bilingual-sep"> / </span><span lang="zh">振动节奏的差异</span></h3>

        <div className="bilingual">
          <p lang="en">
            “Phase difference” is used to evaluate how quickly a vibration system responds to an input. Let us consider this again using a simple system consisting of a spring and a weight.
          </p>
          <p lang="zh">
            「相位差」用来评估振动系统对输入响应有多快。仍用弹簧与重物组成的简单系统来说明。
          </p>
        </div>

        <div className="bilingual">
          <p lang="en">
            When your hand applies motion at a frequency different from the natural frequency of the spring–mass system, why does resistance occur? As explained earlier, the response of the system does not fully align with the input when the driving frequency differs from the natural frequency. In other words, the motion imposed by the hand does not match the natural motion of the system. More specifically, this mismatch arises from a difference in timing between the applied force and the motion of the mass. This difference is referred to as the phase difference.
          </p>
          <p lang="zh">
            当手以不同于弹簧–质量系统固有频率的频率施力时，为何会感到阻力？如前所述，驱动频率偏离固有频率时，系统响应与输入并不完全一致。也就是说，手施加的运动与系统的自然运动不匹配。更具体地说，这种不匹配来自施加力与质量运动在时机上的差异——这一差异称为相位差。
          </p>
        </div>

        <div className="bilingual">
          <p lang="en">
            Look at Fig. 1-6-3. When vibration is applied at a low frequency, the force from the hand and the motion of the spring occur in the same direction and at the same rhythm. There is no mismatch between input and response at this stage, so the phase difference is 0 degrees (Fig. 1-6-3, top). However, as the input frequency increases significantly, the phase difference approaches 180 degrees, as the inertial force of the mass and the applied force act in opposite directions (Fig. 1-6-3, bottom). At the natural frequency of the system, the phase difference is 90 degrees (Fig. 1-6-3, middle).
          </p>
          <p lang="zh">
            看图1-6-3。以低频施加振动时，手的力与弹簧运动同向、同节奏；输入与响应无错位，相位差为 0°（图1-6-3上）。当输入频率显著升高时，质量的惯性力与施加力方向相反，相位差趋近 180°（图1-6-3下）。在系统固有频率处，相位差为 90°（图1-6-3中）。
          </p>
        </div>

        <p className="image">
          <img alt="" src={i16pruiYxfxYBz} />
        </p>
        <div className="bilingual">
          <p className="caption" lang="en">
            Fig. 1-6-3.
          </p>
          <p className="caption" lang="zh">
            图1-6-3。
          </p>
        </div>
      </div>
    </div>
  </>
);

export default PhaseDifference;
