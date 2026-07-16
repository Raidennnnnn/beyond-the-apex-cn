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
            我们已经考察了卡诺、奥托与柴油循环的理论效率，那么实际发动机为何达不到这些极限？实践中为何会发生能量损失？原因之一是：这些循环的理论效率假定理想、可逆过程，要求活塞缓慢运动以使系统接近平衡。真实发动机中，如此缓慢的运转并不实用，偏离理想条件便导致不可逆损失。
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
            回到卡诺循环。若按（1）→（2）→（3）→（4）运行，称为正向循环；按（4）→（3）→（2）→（1）运行，称为逆向循环。假定正向卡诺循环中，一定量的热从高温热源传向低温热源，并将所产生的功储存起来。若再用该储存功驱动逆向卡诺循环，则传至低温热源的热可全部送回高温热源。此时储存功被完全消耗，系统（含热源）回到初始状态。换言之，正向卡诺循环产生的功可用于完全逆转过程、恢复初始条件。之所以可能，是因为卡诺循环中所有过程都可逆：传热不跨越有限温度差，也无不逆效应。因此，卡诺循环原则上可被完美逆转。
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
            图3-6-1：逆向卡诺循环。
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
            <br />
            <br />
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
            <br />
            <br />
            This leads to an important conclusion: If a thermodynamic cycle
            cannot be perfectly reversed, it indicates that irreversible
            processes—such as heat transfer across finite temperature
            differences—are present within the cycle. These irreversibilities
            are a fundamental source of energy loss and will be examined in more
            detail later.
          </p>
          <p lang="zh">
            再看奥托循环与柴油循环。同样假定正向循环产生的功被储存，再用于驱动逆向循环。即便耗尽全部储存功，正向循环中传至低温热源的热也无法全部送回高温热源；只能恢复部分热量，系统无法回到完全相同的初始状态。
            <br />
            <br />
            原因在于：奥托与柴油循环中，（2）与（4）过程的传热跨越有限温度差——奥托循环为定容加热与定容放热，柴油循环为定压加热与（通常理想化的）定容放热。这些传热过程不可逆，且不直接贡献有用功，热从高温流向低温时造成损失。因此，与卡诺循环相比，输入热量中转化为功的比例更小。在逆向运转中，试图跨越温度差把热从低温送回高温还需要额外的功，进一步说明不可逆性的存在。
            <br />
            <br />
            由此得出重要结论：若热力学循环无法被完美逆转，则表明循环中存在不可逆过程——例如跨越有限温度差的热传递。这些不可逆性是能量损失的根本来源，后文将更详细考察。
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
            图3-6-3：汽车发动机的正向与逆向循环
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
            若卡诺循环可逆，则先正向再逆向运转后还留下什么？什么也不留下——系统精确回到初始状态。萨迪·卡诺理解到：具有这一性质的循环即代表理想热机。若有发动机比卡诺循环更高效，将意味着某种永动机；但根据热力学第二定律，永动机不可能，因此这种可能性不存在。
          </p>
        </div>
      </div>
    </div>
  </>
);

export default ReversingTheHeatEngine;
