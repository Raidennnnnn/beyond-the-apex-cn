import i1ZBZFXSnAxQidB from "../../assets/images/i1ZBZFXSnAxQidB.webp";
import i1O1mnTLXb0nW from "../../assets/images/i1O1mnTLXb0nW.webp";
import i1Mo4GRTkubKpSH from "../../assets/images/i1Mo4GRTkubKpSH.webp";
import i16ai9QsP29Jo from "../../assets/images/i16ai9QsP29Jo.webp";

const SolvingTurbulence = () => (
  <>
    <div className="manual_detail">
      <div className="content_header">
        <h1>5-5 : Solving Turbulence / 求解湍流</h1>
        <h2>
          Method of reducing computational complexity / 降低计算复杂度的方法
        </h2>
      </div>
      <div className="body">
        <h3 className="section-header">● Solving vortexes / 求解涡旋</h3>

        <div className="bilingual">
          <p lang="en">
            When a vehicle is in motion, turbulence is generated around it. Turbulence consists of a wide range of vortices, from large energy-containing structures to very small dissipative ones. To resolve even a simple vortex numerically, multiple grid elements are required, as illustrated in Fig. 5-5-1. Therefore, directly resolving all vortical structures in a turbulent flow demands an extremely large number of elements. 
            <br />
            <br />
            For example, attempting to directly compute all turbulent scales around a vehicle traveling at 100 km/h would require on the order of 10¹³ grid elements—approximately ten trillion. While such calculations may be theoretically possible with advanced supercomputers, they are generally impractical for real-world automotive engineering applications.
          </p>
          <p lang="zh">
            车辆运动时，其周围会产生湍流。湍流由尺度各异的涡旋构成，从大尺度含能结构到极小的耗散结构皆有。如图5-5-1 所示，即使数值分辨一个简单涡旋，也需要多个网格单元。因此，直接分辨湍流中全部涡旋结构需要极其庞大的单元数量。
            <br />
            <br />
            例如，试图直接计算时速 100 km 车辆周围所有湍流尺度，约需 10¹³ 个网格单元——即约十万亿个。虽借助先进超级计算机在理论上或许可行，但对实际汽车工程应用而言通常不切实际。
          </p>
        </div>

        <p className="image">
          <img alt="" src={i1ZBZFXSnAxQidB} />
        </p>
        <div className="bilingual">
          <p className="caption" lang="en">
            Fig. 5-5-1 To resolve two-dimensional vortexes, a minimum of nine lattice elements will be necessary
          </p>
          <p className="caption" lang="zh">
            图5-5-1：要分辨二维涡旋，至少需要九个格点单元。
          </p>
        </div>

        <p className="image">
          <img alt="" src={i1O1mnTLXb0nW} />
        </p>
        <div className="bilingual">
          <p className="caption" lang="en">
            Fig. 5-5-2 The relationship between turbulence and air vortexes
          </p>
          <p className="caption" lang="zh">
            图5-5-2：湍流与空气涡旋的关系。
          </p>
        </div>

        <h3 className="section-header">● Turbulence model / 湍流模型</h3>

        <div className="bilingual">
          <p lang="en">
            In fluid mechanics, modeling the characteristics of turbulence has been essential to advancing our understanding of its behavior. While turbulent motion is governed by the Navier–Stokes Equations, obtaining a complete, exact solution for all scales of turbulence is not feasible in practice. As a result, efforts have focused on modeling key features of turbulence, with considerable success. In practical CFD applications, these simplified turbulence models are introduced to avoid resolving every vortex, both large and small, thereby significantly reducing computational cost. Two of the most widely used approaches are the Reynolds-Averaged Navier-Stokes (RANS) method and the Large Eddy Simulation (LES) method.
          </p>
          <p lang="zh">
            在流体力学中，对湍流特性建模对于深化对其行为的理解至关重要。湍流运动虽由 Navier–Stokes 方程支配，但实践中无法获得涵盖所有尺度的完整精确解。因此，学界长期致力于对湍流关键特征建模，并已取得显著成效。在实际 CFD 应用中，引入这些简化湍流模型，以避免分辨大小各样的每一个涡旋，从而大幅降低计算成本。应用最广的两种方法是雷诺平均 Navier–Stokes（RANS）法与大涡模拟（LES）法。
          </p>
        </div>

        <div className="bilingual">
          <p lang="en">
            Not using a turbulence model and instead directly solving the governing fluid equations is called Direct Numerical Simulation (DNS). In DNS, all scales of turbulence—from the largest eddies to the smallest dissipative structures—are fully resolved. However, as noted earlier, achieving this requires extremely fine spatial resolution. In addition, time must also be discretized with very small time steps to accurately capture the evolution of these flow structures. As a result, the computational cost becomes extraordinarily high.
          </p>
          <p lang="zh">
            不使用湍流模型、直接求解流体控制方程的做法称为直接数值模拟（Direct Numerical Simulation，DNS）。在 DNS 中，湍流的所有尺度——从最大涡旋到最小耗散结构——均被完全分辨。然而，如前所述，实现这一点需要极细的空间分辨率。此外，时间亦须以极小时间步离散，方能准确捕捉这些流动结构的演化。因此，计算成本变得极其高昂。
          </p>
        </div>

        <h3 className="section-header">● RANS (Reynolds Averaged Navier-Stokes) / RANS（Reynolds Averaged Navier-Stokes，雷诺平均 Navier–Stokes）</h3>

        <div className="bilingual">
          <p lang="en">
            RANS is a turbulence modeling approach that represents the flow using time-averaged quantities. In this formulation, the flow variables are decomposed into a mean component and a fluctuating component, and the effects of turbulence are modeled through additional terms (Reynolds stresses). Because RANS solves only the averaged flow, its computational cost is relatively low, making it the most widely used approach in engineering applications. However, it has limitations, including difficulty in accurately predicting complex flow phenomena such as separation, strong unsteadiness, and certain turbulent structures. 
            <br />
          </p>
          <p lang="zh">
            RANS 是一种以时间平均量表示流动的湍流建模方法。在此表述中，流动变量分解为平均分量与脉动分量，湍流效应通过附加项（雷诺应力）建模。由于 RANS 只求解平均流动，计算成本相对较低，是工程应用中最为广泛的方法。但其局限包括难以准确预测分离、强非定常及某些湍流结构等复杂流动现象。
          </p>
        </div>

        <p className="image">
          <img alt="" src={i1Mo4GRTkubKpSH} />
        </p>
        <div className="bilingual">
          <p className="caption" lang="en">
            Fig. 5-5-3 RANS
          </p>
          <p className="caption" lang="zh">
            图5-5-3：RANS
          </p>
        </div>

        <h3 className="section-header">● LES (Large Eddy Simulation) / LES（Large Eddy Simulation，大涡模拟）</h3>

        <div className="bilingual">
          <p lang="en">
            In turbulent flow, the larger vortices carry most of the energy and have the greatest influence on the overall flow field, while smaller vortices play a more dissipative role. If the large vortices are resolved directly and the smaller ones are modeled, this approach is known as LES. LES explicitly calculates the large-scale turbulent structures, while modeling the effects of the smaller scales (subgrid scales). Because of this, LES can capture unsteady and complex flow features with much higher accuracy than RANS. However, this increased fidelity comes at the cost of significantly greater computational requirements.
          </p>
          <p lang="zh">
            在湍流中，较大涡旋承载大部分能量，对整体流场影响最大，较小涡旋则更多起耗散作用。若直接分辨大涡旋、对小涡旋建模，此法即称为 LES。LES 显式计算大尺度湍流结构，并对较小尺度（亚格子尺度）的效应建模。因此，LES 能以远高于 RANS 的精度捕捉非定常与复杂流动特征，但更高的保真度也意味着显著更大的计算需求。
          </p>
        </div>

        <p className="image">
          <img alt="" src={i16ai9QsP29Jo} />
        </p>
        <div className="bilingual">
          <p className="caption" lang="en">
            Fig. 5-5-4
          </p>
          <p className="caption" lang="zh">
            图5-5-4
          </p>
        </div>
      </div>
    </div>
  </>
);

export default SolvingTurbulence;
