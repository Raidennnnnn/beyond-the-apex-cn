import i1ELHgwVovbYF from "../../assets/images/i1ELHgwVovbYF.webp";
import i1UwgMdfRwbsvSB from "../../assets/images/i1UwgMdfRwbsvSB.webp";
import i1UYBjxgO41K4b from "../../assets/images/i1UYBjxgO41K4b.webp";
import i1RRxErXghx8qEE from "../../assets/images/i1RRxErXghx8qEE.webp";
import i1oChgHWRovTZb from "../../assets/images/i1oChgHWRovTZb.webp";
import i1fke6hyNNXW3uB from "../../assets/images/i1fke6hyNNXW3uB.webp";
import i1F3xA8LZwUgH from "../../assets/images/i1F3xA8LZwUgH.webp";
import i1K1doYFZunxkuB from "../../assets/images/i1K1doYFZunxkuB.webp";

const TheoreticalEfficiencyOfCarEngines = () => (
  <>
    <div className="manual_detail">
      <div className="content_header">
        <h1 className="bilingual-title"><span lang="en">3-4 : Theoretical Efficiency of Car Engines</span><span className="bilingual-sep"> / </span><span lang="zh">汽车发动机的理论效率</span></h1>
        <h2 className="bilingual-title"><span lang="en">Investigating the theoretical efficiencies of the Otto Cycle and Diesel Cycle</span><span className="bilingual-sep"> / </span><span lang="zh">考察奥托循环与柴油循环的理论效率</span></h2>
      </div>
      <div className="body">
        <h3 className="section-header bilingual-title"><span lang="en">● Otto Cycle</span><span className="bilingual-sep"> / </span><span lang="zh">奥托循环</span></h3>

        <div className="bilingual">
          <p lang="en">
            Now that we understand the concept of an ideal heat engine, let us
            consider a typical automotive engine. Modern gasoline engines are
            based on the four-stroke, or Otto Cycle, developed by Nikolaus
            Otto. The four processes of the Otto Cycle are (1) adiabatic
            compression, (2) constant-volume heat addition, (3) adiabatic
            expansion and (4) constant-volume heat rejection. Constant-volume
            heat addition and rejection refer to heating and cooling the working
            gas within the cylinder without a change in volume.
          </p>
          <p lang="zh">
            理解了理想热机的概念后，再来看典型的汽车发动机。现代汽油机以尼古拉斯·奥托提出的四冲程——即奥托循环——为基础。奥托循环的四个过程是：（1）绝热压缩、（2）定容加热、（3）绝热膨胀、（4）定容放热。定容加热与定容放热，指在气缸容积不变的情况下加热或冷却工作气体。
          </p>
        </div>

        <p className="image">
          <img alt="" src={i1ELHgwVovbYF} />
        </p>
        <div className="bilingual">
          <p className="caption" lang="en">
            Fig. 3-4-1: Processes of the Otto Cycle.
          </p>
          <p className="caption" lang="zh">
            图3-4-1：奥托循环过程。
          </p>
        </div>

        <div className="bilingual">
          <p lang="en">
            Like the Carnot Cycle, the maximum theoretical efficiency of the
            Otto Cycle can be illustrated using an idealized air-standard model
            with high- and low-temperature reservoirs and quasi-static piston
            motion. However, in the Otto Cycle, the constant-volume processes
            (2) and (4) involve heat transfer across finite temperature
            differences, which cannot be avoided. Because the Otto Cycle does
            not include isothermal heat transfer, heat must flow between the
            reservoirs and the working gas with a temperature difference,
            leading to irreversible losses. As a result, the Otto Cycle is
            inherently less efficient than the Carnot Cycle operating between
            the same temperature limits.
          </p>
          <p lang="zh">
            与卡诺循环类似，可用带高、低温热源且活塞准静态运动的理想空气标准模型，说明奥托循环的最大理论效率。但在奥托循环中，（2）与（4）的定容过程必然伴随跨越有限温度差的热传递。由于奥托循环不含等温传热，热必须在热源与工作气体之间带着温度差流动，造成不可逆损失。因此，在相同温度界限下，奥托循环本质上低于卡诺循环的效率。
          </p>
        </div>

        <p className="image">
          <img alt="" src={i1UwgMdfRwbsvSB} />
        </p>
        <div className="bilingual">
          <p className="caption" lang="en">
            Fig. 3-4-2: Change in air pressure and volume in the Otto Cycle.
          </p>
          <p className="caption" lang="zh">
            图3-4-2：奥托循环中空气压力与体积的变化。
          </p>
        </div>

        <div className="bilingual">
          <p lang="en">
            The theoretical heat efficiency of the Otto Cycle is mathematically
            represented as:
          </p>
          <p lang="zh">奥托循环的理论热效率可用下式表示：</p>
        </div>

        <p className="image">
          <img alt="" src={i1UYBjxgO41K4b} />
        </p>

        <div className="bilingual">
          <p lang="en">
            As the formula shows, the theoretical efficiency of the Otto Cycle
            differs from that of the Carnot Cycle. It is determined by the
            compression ratio and the specific heat ratio of the working gas,
            rather than by the temperatures of external heat reservoirs. While
            an engine may incorporate many mechanisms and design variations, its
            ideal efficiency in the Otto Cycle depends primarily on these two
            parameters.
          </p>
          <p lang="zh">
            由公式可见，奥托循环的理论效率与卡诺循环不同：它由压缩比与工作气体的比热比决定，而非外部热源温度。发动机尽管可包含多种机构与设计变体，在奥托循环下其理想效率主要取决于这两个参数。
          </p>
        </div>

        <p className="image">
          <img alt="" src={i1RRxErXghx8qEE} />
        </p>
        <div className="bilingual">
          <p className="caption" lang="en">
            Otto cycle sample. BMW brand twin turbo V-8 gasoline engine.
          </p>
          <p className="caption" lang="zh">
            奥托循环示例：BMW 品牌双涡轮 V8 汽油机。
          </p>
        </div>

        <div className="bilingual">
          <p lang="en">
            The thermodynamic cycle of the Atkinson Cycle, which is most often
            used in hybrid cars, is the same as the Otto Cycle. Please see the
            &quot;Tips&quot; in Section 3-7.
          </p>
          <p lang="zh">
            混合动力车中常用的阿特金森循环，其热力学循环与奥托循环相同。请参阅
            3-7 节的「Tips」。
          </p>
        </div>

        <h3 className="section-header bilingual-title"><span lang="en">● Theoretical efficiency of the Diesel Cycle</span><span className="bilingual-sep"> / </span><span lang="zh">柴油循环的理论效率</span></h3>

        <div className="bilingual">
          <p lang="en">
            The Diesel Cycle is the thermodynamic cycle of the diesel engine
            developed by Rudolf Diesel. The four processes of the Diesel Cycle
            are (1) adiabatic compression, (2) constant-pressure heat addition,
            (3) adiabatic expansion and (4) constant-volume heat rejection.
            Constant-pressure heat addition refers to heating the working gas
            within the cylinder while maintaining nearly constant pressure.
          </p>
          <p lang="zh">
            柴油循环是鲁道夫·狄塞尔提出的柴油机热力学循环。其四个过程为：（1）绝热压缩、（2）定压加热、（3）绝热膨胀、（4）定容放热。定压加热指在接近恒压的条件下加热气缸内的工作气体。
          </p>
        </div>

        <p className="image">
          <img alt="" src={i1oChgHWRovTZb} />
        </p>
        <div className="bilingual">
          <p className="caption" lang="en">
            Fig. 3-4-3: Processes of the Diesel Cycle.
          </p>
          <p className="caption" lang="zh">
            图3-4-3：柴油循环过程。
          </p>
        </div>

        <p className="image">
          <img alt="" src={i1fke6hyNNXW3uB} />
        </p>
        <div className="bilingual">
          <p className="caption" lang="en">
            Fig. 3-4-4: Change in air pressure and volume in the Diesel Cycle.
          </p>
          <p className="caption" lang="zh">
            图3-4-4：柴油循环中空气压力与体积的变化。
          </p>
        </div>

        <div className="bilingual">
          <p lang="en">
            The theoretical thermal efficiency can be derived from the formula
            opposite:
          </p>
          <p lang="zh">理论热效率可由下式得出：</p>
        </div>

        <p className="image">
          <img alt="" src={i1F3xA8LZwUgH} />
        </p>

        <div className="bilingual">
          <p lang="en">
            It is determined by three parameters: the compression ratio, the
            specific heat ratio, and the cut-off ratio of fuel injection. To
            approach maximum theoretical efficiency, the processes must be
            carried out slowly so that the cycle remains close to a reversible
            condition. However, heat transfer in processes (2) and (4) occurs
            across finite temperature differences, and is therefore
            irreversible. As a result, the Diesel Cycle is less efficient than
            the Carnot Cycle operating between the same temperature limits.
          </p>
          <p lang="zh">
            它由三个参数决定：压缩比、比热比，以及喷油截止比。要接近最大理论效率，各过程须缓慢进行，使循环接近可逆状态。但（2）与（4）中的热传递跨越有限温度差，因而不可逆。因此，在相同温度界限下，柴油循环的效率低于卡诺循环。
          </p>
        </div>

        <p className="image">
          <img alt="" src={i1K1doYFZunxkuB} />
        </p>
        <div className="bilingual">
          <p className="caption" lang="en">
            Diesel Cycle sample. Mazda&apos;s 2.2-liter diesel engine.
          </p>
          <p className="caption" lang="zh">
            柴油循环示例：马自达 2.2 升柴油机。
          </p>
        </div>

        <div className="bilingual">
          <p lang="en">
            All three cycles—the Carnot Cycle, Otto Cycle and Diesel
            Cycle—represent idealized models and cannot be fully realized in
            practice. In real engines, the slow, quasi-static processes required
            for maximum theoretical efficiency are not compatible with practical
            operation. Also, perfect thermal insulation of the piston and
            cylinder is not achievable, leading to heat losses due to
            temperature differences. Mechanical friction between moving
            components further reduces efficiency. Nevertheless, understanding
            theoretical efficiency helps clarify the fundamental behavior of
            each heat engine and provides engineers with a valuable guiding
            principle.
          </p>
          <p lang="zh">
            卡诺循环、奥托循环与柴油循环三者都是理想化模型，实践中无法完全实现。真实发动机中，达到最大理论效率所需的缓慢准静态过程与实用运转并不相容；活塞与气缸也无法完全绝热，会因温度差产生热损失；运动件之间的机械摩擦还会进一步降低效率。尽管如此，弄清理论效率有助于把握各热机的基本行为，并为工程师提供重要指导原则。
          </p>
        </div>
      </div>
    </div>
  </>
);

export default TheoreticalEfficiencyOfCarEngines;
