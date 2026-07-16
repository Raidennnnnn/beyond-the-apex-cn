import i1RmR4R8cwux0Ec from "../../assets/images/i1RmR4R8cwux0Ec.webp";
import i1Yht9Z5JIwWvG from "../../assets/images/i1Yht9Z5JIwWvG.webp";
import i1FGFwDxJ4w277c from "../../assets/images/i1FGFwDxJ4w277c.webp";

const EffectOfDampingForce = () => (
  <>
    <div className="manual_detail">
      <div className="content_header">
        <h1>1-5 : Effect of Damping Force / 阻尼力的作用</h1>
        <h2>
          The state of vibration varies with damping force /
          振动状态随阻尼力而变化
        </h2>
      </div>
      <div className="body">
        <div className="bilingual">
          <p lang="en">
            So far, we have considered vibration in a system consisting of a
            spring and a weight, and have seen that resonance can become a
            problem when the system is driven at its natural frequency. There
            are several ways to reduce the effects of resonance, but the most
            common is to introduce a damper into the system. A damper is a
            device that dissipates vibration by converting kinetic energy into
            thermal energy. However, the behavior of the system is significantly
            influenced by the amount of damping force present. Let us now take a
            closer look at how differences in damping affect the phenomenon of
            vibration.
          </p>
          <p lang="zh">
            至此，我们考察了由弹簧与重物组成的振动系统，并看到当系统以固有频率被驱动时，共振可能成为问题。减轻共振影响的方法有多种，最常见的是在系统中加入阻尼器。阻尼器通过把动能转换为热能来消散振动。不过，系统行为深受阻尼力大小影响。下面更仔细地看阻尼差异如何影响振动现象。
          </p>
        </div>

        <h3 className="section-header">
          ● Free vibration with a differing damping ratio /
          不同阻尼比下的自由振动
        </h3>

        <div className="bilingual">
          <p lang="en">
            The vibration described so far results from the interaction between
            the elastic force of the spring and the inertia of the mass, but if
            a damper is introduced into the system, the vibration is gradually
            reduced and the motion eventually stops. During this process, the
            magnitude of the damping force influences how quickly the vibration
            decays. The damping ratio is a measure of the strength of the
            damper’s effect relative to the inertia of the mass and the
            elasticity of the spring.
          </p>
          <p lang="zh">
            至此描述的振动来自弹簧弹力与质量惯性的相互作用；但若在系统中加入阻尼器，振动会逐渐减小，运动最终停止。在此过程中，阻尼力大小影响振动衰减的快慢。阻尼比衡量阻尼器作用相对于质量惯性与弹簧弹性的强弱。
          </p>
        </div>

        <p className="image">
          <img alt="" src={i1RmR4R8cwux0Ec} />
        </p>
        <div className="bilingual">
          <p className="caption" lang="en">
            Fig. 1-5-1: Examples of vibration of the damping system.
          </p>
          <p className="caption" lang="zh">
            图1-5-1：阻尼系统振动示例。
          </p>
        </div>

        <div className="bilingual">
          <p lang="en">
            If the damping ratio is greater than 1, the motion of the system
            returns to equilibrium without oscillating because the damping force
            dominates the effects of the spring and mass. This state is called
            overdamping. In this condition, the displacement decreases with time
            and approaches zero without oscillation. If the damping ratio is
            less than 1, the system is underdamped, meaning the restoring force
            of the spring and the inertia of the mass are relatively strong
            compared to the damping force. In this case, the amplitude of
            vibration decreases with time, and the period of vibration becomes
            longer compared to the undamped case while the system continues to
            oscillate. This state is called underdamping. When the damping ratio
            is 0, no damping force is present, and the system behaves as if no
            damper is installed; the vibration continues without decay.
            Furthermore, if the damping ratio is equal to 1, the system reaches
            a critical condition at the boundary between oscillatory and
            non-oscillatory motion. This state is called critical damping.
          </p>
          <p lang="zh">
            若阻尼比大于 1，阻尼力压过弹簧与质量的作用，系统运动不振荡地回到平衡——称为过阻尼。此时位移随时间减小并趋近于零，无振荡。若阻尼比小于
            1，系统为欠阻尼：相对阻尼力而言，弹簧恢复力与质量惯性更强。振幅随时间减小，振动周期比无阻尼时更长，同时系统继续振荡——称为欠阻尼。阻尼比为
            0
            时无阻尼力，系统如同未装阻尼器，振动不衰减。若阻尼比等于
            1，系统处于振荡与非振荡的临界边界——称为临界阻尼。
          </p>
        </div>

        <p className="image">
          <img alt="" src={i1Yht9Z5JIwWvG} />
        </p>
        <div className="bilingual">
          <p className="caption" lang="en">
            Fig. 1-5-2: Car suspension damper. The damping ratio is an important
            indicator when tuning the suspension. As a general guideline, it is
            typically around 0.1 to 0.3 for standard passenger cars, around 0.5
            for sports cars and around 0.7 for race cars, although there are
            exceptions to these values.
          </p>
          <p className="caption" lang="zh">
            图1-5-2：汽车悬架阻尼器。调校悬架时，阻尼比是重要指标。一般参考：普通乘用车约
            0.1～0.3，跑车约 0.5，赛车约 0.7——但也有例外。
          </p>
        </div>

        <div className="bilingual">
          <p lang="en">
            To prevent vibration from being transmitted between vibrating
            machinery and its supporting structure, components such as rubber
            mounts, tires, springs and dampers are often used. It is common to
            model the vibration system, including these supporting elements, as
            shown in Fig. 1-5-3, to understand how vibration affects both the
            machinery and its base. For example, a suspension system can be
            modeled as a single unit consisting of mass, springs and dampers to
            evaluate its vibration characteristics. This will be discussed
            further in Part 2.
          </p>
          <p lang="zh">
            为防止振动在振动机械与其支承结构之间传递，常使用橡胶支座、轮胎、弹簧与阻尼器等部件。通常把包含这些支承元件的振动系统按图1-5-3建模，以理解振动如何影响机械及其基础。例如，可将悬架建模为由质量、弹簧与阻尼器组成的单元，以评估其振动特性——第2节将进一步讨论。
          </p>
        </div>

        <p className="image">
          <img alt="" src={i1FGFwDxJ4w277c} />
        </p>
        <div className="bilingual">
          <p className="caption" lang="en">
            Fig. 1-5-3: Model of base vibration.
          </p>
          <p className="caption" lang="zh">
            图1-5-3：基础振动模型。
          </p>
        </div>
      </div>
    </div>
  </>
);

export default EffectOfDampingForce;
