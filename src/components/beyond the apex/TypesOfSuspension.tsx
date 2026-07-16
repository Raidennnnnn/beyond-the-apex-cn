import i1EYd8bCAKtON from "../../assets/images/i1EYd8bCAKtON.webp";
import i1GkJdRoNg13rb from "../../assets/images/i1GkJdRoNg13rb.webp";
import i1H1V4Qp2mfp0EE from "../../assets/images/i1H1V4Qp2mfp0EE.webp";
import i1iotopPPMdWKcE from "../../assets/images/i1iotopPPMdWKcE.webp";
import i1nMt233hSG6H from "../../assets/images/i1nMt233hSG6H.webp";

const TypesOfSuspension = () => (
  <>
    <div className="manual_detail">
      <div className="content_header">
        <h1>Types of Suspension / 悬架类型</h1>
      </div>
      <div className="body">
        <div className="bilingual">
          <p lang="en">
            While all suspension systems serve the same basic functions—supporting the vehicle and absorbing bumps and load changes—each type has its own characteristics. These differences affect performance in areas such as cornering, controllability and ride comfort.
            <br />
            <br />
            Suspension design continues to evolve, but complexity does not always mean better performance. The need to respond quickly to road irregularities and maintain consistent tire contact has led to increasingly sophisticated solutions.
          </p>
          <p lang="zh">
            各类悬架基本功能相同——支撑车身、吸收冲击、控制车轮——但结构不同，特性各异。
          </p>
        </div>

        <h3>
          Rigid Axle / 非独立（刚性）车轴
        </h3>

        <div className="bilingual">
          <p lang="en">
            In a rigid axle suspension, the left and right wheels are connected by a single axle, so movement on one side affects the other, which can reduce tire contact with the road. The axle and housing are heavy, increasing unsprung mass. However, because it is simple, strong and inexpensive to produce, rigid axle suspension is often used for the rear suspension of rear-wheel-drive vehicles.
          </p>
          <p lang="zh">
            左右轮由一根刚性车轴连接，一侧运动会影响另一侧。结构简单成本低，多用于卡车与部分越野车；弯道左右轮相互牵制，操控精度较低。
          </p>
        </div>

        <p className="image">
          <img alt="" src={i1EYd8bCAKtON} />
        </p>

        <h3>
          Independent Suspension / 独立悬架
        </h3>

        <div className="bilingual">
          <p lang="en">
            Independent suspension allows the left and right wheels to move up and down individually, making it well suited to handling bumps and uneven road surfaces. In rear-wheel-drive cars, it also helps maintain consistent tire contact, improving traction at each wheel. The result is a balance of stability and ride comfort.
          </p>
          <p lang="zh">
            左右轮可独立上下运动，互少干扰，弯道接地与舒适性更好，现代乘用车主流。
          </p>
        </div>

        <p className="image">
          <img alt="" src={i1iotopPPMdWKcE} />
        </p>

        <h3 className="section-header">
          ● Independent Suspension – The System of Choice for Most Sports Cars / ● 独立悬架——多数运动车首选
        </h3>

        <h3>
          MacPherson Strut / 麦弗逊支柱
        </h3>

        <div className="bilingual">
          <p lang="en">
            This is a simple suspension layout consisting of a spring, damper and lower control arm. The “strut” refers to the damper assembly, which also serves as a structural member. The upper section mounts to the body through a rubber insulator, while the lower portion connects to the suspension arm. With fewer components, it is compact and space-efficient, and its long stroke allows it to absorb a wide range of road inputs. The system was developed by Earle S. MacPherson, for whom it is named.
          </p>
          <p lang="zh">
            弹簧、减振器与下控制臂组成的简单布局。成本低、占空间小，广泛用于前悬架。
          </p>
        </div>

        <p className="image">
          <img alt="" src={i1GkJdRoNg13rb} />
        </p>

        <h3>
          Double Wishbone / 双叉臂
        </h3>

        <div className="bilingual">
          <p lang="en">
            This is a design that supports the wheels with upper and lower control arms. The arms are typically shaped like a V, resembling a bird’s wishbone. Depending on their geometry and the car’s layout, they can effectively control changes in wheel alignment during acceleration and cornering. This allows for precise handling, making it a popular choice for sports cars that prioritize control and stability. However, it is more complex, uses more components, and requires more space.
          </p>
          <p lang="zh">
            上下控制臂支撑车轮，几何设计自由度高，运动性能好，跑车与高性能车常见。
          </p>
        </div>

        <p className="image">
          <img alt="" src={i1H1V4Qp2mfp0EE} />
        </p>

        <h3>
          Multi-Link / 多连杆
        </h3>

        <div className="bilingual">
          <p lang="en">
            This is an advanced layout that uses three to five separate arms to control wheel position. Because each link operates independently, the system allows a high degree of tuning freedom and precise control of wheel alignment. The additional links help manage forces in multiple directions, improving tire contact with the road. This type of suspension is often used for the rear of high-performance front-wheel-drive cars to enhance stability at speed, and in high-output rear-wheel-drive cars to improve traction.
          </p>
          <p lang="zh">
            用3～5根连杆精细控制车轮运动，调校自由度最高，舒适与操控可兼顾，高端车常见。
          </p>
        </div>

        <p className="image">
          <img alt="" src={i1nMt233hSG6H} />
        </p>
      </div>
    </div>
  </>
);

export default TypesOfSuspension;
