import i1ZBZFXSnAxQidB from "../../assets/images/i1ZBZFXSnAxQidB.webp";
import i1O1mnTLXb0nW from "../../assets/images/i1O1mnTLXb0nW.webp";
import i1Mo4GRTkubKpSH from "../../assets/images/i1Mo4GRTkubKpSH.webp";
import i16ai9QsP29Jo from "../../assets/images/i16ai9QsP29Jo.webp";

const SolvingTurbulence = () => (
  <>
    <div className="manual_detail">
      <div className="content_header">
        <h1 className="bilingual-title"><span lang="en">5-5 : Solving Turbulence</span><span className="bilingual-sep"> / </span><span lang="zh">求解湍流</span></h1>
        <h2 className="bilingual-title"><span lang="en">Method of reducing computational complexity</span><span className="bilingual-sep"> / </span><span lang="zh">降低计算复杂度的方法</span></h2>
      </div>
      <div className="body">
        <h3 className="section-header bilingual-title"><span lang="en">● Solving vortexes</span><span className="bilingual-sep"> / </span><span lang="zh">求解涡旋</span></h3>

        <div className="bilingual">
          <p lang="en">
            When a vehicle is in motion, turbulence is generated around it. Turbulence consists of a wide range of vortices, from large energy-containing structures to very small dissipative ones. To resolve even a simple vortex numerically, multiple grid elements are required, as illustrated in Fig. 5-5-1. Therefore, directly resolving all vortical structures in a turbulent flow demands an extremely large number of elements.
          </p>
          <p lang="zh">
            汽车行驶时周围会产生湍流。湍流由大小各异的空气涡构成；即便再简单的涡，要计算一个也至少需要如图5-5-1 的 9 个格子。若要直接计算车周围全部涡，所需格子数量之巨不难想象。
          </p>
        </div>

        <div className="bilingual">
          <p lang="en">
            For example, attempting to directly compute all turbulent scales around a vehicle traveling at 100 km/h would require on the order of 10¹³ grid elements—approximately ten trillion. While such calculations may be theoretically possible with advanced supercomputers, they are generally impractical for real-world automotive engineering applications.
          </p>
          <p lang="zh">
            例如，要解出以 100 km/h 行驶的汽车周围湍流所含全部涡，估计至少需要 10¹³ 个、亦即 10 万亿个格子。若能自由使用世界顶尖超级计算机另当别论，在实际汽车开发现场做如此规模的计算现实上行不通。
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
            图5-5-1：要分辨二维涡，至少需要 9 个格子。
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
            图5-5-2：湍流与涡的关系。
          </p>
        </div>

        <h3 className="section-header bilingual-title"><span lang="en">● Turbulence model</span><span className="bilingual-sep"> / </span><span lang="zh">湍流模型</span></h3>

        <div className="bilingual">
          <p lang="en">
            In fluid mechanics, modeling the characteristics of turbulence has been essential to advancing our understanding of its behavior. While turbulent motion is governed by the Navier–Stokes Equations, obtaining a complete, exact solution for all scales of turbulence is not feasible in practice. As a result, efforts have focused on modeling key features of turbulence, with considerable success. In practical CFD applications, these simplified turbulence models are introduced to avoid resolving every vortex, both large and small, thereby significantly reducing computational cost. Two of the most widely used approaches are the Reynolds-Averaged Navier-Stokes (RANS) method and the Large Eddy Simulation (LES) method.
          </p>
          <p lang="zh">
            湍流运动由纳维–斯托克斯方程表达，但完全求解不可能；因此长期以来通过模型化湍流若干特征性质来理解湍流，并已取得成果。把这些成果为基础的湍流模型引入 CFD，便可放弃解出大小全部涡，只计算其特征部分，以减少计算量。这里介绍目前使用最广的 RANS 与 LES 湍流模型。
          </p>
        </div>

        <div className="bilingual">
          <p lang="en">
            Not using a turbulence model and instead directly solving the governing fluid equations is called Direct Numerical Simulation (DNS). In DNS, all scales of turbulence—from the largest eddies to the smallest dissipative structures—are fully resolved. However, as noted earlier, achieving this requires extremely fine spatial resolution. In addition, time must also be discretized with very small time steps to accurately capture the evolution of these flow structures. As a result, the computational cost becomes extraordinarily high.
          </p>
          <p lang="zh">
            不使用湍流模型而直接求解流体方程称为 DNS（Direct Numerical Simulation）。但如开篇所述，完美 DNS 须把空间刻得非常细；而且时间步还须比空间更细，因而需要极其庞大的计算量。
          </p>
        </div>

        <h3 className="section-header bilingual-title"><span lang="en">● RANS (Reynolds Averaged Navier-Stokes)</span><span className="bilingual-sep"> / </span><span lang="zh">RANS（Reynolds Averaged Navier-Stokes，雷诺平均 Navier–Stokes）</span></h3>

        <div className="bilingual">
          <p lang="en">
            RANS is a turbulence modeling approach that represents the flow using time-averaged quantities. In this formulation, the flow variables are decomposed into a mean component and a fluctuating component, and the effects of turbulence are modeled through additional terms (Reynolds stresses). Because RANS solves only the averaged flow, its computational cost is relatively low, making it the most widely used approach in engineering applications. However, it has limitations, including difficulty in accurately predicting complex flow phenomena such as separation, strong unsteadiness, and certain turbulent structures.
          </p>
          <p lang="zh">
            RANS 是把湍流流速分为平均流速与相对其的变动分量的湍流模型。计算量相对较少，是使用最广的湍流模型；但无法再现非定常流动细节，也难以准确估计分离等，是其缺点。
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

        <h3 className="section-header bilingual-title"><span lang="en">● LES (Large Eddy Simulation)</span><span className="bilingual-sep"> / </span><span lang="zh">LES（Large Eddy Simulation，大涡模拟）</span></h3>

        <div className="bilingual">
          <p lang="en">
            In turbulent flow, the larger vortices carry most of the energy and have the greatest influence on the overall flow field, while smaller vortices play a more dissipative role. If the large vortices are resolved directly and the smaller ones are modeled, this approach is known as LES. LES explicitly calculates the large-scale turbulent structures, while modeling the effects of the smaller scales (subgrid scales). Because of this, LES can capture unsteady and complex flow features with much higher accuracy than RANS. However, this increased fidelity comes at the cost of significantly greater computational requirements.
          </p>
          <p lang="zh">
            在湍流中，具支配性影响的是大涡，越小的涡对整体流场影响越弱。于是放弃直接解小涡、只直接计算大涡并对小涡建模的手法称为 LES。LES 能以远高于 RANS 的精度再现流场，但计算量也远大于 RANS。
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
