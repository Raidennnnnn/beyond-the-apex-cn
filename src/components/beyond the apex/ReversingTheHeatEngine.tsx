import i103UNOkzfxMIhH from "../../assets/images/i103UNOkzfxMIhH.webp";
import i1G4EC2OCzelt from "../../assets/images/i1G4EC2OCzelt.webp";
import i1I1GDzb6IbXTdB from "../../assets/images/i1I1GDzb6IbXTdB.webp";

const ReversingTheHeatEngine = () => (
  <>
    <div className="manual_detail">
      <div className="content_header">
        <h1>3-6 : Reversing the Heat Engine / 让热机反向运转</h1>
        <h2>
          Differences in reversible and irreversible cycles /
          可逆循环与不可逆循环的差异
        </h2>
      </div>
      <div className="body">
        <div className="bilingual">
          <p lang="en">
            We have examined the theoretical efficiencies of the Carnot, Otto
            and Diesel Cycles, so why can&apos;t actual engines achieve these
            limits? Why does energy loss occur in practice? One reason is that
            the theoretical efficiencies of these cycles assume ideal,
            reversible processes, which require the piston to move slowly so
            that the system remains close to equilibrium. In real engines,
            however, such slow operation is impractical, and deviations from
            these ideal conditions lead to irreversible losses.
          </p>
          <p lang="zh">
            已经说明了卡诺、奥托、柴油循环的理论效率，但实际发动机为何达不到理论效率？换言之，实际发动机为何会发生能量损失？答案隐藏在这一点：要达到理论效率，必须把活塞非常缓慢地一点点移动。
          </p>
        </div>

        <h3 className="section-header">
          ● The reversible process of the Carnot Cycle /
          卡诺循环的可逆过程
        </h3>

        <div className="bilingual">
          <p lang="en">
            Let us return to the Carnot Cycle. If the processes are carried out
            in the order (1) → (2) → (3) → (4), we call this the forward cycle,
            and the reverse sequence (4) → (3) → (2) → (1) the reverse cycle.
            Assume that, in the forward Carnot Cycle, a certain amount of heat
            is transferred from the high-temperature reservoir to the
            low-temperature reservoir, and that the work produced is stored. If
            that stored work is then used to drive the reverse Carnot Cycle, the
            heat delivered to the low-temperature reservoir can be transferred
            back to the high-temperature reservoir. In this case, the stored
            work is entirely consumed, and the system—including the
            reservoirs—returns to its original state. In other words, the work
            produced by the forward Carnot Cycle can be used to reverse the
            process completely, restoring the initial conditions. This is
            possible because all processes in the Carnot Cycle are reversible:
            heat transfer occurs without finite temperature differences, and no
            irreversible effects are present. As a result, the Carnot Cycle can,
            in principle, be perfectly reversed.
          </p>
          <p lang="zh">
            再看卡诺循环。按（1）→（2）→（3）→（4）运转称为「顺行」；按（4）→（3）→（2）→（1）运转称为「逆行」。假定顺行时把一定量的热从高温热源移到低温热源，并把过程中产生的功储存起来；再用该储存功使卡诺循环逆行，则顺行时移动的热会从低温热源「完全原样」回到高温热源。此时顺行储存的功全部用于逆行，之后什么也不留下。也就是说，用顺行取出并储存的功去做逆行，可回到「完全原样」的初始状态。之所以能如此，是因为卡诺循环中完全不存在有温度差的物体相互接触，因而完全没有无用热移动；所有过程都是可逆变化，故可逆的逆行运转成为可能。
          </p>
        </div>

        <p className="image">
          <img alt="" src={i103UNOkzfxMIhH} />
        </p>
        <div className="bilingual">
          <p className="caption" lang="en">
            Fig. 3-6-1: Reversed Carnot Cycle.
          </p>
          <p className="caption" lang="zh">
            图3-6-1：卡诺循环的逆行运转。
          </p>
        </div>

        <p className="image">
          <img alt="" src={i1G4EC2OCzelt} />
        </p>
        <div className="bilingual">
          <p className="caption" lang="en">
            Fig. 3-6-2: Reversible nature of the Carnot Cycle
          </p>
          <p className="caption" lang="zh">
            图3-6-2：卡诺循环的可逆性
          </p>
        </div>

        <h3 className="section-header">
          ● Reversed cycle of car engines is irreversible /
          汽车发动机的逆向循环不可逆
        </h3>

        <div className="bilingual">
          <p lang="en">
            Let us now consider the Otto Cycle and the Diesel Cycle. As before,
            suppose the work produced in the forward cycle is stored and then
            used to drive the reverse cycle. Even if all of the stored work is
            used, the heat transferred to the low-temperature reservoir during
            the forward cycle cannot be completely returned to the
            high-temperature reservoir. Only a portion of the heat can be
            restored, and the system cannot return to its exact original state.
          </p>
          <p lang="zh">
            那么奥托循环与柴油循环又如何？同样先顺行并把取出的功储存起来，再用该功做逆行。即便耗尽顺行储存的全部功，也无法把所有热从低温热源移回高温热源，一部分热无法还原。
          </p>
        </div>

        <div className="bilingual">
          <p lang="en">
            The reason for this is that, in the Otto and Diesel Cycles, heat
            transfer during processes (2) and (4) occurs across finite
            temperature differences—constant-volume heat addition and rejection
            in the Otto Cycle, and constant-pressure heat addition and
            (typically idealized) constant-volume heat rejection in the Diesel
            Cycle. These heat transfer processes are irreversible and do not
            contribute directly to useful work, resulting in losses as heat
            flows from higher to lower temperature. As a result, compared with
            the Carnot Cycle, a smaller portion of the heat input is converted
            into work. In a reversed operation, attempting to transfer heat from
            a lower temperature to a higher temperature across a temperature
            difference requires additional work, further illustrating the
            presence of irreversibility.
          </p>
          <p lang="zh">
            原因如下：奥托循环在（2）定容加热与（4）定容冷却、柴油循环在（2）定压加热与（4）定容冷却中，温度差终究不可避免。这些过程不产生功，却必然存在只从高温移向低温的无用热。因此相对卡诺循环，顺行时可取出的功量会因这部分无用热移动而减少。逆行时，又要在有温度差的过程中违背自然法则把热从低温移向高温，还需要额外的功。
          </p>
        </div>

        <div className="bilingual">
          <p lang="en">
            This leads to an important conclusion: If a thermodynamic cycle
            cannot be perfectly reversed, it indicates that irreversible
            processes—such as heat transfer across finite temperature
            differences—are present within the cycle. These irreversibilities
            are a fundamental source of energy loss and will be examined in more
            detail later.
          </p>
          <p lang="zh">
            因此可以说奥托循环与柴油循环是不可逆的。这还意味着一件重要的事：若热力学循环无法被完美逆转，则表明循环中存在不可逆过程（例如跨越有限温度差的热传递）。这些不可逆性是能量损失的根本来源，后文将更详细考察。
          </p>
        </div>

        <p className="image">
          <img alt="" src={i1I1GDzb6IbXTdB} />
        </p>
        <div className="bilingual">
          <p className="caption" lang="en">
            Fig. 3-6-3: The progressive and reversed cycle of a car engine
          </p>
          <p className="caption" lang="zh">
            图3-6-3：汽车发动机的顺行与逆行
          </p>
        </div>

        <div className="bilingual">
          <p lang="en">
            If the Carnot Cycle is reversible, what is left behind after
            carrying out a forward cycle and then a reverse cycle? Nothing is
            left behind—the system returns exactly to its original state. Sadi
            Carnot understood that a cycle with this property represents the
            ideal heat engine. If an engine were more efficient than the Carnot
            Cycle, it would imply a form of perpetual motion. However,
            perpetual motion is impossible according to the second law of
            thermodynamics, so such a possibility does not exist.
          </p>
          <p lang="zh">
            实际上，卡诺正是以「卡诺循环可逆」为关键，依次做顺行与逆行后看还留下什么，从而逻辑地导出「不存在超越卡诺循环的热机」。之后什么也不留下的卡诺循环是理想机构；若有比它更高效做功的机构，那就是永动机——但此类事物不存在，他由此也否定了（第一类）永动机的存在。
          </p>
        </div>
      </div>
    </div>
  </>
);

export default ReversingTheHeatEngine;
