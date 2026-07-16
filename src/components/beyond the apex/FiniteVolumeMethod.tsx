import i1OvhHON7g3wyb from "../../assets/images/i1OvhHON7g3wyb.webp";
import i11zk0I49JS5uhB from "../../assets/images/i11zk0I49JS5uhB.webp";
import i1aMB09xarZkKEE from "../../assets/images/i1aMB09xarZkKEE.webp";

const FiniteVolumeMethod = () => (
  <>
    <div className="manual_detail">
      <div className="content_header">
        <h1>5-2 : Finite Volume Method / 有限体积法</h1>
        <h2>
          The most widely used fluid simulation technique / 应用最为广泛的流体仿真技术
        </h2>
      </div>
      <div className="body">
        <div className="bilingual">
          <p lang="en">
            While many fluid simulation techniques have been developed, we now introduce one of the most widely used methods: the finite volume method.
          </p>
          <p lang="zh">
            虽已发展出多种流体仿真技术，此处介绍其中应用最为广泛的一种：有限体积法。
          </p>
        </div>

        <h3 className="section-header">● Concept of the finite volume method / 有限体积法的概念</h3>

        <div className="bilingual">
          <p lang="en">
            The finite volume method focuses on the balance of quantities flowing into and out of divided space elements. For instance, consider the volume of water flowing into and out of a container. To calculate how much water is in the container one second later, the following relationship can be used:
          </p>
          <p lang="zh">
            有限体积法关注流入与流出各划分空间单元的物理量平衡。例如，考虑流入与流出某容器的水量。要计算一秒后容器内有多少水，可使用下列关系：
          </p>
        </div>

        <div className="bilingual">
          <p lang="en">
            Volume in a container after 1 second = Original volume + Inflow per second - Outflow per second
          </p>
          <p lang="zh">
            一秒后容器内体积 = 原有体积 + 每秒流入量 − 每秒流出量
          </p>
        </div>

        <div className="bilingual">
          <p lang="en">
            The basic idea behind the finite volume method is similar to predicting the future volume of water by using the current volume and the amount flowing in and out. This same conservation-based approach can be applied not only to volume, but also to other physical quantities such as mass, momentum, and energy. As a result, variables like pressure and flow velocity can be calculated by tracking their balance within each control volume.
          </p>
          <p lang="zh">
            有限体积法的基本思想与此类似：依据当前水量及进出流量预测未来水量。这种基于守恒的做法不仅适用于体积，也可用于质量、动量、能量等其他物理量。于是，可通过追踪各控制体内的平衡来计算压力、流速等变量。
          </p>
        </div>

        <div className="bilingual">
          <p lang="en">
            The approximation (scheme) used in the difference method and the finite volume method is based on the Taylor Expansion. The Taylor Expansion is a technique that represents a smooth function as a series of terms. Although it is not discussed in detail here, it plays a fundamental role in many areas of mathematics, including CFD, and is well worth further study.
          </p>
          <p lang="zh">
            差分法与有限体积法所用的近似（格式）以泰勒展开为基础。泰勒展开是将光滑函数表示为级数项的技术。虽不在此详述，它在包括 CFD 在内的诸多数学领域中都起基础性作用，值得进一步学习。
          </p>
        </div>

        <p className="image">
          <img alt="" src={i1OvhHON7g3wyb} />
        </p>
        <div className="bilingual">
          <p className="caption" lang="en">
            Fig. 5-2-1: Concept of the finite volume method.
          </p>
          <p className="caption" lang="zh">
            图5-2-1：有限体积法的概念。
          </p>
        </div>

        <h3 className="section-header">● Numerical flux / 数值流束</h3>

        <div className="bilingual">
          <p lang="en">
            Let us examine the concept of the finite volume method in more detail through CFD. First, the flow domain is divided into small elements, as shown in Fig. 5-2-2. This discretized space is referred to as a lattice (or mesh, or grid). We then consider fluid flowing through this mesh. 
            <br />
            <br />
            Assume that the physical quantities within each control volume are known at a given time. The essence of the finite volume method is to predict the values at the next time step by evaluating the fluxes—i.e., the inflow and outflow of those quantities—across the boundaries of each control volume over time. 
            <br />
            <br />
            So, how is the inflow and outflow per unit time for each element determined? In CFD, these are estimated by approximating fluxes at the control volume boundaries based on the distribution of the current physical quantities. There are multiple valid approaches to this approximation, meaning the flux is not uniquely defined. The method used to estimate these boundary fluxes is called a numerical flux, and its formulation has a significant impact on the accuracy and stability of the simulation.
          </p>
          <p lang="zh">
            下面通过 CFD 更具体地考察有限体积法的概念。首先，如图5-2-2 所示，将流动区域划分为细小单元。这种离散化空间称为格点（或称网格、栅格）。继而考虑流经该网格的流体。
            <br />
            <br />
            假定各控制体在某一时刻的物理量已知。有限体积法的本质，是通过评估各控制体边界上随时间变化的通量——即这些物理量的流入与流出——来预测下一时间步的值。
            <br />
            <br />
            那么，各单元单位时间内的流入与流出如何确定？在 CFD 中，这些量依据当前物理量的分布，对控制体边界上的通量作近似估算。此类近似有多种有效途径，因而通量并非唯一确定。用于估算这些边界通量的方法称为数值流束，其构造对仿真的精度与稳定性有重大影响。
          </p>
        </div>

        <p className="image">
          <img alt="" src={i11zk0I49JS5uhB} />
        </p>
        <div className="bilingual">
          <p className="caption" lang="en">
            Fig. 5-2-2: Numerical flux going in and out of the element.
          </p>
          <p className="caption" lang="zh">
            图5-2-2：进出单元的数值流束。
          </p>
        </div>

        <p className="image">
          <img alt="" src={i1aMB09xarZkKEE} />
        </p>
        <div className="bilingual">
          <p className="caption" lang="en">
            Fig. 5-2-3: Flow field around the rear wing of a race car.
          </p>
          <p className="caption" lang="zh">
            图5-2-3：赛车尾翼周围的流场。
          </p>
        </div>
      </div>
    </div>
  </>
);

export default FiniteVolumeMethod;
