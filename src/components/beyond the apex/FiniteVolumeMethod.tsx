import i1OvhHON7g3wyb from "../../assets/images/i1OvhHON7g3wyb.webp";
import i11zk0I49JS5uhB from "../../assets/images/i11zk0I49JS5uhB.webp";
import i1aMB09xarZkKEE from "../../assets/images/i1aMB09xarZkKEE.webp";

const FiniteVolumeMethod = () => (
  <>
    <div className="manual_detail">
      <div className="content_header">
        <h1 className="bilingual-title"><span lang="en">5-2 : Finite Volume Method</span><span className="bilingual-sep"> / </span><span lang="zh">有限体积法</span></h1>
        <h2 className="bilingual-title"><span lang="en">The most widely used fluid simulation technique</span><span className="bilingual-sep"> / </span><span lang="zh">应用最为广泛的流体仿真技术</span></h2>
      </div>
      <div className="body">
        <div className="bilingual">
          <p lang="en">
            While many fluid simulation techniques have been developed, we now introduce one of the most widely used methods: the finite volume method.
          </p>
          <p lang="zh">
            迄今已构想并实际运用多种流体仿真手法，这里介绍目前使用最广的有限体积法。
          </p>
        </div>

        <h3 className="section-header bilingual-title"><span lang="en">● Concept of the finite volume method</span><span className="bilingual-sep"> / </span><span lang="zh">有限体积法的概念</span></h3>

        <div className="bilingual">
          <p lang="en">
            The finite volume method focuses on the balance of quantities flowing into and out of divided space elements. For instance, consider the volume of water flowing into and out of a container. To calculate how much water is in the container one second later, the following relationship can be used:
          </p>
          <p lang="zh">
            有限体积法关注对各划分空间单元流入量与流出量的平衡。例如考虑进出某容器的水量：要从某一瞬间起知道 1 秒后容器内有多少水，可如下计算——
          </p>
        </div>

        <div className="bilingual">
          <p lang="en">
            Volume in a container after 1 second = Original volume + Inflow per second - Outflow per second
          </p>
          <p lang="zh">
            1 秒后容器内的量 = 原有水量 + 每秒流入量 − 每秒流出量
          </p>
        </div>

        <div className="bilingual">
          <p lang="en">
            The basic idea behind the finite volume method is similar to predicting the future volume of water by using the current volume and the amount flowing in and out. This same conservation-based approach can be applied not only to volume, but also to other physical quantities such as mass, momentum, and energy. As a result, variables like pressure and flow velocity can be calculated by tracking their balance within each control volume.
          </p>
          <p lang="zh">
            像这样由当前水量与进出水量预测未来水量，就是有限体积法的基本思路。实际流体仿真中，不仅流体量，压力、流速等物理量也用同样手法计算。
          </p>
        </div>

        <div className="bilingual">
          <p lang="en">
            The approximation (scheme) used in the difference method and the finite volume method is based on the Taylor Expansion. The Taylor Expansion is a technique that represents a smooth function as a series of terms. Although it is not discussed in detail here, it plays a fundamental role in many areas of mathematics, including CFD, and is well worth further study.
          </p>
          <p lang="zh">
            差分法与有限体积法所用的近似（格式）以泰勒展开为依托。泰勒展开可谓用级数展开表现光滑函数的手法。此处不作详述，但它在 CFD 以外也极为重要，有兴趣者建议自行查阅。
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
            图5-2-1：有限体积法的思路。
          </p>
        </div>

        <h3 className="section-header bilingual-title"><span lang="en">● Numerical flux</span><span className="bilingual-sep"> / </span><span lang="zh">数值流束</span></h3>

        <div className="bilingual">
          <p lang="en">
            Let us examine the concept of the finite volume method in more detail through CFD. First, the flow domain is divided into small elements, as shown in Fig. 5-2-2. This discretized space is referred to as a lattice (or mesh, or grid). We then consider fluid flowing through this mesh.
          </p>
          <p lang="zh">
            再顺着实际 CFD，把有限体积法的思路看得更具体些。首先如图5-2-2 把空间细细分割；这样分割的空间称为格子（或网格、mesh）。考虑在这些格子之间流动的流体。
          </p>
        </div>

        <div className="bilingual">
          <p lang="en">
            Assume that the physical quantities within each control volume are known at a given time. The essence of the finite volume method is to predict the values at the next time step by evaluating the fluxes—i.e., the inflow and outflow of those quantities—across the boundaries of each control volume over time.
          </p>
          <p lang="zh">
            先假定某一时刻各格子（空间）所持物理量已知。再根据单位时间流入流出量，由这些信息预测未来各格子的物理量——这就是有限体积法的流体仿真。
          </p>
        </div>

        <div className="bilingual">
          <p lang="en">
            So, how is the inflow and outflow per unit time for each element determined? In CFD, these are estimated by approximating fluxes at the control volume boundaries based on the distribution of the current physical quantities. There are multiple valid approaches to this approximation, meaning the flux is not uniquely defined. The method used to estimate these boundary fluxes is called a numerical flux, and its formulation has a significant impact on the accuracy and stability of the simulation.
          </p>
          <p lang="zh">
            那么各格子单位时间的流入流出量如何决定？其实须由做 CFD 者根据当前物理量分布，用某种方法推测（近似）出看似合理的值。亦即决定方法有选择余地，单位时间流入流出量并非唯一。这样带有人为选择余地的单位时间流入流出物理量称为数值流束，其精度会大大左右计算结果精度。
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
            图5-2-2：进出格子的数值流束。
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
