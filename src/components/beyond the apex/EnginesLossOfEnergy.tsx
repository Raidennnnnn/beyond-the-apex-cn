import i1kgjRd1KiwGpG from "../../assets/images/i1kgjRd1KiwGpG.webp";
import i1u98Rsq8thei from "../../assets/images/i1u98Rsq8thei.webp";
import i1McFBQfbzoyyEE from "../../assets/images/i1McFBQfbzoyyEE.webp";
import i1weAiJWHFfAd from "../../assets/images/i1weAiJWHFfAd.webp";

const EnginesLossOfEnergy = () => (
  <>
    <div className="manual_detail">
      <div className="content_header">
        <h1>3-7 : Engine&apos;s Loss of Energy / 发动机的能量损失</h1>
        <h2>
          The loss of energy is due to irreversible change /
          能量损失源于不可逆变化
        </h2>
      </div>
      <div className="body">
        <div className="bilingual">
          <p lang="en">
            When explaining the theoretical efficiency of a heat engine, we
            have repeatedly noted that the piston must be moved gradually and at
            slow speeds. This is necessary to maintain reversible conditions and
            avoid irreversible changes. We now examine in more detail the nature
            of energy loss associated with irreversibility.
          </p>
          <p lang="zh">
            在说明热机理论效率时，我们一再强调活塞须缓慢、逐步移动。这是为了保持可逆条件、避免不可逆变化。下面更详细地考察与不可逆性相关的能量损失本质。
          </p>
        </div>

        <h3 className="section-header">
          ● Loss of energy in engines / 发动机中的能量损失
        </h3>

        <div className="bilingual">
          <p lang="en">
            As shown previously, the Carnot Cycle transfers heat without finite
            temperature differences, allowing a perfectly reversible reverse
            cycle. In contrast, the Otto Cycle and the Diesel Cycle rely on heat
            transfer across temperature differences, making their processes
            irreversible and preventing a fully reversible reverse cycle.
            <br />
            <br />
            Thus far, we have focused on irreversible change arising from heat
            transfer across temperature differences. If irreversible processes
            are present within a heat engine cycle, a portion of the thermal
            energy cannot be converted into useful work and instead reduces the
            amount of work that can be obtained.
            <br />
            <br />
            When an actual engine operates, chemical energy from the fuel is
            released as heat within the cylinder, and this energy is used to
            drive the piston and produce work. During this process, temperature
            differences arise, leading to irreversible heat transfer and
            associated losses. Friction between the piston and cylinder
            generates additional losses in the form of heat, noise and
            turbulence, and the chemical reactions of combustion are themselves
            irreversible. Because these processes are irreversible, the system
            cannot be returned exactly to its original state. In other words,
            part of the energy is dissipated through irreversible effects and is
            no longer available for useful work.
          </p>
          <p lang="zh">
            如前所述，卡诺循环在不跨越有限温度差的情况下传热，因而允许完美可逆的逆向循环。相对地，奥托循环与柴油循环依赖跨越温度差的传热，过程不可逆，无法实现完全可逆的逆向循环。
            <br />
            <br />
            至此我们主要关注因跨越温度差传热而产生的不可逆变化。若热机循环中存在不可逆过程，一部分热能就无法转化为有用功，从而减少可获得的功量。
            <br />
            <br />
            实际发动机运转时，燃料的化学能在气缸内以热的形式释放，并用于推动活塞做功。此过程中会出现温度差，导致不可逆传热及相关损失。活塞与气缸之间的摩擦还会以热、噪声与湍流等形式造成额外损失，燃烧本身的化学反应也不可逆。由于这些过程不可逆，系统无法精确回到初始状态。换言之，一部分能量通过不可逆效应耗散，不再可用于有用功。
          </p>
        </div>

        <p className="image">
          <img alt="" src={i1kgjRd1KiwGpG} />
        </p>
        <div className="bilingual">
          <p className="caption" lang="en">
            Engine development is a constant battle for efficiency. Pictured is
            a Nissan brand 3.8-liter V-6 [VR38] engine.
          </p>
          <p className="caption" lang="zh">
            发动机开发是与效率的持续较量。图为日产品牌 3.8 升 V6「VR38」发动机。
          </p>
        </div>

        <h3 className="section-header">
          ● Mechanical energy loss / 机械能量损失
        </h3>

        <div className="bilingual">
          <p lang="en">
            Up to this point, the discussion has focused on heat engines, but
            mechanical energy loss also arises from irreversible processes.
            Conversely, an efficient machine is one in which irreversibility is
            minimized. Therefore, understanding the nature of irreversible
            change and reducing it as much as possible is essential for
            improving efficiency.
          </p>
          <p lang="zh">
            至此讨论集中在热机，但机械能量损失同样源于不可逆过程。反过来，高效机器正是尽量减少不可逆性的机器。因此，理解不可逆变化的本质并尽可能加以抑制，对提高效率至关重要。
          </p>
        </div>

        <p className="image">
          <img alt="" src={i1u98Rsq8thei} />
        </p>
        <div className="bilingual">
          <p className="caption" lang="en">
            Fig. 3-7-1.
          </p>
          <p className="caption" lang="zh">
            图3-7-1。
          </p>
        </div>

        <div className="bilingual">
          <p lang="en">
            The Atkinson Cycle is closely related to the Otto Cycle, but
            increases work output by allowing a longer expansion process
            relative to compression. Developed to improve efficiency and reduce
            irreversibility, the Atkinson Cycle extends the adiabatic expansion
            process (3) relative to the compression process (1), increasing the
            amount of work extracted from the working gas. In practice, this is
            achieved by modifying the cycle so that the expansion ratio is
            greater than the compression ratio. As in the Otto Cycle, heat
            rejection occurs through a constant-volume process (4), and a
            constant-volume process is required to connect the adiabatic
            processes, since they do not intersect on a pressure–volume
            diagram.
            <br />
            <br />
            In a similar manner, when optimizing the efficiency of engines or
            other machines, the primary focus is on minimizing irreversible
            processes.
          </p>
          <p lang="zh">
            阿特金森循环与奥托循环密切相关，但通过使膨胀过程相对压缩更长来增加输出功。为提高效率并减少不可逆性，阿特金森循环相对压缩过程（1）延长绝热膨胀过程（3），从而从工作气体中提取更多功。实践中，这通过使膨胀比大于压缩比来实现。与奥托循环一样，放热经定容过程（4）完成；由于绝热过程在压力–体积图上不相交，需要定容过程将它们连接起来。
            <br />
            <br />
            同理，在优化发动机或其他机械的效率时，首要目标是尽量减少不可逆过程。
          </p>
        </div>

        <p className="image">
          <img alt="" src={i1McFBQfbzoyyEE} />
        </p>
        <div className="bilingual">
          <p className="caption" lang="en">
            Fig. 3-7-2: Atkinson Cycle.
          </p>
          <p className="caption" lang="zh">
            图3-7-2：阿特金森循环。
          </p>
        </div>

        <p className="image">
          <img alt="" src={i1weAiJWHFfAd} />
        </p>
        <div className="bilingual">
          <p className="caption" lang="en">
            Equipped on the Honda Accord hybrid is the 2.0-liter Atkinson Cycle
            DOHC i-VTEC engine.
          </p>
          <p className="caption" lang="zh">
            本田雅阁混合动力搭载 2.0 升阿特金森循环 DOHC i-VTEC 发动机。
          </p>
        </div>
      </div>
    </div>
  </>
);

export default EnginesLossOfEnergy;
