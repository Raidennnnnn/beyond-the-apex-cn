import i1C4XGXVPwo7gb from "../../assets/images/i1C4XGXVPwo7gb.webp";
import i1elqFN0sIDl9G from "../../assets/images/i1elqFN0sIDl9G.webp";
import i13fvk02sgoB78E from "../../assets/images/i13fvk02sgoB78E.webp";
import i1kqNsP2CP9ptG from "../../assets/images/i1kqNsP2CP9ptG.webp";

const ResonancePhenomenon = () => (
  <>
    <div className="manual_detail">
      <div className="content_header">
        <h1>1-4 : Resonance Phenomenon / 共振现象</h1>
        <h2>
          Resonance is a state of becoming non-resistant against external
          excitation / 共振是对外部激励变为无抵抗的状态
        </h2>
      </div>
      <div className="body">
        <div className="bilingual">
          <p lang="en">
            The phenomenon known as resonance complicates the study of systems such as suspension behavior and engine vibration. In practical applications, resonance must be avoided as much as possible, even when it cannot be eliminated entirely. To that end, let us first understand what resonance is.
          </p>
          <p lang="zh">
            称为共振的现象，使悬架行为与发动机振动这类系统的研究变得复杂。在实际应用中，即便无法完全消除，也应尽可能避免共振。为此，先弄清共振是什么。
          </p>
        </div>

        <p className="image">
          <img alt="" src={i1C4XGXVPwo7gb} />
        </p>
        <div className="bilingual">
          <p className="caption" lang="en">
            Fig. 1-4-1: When a system is allowed to vibrate freely, it oscillates at its natural frequency and not at any other frequency.
          </p>
          <p className="caption" lang="zh">
            图1-4-1：当系统被允许自由振动时，它以固有频率振荡，而不会以其他频率振荡。
          </p>
        </div>

        <h3 className="section-header">
          ● Free vibration and natural frequency / 自由振动与固有频率
        </h3>

        <div className="bilingual">
          <p lang="en">
            Let us consider a vibration system consisting of a spring and a weight. After stretching the system once, allow it to vibrate freely. This is called free vibration. Soon, the weight and spring settle into oscillation at a consistent frequency. The result is the same regardless of how strongly or gently the system is displaced. The number of vibrations per second is determined by the elasticity of the spring and the mass of the weight; this is called the natural frequency. This natural frequency is an inherent property of the system, and when it vibrates at this frequency, energy is exchanged continuously between the elasticity of the spring and the inertia of the weight.
          </p>
          <p lang="zh">
            考虑由弹簧与重物组成的振动系统。把系统拉伸一次后放开，让它自由振动——这叫做自由振动。不久，重物与弹簧会以某一稳定频率振荡。无论最初拉得多猛或多轻，结果都一样。每秒振动次数由弹簧弹性与重物质量决定，这称为固有频率。固有频率是系统的固有属性；以该频率振动时，能量在弹簧弹性与重物惯性之间持续交换。
          </p>
        </div>

        <p className="image">
          <img alt="" src={i1elqFN0sIDl9G} />
        </p>
        <div className="bilingual">
          <p className="caption" lang="en">
            Fig. 1-4-2: Under forced vibration, the system responds at the input frequency. The amplitude increases near the natural frequency (resonance) and decreases as the difference grows.
          </p>
          <p className="caption" lang="zh">
            图1-4-2：在强迫振动下，系统以输入频率响应。振幅在固有频率附近增大（共振），并随频率差增大而减小。
          </p>
        </div>

        <h3 className="section-header">
          ● Forced vibration and resonance / 强迫振动与共振
        </h3>

        <div className="bilingual">
          <p lang="en">
            Now let us forcibly stretch and compress the spring and the weight by hand. This is called forced vibration. If the system is driven at a frequency different from its natural frequency, resistance can be felt in the applied motion. When a vibration system operates at its natural frequency, other input frequencies do not align with its natural behavior. Whether vibration is applied externally or not, the system tends to respond according to its natural frequency, and inputs at other frequencies result in a reduced or less efficient response.
          </p>
          <p lang="zh">
            现在用手强制拉伸与压缩弹簧和重物——这叫做强迫振动。若驱动频率不同于固有频率，会在施力动作中感到阻力。振动系统按固有频率运行时，其他输入频率与其自然行为并不吻合。无论是否有外部振动，系统往往仍按固有频率响应；其他频率的输入则响应减弱或效率更低。
          </p>
        </div>

        <p className="image">
          <img alt="" src={i13fvk02sgoB78E} />
        </p>
        <div className="bilingual">
          <p className="caption" lang="en">
            Fig. 1-4-3: When vibration is applied at a system’s natural frequency, the response is maximized. The system efficiently absorbs energy from the input, causing the amplitude to increase. This phenomenon is known as resonance.
          </p>
          <p className="caption" lang="zh">
            图1-4-3：以系统固有频率施加振动时，响应最大。系统高效吸收输入能量，振幅随之增大。这一现象称为共振。
          </p>
        </div>

        <div className="bilingual">
          <p lang="en">
            What happens if the system is stretched and compressed at its natural frequency? In this case, little resistance is felt because the motion aligns with the system’s natural behavior. You will notice that the amplitude of vibration increases as energy is added. This occurs because the system absorbs energy from the external excitation rather than opposing it. The vibration will continue to grow as long as energy is supplied at this frequency.
          </p>
          <p lang="zh">
            若以固有频率拉伸与压缩系统会怎样？此时几乎感觉不到阻力，因为运动与系统的自然行为一致。你会发现，随着能量加入，振动振幅不断增大。这是因为系统吸收外部激励的能量，而不是对抗它。只要以该频率持续供能，振动就会继续增大。
          </p>
        </div>

        <div className="bilingual">
          <p lang="en">
            As explained above, the phenomenon in which vibration increases when external excitation matches the system’s natural frequency is called resonance, and the frequency at that point is known as the resonance frequency.
          </p>
          <p lang="zh">
            如上所述：当外部激励与系统固有频率一致、振动随之增大的现象，称为共振；此时的频率称为共振频率。
          </p>
        </div>

        <div className="bilingual">
          <p lang="en">
            For example, resonance in the suspension leads to a deterioration of ride comfort and tire contact with the road. In addition, if resonance occurs within the engine, components may be subjected to excessive stress and potential damage. For this reason, resonance must be controlled as much as possible. One way to limit its effects is through the use of a damping system. A damper absorbs vibrational energy and converts it into thermal energy, which is then dissipated. In this way, an effective damping system helps protect mechanical components from damage.
          </p>
          <p lang="zh">
            例如，悬架共振会导致乘坐舒适性与轮胎接地性恶化。此外，若发动机内部发生共振，零部件可能承受过大应力并受损。因此必须尽可能控制共振。限制其影响的方法之一是使用阻尼系统：阻尼器吸收振动能量并转换为热能散逸出去。有效的阻尼系统有助于保护机械部件免于损坏。
          </p>
        </div>

        <p className="image">
          <img alt="" src={i1kqNsP2CP9ptG} />
        </p>
        <div className="bilingual">
          <p className="caption" lang="en">
            Fig. 1-4-4: The engine can be viewed as a vibration system in which vibrations are generated by repeated combustion events. If resonance occurs within the engine, it can lead to excessive stress and potential damage to components such as the engine block or cylinder head.
          </p>
          <p className="caption" lang="zh">
            图1-4-4：发动机可视为一个振动系统，振动由反复燃烧产生。若发动机内部共振，可能导致缸体或缸盖等部件承受过大应力并受损。
          </p>
        </div>

        <div className="bilingual">
          <p lang="en">
            In the discussion so far, natural frequency and resonance frequency may appear to be the same, but this is not strictly the case. Natural frequency is determined by the mass of the system and the elasticity of the spring, while the resonance frequency is influenced by the presence of damping. If no damping is present, the natural frequency and resonance frequency coincide. However, when damping is introduced, the frequency at which maximum response occurs is slightly lower than the natural frequency. For clarity, the natural frequency of a system without damping is often referred to as the undamped natural frequency, while the frequency of maximum response in a damped system is sometimes described as the damped natural frequency.
          </p>
          <p lang="zh">
            至此的讨论中，固有频率与共振频率看似相同，但严格来说并非如此。固有频率由系统质量与弹簧弹性决定，而共振频率受阻尼影响。若无阻尼，二者重合；引入阻尼后，最大响应所在频率略低于固有频率。为表述清晰，无阻尼系统的固有频率常称为无阻尼固有频率；有阻尼系统中最大响应的频率有时称为有阻尼固有频率。
          </p>
        </div>
      </div>
    </div>
  </>
);

export default ResonancePhenomenon;
