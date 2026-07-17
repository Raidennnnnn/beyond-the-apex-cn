import i1kgjRd1KiwGpG from "../../assets/images/i1kgjRd1KiwGpG.webp";
import i1u98Rsq8thei from "../../assets/images/i1u98Rsq8thei.webp";
import i1McFBQfbzoyyEE from "../../assets/images/i1McFBQfbzoyyEE.webp";
import i1weAiJWHFfAd from "../../assets/images/i1weAiJWHFfAd.webp";

const EnginesLossOfEnergy = () => (
  <>
    <div className="manual_detail">
      <div className="content_header">
        <h1 className="bilingual-title"><span lang="en">3-7 : Engine&apos;s Loss of Energy</span><span className="bilingual-sep"> / </span><span lang="zh">发动机的能量损失</span></h1>
        <h2 className="bilingual-title"><span lang="en">The loss of energy is due to irreversible change</span><span className="bilingual-sep"> / </span><span lang="zh">能量损失源于不可逆变化</span></h2>
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
            此前说明热机理论效率时一再强调「必须把活塞非常缓慢地一点点移动」，正是为了不发生不可逆变化——因为不可逆变化才是能量损失的真相。这里具体来看。
          </p>
        </div>

        <h3 className="section-header bilingual-title"><span lang="en">● Loss of energy in engines</span><span className="bilingual-sep"> / </span><span lang="zh">发动机中的能量损失</span></h3>

        <div className="bilingual">
          <p lang="en">
            As shown previously, the Carnot Cycle transfers heat without finite
            temperature differences, allowing a perfectly reversible reverse
            cycle. In contrast, the Otto Cycle and the Diesel Cycle rely on heat
            transfer across temperature differences, making their processes
            irreversible and preventing a fully reversible reverse cycle.
          </p>
          <p lang="zh">
            如前所述，卡诺循环不伴随因温度差引起的热移动，因而可做可逆的逆行运转。而奥托与柴油循环自身包含因温度差引起的热移动这一不可逆过程，故无法做可逆的逆行运转。
          </p>
        </div>

        <div className="bilingual">
          <p lang="en">
            Thus far, we have focused on irreversible change arising from heat
            transfer across temperature differences. If irreversible processes
            are present within a heat engine cycle, a portion of the thermal
            energy cannot be converted into useful work and instead reduces the
            amount of work that can be obtained.
          </p>
          <p lang="zh">
            迄今作为不可逆变化的例子，我们只关注了因温度差引起的热移动；但只要热机运转过程中包含可归入不可逆变化的现象，正如上节所见，那就是无法作为功取出的热的运动，意味着可利用的功量在减少。
          </p>
        </div>

        <div className="bilingual">
          <p lang="en">
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
            实际发动机在气缸内通过燃料的化学变化产生热，再以该能量推动活塞做功。此时产生的热会造成温度差，引发不利的热移动；气缸与活塞之间还有摩擦，并产生声音与湍流；燃料的化学变化本身也是不可逆变化。这些现象一旦发生，绝不可能像倒放录像那样「完全原样」回到发生前的状态，因此是不可逆变化——一部分能量就此耗散，不再可用于有用功。
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
            发动机开发是与效率的较量。图为日产制 3.8 升 V 型 6 缸「VR38」发动机。
          </p>
        </div>

        <h3 className="section-header bilingual-title"><span lang="en">● Mechanical energy loss</span><span className="bilingual-sep"> / </span><span lang="zh">机械能量损失</span></h3>

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
            迄今话题限于热机，但实际上机械的能量损失全都因不可逆变化而产生。反过来说，高效机器就是尽可能不伴随不可逆变化而运转的机器。因此，要造出高效机器，理解何种现象属于不可逆变化、并尽可能不让其发生，是一件要紧的事。
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
          </p>
          <p lang="zh">
            阿特金森循环与奥托循环是同一热循环，一般说明为通过加长奥托循环的膨胀行程来多取功。若从「如何做成尽量不发生不可逆变化的发动机」来看，则可说阿特金森循环是延长过程（1）与（3）的绝热变化、并缩短作为不可逆变化的过程（4）定容冷却的热循环。顺便一提，高温绝热膨胀线与低温绝热压缩线永不相交，因此连接它们的定容过程必不可少。
          </p>
        </div>

        <div className="bilingual">
          <p lang="en">
            In a similar manner, when optimizing the efficiency of engines or
            other machines, the primary focus is on minimizing irreversible
            processes.
          </p>
          <p lang="zh">
            同样，考察发动机乃至一切机械的高效化工夫，都可以说：「一切都是为了不发生不可逆变化。」
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
            本田雅阁混合动力搭载的 2.0 升阿特金森循环 DOHC i-VTEC 发动机。
          </p>
        </div>
      </div>
    </div>
  </>
);

export default EnginesLossOfEnergy;
